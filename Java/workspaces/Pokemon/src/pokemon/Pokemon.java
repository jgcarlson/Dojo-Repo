package pokemon;

class Pokemon {
	private String name;
	private int health;
	private String type;
	public static int count;
	
	public Pokemon(String n, int h, String t) {
		name = n;
		health = h;
		type = t;
		count++;
	}
}
