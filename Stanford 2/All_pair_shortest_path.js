var filename = process.argv[2];
fs = require('fs'); 
var edges = [];
var V = 0;
var E = 0;
var rows = [];
var lengths = [];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  	
  	rows = data.split("\n");	
  	V =  parseInt(rows[0].split(" "));					
         				
	var source = 0, dest = 0, weight = 0;
	for(var iCounter = 1; iCounter < rows.length - 1; iCounter++) {
		source = parseInt(rows[iCounter].split(" ")[0]);
		dest = parseInt(rows[iCounter].split(" ")[1]);
		weight = parseInt(rows[iCounter].split(" ")[2]);
		edges.push({'source' : source, 'dest' : dest, 'weight' : weight});
	}
	for(var i = 1; i <=  V; i++) {
		bellmanford(edges, i);	
	}	

	var min = Math.min();
	for(var i = 0; i < lengths.length; i++) {
		if(lengths[i] < min) {
			min = lengths[i];
		}
	}
	lengths.push(min);
	console.log(min);

	//:Todo
	//floydWarshall(edges);

});

function bellmanford(edges, start) {
	var d = [];
	var pi = [];
	var u, v, w;
	for(var i = 1; i <= V; i++) {
		d[i] = Math.min();
	}
	d[start] = 0;

	for(var i = 1; i <= V - 1; i++) {
		for(var j = 0; j < edges.length; j++) {
			u = edges[j].source;
			v = edges[j].dest;
			w = edges[j].weight;

			if(d[u] != Math.min() && d[v] > d[u] + w) {
				d[v] = d[u] + w;
				pi[v] = u;
			}
		}
	}

	//to check the cycle of negative edge	
	for(var j = 0; j < edges.length; j++) {
		u = edges[j].source;
		v = edges[j].dest;
		w = edges[j].weight;

		if(d[u] != Math.min() && d[v] > d[u] + w) {
			console.log('Negative edge cycle');
			break;
		}
	}

	var min = Math.min();
	for(var i = 0; i < d.length; i++) {
		if(d[i] < min) {
			min = d[i];
		}
	}
	lengths.push(min);
}

function findWeight(edges, start, end) {
	var u, v, w;
	for(var i = 0; i < edges.length; i++) {
		u = edges[i].source;
		v = edges[i].dest;
		w = edges[i].weight;

		if((start == u && end == v) || (start == v && end == u)) {
			return w;
		}
	}	
	return 0;
}

function floydWarshall(edges) {
	var A = [];
	var u, v, w, c;
	for(var i = 1; i <= V; i++) {
		A[i] = [];
		for(var j = 1; j <= V; j++) {
			A[i][j] = [];
			if(i == j) {
				A[i][j][0] = 0;
			}
			else if(c = findWeight(edges, i, j)) {
				A[i][j][0] = c;
			}
			else {
				A[i][j][0] = Math.min();
			}
		}	
	}

	for(var k = 1; k <= V; k++) {
		for(var i = 1; i <= V; i++) {
			for(var j = 1; j <= V; j++) {
				u = edges[j].source;
				v = edges[j].dest;
				w = edges[j].weight;

				if(A[i][k][k - 1] + A[k][j][k - 1] < A[i][j][k]) {
					A[i][j][k] = A[i][k][k - 1] + A[k][j][k - 1];
				}
			}
		}
	}

	console.log(A);
}
