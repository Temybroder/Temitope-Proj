const mongoose = require('mongoose');

const NameguarduploadSchema = new mongoose.Schema({
 
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

const Nameguardupload = mongoose.model('Nameguardupload', NameguarduploadSchema);

module.exports = Nameguardupload;
