const mongoose = require('mongoose');

const LimbygformSchema = new mongoose.Schema({
  name: {
    type: String
  },
  dirname: {
    type: String
  },
    email: {
    type: String
  },
  address: {
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
    default: "Registration of Limited by Guarantee"
  }  
});

const Limbygform = mongoose.model('Limbygform', LimbygformSchema);

module.exports = Limbygform;
