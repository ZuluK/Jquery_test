
$(document).ready(function (){
//on click img is hidden or shows
  $(".button1").click(function(){
    $("img").toggle();
  });
// on doubleclick h1 changes to .bigfont
  $('.header h1').dblclick(function(){
    $('.header h1').toggleClass('bigfont');
  });
// adds to list item
  $('#btn').click(function(){
    $('#newList').append('<li>Item 3</li>');
  });
//on hover div box changes shape
  $('#box').hover(function(){
    $('#box').toggleClass('boxchange');
  });
//on mouse leave the text slidesUp
  $('h2').mouseleave(function(){
    $('h2').slideUp(3000);
  });
//on hover the div element fades out
  $('.header2').hover(function(){
    $('.header2').fadeOut();
  });
  $('#btn2').click(function(){
    $('.header2').fadeIn();
  });
});
