function bfs() {
	var visited = [];
	for(var j = 0; j < graph.length; j++) {
		visited[j] = false;
	}

	queue.enQueue(0);
	visited[0] = true;
	var current = 0;
	while(!queue.isEmptyQueue()) {
		current = queue.deQueue();
		console.log(current);
		for(var i = 0; i < graph[current].length; i++) {
			if(!visited[graph[current][i]]) {
				visited[graph[current][i]] = true;
				queue.enQueue(graph[current][i]);
			}
		}
	}
}

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

var queue = [];
var graph = 	[
					[2, 1], //source 0 has adjacent node 1, 2 
					[2], 
					[0, 3],
					[3]
				];

bfs();