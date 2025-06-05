

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pokemon/_name_/_page.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": false
};
export const universal_id = "src/routes/pokemon/[name]/+page.js";
export const imports = ["_app/immutable/nodes/3.DvcEjE8n.js","_app/immutable/chunks/DNTD3ZPW.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Ca-V092e.js","_app/immutable/chunks/y302EgEr.js","_app/immutable/chunks/Bhy60SNx.js","_app/immutable/chunks/DEwPd4sG.js","_app/immutable/chunks/D9ThWQ4g.js","_app/immutable/chunks/DqhUhdnC.js","_app/immutable/chunks/DXDebkQQ.js"];
export const stylesheets = [];
export const fonts = [];
