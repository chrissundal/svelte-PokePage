import { W as head, M as bind_props, D as pop, A as push, Q as ensure_array_like, P as escape_html, T as attr, U as stringify } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index4.js";
import { R as RouteTransition } from "../../../chunks/RouteTransition.js";
function _page($$payload, $$props) {
  push();
  let email, pokemons;
  let data = $$props["data"];
  email = page.params.email;
  pokemons = data.pokemons;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Profil - PokePage</title>`;
  });
  RouteTransition($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(pokemons);
      $$payload2.out += `<div class="hero min-h-screen bg-base-300"><div class="hero-content"><div class="max-w-2xl text-center"><h1 class="font-bold text-4xl">${escape_html(email)}'s side</h1> <p class="py-3 max-w-md mx-auto">Beskrivelse av bruker</p> <div class="grid grid-cols-3"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let pokemon = each_array[$$index];
        $$payload2.out += `<a data-sveltekit-prefetch=""${attr("href", `/pokemon/${stringify(pokemon.name)}`)}><div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900"><div class="card-body"><div class="text-center"><img${attr("src", pokemon.sprites.other.home.front_default)} alt="Pokemon" class="w-32 h-32 mx-auto bg-gray-500 rounded-full object-cover"> <h2 class="text-white text-2xl font-bold">${escape_html(pokemon.name)}</h2> <p class="text-info">${escape_html(pokemon.types[0].type.name)}</p></div></div></div></a>`;
      }
      $$payload2.out += `<!--]--></div></div></div></div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
