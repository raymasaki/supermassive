$(document).ready(function() {

  $.get('/trending', calculateTrends, 'json');
  $.get('/trending', renderTrending, 'json');

  $('body').on('click', '#search-button', function(e) {
    e.preventDefault();

    // Takes value of search field
    var $searchterm = $('#search-field').val().toLowerCase();

    /*$.post('/trending', search.findOneAndUpdate({name: $searchterm}, {$inc: {count: 1}}, {upsert: true}, function(err) {
      if (err) console.log(err);
    }), function (data, status) {
      console.log('added count');
    });*/

    /*var match = false;
    // Adds search term to database
    words.forEach(function (word) {
      if ($searchterm == word.word) {
        console.log('found');
        match = true;
      }
    });

    if (match == true) {
      $.get('/count', function (data, status) {
        console.log('added count');
      });
    } else {
      $.post('/trending', {word: $searchterm, count: 1}, function (data, status) {
        console.log($searchterm + ' added to database');
      });
    };*/
    $.post('/trending', {word: $searchterm}, function () {
      console.log($searchterm + ' added to database');
    });
    // Clears search field
    $('#search-field').val('');
    $.get('/trending', calculateTrends, 'json');
    $.get('/trending', renderTrending, 'json');
  });
});


// Render Trending All ===========================================

var words = null;

var calculateTrends = function(data) {
  words = data;
};

// Render Trending Single ===========================================

var renderTrending = function(data) {

  var $container = $('#trending');
  $container.empty();
  /*data.forEach(function(word) {
    var $li = $('<li>');
    $li.append(word.word);
    $container.append($li);
  });*/

  var trendy = data;
  for (var i = 0; i < 5; i++) {
    var $li = $('<li>');
    $li.append(trendy[i].word + ': ' + trendy[i].count);
    $container.append($li);
  }

};
