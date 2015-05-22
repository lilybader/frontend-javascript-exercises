module.exports.getKeys = function(object) {
	var newArray = [];
	for (var property in object) {
		newArray.push(property);
	}; 
	return newArray;
};

module.exports.getValues = function(object) {
	var valueArray = [];
	for (var value in object) {
		valueArray.push(object[value]);
	}; 
	return valueArray;
};

module.exports.objectToArray = function(object) {
	var stringArray = [];
	for (var property in object) {
		stringArray.push(property + " is " + object[property]);
	}; 
	return stringArray;
};
