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

      const dayOfWeekName = getDayOfWeekName(dayOfWeek);

      const result = await Week.aggregate([
        { $match: { weekNumber: weekNumber } },
        {
          $project: {
            day: {
              $arrayElemAt: [
                {
                  $filter: {
                    input: "$days",
                    as: "day",
                    cond: { $eq: ["$$day.day", dayOfWeekName] },
                  },
                },
                0,
              ],
            },
          },
        },
        { $unwind: "$day" },
        { $replaceRoot: { newRoot: "$day" } },
      ]).exec();

      const dayDocument = result[0];

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
