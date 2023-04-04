import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
import Week from "../../../models/Week";
import Schedule from "../../../models/Schedule";
import { checkAndUpdateIsFull } from "../../../config/staffAvailability.config";
const { convertToHours } = require("../../../config/convertToHours.config");
import moment from "moment";

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

      const startDate = new Date(startTime);
      const endDate = new Date(endTime);
      const weekNumber = moment(startDate).isoWeek();
      const dayOfWeek = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1; // 0 (Monday) to 6 (Sunday)

      console.log("startDate:", startDate);
      console.log("weekNumber:", weekNumber);
      console.log("dayOfWeek:", dayOfWeek);

      const week = await Week.findOne({ weekNumber });
      if (!week) {
        return res.status(404).json({ message: "Week not found." });
      }

      console.log("week in POST handler:", week);

      const day = week.days[dayOfWeek];
      const startHour = convertToHours(startTime);
      const endHour = convertToHours(endTime);

      const targetTimeSlot = day.timeSlots.find(
        (slot) => slot.startTime >= startHour && slot.startTime < endHour
      );

      if (!targetTimeSlot) {
        return res.status(404).json({ message: "Time slot not found." });
      }

      const staffAvailability = targetTimeSlot.staffAvailability.find(
        (availability) => availability.staff.toString() === barber
      );

      if (!staffAvailability || staffAvailability.isBooked) {
        return res.status(400).json({
          message: "Staff is not available for the selected time slot.",
        });
      }

      if (targetTimeSlot.isFull) {
        return res
          .status(400)
          .json({ message: "The time slot is fully booked." });
      }

      const booking = await Booking.create(req.body);

      staffAvailability.isBooked = true;
      staffAvailability.booking = booking._id;

      // After updating staffAvailability
      checkAndUpdateIsFull(targetTimeSlot);

      await Week.findOneAndUpdate(
        { weekNumber },
        {
          $set: {
            [`days.${dayOfWeek}.timeSlots`]: week.days[dayOfWeek].timeSlots,
          },
        }
      );

      // Update staff schedule
      let staffSchedule = await Schedule.findOne({ staff: barber });
      if (!staffSchedule) {
        staffSchedule = new Schedule({ staff: barber });
      }
      staffSchedule.bookings.push(booking._id);
      await staffSchedule.save();

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
