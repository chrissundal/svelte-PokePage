import { e as error } from "../../chunks/index2.js";
const ssr = false;
const load = async ({ fetch }) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
    if (!response.ok) {
      throw error(response.status, `Feil ved henting av data: ${response.statusText}`);
    }
    const data = await response.json();
    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        if (!res.ok) return null;
        const details = await res.json();
        return {
          name: details.name,
          sprites: details.sprites,
          types: details.types
        };
      })
    );
    return { pokemons: pokemons.filter(Boolean) };
  } catch (err) {
    console.error("Uventet feil ved lasting av data:", err);
    throw error(500, "En uventet feil oppstod ved henting av pokémon-data");
  }
};
export {
  load,
  ssr
};
