//Import Modules
var express = require('express');
var app = express();

//Route to app module
require('./app.js')(app);

//Connection to server
const hostname = 'localhost';
var port = 3000 ;
app.listen(port, hostname,() => {
    console.log('Server running at http://${hostname}:${port}/');
});