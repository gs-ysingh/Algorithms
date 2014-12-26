(function() {
	Algorithms = function() {

	}
	var convertToType = function (oArray, type) {
		var returnValue = oArray;
		var originalValue = oArray.join('');
		switch(type) {
			case "number": returnValue = parseInt(originalValue);
				break;
			case "string": returnValue =  '' + originalValue;
				break;
		}
		return returnValue;
	}

	var convertToArray = function (arg) {
		var type = typeof(arg);
		var returnValue = arg;
		if(type === 'number' || type === 'string') {
			returnValue = ('' + arg).split('');
		}
		return returnValue;
	}

	Algorithms.prototype.removeDuplicates = function() {
		var arg = convertToArray(arguments[0]);
		var sObject = {};
		var finalArray = [];
		arg.forEach(function(entry) {
			if(typeof sObject[entry] === 'undefined') {
				sObject[entry] = true;
				finalArray.push(entry);
			}
		});
		return convertToType(finalArray, typeof(arguments[0]));
	}

	Algorithms.prototype.maxOccurredCharacter = function () {
		var arg = convertToArray(arguments[0]);
		var sObject = {};
		var max = 0;
		var index;
		arg.forEach(function(entry) {
			if(typeof sObject[entry] === 'undefined') {
				sObject[entry] = 1;
			}
			else {
				sObject[entry] += 1;	
			}
			if(sObject[entry] > max) {
				max = sObject[entry];
				index = entry;
			}
		});
		return index;
	}
	Algorithms.prototype.getDuplicates = function () {
		var arg = convertToArray(arguments[0]);
		var sObject = {};
		var finalArray = [];
		arg.forEach(function(entry) {
			if(typeof sObject[entry] === 'undefined') {
				sObject[entry] = true;
			}
			else if (sObject[entry] && finalArray.indexOf(entry) == -1) {
				finalArray.push(entry);
			}
		});
		return finalArray;
	}
}());
