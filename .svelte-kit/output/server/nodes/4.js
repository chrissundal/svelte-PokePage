import * as server from '../entries/pages/_email_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_email_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[email]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.COWWa_z9.js","_app/immutable/chunks/DnFZmfct.js","_app/immutable/chunks/BNAJSufW.js","_app/immutable/chunks/CnjtkWbV.js","_app/immutable/chunks/Bi8qZtyK.js","_app/immutable/chunks/DdBlG2mz.js","_app/immutable/chunks/BPdjvx7I.js","_app/immutable/chunks/BI9TfUUL.js","_app/immutable/chunks/DA-5XiO0.js","_app/immutable/chunks/DMccpC33.js"];
export const stylesheets = [];
export const fonts = [];
