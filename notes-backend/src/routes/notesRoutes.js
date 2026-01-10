const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const userMiddleware = require("../middleware/userMiddleware");
const { createNote, getNotes, deleteNote } = require("../controllers/notesController");

router.post("/create", adminMiddleware, createNote);
router.get("/all", userMiddleware, getNotes);
router.delete("/delete/:id", adminMiddleware, deleteNote);

module.exports = router;
