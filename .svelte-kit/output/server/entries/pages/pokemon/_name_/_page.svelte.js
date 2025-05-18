import { W as head, M as bind_props, D as pop, A as push, P as escape_html, Q as ensure_array_like, T as attr } from "../../../../chunks/index.js";
import { c as capitalize } from "../../../../chunks/capitalize.js";
import { R as RouteTransition } from "../../../../chunks/RouteTransition.js";
function _page($$payload, $$props) {
  push();
  let pokemon;
  let data = $$props["data"];
  pokemon = data.pokemon;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(capitalize(pokemon.name))} - PokePage</title>`;
  });
  RouteTransition($$payload, {
    children: ($$payload2) => {
      if (pokemon) {
        $$payload2.out += "<!--[-->";
        const each_array = ensure_array_like(pokemon.stats);
        $$payload2.out += `<div class="hero min-h-screen bg-base-300 flex items-center justify-center"><div class="card w-full max-w-md bg-base-100 shadow-xl"><figure class="bg-base-200 py-6"><img${attr("src", pokemon.sprites.other.home.front_default)}${attr("alt", capitalize(pokemon.name))} class="w-32 h-32 object-contain"></figure> <div class="card-body"><h1 class="card-title text-3xl mb-2">${escape_html(capitalize(pokemon.name))}</h1> <div class="flex flex-wrap gap-2 mb-4"><div class="badge badge-primary text-sm">${escape_html(capitalize(pokemon.types[0].type.name))}</div> <div class="badge badge-secondary text-sm">XP: ${escape_html(pokemon.base_experience)}</div></div> <div class="grid grid-cols-2 gap-2 mb-4 text-center"><div><span class="font-semibold">Weight:</span> ${escape_html(pokemon.weight)}</div> <div><span class="font-semibold">Height:</span> ${escape_html(pokemon.height)}</div></div> <div><h3 class="font-semibold mb-1">Stats:</h3> <ul class="grid grid-cols-2 gap-3"><!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let stat = each_array[$$index];
          $$payload2.out += `<div><li class="flex justify-between border border-neutral-700 p-3 rounded"><span class="capitalize">${escape_html(stat.stat.name)}:</span> <span class="font-bold">${escape_html(stat.base_stat)}</span></li></div>`;
        }
        $$payload2.out += `<!--]--></ul></div></div></div></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
