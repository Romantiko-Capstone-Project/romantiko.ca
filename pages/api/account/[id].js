import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";
import Staff from "../../../models/Staff";
import TimeSlot from "../../../models/TimeSlot";
import Schedule from "../../../models/Schedule";
const { verifyTokenAndAdmin } = require("../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const account = await Account.findById(id);
        return res.status(200).json(account);
      } catch (err) {
        res.status(500).json(err);
      }
      break;

    case "PUT":
      try {
        const account = await Account.findByIdAndUpdate(
          id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json(account);
      } catch (error) {
        res.status(500).json(err);
      }

      break;

    case "DELETE":
      try {
        await Account.findByIdAndDelete(id);
        const staff = await Staff.findOne({ account: id });
        await TimeSlot.findOneAndDelete({ barber: staff._id });
        await Schedule.findOneAndDelete({ staff: staff._id });
        await Staff.findOneAndDelete({ account: id });

        res.status(200).json("User has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
      break;
  }
};

const handlerWrapper = (req, res) => {
  verifyTokenAndAdmin(req, res, () => {
    handler(req, res);
  });
};

export default handlerWrapper;
