const mongoose = require("mongoose")

// Define schema
var Schema = mongoose.Schema;

var townSchgema = new Schema({
  postcode: Number,
  suburb: String,
  lat : Number,
  lng : Number

});

// Compile model from schema
var town = mongoose.model('town', townSchgema );

module.exports = town;
