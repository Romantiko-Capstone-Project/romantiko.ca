const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = new Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
    timeSlot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TimeSlot",
      required: true,
    },
    isBooked: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Reservation || mongoose.model("Reservation", Reservation);
