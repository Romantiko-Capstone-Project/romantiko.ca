const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = new Schema({
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
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

module.exports = mongoose.models.Staff || mongoose.model("Staff", Staff);
