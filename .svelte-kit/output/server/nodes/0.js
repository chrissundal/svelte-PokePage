

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": false
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BUR8L3cq.js","_app/immutable/chunks/Ca-V092e.js","_app/immutable/chunks/y302EgEr.js","_app/immutable/chunks/Bhy60SNx.js","_app/immutable/chunks/D9ThWQ4g.js","_app/immutable/chunks/DEwPd4sG.js","_app/immutable/chunks/DqhUhdnC.js","_app/immutable/chunks/BzSfW2XT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/D79t_G-E.js","_app/immutable/chunks/z-ZMfNkT.js","_app/immutable/chunks/Dp1pzeXC.js"];
export const stylesheets = ["_app/immutable/assets/0.CgOP_uWI.css"];
export const fonts = [];
