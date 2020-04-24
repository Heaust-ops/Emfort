const config = require("config");
const jwt = require("jsonwebtoken");

verify = (req, res, next) => {
  const token = req.params.token;

  try {
    // Check for token
    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });

    // Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid", error: e });
  }
};

module.exports = verify;
