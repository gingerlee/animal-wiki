$(document).ready(function(){
  var slugClicked =  $("#slugbtn").click(function() {

  if (slugClicked){
    $("#slug").toggle();
    // $("#sloth #sealion").hide();
  }
  });

  var slothClicked =  $("#slothbtn").click(function(){

  if (slothClicked){
    $("#sloth").toggle();
    // $("#slug #sealion").hide();
  }
  });

  var sealionClicked =  $("#sealionbtn").click(function(){

  if (sealionClicked){
    $("#sealion").toggle();
    // $("#slug #sloth").hide();
  }
  });

});
