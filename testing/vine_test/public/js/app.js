$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('click', '#random', randomVineSearch);
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
var randomVineSearch = function() {
	$.ajax({
		url: '/random/',
		method: 'GET'
		})
	 .done(renderRandom)
	 .fail(errorMessage);
};

var renderRandom = function (data) {
  console.log(data.html);
  $('body').append(data.html);
  document.getElementsByTagName('iframe')[0]
  /*var vine = JSON.parse(data);
	$('#vine-container').empty();
	var vineDiv = $('<div>').addClass("vine");
	var video = $('<video>').attr('src', vine.data);
	vineDiv.append(video);
  $('#vine-container').append(vineDiv);*/
  //window.setTimeout(randomGifSearch, 3000);
};

var renderSingle = function(data) {
  var vine = JSON.parse(data);
	$('#vine-container').empty();
  var vineDiv = $('<div>').addClass("vine");
  var video = $('<video>').attr('src', vine.data);
  vineDiv.append(video);
  $('#vine-container').append(vineDiv);
	//window.setTimeout(search, 3000);
};
