import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";
import Staff from "../../../models/Staff";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {sendConfirmationEmail} = require("../../../config/nodemailer.config")

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

      // encrypt password
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      ).toString();

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

      // generate email token
      const emailToken = jwt.sign(
        {
          id: req.body.id,
          isAdmin: req.body.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      // send email verification
      sendConfirmationEmail(firstName, email, account._id, emailToken);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
};

export default handler;
