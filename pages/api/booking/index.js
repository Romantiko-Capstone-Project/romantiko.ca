import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
import Schedule from "../../../models/Schedule";
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
    
    const {startTime, endTime, service, barber, customerName, customerEmail, customerPhone, notes} = req.body

    try {
      
      const booking = await Booking.create(req.body);
      await Schedule.create({
        startTime, endTime, staffId: barber
      })
      res.status(201).json(booking);

      console.log(booking.customerEmail)

      // send email confirmation after an appointment has been booked
      sendBookingConfirmation(booking.customerName, booking.customerEmail, booking._id, booking.startTime,
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
