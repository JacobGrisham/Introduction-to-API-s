// const request = require('request');
// The above is one way to initiate require request. Below is a more efficient way
const rp = require('request-promise');
const express = require("express");
var app = express();

// request('http://google.com/', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

rp('https://jsonplaceholder.typicode.com/users/1')
	.then((htmlstring) => {
	console.log(htmlstring);
	})
	.catch((err) => {
	console.log('Error!', err);
	})	


// eval(require('locus')); // Use this line to freeze the request and return what you would see in the browser. This allows you to view everything
// 	if(!error && response.statusCode == 200){
// 		const parsedData = JSON.parse(body);
// 		console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
// 	} // use back ticks `` on either side and ${} around the data instead of using (parsedData.name + ' lives in ' + paresedData.address.city) This latter method is called concatenation
// });


app.listen(3000);
