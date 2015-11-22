var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    curl = require('curlrequest'),
    app = express();


app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

app.get('/random', function(req, res) {
  curl("https://api.imgur.com/3/gallery/random/random -H 'Authorization: Client-Id bbXXXXXXXXX9cc'", function(error, response, body) {
    res.send(body)
  });
});
