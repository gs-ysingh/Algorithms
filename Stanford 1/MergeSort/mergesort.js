function mergeSort(sArray, p, r) {
    if (p < r) {
        var q = Math.floor(p + (r - p) / 2);
        mergeSort(sArray, p, q);
        mergeSort(sArray, q + 1, r);
        merge(sArray, p, q, r);
    }
}
function merge(sArray, p, q, r) {
    var n1 = q - p + 1;
    var n2 = r - q;
    var oArray = [];
    var sLeft = [],
        sRight = [];
    for (var iCounter = 0; iCounter < n1; iCounter++) {
        sLeft[iCounter] = sArray[iCounter + p];
    }
    for (var jCounter = 0; jCounter < n2; jCounter++) {
        sRight[jCounter] = sArray[jCounter + q + 1];
    }
    var i = 0,
        j = 0,
        k = p;
    while (i < n1 && j < n2) {
        if (sLeft[i] <= sRight[j]) {
            sArray[k] = sLeft[i];
            i++;
        } 
		else {
            sArray[k] = sRight[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        sArray[k] = sLeft[i];
        i++;
        k++;
    }
    while (j < n2) {
        sArray[k] = sRight[j];
        j++;
        k++;
    }
}

function initialize() {
    var pArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var i = 0,
        j = pArray.length - 1;
    mergeSort(pArray, i, j);  
	var iCounter = 0;
	for(iCounter = 0; iCounter < pArray.length; iCounter++) {
		console.log(pArray[iCounter]);
	}
}
initialize();