const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Fullname is required']
  },
  gender: {
    type: String,
    required: [true, 'Gender is required']
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    default: 'password1'
  },
  phone_number: {
    type: String
  }
});

const usersModel = mongoose.model('user', usersSchema);
module.exports = usersModel;