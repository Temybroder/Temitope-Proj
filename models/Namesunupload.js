const mongoose = require('mongoose');

const NamesunuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
	}, 
  project : {
    type: String,
    default: "Change of Name - Sun Newspaper"
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Namesunupload = mongoose.model('Namesunupload', NamesunuploadSchema);

module.exports = Namesunupload;
