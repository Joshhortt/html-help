$(document).ready(function() {

  $("button.click").click(function()  {
    $("body").addClass("dark");
  });

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

$("button.fadeOut").click(function(){
  $("#links").fadeOut();
  $("#links").fadeOut("slow");
  $("#links").fadeOut(3000);
});


});
