
import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    barberName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    customer: {
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

export default model("Booking", bookingSchema);