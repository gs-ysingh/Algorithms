(function() {
	Algorithms = function() {

	}

	var removeDuplicatesFromString = function(arg) {
		var obj = {};
		var finalStr = '';
		var finalArray = [];
		for(var i = 0; i < arg.length; i++) {
			if(typeof obj['' + arg[i]] === 'undefined') {
				obj['' + arg[i]] = true;
				typeof(arg) === "string" ? finalStr += arg[i] : finalArray.push(arg[i]);
			}
		}
		var returnValue = typeof(arg) === "string" ? finalStr : finalArray;
		return returnValue;
	}

	Algorithms.prototype.removeDuplicates = function() {
		var arg = arguments[0];
		var returnValue;
		switch (typeof (arg)) {
			case "string": 				
				returnValue = removeDuplicatesFromString(arg);
				break;
			case "number":
				returnValue = parseInt(removeDuplicatesFromString( '' + arg));
				break;
			case "object":
				if(Array.isArray(arg)) {
					returnValue = removeDuplicatesFromString(arg);	
				}				
				break;
		}
		return returnValue;
	}
}());
