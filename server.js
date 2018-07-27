// Require dependencies
var express = require("express");
var http = require("http");
var fs = require("fs");

var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

var serverPORT = 8000;
var port = process.env.PORT || serverPORT;
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});


// // Set our port to 8080
// var PORT = 8080;

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {

//   // Capture the url the request is made to
//   var path = req.url;

//   // When we visit different urls, call the function with different arguments
//   switch (path) {

//   case "/about":
//   case "/contact":
//   case "/portfolio":
//     return renderHTML(path + ".html", res);

//   default:
//     return renderHTML("/index.html", res);
//   }
// }

// // function to take a filepath and respond with html
// function renderHTML(filePath, res) {
//   return fs.readFile(__dirname + filePath, function(err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// // Starts our server.
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });
