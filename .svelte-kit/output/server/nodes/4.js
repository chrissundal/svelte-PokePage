

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_email_/_page.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": false
};
export const universal_id = "src/routes/[email]/+page.js";
export const imports = ["_app/immutable/nodes/4.fAMmQujs.js","_app/immutable/chunks/DNTD3ZPW.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Ca-V092e.js","_app/immutable/chunks/y302EgEr.js","_app/immutable/chunks/Bhy60SNx.js","_app/immutable/chunks/DEwPd4sG.js","_app/immutable/chunks/DqhUhdnC.js","_app/immutable/chunks/DT32rdVm.js","_app/immutable/chunks/DVyme8Kt.js","_app/immutable/chunks/D79t_G-E.js"];
export const stylesheets = [];
export const fonts = [];
