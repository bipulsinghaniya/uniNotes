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

/* ======================
   CORS CONFIG - MUST BE FIRST
====================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://uninotes-frontend.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
   allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// Other middleware
app.use(express.json());
app.use(cookieParser());

/* ======================
   ROUTES
====================== */
app.get("/test", (req, res) => {
  console.log("✅ /test endpoint hit");
  res.send("API WORKING");
});

app.options("*", cors());


// API Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;