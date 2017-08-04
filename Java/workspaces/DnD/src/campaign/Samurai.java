package campaign;

class Samurai extends Human {
	public int health = 200;
	
	public void deathBlow(Human h) {
		h.health = 0;
		this.health = this.health / 2;
	}
	
	public void meditate() {
		this.health += this.health / 2;
	}
}
