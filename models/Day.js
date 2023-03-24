// models/Day.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TimeSlot = require("./TimeSlot");

const Day = new Schema({
  day: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    required: true,
  },
  timeSlots: [TimeSlot],
});

module.exports = Day;
