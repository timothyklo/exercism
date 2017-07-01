(function () {
  module.exports = function (str) {
    this.isPangram = function () {
      str = str.toLowerCase();
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      for (var i=0; i<alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
          return false;
        }
      }
      return true;
    }
  }
})();
