(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/Desktop_seylane-vip_seylane-dashboard_edge-wrapper_67631597.js",
"[project]/Desktop/seylane-vip/seylane-dashboard/edge-wrapper.js { MODULE => \"[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/esm/build/templates/edge-app-route.js { INNER_ROUTE_ENTRY => \\\"[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \\\\\\\"[project]/Desktop/seylane-vip/seylane-dashboard/app/api/mock/autodm/logs/route.ts [app-edge-route] (ecmascript)\\\\\\\" } [app-edge-route] (ecmascript)\\\" } [app-edge-route] (ecmascript)\" } [app-edge-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i('[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/esm/build/templates/edge-app-route.js { INNER_ROUTE_ENTRY => "[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \\"[project]/Desktop/seylane-vip/seylane-dashboard/app/api/mock/autodm/logs/route.ts [app-edge-route] (ecmascript)\\" } [app-edge-route] (ecmascript)" } [app-edge-route] (ecmascript)'));
modProm.catch(()=>{});
self._ENTRIES["middleware_app/api/mock/autodm/logs/route"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
]);

//# sourceMappingURL=Desktop_seylane-vip_seylane-dashboard_edge-wrapper_67631597.js.map