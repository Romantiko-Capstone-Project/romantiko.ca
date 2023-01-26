const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "staff", "customer"],
      required: true,
      default: "customer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", AccountSchema);
