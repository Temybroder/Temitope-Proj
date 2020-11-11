const mongoose = require('mongoose');

const CompletepformSchema = new mongoose.Schema({
  title: {
    type: String
  },
  notes: {
    type: String
  },
  img: { 
    data: Buffer, 
		contentType: String 
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Completepform = mongoose.model('Completepform', CompletepformSchema);

module.exports = Completepform;
