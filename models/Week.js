const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
  weekNumber: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 52,
  },
});

const Week = mongoose.models.Week || mongoose.model("Week", WeekSchema);

module.exports = Week;
