class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertAtHead(data) {
		this.head = new Node(data, this.head);
	}

	detectLoop() {
		if (!this.head) return false;

		let low = this.head;
		let high = this.head;

		while (high !== null && high.next !== null) {
			low = low.next;
			high = high.next.next;

			if (low == high) return true;
		}

		return false;
	}

	// Print data
	printData() {
		const arr = [];
		let current = this.head;

		while (current != null) {
			arr.push(current.data);
			current = current.next;
		}
		console.log(arr.join(' '));
	}
}

const ll = new LinkedList();
ll.insertAtHead(4);
ll.insertAtHead(3);
ll.insertAtHead(1);
ll.insertAtHead(3);

/**
 * Reverse the link list
 */
// Our linked List after insertion
ll.printData();
console.log(ll.detectLoop(2));
