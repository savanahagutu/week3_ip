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


/*Submit section*/
$(document).ready(function(){
  $("#form").submit(function(event){
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
