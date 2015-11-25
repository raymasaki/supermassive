$(document).ready(function() {

  console.log('loaded');

  // =============================================================================
  // RANDOM BUTTON CLICKS  =======================================================
  // =============================================================================

  // random autoplay click =========================================================

  $('#random-auto > a').click(function() {
    fetchRandom();
    random = true;

    $('#results-container').show();
    $('#search-box').hide();
  });

  // random text click =========================================================

  $('#random-text').click(function() {
    fetchTextsJsonRandom();
    random = false;
  });

  // random video click =========================================================

  $('#random-video').click(function() {
    fetchVideosJsonRandom();
    random = false;
  });

  // random gif click =========================================================

  $('#random-gif').click(function() {
    fetchGifsJsonRandom();
    random = false;
  });

  // random image click =========================================================

  $('#random-image').click(function() {
    fetchImagesJsonRandom();
    random = false;
  });


  // =============================================================================
  // SEARCH FIELD  ===============================================================
  // =============================================================================


  $.get('/trendingsearch', calculateTrends, 'json');

  $('#search-button').click(function() {
    $searchterm = $('#search-field').val().toLowerCase();

    // Posts to searches database
    $.post('/trendingsearch', {word: $searchterm}, function () {
      console.log($searchterm + ' added to database');
    });

    $.get('/trendingsearch', calculateTrends, 'json');
    // $.get('/trendingsearch', renderTrending, 'json');

    fetchRandomSearch();
    search = true;
    random = true;

    $('#results-container').show();
    $('#search-box').hide();
  });

  $('#search-field').keypress(function(e){
    // if enter is pressed triggers search-button click event
    if(e.which == 13) {
      $('#search-button').click();
    }

  });


});


// =============================================================================
// GLOBAL VARIABLES  ===========================================================
// =============================================================================


var random = false;
var search = false;
var $searchterm = '';



// =============================================================================
// CALCULATE TRENDS  ===========================================================
// =============================================================================


var words = null;

var calculateTrends = function(data) {
  words = data;
};


// =============================================================================
// FETCH DATA  =================================================================
// =============================================================================


// FETCH RANDOM  =========================================================


var fetchRandom = function () {

  var randomFetch = Math.floor(Math.random() * 4);

  switch (randomFetch) {
    case 0:
      fetchTextsJsonRandom();
      break;

    case 1:
      fetchVideosJsonRandom();
      break;

    case 2:
      fetchGifsJsonRandom();
      break;

    case 3:
      fetchImagesJsonRandom();
      break;

    default:
      console.log('Broken');
  }

};

// FETCH RANDOM SEARCH  =========================================================


var fetchRandomSearch = function () {

  var randomFetch = Math.floor(Math.random() * 4);

  switch (randomFetch) {
    case 0:
      fetchTextsJsonSearch();
      break;

    case 1:
      fetchVideosJsonSearch();
      break;

    case 2:
      fetchGifsJsonSearch();
      break;

    case 3:
      fetchImagesJsonSearch();
      break;

    default:
      console.log('Broken');
  }

};


// FETCH TEXT RANDOM  =========================================================

var fetchTextsJsonRandom = function(data) {
  $.get('/texts/random', renderSingleText, 'json');
};

// FETCH VIDEO RANDOM  =========================================================

var fetchVideosJsonRandom = function(data) {
  $.get('/videos/random', renderSingleVideo, 'json');
};

// FETCH GIF RANDOM  =========================================================

var fetchGifsJsonRandom = function(data) {
  $.get('/gifs/random', renderSingleGif, 'json');
};

// FETCH IMAGE RANDOM  =========================================================

var fetchImagesJsonRandom = function(data) {
  $.get('/images/random', renderSingleImage, 'json');
};




// FETCH TEXT SEARCH  =========================================================

var fetchTextsJsonSearch = function(data) {
  $.get('/texts/' + $searchterm, renderSingleText, 'json');
};

// FETCH VIDEO SEARCH  =========================================================

var fetchVideosJsonSearch = function(data) {
  $.get('/videos/' + $searchterm, renderSingleVideo, 'json');
};

// FETCH GIF SEARCH  =========================================================

var fetchGifsJsonSearch = function(data) {
  $.get('/gifs/' + $searchterm, renderSingleGif, 'json');
};

// FETCH IMAGE SEARCH  =========================================================

var fetchImagesJsonSearch = function(data) {
  $.get('/images/' + $searchterm, renderSingleImage, 'json');
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


// RENDER SINGLE TEXT  =========================================================

var renderSingleText = function(data) {

  var $container = $('#results-container');

  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;


  $container.empty();

  $container.html('<div class="textbox"><p>' + post_summary + '<br>– @' + post_user + '</p></div>');

  // clears all running timeouts
  clearTimers();


  if (random === true && search === true) {
    // new search fetch
    textsTimer = window.setTimeout(fetchRandomSearch, 5000);
  } else if (random === true && search === false) {
    // new random fetch
    textsTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    textsTimer = window.setTimeout(fetchTextsJsonRandom, 5000);
  }


};

// RENDER SINGLE VIDEO  =========================================================

var renderSingleVideo = function(data) {

  var $container = $('#results-container');
  // debugger;

  var video_id = data.list[Math.floor(Math.random() * 100)].id;

  $container.empty();

  $container.html('<iframe frameborder="0" width="100%" height="100%" src="//www.dailymotion.com/embed/video/' + video_id + '?autoplay=1&chromeless=1" allowfullscreen></iframe>');

  // clears all running timeouts
  clearTimers();

  if (random === true && search === true) {
    // new search fetch
    videosTimer = window.setTimeout(fetchRandomSearch, 10000);
  } else if (random === true && search === false) {
    // new random fetch
    videosTimer = window.setTimeout(fetchRandom, 10000);
  } else {
    // sets new fetch
    videosTimer = window.setTimeout(fetchVideosJsonRandom, 10000);
  }

};


// RENDER SINGLE GIF  =========================================================

var renderSingleGif = function(data) {

  var $container = $('#results-container');

  var gif_url = data.data.image_original_url;

  $container.empty();

  $container.html('<img src=' + gif_url + ' width="100%">');

  // clears all running timeouts
  clearTimers();


  if (random === true && search === true) {
    // new search fetch
    gifsTimer = window.setTimeout(fetchRandomSearch, 5000);
  } else if (random === true && search === false) {
    // new random fetch
    gifsTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    gifsTimer = window.setTimeout(fetchGifsJsonRandom, 5000);
  }

};


// RENDER SINGLE IMAGE  =========================================================

var renderSingleImage = function(data) {

  var $container = $('#results-container');

  var image_url = data.photos.photo[Math.floor(Math.random() * 100)].url_l;

  $container.empty();

  $container.html('<img src=' + image_url + ' width="100%">');

  // clears all running timeouts
  clearTimers();


  if (random === true && search === true) {
    // new search fetch
    imagesTimer = window.setTimeout(fetchRandomSearch, 5000);
  } else if (random === true && search === false) {
    // new random fetch
    imagesTimer = window.setTimeout(fetchRandom, 5000);
  } else {
    // sets new fetch
    imagesTimer = window.setTimeout(fetchImagesJsonRandom, 5000);
  }

};
