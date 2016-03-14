exports.wordCount = function(string) {
  return string.split(" ").length;
}

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
  // return moment().format("MMM Do YY");
  console.log("test");
}


module.exports = Journal;
