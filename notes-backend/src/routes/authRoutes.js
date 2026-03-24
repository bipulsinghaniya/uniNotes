const express = require("express");
const router = express.Router();
const { register, login, logout, verifyOtp } = require("../controllers/authController");
const userMiddleware = require("../middleware/userMiddleware");


router.post("/register", register);
router.post("/login", login);
router.post("/logout", userMiddleware, logout);
router.post("/verify-otp", verifyOtp);

module.exports = router;
