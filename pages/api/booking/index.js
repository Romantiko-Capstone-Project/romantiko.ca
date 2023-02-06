import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
const {sendBookingConfirmation} = require("../../../config/nodemailer.config")

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      res
        .status(500)
        .json({
          message: "An error occurred while retrieving bookings.",
          error: err,
        });
    }
  }

  if (method == "POST") {
    try {
      const booking = await Booking.create(req.body);
      res.status(201).json(booking);

      // send email confirmation after an appointment has been booked
      sendBookingConfirmation(booking.customerName, booking.customerEmail, booking._id, new Date(),
      booking.barberName)
      
    } catch (err) {
      res
        .status(500)
        .json({
          message: "An error occurred while creating a booking.",
          error: err,
        });
    }
  }
};

export default handler;
