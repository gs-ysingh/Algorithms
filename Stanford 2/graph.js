//Adjacency list implementation of graph
function Graph(V) {
	var oGraph = [];
	for(var i = 0; i < V; i++) {
		//It's not an weighted graph, else node data property can take the weight
		oGraph[i] = {};
		oGraph[i].head = null; 
	}
	return oGraph;
}

function addEdge(graph, source, dest) {
	//directed graph
	var tmp = {};
	tmp.data = dest;
	tmp.next = graph[source].head;
	graph[source].head = tmp;

	//include for undirected graph
	// tmp = {};
	// tmp.data = source;
	// tmp.next = graph[dest].head;
	// graph[dest].head = tmp;
}

function DFS(v) {
	var isVisited = [];
	for(var i = 0; i < V; i++) {
		isVisited[i] = false;
	}
	
	DFSUtil(isVisited, v);

}

function DFSUtil(isVisited, vertex) {
	isVisited[vertex] = true;
	var current = graph[vertex].head;
	var i;
	//print the traversed node
	console.log(vertex);
	while(current) {
		i = current.data;
		if(!isVisited[i]) {
			DFSUtil(isVisited, i);
		}
		current = current.next;
	}
}

function BFS(v) {
	var isVisited = [];
	for(var i = 0; i < V; i++) {
		isVisited[i] = false;
	}	
	BFSUtil(isVisited, v);
}

function BFSUtil(isVisited, vertex) {
	var queue = [];
	queue.enQueue(vertex);

	while(!queue.isEmptyQueue()) {
		var tmp = queue.deQueue();
		console.log(tmp);
		isVisited[tmp] = true;

		var current = graph[tmp].head;

		while(current) {
			if(!isVisited[current.data]) {
				queue.enQueue(current.data);
			}
			current = current.next;
		}
	}
}

//enqueue operation on array - add element at the end
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

var V = 5; 
var graph = new Graph(V);
addEdge(graph, 0, 1);
addEdge(graph, 0, 2);
addEdge(graph, 1, 2);
addEdge(graph, 2, 0);
addEdge(graph, 2, 3);
addEdge(graph, 3, 3);

console.log('DFS: ');
DFS(0);

console.log('BFS: ');
BFS(0);


//for Adjacency Matrix implementation
function adjacencyMatrixGraph() {
	var graph = [];
	var V = 5;

	for(var i = 0; i < V; i++) {
		graph[i] = [];
		for(var j = 0; j < V; j++) {
			graph[i][j] = 0;
		}
	}
	return graph;
}

function addEdgeAdjacencyMatrixGraph(graph, source, dest) {
	//directed graph
	graph[source][dest] = 1;

	//include for undirected graph
	graph[dest][source] = 1;
}

var vertex = 5; 
var aGraph = new adjacencyMatrixGraph(vertex);
addEdgeAdjacencyMatrixGraph(aGraph, 0, 1);
addEdgeAdjacencyMatrixGraph(aGraph, 0, 4);
addEdgeAdjacencyMatrixGraph(aGraph, 1, 2);
addEdgeAdjacencyMatrixGraph(aGraph, 1, 3);
addEdgeAdjacencyMatrixGraph(aGraph, 1, 4);
addEdgeAdjacencyMatrixGraph(aGraph, 2, 3);
addEdgeAdjacencyMatrixGraph(aGraph, 3, 4);