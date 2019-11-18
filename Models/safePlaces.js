const mongoose = require("mongoose")

// Define schema
var Schema = mongoose.Schema;

var safePlaceSchgema = new Schema({
	Address :String,
	Suburb:String,
	Name:String,
	Type:String,
	lat:Number,
	lng:Number


},{ collection : 'test' });

// Compile model from schema
var safePlace = mongoose.model('safePlace', safePlaceSchgema );

module.exports = safePlace;