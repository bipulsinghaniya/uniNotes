const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());

/* ================================
   🔥 SERVE FRONTEND (IMPORTANT)
   ================================ */
app.use(
  express.static(
    path.join(__dirname, "../../notes-frontend/dist")
  )
);

/* ================================
   API ROUTES
   ================================ */
app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

/* ================================
   🔥 REACT FALLBACK
   ================================ */
app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../../notes-frontend/dist/index.html"
    )
  );
});

module.exports = app;
