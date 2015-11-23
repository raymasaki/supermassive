$(document).ready(function() {

  // search click =========================================================

  $('#search').click(function(e) {
    e.preventDefault();

    $.get('/images/' + $('[name="search"]').val(), renderSingle, 'json');
  });

  // random click =========================================================

  $('#random').click(function(e) {
    e.preventDefault();

    $.get('/images/random', renderSingle, 'json');
  });

});

var renderSingle = function(data) {

  var image_url = data.photos.photo[Math.floor(Math.random() * 100)].url_l;

  $('#image-container').empty();

  $('#image-container').html('<img src=' + image_url + '>');

};
