const mongoose = require('mongoose');

const BiznameformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  project : {
    type: String,
    default: "Business Name Registration"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Biznameform = mongoose.model('Biznameform', BiznameformSchema);

module.exports = Biznameform;
