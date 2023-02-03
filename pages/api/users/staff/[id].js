import dbConnect from "../../../../util/mongo";
import Account from "../../../../models/Account";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method == "PUT") {
    try {
      const account = await Account.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(account);
    } catch (error) {
      res.status(500).json(err);
    }
  }
};

export default handler;
