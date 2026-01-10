const userMiddleware = require("./userMiddleware");

module.exports = async (req, res, next) => {
  await userMiddleware(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).send("Admin Only");
    }
    next();
  });
};
