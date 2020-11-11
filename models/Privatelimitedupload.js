const mongoose = require('mongoose');

const PrivatelimiteduploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String
	}, 
  project : {
    type: String,
    default: "Registration of Private Limited Liability"
  },
  date: {
    type: Date,
    default: Date.now
  }  
});

const Privatelimitedupload = mongoose.model('Privatelimitedupload', PrivatelimiteduploadSchema);

module.exports = Privatelimitedupload;
