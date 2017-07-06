var Gigasecond = function(input) {
  this.start = input;
}

Gigasecond.prototype.date = function() {
  return new Date(this.start.getTime() + 1000000000000);
}

module.exports = Gigasecond;
