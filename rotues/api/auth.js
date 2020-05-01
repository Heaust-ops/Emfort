const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const verify = require("../../middleware/verify");

// User model
const User = require("../../models/User");

// @routes  Post api/auth
// @desc    Auth User
// @access  Public
router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username)
    return res.status(400).json({ msg: "Missing Field: Username" });
  if (!password)
    return res.status(400).json({ msg: "Missing Field: Password" });

  // Check for existing user
  User.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User Does Not Exist" });

    // Validate Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              displayPicture: user.displayPicture,
            },
          });
        }
      );
    });
  });
});

// @routes  Get api/auth/user
// @desc    Get User data
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

// @routes  Post api/auth/user/verify/:token
// @desc    Auth User
// @access  Private
router.post("/user/verify/:token", verify, (req, res) => {
  const userID = req.user.id;

  // Check for existing user
  User.findOne({ _id: userID }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User Does Not Exist" });
    if (user.authority === "unverified") {
      User.updateOne({ _id: userID }, { authority: "visitor" }, function (
        err,
        res
      ) {
        if (err) throw err;
      });
    }
    jwt.sign(
      { id: user.id },
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
          },
        });
      }
    );
  });
});

module.exports = router;
