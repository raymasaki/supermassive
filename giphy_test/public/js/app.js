$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('click', '#random', randomGifSearch);
	$('#gif-container').on('click', 'button', toggleUrl);
});

var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};
var toggleUrl = function() {
	var button = $(this);
	var url = button.attr('data-value');
	button.siblings('img').attr('src', url);
};

//ajax our server
var	search = function() {
	var searchTerm = $('[name="search"]').val()
	$.ajax({
		url: '/search/' + searchTerm,
		method: 'GET'
		})
	 .done(renderSingle)
	 .fail(errorMessage);
};
var randomGifSearch = function() {
	$.ajax({
		url: '/random',
		method: 'GET'
		})
	 .done(renderRandom)
	 .fail(errorMessage);
};

var renderRandom = function (data) {
	var gif = JSON.parse(data);
	$('#gif-container').empty();
	var gifDiv = $('<div>').addClass("gif")
	var img = $('<img width="500">').attr('src', gif.data.image_original_url);
	gifDiv.append(img)
  $('#gif-container').append(gifDiv);
  window.setTimeout(randomGifSearch, 3000);
};

var renderSingle = function(data) {
  $('#gif-container').empty();
  var gif = JSON.parse(data)
  var gifDiv = $('<div>').addClass("gif")
  var img = $('<img width="500">').attr('src', gif.data.image_original_url);
  gifDiv.append(img)
  $('#gif-container').append(gifDiv);

};

var render = function (data) {
	var response = JSON.parse(data);
	$('#gif-container').empty()
	var results = response.data;
	if (results.length > 1) {
	 	var renderedResults = results.forEach(function(gif) {
	 		var gifDiv = $('<div>').addClass("gif")
			var img = $('<img>').attr('src', gif.images.fixed_width_still.url);
			var startButton = $('<button>').addClass('start').attr('data-value', gif.images.fixed_width.url).text('start')
			var stopButton = $('<button>').addClass('stop').attr('data-value', gif.images.fixed_width_still.url).text('stop')
			gifDiv.append(img).append(startButton).append(stopButton);
			$('#gif-container').append(gifDiv);
	 	});
	}else{
		var gif = response.data;
		var gifDiv = $('<div>').addClass("gif")
		var img = $('<img>').attr('src', gif.images.fixed_width_still.url);
		var startButton = $('<button>').addClass('start').attr('data-value', gif.images.fixed_width.url).text('start')
		var stopButton = $('<button>').addClass('stop').attr('data-value', gif.images.fixed_width_still.url).text('stop')
		gifDiv.append(img).append(startButton).append(stopButton);
		$('#gif-container').append(gifDiv);
	}
};
