// Require dependencies
var express = require("express");

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

// Basic route that sends the user first to the home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "about.html"));
});



// // Starts our server.
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});