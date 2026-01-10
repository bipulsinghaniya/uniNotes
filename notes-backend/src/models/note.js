const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  course: String,
  year: Number,
  semester: Number,
  subject: String,
  chapter: String,
  title: String,
  driveLink: String,
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
}, { timestamps: true });

module.exports = mongoose.model("note", noteSchema);
