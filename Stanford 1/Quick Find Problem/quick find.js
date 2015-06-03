var items = [];
function quickFindInitialize(len){
	var iCounter = 0
	for(iCounter = 0; iCounter < len; iCounter++){
		items[iCounter] = iCounter;
	}	
}

function connected(p, q){
	return items[p] === items[q];
}

function union(p, q){
	var iCounter = 0;
	var pId = items[p];
	var qId = items[q];
	for(iCounter = 0; iCounter < items.length; iCounter++){
		if(items[iCounter] === pId) {
			items[iCounter] = qId;
		}		
	}	
}


