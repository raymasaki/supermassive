var mongoose = require('mongoose'),
  request = require('request'),
  twit = require('twitter'),
  util = require('util'),
  bodyParser = require('body-parser');

module.exports.controller = function(app) {


// TUMBLR RANDOM =========================================================================

  app.get('/texts/random', function(req, res) {

    var randomTags = ['text', 'ask', 'quotes', 'words', 'sayings', 'anonymous', 'quote', 'phrase', 'writing', 'anon', 'advice'];
    var tag = randomTags[Math.floor(Math.random() * randomTags.length)];

    request('http://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=' + encodeURI(process.env.TUMBLR_CONSUMER_KEY) + '&limit=20', function(error, response, body) {
    	res.send(body);
    });

  });


// TUMBLR SEARCH =========================================================================

  app.get('/texts/:search_term', function(req, res) {

    request('http://api.tumblr.com/v2/tagged?tag=' + encodeURI(req.params.search_term) + '&api_key=' + encodeURI(process.env.TUMBLR_CONSUMER_KEY) + '&limit=20', function(error, response, body) {
    	res.send(body);
    });

  });

};
