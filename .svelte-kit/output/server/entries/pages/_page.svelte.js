import { A as push, Q as ensure_array_like, T as attr, P as escape_html, U as stringify, M as bind_props, D as pop, S as store_get, W as head, V as unsubscribe_stores } from "../../chunks/index.js";
import { l as loginOpen, s as session } from "../../chunks/AuthView.js";
import { c as capitalize } from "../../chunks/capitalize.js";
import { R as RouteTransition } from "../../chunks/RouteTransition.js";
function Pokemon($$payload, $$props) {
  push();
  let pokemons = $$props["pokemons"];
  $$payload.out += `<div class="flex justify-center w-full mt-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">`;
  if (pokemons.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(pokemons);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let pokemon = each_array[$$index];
      $$payload.out += `<a data-sveltekit-prefetch=""${attr("href", `/pokemon/${stringify(pokemon.name)}`)}><div class="card bg-slate-700 shadow-lg shadow-blue-900"><div class="card-body"><div class="text-center"><img${attr("src", pokemon.sprites.other.home.front_default)} alt="Pokemon" class="w-32 h-32 mx-auto bg-gray-500 rounded-full object-cover"> <h2 class="text-white text-2xl font-bold">${escape_html(capitalize(pokemon.name))}</h2> `;
      if (pokemon.types && pokemon.types.length) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p class="text-info">${escape_html(capitalize(pokemon.types[0].type.name))}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div></div></div></a>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Ingen pokemon funnet.</p>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { pokemons });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let pokemons;
  let data = $$props["data"];
  pokemons = [...data.pokemons].sort((a, b) => a.name.localeCompare(b.name));
  if (store_get($$store_subs ??= {}, "$session", session)) {
    loginOpen.set(false);
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home - PokePage</title>`;
  });
  RouteTransition($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<main class="hero min-h-screen bg-base-300 flex items-center justify-center"><div class="hero-content"><div class="text-center">`;
      if (store_get($$store_subs ??= {}, "$session", session)) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<h1 class="text-white font-bold text-3xl mt-18">Velkommen til din PokePage ${escape_html(store_get($$store_subs ??= {}, "$session", session).user.email)}!</h1> `;
        if (pokemons) {
          $$payload2.out += "<!--[-->";
          Pokemon($$payload2, { pokemons });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<h1 class="text-white font-bold text-4xl">Velkommen til PokePage!</h1> <p class="py-6">Lag din egen PokePage i dag med egen URL.</p> <button class="btn btn-primary">Opprett en konto</button>`;
      }
      $$payload2.out += `<!--]--></div></div></main>`;
    },
    $$slots: { default: true }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
