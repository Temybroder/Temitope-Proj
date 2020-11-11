const mongoose = require('mongoose');

const LimbyguploadSchema = new mongoose.Schema({
 
  img: { 
	  data: Buffer, 
		contentType: String 
	}, 
	project : {
	  type: String,
	  default: "Registration of Limited by Guarantee"
	},
	date: {
	  type: Date,
	  default: Date.now
	}   
});

const Limbygupload = mongoose.model('Limbygupload', LimbyguploadSchema);

module.exports = Limbygupload;
