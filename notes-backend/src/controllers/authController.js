

// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const redisClient = require("../config/redis");
// const validate = require("../utils/validator");

// const register = async (req, res) => {
//   try {
//     validate(req.body);

//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(400).send("Email already registered");
//     }

//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     await User.create(req.body);

//     res.status(201).send("Registered successfully");
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).send("Email already registered");
//     }
//     res.status(400).send(err.message || "Registration failed");
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) throw new Error("Invalid Credentials");

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) throw new Error("Invalid Credentials");

//     const token = jwt.sign(
//       { _id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     // ✅ Cookie for localhost dev
//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//       secure: false,
//       maxAge: 60 * 60 * 1000,
//     });

//     res.send({
//       message: "Logged In",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     res.status(401).send(err.message);
//   }
// };

// const logout = async (req, res) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.send("Logged Out");
//   }

//   const payload = jwt.decode(token);

//   await redisClient.set(`token:${token}`, "blocked");
//   await redisClient.expireAt(`token:${token}`, payload.exp);

//   res.clearCookie("token", {
//     httpOnly: true,
//     sameSite: "lax",
//     secure: false,
//   });

//   res.send("Logged Out");
// };

// module.exports = { register, login, logout };





const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const validate = require("../utils/validator");

const isProduction = process.env.NODE_ENV === "production";

/* =========================
   REGISTER
========================= */
const register = async (req, res) => {
  try {
    validate(req.body);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    await User.create(req.body);

    res.status(201).send("Registered successfully");
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send("Email already registered");
    }
    res.status(400).send(err.message || "Registration failed");
  }
};

/* =========================
   LOGIN
========================= */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid Credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid Credentials");

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
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

/* =========================
   LOGOUT
========================= */
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

module.exports = { register, login, logout };
