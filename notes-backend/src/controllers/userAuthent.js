const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const validate = require("../utils/validator");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const isProduction = process.env.NODE_ENV === "production";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid Credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid Credentials");

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET || process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 60 * 60 * 1000,
    });

    res.send({
      message: "Logged In",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

const logout = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.send("Logged Out");
    }

    const payload = jwt.decode(token);

    await redisClient.set(`token:${token}`, "blocked");
    await redisClient.expireAt(`token:${token}`, payload.exp);

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    });

    res.send("Logged Out");
  } catch (err) {
    res.status(400).send("Logout failed");
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
      });
    }

    const cooldown = await redisClient.get(`otp_cooldown:${email}`);
    if (cooldown) {
      return res.status(400).json({
        message: "Please wait 30 seconds before requesting again",
      });
    }

    await redisClient.set(`otp_cooldown:${email}`, "1", { EX: 30 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await redisClient.set(
      `otp:${email}`,
      JSON.stringify({
        name,
        email,
        hashedPassword,
        otp,
      }),
      { EX: 600 }
    );

    console.log("✅ OTP stored:", otp);

    await sendEmail({
      email,
      subject: "Verify your email - UniNotes",
      html: `
        <div style="font-family:sans-serif; max-width:400px; margin:auto; padding:20px;">
          <h2>Email Verification</h2>
          <p>Your OTP is:</p>
          <h1 style="text-align:center;">${otp}</h1>
          <p>This OTP is valid for 10 minutes.</p>
        </div>
      `,
    });

    res.status(200).json({
      message: "OTP sent to your email",
    });

  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({
      message: "Registration failed",
    });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const data = await redisClient.get(`otp:${email}`);

    if (!data) {
      return res.status(400).json({
        message: "OTP expired or not found",
      });
    }

    const parsed = JSON.parse(data);

    if (parsed.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    const user = await User.create({
      name: parsed.name,
      email: parsed.email,
      password: parsed.hashedPassword,
    });

    await redisClient.del(`otp:${email}`);

    res.status(201).json({
      message: "Account created successfully",
      userId: user._id,
    });

  } catch (err) {
    console.error("❌ Verify OTP Error:", err);
    res.status(500).json({
      message: "Verification failed",
    });
  }
};

module.exports = {
  login,
  logout,
  register,
  verifyOtp
};
