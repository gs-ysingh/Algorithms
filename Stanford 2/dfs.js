function dfs() {
	var visited = [];
	for(var j = 0; j < graph.length; j++) {
		visited[j] = false;
	}
	for(var i in graph) {
		if(!visited[i]) {
			dfsUtil(i, visited);
		}
	}
}

function dfsUtil(src, visited) {
	visited[src] = true;
	console.log(src);
	for(var i = 0; i < graph[src].length; i++) {
		if(!visited[graph[src][i]]) {
			dfsUtil(graph[src][i], visited);
		}
	}	
}

var graph = [
				[2, 1], //source 0 has adjacent node 1, 2 
				[2], 
				[0, 3],
				[3]
			];

dfs();