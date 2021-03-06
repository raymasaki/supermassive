$(document).ready(function() {

  console.log('loaded');

  // random autoplay click =========================================================

  $('#random-auto').click(function() {
    fetchRandom();
    random = true;
  });

  // random text click =========================================================

  $('#random-text').click(function() {
    fetchTextsJson();
    random = false;
  });

  // random video click =========================================================

  $('#random-video').click(function() {
    fetchVideosJson();
    random = false;
  });

  // random gif click =========================================================

  $('#random-gif').click(function() {
    fetchGifsJson();
    random = false;
  });

  // random image click =========================================================

  $('#random-image').click(function() {
    fetchImagesJson();
    random = false;
  });

  // favorite click ============================================================
  //CHANGES!!!!!!!!!
  $('#favorite').click(function() {
    //$.post('/favorite', {title: })
    favoritedImg = currentImg;
    favoritedText = currentText;
    favoritedVideo = currentVideo;
    favoritedGif = currentGif;
    if (favoritedImg !== null) {
      console.log(favoritedImg.title);
      console.log(favoritedImg.url_l);
    } else if (favoritedVideo !== null) {
      console.log(favoritedVideo.title);
      console.log('https://dailymotion.com/video/' + favoritedVideo.id);
    } else if (favoritedText !== null) {
      console.log(favoritedText.title);
      console.log(favoritedText.post_url);
    } else {
      //console.log($('#results-container') + ' from ' + favoritedGif.data.username);
      console.log(favoritedGif.data.url);
    };
  });
  //CHANGES!!!!!!!!!!
});

var random = false;


// =============================================================================
// FETCH DATA  =================================================================
// =============================================================================


// FETCH RANDOM  =========================================================


var fetchRandom = function () {

  var randomFetch = Math.floor(Math.random() * 4);

  switch (randomFetch) {
    case 0:
      fetchTextsJson();
      break;

    case 1:
      fetchVideosJson();
      break;

    case 2:
      fetchGifsJson();
      break;

    case 3:
      fetchImagesJson();
      break;

    default:
      console.log('Broken');
  }

};


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


var textsTimer;

var videosTimer;

var gifsTimer;

var imagesTimer;


var clearTimers = function() {
  window.clearTimeout(textsTimer);
  window.clearTimeout(videosTimer);
  window.clearTimeout(gifsTimer);
  window.clearTimeout(imagesTimer);
};


// =============================================================================
// RENDER FUNCTIONS  ===========================================================
// =============================================================================
//CHANGES!!!!!!!!!!!!!!!!!!!
var currentImg;
var currentGif;
var currentVideo;
var currentText;
var favoritedImg;
var favoritedText;
var favoritedVideo;
var favoritedGif;
//CHANGES!!!!!!!!!!!!!!!!!!

// RENDER SINGLE TEXT  =========================================================

var renderSingleText = function(data) {

  var $container = $('#results-container');
  //CHANGES!!!!!!!!!
  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;
  currentImg = null;
  currentGif = null;
  currentVideo = null;
  currentText = post;
  $container.empty();
  //CHANGES!!!!!!!!!!
  $container.html('<p>' + post_summary + ' – @' + post_user + '</p>');

  // clears all running timeouts
  clearTimers();


  if (random === true) {
    // new random fetch
    textsTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    textsTimer = window.setTimeout(fetchTextsJson, 5000);
  }


};

// RENDER SINGLE VIDEO  =========================================================

var renderSingleVideo = function(data) {

  var $container = $('#results-container');
  //CHANGES!!!!!!!!!
  var video = data.list[Math.floor(Math.random() * 100)];
  video_id = video.id;
  //var video_id = data.list[Math.floor(Math.random() * 100)].id;
  currentImg = null;
  currentGif = null;
  currentVideo = video;
  currentText = null;
  $container.empty();
  //CHANGES!!!!!!!!!
  $container.html('<iframe frameborder="0" width="100%" height="100%" src="//www.dailymotion.com/embed/video/' + video_id + '?autoplay=1&chromeless=1" allowfullscreen></iframe>');

  // clears all running timeouts
  clearTimers();

  if (random === true) {
    // new random fetch
    videosTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    videosTimer = window.setTimeout(fetchVideosJson, 10000);
  }

};


// RENDER SINGLE GIF  =========================================================

var renderSingleGif = function(data) {

  var $container = $('#results-container');
  //CHANGES!!!!!!!!!!
  var gif_url = data.data.image_original_url;
  currentImg = null;
  currentGif = data;
  currentVideo = null;
  currentText = null;
  //CHANGES!!!!!!!!!!
  $container.empty();

  $container.html('<img src=' + gif_url + ' width="100%">');

  // clears all running timeouts
  clearTimers();


  if (random === true) {
    // new random fetch
    gifsTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    gifsTimer = window.setTimeout(fetchGifsJson, 5000);
  }

};


// RENDER SINGLE IMAGE  =========================================================

var renderSingleImage = function(data) {
  //CHANGES!!!!!!!!
  var $container = $('#results-container');
  var image = data.photos.photo[Math.floor(Math.random() * 100)];
  //var image_url = data.photos.photo[Math.floor(Math.random() * 100)].url_l;
  var image_url = image.url_l;
  currentImg = image;
  currentGif = null;
  currentVideo = null;
  currentText = null;
  $container.empty();
  //CHANGES!!!!!!!
  $container.html('<img src=' + image_url + ' width="100%">');

  // clears all running timeouts
  clearTimers();


  if (random === true) {
    // new random fetch
    imagesTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    imagesTimer = window.setTimeout(fetchImagesJson, 5000);
  }

};
