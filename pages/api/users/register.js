import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";
import Staff from "../../../models/Staff";

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

      const account = await Account.create({ username, email, password });

      // create staff information with account
      const staff = await Staff.create({
        firstName,
        lastName,
        address,
        phoneNumber,
        account: account._id,
      });

      res.status(201).json(staff);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
};

export default handler;
