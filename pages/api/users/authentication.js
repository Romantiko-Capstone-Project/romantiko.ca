import Account from "../../../models/Account";
const jwt = require("jsonwebtoken");

export default async function handleLoginUser(req, res) {
  try {
    const { username, password } = req.body;
    const account = await Account.findOne({ username });

    // response if there is no user account
    !account && res.status(401).json("Invalid Username!");

    // decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // assign access token to account
    const AccessToken = jwt.sign(
      {
        username: username,
        role: role,
      },
      process.env.JWT_SEC,
      { expiresIn: "30d" }
    );

    // compare password
    OriginalPassword !== password && res.status(401).json("invalid Password!");

    // set token to cookie
    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`);

    if (account.role === "customer") {
      res.status(200).json({ message: "Customer logged in" });
    }
    if (account.role === "admin") {
      res.status(200).json({ message: "Admin logged in" });
    }
    if (account.role === "staff") {
      res.status(200).json({ message: "Staff logged in" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in" });
  }
  
}
