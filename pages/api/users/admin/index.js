import dbConnect from "../../../../util/mongo";
import Staff from "../../../../models/Staff";
const {verifyTokenAndAdmin} = require("../../../..//middlewares/verifyToken")

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const accounts = await Staff.find();
      res.status(200).json(accounts);
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
