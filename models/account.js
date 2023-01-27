import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

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
    isVerified: {
      type: Boolean,
      default: false,
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

export default model("Account", AccountSchema);
