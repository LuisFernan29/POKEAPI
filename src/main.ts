interface Pokemon {
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
}

//datoss basicos
async function getPokemonData(pokemonName: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data: Pokemon = await response.json();
  return data;
}

// Función principal
async function main() {
  const pokemonName = 'pikachu';

  try {
    //datos del pokemon
    const pokemonData = await getPokemonData(pokemonName);

    console.log(`Nombre: ${pokemonData.name}`);
    console.log(`Altura: ${pokemonData.height / 10} m`);
    console.log(`Peso: ${pokemonData.weight / 10} kg`);

    //habilidades
    const abilities = pokemonData.abilities.map(a => a.ability.name);
    console.log(`habilidades: ${abilities.join(', ')}`);

    const types = pokemonData.types.map(t => t.type.name);
    console.log(`Tipos: ${types.join(', ')}`);
  } catch (error) {
    console.error("error al obtener los datos:", error);
  }
}

// Ejecucion
main();