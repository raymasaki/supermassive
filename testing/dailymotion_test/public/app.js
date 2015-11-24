$(document).ready(function() {

  // search click =========================================================

  $('#search').click(function(e) {
    e.preventDefault();

    $.get('/videos/' + $('[name="search"]').val(), renderSingle, 'json');
  });

  // random click =========================================================

  $('#random').click(function(e) {
    e.preventDefault();

    $.get('/videos/random', renderSingle, 'json');
  });

});

var renderSingle = function(data) {

  var video_id = data.list[Math.floor(Math.random() * 100)].id;

  // debugger;

  $('#video-container').empty();

  $('#video-container').html('<iframe frameborder="0" width="100%" height="100%" src="//www.dailymotion.com/embed/video/' + video_id + '?autoplay=1" allowfullscreen></iframe>');

};
