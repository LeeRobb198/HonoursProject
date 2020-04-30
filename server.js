var express = require('express')
const PORT = process.env.PORT || 8080;
var app = express()
app.use(express.json());

app.use(express.static(__dirname + '/public')); // Get the public folder
app.use(express.static(__dirname)); // Get the other webpages

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/Home.html");
})

// Requires POST methods from the different POST files
require('./routes/apiSpecificRequest')(app);
require('./routes/apiInitialRequest')(app);

// Create Server ---------------------------------------------------------------

app.listen(PORT);
console.log('Flight Detector Express Server running at http://127.0.0.1:'.PORT);
