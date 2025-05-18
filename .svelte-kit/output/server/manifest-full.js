export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte-PokePage/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B9sroEp5.js",app:"_app/immutable/entry/app.BIKaE_kj.js",imports:["_app/immutable/entry/start.B9sroEp5.js","_app/immutable/chunks/BI9TfUUL.js","_app/immutable/chunks/BNAJSufW.js","_app/immutable/chunks/DA-5XiO0.js","_app/immutable/entry/app.BIKaE_kj.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/BNAJSufW.js","_app/immutable/chunks/DnFZmfct.js","_app/immutable/chunks/BcbZIc76.js","_app/immutable/chunks/DdBlG2mz.js","_app/immutable/chunks/DA-5XiO0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pokemon/[name]",
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[email]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"email","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
