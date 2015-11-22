$(function() {
	// $('#search-box').on('click', '#search', search);
	// $('#search-box').on('click', '#random', randomVideoSearch);
	// $('#vimeo-container').on('click', 'button', toggleUrl);
  randomVideoSearch();
});

var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};
var toggleUrl = function() {
	var button = $(this);
	var url = button.attr('data-value');
	button.siblings('img').attr('src', url);
};

/*var	search = function() {
	var searchTerm = $('[name="search"]').val()
	$.ajax({
		url: '/search/' + searchTerm,
		method: 'GET'
		})
	 .done(renderSingle)
	 .fail(errorMessage);
};*/
var randomVideoSearch = function() {
	// $.ajax({
	// 	url: '/random',
	// 	method: 'GET'
	// 	})
	//  .done(renderRandom)
	//  .fail(errorMessage);

  $.get('/random', renderRandom, 'json');
};

var renderRandom = function (data) {
  console.log(data.html);
  $('body').append(data.html);
  document.getElementsByTagName('iframe')[0].src += '?&amp;autoplay=1';
	// var video = JSON.parse(data);
	// $('#vimeo-container').empty();
	// var videoDiv = $('<div>').addClass("video");
	// var url = $('<img width="500">').attr('src', video.data.url);
	// videoDiv.append(url);
  // $('vimeo-container').append(videoDiv);
  // window.setTimeout(randomVideoSearch, 3000);
};
