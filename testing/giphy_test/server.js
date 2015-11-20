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

app.get('/search/:search_term', function(req, res) {
  //request('http://api.giphy.com/v1/gifs/search?q=' + encodeURI(req.params.search_term) + '&api_key=dc6zaTOxFJmzC&limit=5', function(error, response, body) {
  request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + encodeURI(req.params.search_term), function(error, response, body) {
    res.send(body);
  });
});

app.get('/random', function(req, res) {
  request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
  	function(error, response, body) {
  	res.send(body)
  });
});
