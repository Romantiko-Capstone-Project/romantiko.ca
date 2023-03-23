const mongoose = require("mongoose");

const Gallery = new mongoose.Schema(
  {
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Gallery || mongoose.model("Gallery", Gallery);
