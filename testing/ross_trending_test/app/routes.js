var mongoose = require('mongoose'),
    Search = require('./models/search.js'),
    bodyParser = require('body-parser'),
    express = require('express');

module.exports = function(app) {

  // HOME =====================================================

  app.get('/', function(req, res) {
    // res.send();
  });


  // TRENDING =====================================================

  app.get('/trending', function(req, res, next) {
    Search.find().sort({count: -1}).exec(function (err, searches) {
      if (err) return next(err);
      res.send(searches);
    });
  });

  /*app.get('/count', function(req, res) {
    Search.update({word: "hey"}, {$inc: {count: 1}});
  });*/

  app.post('/trending', function (req, res) {
    var search = new Search (req.body);
    Search.findOneAndUpdate({word: search.word}, {$inc: {count: 1}}, {upsert: true}, function(err) {
      if (err) console.log(err);
    });
    /*search.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Search term saved");
        res.send(search);
      }
    });*/
  });

};
