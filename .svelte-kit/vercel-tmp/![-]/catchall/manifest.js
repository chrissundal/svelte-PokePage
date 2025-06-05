export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.wyKEmeyF.js",app:"_app/immutable/entry/app.5ObFBcjb.js",imports:["_app/immutable/entry/start.wyKEmeyF.js","_app/immutable/chunks/Btoj5s3t.js","_app/immutable/chunks/y302EgEr.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/D79t_G-E.js","_app/immutable/entry/app.5ObFBcjb.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/y302EgEr.js","_app/immutable/chunks/Ca-V092e.js","_app/immutable/chunks/D9ThWQ4g.js","_app/immutable/chunks/DqhUhdnC.js","_app/immutable/chunks/D79t_G-E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../../../output/server/nodes/0.js')),
			__memo(() => import('../../../output/server/nodes/1.js')),
			__memo(() => import('../../../output/server/nodes/2.js')),
			__memo(() => import('../../../output/server/nodes/3.js')),
			__memo(() => import('../../../output/server/nodes/4.js'))
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
