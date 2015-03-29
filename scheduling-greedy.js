//nodejs scheduling-greedy.js jobs.txt 

var filename = process.argv[2];
fs = require('fs'); 
var jobs = [];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  	var input = data.split('\n');
  	var total = input[0];
  	var value = {};
  	for(var i = 1; i < input.length - 1; i++) {
  		 value = {};
  		 value.weight = parseInt(input[i].split(' ')[0]);
  		 value.len = parseInt(input[i].split(' ')[1]);
  		 jobs.push(value);
  	}
  	scheduleDiffMethod(jobs);
  	console.log('sum of weighted completion times w - l method: ' + calculateCompletion(jobs));  	
  	scheduleDivideMethod(jobs);  	
  	console.log('sum of weighted completion times w/l method: ' + calculateCompletion(jobs));
});

//weight - length will be used to decide the jobs
//if there is overlap, choose the job with higher weight
function scheduleDiffMethod(jobs) {	
	for(var i = 0; i < jobs.length; i ++ ){
		jobs[i].diff = jobs[i].weight - jobs[i].len;
	}
	var tmp = 0;
	for(var i = 0; i < jobs.length - 1; i++) {
		for(var j = i + 1; j < jobs.length; j++) {
			if(jobs[i].diff < jobs[j].diff) {
				tmp = jobs[i];
				jobs[i] = jobs[j];
				jobs[j] = tmp;
			}
			else if(jobs[i].diff == jobs[j].diff && jobs[i].weight < jobs[j].weight) {
				tmp = jobs[i];
				jobs[i] = jobs[j];
				jobs[j] = tmp;
			}
		}
	}
}

function scheduleDivideMethod(jobs) {	
	for(var i = 0; i < jobs.length; i ++ ){
		jobs[i].diff = jobs[i].weight / jobs[i].len;
	}
	var tmp = 0;
	for(var i = 0; i < jobs.length - 1; i++) {
		for(var j = i + 1; j < jobs.length; j++) {
			if(jobs[i].diff < jobs[j].diff) {
				tmp = jobs[i];
				jobs[i] = jobs[j];
				jobs[j] = tmp;
			}
			else if(jobs[i].diff == jobs[j].diff && jobs[i].weight < jobs[j].weight) {
				tmp = jobs[i];
				jobs[i] = jobs[j];
				jobs[j] = tmp;
			}
		}
	}
}

function calculateCompletion(jobs) {
	var totalLength = 0
	var time = 0
	for(var i = 0; i < jobs.length; i ++ ) {
		totalLength += jobs[i].len;
		time += jobs[i].weight * totalLength; 
	}
	return time;
}