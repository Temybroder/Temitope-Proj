const mongoose = require('mongoose');

const NamevanuploadSchema = new mongoose.Schema({
 
  img: { 
    data: Buffer, 
		contentType: String 
    
	}, 
  project : {
    type: String,
    default: "Change of Name - Vanguard Newspaper"
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

const Namevanupload = mongoose.model('Namevanupload', NamevanuploadSchema);

module.exports = Namevanupload;
