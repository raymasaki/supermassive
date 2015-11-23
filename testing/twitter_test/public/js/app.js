$(document).ready(function () {

  $('#random').click(function (e) {
    e.preventDefault();
    $.get('/twitter', renderTweet, 'json');
  });

});

var renderTweet = function (data) {

  var $container = $('#tweet-container');
  $container.empty();

  $container.html('<p>' + data.text + '<br>-@' + data.user.screen_name + '</p>');
};
