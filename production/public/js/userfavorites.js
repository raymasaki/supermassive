$(document).ready(function () {

  $.get('/favorites', renderFavorites, 'json');

  $('.profilelist').velocity({
    opacity: [1, 0]
  }, {
    duration: 500,
    delay: 100
  });

});


// =============================================================================
// RENDER FAVORITES  ===========================================================
// =============================================================================


var renderFavorites = function(data) {

  var $container = $('ul.favorites');
  $container.empty();

  var favorites = data;

  if (favorites.length === 0) {
    $container.html('<p style="text-align: center; padding: 60px 0;">You don\'t have any favorites</p>');
  } else {
    for (var i = 0; i < 20; i++) {
        var $li = $('<li>');
        $li.html('<a href=' + favorites[i].url + ' target="_blank">' + favorites[i].title + '</a><br><span class="' + favorites[i].type + '-type"> ' + favorites[i].type + '</span> <span class="timestamp">– ' + moment(favorites[i].created).fromNow() + '</span>');
        $container.append($li);
    }
  }


};
