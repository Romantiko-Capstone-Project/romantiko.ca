import dbConnect from "../../../util/mongo";
import TimeSlot from "../../../models/TimeSlot";
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
      const slot = await TimeSlot.create(req.body);
      res.status(201).json(slot);
    } catch (err) {
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
