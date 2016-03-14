//Logic

//User

var wordCount = require('./journal.js').wordCount;
var moment = require('moment');

var journal = require("./journal.js");


$(document).ready(function(){
$('#submit-click').click(function(){
  event.preventDefault();

  var body = $('#body').val();
  var title = $('#title').val();
  var journalEntry = new journal(title, body);

  $('.entry').append("<p> Word Count:" + journalEntry.getCount() + " Date: " + journalEntry.getDateStamp()  + "</p>" );

  });
});
