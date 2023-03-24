// models/Week.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Day = require("./Day");

const Week = new Schema(
  {
    weekNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      max: 52,
    },
    days: [Day],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Week || mongoose.model("Week", Week);
