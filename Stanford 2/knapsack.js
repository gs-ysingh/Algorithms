//execute - nodejs knapsack.js knapsack1.txt

var filename = process.argv[2];
fs = require('fs'); 

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
    
  	var rows = data.split("\n");
    var values = [];
    var weights = [];
    var W = rows[0].split(" ")[0];
    var total = rows[0].split(" ")[1];
    values.push(0);
    weights.push(0);

    for(var row = 1; row < rows.length - 1; row++) {
      values.push(parseInt(rows[row].split(" ")[0]));
      weights.push(parseInt(rows[row].split(" ")[1]));
    }

    
    var A = {};
    for(var i = 0; i <= total; i++) {
      A[i] = {};
    }

    for(var i = 0; i <= total; i++) {
      for(var x = 0; x <= W; x++) {
        if(i == 0 || x == 0) {
          A[i][x] = 0;
        }
        else if(x >= weights[i]) {
          A[i][x] = Math.max(A[i - 1][x], 
                      A[i - 1][x - weights[i]] 
                        + values[i]);  
        }
        else {
          A[i][x] = A[i - 1][x];
       }        
      }
    }
    console.log(A[total][W]);
  });

