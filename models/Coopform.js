const mongoose = require('mongoose');


const CoopformSchema = new mongoose.Schema({
  coopname: {
    type: String,
    required: true
  },
  dirname: {
    type: String,
    required: true
  },
    email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  img: { 
    data: Buffer, 
		contentType: String 
	}, 
  project : {
    type: String,
    default: "Cooperative Registration"
  },
  date: {
    type: Date,
    default: Date.now
  },
  assignedLawyer:{
    type: String,
    default: ""
  },
  endDate: {
    type: Date,
    default: ""
  },
  payment: {
    type: String,
    default: ""
  }
});

const Coopform = mongoose.model('Coopform', CoopformSchema);

module.exports = Coopform;
