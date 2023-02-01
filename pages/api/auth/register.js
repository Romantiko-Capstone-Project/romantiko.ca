const CryptoJS = require("crypto-js");
const Account = require("../../../models/Account");
const Staff = require("../../../models/Staff");

export default async function handleRegisterUser(req, res) {
  const {
    firstName,
    lastName,
    address,
    phoneNumber,
    username,
    email,
    password,
  } = req.body;

  // // check if username or email already exists
  // const existingAccount = await Account.findOne({ $or: [{ username }, { email }] });
  // if (existingAccount) {
  //   return res.status(400).send({ error: 'Username or email already in use' });
  // }

  // encrypt password
  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASS_SEC
  ).toString();

  // create new user account
  const account = new Account({
    username,
    email,
    password: hashedPassword,
    role: "staff",
  });

  try {

    // save new account
    const savedAccount = await account.save();
    res.status(201).json(savedAccount);

    console.log(firstName,
      lastName,
      address,
      phoneNumber);

    // create staff information with account
    const staff = new Staff({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      account: account._id,
    });

    // save new staff
    const savedStaff = await staff.save();
    res.status(201).json(savedStaff);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to register staff' });
  }
}
