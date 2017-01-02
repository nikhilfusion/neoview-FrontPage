var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));     // set the static files 
app.listen(8000);
console.log('app is running on port 8000');