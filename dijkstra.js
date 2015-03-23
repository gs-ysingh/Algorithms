var filename = process.argv[2];
fs = require('fs'); 
var sGraph = {};
var distance = [];
var visited = [];
var queue = [];
var total = 200;

function dijkstra() {			
	for(var i = 1; i <= total; i++) {
		visited[i] = false;
		distance[i] = -1;
	}
	var minIndex = 1;
	distance[1] = 0;
	visited[1] = true;
	queue.enQueue(1);

	while(queue.length <= total) {
		var min = 10000000;
		for(var i = 0; i < queue.length; i++) {
			var node = queue[i];
			for(var j = 0; j < sGraph[node].data.length; j++) {
				var data = parseInt(sGraph[node].data[j]);
				var weight = parseInt(sGraph[node].weight[j]);
				if(!visited[data] && weight + distance[node] < min) {
					min = weight + distance[node];
					minIndex = data;
				}
			}
		}
		queue.enQueue(minIndex);
		distance[minIndex] = min;
		visited[minIndex] = true;
	}
}

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  	var pArray = [];
	var sArray = [];
  	pArray = data.split("\n");						
         				
	var iCounter = 0, jCounter = 0;
	var weight = 0, vertex = 0;
	for(iCounter = 0; iCounter < pArray.length; iCounter++) {

		sArray = pArray[iCounter].split("\t");
		sGraph[iCounter + 1] = {
			"data": [],
			"weight": []
		};
		for(jCounter = 1; jCounter < sArray.length - 1; jCounter++) {
			sGraph[iCounter + 1].data.push(sArray[jCounter].split(",")[0]);
			sGraph[iCounter + 1].weight.push(sArray[jCounter].split(",")[1]);
		}

	}
	dijkstra();
	console.log(distance[7]+","+distance[37]+","+distance[59]+","+distance[82]+","+distance[99]+","+distance[115]+","+distance[133]+","+distance[165]+","+distance[188]+","+distance[197]);
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