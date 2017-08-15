var Binary = function(input) {
  this.input = input;
};

Binary.prototype.toDecimal = function() {
  if (this.input.match(/[^10]/)) {
    return 0;
  }
  var result = 0;
  for (var i = this.input.length-1, j = 0; i >=0; i--, j++) {
    result += parseInt(this.input[i])*Math.pow(2, j);
  }
  return result;
}


module.exports = Binary;
