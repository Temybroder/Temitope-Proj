const mongoose = require('mongoose');

const CoopuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
	}, 
  project : {
    type: String,
    default: "Registration of Cooperative"
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Coopupload = mongoose.model('Coopupload', CoopuploadSchema);

module.exports = Coopupload;
