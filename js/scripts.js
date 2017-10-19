$(document).ready(function(){
  var slugClicked =  $("#slugbtn").click(function() {

  if (slugClicked){
    $("#slug").toggle();
    $("#sloth").hide();
    $("#sealion").hide();
  }
  });

  var slothClicked =  $("#slothbtn").click(function(){

  if (slothClicked){
    $("#sloth").toggle();
    $("#slug").hide();
    $("#sealion").hide();
  }
  });

  var sealionClicked =  $("#sealionbtn").click(function(){

  if (sealionClicked){
    $("#sealion").toggle();
    $("#sloth").hide();
    $("#slug").hide();
  }
  });

});
