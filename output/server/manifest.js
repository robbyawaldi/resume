export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-d573a74d.js","js":["start-d573a74d.js","chunks/index-b6926417.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "for-ridha",
				pattern: /^\/for-ridha\/?$/,
				names: [],
				types: [],
				path: "/for-ridha",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
