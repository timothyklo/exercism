function primeFactors(input) {
	var results = [];
	for (var i = 2; i <= input; i++) {
		while (input % i == 0) {
			results.push(i);
			input = input / i;
		};
	};
	return results;
};

module.exports = {
	for: primeFactors
};
