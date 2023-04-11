import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
import moment from "moment";

const handler = async (req, res) => {
  const { method, query } = req;
  const { date } = query;

  await dbConnect();

  if (method === "GET") {
    try {
      const selectedDate = new Date(date);
      const weekNumber = moment(selectedDate).isoWeek();
      

      const dayOfWeek = selectedDate.getDay() || 7;
      const weekDocument = await Week.findOne({ weekNumber });

      //console.log(weekDocument)

      if (!weekDocument) {
        return res.status(404).json({ message: "Week not found" });
      }

      const dayDocument = weekDocument.days.find(
        (day) => day.day === getDayOfWeekName(dayOfWeek)
      );

      //console.log(dayDocument.day)

      if (!dayDocument) {
        return res.status(404).json({ message: "Day not found" });
      }

      //console.log(dayDocument)

      const timeSlots = dayDocument.timeSlots;

      //console.log(timeSlots)
     

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
  return dayOfWeekNames[dayOfWeek];
};

export default handler;
