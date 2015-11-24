var   mongoose = require('mongoose'),
       request = require('request'),
    bodyParser = require('body-parser');

module.exports.controller = function (app) {

// IMAGE RANDOM =========================================================================

  app.get('/images/random', function(req, res) {

    var randomTags = ['iphone', 'iphoneography', 'instagramapp', 'square', 'squareformat', 'art', 'architecture', 'canon', 'nikon'];
    var tag = randomTags[Math.floor(Math.random() * randomTags.length)];

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + encodeURI(process.env.FLICKR_CONSUMER_KEY) + '&tags=' + tag + '&format=json&nojsoncallback=1&text=' + tag + '&extras=url_l',
    	function(error, response, body) {
    	res.send(body);
    });

  });


// IMAGE SEARCH =========================================================================

  app.get('/images/:search_term', function(req, res) {

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + encodeURI(process.env.FLICKR_CONSUMER_KEY) + '&tags=' + req.params.search_term + '&format=json&nojsoncallback=1&text=' + req.params.search_term + '&extras=url_l', function(error, response, body) {
      res.send(body);
    });

  });

};
