$(document).ready(function() {

  console.log('loaded');

  // random autoplay click =========================================================

  $('#random-auto').click(function(e) {
    e.preventDefault();

    $.get('/texts/random', renderSingleText, 'json');
  });


  // random text click =========================================================

  $('#random-text').click(fetchTextsJson);

  // random video click =========================================================

  $('#random-video').click(fetchVideosJson);

  // random gif click =========================================================

  $('#random-gif').click(fetchGifsJson);

  // random image click =========================================================

  $('#random-image').click(fetchImagesJson);


});


// =============================================================================
// FETCH DATA  =================================================================
// =============================================================================


// FETCH TEXT RANDOM  =========================================================

var fetchTextsJson = function(data) {
  $.get('/texts/random', renderSingleText, 'json');
};

// FETCH VIDEO RANDOM  =========================================================

var fetchVideosJson = function(data) {
  $.get('/videos/random', renderSingleVideo, 'json');
};

// FETCH GIF RANDOM  =========================================================

var fetchGifsJson = function(data) {
  $.get('/gifs/random', renderSingleGif, 'json');
};

// FETCH IMAGE RANDOM  =========================================================

var fetchImagesJson = function(data) {
  $.get('/images/random', renderSingleImage, 'json');
};


// =============================================================================
// TIMER FUNCTIONS  ===========================================================
// =============================================================================


var textsTimer = function() {
  window.setTimeout(fetchTextsJson, 5000);
};
var videosTimer = function() {
  window.setTimeout(fetchVideosJson, 5000);
};
var gifsTimer = function() {
  window.setTimeout(fetchGifsJson, 5000);
};
var imagesTimer = function() {
  window.setTimeout(fetchImagesJson, 5000);
};

var clearTimers = function() {
  window.clearTimeout(textsTimer);
  window.clearTimeout(videosTimer);
  window.clearTimeout(gifsTimer);
  window.clearTimeout(imagesTimer);
};


// =============================================================================
// RENDER FUNCTIONS  ===========================================================
// =============================================================================


// RENDER SINGLE TEXT  =========================================================

var renderSingleText = function(data) {

  var $container = $('#results-container');

  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;


  $container.empty();

  $container.html('<p>' + post_summary + ' – @' + post_user + '</p>');

  // clears all running timeouts
  clearTimers();

  // sets new fetch
  textsTimer();

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

  // clears all running timeouts
  clearTimers();

  // sets new fetch
  gifsTimer();

};


// RENDER SINGLE IMAGE  =========================================================

var renderSingleImage = function(data) {

  var $container = $('#results-container');

  var image_url = data.photos.photo[Math.floor(Math.random() * 100)].url_l;

  $container.empty();

  $container.html('<img src=' + image_url + ' width="100%">');

  // clears all running timeouts
  clearTimers();

  // sets new fetch
  imagesTimer();

};
