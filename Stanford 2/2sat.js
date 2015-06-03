var filename = process.argv[2];
fs = require('fs');

function scc() {
	var visited = {};
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
	visited = {};

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
	stack.push(parseInt(src));
}

function dfsUtil(src, visited) {
	visited[src] = true;
	if(!result[index]) {
		result[index] = [];
	}
	if(result[index].indexOf( - parseInt(src)) > 0) {
		console.log('0');
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
	var trans = {};
	for(var key in graph) {
		dest = key;
		if(!trans[dest]) {
			trans[dest] = [];
		}
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
var result = {}, index = 0;
var graph = {};

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;

  var rows = data.split("\n");
  var total = parseInt(rows[0]);
  var src = '';
  var dest = '';

  for(var i = 1; i < rows.length - 1; i++) {
  	src = parseInt(rows[i].split(" ")[0]);
  	dest = parseInt(rows[i].split(" ")[1]);

  	if(!graph[src]) {
  		graph[src] = [];
  	}
  	if(!graph[-dest]) {
  		graph[-dest] = [];
  	}
  	if(!graph[-src]) {
  		graph[-src] = [];
  	}
  	if(!graph[dest]) {
  		graph[dest] = [];
  	}

  	graph[-src].push(dest);
	graph[-dest].push(src);
  }
  scc(); 
  
  //console.log('isTwoSAT' + isTwoSAT(result));

});

// function isTwoSAT(result) {
// 	for(var key in result) {
// 		result[key]
// 	}
// }