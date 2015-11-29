var mongoose = require('mongoose'),
    request  = require('request'),
  bodyParser = require('body-parser'),
    Favorite = require('./../models/favorite.js');

module.exports.controller = function (app) {

// FAVORITE POST =========================================================================
    //CHANGES!!!!!!!!!!!!!!!!!
    app.post('/favorites', function(req, res) {

      var favorite = new Favorite (req.body);
      favorite.save(function (err, newFavorite) {
        if (err) {
          console.log(err);
        } else {
          console.log("Favorite was saved");
          res.send(newFavorite);
        }
      });
    });
    //CHANGES!!!!!!!!!!!!!!!!
};
