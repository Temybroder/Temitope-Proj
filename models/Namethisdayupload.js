const mongoose = require('mongoose');

const NamethisdayuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
    
	}, 
  project : {
    type: String,
    default: "Change of Name - Thisday Newspaper"
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Namethisdayupload = mongoose.model('Namethisdayupload', NamethisdayuploadSchema);

module.exports = Namethisdayupload;
