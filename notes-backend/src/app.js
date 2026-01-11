// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// app.set("trust proxy", 1);
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//   origin: "https://uni-notes-eta.vercel.app",
//   credentials: true,
// };

// app.use(cors(corsOptions));

// // 🔥 IMPORTANT: explicitly handle preflight for API routes
// app.options("/auth/*", cors(corsOptions));
// app.options("/notes/*", cors(corsOptions));

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;

// src/app.js

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.set("trust proxy", 1);

const corsOptions = {
  origin: "https://uni-notes-eta.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

/* 🔥 MUST BE FIRST */
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;
