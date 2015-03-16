//function to create a node for tree
function newNode(value) {
	var tmp = {};
	tmp.data = value;
	tmp.left = null;
	tmp.right = null;
	return tmp;
}


//inorder tree traversal using recursion
function inOrder(root) {
	if(root == null) {
		return;
	}
	inOrder(root.left);
	console.log(root.data);
	inOrder(root.right);
}

//preorder tree traversal using recursion
function preOrder(root) {
	if(root == null) {
		return;
	}
	console.log(root.data);
	preOrder(root.left);
	preOrder(root.right);
}

//postorder tree traversal using recursion
function postOrder(root) {
	if(root == null) {
		return;
	}
	postOrder(root.left);
	postOrder(root.right);
	console.log(root.data);
}


//enqueue operation on array - add element at the end
Array.prototype.enQueue = function() {
	this.push(arguments[0]);
};


//dequeue operation on array - remove first element
Array.prototype.deQueue = function() {
	if(this.length > 0) {
		return this.shift();
	}
};

//if queue length is 0, then it's empty
Array.prototype.isEmptyQueue = function() {
	return this.length == 0;
};


//level order traversal of tree
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

//find the path from root to a given node
//function to return true or false if there is a path exists
//while keeping path array updated
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

//LCA (least common ancestor) - find a node that contains both the given node of tree
//Remember this is binary tree
//We already got the path n1 and n2 using findPath function from root to given node
//Check in n1 and n2 when there value not match, node before that is LCA
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


//do a post order traveral that will allow child node to visit first
//then swap the left and right child
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

//similar problem to find the path
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

function countLeafNodes(root) {
	var queue = [];
	queue.enQueue(root);
	var count = 0;
	while(!queue.isEmptyQueue()) {
		var tmp = queue.deQueue();
		if(!tmp.left && !tmp.right) {
			count++;
		}
		if(tmp.left) {
			queue.enQueue(tmp.left);
		}
		if(tmp.right) {
			queue.enQueue(tmp.right);
		}
	}
	return count;
}
console.log("Number of leaf nodes: " + countLeafNodes(root));

//Binary search Tree

var root = new newNode(8);
root.left = new newNode(3);
root.right = new newNode(10);
root.left.left = new newNode(1);
root.left.right = new newNode(6);
root.right.left = new newNode(9);
root.right.right = new newNode(14);

function isBST(root, min, max) {
	if(root == null) {
		return true;
	} 	
	else {
		return root.data > min && root.data < max &&
		isBST(root.left, min, root.data) &&
		isBST(root.right, root.data, max);
	}		
}

//change the min and max value based on overall min and max value of tree
console.log('Is root tree binary search tree: ' + isBST(root, -1, 100));
console.log('Is root1 tree binary search tree: ' + isBST(root1, -1, 100));


//maintain 2 stack
//push in first stack and after poping push it's left and right child in another stack
//order of pushing will be left to right in second stack
//swap the stack if first stack length == 0 and also order to right to left
function spiralTree(root) {
	//since array in javascript is already a stack, so using array itself
	//rather than creating stack 
	var stack1 = [];
	var stack2 = [];
	stack1.push(root);
	var leftToRight = 1;
	while(stack1.length != 0) {
		var tmp = stack1.pop();
		console.log(tmp.data);
		
		if(leftToRight) {
			if(tmp.left) {
				stack2.push(tmp.left);
			}
			if(tmp.right) {
				stack2.push(tmp.right);
			}
		}
		else {
			if(tmp.right) {
				stack2.push(tmp.right);
			}
			if(tmp.left) {
				stack2.push(tmp.left);
			}
		}
		if(stack1.length == 0) {
			leftToRight = 1 - leftToRight;
			var swap = stack1;
			stack1 = stack2;
			stack2 = swap;
		}		
	}
}
spiralTree(root);

path = [];


//Number of nodes on the Longest path between two leaves in the tree
//This is wrong
function diameterOfTree(root, path, max) {
	if(root == null) {
		return;
	}
	path.push(root.data);	
	
	if(root.left == null && root.right == null) {
		if(path.length > max.val) {
			max.val = path.length;
		}
	}	
	diameterOfTree(root.left, path, max);
	diameterOfTree(root.right, path, max);

	path.pop();
}

var max = {};
max.val = 0;
diameterOfTree(root1, path, max);

console.log('Diameter of Tree/Nodes in longest path: ' + max.val);

//check if tree satisfies the children sum property
//since, we need to process left and right node at so else condition is required
function isSumTree(root) {
	var ls = 0, rs = 0;
	if(root == null || (root.left == null && root.right == null)) {
		return true;
	}
	else {
		if(root.left != null) {
			ls = root.left.data;
		}
		if(root.right != null) {
			rs = root.right.data;	
		}
		return (
			root.data == ls + rs &&
			isSumTree(root.left) &&
			isSumTree(root.right)
		);
	}	
}

var rootChild = new newNode(10);
rootChild.left = new newNode(8);
rootChild.right = new newNode(2);
rootChild.left.left = new newNode(3);
rootChild.left.right = new newNode(5);
rootChild.right.left = new newNode(2);


console.log('rootChild isSumTree: ' + isSumTree (rootChild));

function inOrderwithoutRecursion(root) {
	var stack = [];
	do {
		while(root) {
			stack.push(root);
			root = root.left;
		}		
		var root = stack.pop();
		console.log(root.data);
		if(root) {
			root = root.right;	
		}
	} while(stack.length !== 0 || root)
	
}

function findInBST(root, value) {
	if(root == null) {
		return false;
	}
	else if(root.data == value) {
		return true;
	}
	else if(root.data > value) {
		return findInBST(root.left, value);
	}
	else if(root.data < value) {
		return findInBST(root.right, value);
	}
}


function findInBSTNonRecursive(root, value) {
	while(root) {
		if(root.data == value) {
			return true;
		}
		else if(root.data > value) {
			root = root.left;
		}
		else if(root.data < value) {
			root = root.right;
		}

	}
	return false;
}
console.log("Is 10 present in root: " + findInBST(root, 10));

console.log("Is 10 present in root: " + findInBSTNonRecursive(root, 10));

function inOrderSuccessor(root, value) {
	//first find the node
	var stack = []
	var found = 0;
	while(root) {
		stack.push(root);
		if(root.data == value) {
			found = 1 - found;
			break;
		}
		else if(root.data > value) {
			root = root.left;
		}
		else if(root.data < value) {
			root = root.right;
		}
	}
	if(!found) {
		console.log('Node not found');
		return;
	}
	//Logic to find the Successor

	if(root.right) {
		root = root.right;
		//find min of right child
		while(root.left) {
			root = root.left;
		}
		return root.data;
	}
	else {
		//Move to parent till node is left child
		//It's parent is in order successor

		var currentNode = stack.pop();
		var len = stack.length;
		var top = stack[len - 1];

		while(top && top.left && top.left.data != currentNode.data && stack.length > 0) {
			var currentNode = stack.pop();
			len = stack.length;
			top = stack[len - 1];	
		}

		return top ? top.data : "No Successor exists since it's max node";
	}

}


// //Algo to Solve

// BST:-
// 3. Inserting and deleting an node in binary search tree
// 4. Find LCA of BST 
// 5. Convert BST to circular DLL
// 6. Convert an array to BST
// 7. Find kth smallest element in BST
// 8. Print elements of BST between range K1 and K2
// 9. Convert a sorted list to height balanced BST

// Binary Tree:-
// 1. Non-recursive method for the post order and pre order
// 2. If path exists with given sum
// 3. Vertical Sum problem