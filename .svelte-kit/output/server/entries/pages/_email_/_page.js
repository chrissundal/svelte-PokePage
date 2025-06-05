import { e as error } from "../../../chunks/index2.js";
const ssr = false;
const load = async ({ fetch }) => {
  const myPokemons = ["pikachu", "ditto"];
  try {
    const responses = await Promise.all(
      myPokemons.map(
        (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      )
    );
    let pokemons = [];
    for (const response of responses) {
      if (!response.ok) {
        error(response.status, `Feil ved henting av data: ${response.statusText}`);
      }
      pokemons.push(await response.json());
    }
    return { pokemons };
  } catch (err) {
    if (err.status || err.location) {
      throw err;
    }
    console.error("Uventet feil ved lasting av data:", err);
    throw error(500, "En uventet feil oppstod ved henting av Pokemon-data");
  }
};
export {
  load,
  ssr
};
