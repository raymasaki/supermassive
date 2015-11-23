
// Dependencies ======================================================================

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');

var morgan       = require('morgan');
var bodyParser   = require('body-parser');

var configDB = require('./config/database.js');


// Configuration ===============================================================

mongoose.connect(configDB.url); // connect to our database

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms

app.use(express.static(__dirname + '/public'));



// Routes ======================================================================

require('./app/routes.js')(app); // load our routes and pass in our app



// Launch ======================================================================

app.listen(3000, function () {
  console.log('App listening on port 3000...');
});
