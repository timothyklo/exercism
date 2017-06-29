//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {
  var year = this.year;
  if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    return true
  } else {
    return false
  }
};

module.exports = Year;
