const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    // required: true

  },
  lastname: {
    type: String,
    // required: true

  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    // required: true
  },

  password: {
    type: String,
    required: true
  }

});


module.exports = mongoose.model('User', UserSchema);

