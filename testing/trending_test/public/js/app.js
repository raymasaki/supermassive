$(document).ready(function() {

  $.get('/trending', calculateTrends, 'json');

  $('body').on('click', '#search-button', function(e) {
    e.preventDefault();

    // Takes value of search field
    var $searchterm = $('#search-field').val();

    // Adds search term to database
    words.forEach(function (word) {
      if ($searchterm === word.word) {
        console.log('found');
      } else {
        console.log('added');
      }
    });

    $.get('/count', function (data, status) {
      console.log('added count');
    });

    // $.post('/trending', {word: $searchterm, count: 1}, function (data, status) {
    //   console.log($searchterm + ' added to database');
    // });


    // Clears search field
    $('#search-field').val('');

  });

});


// Render Trending All ===========================================

var words = null;

var calculateTrends = function(data) {
  words = data;
};

// Render Trending Single ===========================================

var renderTrendingSingle = function(data) {

  var $container = $('#trending');

  data.forEach(function(word) {
    var $li = $('<li>');
    $li.append(word.word);
    $container.append($li);
  });
};
