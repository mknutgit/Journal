//Logic

function wordCount(string) {
  return string.split(" ").length;
}




//User

$(document).ready(function(){
$('#submit-click').click(function(){
  event.preventDefault();
  var word = $('#body').val();
  $('.entry').append("<p>" + wordCount(word) + "</p>");
  });
});
