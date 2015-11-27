$(document).ready(function () {
  console.log('loaded');


  /* Making Logo the home link *******************************/
  $(".logo-login").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  /* Making Divs links to different paths ********************/

  $(".top-border").click(function() {
    window.location = $(this).find("a").attr("href='video/random'");
    return false;
  });

  $(".bottom-border").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $(".right-border").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $(".left-border").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  /* Greeting will randomize when user logs in  ************/

  var myGreeting = new Array();
    myGreeting[0] = "Ahoy ";
    myGreeting[1] = "Looking good today ";
    myGreeting[2] = "Greetings ";
    myGreeting[3] = "Howdy ";
    myGreeting[4] = "You're my best friend ";
    myGreeting[5] = "Hi there ";
    myGreeting[6] = "Missed you ";
    myGreeting[7] = "Hello ";
    myGreeting[8] = "Hiya ";
    myGreeting[9] = "What's cracking "
    myGreeting[10] = "Find something fun today"
  var myRandom = Math.floor(Math.random()*myGreeting.length);

  $('#myGreeting').html(myGreeting[myRandom]);

/* Arrow key events for navigating site ******************/

  $(document).keydown(function(e){
      if (e.keyCode === 38)
        console.log( "up arrowkey pressed" );
      else if (e.keyCode === 40)
        console.log( "down arrowkey pressed" );
      else if (e.keyCode === 37)
        console.log( "left arrowkey pressed" );
      else (e.keyCode === 39)
        console.log( "right arrowkey pressed" );
  });

/*
  $(document).keydown(function(e){
      if (e.keyCode = 40)
        console.log( "down arrowkey pressed" );
  });

  $(document).keydown(function(e){
      if (e.keyCode = 37)
        console.log( "left arrowkey pressed" );
  });

  $(document).keydown(function(e){
      if (e.keyCode = 39)
        console.log( "right arrowkey pressed" );
  });

  $(document).keydown(function(e){
      if (e.keyCode = 36)
        console.log( "spacebar pressed" );
  });
*/
});
