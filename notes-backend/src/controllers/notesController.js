const Note = require("../models/note");

const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      ...req.body,
      uploadedBy: req.user._id
    });
    res.status(201).send(note);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getNotes = async (req, res) => {
  const notes = await Note.find(req.query);
  res.send(notes);
};

const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.send("Deleted");
};

module.exports = { createNote, getNotes, deleteNote };
