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

      // Create a new TimeSlot with the provided day and startTime
      const slots = await TimeSlot.insertMany(req.body);

      // Map over the weeks and update the week field for each TimeSlot object
      const timeSlots = weeks.map((week) => {
        const updatedTimeSlot = slots.toObject();
        updatedTimeSlot.week = week._id;
        return updatedTimeSlot;
      });

      // Insert the new TimeSlots into the database
      await TimeSlot.insertMany(timeSlots);

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
