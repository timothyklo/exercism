var PhoneNumber = function(input) {
  this.input = input;
}

PhoneNumber.prototype.number = function(input) {
  // remove any non-numbers
  var result = this.input.replace(/[^0-9]/g, '');
  // remove a starting 1
  if (result[0] === '1') {
    result = result.substr(1);
  }
  // check if exchange code starts with 0 or 1
  if (result[3] === '0' || result[3] === '1') {
    return null;
  }
  // check if correct length
  if (result.length !== 10) {
    return null;
  }
  // else should be valid
  return result;
}

module.exports = PhoneNumber;
