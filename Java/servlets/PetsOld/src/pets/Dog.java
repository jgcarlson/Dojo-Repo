package pets;

public class Dog extends Animal implements Pet {
	public String showAffection() {
		if (this.weight < 10) {
			return (this.name + " jumped on your lap.");
		} else if (this.weight < 30) {
			return (this.name + " cuddled up next to you.");
		} else {
			return (this.name + " jumped on your lap and nearly knocked you over.");
		}
	}
	
	public Dog(String n, String b, int w) {
		name = n;
		breed = b;
		weight = w;
	}
}
