require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");
const userAuthRouter = require("./routes/userAuth");
const notesRouter = require("./routes/notesRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);

// CORS config matching AlgoJudge_2 but supporting both 5174 and 5173
app.use(
  cors({
    // origin: ["http://localhost:5174", "http://localhost:5173"],
    origin: "https://uninotes-frontend.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/user", userAuthRouter);
app.use("/notes", notesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const start = async () => {
  try {
    await connectDB();

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err.message);
    process.exit(1);
  }
};

start();
