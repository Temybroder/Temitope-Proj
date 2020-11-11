const mongoose = require('mongoose');

const BiznameuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
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

const Biznameupload = mongoose.model('Biznameupload', BiznameuploadSchema);

module.exports = Biznameupload;
