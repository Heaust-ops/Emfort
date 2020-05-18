const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Use express
app.use(express.json());

// DB config
const db = config.get("mongoURI");

// Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/items", require("./rotues/api/items"));
app.use("/api/users", require("./rotues/api/users"));
app.use("/api/auth", require("./rotues/api/auth"));
app.use("/api/assets", require("./rotues/api/assets"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
