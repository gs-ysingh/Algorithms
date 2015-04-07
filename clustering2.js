//execute - nodejs clustering2.js clustering_big.txt

var filename = process.argv[2];
fs = require('fs'); 
var graph = [];
var parent = {};
var rank = {};
var clusters = 0;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
    
  	var rows = data.split("\n");
  	var col = {};
  	var mst = [];
  	for(var i = 1; i < rows.length - 1; i++) {
  		graph.push(parseInt(rows[i].replace(/[ ]/g, ""), 2));
  	}

  	var hash = {};
  	var value = 0;
  	var sGraph = [];

    graph = graph.filter( onlyUnique );

    for(var i = 0; i < graph.length; i++) {
      parent[graph[i]] = graph[i];
      rank[graph[i]] = -1;
    }
    clusters = graph.length;
  	
  	for(var i = 0; i < graph.length; i++) {
      hash[graph[i]] = 1;
    }

	  var distance = generateNumber();
    var item = 0;

    for(var i = 0; i < graph.length; i++) {
      item = graph[i]; 
      for(var j = 0; j < distance.length; j++) {
        value = distance[j] ^ item;
        if(value in hash) {
          sGraph.push([item, value, ones(distance[j])]);  
        }       
      }
      delete hash[item];
    }	

    while(sGraph.length >= 1) {
        var s1 = find(sGraph[0][0]);            
        var s2 = find(sGraph[0][1]);		
		    if (s1 != s2) {
            union(s1, s2);
        }
        sGraph.splice(0, 1);
    }
    console.log(clusters);
});

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function find(value) {
  if(parent[value] == value) {
    return value;
  }
  else {
    return find(parent[value]);
  }
}
function union(set1, set2) {
  if(rank[set1] > rank[set2]) {
    parent[set2] = set1;
  }
  else if(rank[set1] < rank[set2]) {
    parent[set1] = set2;
  }
  else {
    parent[set1] = set2;
    rank[set2] = rank[set2] + 1; 
  }
  clusters--;
}


function generateNumber() {
	var distance = [];
	var str = "000000000000000000000000";
	var a = str.split("");
	for(var i = 0; i < a.length; i++) {
		a[i] = a[i].replace("0", "1");
		distance.push(a.join(""));
		a[i] = "0";
	}

	for(var i = 0; i < a.length - 1; i++) {
		for(var j = i + 1; j < a.length; j++) {
			a[i] = a[i].replace("0", "1");
			a[j] = a[j].replace("0", "1");
			distance.push(a.join(""));
			a[i] = "0";
			a[j] = "0";
		}		
	}

	for(var i = 0; i < distance.length; i++) {
  		distance[i] = parseInt(distance[i], 2);
  	}
	return distance.sort(function(a, b) {
    return a - b;
  });
}

function ones(argument) {
	return argument.toString(2).match(/1/g).length;
}