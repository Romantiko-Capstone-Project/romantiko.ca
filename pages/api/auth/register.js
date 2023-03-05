import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";
import Staff from "../../../models/Staff";
import TimeSlot from "../../../models/TimeSlot";
import Reservation from "../../../models/Reservation";
const CryptoJS = require("crypto-js");
const { sendConfirmationEmail } = require("../../../config/nodemailer.config");
const { EmailToken } = require("../../../config/jwt.config");
const { verifyTokenAndAdmin } = require("/middlewares/verifyToken");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "POST") {
    try {
      const {
        firstName,
        lastName,
        address,
        phoneNumber,
        username,
        email,
        password,
      } = req.body;

      // check if username or email already exists
      const existingAccount = await Account.findOne({
        $or: [{ username }, { email }],
      });
      if (existingAccount) {
        return res
          .status(400)
          .send({ error: "Username or email already in use" });
      }

      // encode password
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      ).toString();

      // create new account
      const account = await Account.create({
        username,
        email,
        password: hashedPassword,
      });

      // create staff information with account
      const staff = await Staff.create({
        firstName,
        lastName,
        address,
        phoneNumber,
        account: account._id,
      });

      // get all time slots
      const timeSlots = await TimeSlot.find();

      // create a reservation for each time slot
      const reservationPromises = timeSlots.map(timeSlot => Reservation.create({
        staff: staff._id,
        timeSlot: timeSlot._id,
      }));
      const reservations = await Promise.all(reservationPromises);

      // update the time slot's reservations array with the new reservations
      const timeSlotUpdates = timeSlots.map((timeSlot, index) => ({
        updateOne: {
          filter: { _id: timeSlot._id },
          update: { $push: { reservations: reservations[index]._id } },
        },
      }));
      await TimeSlot.bulkWrite(timeSlotUpdates);

      res.status(201).json(staff);

      // generate confirmation code
      const confirmationCode = EmailToken(account._id);

      // send email verification
      sendConfirmationEmail(firstName, email, account._id, confirmationCode);
    } catch (err) {
      console.error(err);
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
