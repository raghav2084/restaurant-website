var express = require('express');
var app = express();
var path = require('path');

//to serve vendors folder
app.use("/vendors", express.static('vendors'));
//to serve resources folder
app.use("/resources", express.static('resources'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
