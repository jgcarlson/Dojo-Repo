package pokemon;

interface PokeActions {
	void createPokemon(String name, String type, int health);
	void attackPokemon(Pokemon pokemon);
	void pokemonInfo(Pokemon pokemon);
}
