import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";
import Staff from "../../../models/Staff";
import TimeSlot from "../../../models/TimeSlot";
import Schedule from "../../../models/Schedule";
import Reservation from "../../../models/Reservation";
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
        const staff = await Staff.findOne({ account: id });

        // Get the staff's reservations
        const reservations = await Reservation.find({ staff: staff._id });

        // Update the reservations in the time slots
        const timeSlots = await TimeSlot.find({
          reservations: { $in: reservations.map((r) => r._id) },
        });
        for (const timeSlot of timeSlots) {
          timeSlot.reservations = timeSlot.reservations.filter(
            (reservation) =>
              !reservations.map((r) => r._id).includes(reservation)
          );
          for (const reservation of reservations) {
            timeSlot.reservations = timeSlot.reservations.filter(
              (r) => r.toString() !== reservation._id.toString()
            );
          }
          await timeSlot.save();
        }

        // Delete the staff's reservations
        await Reservation.deleteMany({ staff: staff._id });

        // Delete the staff's account, schedule, and staff objects
        await Account.findByIdAndDelete(id);
        await Schedule.findOneAndDelete({ staff: staff._id });
        await Staff.findOneAndDelete({ account: id });

        res.status(200).json("User has been deleted");
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
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
