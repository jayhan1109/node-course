const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,

    validate(val) {
      if (val.indexOf("password") !== -1) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Email is invalid");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate(val) {
      if (val < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

module.exports = User;
