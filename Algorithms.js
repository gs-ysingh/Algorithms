(function() {
	Algorithms = function() {
		self = this; 
		var that = this;
		this.forChaining = function() {
			return that;
		}
	}
	var setMemoArray = function (l1, l2) {
		var L = [];
		for(var i = 0; i <= l1; i++) {
			L[i] = [];
			for(var j = 0; j <= l2; j++) {
				L[i][j] = -1;
				if(i == 0 || j == 0) {
					L[i][j] = 0;
				}					
			}	
		}
		return L;
	}
	function max(x, y) {
		if(x > y) {
			return x;
		}
		return y;
	}
	Algorithms.prototype.forProtoChaining = function() {
		return self;
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

	Algorithms.prototype.longestCommonSubsequence = function () {
		str1 = arguments[0],
		str2 = arguments[1],
		l1 = str1.length,
		l2 = str2.length;
		L = setMemoArray(l1, l2);
		var str = '';
		var lcs = LCS(l1, l2);

		var i = l1, j = l2;
		while(i >= 0 && j >= 0) {
			if(str1[i - 1] == str2[j - 1]) {
				str += str1[i - 1];
				i--;
				j--;
			}
			else if(L[i - 1][j] >= L[i][j - 1]) {
				i--;
			}
			else {
				j--;
			}
		}
		return str.split("").reverse().join("");
	}

	var LCS = function (i, j) {
		if(L[i][j] < 0) {
				if(str1[i - 1] == undefined || str2[j - 1] == undefined) {
					L[i][j] = 0;
				}
				else if(str1[i - 1] == str2[j - 1]) {
				    L[i][j] = 1 + LCS(i - 1, j - 1);
				}
				else {
					L[i][j] = max(LCS(i, j - 1), LCS(i - 1, j));	
				}	
			}			
		return L[i][j];
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
