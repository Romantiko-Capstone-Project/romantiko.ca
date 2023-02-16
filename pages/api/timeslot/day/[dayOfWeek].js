import dbConnect from "../../../../util/mongo";
import TimeSlot from "../../../../models/TimeSlot";
const { verifyTokenAndAdmin } = require("../../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const {
    method,
    query: { dayOfWeek },
  } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const slots = await TimeSlot.find({ day: dayOfWeek });
      res.status(200).json(slots);
    } catch (err) {
      res
        .status(500)
        .json(err, { message: "The desired time slot wasn't found." });
    }
  }
};

export default handler;
