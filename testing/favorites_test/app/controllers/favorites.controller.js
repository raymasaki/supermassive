var mongoose = require('mongoose'),
    request  = require('request'),
  bodyParser = require('body-parser'),
    Favorite = require('./../models/favorite.js');

module.exports.controller = function (app) {

// GIF RANDOM =========================================================================

//   app.get('/gifs/random', function(req, res) {
//
//     request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
//     	function(error, response, body) {
//     	res.send(body);
//     });
//
//   });
//
//
// FAVORITE POST =========================================================================

    app.post('/favorite', function(req, res) {

      var favorite = new Favorite (req.body);
      favorite.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Favorite was saved");
          res.send(search);
        }
      });
    });

};
