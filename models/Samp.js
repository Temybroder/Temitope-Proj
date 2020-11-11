const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampSchema = new mongoose.Schema({

  coopname: {
    type: String,
    default: ""
  },
  name: {
    type: String
  },
    email: {
    type: String
  },
  address: {
    type: String
  }, 
  project : {
    type: String,
    default: "Sample Registration"
  },
  date: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: ""
  },
  payment: {
    type: String,
    default: ""
  }
});

const Samp = mongoose.model('Samp', SampSchema);

module.exports = Samp;
