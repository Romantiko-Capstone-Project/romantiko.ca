import dbConnect from "../../../util/mongo";
import Booking from "../../../models/Booking";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method == "POST") {
    try {
      const booking = await Booking.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;