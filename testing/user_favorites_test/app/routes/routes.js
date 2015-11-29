var mongoose = require('mongoose'),
    Search = require('../models/search.js'),
    Favorite = require('../models/favorite.js'),
    bodyParser = require('body-parser'),
    express = require('express');


module.exports = function(app, passport) {


  // =============================================================================
  // USER  =======================================================================
  // =============================================================================


  // HOME =========================================================================


  app.get('/', function(req, res) {
    res.render('pages/index.ejs', {
      user: req.user
    });
  });

  //CHANGES!!!!!!!!!!!!!!!!!!!!!
  app.get('/currentuser', function(req, res) {
    res.send(req.user);
  });

  app.get('/favorites', function(req, res) {
    Favorite.find({userId: req.user._id}).exec(function(err, favorites) {
      if (err) return next(err);
      res.send(favorites);
    });
  });
  //CHANGES!!!!!!!!!!!!!!!!!!!
  // LOGIN =========================================================================


  app.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('pages/login.ejs', {
      message: req.flash('loginMessage'),
      user: req.user
    });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  // SIGNUP =========================================================================


  app.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('pages/signup.ejs', {
      message: req.flash('signupMessage'),
      user: req.user
    });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  // PROFILE =========================================================================


  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('pages/profile.ejs', {
      user: req.user // get the user out of session and pass to template
    });
  });


  // LOGOUT =========================================================================


  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });


  // =============================================================================
  // TRENDING  ===================================================================
  // =============================================================================


  // TRENDING =========================================================================


  app.get('/trending', function(req, res) {
    res.render('pages/trending.ejs', {
      user: req.user
    });
  });

  app.get('/trendingsearch', function(req, res, next) {
    Search.find().sort({ count: -1 }).exec(function(err, searches) {
      if (err) return next(err);
      res.send(searches);
    });
  });

  app.post('/trendingsearch', function(req, res) {
    var search = new Search(req.body);

    Search.findOneAndUpdate({ word: search.word }, { $inc: { count: 1 } }, { upsert: true }, function(err) {
      if (err) console.log(err);
    });
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
