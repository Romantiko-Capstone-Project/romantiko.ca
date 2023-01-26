import AccessToken from "../../../config/jwt.config";
import Account from "../../../models/account";

export default async function handleLoginUser(req, res) {

  try {
    const { username, password } = req.body;
    const account = await Account.findOne({username})
    
    // response if there is no user account
    !account && res.status(401).json("Invalid Username!");

    // decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
    // assign access token to account
    AccessToken(account)

    // compare password
    OriginalPassword !== password &&
      res.status(401).json("invalid Password!");

  } catch (error) {}
}
