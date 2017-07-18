var School = function() {
  this.list = {};
}

School.prototype = {
  roster: function(grade) {
    return this.list;
  },
  add: function(name, grade) {
    if (this.list.hasOwnProperty(grade)) {
      this.list[grade].push(name);
      this.list[grade].sort();
    } else {
      this.list[grade] = [name];
    }
  },
  grade: function(input) {
    if (this.list.hasOwnProperty(input)) {
      return this.list[input].sort();
    } else {
      return [];
    }
  }

}

module.exports = School;
