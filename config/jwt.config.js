const jwt = require("jsonwebtoken");

const AccessToken = (username, role) = jwt.sign(
  {
    username: username,
    role: role,
  },
  process.env.JWT_SEC,
  { expiresIn: "30d" }
);

module.exports = AccessToken;
