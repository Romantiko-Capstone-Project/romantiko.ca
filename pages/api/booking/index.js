import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
import TimeSlot from "../../../models/TimeSlot";
import Schedule from "../../../models/Schedule";
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
      const {
        startTime,
        endTime,
        service,
        barber,
        customerName,
        customerEmail,
        customerPhone,
        notes,
      } = req.body;

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

      console.log(timeStart, timeEnd, dayOfWeek);

      const slotsToBook = await TimeSlot.find({
        day: dayOfWeek,
        startTime: { $gte: timeStart, $lt: timeEnd },
        isBooked: false,
      }).exec();

      console.log(slotsToBook);

      if (slotsToBook.length === 0) {
        return res.status(201).json("unavailable slot");
      }

      // const booking = await Booking.create(req.body);
      // const result = await slotsToBook.updateMany(
      //   {
      //     $set: {
      //       isBooked: true,
      //       bookingId: booking._id,
      //     },
      //   },
      //   { limit: 2 } // limit the number of slots that can be modified to 2
      // );
      // res.status(201).json(booking);
      // console.log(result);

      for (const slot of slotsToBook) {
        if (slot.isBooked) {
          return res.status(201).json("unavailable slot");
        } else {
          const booking = await Booking.create(req.body);
          await TimeSlot.findByIdAndUpdate(slot._id, {
            $set: {
              isBooked: true,
              bookingId: booking._id,
            },
          });
          res.status(201).json(booking);
        }
      }

      // send email confirmation after an appointment has been booked
      // sendBookingConfirmation(booking.customerName, booking.customerEmail, booking._id, new Date(),
      // booking.barberName)
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while creating a booking.",
        error: err,
      });
    }
  }
};

export default handler;
