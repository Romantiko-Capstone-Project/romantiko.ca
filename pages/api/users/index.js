import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method == "POST") {
    try {
      const account = await Account.create(req.body);
      res.status(201).json(account);
    } catch (err) {
        console.error(err);
      res.status(500).json(err);
    }
  }
};

export default handler;
