module.exports = function(app, passport) {

  // HOME =========================================================================


  app.get('/', function(req, res) {
      res.render('pages/index.ejs');
  });


  // TRENDING =========================================================================


  app.get('/trending', function(req, res) {
      res.render('pages/trending.ejs');
  });


  // LOGIN =========================================================================


  app.get('/login', function(req, res) {

      // render the page and pass in any flash data if it exists
      res.render('pages/login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  // app.post('/login', passport.authenticate('local-login', {
  //     successRedirect : '/profile', // redirect to the secure profile section
  //     failureRedirect : '/login', // redirect back to the signup page if there is an error
  //     failureFlash : true // allow flash messages
  // }));


  // SIGNUP =========================================================================


  app.get('/signup', function(req, res) {

      // render the page and pass in any flash data if it exists
      res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  // app.post('/signup', passport.authenticate('local-signup', {
  //     successRedirect : '/profile', // redirect to the secure profile section
  //     failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //     failureFlash : true // allow flash messages
  // }));


  // PROFILE =========================================================================


  // app.get('/profile', isLoggedIn, function(req, res) {
  //     res.render('pages/profile.ejs', {
  //         user : req.user // get the user out of session and pass to template
  //     });
  // });


  // LOGOUT =========================================================================


  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

};

// // route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {
//
//   // if user is authenticated in the session, carry on
//   if (req.isAuthenticated())
//       return next();
//
//   // if they aren't redirect them to the home page
//   res.redirect('/');
// }
