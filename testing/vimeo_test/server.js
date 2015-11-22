var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    Vimeo = require('vimeo').Vimeo,
    lib = new Vimeo(IMPORTANT NUMBERS HERE),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

/*lib.generateClientCredentials(public, function (err, access_token) {
  if (err) {
    throw err;
  }
  var token = access_token.access_token;
    var scopes = access_token.scope;
});*/

app.get('/random/', function(req, res) {
  request('https://vimeo.com/api/oembed.json?url=https://vimeo.com/76979871',
  	function(error, response, body) {
  	res.send(body)
  });
});

//https://vimeo.com/ondemand/lagoon/76254442
//https%3A//vimeo.com/76979871
