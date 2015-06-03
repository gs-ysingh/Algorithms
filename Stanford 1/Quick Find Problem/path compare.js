var items = [];
var size = [];
function pathCamparisonInitialize(len){
	var iCounter = 0
	for(iCounter = 0; iCounter < len; iCounter++){
		items[iCounter] = iCounter;
		size[iCounter] = 1;
	}	
}

function root(index){
	while(index !== items[index]){
		items[index] = items[items[index]];
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
	
	if(pRoot === qRoot) {
		return;
	}
	
	if(size[pRoot] < size[qRoot]){
		items[pRoot] = qRoot;
		size[qRoot] += size[pRoot];
	}
	else {
		items[qRoot] = pRoot;
		size[pRoot] += size[qRoot];
	}	
}


