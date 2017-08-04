package sll;

class Node {
	private int value;
	private Node next = null;
	
	public Node(int val) {
		value = val;
		next = null;
	}
	
	public Node(int val, Node nextNode) {
		value = val;
		next = nextNode;
	}
}
