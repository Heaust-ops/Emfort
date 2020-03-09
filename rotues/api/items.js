const express = require("express");
const router = express.Router();

// Item model
const item = require("../../models/Item");

// @routes  GET api/items
// @desc    GET All Items
// @access  Public
router.get("/", (req, res) => {
  item
    .find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @routes  POST api/items
// @desc    CREATE An Item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @routes  POST api/items/:id
// @desc    DELETE An Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

module.exports = router;
