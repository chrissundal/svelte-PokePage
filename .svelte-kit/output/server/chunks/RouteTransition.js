import { K as slot } from "./index.js";
function RouteTransition($$payload, $$props) {
  $$payload.out += `<div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  RouteTransition as R
};
