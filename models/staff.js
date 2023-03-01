const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TimeSlot = require("./TimeSlot");

const Staff = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
    timeSlots: [
      {
        type: Schema.Types.ObjectId,
        ref: "TimeSlot",
      },
    ],
  },
  { timestamps: true }
);

Staff.pre("save", async function (next) {
  const daysOfWeek = [
    { name: "Monday", start: 930, end: 1800 },
    { name: "Tuesday", start: 930, end: 1800 },
    { name: "Wednesday", start: 930, end: 1800 },
    { name: "Thursday", start: 930, end: 1800 },
    { name: "Friday", start: 930, end: 1800 },
    { name: "Saturday", start: 900, end: 1800 },
    { name: "Sunday", start: 1000, end: 1700 },
  ];

  for (const day of daysOfWeek) {
    const startTime = day.start;
    const endTime = day.end;
  }

  next();
});

module.exports = mongoose.models.Staff || mongoose.model("Staff", Staff);
