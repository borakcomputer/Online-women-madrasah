globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"127c-ktV/cRToyEIOiWLwO/KbgBI0e8M\"",
		"mtime": "2026-11-16T04:48:13.671Z",
		"size": 4732,
		"path": "../public/favicon.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"153-jLyRp4WNDLwoKTYwh1uBbqLJKOk\"",
		"mtime": "2026-11-16T04:48:13.688Z",
		"size": 339,
		"path": "../public/favicon.svg"
	},
	"/assets/admin-BiqtEk44.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1576-ihr8xHWeKToN4uMlcObJpR70CsA\"",
		"mtime": "2026-11-25T05:21:31.204Z",
		"size": 5494,
		"path": "../public/assets/admin-BiqtEk44.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-16T04:48:13.701Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/certificate-DBbHq0N6.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b3d-vKVZLIyyHluuLLgVt9t5p0Mkhxs\"",
		"mtime": "2026-11-25T05:21:31.213Z",
		"size": 23357,
		"path": "../public/assets/certificate-DBbHq0N6.jpg"
	},
	"/assets/desk-study-DwAv5bWB.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c5a-q+AV9/7MmMNn0LIu0s2JPbDUQBk\"",
		"mtime": "2026-11-25T05:21:31.217Z",
		"size": 23642,
		"path": "../public/assets/desk-study-DwAv5bWB.jpg"
	},
	"/assets/daily-routine-Tc7Ak-eo.jpg": {
		"type": "image/jpeg",
		"etag": "\"31e0e-dgx2JHPydwFcgxcaXvh45tMIYaI\"",
		"mtime": "2026-11-25T05:21:31.214Z",
		"size": 204302,
		"path": "../public/assets/daily-routine-Tc7Ak-eo.jpg"
	},
	"/assets/madrasa-quran-hero-BQ6KXBuQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"39311-kdrbAwJhmM1YTMmJpF6qUcOLlFk\"",
		"mtime": "2026-11-25T05:21:31.222Z",
		"size": 234257,
		"path": "../public/assets/madrasa-quran-hero-BQ6KXBuQ.jpg"
	},
	"/assets/online-class-DePOnqz7.jpg": {
		"type": "image/jpeg",
		"etag": "\"16471-NhfsLB5jLCa9HBeUMS2qfVTK3l8\"",
		"mtime": "2026-11-25T05:21:31.224Z",
		"size": 91249,
		"path": "../public/assets/online-class-DePOnqz7.jpg"
	},
	"/assets/online-quran-class-DxBPoV4y.png": {
		"type": "image/png",
		"etag": "\"2f0e1-q/8VMVxRRkhXT5d0AfQ/YQ/tIrc\"",
		"mtime": "2026-11-25T05:21:31.225Z",
		"size": 192737,
		"path": "../public/assets/online-quran-class-DxBPoV4y.png"
	},
	"/assets/quran-flowers-DwWxpjW5.jpg": {
		"type": "image/jpeg",
		"etag": "\"5793-dJrMYHocLoABBFnKsX+d9V6V/5A\"",
		"mtime": "2026-11-25T05:21:31.229Z",
		"size": 22419,
		"path": "../public/assets/quran-flowers-DwWxpjW5.jpg"
	},
	"/assets/registration-HzkMCxz5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c88-1888dWstUDL8qwyfKohJs/vso5Q\"",
		"mtime": "2026-11-25T05:21:31.207Z",
		"size": 19592,
		"path": "../public/assets/registration-HzkMCxz5.js"
	},
	"/assets/online-women-madrasah-logo-Z55CS3Bh.png": {
		"type": "image/png",
		"etag": "\"127c-ktV/cRToyEIOiWLwO/KbgBI0e8M\"",
		"mtime": "2026-11-25T05:21:31.227Z",
		"size": 4732,
		"path": "../public/assets/online-women-madrasah-logo-Z55CS3Bh.png"
	},
	"/assets/styles-DKpcoGG1.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d564-DtiDUEdc2lBrhH25eqT84B5R/yc\"",
		"mtime": "2026-11-25T05:21:31.235Z",
		"size": 120164,
		"path": "../public/assets/styles-DKpcoGG1.css"
	},
	"/assets/rehal-plants-s5HS6Ryk.jpg": {
		"type": "image/jpeg",
		"etag": "\"7130-u/GO9CV6GB7kw+skmdjzjBJZnbc\"",
		"mtime": "2026-11-25T05:21:31.231Z",
		"size": 28976,
		"path": "../public/assets/rehal-plants-s5HS6Ryk.jpg"
	},
	"/assets/online-women-madrasah-logo-C0KtZX9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102c2-2vUUHJ2plaxhvE9tmhSLtM9jjks\"",
		"mtime": "2026-11-25T05:21:31.206Z",
		"size": 66242,
		"path": "../public/assets/online-women-madrasah-logo-C0KtZX9j.js"
	},
	"/assets/thumb-rehal-BYhdEhEs.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d71-q5mbVdLFitiPBSLCzOPEw39UV3U\"",
		"mtime": "2026-11-25T05:21:31.245Z",
		"size": 7537,
		"path": "../public/assets/thumb-rehal-BYhdEhEs.jpg"
	},
	"/assets/thumb-parenting-D2abTVmy.jpg": {
		"type": "image/jpeg",
		"etag": "\"20e40-soFKW7OyixZ8b36zQcIUBCha4OY\"",
		"mtime": "2026-11-25T05:21:31.242Z",
		"size": 134720,
		"path": "../public/assets/thumb-parenting-D2abTVmy.jpg"
	},
	"/assets/routes-BaBSm4Us.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f21-moYmw6qEJVwn6hCFsqvkoN4trqo\"",
		"mtime": "2026-11-25T05:21:31.208Z",
		"size": 69409,
		"path": "../public/assets/routes-BaBSm4Us.js"
	},
	"/assets/thumb-notebook-BedexdTz.jpg": {
		"type": "image/jpeg",
		"etag": "\"1634-Tmgoao0L79uIjL8vALFh8OTMlkE\"",
		"mtime": "2026-11-25T05:21:31.238Z",
		"size": 5684,
		"path": "../public/assets/thumb-notebook-BedexdTz.jpg"
	},
	"/assets/thumb-prayer-room-CG8AlpLn.jpg": {
		"type": "image/jpeg",
		"etag": "\"12b7-s3O1xs4pRXtJeuCyWRtC4Tzsabw\"",
		"mtime": "2026-11-25T05:21:31.243Z",
		"size": 4791,
		"path": "../public/assets/thumb-prayer-room-CG8AlpLn.jpg"
	},
	"/assets/index-Bzgv02MF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9116c-YJgb8s5BShmUv7tA21VRwQLq5ZA\"",
		"mtime": "2026-11-25T05:21:31.202Z",
		"size": 594284,
		"path": "../public/assets/index-Bzgv02MF.js"
	},
	"/assets/why-us-student-EY5ooZu0.png": {
		"type": "image/png",
		"etag": "\"4600a-xirOkzdd50JlPtcdxhJ8RJ67Now\"",
		"mtime": "2026-11-25T05:21:31.255Z",
		"size": 286730,
		"path": "../public/assets/why-us-student-EY5ooZu0.png"
	},
	"/assets/thumb-tajweed-DLYMk_CJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef5-coFV7XTL28Vv9SXqaVXGAWsp32Q\"",
		"mtime": "2026-11-25T05:21:31.247Z",
		"size": 7925,
		"path": "../public/assets/thumb-tajweed-DLYMk_CJ.jpg"
	},
	"/assets/weekly-exam-ClfNsBS1.jpg": {
		"type": "image/jpeg",
		"etag": "\"177ab0-HjJ7loeenejL0IGcJAD7pnWXM8Q\"",
		"mtime": "2026-11-25T05:21:31.253Z",
		"size": 1538736,
		"path": "../public/assets/weekly-exam-ClfNsBS1.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_uQtDfp = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_uQtDfp
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
