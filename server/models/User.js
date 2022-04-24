const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  phoneNumber: {
    type: String,
    maxlength: 20,
    unique: 1,
  },
  visitDate: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
