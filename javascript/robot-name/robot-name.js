var usedNames = new Set();

var Robot = function() {
  this.name = createName();
}

Robot.prototype.reset = function() {
  oldName = this.name; // this is no longer needed
  this.name = createName();
}

function createName() {
  do {
    name = String.fromCharCode(Math.floor(Math.random()*(90-65+1))+65) + String.fromCharCode(Math.floor(Math.random()*(90-65+1))+65) + Math.random().toString().substring(2,5);
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
}

module.exports = Robot;
