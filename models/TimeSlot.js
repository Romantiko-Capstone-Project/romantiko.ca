// models/TimeSlot.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffAvailability = new Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },
  isBooked: { type: Boolean, required: true, default: false },
});

const TimeSlot = new Schema({
  startTime: { type: Number, required: true },
  staffAvailability: [StaffAvailability],
});

module.exports = TimeSlot;
