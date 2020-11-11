const mongoose = require('mongoose');

const NamepunchformSchema = new mongoose.Schema({
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
    default: "Change of Name - Punch Newspaper"
  }  
});

const Namepunchform = mongoose.model('Namepunchform', NamepunchformSchema);

module.exports = Namepunchform;
