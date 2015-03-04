function newNode (value) {
	var tmp = {};
	tmp.data = value;
	tmp.next = null;
	return tmp;
}

var head = new newNode(1);
head.next = new newNode(2);
head.next.next = new newNode(3);
head.next.next.next = new newNode(4);
head.next.next.next.next = new newNode(5);
head.next.next.next.next.next = new newNode(6);
head.next.next.next.next.next.next = new newNode(7);


function getNthNode(head, n) {
	var i = 0;
	var current = head;
	while(i < n - 1 && current) {
		current = current.next;
		i++;
	}
	if(current) {
		return current;	
	}
	return "Out of Index";	
}

getNthNode(head, 2);


function getMiddleNode(head) {
	var slow = head;
	var fast = head;
	do {
		if(fast.next == null) {
			return slow;
		}

		if(fast.next.next) {
			fast = fast.next.next;
		}
		else {
			fast = fast.next
		}

		slow = slow.next;
		
	} while(fast != null);
}
getMiddleNode(head);

function reverseList(head) {
	var prevNode = null, nextNode = null;
	var current = head;
	while(current) {
		nextNode = current.next;
		current.next = prevNode;
		prevNode = current;
		current = nextNode;
	}
	head = prevNode;
	return head;
}

reverseList(head);