const mongoose = require('mongoose');

const NamethisdayformSchema = new mongoose.Schema({
  formername: {
    type: String
  },
  newname: {
    type: String
  },
  address: {
    type: String
  },
  reason: {
    type: String
  },
  img: { 
    data: Buffer, 
		contentType: String 
	},
  date: {
    type: Date,
    default: Date.now
  }, 
  project : {
    type: String,
    default: "Change of Name - Thisday Newspaper"
  } 
});

const Namethisdayform = mongoose.model('Namethisdayform', NamethisdayformSchema);

module.exports = Namethisdayform;
