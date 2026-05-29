const express = require("express");
const router = express.Router();
const { register, login, logout, verifyOtp } = require("../controllers/userAuthent");
const userMiddleware = require("../middleware/userMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", userMiddleware, logout);
router.post("/verify-otp", verifyOtp);

router.get("/check", userMiddleware, (req, res) => {
  const reply = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
  };
  res.status(200).json({
    user: reply,
    message: "Valid User"
  });
});

module.exports = router;
