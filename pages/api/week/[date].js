import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
import { startOfWeek, endOfWeek, parseISO } from "date-fns";

const handler = async (req, res) => {
    const { method, query } = req;
    const { date } = query;
  
    await dbConnect();
  
    if (method === "GET") {
      try {
        const selectedDate = parseISO(date);
        const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
        const end = endOfWeek(selectedDate, { weekStartsOn: 1 });
  
        const week = await Week.findOne({
          createdAt: {
            $gte: start.toISOString(),
            $lte: end.toISOString(),
          },
        });
  
        if (!week) {
          return res.status(404).json({ message: "Week not found" });
        }
  
        const dayOfWeek = selectedDate.getDay() || 7;
        const day = week.days[dayOfWeek - 1];
  
        res.status(200).json(day.timeSlots);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          message: "An error occurred while fetching time slots.",
          error: err,
        });
      }
    }
  };
  
  export default handler;