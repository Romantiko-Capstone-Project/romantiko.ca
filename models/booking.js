const mongoose = require("mongoose");

const Booking = new mongoose.Schema(
  {
    startTime: {
      type: String,
      required: true,
      validate: [
        function(value) {
          const maxDate = new Date();
          maxDate.setDate(maxDate.getDate() + 14); // Maximum date is 2 weeks from now
          return value <= maxDate;
        },
        'Booking more than 2 weeks in advance is not allowed',
      ],
    },
    endTime: {
      type: String,
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    barber: {
      type: mongoose.Schema.Types.ObjectId,
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
      validate: {
        validator: function(v) {
          return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
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