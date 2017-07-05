var Bob = function() {

  this.hey = function(input) {
    // yell
    if (input.toUpperCase() === input && input.toLowerCase() !== input) {
      return 'Whoa, chill out!';
    }
    // ask question
    if (input.charAt(input.length - 1) === '?') {
      return 'Sure.';
    }
    // don't say anything
    if (/^\s*$/.test(input)) {
      return 'Fine. Be that way!';
    }
    // default response
    return 'Whatever.';
    };
};

module.exports = Bob;
