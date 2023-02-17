import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
import TimeSlot from "../../../models/TimeSlot";
import Schedule from "../../../models/Schedule";
import Staff from "../../../models/Staff";
import Service from "../../../models/Service";
const {
  sendBookingConfirmation,
} = require("../../../config/nodemailer.config");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while retrieving bookings.",
        error: err,
      });
    }
  }

  if (method == "POST") {
    try {
      const { startTime, endTime } = req.body;

      const time1 = new Date(startTime);
      const time2 = new Date(endTime);

      const startHour = time1.getHours();
      const startMinute = time1.getMinutes();
      const endHour = time2.getHours();
      const endMinute = time2.getMinutes();

      const startTimeString = `${startHour}${
        startMinute < 10 ? "0" + startMinute : startMinute
      }`;
      const endTimeString = `${endHour}${
        endMinute < 10 ? "0" + endMinute : endMinute
      }`;

      const timeStart = parseInt(startTimeString);
      const timeEnd = parseInt(endTimeString);

      const options = { weekday: "long" };
      const dayOfWeek = time1.toLocaleDateString("en-US", options);

      // find free time slot based on start time and end time
      const slotsToBook = await TimeSlot.find({
        day: dayOfWeek,
        startTime: { $gte: timeStart, $lt: timeEnd },
        isBooked: false,
      }).exec();

      if (slotsToBook.length === 0) {
        return res.status(201).json("unavailable slot");
      }

      // create new booking
      const booking = await Booking.create(req.body);

      /** Update time slot */
      await TimeSlot.updateMany(
        { _id: { $in: slotsToBook.map((slot) => slot._id) } },
        { $set: { isBooked: true, bookingId: booking._id } },
        { limit: 2 }
      );

      // create schedule with booking
      await Schedule.create({
        day: dayOfWeek,
        staffId: booking.barber,
        startTime: booking.startTime,
        endTime: booking.endTime,
      });

      const staff = await Staff.findById(booking.barber);
      const myService = await Service.findById(booking.service);
      const barberName = staff.firstName + " " + staff.lastName;
      const serviceName = myService.serviceName;

      //send email confirmation after an appointment has been booked
      sendBookingConfirmation(
        booking.customerName,
        booking.customerEmail,
        booking._id,
        booking.startTime,
        booking.endTime,
        serviceName,
        barberName
      );

      res.status(201).json(booking);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while creating a booking.",
        error: err,
      });
    }
  }
};

export default handler;
