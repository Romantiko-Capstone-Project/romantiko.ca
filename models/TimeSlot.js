const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSlot = new Schema(
  {
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
    startTime: { type: Number, required: true },
    isFull: { type: Boolean, required: true, default: false },
    reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.TimeSlot || mongoose.model("TimeSlot", TimeSlot);
