const mongoose = require("mongoose");

const TimeSlot = new mongoose.Schema({
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
  startTime: { type: Number, required: true},
  isBooked: { type: Boolean, required: true, default: false },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
});

module.exports =
  mongoose.models.TimeSlot || mongoose.model("TimeSlot", TimeSlot);