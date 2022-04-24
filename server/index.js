const express = require("express");
const app = express();
const config = require("./config/key");
const { User } = require("./models/User");

// It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
// It recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/submit", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
