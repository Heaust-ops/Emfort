const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
// Mail Sending
const nodemailer = require("nodemailer");
const verifyMail = async (to, link) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    socketTimeout: 5000,
    logger: true,
    auth: {
      user: "heaust.ops@gmail.com",
      pass: config.get("mailPass"),
    },
  });

  let info = await transporter.sendMail({
    from: '"Heaust Azure 👻"',
    to,
    subject: "Hello ✔",
    text: `click on this link to activate your account ${link}`,
    html: `<a href='${link}'>activate</a>`,
  });

  return info.messageId;
};

// User model
const User = require("../../models/User");

// @routes  Post api/users
// @desc    REGISTER New User
// @access  Public
router.post("/", (req, res) => {
  const { username, email, password } = req.body;

  // Validation
  if (!username)
    return res.status(400).json({ msg: "Missing Field: username" });
  if (!email) return res.status(400).json({ msg: "Missing Field: email" });
  if (!password)
    return res.status(400).json({ msg: "Missing Field: password" });

  // Check for existing user
  User.findOne({ email }).then((emailname) => {
    if (emailname) return res.status(400).json({ msg: "already taken: email" });

    User.findOne({ username }).then((user) => {
      if (user) return res.status(400).json({ msg: "already taken: username" });

      const newUser = new User({ username, email, password });

      // Create Salt and Hash
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            jwt.sign(
              { id: user.id },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                verifyMail(
                  user.email,
                  `${config.get("siteName")}api/auth/user/verify/${token}`
                )
                  .then((msgid) => {
                    res.json({
                      msg: "Registration Successful",
                    });
                  })
                  .catch(console.error);
                if (err) throw err;
              }
            );
          });
        });
      });
    });
  });
});

// @routes  PUT api/users/update/authority
// @desc    Update Authority of User
// @access  Public
router.put("/update/authority", (req, res) => {
  const { username, authority } = req.body;
  User.findOneAndUpdate({ username }, { $set: { authority } })
    .then((status) => res.json({ ...status, success: true }))
    .catch((err) => res.status(404).json({ success: false, error: err }));
});

module.exports = router;
