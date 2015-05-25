module.exports.stream = function(conditionalFn, actionFn) {
	while (conditionalFn()) {
		actionFn();
	};
};

module.exports.sumNumbers = function (numArray) {
	var counter = 0;
	var sum = 0;
	while (counter < numArray.length) {
		sum += numArray[counter];
		counter++;
	};
	return sum;
};
