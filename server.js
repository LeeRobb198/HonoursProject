var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.use(express.static(__dirname + '/public')); // Get the public folder
app.use(express.static(__dirname)); // Get the other webpages

app.use("/css", express.static("./public/css")); // Get the public folder
app.use("/js", express.static("./public/js")); // Get the public folder
app.use("/images", express.static("./public/images")); // Get the public folder

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/Home.html");
})

app.get('/', function (req, res,html) {
 res.sendFile(path.join(__dirname + '/WebGL.html'));
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
