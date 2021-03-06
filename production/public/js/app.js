$(document).ready(function() {

  $('#login, #signup').velocity({
    opacity: [1, 0]
  }, {
    duration: 500,
    delay: 100
  });

  // pulls current user ID json
  $.get('/currentuser', function(data) {
    currentId = data._id;
  }, 'json');

  $('#logo').velocity({
    opacity: [1, 0],
    scale: [1, 0.8]
  }, {
    duration: 1200,
    delay: 100,
    easing: [0.37, 0.36, 0.13,1]
  });

  $('#search-field').velocity({
    opacity: [1, 0]
  }, {
    duration: 500,
    delay: 300
  });

  $('#random-auto').velocity({
    opacity: [1, 0]
  }, {
    duration: 500,
    delay: 500
  });

  // =============================================================================
  // RANDOM BUTTON CLICKS  =======================================================
  // =============================================================================

  // random autoplay click =========================================================

  $('#random-auto > a').click(function() {
    random = true;

    $('li.home-link').show();
    $('.keys').hide();
    // $('#favorite').css('opacity', 1);

    $('.video-border').css({'z-index': 200, 'pointer-events': 'none'});
    $('.text-border').css({'z-index': 200, 'pointer-events': 'none'});
    $('.image-border').css({'z-index': 200, 'pointer-events': 'none'});
    $('.gif-border').css({'z-index': 200, 'pointer-events': 'none'});

    if (first === true) {
      $('#loading').show();

      window.setTimeout(function () {
        fetchRandom();
        $('#results-container').show();
        $('#search-box').hide();
      }, 5000);
    }

  });

  // random text click =========================================================

  $('.text-border').click(function() {

    $('.text-border').velocity({
      height: "40px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.video-border').velocity({
      height: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.image-border, .gif-border').velocity({
      width: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.text-border > p').fadeIn();
    $('.video-border > p, .image-border > p, .gif-border > p').fadeOut();

    // console.log('text clicked');
    fetchTextsJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if(e.keyCode == 40) { // down
      $('.text-border').click();
    }
  });

  // random video click =========================================================

  $('.video-border').click(function() {

    $('.video-border').velocity({
      height: "40px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.text-border').velocity({
      height: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.image-border, .gif-border').velocity({
      width: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.video-border > p').fadeIn();
    $('.text-border > p, .image-border > p, .gif-border > p').fadeOut();

    // console.log('video clicked');
    fetchVideosJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if (e.keyCode == 38) { // up
      $('.video-border').click();
    }
  });

  // random gif click =========================================================

  $('.gif-border').click(function() {

    $('.gif-border').velocity({
      width: "40px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.video-border, .text-border').velocity({
      height: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.image-border').velocity({
      width: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.gif-border > p').fadeIn();
    $('.video-border > p, .image-border > p, .text-border > p').fadeOut();

    // console.log('gif clicked');
    fetchGifsJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if (e.keyCode == 39) { // right
      $('.gif-border').click();
    }
  });

  // random image click =========================================================

  $('.image-border').click(function() {

    $('.image-border').velocity({
      width: "40px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.video-border, .text-border').velocity({
      height: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.gif-border').velocity({
      width: "24px"
    }, {
      duration: 600,
      delay: 100,
      easing: 'spring'
    });

    $('.image-border > p').fadeIn();
    $('.video-border > p, .text-border > p, .gif-border > p').fadeOut();

    // console.log('image clicked');
    fetchImagesJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.image-border').click();
    }
  });

  // =============================================================================
  // FAVORITES  ==================================================================
  // =============================================================================


  $('#favorite').click(function() {

    favoritedImg = currentImg;
    favoritedText = currentText;
    favoritedVideo = currentVideo;
    favoritedGif = currentGif;

    $('#favorite').addClass('loved');

    $searchterm = $('#search-field').val().toLowerCase();

    if (favoritedImg !== null) {
      $.post('/favorites', {title: favoritedImg.title, url: favoritedImg.url_l, userId: currentId, type: 'image'}, function() {
        console.log('favorited');
      });

    } else if (favoritedVideo !== null) {
      $.post('/favorites', {title: favoritedVideo.title, url: 'https://dailymotion.com/video/' + favoritedVideo.id, userId: currentId, type: 'video'}, function() {
        console.log('favorited');
      });

    } else if (favoritedText !== null) {
        if (random === true) {
          $.post('/favorites', {title: 'random from ' + favoritedText.blog_name, url: favoritedText.post_url, userId: currentId, type: 'text'}, function() {
          console.log('favorited');
          });
        } else {
          $.post('/favorites', {title: $searchterm + ' from ' + favoritedText.blog_name, url: favoritedText.post_url, userId: currentId, type: 'text'}, function() {
            console.log('favorited');
          });
        }

    } else {
      if (random === true) {
        $.post('/favorites', {title: 'random gif', url: favoritedGif.data.url, userId: currentId, type: 'gif'}, function() {
        console.log('favorited');
        });
      } else {
        $.post('/favorites', {title: $searchterm + ' gif', url: favoritedGif.data.url, userId: currentId, type: 'gif'}, function() {
          console.log('favorited');
        });
      }

    }
  });



  // =============================================================================
  // SEARCH FIELD  ===============================================================
  // =============================================================================


  $.get('/trendingsearch', calculateTrends, 'json');

  $('#search-field').keypress(function(e){

    // if enter is pressed triggers search-button click event
    if(e.which == 13) {

      $('li.home-link').show();

      // $('#favorite').css('opacity', 1);

      $('.video-border').css('pointer-events', 'auto');
      $('.text-border').css('pointer-events', 'auto');
      $('.image-border').css('pointer-events', 'auto');
      $('.gif-border').css('pointer-events', 'auto');

      // $('.video-border, .text-border').addClass('active-vertical');
      // $('.image-border, .gif-border').addClass('active-horizontal');

      $('.video-border, .text-border').velocity({
        height: "40px"
      }, {
        duration: 600,
        delay: 100,
        easing: 'spring'
      });

      $('.image-border, .gif-border').velocity({
        width: "40px"
      }, {
        duration: 600,
        delay: 100,
        easing: 'spring'
      });

      $('.video-border > p, .text-border > p, .image-border > p, .gif-border > p')
        .velocity({
          opacity: 1
        }, {
          duration: 200
        });

      $searchterm = $('#search-field').val().toLowerCase();

      // Posts to searches database
      $.post('/trendingsearch', {word: $searchterm}, function () {
        console.log($searchterm + ' added to database');
      });

      if (first === true) {
        $('#loading').show();

        window.setTimeout(function () {
          fetchRandomSearch();
          search = true;
          random = true;

          $('#results-container').show();
          $('#search-box').hide();
        }, 5000);
      }

    }

  });

});


// =============================================================================
// GLOBAL VARIABLES  ===========================================================
// =============================================================================


var random = false;
var search = false;
var first = true;
var $searchterm = '';

var currentImg;
var currentGif;
var currentVideo;
var currentText;
var favoritedImg;
var favoritedText;
var favoritedVideo;
var favoritedGif;

var currentId;


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
  $('#favorite').removeClass('loved');
};

// FETCH VIDEO RANDOM  =========================================================

var fetchVideosJsonRandom = function(data) {
  $.get('/videos/random', renderSingleVideo, 'json');
  $('#favorite').removeClass('loved');
};

// FETCH GIF RANDOM  =========================================================

var fetchGifsJsonRandom = function(data) {
  $.get('/gifs/random', renderSingleGif, 'json');
  $('#favorite').removeClass('loved');
};

// FETCH IMAGE RANDOM  =========================================================

var fetchImagesJsonRandom = function(data) {
  $.get('/images/random', renderSingleImage, 'json');
  $('#favorite').removeClass('loved');
};




// FETCH TEXT SEARCH  =========================================================

var fetchTextsJsonSearch = function(data) {
  $.get('/texts/' + $searchterm, renderSingleText, 'json');
  $('#favorite').removeClass('loved');
};

// FETCH VIDEO SEARCH  =========================================================

var fetchVideosJsonSearch = function(data) {
  $.get('/videos/' + $searchterm, renderSingleVideo, 'json');
  $('#favorite').removeClass('loved');
};

// FETCH GIF SEARCH  =========================================================

var fetchGifsJsonSearch = function(data) {
  $.get('/gifs/' + $searchterm, renderSingleGif, 'json');
  $('#favorite').removeClass('loved');
};

// FETCH IMAGE SEARCH  =========================================================

var fetchImagesJsonSearch = function(data) {
  $.get('/images/' + $searchterm, renderSingleImage, 'json');
  $('#favorite').removeClass('loved');
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
  currentImg = null;
  currentGif = null;
  currentVideo = null;
  currentText = post;


  $container.empty();

  $container.html('<div class="textbox"><p>' + post_summary + '<br><span class="attr">– @' + post_user + '</span></p></div>');

  // clears all running timeouts
  clearTimers();


  if (random === true && search === true) {
    // new search fetch
    textsTimer = window.setTimeout(fetchRandomSearch, 5000);
  } else if (random === true && search === false) {
    // new random fetch
    textsTimer = window.setTimeout(fetchRandom, 5000);
  } else if (random === false && search === true) {
    // new search fetch
    textsTimer = window.setTimeout(fetchTextsJsonSearch, 5000);
  } else {
    // sets new fetch
    textsTimer = window.setTimeout(fetchTextsJsonRandom, 5000);
  }


};

// RENDER SINGLE VIDEO  =========================================================

var renderSingleVideo = function(data) {

  var $container = $('#results-container');


  var video = data.list[Math.floor(Math.random() * 100)];
  video_id = video.id;
  currentImg = null;
  currentGif = null;
  currentVideo = video;
  currentText = null;
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
  } else if (random === false && search === true) {
    // new search fetch
    videosTimer = window.setTimeout(fetchVideosJsonSearch, 10000);
  } else {
    // sets new fetch
    videosTimer = window.setTimeout(fetchVideosJsonRandom, 10000);
  }

};


// RENDER SINGLE GIF  =========================================================

var renderSingleGif = function(data) {

  var $container = $('#results-container');


  var gif_url = data.data.image_original_url;
  currentImg = null;
  currentGif = data;
  currentVideo = null;
  currentText = null;


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
  } else if (random === false && search === true) {
    // new search fetch
    gifsTimer = window.setTimeout(fetchGifsJsonSearch, 5000);
  } else {
    // new random fetch
    gifsTimer = window.setTimeout(fetchGifsJsonRandom, 5000);
  }

};


// RENDER SINGLE IMAGE  =========================================================

var renderSingleImage = function(data) {

  var $container = $('#results-container');


  var image = data.photos.photo[Math.floor(Math.random() * 100)];
  var image_url = image.url_l;
  currentImg = image;
  currentGif = null;
  currentVideo = null;
  currentText = null;


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
  } else if (random === false && search === true) {
    // new search fetch
    imagesTimer = window.setTimeout(fetchImagesJsonSearch, 5000);
  } else {
    // sets new fetch
    imagesTimer = window.setTimeout(fetchImagesJsonRandom, 5000);
  }

};
