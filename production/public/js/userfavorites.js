$(document).ready(function () {

  console.log('userfavorites loaded');

  $.get('/favorites', renderFavorites, 'json');

});


// =============================================================================
// RENDER FAVORITES  ===========================================================
// =============================================================================


var renderFavorites = function(data) {

  var $container = $('#favorites-list');
  $container.empty();

  var favorites = data;

  favorites.forEach(function (favorite) {
    var $li = $('<li>');
    $li.html('<a href=' + favorite.url + ' target="_blank">' + favorite.title + '</a> <span class="timestamp">' + favorite.created + '</span>');
    $container.append($li);
  });

};
