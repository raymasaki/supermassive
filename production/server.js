// DEPENDENCIES ======================================================================

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var request      = require('request');

var configDB = require('./config/database.js');


// CONFIG =========================================================================

// mongoose.connect(configDB.url);

// require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static('public'));

// required for passport
app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// bower components
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// ROUTES ======================================================================

require('./app/routes/routes.js')(app); // (app, passport); // load our routes and pass in our app and fully configured passport


// LAUNCH ======================================================================

app.listen(3000);
console.log('Listening on port 3000...');