$(document).ready(function () {

  $.get('/favorites', renderFavorites, 'json');

});


// =============================================================================
// RENDER FAVORITES  ===========================================================
// =============================================================================


var renderFavorites = function(data) {

  var $container = $('ul.favorites');
  $container.empty();

  var favorites = data;

  for (var i = 0; i < 20; i++) {
      var $li = $('<li>');
      $li.html('<a href=' + favorites[i].url + ' target="_blank">' + favorites[i].title + '</a><br><span class="' + favorites[i].type + '-type"> ' + favorites[i].type + '</span> <span class="timestamp">– ' + moment(favorites[i].created).fromNow() + '</span>');
      $container.append($li);
  }

};
