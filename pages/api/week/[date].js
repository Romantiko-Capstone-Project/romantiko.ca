import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
import Staff from "../../../models/Staff";
import { bookingCreatedEvent } from "../booking/index";
import moment from "moment";

let timeSlotsCache = {};

bookingCreatedEvent.on("created", async (booking) => {
  // Clear the cache when a booking is created
  timeSlotsCache = {};
});

const handler = async (req, res) => {
  const { method, query } = req;
  const { date } = query;

  await dbConnect();

  if (method === "GET") {
    try {
      const selectedDate = new Date(date);
      const weekNumber = moment(selectedDate).isoWeek();
      const dayOfWeek = selectedDate.getDay() || 7;

      const weekDocument = await Week.findOne({ weekNumber }).populate({
        path: "days.timeSlots.staffAvailability.staff",
        model: Staff,
      });

      if (!weekDocument) {
        return res.status(404).json({ message: "Week not found" });
      }

      const dayDocument = weekDocument.days.find(
        (day) => day.day === getDayOfWeekName(dayOfWeek)
      );

      if (!dayDocument) {
        return res.status(404).json({ message: "Day not found" });
      }

      const timeSlots = dayDocument.timeSlots;

      // Store the time slots in the cache
      timeSlotsCache[date] = timeSlots;

      res.status(200).json(timeSlots);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while fetching time slots.",
        error: err,
      });
    }
  }
};

// Helper function to get the name of the day of the week
const getDayOfWeekName = (dayOfWeek) => {
  const dayOfWeekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayOfWeekNames[dayOfWeek - 1];
};

export default handler;
