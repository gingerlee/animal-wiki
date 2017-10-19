$(document).ready(function(){
  var slugClicked =  $("#slugbtn").click(function(event){
    event.preventDefault();

  if (slugClicked){
    $("#slug").toggle();
  }
  });
});
