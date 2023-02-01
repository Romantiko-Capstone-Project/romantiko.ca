const mongoose = require('mongoose');

const Booking = new mongoose.Schema(
  {
    barberName: {
      type: String,
      required: true,
      maxlength: 60,
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
    typeOfHairCut: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: false,
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

module.exports = mongoose.models.Booking || mongoose.model('Booking', Booking)