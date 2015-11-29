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
var fs           = require('fs');

var configDB = require('./config/database.js');


// CONFIG =========================================================================

mongoose.connect(configDB.url);

require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// use static files
app.use(express.static(__dirname + '/public'));

// ejs templating
app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// bower components
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// controllers
fs.readdirSync('./app/controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./app/controllers/' + file);
      route.controller(app);
  }
});


// ROUTES ======================================================================

require('./app/routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


// LAUNCH ======================================================================

app.listen(3000);
console.log('Listening on port 3000...');
