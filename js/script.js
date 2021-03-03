$(document) . ready(function(){
  $("#design").click(function(){
    $("p1").toggle("slow");
    $(".image1").toggle("slow");
  });

  $("#development").click(function(){
    $("p2").toggle("slow");
    $(".image2").toggle("slow");
  });

  $("#product").click(function(){
    $("p3").toggle("slow");
    $(".image3").toggle("slow");
  });

});