const mongoose = require('mongoose');

const NamevanformSchema = new mongoose.Schema({
  formername: {
    type: String
  },
  newname: {
    type: String
  },
  address: {
    type: String
  },
  reason: {
    type: String
  },
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

const Namevanform = mongoose.model('Namevanform', NamevanformSchema);

module.exports = Namevanform;
