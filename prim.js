//execute - nodejs prim.js edges.txt

var filename = process.argv[2];
fs = require('fs'); 
var sGraph = {};
var distance = [];
var visited = [];
var queue = [];
var total = 4;

function prim() {			
	for(var i = 1; i <= total; i++) {
		visited[i] = false;
		distance[i] = -1;
	}

	var node = 0;
	var minIndex = 1;
	distance[1] = 0;
	visited[1] = true;
	queue.enQueue(1);
	var sum = 0;

	while(queue.length < total) {
		var min = 10000000;
		for(var i = 0; i < queue.length; i++) {
			node = queue[i];
			for(var j = 0; j < sGraph[node].length; j++) {
				var data = parseInt(sGraph[node][j].data);
				var weight = parseInt(sGraph[node][j].weight);
				if(!visited[data] && weight < min) {
					min = weight;
					minIndex = data;
				}
			}
		}
		queue.enQueue(minIndex);
		distance[minIndex] = min;
		visited[minIndex] = true;
		sum += min;
	}
	console.log(sum);
}

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  	
  	var pArray = [];
  	pArray = data.split("\n");
  	
  	var nodes = pArray[0].split(' ')[0];
  	var edges = pArray[0].split(' ')[1];
  	total = parseInt(nodes);					
	
	for(var iCounter = 1; iCounter <= edges; iCounter++) {
		sGraph[iCounter] = [];
	}

	var start = 0, end = 0, weight = 0;         			
	for(var iCounter = 1; iCounter < pArray.length - 1; iCounter++) {
		start = pArray[iCounter].split(" ")[0];
		end = pArray[iCounter].split(" ")[1];
		weight = pArray[iCounter].split(" ")[2];

		sGraph[start].push({
			"data": end,
			"weight": weight
		});

		sGraph[end].push({
			"data": start,
			"weight": weight
		});
	}
	prim();
});

Array.prototype.enQueue = function() {
	this.push(arguments[0]);
};


//dequeue operation on array - remove first element
Array.prototype.deQueue = function() {
	if(this.length > 0) {
		return this.shift();
	}
};

//if queue length is 0, then it's empty
Array.prototype.isEmptyQueue = function() {
	return this.length == 0;
};