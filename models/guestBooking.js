const mongoose = require("mongoose");

const GuestBookingSchema = new mongoose.Schema(
  {
    barber: {
      type: String,
      required: true,
      maxlength: 60,
    },
    customer: {
      type: String,
    },
    guestName: {
      type: String,
      required: true,
    },
    guestEmail: {
      type: String,
      required: true,
    },
    guestPhone: {
      type: String,
      required: true,
    },
    typeOfHairCut: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
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

module.exports = mongoose.model("GuestBooking", GuestBookingSchema);
