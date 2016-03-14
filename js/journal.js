//To Export functions use exports.functioname = function(){..}
//To Export Constructor use module.exports = ConstructorName (ref. line 23);
var moment = require('moment');

function Journal(title, body)
{
  this.title = title;
  this.body = body;
}

Journal.prototype.getCount = function()
{
  return this.body.split(" ").length + this.title.split(" ").length;
}


Journal.prototype.getDateStamp = function()
{
  return moment().format("MMM Do YY");
}


module.exports = Journal;
