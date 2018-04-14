$(document).ready(function() {
  $(".clickable").click(function() {
    $("#forums-showing").slideToggle();
    $("#forums-hidden").slideToggle();
  });

  $(".clickable").click(function() {
    $("#tools-showing").slideToggle();
    $("#tools-hidden").tslideToggle();
  });

  $(".clickable").click(function() {
    $("#links-showing").slideToggle();
    $("#links-hidden").slideToggle();
  });

  $(".clickable").click(function() {
    $("#faqs-showing").slideToggle();
    $("#faqs-hidden").slideToggle();
  });

});
