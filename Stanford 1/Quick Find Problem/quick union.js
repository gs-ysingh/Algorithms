var items = [];
function quickUnionInitialize(len){
	var iCounter = 0
	for(iCounter = 0; iCounter < len; iCounter++){
		items[iCounter] = iCounter;
	}	
}

function root(index){
	while(index !== items[index]){
		index = items[index];
	}
	return index;
}

function connected(p, q){
	return root(p) === root(q);
}

function union(p, q){
	pRoot = root(p);
	qRoot = root(q);
	items[pRoot] = items[qRoot];
}


