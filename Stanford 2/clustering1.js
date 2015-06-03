//execute - nodejs clustering1.js clustering1.txt
//dependency on underscore

var filename = process.argv[2];
fs = require('fs'); 
var graph = [];
var _ = require('underscore');

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  
  	var rows = data.split("\n");
  	var col = {};
  	var mst = [];
  	
  	for(var i = 1; i < rows.length - 1; i++) {
  		col = {};
  		col.from =  parseInt(rows[i].split(' ')[0]);
  		col.to =  parseInt(rows[i].split(' ')[1]);
  		col.weight =  parseInt(rows[i].split(' ')[2]);
  		graph.push(col);
  	}

  	graph.sort(function(a, b) {
  		return a.weight - b.weight;
  	});

  	var vertex = parseInt(rows[0]);
  	var forest = [], nodes = [];
  	for(var i = 1; i <= vertex; i++) {
  		nodes.push(i);
  	}
  	var forest = _.map(nodes, function(node) { return [node]; });

  	while(forest.length >= 4) {
  		var edge = graph[0];
        var n1 = graph[0].from,
            n2 = graph[0].to;
 
        var t1 = _.filter(forest, function(tree) {
            return _.include(tree, n1);
        });
            
        var t2 = _.filter(forest, function(tree) {
            return _.include(tree, n2);
        });
 
        if (t1 != t2) {
            forest = _.without(forest, t1[0], t2[0]);
            forest.push(_.union(t1[0], t2[0]));
            mst.push(edge);
        }
        graph.splice(0, 1);
    }

    console.log(mst[mst.length - 1]);
});
