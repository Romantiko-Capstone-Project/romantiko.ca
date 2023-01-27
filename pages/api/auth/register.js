const CryptoJS = require("crypto-js");
const Account = require("../../../models/account");
const Customer = require("../../../models/customer");

export default async function handleRegisterUser(req, res) {
  const { firstName, lastName, phoneNumber, username, email, password } =
    req.body;

  // encrypt password
  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASS_SEC
  ).toString();

  try {
    // create new user user
    const account = new Account({
      username,
      email,
      hashedPassword,
      //confirmationCode: accessToken,
    });
    await account.save();

    // create customer information with account
    const customer = new Customer({
      firstName,
      lastName,
      phoneNumber,
      account: account._id
    });

    // save new account
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);

    console.log("User is registered >>");
  } catch (err) {
    res.status(500).json(err);
  }

  // send confirmation email to user
  // code here
}
