var moment = require('moment');
var Journal = require("./journal.js");
//prototypes do not need to be exported (Constructors include all prototypes)

$(document).ready(function(){
$('#submit-click').click(function(){
  event.preventDefault();

  var body = $('#body').val();
  var title = $('#title').val();
  var journalEntry = new Journal(title, body);

  $('.entry').append("<p> Title:" + title + "</p>");
  $('.entry').append("<p>" + body + "</p>");
  $('.entry').append("<p> Word Count:" + journalEntry.getCount() + " Date: " + journalEntry.getDateStamp()  + "</p>");
  });
});
