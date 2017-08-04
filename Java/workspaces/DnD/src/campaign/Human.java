package campaign;

class Human {
	
	public int health = 100;
	public int stealth = 3;
	public int strength = 3;
	public int intelligence = 3;
	
	public void attack(Human h) {
		h.health -= this.strength;
	}
	
	public void showHealth() {
		System.out.println(this.health);
	}
	
}
