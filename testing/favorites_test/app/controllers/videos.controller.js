var   mongoose = require('mongoose'),
       request = require('request'),
    bodyParser = require('body-parser');

module.exports.controller = function (app) {


// VIDEO RANDOM =========================================================================

  app.get('/videos/random', function(req, res) {

    request('https://api.dailymotion.com/videos?flags=no_live,no_premium&private=0&shorter_than=1&limit=100',
    	function(error, response, body) {
    	res.send(body);
    });

  });


// VIDEO SEARCH =========================================================================

  app.get('/videos/:search_term', function(req, res) {

    request('https://api.dailymotion.com/videos?flags=no_live,no_premium&private=0&search=' + encodeURI(req.params.search_term) + '&shorter_than=1&limit=100', function(error, response, body) {
      res.send(body);
    });

  });


};
