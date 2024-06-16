const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader.startsWith("Bearer")) {
    return res.status(403).json({
      message: "Doesn't starts with Bearer",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Not a valid token",
    });
  }
};

module.exports = {
  authMiddleware,
};
