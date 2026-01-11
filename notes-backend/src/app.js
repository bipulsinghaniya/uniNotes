// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cookieParser());

// /* ✅ Simple CORS (allow frontend dev server) */
// app.use(cors({
//   origin: true,        // allow any origin (DEV ONLY)
//   credentials: true,
// }));

// /* API routes only */
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;


const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());

/* ======================
   CORS CONFIG (IMPORTANT)
====================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://uninotes-frontend.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔴 THIS LINE IS MANDATORY (preflight fix)
app.options("*", cors({
  origin: [
    "http://localhost:5173",
    "https://uninotes-frontend.onrender.com",
  ],
  credentials: true,
}));

/* ======================
   API ROUTES
====================== */
app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;


