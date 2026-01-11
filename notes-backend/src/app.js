// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const app = express();
// app.set("trust proxy", 1);
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "https://uni-notes-eta.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.options("*", cors());


// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;





// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();
// app.set("trust proxy", 1);

// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: "https://uni-notes-eta.vercel.app",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;




// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// app.set("trust proxy", 1);

// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//   origin: "https://uni-notes-eta.vercel.app",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// };

// app.use(cors(corsOptions));

// // 🔴 THIS WAS THE REAL BUG
// app.options("*", cors(corsOptions));

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;





const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("trust proxy", 1);

const corsOptions = {
  origin: "https://uni-notes-eta.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

// 🔴 FORCE PREFLIGHT RESPONSE (THIS IS THE FIX)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://uni-notes-eta.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;
