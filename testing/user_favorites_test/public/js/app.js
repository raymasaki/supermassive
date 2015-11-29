$(document).ready(function() {

  console.log('loaded');
  //CHANGES!!!!!!!!!!!!!!!!!!!!
  $.get('/currentuser', function(data) {
    currentId = data._id;
  }, 'json');
  //CHANGES!!!!!!!!!!!!!!!!!!!!!
  // =============================================================================
  // RANDOM BUTTON CLICKS  =======================================================
  // =============================================================================

  // random autoplay click =========================================================

  $('#random-auto > a').click(function() {
    random = true;

    $('li.home-link').show();
    $('#favorite').show();
    $('.video-border').css('z-index', 200);
    $('.text-border').css('z-index', 200);
    $('.image-border').css('z-index', 200);
    $('.gif-border').css('z-index', 200);

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
    // console.log('video clicked');
    fetchVideosJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if(e.keyCode == 38) { // up
      $('.video-border').click();
    }
  });

  // random gif click =========================================================

  $('.gif-border').click(function() {
    // console.log('gif clicked');
    fetchGifsJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if(e.keyCode == 39) { // right
      $('.gif-border').click();
    }
  });

  // random image click =========================================================

  $('.image-border').click(function() {
    // console.log('image clicked');
    fetchImagesJsonSearch();
    random = false;
    search = true;
  });

  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // left
      $('.image-border').click();
    }
  });

  // =============================================================================
  // FAVORITES  ==================================================================
  // =============================================================================

  //CHANGES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('#favorite').click(function() {

    //$.post('/favorite', {title: })

    favoritedImg = currentImg;
    favoritedText = currentText;
    favoritedVideo = currentVideo;
    favoritedGif = currentGif;
    $searchterm = $('#search-field').val().toLowerCase();
    if (favoritedImg !== null) {
      $.post('/favorites', {title: favoritedImg.title, url: favoritedImg.url_l, userId: currentId}, function() {
        console.log('favorited');
      });
      console.log(favoritedImg.title);
      console.log(favoritedImg.url_l);
    } else if (favoritedVideo !== null) {
      $.post('/favorites', {title: favoritedVideo.title, url: 'https://dailymotion.com/video/' + favoritedVideo.id, userId: currentId}, function() {
        console.log('favorited');
      });
      console.log(favoritedVideo.title);
      console.log('https://dailymotion.com/video/' + favoritedVideo.id);
    } else if (favoritedText !== null) {
        if (random = true) {
          $.post('/favorites', {title: 'random from ' + favoritedText.blog_name, url: favoritedText.post_url, userId: currentId}, function() {
          console.log('favorited');
          });
        } else {
          $.post('/favorites', {title: $searchterm + ' from ' + favoritedText.blog_name, url: favoritedText.post_url, userId: currentId}, function() {
            console.log('favorited');
          });
          console.log($searchterm + ' from ' + favoritedText.blog_name);
          console.log(favoritedText.post_url);
        };
    } else {
      if (random = true) {
        $.post('/favorites', {title: 'random gif', url: favoritedGif.data.url, userId: currentId}, function() {
        console.log('favorited');
        });
      } else {
        $.post('/favorites', {title: $searchterm + ' from ' + favoritedGif.data.username, url: favoritedGif.data.url, userId: currentId}, function() {
          console.log('favorited');
        });
        console.log($searchterm + ' gif');
        console.log(favoritedGif.data.url);
      };
    }
    //CHANGES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });



  // =============================================================================
  // SEARCH FIELD  ===============================================================
  // =============================================================================


  $.get('/trendingsearch', calculateTrends, 'json');

  $('#search-field').keypress(function(e){

    // if enter is pressed triggers search-button click event
    if(e.which == 13) {

      $('li.home-link').show();
      $('#favorite').show();

      $('.video-border').css('z-index', 200);
      $('.text-border').css('z-index', 200);
      $('.image-border').css('z-index', 200);
      $('.gif-border').css('z-index', 200);

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
//CHANGES!!!!!!!!!!!!!!!!!!!!!!!
var currentId;
//CHANGES!!!!!!!!!!!!!!!!!!!!!!!

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


  //CHANGES!!!!!!!!!
  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;
  currentImg = null;
  currentGif = null;
  currentVideo = null;
  currentText = post;
  //CHANGES!!!!!!!!!!


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


  //CHANGES!!!!!!!!!
  var video = data.list[Math.floor(Math.random() * 100)];
  video_id = video.id;
  currentImg = null;
  currentGif = null;
  currentVideo = video;
  currentText = null;
  $container.empty();
  //CHANGES!!!!!!!!!


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


  //CHANGES!!!!!!!!
  var image = data.photos.photo[Math.floor(Math.random() * 100)];
  var image_url = image.url_l;
  currentImg = image;
  currentGif = null;
  currentVideo = null;
  currentText = null;
  //CHANGES!!!!!!!


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
