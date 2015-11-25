$(document).ready(function () {
  $.get('/trendingsearch', renderTrending, 'json');
});


// =============================================================================
// RENDER TRENDING  ============================================================
// =============================================================================


var renderTrending = function(data) {

  var $container = $('.trending');
  $container.empty();

  var trends = data;

  for (var i = 0; i < 5; i++) {
    var $li = $('<li>');

    var count = trends[i].count;
    var countWord = '';

    if (count === 1) {
      countWord = count + ' time';
    } else {
      countWord = count + ' times';
    }

    $li.html('<span class="trend-word">' + capitalize(trends[i].word) + '</span><br><span class="count">Searched ' + countWord + '</span>');
    $container.append($li);
  }

};

var capitalize = function (string) {

    var words = string.split(' ');

    var capitalized = [];

    words.forEach(function (word) {
      capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
    });

    return capitalized.join(' ');

};
