var express     = require('express'),
    logger      = require('morgan'),
    request     = require('request'),
    bodyParser  = require('body-parser'),
    twit        = require('twitter'),
    util        = require('util'),
    app         = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.get('/twitter/', function(req, res) {

  twitter.stream('statuses/filter', {

  track: 'cats'

  }, function(stream) {

    stream.on("data", function(data) {
      // console.log(util.inspect(data));
      // console.log('\n\n' + data);
      res.send(data);

      stream.destroy();
      process.exit(0);
    });

  });

});
