const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Schedule = Schema(
  { 
    availability: [{
        day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: false
        },
        startTime: {
            type: String,
            required: false
        },
        endTime: {
            type: String,
            required: false
        }
    }],
    startTime: {
      type: Date,
      required: false,
    },
    endTime: {
      type: Date,
      required: false,
    },
    staffId: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Schedule || mongoose.model("Schedule", Schedule);
