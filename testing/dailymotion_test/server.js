var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

// GIF RANDOM =========================================================================

  app.get('/videos/random', function(req, res) {

    request('https://api.dailymotion.com/videos?flags=no_live,no_premium&private=0&shorter_than=1&limit=100',
    	function(error, response, body) {
    	res.send(body);
    });

  });


// GIF SEARCH =========================================================================

  app.get('/videos/:search_term', function(req, res) {

    request('https://api.dailymotion.com/videos?flags=no_live,no_premium&private=0&search=' + encodeURI(req.params.search_term) + '&shorter_than=1&limit=100', function(error, response, body) {
      res.send(body);
    });

  });
