$(document).ready(function () {
  $.get('/favorites', renderFavorites, 'json');
});


// =============================================================================
// RENDER FAVORITES  ===========================================================
// =============================================================================


var renderFavorites = function(data) {

  var $container = $('#favorites-list');
  $container.empty();

  var favorites = data;

  var $li = $('<li>');
  $li.append($li);
  $container.append($li);
};
