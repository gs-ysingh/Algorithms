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
	return Math.max(1 + heightOfTree(root.left), 1 + heightOfTree(root.right));
}

heightOfTree(root);