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

	Algorithms.prototype.factorial = function () {
		var arg = arguments[0];
		var result;
		if(arg > -1) {				
			if(arg === 0 || arg === 1) {
				result  = 1;
			}
			else {
				result = arg * (Algorithms.prototype.factorial(arg - 1));
			}
			return result;
		}
		else {
			return 0;
		}
	}

	Algorithms.prototype.generateStringsNlengthKcombinations = function () {
		var arg = arguments[0];
		var n = arguments[1];
		var k = arguments[2];
		if(n == 0) {
			console.log(arg);
		}
		else {
			for(var i = 0; i < k; i++) {
				arg[n - 1] = i;
				Algorithms.prototype.generateStringsNlengthKcombinations(arg, n - 1, k);
			}			
		}		
	}	

	Algorithms.prototype.towerOfHanoi = function(n, source, auxiliary, destination) {
		if(n == 1) {
			console.log('move from ' + source + ' to ' + destination); 
		}
		else {
			Algorithms.prototype.towerOfHanoi(n - 1, source, destination, auxiliary);
			console.log('move from ' + source + ' to ' + destination); 
			Algorithms.prototype.towerOfHanoi(n - 1, auxiliary, source, destination);
		}
	}

	Algorithms.prototype.reverse = function(str) {
		var reversedString = '';
		if(str) {
			reversedString =  str.slice(str.length - 1) + Algorithms.prototype.reverse(str.substring(0, str.length - 1));
		}
		else {
			return '';
		}
		return reversedString;
	}

	Algorithms.prototype.isPalindrome = function() {
		var arg = arguments[0];
		if(arg === this.reverse(arg)) {
			return true;
		}
		return false;
	}

	Algorithms.prototype.isRotations = function(str1, str2) {
		var temp = str1 + str1;
		if(temp.indexOf(str2) !== -1) {
			return true;
		}
		return false;
	}

}());
