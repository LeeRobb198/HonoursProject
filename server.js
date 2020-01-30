// // Server HTTP -----------------------------------------------------------------
var express = require("express");
var app = express();
var http = require("http").Server(app).listen(8080);

app.use(express.static(__dirname + '/public')); // Get the public folder
app.use(express.static(__dirname)); // Get the other webpages

app.use("/css", express.static("./public/css")); // Get the public folder
app.use("/js", express.static("./public/js")); // Get the public folder
app.use("/images", express.static("./public/images")); // Get the public folder

console.log("Server start at port 8080.");

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/Home.html");
});

app.get('/', function (req, res,html) {
 res.sendFile(path.join(__dirname + '/WebGL.html'));
});

// Server HTTPS ----------------------------------------------------------------
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('key.pem', 'utf8');
// var certificate = fs.readFileSync('cert.pem', 'utf8');
//
// var credentials = {key: privateKey, cert: certificate};
// var express = require('express');
// var app = express();
//
// // your express configuration here
//
// //var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
//
// //httpServer.listen(8080);
// httpsServer.listen(8080);
//
// console.log("Server start at port 8080.");
//
// app.use(express.static(__dirname + '/public')); // Get the public folder
// app.use(express.static(__dirname)); // Get the other webpages
//
// app.use("/css", express.static("./public/css")); // Get the public folder
// app.use("/js", express.static("./public/js")); // Get the public folder
// app.use("/images", express.static("./public/images")); // Get the public folder
//
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + "/Home.html");
// });
//
// app.get('/', function (req, res,html) {
//  res.sendFile(path.join(__dirname + '/WebGL.html'));
// });
