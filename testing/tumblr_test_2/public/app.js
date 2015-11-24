$(document).ready(function() {

  // search click =========================================================

  $('#search').click(function(e) {
    e.preventDefault();

    $.get('/posts/' + $('[name="search"]').val(), renderSingle, 'json');
  });

  // random click =========================================================

  $('#random').click(function(e) {
    e.preventDefault();

    $.get('/posts/random', renderSingle, 'json');
  });

});

var renderSingle = function(data) {

  var post = data.response[Math.floor(Math.random() * 20)];
  var post_user = post.blog_name;
  var post_summary = post.summary;


  $('#posts-container').empty();

  $('#posts-container').html('<p>' + post_summary + ' – @' + post_user + '</p>');

};
