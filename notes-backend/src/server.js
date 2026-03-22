require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");

const PORT = process.env.PORT || 5000;


const start = async () => {
  try {
    await connectDB();

    if (!redisClient.isOpen) {
      await redisClient.connect();
      console.log("✅ Redis connected");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server failed to start:", err.message);
    process.exit(1);
  }
};

start();




