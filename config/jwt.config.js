const jwt = require("jsonwebtoken");

const AccessToken = (account) = jwt.sign(
  {
    username: account.username,
    role: account.role,
  },
  process.env.JWT_SEC,
  { expiresIn: "30d" }
);

module.exports = AccessToken;
