import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
const { verifyTokenAndAdmin } = require("../../../middlewares/verifyToken");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const weeks = await Week.find();
      res.status(200).json(weeks);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      // Creating 52 week documents
      const weeks = [];
      for (let i = 1; i <= 52; i++) {
        weeks.push({ weekNumber: i });
      }

      Week.insertMany(weeks)
        .then(() => console.log("52 weeks added successfully."))
        .catch((err) =>
          console.error("An error occurred while creating 52 weeks.", err)
        );

      res.status(201).json(weeks);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while creating a week slot.",
        error: err,
      });
    }
  }

  // update all slots
  if (method === "PUT") {
    try {
      const update = { $set: req.body };
      const options = { multi: true };
      const result = await Week.updateMany({}, update, options);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while updating week slots.",
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
