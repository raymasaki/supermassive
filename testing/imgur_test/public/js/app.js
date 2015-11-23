$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('click', '#random', randomImgSearch);
	$('#img-container').on('click', 'button', toggleUrl);
});

var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};
var toggleUrl = function() {
	var button = $(this);
	var url = button.attr('data-value');
	button.siblings('img').attr('src', url);
};

var randomImgSearch = function() {
	$.ajax({
		url: '/random',
		method: 'GET',
    headers: {
        Authorization: 'Client-ID'
      }
		})
	 .done(renderRandom)
	 .fail(errorMessage)
};

var renderRandom = function (data) {
	var img = JSON.parse(data);
	$('#img-container').empty();
	var imgDiv = $('<div>').addClass("img");
	var image = $('<img>').attr('src', img.data.title);
	imgDiv.append(image);
  $('#img-container').append(imgDiv);
  console.log(img);
  //window.setTimeout(randomImgSearch, 3000);
};
