var Anagram = function(input){
  this.subject = input;
}

Anagram.prototype.matches = function(items) {
  
  var base = this.subject.toLowerCase();
  var candidates = [];
  var results = [];
  
  // array
  if (typeof items == "object") {
    for (i = 0; i < items.length; i++) {
      candidates.push(items[i]);
    }
  }

  // string(s)
  if (typeof items == "string") {
    for (j = 0; j < arguments.length; j++) {
      candidates.push(arguments[j]);
    } 
  }

  // compare (if same length and not exact same) 
  for (k = 0; k < candidates.length; k++) {
    if ((candidates[k].length == base.length) && (candidates[k].toLowerCase() != base)) {
      var temp = candidates[k].toLowerCase();
      for (l = 0; l < base.length; l++) {
        temp = temp.replace(base[l], "");
      }
      if (temp.length == 0) {
        results.push(candidates[k]);
      }
    }
  } 
  
  return results;
}

module.exports = Anagram;
