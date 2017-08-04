package campaign;

class HumanTest {

	public static void main(String[] args) {
		
		Wizard wizard = new Wizard();
		Samurai samurai = new Samurai();
		Ninja ninja = new Ninja();
		ninja.showHealth();
		wizard.fireball(ninja);
		ninja.showHealth();
		wizard.showHealth();
		ninja.attack(wizard);
		wizard.showHealth();
		wizard.heal(wizard);
		wizard.showHealth();
		samurai.deathBlow(wizard);
		wizard.showHealth();
		samurai.showHealth();
		ninja.steal(samurai);
		samurai.showHealth();
		samurai.meditate();
		samurai.showHealth();
	}

}
