const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AssetSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Asset = mongoose.model("asset", AssetSchema);
