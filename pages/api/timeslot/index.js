import dbConnect from "../../../util/mongo";
import TimeSlot from "../../../models/TimeSlot";
const { verifyTokenAndAdmin } = require("../../../middlewares/verifyToken");
const {
  initializeWeeks,
} = require("../../../middlewares/generateTimeSlot");

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
      
      initializeWeeks()
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

const handlerWrapper = (req, res) => {
  verifyTokenAndAdmin(req, res, () => {
    handler(req, res);
  });
};

export default handlerWrapper;
