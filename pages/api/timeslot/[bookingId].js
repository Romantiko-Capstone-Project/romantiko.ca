import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";
import Week from "../../../models/Week";
const { verifyTokenAndAdmin } = require("../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }

      const startDate = new Date(booking.startTime);
      const weekNumber = Math.ceil(startDate.getDate() / 7);
      const dayOfWeek = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1; // 0 (Monday) to 6 (Sunday)

      const week = await Week.findOne({ weekNumber });
      if (!week) {
        return res.status(404).json({ message: "Week not found." });
      }

      const day = week.days[dayOfWeek];
      const startHour =
        booking.startTime.getHours() + booking.startTime.getMinutes() / 60;

      const timeSlot = day.timeSlots.find(
        (slot) => slot.startTime === startHour
      );

      if (!timeSlot) {
        return res.status(404).json({ message: "Time slot not found." });
      }

      res.status(200).json(timeSlot);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while creating a time slot.",
        error: err,
      });
    }
  }
};

const handlerWrapper = (req, res) => {
  verifyTokenAndAdmin(req, res, () => {
    handler(req, res);
  });
};

export default handlerWrapper;
