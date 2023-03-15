const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSlot = new Schema(
  {
    day: {
      type: String,
      required: true,
    },
    startTime: { type: Number, required: true },
    isFull: { type: Boolean, required: true, default: false },
    reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
    week: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Week",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.TimeSlot || mongoose.model("TimeSlot", TimeSlot);
