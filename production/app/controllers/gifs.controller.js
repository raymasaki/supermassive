var   mongoose = require('mongoose'),
       request = require('request'),
    bodyParser = require('body-parser');

module.exports.controller = function (app) {

// GIF SEARCH =========================================================================

  app.get('/gifs/:search_term', function(req, res) {

    request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + encodeURI(req.params.search_term), function(error, response, body) {
      res.send(body);
    });

  });

// GIF RANDOM =========================================================================

  app.get('/gifs/random', function(req, res) {

    request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
    	function(error, response, body) {
    	res.send(body);
    });

  });
};
