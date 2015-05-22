module.exports.copy = function(object) {
	var newObject = Object.create(object); 
	return newObject;
};

module.exports.extend = function(dest, src) {
	for (var property in src) {
		if (src.hasOwnProperty(property)) {
			dest[property] = src[property];
		};
	}; 
	return dest;
};

module.exports.hasElems = function(object, elemArray) {
	var objectKeys = Object.keys(object);
	objectKeys.sort();
	elemArray.sort();
	for (i = 0; i < objectKeys.length; i++) {
		if (objectKeys[i] == elemArray[i] || elemArray.length = 0) {
			return true;
		}
		else {
			return false;
		};
	};
};
