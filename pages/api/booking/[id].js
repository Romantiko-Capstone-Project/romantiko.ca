import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const booking = await Booking.findById(id);
      res.status(200).json(booking);
    } catch (err) {
      res
        .status(500)
        .json(err, { message: "The desired booking wasn't found." });
    }
  }
  if (method == "PUT") {
    try {
      const booking = await Booking.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(booking);
    } catch (err) {
      res
        .status(500)
        .json({ message: "An error occurred while updating the booking." });
    }
  }
  if (method === "DELETE") {
    try {
      const booking = await Booking.findById(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }
      await Booking.findByIdAndDelete(id);
      res.status(200).json({ message: "Successfully deleted the booking" });
    } catch (err) {
      res
        .status(500)
        .json(err, { message: "The desired booking wasn't found." });
    }
  }
};
export default handler;
