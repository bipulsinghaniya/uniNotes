require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");

const start = async () => {
  await connectDB();
  await redisClient.connect();
  app.listen(process.env.PORT, () =>
    console.log("🚀 Server running on port " + process.env.PORT)
  );
};

start();
