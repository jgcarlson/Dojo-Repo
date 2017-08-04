package campaign;

class Wizard extends Human {
	
	public Wizard() {
		health = 50;
		intelligence = 8;
	}
	
	public void heal(Human h) {
		h.health += this.intelligence;
	}
	
	public void fireball(Human h) {
		h.health -= (3 * this.intelligence);
	}
	
}
