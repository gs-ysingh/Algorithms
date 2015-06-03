var sGraph = {};
				
var Stack = {
	"data": []
};
var currentVertex = 0;
Stack.push = function (value) {
	var index = Stack.data.length;
	Stack.data[index] = value;
}

Stack.pop = function () {	
	var index = Stack.data.length;
	var value = Stack.data[index - 1];
	if(!Stack.isEmpty()) {
		Stack.data.pop();
	}
	return value;
}

Stack.isEmpty = function() {	
	return (Stack.data.length === 0)
}

Stack.print = function() {
	for(var iCounter = Stack.data.length - 1; iCounter >= 0; iCounter--) {
		WScript.Echo(Stack.data[iCounter]);
	}
}
var Graph = {};

Graph.SCCs = function(sGraph) {
	for(var iCounter in sGraph) {
		if(!sGraph[iCounter].visited) {
			Graph.fillOrder(iCounter);
		}
	}	
	Graph.transpose(sGraph);
	
	for(var jCounter in sGraph) {
		sGraph[jCounter].visited = false;
	}
	var oSCCs = [];
	//debugger;	
	while(!Stack.isEmpty()) {
		var sTop = Stack.pop();
		if(!sGraph[sTop].visited) {
			iCounter = 0;
			var maxValue = Graph.DFSUtil(sTop, iCounter) + 1;
			oSCCs.push(maxValue);
		}
	}
	oSCCs.sort(function(a, b){return b-a});
	for(iCounter = 0; iCounter < 5; iCounter++){
		if(oSCCs[iCounter]) {
			WScript.Echo(oSCCs[iCounter]);
		}
	}
}
Graph.DFSUtil = function(sTop, iCounter) {
	sGraph[sTop].visited = true;	
	for(var jCounter in sGraph[sTop].transEdges) {
		currentVertex = sGraph[sTop].transEdges[jCounter];
		if(typeof sGraph[currentVertex] == "undefined") {
			sGraph[currentVertex] = {};
			sGraph[currentVertex]["edges"] = [];
			sGraph[currentVertex]["visited"] = false;
			sGraph[currentVertex]["transEdges"] = [];
		}
		if(!sGraph[currentVertex].visited) {
			sTop = currentVertex;
			sGraph[sTop].visited = true;
			iCounter++;
		}
	}
	return iCounter;		
}
Graph.transpose = function(sGraph) {
	var target = "", source = "";
	for(var jCounter in sGraph) {
		for(var kCounter = 0; kCounter < sGraph[jCounter].edges.length; kCounter++) { 
			target = jCounter;
			source = sGraph[jCounter].edges[kCounter];
			sGraph[source]["transEdges"].push(target);			
		}		
	}
}

Graph.fillOrder = function(iCounter) {
	sGraph[iCounter].visited = true;
	for(var jCounter in sGraph[iCounter].edges) {
		currentVertex = sGraph[iCounter].edges[jCounter];
		if(typeof sGraph[currentVertex] == "undefined") {
			sGraph[currentVertex] = {};
			sGraph[currentVertex]["edges"] = [];
			sGraph[currentVertex]["visited"] = false;
			sGraph[currentVertex]["transEdges"] = [];
		}
		if(!sGraph[currentVertex].visited) {
			sGraph[iCounter].visited = true;
			iCounter = currentVertex;			
		}
	}
	Stack.push(iCounter);
}

 function readTextFile(file)
 {
	var pArray = [];
	var fso, f1, ts, s;
	var ForReading = 1;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	ts = fso.OpenTextFile(file, ForReading);
	s = ts.ReadAll();
	var allText = s;
	pArray = allText.split("\n");						
	var key, value;			
	var iCounter = 0;	
	debugger;
	for(iCounter = 0; iCounter < pArray.length; iCounter++) {
		key = pArray[iCounter].split(" ")[0];	
		value = pArray[iCounter].split(" ")[1];
		if(typeof sGraph[key] == "undefined") {
			sGraph[key] = {};
			sGraph[key]["edges"] = [];
			sGraph[key]["visited"] = false;
			sGraph[key]["transEdges"] = [];
		}
		if(typeof sGraph[value] == "undefined") {
			sGraph[value] = {};
			sGraph[value]["edges"] = [];
			sGraph[value]["visited"] = false;
			sGraph[value]["transEdges"] = [];
		}
		sGraph[key]["edges"].push(value);
	}						
	Graph.SCCs(sGraph);	
	ts.Close();	
		
 }
 readTextFile("SCC2.txt");	