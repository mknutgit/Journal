//Logic

//User

var wordCount = require('./journal.js').wordCount;
var moment = require('moment');

$(document).ready(function(){
$('#submit-click').click(function(){
  event.preventDefault();
  var word = $('#body').val();
  $('.entry').append("<p> Word Count: "  + wordCount(word) + " Date: " + moment().format("MMM Do YY")  + "</p>" );

  });
});
