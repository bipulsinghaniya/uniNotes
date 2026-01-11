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


const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://uni-notes-eta.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// ✅ REQUIRED FOR PREFLIGHT
app.options("*", cors());

app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;
