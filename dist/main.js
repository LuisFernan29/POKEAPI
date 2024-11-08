"use strict";
//datoss basicos
async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
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
        console.log(`Habilidades: ${abilities.join(', ')}`);
        const types = pokemonData.types.map(t => t.type.name);
        console.log(`Tipos: ${types.join(', ')}`);
    }
    catch (error) {
        console.error("Hubo un error al obtener los datos del Pokémon:", error);
    }
}
// Ejecucion
main();
