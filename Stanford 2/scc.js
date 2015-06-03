var filename = process.argv[2];
fs = require('fs');

function scc() {
	var visited = [];
	for(var j in graph) {
		visited[j] = false;
	}

	//Do the dfs first and store the vertex in stack
	for(var i in graph) {
		if(!visited[i]) {
			fillOrder(i, visited);
		}
	}

	//transpose the vertex
	graph = transpose();

	for(var j in graph) {
		visited[j] = false;
	}


	//Do the dfs again for stack
	var top = '';
	while(stack.length !=0 ) {
		top = stack.pop();
		if(!visited[top]) {
			dfsUtil(top, visited);	
		}
		index++;
	}
}

function fillOrder(src, visited) {
	visited[src] = true;
	for(var i = 0; i < graph[src].length; i++) {
		if(!visited[graph[src][i]]) {
		 fillOrder(graph[src][i], visited);
		}
	}
	stack.push(src);
}

function dfsUtil(src, visited) {
	visited[src] = true;
	if(!result[index]) {
		result[index] = [];
	}
	result[index].push(parseInt(src));
	for(var i = 0; i < graph[src].length; i++) {
		if(!visited[graph[src][i]]) {
			dfsUtil(graph[src][i], visited);
		}
	}
}

function transpose() {
	var src = '', dest = '';
	var trans = [];
	for(var key in graph) {
		dest = key;
		for(var i = 0; i < graph[key].length; i++) {
			src = graph[key][i];
			if(!trans[src]) {
				trans[src] = [];
			}
			trans[src].push(dest);
		}
	}
	return trans;
}

var stack = [];
var graph = {
				'0': [2, 3], //source 0 has adjacent node 1, 2 
				'1' : [0], 
				'2' : [1],
				'3' : [4],
				'4' : []
			};
var result = [], index = 0;
scc();
console.log(result);
