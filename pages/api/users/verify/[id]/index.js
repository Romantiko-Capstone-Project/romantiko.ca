import dbConnect from "../../../../../util/mongo";
import Account from "../../../../../models/Account";

const handler = async (req, res) => {
    const {
        method,
        query: { id },
      } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const accounts = await Account.findById(id);
      res.status(200).json(accounts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

};

export default handler;
