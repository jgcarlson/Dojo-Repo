package pets;

public class Cat extends Animal implements Pet {
	public String showAffection() {
		return (this.name + " looks at you coldly.");
	}
	
	public Cat(String n, String b, int w) {
		name = n;
		breed = b;
		weight = w;
	}
}
