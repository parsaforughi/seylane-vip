(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60', {
    variants: {
        variant: {
            primary: 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-slate-900 shadow-neon',
            ghost: 'bg-white/5 text-white hover:bg-white/10',
            outline: 'bg-transparent text-white hover:bg-white/5'
        },
        size: {
            default: 'h-10 px-5',
            sm: 'h-8 px-3 text-xs',
            lg: 'h-12 px-6 text-base',
            icon: 'h-10 w-10 p-0 rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size
        }), className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleShell",
    ()=>ModuleShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ModuleShell({ title, subtitle, actions, children, showSidebar = true }) {
    const hasSidebar = showSidebar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-10 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `grid gap-8 ${hasSidebar ? 'lg:grid-cols-[280px_1fr]' : ''}`,
            children: [
                hasSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                    lineNumber: 22,
                    columnNumber: 24
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "glass-panel flex flex-wrap items-center justify-between gap-4 border-white/5 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.4em] text-white/50",
                                            children: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                actions ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    children: "Launch Sequence"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/module-shell.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ModuleShell;
var _c;
__turbopack_context__.k.register(_c, "ModuleShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BASE = ("TURBOPACK compile-time value", "https://bdcd0c9f-392c-4eca-a76a-4ab4fdca9994-00-2hisy5qmiaduo.spock.replit.dev:3000");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
async function apiFetch(path, init = {}) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const res = await fetch(`${BASE}${normalizedPath}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...init.headers || {}
        }
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
    }
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "explainerApi",
    ()=>explainerApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/client.ts [app-client] (ecmascript)");
;
async function fetchExplainerStats() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/stats');
}
async function fetchExplainerConversations() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/conversations');
}
async function fetchExplainerMessages(conversationId) {
    const query = `?conversationId=${encodeURIComponent(conversationId)}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/messages${query}`);
}
const explainerApi = {
    stats: fetchExplainerStats,
    conversations: fetchExplainerConversations,
    messages: fetchExplainerMessages
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExplainerBaseUrl",
    ()=>getExplainerBaseUrl,
    "useMockExplainer",
    ()=>useMockExplainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getExplainerBaseUrl() {
    const base = ("TURBOPACK compile-time value", "https://bdcd0c9f-392c-4eca-a76a-4ab4fdca9994-00-2hisy5qmiaduo.spock.replit.dev:3000");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return base;
}
function useMockExplainer() {
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/live-messages-stream.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeToLiveMessages",
    ()=>subscribeToLiveMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/config.ts [app-client] (ecmascript)");
'use client';
;
function subscribeToLiveMessages(listener) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const source = new EventSource(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExplainerBaseUrl"])()}/live-messages`);
    const handler = (event)=>{
        try {
            const payload = JSON.parse(event.data);
            if (payload.type === 'message' && payload.message) {
                listener(payload.message);
            }
        } catch (error) {
            console.error('live message parse error', error);
        }
    };
    source.addEventListener('message', handler);
    return ()=>{
        source.removeEventListener('message', handler);
        source.close();
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExplainerStore",
    ()=>useExplainerStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$live$2d$messages$2d$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/live-messages-stream.ts [app-client] (ecmascript)");
'use client';
;
;
;
const useExplainerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set, get)=>{
    let unsubscribeLive = null;
    const applyLiveMessage = (message)=>{
        set((state)=>{
            const messages = state.messagesByConversation[message.conversationId] ?? [];
            const updatedMessages = [
                ...messages,
                message
            ];
            const messagesByConversation = {
                ...state.messagesByConversation,
                [message.conversationId]: updatedMessages
            };
            const conversations = state.conversations.map((conversation)=>{
                if (conversation.id !== message.conversationId) return conversation;
                const updatedConversation = {
                    ...conversation,
                    lastMessageAt: message.createdAt,
                    inboundCount: conversation.inboundCount + (message.from === 'user' ? 1 : 0),
                    outboundCount: conversation.outboundCount + (message.from === 'bot' ? 1 : 0)
                };
                return updatedConversation;
            });
            const stats = state.stats ? {
                ...state.stats,
                totalReceived: state.stats.totalReceived + (message.from === 'user' ? 1 : 0),
                totalSent: state.stats.totalSent + (message.from === 'bot' ? 1 : 0),
                todayReceived: state.stats.todayReceived + (message.from === 'user' && isToday(message.createdAt) ? 1 : 0),
                todaySent: state.stats.todaySent + (message.from === 'bot' && isToday(message.createdAt) ? 1 : 0)
            } : null;
            return {
                messagesByConversation,
                conversations,
                stats
            };
        });
    };
    return {
        conversations: [],
        messagesByConversation: {},
        selectedConversationId: null,
        stats: null,
        isLoadingConversations: false,
        isLoadingMessages: {},
        isLoadingStats: false,
        isLiveSubscribed: false,
        fetchConversations: async ()=>{
            set({
                isLoadingConversations: true
            });
            try {
                const conversations = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explainerApi"].conversations();
                set({
                    conversations,
                    isLoadingConversations: false
                });
            } catch (error) {
                console.error('explainer conversations error', error);
                set({
                    isLoadingConversations: false
                });
            }
        },
        fetchMessages: async (conversationId)=>{
            if (!conversationId) return;
            set((state)=>({
                    isLoadingMessages: {
                        ...state.isLoadingMessages,
                        [conversationId]: true
                    }
                }));
            try {
                const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explainerApi"].messages(conversationId);
                set((state)=>({
                        messagesByConversation: {
                            ...state.messagesByConversation,
                            [conversationId]: messages
                        },
                        isLoadingMessages: {
                            ...state.isLoadingMessages,
                            [conversationId]: false
                        }
                    }));
            } catch (error) {
                console.error('explainer messages error', error);
                set((state)=>({
                        isLoadingMessages: {
                            ...state.isLoadingMessages,
                            [conversationId]: false
                        }
                    }));
            }
        },
        fetchStats: async ()=>{
            set({
                isLoadingStats: true
            });
            try {
                const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explainerApi"].stats();
                set({
                    stats,
                    isLoadingStats: false
                });
            } catch (error) {
                console.error('explainer stats error', error);
                set({
                    isLoadingStats: false
                });
            }
        },
        selectConversation: (id)=>{
            const previous = get().selectedConversationId;
            if (id && previous !== id && !get().messagesByConversation[id]) {
                void get().fetchMessages(id);
            }
            set({
                selectedConversationId: id
            });
        },
        applyLiveMessage,
        subscribeToLiveMessages: ()=>{
            if (get().isLiveSubscribed) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            unsubscribeLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$live$2d$messages$2d$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToLiveMessages"])((message)=>{
                applyLiveMessage(message);
            });
            set({
                isLiveSubscribed: true
            });
        },
        unsubscribeFromLiveMessages: ()=>{
            if (unsubscribeLive) {
                unsubscribeLive();
                unsubscribeLive = null;
            }
            set({
                isLiveSubscribed: false
            });
        }
    };
});
function isToday(iso) {
    const now = new Date();
    const date = new Date(iso);
    return now.getUTCFullYear() === date.getUTCFullYear() && now.getUTCMonth() === date.getUTCMonth() && now.getUTCDate() === date.getUTCDate();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/state/log-stream-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogStreamStore",
    ()=>useLogStreamStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
'use client';
;
const useLogStreamStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>{
    let source = null;
    return {
        logs: [],
        connected: false,
        connect: (endpoint)=>{
            source?.close();
            source = new EventSource(endpoint);
            set({
                logs: [],
                connected: true
            });
            source.onmessage = (event)=>{
                try {
                    const payload = JSON.parse(event.data);
                    set((state)=>({
                            logs: [
                                payload,
                                ...state.logs
                            ].slice(0, 25)
                        }));
                } catch (error) {
                    console.error('log parse error', error);
                }
            };
            source.onerror = ()=>{
                source?.close();
                set({
                    connected: false
                });
            };
        },
        disconnect: ()=>{
            source?.close();
            source = null;
            set({
                connected: false
            });
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('glass-panel relative overflow-hidden border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-3xl', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = 'Card';
const CardHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mb-4 flex items-center justify-between text-sm text-white/70', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CardHeader;
const CardTitle = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-semibold text-white', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = CardTitle;
const CardDescription = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-white/60', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CardDescription;
const CardContent = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-white/70', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = CardContent;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader");
__turbopack_context__.k.register(_c3, "CardTitle");
__turbopack_context__.k.register(_c4, "CardDescription");
__turbopack_context__.k.register(_c5, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollbar"], {
                orientation: "vertical",
                className: "w-2 rounded-full bg-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                    className: "rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
var _c;
__turbopack_context__.k.register(_c, "ScrollArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-pulse rounded-2xl bg-white/10', className)
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/skeleton.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExplainerHub",
    ()=>ExplainerHub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivitySquare$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/square-activity.js [app-client] (ecmascript) <export default as LucideActivitySquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideMessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as LucideMessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as LucideArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/state/log-stream-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function ExplainerHub() {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[stats]": (state)=>state.stats
    }["ExplainerHub.useExplainerStore[stats]"]);
    const conversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[conversations]": (state)=>state.conversations
    }["ExplainerHub.useExplainerStore[conversations]"]);
    const selectedConversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[selectedConversationId]": (state)=>state.selectedConversationId
    }["ExplainerHub.useExplainerStore[selectedConversationId]"]);
    const messagesByConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[messagesByConversation]": (state)=>state.messagesByConversation
    }["ExplainerHub.useExplainerStore[messagesByConversation]"]);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[fetchStats]": (state)=>state.fetchStats
    }["ExplainerHub.useExplainerStore[fetchStats]"]);
    const fetchConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[fetchConversations]": (state)=>state.fetchConversations
    }["ExplainerHub.useExplainerStore[fetchConversations]"]);
    const selectConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[selectConversation]": (state)=>state.selectConversation
    }["ExplainerHub.useExplainerStore[selectConversation]"]);
    const isLoadingStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[isLoadingStats]": (state)=>state.isLoadingStats
    }["ExplainerHub.useExplainerStore[isLoadingStats]"]);
    const isLoadingConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[isLoadingConversations]": (state)=>state.isLoadingConversations
    }["ExplainerHub.useExplainerStore[isLoadingConversations]"]);
    const isLoadingMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[isLoadingMessages]": (state)=>state.isLoadingMessages
    }["ExplainerHub.useExplainerStore[isLoadingMessages]"]);
    const subscribeToLiveMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[subscribeToLiveMessages]": (state)=>state.subscribeToLiveMessages
    }["ExplainerHub.useExplainerStore[subscribeToLiveMessages]"]);
    const unsubscribeFromLiveMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"])({
        "ExplainerHub.useExplainerStore[unsubscribeFromLiveMessages]": (state)=>state.unsubscribeFromLiveMessages
    }["ExplainerHub.useExplainerStore[unsubscribeFromLiveMessages]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExplainerHub.useEffect": ()=>{
            void fetchStats();
            void fetchConversations();
            subscribeToLiveMessages();
            return ({
                "ExplainerHub.useEffect": ()=>{
                    unsubscribeFromLiveMessages();
                }
            })["ExplainerHub.useEffect"];
        }
    }["ExplainerHub.useEffect"], [
        fetchStats,
        fetchConversations,
        subscribeToLiveMessages,
        unsubscribeFromLiveMessages
    ]);
    const activeMessages = selectedConversationId ? messagesByConversation[selectedConversationId] ?? [] : [];
    const chatLoading = selectedConversationId ? isLoadingMessages[selectedConversationId] : false;
    const selectedConversation = conversations.find((conversation)=>conversation.id === selectedConversationId) ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsRow, {
                stats: stats,
                isLoading: isLoadingStats
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-[320px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConversationColumn, {
                        conversations: conversations,
                        isLoading: isLoadingConversations,
                        selectedConversationId: selectedConversationId,
                        onSelect: (conversationId)=>selectConversation(conversationId)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatWindow, {
                                conversation: selectedConversation,
                                messages: activeMessages,
                                isLoading: chatLoading ?? false
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExplainerLogs, {}, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ExplainerHub, "vvORJOUjtOrjL52f+UaiaxVMVvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$app$2f$explainer$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExplainerStore"]
    ];
});
_c = ExplainerHub;
function StatsRow({ stats, isLoading }) {
    const statCards = [
        {
            label: 'Total Received',
            key: 'totalReceived'
        },
        {
            label: 'Total Sent',
            key: 'totalSent'
        },
        {
            label: 'Today Received',
            key: 'todayReceived'
        },
        {
            label: 'Today Sent',
            key: 'todaySent'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
        children: statCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-white/5 bg-gradient-to-br from-white/10 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.4em] text-white/50",
                            children: card.label
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        isLoading && !stats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-3xl font-semibold",
                            children: stats ? stats[card.key].toLocaleString() : '—'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, card.key, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c1 = StatsRow;
function ConversationColumn({ conversations, selectedConversationId, isLoading, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full border-white/5 bg-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideMessageSquare$3e$__["LucideMessageSquare"], {
                                className: "h-4 w-4 text-cyan-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            "Live Conversations"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-[0.4em] text-white/50",
                        children: [
                            conversations.length,
                            " open"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: isLoading && !conversations.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-64 w-full"
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "max-h-[520px] overflow-y-auto pr-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            conversations.map((conversation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelect(conversation.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full rounded-2xl border px-4 py-3 text-left transition', selectedConversationId === conversation.id ? 'border-cyan-400/70 bg-white/10 shadow-neon' : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs text-white/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: conversation.username
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formatRelativeTime(conversation.lastMessageAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-center gap-3 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-cyan-500/40 px-3 py-1 text-cyan-100",
                                                    children: [
                                                        "Inbound ",
                                                        conversation.inboundCount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-fuchsia-500/40 px-3 py-1 text-fuchsia-100",
                                                    children: [
                                                        "Outbound ",
                                                        conversation.outboundCount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, conversation.id, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)),
                            !conversations.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm text-white/60",
                                children: "No active conversations detected yet."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c2 = ConversationColumn;
function ChatWindow({ conversation, messages, isLoading }) {
    if (!conversation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "py-16 text-white/70",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm uppercase tracking-[0.4em] text-white/40",
                        children: "Explainer feed"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xl font-semibold text-white",
                        children: "Choose a conversation to open the Stark thread."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-white/5 bg-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: conversation.username
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/60",
                                children: [
                                    conversation.inboundCount,
                                    " inbound / ",
                                    conversation.outboundCount,
                                    " outbound"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideArrowRight$3e$__["LucideArrowRight"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            "thread"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: isLoading && !messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-72 w-full"
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-[360px] pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-[75%] rounded-2xl border px-4 py-3', message.from === 'user' ? 'border-white/10 bg-white/10 text-left text-white' : 'ml-auto text-right text-white border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/10'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: message.text
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-white/60",
                                            children: new Date(message.createdAt).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)),
                            !messages.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm text-white/60",
                                children: "Messages will stream in once the explainer responds."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 203,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c3 = ChatWindow;
function ExplainerLogs() {
    _s1();
    const logs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ExplainerLogs.useLogStreamStore[logs]": (state)=>state.logs
    }["ExplainerLogs.useLogStreamStore[logs]"]);
    const connected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ExplainerLogs.useLogStreamStore[connected]": (state)=>state.connected
    }["ExplainerLogs.useLogStreamStore[connected]"]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ExplainerLogs.useLogStreamStore[connect]": (state)=>state.connect
    }["ExplainerLogs.useLogStreamStore[connect]"]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ExplainerLogs.useLogStreamStore[disconnect]": (state)=>state.disconnect
    }["ExplainerLogs.useLogStreamStore[disconnect]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExplainerLogs.useEffect": ()=>{
            connect(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExplainerBaseUrl"])()}/logs`);
            return ({
                "ExplainerLogs.useEffect": ()=>disconnect()
            })["ExplainerLogs.useEffect"];
        }
    }["ExplainerLogs.useEffect"], [
        connect,
        disconnect
    ]);
    const filteredLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplainerLogs.useMemo[filteredLogs]": ()=>logs.filter({
                "ExplainerLogs.useMemo[filteredLogs]": (log)=>log.source === 'explainer'
            }["ExplainerLogs.useMemo[filteredLogs]"])
    }["ExplainerLogs.useMemo[filteredLogs]"], [
        logs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-white/5 bg-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivitySquare$3e$__["LucideActivitySquare"], {
                                className: "h-4 w-4 text-emerald-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            "Explainer Logs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs uppercase tracking-[0.4em]', connected ? 'text-emerald-300' : 'text-white/40'),
                        children: connected ? 'streaming' : 'offline'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-[220px] pr-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            filteredLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    className: "rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white",
                                            children: log.message
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50",
                                            children: new Date(log.timestamp).toLocaleTimeString()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)),
                            !filteredLogs.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-2xl border border-dashed border-white/10 bg-white/5 p-3 text-sm text-white/50",
                                children: "Waiting for StarkOS pulses…"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/app/explainer/components/explainer-hub.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s1(ExplainerLogs, "AGcGMgLOK38GJOtZyCHxvBDzqpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"]
    ];
});
_c4 = ExplainerLogs;
function formatRelativeTime(iso) {
    const diffMs = Date.now() - new Date(iso).getTime();
    const minutes = Math.max(1, Math.floor(diffMs / 60000));
    if (minutes < 60) {
        return `${minutes}m ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours}h ago`;
    }
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ExplainerHub");
__turbopack_context__.k.register(_c1, "StatsRow");
__turbopack_context__.k.register(_c2, "ConversationColumn");
__turbopack_context__.k.register(_c3, "ChatWindow");
__turbopack_context__.k.register(_c4, "ExplainerLogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_seylane-vip_seylane-dashboard_e5eb1d75._.js.map