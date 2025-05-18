import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BW_OQY9D.js","_app/immutable/chunks/DnFZmfct.js","_app/immutable/chunks/BNAJSufW.js","_app/immutable/chunks/CnjtkWbV.js","_app/immutable/chunks/BcbZIc76.js","_app/immutable/chunks/DdBlG2mz.js","_app/immutable/chunks/CrnioUIF.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/Bi8qZtyK.js","_app/immutable/chunks/DXDebkQQ.js","_app/immutable/chunks/DMccpC33.js"];
export const stylesheets = [];
export const fonts = [];
