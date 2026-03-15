(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero({ badge = 'Serving Our Community Since 2020', staticTitle, rotatingTitles = [
    "amazing",
    "wonderful",
    "strong",
    "united",
    "connected"
], subtitle = 'Find non-profits, support services, events, and volunteers — all in one place, built for every resident.', primaryHref = '/resources', primaryText = 'Explore Resources', secondaryHref = '/events', secondaryText = 'Upcoming Events', stats = [
    {
        value: '500+',
        label: 'Resources Listed'
    },
    {
        value: '1,200+',
        label: 'Volunteers'
    },
    {
        value: '48',
        label: 'Partner Orgs'
    }
] }) {
    _s();
    const [titleNumber, setTitleNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timeoutId = setTimeout({
                "Hero.useEffect.timeoutId": ()=>{
                    if (titleNumber === rotatingTitles.length - 1) {
                        setTitleNumber(0);
                    } else {
                        setTitleNumber(titleNumber + 1);
                    }
                }
            }["Hero.useEffect.timeoutId"], 2500);
            return ({
                "Hero.useEffect": ()=>clearTimeout(timeoutId)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        titleNumber,
        rotatingTitles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center relative overflow-hidden",
        style: {
            backgroundImage: "url('/img/avess-berge-ua2IF9HNaXs-unsplash.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(145,176,138,0.6)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(45,74,40,0.8)_0%,transparent_50%),radial-gradient(ellipse_at_60%_10%,rgba(217,229,212,0.3)_0%,transparent_40%)]"
                }, void 0, false, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-green-pale/25 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-green-mid/40 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-[20%] w-[200px] h-[200px] rounded-full bg-green-mist/20 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto relative z-10 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 py-20 lg:py-40 items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-green-pale animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-white/90 tracking-widest uppercase",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 flex-col",
                            children: [
                                staticTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter text-center font-bold font-space text-white",
                                    children: staticTitle
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter text-center font-bold font-space text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Your Community is"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2",
                                            children: [
                                                " ",
                                                rotatingTitles.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "absolute font-bold text-green-pale",
                                                        initial: {
                                                            opacity: 0,
                                                            y: "-100%"
                                                        },
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 50,
                                                            damping: 20
                                                        },
                                                        animate: titleNumber === index ? {
                                                            y: 0,
                                                            opacity: 1
                                                        } : {
                                                            y: titleNumber > index ? -150 : 150,
                                                            opacity: 0
                                                        },
                                                        children: title
                                                    }, index, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    className: "text-lg md:text-xl leading-relaxed tracking-tight text-white/75 max-w-2xl text-center font-outfit",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.4
                            },
                            className: "flex flex-row gap-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: primaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "gap-4 bg-white text-green-mid hover:bg-white/90",
                                        children: [
                                            primaryText,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                                lineNumber: 130,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: secondaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "gap-4",
                                        variant: "outline",
                                        style: {
                                            background: "rgba(255,255,255,0.1)",
                                            borderColor: "rgba(255,255,255,0.3)",
                                            color: "white"
                                        },
                                        children: [
                                            secondaryText,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.6
                            },
                            className: "flex justify-center divide-x divide-white/15 mt-12",
                            children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center px-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-space text-3xl font-bold text-white block",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-outfit text-xs font-medium text-white/60 uppercase tracking-wider",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1
                },
                className: "absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full border border-white/25 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-3 h-3 animate-bounce",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] uppercase tracking-[1.5px]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Hero, "3gKstk2q4RWyGiwsMH3/865dYtY=");
_c = Hero;
;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroDemo",
    ()=>HeroDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero.tsx [app-client] (ecmascript)");
"use client";
;
;
function HeroDemo(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = HeroDemo;
;
var _c;
__turbopack_context__.k.register(_c, "HeroDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/animated-hero-demo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const categories = [
    'Education',
    'Health & Wellness',
    'Career & Jobs',
    'Volunteering',
    'Community Projects',
    'Food & Nutrition',
    'Housing & Shelter',
    'Legal Services',
    'Mental Health',
    'Youth Programs',
    'Senior Services',
    'Other'
];
function SubmitPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        organization: '',
        email: '',
        phone: '',
        category: '',
        website: '',
        description: '',
        address: '',
        hours: ''
    });
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // Simulate form submission
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    if (isSubmitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroDemo"], {
                staticTitle: "Thank You!",
                subtitle: "Your resource submission has been received. Our team will review it within 2-3 business days and add it to the directory.",
                primaryHref: "/",
                primaryText: "Return Home",
                secondaryHref: "/resources",
                secondaryText: "Browse Resources"
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroDemo"], {
                badge: "Community Driven",
                staticTitle: "Submit a Resource",
                subtitle: "Know of a program that helped you or someone you know? Share it with our community so others can benefit too."
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-[var(--section-bg)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "bg-white rounded-[var(--radius-lg)] border border-green-wash shadow-card p-8 md:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-4 mb-8 flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-5 h-5 text-green-mid flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-outfit text-sm text-[var(--text-body)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[var(--text-dark)]",
                                                children: "All submissions are reviewed"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            " by our team within 2-3 business days to ensure quality and accuracy before being added to the directory."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                children: [
                                                    "Resource Name ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: handleChange,
                                                placeholder: "e.g., Bothell Food Bank",
                                                className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "organization",
                                                className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                children: "Organization / Provider Name"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "organization",
                                                name: "organization",
                                                value: formData.organization,
                                                onChange: handleChange,
                                                placeholder: "e.g., Bothell Community Services",
                                                className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "category",
                                                className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                children: [
                                                    "Category ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "category",
                                                name: "category",
                                                required: true,
                                                value: formData.category,
                                                onChange: handleChange,
                                                className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat,
                                                            children: cat
                                                        }, cat, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "description",
                                                className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                children: [
                                                    "Description ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "description",
                                                name: "description",
                                                required: true,
                                                rows: 4,
                                                value: formData.description,
                                                onChange: handleChange,
                                                placeholder: "Describe the resource, who it's for, and what services it provides...",
                                                className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                        children: [
                                                            "Email ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                name: "email",
                                                                required: true,
                                                                value: formData.email,
                                                                onChange: handleChange,
                                                                placeholder: "contact@organization.org",
                                                                className: "w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phone",
                                                        className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                id: "phone",
                                                                name: "phone",
                                                                value: formData.phone,
                                                                onChange: handleChange,
                                                                placeholder: "(123) 456-7890",
                                                                className: "w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "address",
                                                className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "absolute left-4 top-4 w-4 h-4 text-green-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "address",
                                                        name: "address",
                                                        value: formData.address,
                                                        onChange: handleChange,
                                                        placeholder: "123 Main St, Bothell, WA 98011",
                                                        className: "w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "hours",
                                                        className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                        children: "Hours of Operation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "hours",
                                                        name: "hours",
                                                        value: formData.hours,
                                                        onChange: handleChange,
                                                        placeholder: "Mon-Fri 9am-5pm",
                                                        className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "website",
                                                        className: "block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2",
                                                        children: "Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        id: "website",
                                                        name: "website",
                                                        value: formData.website,
                                                        onChange: handleChange,
                                                        placeholder: "https://organization.org",
                                                        className: "w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isLoading,
                                        className: "w-full bg-gradient-to-r from-green-mid to-green-pale text-white font-outfit font-semibold px-8 py-4 rounded-[var(--radius-md)] flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-green-mid/30 disabled:opacity-70 disabled:cursor-not-allowed",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this),
                                                "Submitting..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this),
                                                "Submit Resource"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SubmitPage, "2+jwU3gpo7qIPZ73lXEG+6lJLiQ=");
_c = SubmitPage;
var _c;
__turbopack_context__.k.register(_c, "SubmitPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tsawebmastersecond_TSA-Webmaster-Sujan_next-community-connect_78196d42._.js.map