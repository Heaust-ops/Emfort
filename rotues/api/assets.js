const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Asset model
const Asset = require("../../models/Asset");

// @routes  GET api/assets/:username
// @desc    GET All Assets for User
// @access  Public
router.get("/:username", (req, res) => {
  const username = req.params.username;
  Asset.find({ username })
    .sort({ date: -1 })
    .then((assets) => res.json(assets).catch(console.error()));
});

// @routes  POST api/assets
// @desc    CREATE An Asset
// @access  Public
router.post("/", (req, res) => {
  const { username, picture, title, description, count } = req.body;
  const newAsset = new Asset({
    username,
    picture,
    title,
    description,
    count,
  });

  newAsset
    .save()
    .then((asset) => {
      Asset.find({ username: asset.username })
        .sort({ date: -1 })
        .then((assets) => res.json(assets))
        .catch(console.error());
    })
    .catch(console.error());
});

module.exports = router;
