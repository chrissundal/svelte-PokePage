import { e as error } from "../../../../chunks/index2.js";
const ssr = false;
const load = async ({ fetch, params }) => {
  let name = params.name;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      error(response.status, `Feil ved henting av data: ${response.statusText}`);
    }
    return { pokemon: await response.json() };
  } catch (err) {
    if (err.status || err.location) {
      throw err;
    }
    console.error("Uventet feil ved lasting av data:", err);
    throw error(500, "En uventet feil oppstod ved henting av guidene");
  }
};
export {
  load,
  ssr
};
