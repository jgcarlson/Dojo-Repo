package campaign;

class Ninja extends Human {
	public int stealth = 10;
	
	public void steal(Human h) {
		h.health -= this.stealth;
		this.health += this.stealth;
	}
	
}
