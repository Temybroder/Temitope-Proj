const mongoose = require('mongoose');

const PrivatelimitedformSchema = new mongoose.Schema({
  name: {
    type: String
  },
  dirname: {
    type: String
  },
    email: {
    type: String
  },
  address: {
    type: String
  },
  img: { 
    data: Buffer, 
		contentType: String 
	},
  date: {
    type: Date,
    default: Date.now
  }, 
  project : {
    type: String,
    default: "Registration of Private Limited Liability"
  } 
});

const Privatelimitedform = mongoose.model('Privatelimitedform', PrivatelimitedformSchema);

module.exports = Privatelimitedform;
