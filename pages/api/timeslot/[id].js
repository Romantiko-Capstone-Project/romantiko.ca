import dbConnect from "../../../util/mongo";
import Week from "../../../models/Week";
import Staff from "../../../models/Staff";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const timeslot = await Week.findOne(
          { "days.timeSlots._id": id },
          { "days.timeSlots.$": 1 }
        )
          .populate({
            path: "days.timeSlots.staffAvailability.staff",
            model: Staff, // Pass the Staff model schema here
          })
          .exec();

        if (!timeslot) {
          return res.status(400).json({ success: false });
        }

        const staffIds = timeslot.days[0].timeSlots[0].staffAvailability.map(
          (availability) => availability.staff._id
        );

        res.status(200).json(staffIds);
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
