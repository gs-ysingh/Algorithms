function newNode(value) {
	var tmp = {};
	tmp.data = value;
	tmp.left = null;
	tmp.right = null;
	return tmp;
}

function inOrder(root) {
	if(root == null) {
		return;
	}
	inOrder(root.left);
	console.log(root.data);
	inOrder(root.right);
}

function preOrder(root) {
	if(root == null) {
		return;
	}
	console.log(root.data);
	preOrder(root.left);
	preOrder(root.right);
}

function postOrder(root) {
	if(root == null) {
		return;
	}
	postOrder(root.left);
	postOrder(root.right);
	console.log(root.data);
}

Array.prototype.enQueue = function() {
	this.push(arguments[0]);
};

Array.prototype.deQueue = function() {
	if(this.length > 0) {
		return this.shift();
	}
};

Array.prototype.isEmptyQueue = function() {
	return this.length == 0;
};

function levelOrder(root, queue) {
	queue.enQueue.call(queue, root);
	while(!queue.isEmptyQueue.call(queue)) {
		var tmp = queue.deQueue.call(queue);
		console.log(tmp.data);
		if(tmp.left != null) {
			queue.enQueue.call(queue, tmp.left);
		}
		if (tmp.right != null) {
			queue.enQueue.call(queue, tmp.right);
		}
	}
}


function findPath(root, path, value) {
	if(root == null) {
		return false;
	}
	path.push(root.data);
	if(root.data == value) {
		return true;
	}

	if(
		(root.left && 
		findPath(root.left, path, value)) || 
		(root.right && 
		findPath(root.right, path, value))
	) {
		return true;
	}
	path.pop();
	return false;	
}

function findLCA(root, n1, n2) {
	for(var i = 0; i < n1.length && i < n2.length; i++) {
		if(n1[i] != n2[i]) {
			break;
		}
	}
	return n1[i - 1];
}

var root = new newNode(1);
root.left = new newNode(2);
root.right = new newNode(3);
root.left.left = new newNode(4);
root.left.right = new newNode(5);
root.right.left = new newNode(6);
root.right.right = new newNode(7);

console.log("Inorder:")
inOrder(root);

console.log("Preorder:")
preOrder(root);

console.log("Postorder:")
postOrder(root);

path = [];
console.log("LevelOrder : ");
levelOrder(root, path);

var path = [];
if(findPath(root, path, 6)) {
	var n1 = path;
}
path = [];

if(findPath(root, path, 7)) {
	var n2 = path;
}

var lca = findLCA(root, n1, n2);
console.log('LCA of n1 and n2 = ' + lca);

function mirrorImage(root) {
	if(root == null) {
		return;
	}
	else {
		mirrorImage(root.left);
		mirrorImage(root.right);	

		var temp = root.left;
		root.left = root.right;
		root.right = temp;		
	
	}
}
mirrorImage(root);
console.log('Mirror Image of tree ');
console.log(root);

//Vertical Sum
//Max and Sum 

function findMax(root) {
	if(root == null) {
		return 0;
	}		
	return Math.max(Math.max(root.data, findMax(root.left)), 
		Math.max(root.data, findMax(root.right)));
}

console.log('Max element in binary tree ' + findMax(root));

function findSumOfTree(root) {
	if (root == null) {
		return 0;
	}
	return root.data + 
			findSumOfTree(root.left) + 
			findSumOfTree(root.right);
}

console.log('Sum of binary tree ' + findSumOfTree(root));

function numberOfNodes(root) {
	if(root == null) {
		return 0;
	}
	return numberOfNodes(root.left) + 1 + numberOfNodes(root.right);
}
console.log('number of nodes in binary tree ' + numberOfNodes(root));

function heightOfTree(root) {
	if(root == null) {
		return 0;
	}
	return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right));
}

heightOfTree(root);

var root1 = new newNode(1);
root1.left = new newNode(2);
root1.right = new newNode(3);
root1.left.left = new newNode(4);
root1.left.right = new newNode(5);
root1.right.left = new newNode(6);
root1.right.right = new newNode(7);

var root2 = new newNode(1);
root2.left = new newNode(2);
root2.right = new newNode(3);
root2.left.left = new newNode(4);
root2.left.right = new newNode(5);
root2.right.left = new newNode(6);
root2.right.right = new newNode(7);

function isIdentical(root1, root2) {
	if (root1 == null && root2 == null) { return true };

	if(root1.data == root2.data && 
		isIdentical(root1.left, root2.left) &&
		isIdentical(root1.right, root2.right)) { return true };

	return false;
}

console.log("Identical: " + isIdentical(root1, root2));

function deleteTree(root) {
	if (root == null) { return };
	deleteTree(root.left);
	delete root.left;
	delete root.right;
	delete root.data;
	deleteTree(root.right);
}

//deleteTree(root);

//If you are given two traversal sequences, 
//can you construct the binary tree - 

// If one of the traversal is inOrder

path = [];

function rootToLeafPath(root, path) {
	if(root == null) {
		return;
	}
	path.push(root.data);
	if(root.left == null && root.right == null) {
		console.log(path);
	}
	rootToLeafPath(root.left, path);
	rootToLeafPath(root.right, path);
	path.pop()
}

rootToLeafPath(root, path);



