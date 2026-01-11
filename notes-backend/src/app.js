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
};

/* ✅ MUST BE BEFORE ROUTES */
app.use(cors(corsOptions));

/* ✅ THIS LINE IS THE FIX */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://uni-notes-eta.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;
