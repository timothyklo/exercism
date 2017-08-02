var Cipher = function(key) {
  // test if empty string
  if (key === '') {
    throw new Error('Bad key');
  }
  // test if all upper case or all digits
  if (key && key.toUpperCase() === key || /^\d+$/.test(key)) {
    throw new Error('Bad key');
  }
  this.key = key || generateRandomKey();
}

function generateRandomKey() {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var randomKey = "";
  for (var i = 0; i < 100; i++) {
    randomKey += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomKey;
}

Cipher.prototype.encode = function(input) {
  var keyCode = this.key;
  var oldCharacters = input.split("");
  var newCharacters = [];
  oldCharacters.forEach(function(oldLetter, index) {
    newLetter = oldLetter.charCodeAt(0) + keyCode.charCodeAt(index) - 97;
    if (newLetter > 122) {
      newLetter = newLetter - 26;
    }
    newCharacters.push(String.fromCharCode(newLetter));
  });
  return newCharacters.join("");
}

Cipher.prototype.decode = function(input) {
  var keyCode = this.key;
  var oldCharacters = input.split("");
  var newCharacters = [];
  oldCharacters.forEach(function(oldLetter, index) {
    newLetter = oldLetter.charCodeAt(0) - keyCode.charCodeAt(index) + 97;
    if (newLetter < 97) {
      newLetter = newLetter + 26;
    }
    newCharacters.push(String.fromCharCode(newLetter));
  });
  return newCharacters.join("");
}

module.exports = Cipher;
