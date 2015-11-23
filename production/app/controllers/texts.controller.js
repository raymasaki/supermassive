var mongoose = require('mongoose'),
  request = require('request'),
  twit = require('twitter'),
  util = require('util'),
  bodyParser = require('body-parser');

module.exports.controller = function(app) {


  // TWEET RANDOM =========================================================================

  app.get('/tweets/random', function(req, res) {

    // instantiate twitter
    twitter = new twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    twitter.stream('statuses/sample', function(stream) {

      stream.on("data", function(data) {

        res.send(data);

        stream.destroy();
      });
    });

  });


  // TWEET SEARCH  =========================================================================

  app.get('/tweets/:search_term', function(req, res) {

    // instantiate twitter
    twitter = new twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    twitter.stream('statuses/filter', {

      track: req.params.search_term

    }, function(stream) {

      stream.on("data", function(data) {

        res.send(data);

        stream.destroy();
      });

    });

  });

};
