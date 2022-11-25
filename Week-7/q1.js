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

	reverseLinkedList() {
		let current = this.head;
		let prev = null;
		let next;

		while (current != null) {
			next = current.next;
			current.next = prev;

			prev = current;
			current = next;
		}

		this.head = prev;
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
ll.insertAtHead(1);
ll.insertAtHead(2);
ll.insertAtHead(3);
ll.insertAtHead(4);
ll.insertAtHead(5);
ll.insertAtHead(6);

// Our linked List after insertion
ll.printData();

/**
 * Reverse the link list
 */
ll.reverseLinkedList();

/**
 * Print the reversed linked list
 */
ll.printData();
