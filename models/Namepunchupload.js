const mongoose = require('mongoose');

const NamepunchuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
	}, 
  project : {
    type: String,
    default: "Change of Name - Punch Newspaper"
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Namepunchupload = mongoose.model('Namepunchupload', NamepunchuploadSchema);

module.exports = Namepunchupload;
