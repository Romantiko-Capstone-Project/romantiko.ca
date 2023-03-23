import dbConnect from "../../../util/mongo";
import TimeSlot from "../../../models/TimeSlot";
import Week from "../../../models/Week";
const { verifyTokenAndAdmin } = require("../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const slots = await TimeSlot.find();
      res.status(200).json(slots);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      // Get all the weeks from the database
      const weeks = await Week.find();

      // Get the day and startTime from the request body
      const { day, startTime } = req.body;

      // Loop through each week and create/update the TimeSlots
      const timeSlots = [];
      for (const week of weeks) {
        // Find an existing TimeSlot with the same day and startTime for this week
        const existingTimeSlot = await TimeSlot.findOne({
          week: week._id,
          day,
          startTime,
        });

        if (existingTimeSlot) {
          // If an existing TimeSlot is found, update its fields
          existingTimeSlot.week = week._id;
          timeSlots.push(existingTimeSlot);
        } else {
          // If no existing TimeSlot is found, create a new one
          const newTimeSlot = new TimeSlot({
            week: week._id,
            day,
            startTime,
            // other attributes as needed
          });
          timeSlots.push(newTimeSlot);
        }
      }

      // Save all the TimeSlots to the database
      await TimeSlot.insertMany(timeSlots);

      // Return the created/updated TimeSlots in the response
      res.status(201).json(timeSlots);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while creating a time slot.",
        error: err,
      });
    }
  }

  // update all slots
  if (method === "PUT") {
    try {
      const update = { $set: req.body };
      const options = { multi: true };
      const result = await TimeSlot.updateMany({}, update, options);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while updating time slots.",
        error: err,
      });
    }
  }
};

export default handler;
