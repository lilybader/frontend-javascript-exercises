module.exports.sumNumbers = function(array) {
	var sum = 0;
	for (var index = 0; index < array.length; index++) {
		sum += array[index];
	}; 
	return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
	var newString = inputString.toLowerCase ();
	var splitString = newString.split(",");
	var newArray = []
	for (var index = 0; index < splitString.length; index++) {
		newArray.push(splitString[index]);
	}; 
	return newArray;
};

module.exports.addIndex = function(array) {
  var newArray = [];
  for (var index=0; index < array.length; index++) {
    newArray.push(index + " is " + array[index]);
  };
  return newArray;
};
