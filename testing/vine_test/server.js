var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('App is listening on port 3000');
});

app.get('/search/:search_term', function(req, res) {
  request('https://api.vineapp.com/oembed.json?url=https%3A//vine.co/a2608a7f-ca25-44c4-ba90-a1389d9cfc0f' + encodeURI(req.params.search_term), function(error, response, body) {
    res.send(body);
  });
});

app.get('/random/', function(req, res) {
  request('https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2FMl16lZVTTxe', function(error, response, body) {
  	res.send(body)
  });
});

//https%3A%2F%2Fvine.co%2Fv%2FMl16lZVTTxe
//https://api.vineapp.com/users/profiles/908351379406458880
//https://api.vineapp.com/oembed.json?url=https%3A//vine.co/a2608a7f-ca25-44c4-ba90-a1389d9cfc0f
//https://vine.co/oembed.json?url=https%3A//vine.co/a2608a7f-ca25-44c4-ba90-a1389d9cfc0f
