const mongoose = require('mongoose');

const NamesunformSchema = new mongoose.Schema({
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
    default: "Change of Name - Sun Newspaper"
  } 
});

const Namesunform = mongoose.model('Namesunform', NamesunformSchema);

module.exports = Namesunform;
