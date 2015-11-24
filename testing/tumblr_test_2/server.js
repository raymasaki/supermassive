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

// TUMBLR RANDOM =========================================================================

  app.get('/posts/random', function(req, res) {

    var randomTags = ['text', 'ask', 'quotes', 'words', 'sayings', 'anonymous', 'quote', 'phrase', 'writing', 'anon', 'advice'];
    var tag = randomTags[Math.floor(Math.random() * randomTags.length)];

    request('http://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=' + encodeURI(process.env.TUMBLR_CONSUMER_KEY) + '&limit=20', function(error, response, body) {
    	res.send(body);
    });

  });


// TUMBLR SEARCH =========================================================================

  app.get('/posts/:search_term', function(req, res) {

    request('http://api.tumblr.com/v2/tagged?tag=' + encodeURI(req.params.search_term) + '&api_key=' + encodeURI(process.env.TUMBLR_CONSUMER_KEY) + '&limit=20', function(error, response, body) {
    	res.send(body);
    });

  });
