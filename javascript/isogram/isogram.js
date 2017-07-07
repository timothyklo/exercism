var Isogram = function(input) {
  this.word = input;
}

Isogram.prototype.isIsogram = function() {
  word = this.word.toLowerCase().replace(/-|\s/g,'');
  for (var i = 0; i < word.length; i++) {
    for (var j = i+1; j < word.length; j++) {
      if (word[i] == word[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = Isogram;