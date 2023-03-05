import dbConnect from "util/mongo";
import Schedule from "models/Schedule";
import Staff from "models/Staff";
const { verifyTokenAndAuthorization } = require("middlewares/verifyToken");

const handler = async (req, res) => {
  const { method, accountId } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const staff = await Staff.findOne({ account: accountId });
      const event = await Schedule.findOne({ staff: staff._id });
      const booking = await Schedule.findOne({ booking: event.booking });
      res.status(200).json(booking);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

const handlerWrapper = (req, res) => {
  verifyTokenAndAuthorization(req, res, () => {
    handler(req, res);
  });
};

export default handlerWrapper;
