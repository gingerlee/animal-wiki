$(document).ready(function(){
  var slugClicked =  $("#slugbtn").click(function() {
    var slugOn = true
      if (slugOn === true){
        $("#slug").toggle();
        $("#sloth").hide();
        $("#sealion").hide();
      }
  });

  var slothClicked =  $("#slothbtn").click(function(){
    var slothOn = true
      if (slothOn === true){
        $("#sloth").toggle();
        $("#slug").hide();
        $("#sealion").hide();
      }
  });

  var sealionClicked =  $("#sealionbtn").click(function(){
    var  sealionOn = true
      if (sealionOn === true){
        $("#sealion").toggle();
        $("#sloth").hide();
        $("#slug").hide();
      }
  });

});
