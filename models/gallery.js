const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallery", GallerySchema);
