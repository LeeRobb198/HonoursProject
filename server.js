// Server Start ----------------------------------------------------------------
var express = require("express");
var app = express();
var http = require("http").Server(app).listen(8080);

app.use(express.static(__dirname + '/public')); // Get the public folder
app.use(express.static(__dirname)); // Get the other webpages

// app.use("/css", express.static("./public/css")); // Get the public folder
// app.use("/js", express.static("./public/js")); // Get the public folder
// app.use("/images", express.static("./public/images")); // Get the public folder

console.log("Server start at port 8080.");

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/Home.html");
});

app.get('/', function (req, res,html) {
 res.sendFile(path.join(__dirname + '/WebGL.html'));
});
