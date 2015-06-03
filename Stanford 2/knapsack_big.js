//execute - nodejs knapsack.js knapsack1.txt

var filename = process.argv[2];
fs = require('fs'); 
var cache = {};

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
    
    var rows = data.split("\n");
    var values = [];
    var weights = [];
    var W = rows[0].split(" ")[0];
    var total = rows[0].split(" ")[1];

    for(var row = 1; row < rows.length - 1; row++) {
      values.push(parseInt(rows[row].split(" ")[0]));
      weights.push(parseInt(rows[row].split(" ")[1]));
    }

    console.log(knapsack(W, weights, values, total));
});

function knapsack(W, weights, values, total) {
  if(cache[total] 
      && cache[total].hasOwnProperty(W) 
      && cache[total][W]) {
    return cache[total][W];
  }

  if(total == 0 || W == 0) {
    cache[total] = {};
    cache[total][W] = 0;
    return 0;
  }
  if(W < weights[total - 1]) {
    cache[total][W] = knapsack(W, weights, values, total - 1);
  }
  else {
    cache[total][W] = Math.max(knapsack(W, weights, values, total - 1),
                       knapsack(W - weights[total - 1], weights, values, total - 1)
                          + values[total - 1]);  
  }
  return cache[total][W];        
}
