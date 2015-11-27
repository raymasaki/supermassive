var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    curl = require('curlrequest'),
    OAuth = require('oauth'),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

var oauth = new OAuth.OAuth(
   process.env.IMGUR_CLIENT_ID,
   process.env.IMGUR_CLIENT_SECRET,
   '1.0A',
   null,
   'HMAC-SHA1'
 );

/*var imgurClient = new ImgurAuthentication(IMGUR_CLIENT_ID, IMGUR_CLIENT_SECRET);
var oAuth2Endpoint = new OAuth2Endpoint(imgurClient);
var redirectUrl = oAuth2Endpoint.GetAuthorizationUrl(OAuth2ResponseType.Token, null);*/

app.get('/random', function(req, res) {
  request('https://api.imgur.com/3/gallery/random/random', function(error, response, body) {
    res.send(body)
  });
});

// -H Authorization: " + encodeURI(IMGUR_CLIENT_ID)
//export IMGUR_CLIENT_ID='6071cb8739d9e9b'
//export IMGUR_CLIENT_SECRET='4e0c76cc54ab0ff596970171c82a00375286d4c4'
