var wordCount = require('./journal.js').wordCount;
var prompt = require('prompt');
var moment = require('moment');
prompt.start();


prompt.get('entry', function(err, result) {
  var result = wordCount(result.entry);
  console.log(result);
  console.log(moment().format());
});
