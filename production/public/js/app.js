$(document).ready(function () {

  console.log('loaded');

  // random text click =========================================================

  $('#random-text').click(function(e) {
    e.preventDefault();

    $.get('/texts/random', renderSingleText, 'json');
  });

  // random video click =========================================================

  $('#random-video').click(function(e) {
    e.preventDefault();

    $.get('/videos/random', renderSingleVideo, 'json');
  });

  // random gif click =========================================================

  $('#random-gif').click(function(e) {
    e.preventDefault();

    $.get('/gifs/random', renderSingleGif, 'json');
  });

  // random image click =========================================================

  $('#random-image').click(function(e) {
    e.preventDefault();

    $.get('/images/random', renderSingleImage, 'json');
  });


});

// RENDER SINGLE TEXT  =========================================================

var renderSingleText = function(data) {

  var $container = $('#results-container');

  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;


  $container.empty();

  $container.html('<p>' + post_summary + ' – @' + post_user + '</p>');

};

// RENDER SINGLE VIDEO  =========================================================

var renderSingleVideo = function(data) {

  var $container = $('#results-container');

  var video_id = data.list[Math.floor(Math.random() * 100)].id;

  $container.empty();

  $container.html('<iframe frameborder="0" width="100%" height="100%" src="//www.dailymotion.com/embed/video/' + video_id + '?autoplay=1" allowfullscreen></iframe>');

};


// RENDER SINGLE GIF  =========================================================

var renderSingleGif = function(data) {

  var $container = $('#results-container');

  var gif_url = data.data.image_original_url;

  $container.empty();

  $container.html('<img src=' + gif_url + ' width="100%">');

};


// RENDER SINGLE IMAGE  =========================================================

var renderSingleImage = function(data) {

  var $container = $('#results-container');

  var image_url = data.photos.photo[Math.floor(Math.random() * 100)].url_l;

  $container.empty();

  $container.html('<img src=' + image_url + ' width="100%">');

};
