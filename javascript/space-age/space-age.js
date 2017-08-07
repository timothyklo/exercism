var SpaceAge = function(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.onMercury = convert(0.2408467);
SpaceAge.prototype.onVenus = convert(0.61519726);
SpaceAge.prototype.onEarth = convert(1.0);
SpaceAge.prototype.onMars = convert(1.8808158);
SpaceAge.prototype.onJupiter = convert(11.862615);
SpaceAge.prototype.onSaturn = convert(29.447498);
SpaceAge.prototype.onUranus = convert(84.016846);
SpaceAge.prototype.onNeptune = convert(164.79132);

function convert(ratio) {
  return function() {
		var age = this.seconds / (31557600 * ratio);
		return parseFloat(age.toFixed(2));
	}
}

module.exports = SpaceAge;
