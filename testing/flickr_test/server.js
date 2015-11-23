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

  app.get('/images/random', function(req, res) {

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=41fda80f95e103ff732e3b249cf96282&tags=iphone&format=json&nojsoncallback=1&text=iphone&extras=url_l',
    	function(error, response, body) {
    	res.send(body);
    });

  });


// GIF SEARCH =========================================================================

  app.get('/images/:search_term', function(req, res) {

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=41fda80f95e103ff732e3b249cf96282&tags=' + req.params.search_term + '&format=json&nojsoncallback=1&text=' + req.params.search_term + '&extras=url_l', function(error, response, body) {
      res.send(body);
    });

  });
