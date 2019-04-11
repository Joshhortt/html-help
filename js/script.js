$(document).ready(function() {
  $(".clickable").click(function() {
    $("#forums-showing").slideToggle();
    $("#forums-hidden").slideToggle();
  });

  $(".clickable-one").click(function() {
    $("#tools-showing").toggle();
    $("#tools-hidden").toggle();
  });

  $(".clickable-two").click(function() {
    $("#links-showing").fadeToggle();
    $("#links-hidden").fadeToggle();
  });
/*
  $(".clickable-three").click(function() {
    $("#faqs-showing").fadeIn();
    $("#faqs-hidden").fadeIn();
  });
*/

});
