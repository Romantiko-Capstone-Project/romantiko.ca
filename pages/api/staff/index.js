import dbConnect from "../../../util/mongo";
import Staff from "../../../models/staff";
const {verifyTokenAndAdmin} = require("../../../middlewares/verifyToken")

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const staffs = await Staff.find();
      res.status(200).json(staffs);
    } catch (err) {
      res.status(500).json(err);
    }
  }

};

const handlerWrapper = (req, res) => {
  verifyTokenAndAdmin(req, res, () => {
    handler(req, res);
  });
};

export default handlerWrapper;
