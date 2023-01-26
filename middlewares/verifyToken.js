import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  if (authHeader) {
    const token = req.headers.cookie.split("=")[1];

    jwt.verify(token, process.env.JWT_SEC, (err, account) => {
      if (err) res.status(403).json("Token is not valid!");
      req.account = account;
      next();
    });
  } else {
    return res.status(401).json("Unauthorized");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.account.id === req.params.id || req.account.role === "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req?.account?.role === "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
