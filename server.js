const express = require("express");
const mongoose = require("mongoose");

const items = require('./rotues/api/items');

const app = express();

// Use express
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
