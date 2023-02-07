const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Booking = Schema(
  {
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    barber: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Booking || mongoose.model("Booking", Booking);
