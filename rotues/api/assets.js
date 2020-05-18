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
    .then((assets) => res.json(assets))
    .catch((err) => console.log(err));
});

// @routes  POST api/assets/update/:id
// @desc    Update Asset by ID
// @access  Public
router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, count, price } = req.body;
  Asset.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title,
        description,
        count,
        price,
      },
    }
  )
    .then((status) => res.json(status))
    .catch((err) => res.status(404).json({ success: false, error: err }));
});

// @routes  DELETE api/assets/delete/:id
// @desc    DELETE An Asset
// @access  Public
router.delete("/delete/:id", (req, res) => {
  Asset.findById(req.params.id)
    .then((asset) => asset.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false, error: err }));
});

// @routes  POST api/assets
// @desc    CREATE An Asset
// @access  Public
router.post("/", (req, res) => {
  const { username, picture, title, description, count, price } = req.body;
  const newAsset = new Asset({
    username,
    picture,
    title,
    description,
    count,
    price,
  });

  newAsset
    .save()
    .then((asset) => {
      Asset.find({ username: asset.username })
        .sort({ date: -1 })
        .then((assets) => res.json(assets))
        .catch(console.error());
    })
    .catch((err) => res.status(404).json({ success: false, error: err }));
});

module.exports = router;
