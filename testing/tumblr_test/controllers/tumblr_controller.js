app.get('/gifs/:search_term', function(req, res) {

  request('http://api.tumblr.com/v2/tagged?tag=' + encodeURI(req.params.search_term)+'&api_key=bhFzZZxxHsx7WOdVw9v2Ysc99PwlEFKPfEUnudbtJh0xvLGnN9', function(error, response, body) {
    res.send(body);
  });

});
