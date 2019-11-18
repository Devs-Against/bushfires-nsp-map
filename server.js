require('dotenv').config()
const express = require("express")
const app = express();
const mongoose = require("mongoose")
var bodyParser = require("body-parser");
const model = require("./Models/index.js")
const path = require("path")
app.use(express.static("public"));
app.use(bodyParser.json());
//Set up default mongoose connection
var mongoDB = "mongodb+srv://read:devsagainst@nsp-maps-hpo3p.mongodb.net/nsp-maps";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function (ref) {
    console.log('Connected to mongo server.');
     // Initialize the app.
  
})



app.get("/towns",(req,res)=>{
	model.town.find({postcode : 4000},(err,result)=>{
		if(err){
			res.send({error : err})
		}
		else{
			res.send({resulst : result})
		}
	});
})

app.get("/safeplaces",(req,res)=>{
	model.safePlace.find((err,result)=>{
		if(err){
			res.send({error : err})
		}
		else{
			res.send({resulst : result})
		}
	});
})

app.get("/",(req,res)=>{
	model.safePlace.find((err,result)=>{
		if(err){
			res.send({error : err})
		}
		else{
			res.render(path.join(__dirname, './index.html'));
		}
	});
})

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });