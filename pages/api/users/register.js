const CryptoJS = require("crypto-js");
const Account = require("../../../models/Account");
const Staff = require("../../../models/Staff");
import dbConnect from "../../../util/mongo";
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
      const existingAccount = await Account.findOne({ $or: [{ username }, { email }] });
      if (existingAccount) {
        return res.status(400).send({ error: 'Username or email already in use' });
      }

      // encrypt password
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      ).toString();

      // create new user account
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

      res.status(201).json(staff);

      res.status(201).json(staff);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
export default handler;
