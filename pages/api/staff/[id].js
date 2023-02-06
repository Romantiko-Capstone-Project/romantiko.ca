import dbConnect from "../../../util/mongo";
import Staff from "../../../models/Staff";
const {
  verifyTokenAndAdmin,
} = require("../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const staff = await Staff.findById(id);
        return res.status(200).json(staff);
      } catch (err) {
        res.status(500).json(err);
      }
      break;

    case "PUT":
      try {
        const staff = await Staff.findByIdAndUpdate(
          id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json(staff);
      } catch (error) {
        res.status(500).json(err);
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
