const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("No Token");

    const blocked = await redisClient.exists(`token:${token}`);
    if (blocked) throw new Error("Token Blocked");

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload._id);
    if (!user) throw new Error("User Not Found");

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
};
