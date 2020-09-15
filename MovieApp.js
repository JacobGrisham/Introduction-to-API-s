const request = require('request');
const express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("Search");
});

app.get("/results", function(req, res){
	var url = "https:www.omdbapi.com/?s=" + query + "&apikey=thewdb";
	var query = req.query.search;
	request(url, function(error, response, body){
	if(!error && response.statusCode == 200){
		var data = JSON.parse(body)
		res.render("results", {data:data});
		}
	});
});

// rp('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb')
// 	.then((parsedData) => {
// 	console.log(`${parsedData.Search.Title}`);
// 	})
// 	.catch((err) => {
// 	console.log('Error!', err);
// 	})

app.listen(3000, function(){
	console.log("Server is running");
});