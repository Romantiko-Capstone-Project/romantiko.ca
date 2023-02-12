import dbConnect from "../../../util/mongo";
import TimeSlot from "../../../models/TimeSlot";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const slot = await TimeSlot.findById(id);
      res.status(200).json(slot);
    } catch (err) {
      res
        .status(500)
        .json(err, { message: "The desired time slot wasn't found." });
    }
  }
  if (method == "PUT") {
    try {
      const slot = await TimeSlot.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(slot);
    } catch (err) {
      res
        .status(500)
        .json({ message: "An error occurred while updating the service." });
    }
  }
  if (method === "DELETE") {
    try {
      const slot = await TimeSlot.findById(id);
      if (!slot) {
        return res.status(404).json({ message: "Service not found." });
      }
      await slot.findByIdAndDelete(id);
      res.status(200).json({ message: "Successfully deleted the service" });
    } catch (err) {
      res
        .status(500)
        .json(err, { message: "The desired service wasn't found." });
    }
  }
};
export default handler;
