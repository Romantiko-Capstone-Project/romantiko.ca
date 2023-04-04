import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
import { startOfWeek, addWeeks } from "date-fns";

const handler = async (req, res) => {
  const { method, query } = req;
  const { date } = query;

  await dbConnect();

  if (method === "GET") {
    try {
      const selectedDate = new Date(date);
      const weekNumber = getWeekNumber(selectedDate);
      const dayOfWeek = selectedDate.getDay() || 7;

      const weekDocument = await Week.findOne({ weekNumber });

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

// Helper function to get the week number of a date
const getWeekNumber = (date) => {
  const yearStart = startOfWeek(new Date(date.getFullYear(), 0, 1), {
    weekStartsOn: 1,
  });
  const weekNumber =
    Math.floor((date - yearStart) / (7 * 24 * 60 * 60 * 1000)) + 1;
  return weekNumber;
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
