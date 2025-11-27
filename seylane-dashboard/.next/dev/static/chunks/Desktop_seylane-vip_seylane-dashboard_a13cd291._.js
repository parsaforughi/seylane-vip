(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatNumber",
    ()=>formatNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(value) {
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideMessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as LucideMessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideSnowflake$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-client] (ecmascript) <export default as LucideSnowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideLayoutGrid$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LucideLayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideSparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as LucideSparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const nav = [
    {
        href: '/dashboard',
        labelKey: 'nav.overview',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideLayoutGrid$3e$__["LucideLayoutGrid"]
    },
    {
        href: '/explainer',
        labelKey: 'nav.explainer',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideSparkles$3e$__["LucideSparkles"]
    },
    {
        href: '/autodm',
        labelKey: 'nav.autodm',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideMessageCircle$3e$__["LucideMessageCircle"]
    },
    {
        href: '/iceball',
        labelKey: 'nav.iceball',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideSnowflake$3e$__["LucideSnowflake"]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "glass-panel flex h-full min-h-[600px] w-72 flex-col justify-between border-white/5 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/logo.svg",
                                width: 42,
                                height: 42,
                                alt: t('brand.name'),
                                className: "drop-shadow-[0_0_20px_rgba(59,130,246,0.75)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.3em] text-white/60",
                                        children: t('brand.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-semibold",
                                        children: t('brand.name')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-2",
                        children: nav.map(({ href, labelKey, icon: Icon })=>{
                            const active = pathname.startsWith(href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm transition-all', active ? 'border-cyan-400/40 bg-white/10 text-white shadow-neon' : 'text-white/60 hover:border-white/10 hover:bg-white/5 hover:text-white'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t(labelKey)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, href, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4 text-xs text-white/70",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1 font-semibold text-white",
                        children: t('sidebar.stabilityTitle')
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-12 rounded-full border border-white/10 bg-white/10 text-center text-lg font-bold leading-[48px] text-cyan-300",
                                children: "97"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t('sidebar.stabilityMessage')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] uppercase tracking-[0.3em] text-white/40",
                                        children: [
                                            t('sidebar.telemetry'),
                                            " • ",
                                            new Date().toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/sidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "BbXazwjL4El+tAeew1mWb5KeW1I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/state/language-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const options = [
    'en',
    'fa'
];
function LanguageToggle() {
    _s();
    const { currentLanguage, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs uppercase tracking-[0.3em] text-white/50",
                children: t('language.toggle')
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex rounded-full border border-white/10 bg-white/5 p-0.5",
                children: options.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: currentLanguage === lang ? 'primary' : 'ghost',
                        size: "sm",
                        className: "text-xs",
                        onClick: ()=>setLanguage(lang),
                        children: lang === 'en' ? t('language.english') : t('language.persian')
                    }, lang, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "jPdJKq8qSzhfJ8ghx/dlg4Xj/Qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideBell$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as LucideBell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideWifi$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as LucideWifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideCpu$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as LucideCpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$language$2f$language$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/language/language-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function TopBar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-panel flex flex-wrap items-center justify-between gap-4 border-white/5 px-6 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.4em] text-white/50",
                        children: t('topbar.commandCenter')
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-semibold",
                        children: t('topbar.missionStatus')
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$language$2f$language$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                        animate: {
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 4
                        },
                        className: "flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideWifi$3e$__["LucideWifi"], {
                                className: "h-4 w-4 text-cyan-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('topbar.secureLink')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideCpu$3e$__["LucideCpu"], {
                                className: "h-4 w-4 text-fuchsia-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('topbar.neuralLoad')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideBell$3e$__["LucideBell"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-2 top-2 h-3 w-3 rounded-full bg-fuchsia-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/avatar.svg",
                                alt: t('brand.operator'),
                                width: 32,
                                height: 32,
                                className: "rounded-full border border-white/20"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80",
                                        children: t('brand.operator')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/50",
                                        children: t('brand.status')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/top-bar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(TopBar, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
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
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/sparkline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkline",
    ()=>Sparkline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Sparkline({ points, className }) {
    if (!points.length) return null;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const normalized = points.map((point, index)=>{
        const x = index / (points.length - 1 || 1) * 200;
        const y = max === min ? 50 : 50 - (point - min) / (max - min) * 50;
        return `${x},${y}`;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].svg, {
        viewBox: "0 0 200 50",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-12 w-full text-cyan-300', className),
        initial: {
            pathLength: 0
        },
        animate: {
            pathLength: 1
        },
        transition: {
            duration: 1.4,
            ease: 'easeOut'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            points: normalized.join(' '),
            className: "drop-shadow-[0_0_10px_rgba(34,211,238,0.65)]"
        }, void 0, false, {
            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/sparkline.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/sparkline.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Sparkline;
var _c;
__turbopack_context__.k.register(_c, "Sparkline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
function Badge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/badge.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModulesOverview",
    ()=>ModulesOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivity$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as LucideActivity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideGauge$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as LucideGauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as LucideArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$sparkline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/sparkline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const moduleAccent = {
    explainer: 'from-cyan-400/80 to-fuchsia-400/70',
    autodm: 'from-amber-400/80 to-orange-500/70',
    iceball: 'from-blue-400/80 to-cyan-500/70'
};
function ModulesOverview({ modules, conversations, messages }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: modules.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                        initial: {
                            y: 12,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative overflow-hidden border-white/5 bg-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-x-0 top-0 h-1.5 rounded-full bg-gradient-to-r', moduleAccent[item.module])
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex items-center justify-between text-xs text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white/80 capitalize",
                                            children: t(`nav.${item.module}`)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-emerald-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideArrowUpRight$3e$__["LucideArrowUpRight"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "+",
                                                        item.delta,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-semibold",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(item.throughput)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.3em] text-white/50",
                                                    children: t('overview.throughput')
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-sm text-white/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivity$3e$__["LucideActivity"], {
                                                            className: "h-4 w-4 text-cyan-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.accuracy,
                                                                "% ",
                                                                t('overview.integrity')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideGauge$3e$__["LucideGauge"], {
                                                            className: "h-4 w-4 text-fuchsia-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.responseTime,
                                                                "s ",
                                                                t('overview.latency')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$sparkline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkline"], {
                                            points: item.trend
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, item.module, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-white/5 bg-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: t('overview.conversations')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        children: t('overview.live')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: conversations.map((conversation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                        whileHover: {
                                            scale: 1.01
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs uppercase tracking-widest text-white/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: conversation.owner
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: conversation.updatedAt
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-lg font-semibold",
                                                children: conversation.topic
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex items-center justify-between text-sm text-white/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "capitalize",
                                                        children: conversation.state
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            conversation.progress,
                                                            "% ",
                                                            t('overview.synced')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, conversation.id, true, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-white/5 bg-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: t('overview.messages')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "bg-fuchsia-500/20 text-fuchsia-200",
                                        children: t('overview.pulse')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                                        className: "rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4",
                                        initial: {
                                            opacity: 0,
                                            x: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-white/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-white",
                                                        children: message.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: message.timestamp
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs uppercase tracking-[0.3em] text-cyan-300",
                                                children: [
                                                    "#",
                                                    message.channel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-white/80",
                                                children: message.content
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, message.id, true, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/modules-overview.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ModulesOverview, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ModulesOverview;
var _c;
__turbopack_context__.k.register(_c, "ModulesOverview");
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
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExplainerBaseUrl",
    ()=>getExplainerBaseUrl,
    "useMockExplainer",
    ()=>useMockExplainer
]);
function getExplainerBaseUrl() {
    return 'https://bdcd0c9f-392c-4eca-a76a-4ab4fdca9994-00-2hisy5qmiaduo.spock.replit.dev:3000';
}
function useMockExplainer() {
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityPanel",
    ()=>ActivityPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivitySquare$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/square-activity.js [app-client] (ecmascript) <export default as LucideActivitySquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideDot$3e$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/lucide-react/dist/esm/icons/dot.js [app-client] (ecmascript) <export default as LucideDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/state/log-stream-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const modules = [
    'explainer',
    'autodm',
    'iceball'
];
function ActivityPanel() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('explainer');
    const logs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ActivityPanel.useLogStreamStore[logs]": (state)=>state.logs
    }["ActivityPanel.useLogStreamStore[logs]"]);
    const connected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ActivityPanel.useLogStreamStore[connected]": (state)=>state.connected
    }["ActivityPanel.useLogStreamStore[connected]"]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ActivityPanel.useLogStreamStore[connect]": (state)=>state.connect
    }["ActivityPanel.useLogStreamStore[connect]"]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"])({
        "ActivityPanel.useLogStreamStore[disconnect]": (state)=>state.disconnect
    }["ActivityPanel.useLogStreamStore[disconnect]"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityPanel.useEffect": ()=>{
            const endpoint = selected === 'explainer' ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExplainerBaseUrl"])()}/logs` : `/api/mock/${selected}/logs`;
            connect(endpoint);
            return ({
                "ActivityPanel.useEffect": ()=>{
                    disconnect();
                }
            })["ActivityPanel.useEffect"];
        }
    }["ActivityPanel.useEffect"], [
        connect,
        disconnect,
        selected
    ]);
    const filteredLogs = logs.filter((log)=>log.source === selected);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-white/5 bg-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: t('activity.title')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.4em] text-white/50",
                                children: t('activity.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: modules.map((mod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: mod === selected ? 'primary' : 'ghost',
                                size: "sm",
                                onClick: ()=>setSelected(mod),
                                children: t(`nav.${mod}`)
                            }, mod, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-white/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideActivitySquare$3e$__["LucideActivitySquare"], {
                                className: connected ? 'text-emerald-300' : 'text-red-300',
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: connected ? t('activity.live') : t('activity.reconnecting')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 overflow-hidden",
                        children: [
                            filteredLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                                    className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70",
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideDot$3e$__["LucideDot"], {
                                            className: "h-4 w-4 text-cyan-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: log.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50",
                                                    children: new Date(log.timestamp).toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)),
                            !filteredLogs.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/50",
                                children: t('activity.listening')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                                lineNumber: 64,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/dashboard/activity-panel.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ActivityPanel, "ZE2s1A6GhwsEJDo2Hdicu92NV5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$log$2d$stream$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStreamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ActivityPanel;
var _c;
__turbopack_context__.k.register(_c, "ActivityPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MastermindOrb",
    ()=>MastermindOrb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const moduleKeys = [
    'overview',
    'explainer',
    'autodm',
    'iceball'
];
const moduleStyles = {
    overview: {
        gradient: 'from-cyan-400/40 via-fuchsia-400/30 to-transparent',
        glow: 'shadow-[0_0_45px_rgba(59,130,246,0.55)]'
    },
    explainer: {
        gradient: 'from-sky-400/40 via-emerald-400/30 to-transparent',
        glow: 'shadow-[0_0_45px_rgba(14,165,233,0.55)]'
    },
    autodm: {
        gradient: 'from-orange-400/40 via-purple-500/30 to-transparent',
        glow: 'shadow-[0_0_45px_rgba(249,115,22,0.55)]'
    },
    iceball: {
        gradient: 'from-cyan-200/40 via-blue-400/40 to-transparent',
        glow: 'shadow-[0_0_45px_rgba(125,211,252,0.55)]'
    }
};
const moduleSelectors = {
    overview: [
        'a[href="/dashboard"]'
    ],
    explainer: [
        'a[href="/explainer"]'
    ],
    autodm: [
        'a[href="/autodm"]'
    ],
    iceball: [
        'a[href="/iceball"]'
    ]
};
function MastermindOrb() {
    _s();
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const pointerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const pointerY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerX, {
        stiffness: 120,
        damping: 20,
        mass: 0.4
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerY, {
        stiffness: 120,
        damping: 20,
        mass: 0.4
    });
    const eyeX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -80,
        80
    ], [
        -8,
        8
    ]);
    const eyeY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        -80,
        80
    ], [
        -4,
        6
    ]);
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -80,
        80
    ], [
        -6,
        6
    ]);
    const bobbing = {
        y: [
            -2,
            2,
            -2
        ],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    };
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MastermindOrb.useEffect": ()=>{
            const handleMove = {
                "MastermindOrb.useEffect.handleMove": (event)=>{
                    const x = event.clientX / window.innerWidth * 2 - 1;
                    const y = event.clientY / window.innerHeight * 2 - 1;
                    pointerX.set(x * 80);
                    pointerY.set(y * 60);
                }
            }["MastermindOrb.useEffect.handleMove"];
            window.addEventListener('pointermove', handleMove);
            return ({
                "MastermindOrb.useEffect": ()=>window.removeEventListener('pointermove', handleMove)
            })["MastermindOrb.useEffect"];
        }
    }["MastermindOrb.useEffect"], [
        pointerX,
        pointerY
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MastermindOrb.useEffect": ()=>{
            const listeners = [];
            moduleKeys.forEach({
                "MastermindOrb.useEffect": (key)=>{
                    moduleSelectors[key].forEach({
                        "MastermindOrb.useEffect": (selector)=>{
                            document.querySelectorAll(selector).forEach({
                                "MastermindOrb.useEffect": (element)=>{
                                    const enter = {
                                        "MastermindOrb.useEffect.enter": ()=>setFocus(key)
                                    }["MastermindOrb.useEffect.enter"];
                                    const leave = {
                                        "MastermindOrb.useEffect.leave": ()=>setFocus('overview')
                                    }["MastermindOrb.useEffect.leave"];
                                    const click = {
                                        "MastermindOrb.useEffect.click": ()=>{
                                            void controls.start({
                                                scale: [
                                                    1,
                                                    1.2,
                                                    1
                                                ],
                                                transition: {
                                                    duration: 0.35,
                                                    ease: 'easeOut'
                                                }
                                            });
                                        }
                                    }["MastermindOrb.useEffect.click"];
                                    element.addEventListener('mouseenter', enter);
                                    element.addEventListener('mouseleave', leave);
                                    element.addEventListener('click', click);
                                    listeners.push({
                                        "MastermindOrb.useEffect": ()=>{
                                            element.removeEventListener('mouseenter', enter);
                                            element.removeEventListener('mouseleave', leave);
                                            element.removeEventListener('click', click);
                                        }
                                    }["MastermindOrb.useEffect"]);
                                }
                            }["MastermindOrb.useEffect"]);
                        }
                    }["MastermindOrb.useEffect"]);
                }
            }["MastermindOrb.useEffect"]);
            return ({
                "MastermindOrb.useEffect": ()=>listeners.forEach({
                        "MastermindOrb.useEffect": (dispose)=>dispose()
                    }["MastermindOrb.useEffect"])
            })["MastermindOrb.useEffect"];
        }
    }["MastermindOrb.useEffect"], [
        controls
    ]);
    const colors = moduleStyles[focus];
    const eyeElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MastermindOrb.useMemo[eyeElements]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    'left',
                    'right'
                ].map({
                    "MastermindOrb.useMemo[eyeElements]": (side)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span, {
                            style: {
                                x: eyeX,
                                y: eyeY
                            },
                            className: `absolute top-1/2 h-6 w-5 -translate-y-1/2 rounded-full bg-white/70 blur-[0.5px] ${side === 'left' ? '-translate-x-4' : 'translate-x-4'}`
                        }, side, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                }["MastermindOrb.useMemo[eyeElements]"])
            }, void 0, false)
    }["MastermindOrb.useMemo[eyeElements]"], [
        eyeX,
        eyeY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute h-64 w-64 rounded-full blur-3xl ${colors.glow}`
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                animate: bobbing,
                className: "pointer-events-auto",
                onMouseEnter: ()=>void controls.start({
                        scale: 1.04
                    }),
                onMouseLeave: ()=>void controls.start({
                        scale: 1
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    animate: controls,
                    style: {
                        rotate: rotation
                    },
                    className: "relative h-64 w-64 rounded-full bg-gradient-to-br from-white/35 via-transparent to-transparent backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 rounded-full bg-gradient-to-br ${colors.gradient}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-4 rounded-full border border-white/20"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                            style: {
                                x: smoothX,
                                y: smoothY
                            },
                            className: "absolute inset-0 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-[18%] rounded-full bg-white/10 blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-[25%] rounded-full border border-white/15"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-1/2 top-1/2 h-12 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-1/2 top-[38%] h-8 w-32 -translate-x-1/2 rounded-full bg-white/35 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex h-full items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-28 w-28 rounded-full bg-gradient-to-b from-white/70 to-transparent blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute h-20 w-20 rounded-full bg-gradient-to-b from-white/80 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2",
                                    children: eyeElements
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full border border-white/5 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: t('hero.orb.label')
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(MastermindOrb, "p/GPvJ+o7/oN4jlhgplxICwzJrc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = MastermindOrb;
var _c;
__turbopack_context__.k.register(_c, "MastermindOrb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SentinelEye",
    ()=>SentinelEye
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/providers/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/state/language-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$os$2f$mastermind$2d$orb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/components/os/mastermind-orb.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const PARTICLE_COUNT = 120;
function SentinelEye() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const parallaxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const parallaxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(parallaxX, {
        stiffness: 80,
        damping: 20
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(parallaxY, {
        stiffness: 80,
        damping: 20
    });
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])({
        "SentinelEye.useLanguageStore[language]": (state)=>state.currentLanguage
    }["SentinelEye.useLanguageStore[language]"]);
    const isRTL = language === 'fa';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SentinelEye.useEffect": ()=>{
            const initialParticles = Array.from({
                length: PARTICLE_COUNT
            }).map({
                "SentinelEye.useEffect.initialParticles": (_, index)=>({
                        id: index,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 2 + 0.5,
                        opacity: Math.random() * 0.4 + 0.1,
                        driftX: (Math.random() - 0.5) * 0.3,
                        driftY: (Math.random() - 0.5) * 0.3
                    })
            }["SentinelEye.useEffect.initialParticles"]);
            setParticles(initialParticles);
        }
    }["SentinelEye.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SentinelEye.useEffect": ()=>{
            let frame;
            const animate = {
                "SentinelEye.useEffect.animate": ()=>{
                    setParticles({
                        "SentinelEye.useEffect.animate": (prev)=>prev.map({
                                "SentinelEye.useEffect.animate": (particle)=>({
                                        ...particle,
                                        x: (particle.x + particle.driftX + 100) % 100,
                                        y: (particle.y + particle.driftY + 100) % 100,
                                        opacity: 0.1 + Math.abs(Math.sin((particle.x + particle.y + Date.now() / 1000) / 14)) * 0.25
                                    })
                            }["SentinelEye.useEffect.animate"])
                    }["SentinelEye.useEffect.animate"]);
                    frame = requestAnimationFrame(animate);
                }
            }["SentinelEye.useEffect.animate"];
            frame = requestAnimationFrame(animate);
            return ({
                "SentinelEye.useEffect": ()=>cancelAnimationFrame(frame)
            })["SentinelEye.useEffect"];
        }
    }["SentinelEye.useEffect"], []);
    const handleMouseMove = (event)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        parallaxX.set(x / rect.width * 20);
        parallaxY.set(y / rect.height * 20);
    };
    const handleMouseLeave = ()=>{
        parallaxX.set(0);
        parallaxY.set(0);
    };
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SentinelEye.useMemo[metrics]": ()=>[
                {
                    label: t('hero.metrics.load'),
                    value: '62%'
                },
                {
                    label: t('hero.metrics.uptime'),
                    value: '99.7%'
                },
                {
                    label: t('hero.metrics.sync'),
                    value: '04:12 UTC'
                },
                {
                    label: t('hero.metrics.operator'),
                    value: t('hero.metrics.operatorValue')
                }
            ]
    }["SentinelEye.useMemo[metrics]"], [
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
        ref: containerRef,
        style: {
            x: smoothX,
            y: smoothY
        },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8 text-center shadow-glass",
        dir: isRTL ? 'rtl' : 'ltr',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_55%)]"
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]"
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            opacity: particle.opacity
                        },
                        className: "absolute rounded-full bg-cyan-100"
                    }, particle.id, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                children: t('hero.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-semibold text-white md:text-5xl",
                                children: t('hero.title')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-3xl text-white/70",
                                children: t('hero.description')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$os$2f$mastermind$2d$orb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MastermindOrb"], {}, void 0, false, {
                            fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mx-auto grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4 ${isRTL ? 'text-right' : 'text-left'}`,
                        children: metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.3em] text-white/50",
                                        children: metric.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-2xl font-semibold text-white",
                                        children: metric.value
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, metric.label, true, {
                                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/seylane-vip/seylane-dashboard/components/os/sentinel-eye.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(SentinelEye, "T1ZPI+q+Uth0EqNxym+sYjLZhI0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$components$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$state$2f$language$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = SentinelEye;
var _c;
__turbopack_context__.k.register(_c, "SentinelEye");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_seylane-vip_seylane-dashboard_a13cd291._.js.map