const mongoose = require('mongoose');

const NameguardformSchema = new mongoose.Schema({
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
  project : {
    type: String,
    default: "Change of Name - Guardian Newspaper"
  },
  date: {
    type: Date,
    default: Date.now
  }   
});

const Nameguardform = mongoose.model('Nameguardform', NameguardformSchema);

module.exports = Nameguardform;
