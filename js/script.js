$(document).ready(function(){
    $("#button_1").click(function(){
      $("#button_1").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#button_1").slideDown('1500');
    });
  });
  





$(document).ready(function(){
    $("#button_2").click(function(){
      $("#button_2").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#button_2").slideDown('1500');
    });
  });
  
  
  $(document).ready(function(){
    $("#button_3").click(function(){
      $("#button_3").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#button_3").slideDown('1500');
    });
  });