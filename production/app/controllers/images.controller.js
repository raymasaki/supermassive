var   mongoose = require('mongoose'),
       request = require('request'),
    bodyParser = require('body-parser');

module.exports.controller = function (app) {

// IMAGE RANDOM =========================================================================

  app.get('/images/random', function(req, res) {

    var randomTags = ['iphone', 'iphoneography', 'instagramapp', 'square', 'squareformat', 'art', 'architecture', 'canon', 'nikon'];
    var tag = randomTags[Math.floor(Math.random() * randomTags.length)];

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=41fda80f95e103ff732e3b249cf96282&tags=' + tag + '&format=json&nojsoncallback=1&text=' + tag + '&extras=url_l',
    	function(error, response, body) {
    	res.send(body);
    });

  });


// IMAGE SEARCH =========================================================================

  app.get('/images/:search_term', function(req, res) {

    request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=41fda80f95e103ff732e3b249cf96282&tags=' + req.params.search_term + '&format=json&nojsoncallback=1&text=' + req.params.search_term + '&extras=url_l', function(error, response, body) {
      res.send(body);
    });

  });

};
