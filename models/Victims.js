const mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({

  fullname: {
    type: String,
    // required: true

  },
  location: {
    type: String,
    // required: true
  },

  age: {
    type: Number,
    required: true
  },
  reasons: {
    type: String
  },
  images: {
    type: [String],
    required: true
  }

});


module.exports = mongoose.model('Victim', victimSchema);

