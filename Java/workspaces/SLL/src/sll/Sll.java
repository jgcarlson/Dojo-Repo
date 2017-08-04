package sll;

class Sll {
	private Node head;
	
	public Sll() {
		this.head = new Node();
	}
	
	public void add(int val) {
		if (head == null) {
			head = new Node(val);
		} else {
			Node c = head;
			while (c.next != null) {
				c = c.next;
			}
			c.next = new Node(val);
		}
	}
}
