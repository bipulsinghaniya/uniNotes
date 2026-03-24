
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
    origin: function (origin, callback) {
      const allowedOrigins = [
        // "http://localhost:5173",
        "https://uninotes-frontend.onrender.com",
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.options(/.*/, cors());


// Other middleware
app.use(express.json());
app.use(cookieParser());



// API Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not foundddddd" });
});

module.exports = app;