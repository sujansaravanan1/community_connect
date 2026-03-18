module.exports = [
"[project]/next-community-connect/components/ui/animated-hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/lucide-react/dist/esm/icons/move-right.js [app-ssr] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
], subtitle = 'Find nonprofits, support services, events, and volunteers. All in one place, built for every resident.', primaryHref, primaryText, secondaryHref, secondaryText, stats = [
    {
        value: '30+',
        label: 'Resources Listed'
    },
    {
        value: '150+',
        label: 'Volunteers'
    },
    {
        value: '10',
        label: 'Partner Orgs'
    }
], backgroundImage }) {
    const [titleNumber, setTitleNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeoutId = setTimeout(()=>{
            if (titleNumber === rotatingTitles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2500);
        return ()=>clearTimeout(timeoutId);
    }, [
        titleNumber,
        rotatingTitles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center relative overflow-hidden",
        style: {
            backgroundColor: '#022747',
            backgroundImage: `url('${backgroundImage ?? '/img/avess-berge-ua2IF9HNaXs-unsplash.png'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        children: [
            backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-sky-950/60"
            }, void 0, false, {
                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 63,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(36,153,214,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(4,64,105,0.5)_0%,transparent_50%),radial-gradient(ellipse_at_60%_10%,rgba(198,235,255,0.2)_0%,transparent_40%)]"
                }, void 0, false, {
                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-sky-400/15 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-sky-600/25 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-[20%] w-[200px] h-[200px] rounded-full bg-sky-200/10 blur-[60px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto relative z-10 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 py-20 lg:py-40 items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "inline-flex items-center gap-2 bg-sky-800/80 border border-sky-400/50 rounded-full px-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-white/90 tracking-widest uppercase",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 flex-col w-full items-center",
                            children: [
                                staticTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl max-w-4xl w-full tracking-tighter text-center font-bold font-space text-white mx-auto",
                                    dangerouslySetInnerHTML: {
                                        __html: staticTitle
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl max-w-4xl w-full tracking-tighter text-center font-bold font-space text-white mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Your Community is"
                                        }, void 0, false, {
                                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2",
                                            children: [
                                                " ",
                                                rotatingTitles.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "absolute font-bold text-sky-200",
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
                                                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                    className: "text-lg md:text-xl leading-relaxed tracking-tight text-white/75 max-w-2xl w-full text-center font-outfit mx-auto",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        (primaryText || secondaryText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                primaryText && primaryHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: primaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-syne font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg",
                                        style: {
                                            backgroundColor: 'rgba(255,255,255,0.15)',
                                            color: 'white',
                                            border: '2px solid rgba(255,255,255,0.35)'
                                        },
                                        children: [
                                            primaryText,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                secondaryText && secondaryHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: secondaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-syne font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg",
                                        style: {
                                            backgroundColor: 'rgba(255,255,255,0.15)',
                                            color: 'white',
                                            border: '2px solid rgba(255,255,255,0.35)'
                                        },
                                        children: [
                                            secondaryText,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                                lineNumber: 151,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center px-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-space text-3xl font-bold text-white block",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-outfit text-xs font-medium text-white/85 uppercase tracking-wider",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full border border-white/25 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-3 h-3 animate-bounce",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] uppercase tracking-[1.5px]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-community-connect/components/ui/animated-hero.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/next-community-connect/components/ui/animated-hero-demo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroDemo",
    ()=>HeroDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/components/ui/animated-hero.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function HeroDemo(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/next-community-connect/components/ui/animated-hero-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-community-connect/components/ui/animated-hero-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/next-community-connect/app/copyright/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/components/ui/animated-hero-demo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const checklistItems = [
    'All text content was written originally by team members',
    'Google Fonts (Space Grotesk, DM Sans, Outfit, Syne) - free for educational use under Open Font License',
    'Lucide Icons - MIT License, free for all uses',
    'Framer Motion - MIT License, free for all uses',
    'Next.js / React / TypeScript / Tailwind CSS - MIT License, free for all uses',
    'Hero background images sourced from Unsplash (free license) and team-provided photos',
    'All community organization names and contact data reference real Bothell-area nonprofits (publicly available)',
    'No copyrighted logos, trademarks, or branded content are reproduced',
    'No images from third-party sources are used without license verification',
    'All event data is fictional, created for competition demonstration purposes only'
];
const sources = [
    {
        resource: 'Next.js 16',
        type: 'Framework',
        license: 'MIT',
        url: 'nextjs.org'
    },
    {
        resource: 'React 18',
        type: 'UI Library',
        license: 'MIT',
        url: 'react.dev'
    },
    {
        resource: 'TypeScript',
        type: 'Language',
        license: 'Apache 2.0',
        url: 'typescriptlang.org'
    },
    {
        resource: 'Tailwind CSS v3',
        type: 'Styling',
        license: 'MIT',
        url: 'tailwindcss.com'
    },
    {
        resource: 'Framer Motion',
        type: 'Animation',
        license: 'MIT',
        url: 'framer.com/motion'
    },
    {
        resource: 'Lucide Icons',
        type: 'Icons',
        license: 'MIT',
        url: 'lucide.dev'
    },
    {
        resource: 'Space Grotesk (Google Fonts)',
        type: 'Typography',
        license: 'Open Font License',
        url: 'fonts.google.com'
    },
    {
        resource: 'DM Sans (Google Fonts)',
        type: 'Typography',
        license: 'Open Font License',
        url: 'fonts.google.com'
    },
    {
        resource: 'Outfit (Google Fonts)',
        type: 'Typography',
        license: 'Open Font License',
        url: 'fonts.google.com'
    },
    {
        resource: 'Syne (Google Fonts)',
        type: 'Typography',
        license: 'Open Font License',
        url: 'fonts.google.com'
    },
    {
        resource: 'Unsplash (hero background images)',
        type: 'Photography',
        license: 'Unsplash License (free)',
        url: 'unsplash.com'
    },
    {
        resource: 'Bothell, WA geographic and org data',
        type: 'Reference',
        license: 'Public domain',
        url: 'bothellwa.gov'
    },
    {
        resource: 'KCLS (King County Library System)',
        type: 'Reference',
        license: 'Public domain',
        url: 'kcls.org'
    },
    {
        resource: 'Northshore School District',
        type: 'Reference',
        license: 'Public domain',
        url: 'nsd.org'
    },
    {
        resource: 'EvergreenHealth Medical Center',
        type: 'Reference',
        license: 'Public domain',
        url: 'evergreenhealth.com'
    },
    {
        resource: 'Hopelink',
        type: 'Reference',
        license: 'Public domain',
        url: 'hope-link.org'
    },
    {
        resource: 'Northshore Volunteer Services',
        type: 'Reference',
        license: 'Public domain',
        url: 'nvskc.org'
    },
    {
        resource: 'YMCA Northshore',
        type: 'Reference',
        license: 'Public domain',
        url: 'seattleymca.org'
    },
    {
        resource: 'Crisis Connections Washington',
        type: 'Reference',
        license: 'Public domain',
        url: 'crisisconnections.org'
    },
    {
        resource: '211 King County',
        type: 'Reference',
        license: 'Public domain',
        url: '211kingcounty.org'
    },
    {
        resource: 'Sound Generations',
        type: 'Reference',
        license: 'Public domain',
        url: 'soundgenerations.org'
    },
    {
        resource: 'Imagine Housing',
        type: 'Reference',
        license: 'Public domain',
        url: 'imaginehousing.org'
    },
    {
        resource: 'Northshore Fire Department',
        type: 'Reference',
        license: 'Public domain',
        url: 'northshorefire.com'
    }
];
const H = '#022747';
const B = '#044069';
const MUTED = '#085D8A';
const LINK = '#2499D6';
const BG = '#F0F9FF';
const CARD = '#F0F9FF';
const INNER = '#ffffff';
const ROW_ALT = '#EBF7FF';
const BORDER = '#BFDBFE';
const h2Style = {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(22px, 3vw, 32px)',
    fontWeight: 700,
    color: H,
    letterSpacing: '0.02em',
    lineHeight: 1.15,
    marginBottom: '16px'
};
const hdStyle = {
    fontFamily: 'var(--font-syne)',
    fontWeight: 700,
    fontSize: '13px',
    color: H
};
const bodyStyle = {
    fontFamily: 'var(--font-space)',
    fontSize: '13px',
    color: B,
    lineHeight: 1.7
};
function DocumentationPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$animated$2d$hero$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroDemo"], {
                badge: "TSA Webmaster - Required Documentation",
                staticTitle: "Copyright & References",
                subtitle: "Student copyright checklist, work log, and all sources cited for Community Connect. * Note: This page does not have dark mode functionality so as to maintain clarity",
                backgroundImage: "/img/page-2.jpg"
            }, void 0, false, {
                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24",
                style: {
                    backgroundColor: BG
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 space-y-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Project Information"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border p-6",
                                    style: {
                                        backgroundColor: CARD,
                                        borderColor: BORDER
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-5",
                                        children: [
                                            {
                                                label: 'Project Name',
                                                value: 'Community Connect'
                                            },
                                            {
                                                label: 'Competition',
                                                value: 'TSA Webmaster - State Conference 2026'
                                            },
                                            {
                                                label: 'Technology Stack',
                                                value: 'Next.js, React, TypeScript, Tailwind CSS, Framer Motion'
                                            },
                                            {
                                                label: 'Location',
                                                value: 'Bothell, Washington'
                                            },
                                            {
                                                label: 'Chapter',
                                                value: 'North Creek High School - Chapter 1557-2'
                                            },
                                            {
                                                label: 'Team Size',
                                                value: '6 members'
                                            }
                                        ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'var(--font-space)',
                                                            fontSize: '11px',
                                                            color: MUTED,
                                                            marginBottom: '2px',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em'
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: hdStyle,
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Student Copyright Checklist"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border",
                                    style: {
                                        backgroundColor: CARD,
                                        borderColor: BORDER
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-sky-600 px-8 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'var(--font-syne)',
                                                        fontWeight: 700,
                                                        fontSize: '18px',
                                                        color: 'white'
                                                    },
                                                    children: "TSA Webmaster - Student Copyright Verification"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'var(--font-space)',
                                                        fontSize: '13px',
                                                        color: 'rgba(255,255,255,0.8)',
                                                        marginTop: '4px'
                                                    },
                                                    children: "Chapter 1557-2 - North Creek High School - State Conference 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-8 py-6",
                                            style: {
                                                backgroundColor: CARD
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        ...bodyStyle,
                                                        marginBottom: '20px'
                                                    },
                                                    children: "We certify that all materials used in Community Connect are either original works created by the team, properly licensed for educational/competition use, or in the public domain. Each item below has been verified:"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 mb-8",
                                                    children: checklistItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-5 h-5 rounded-md bg-sky-500 border-2 border-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "12",
                                                                        height: "10",
                                                                        viewBox: "0 0 12 10",
                                                                        fill: "none",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M1 5L4.5 8.5L11 1",
                                                                            stroke: "white",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: bodyStyle,
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t pt-6",
                                                    style: {
                                                        borderColor: BORDER
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            ...bodyStyle,
                                                            fontStyle: 'italic'
                                                        },
                                                        children: "Submitted electronically by all team members. North Creek High School Chapter 1557-2, State Conference 2026."
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Work Log"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border",
                                    style: {
                                        borderColor: BORDER
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "/TSA_Work_Log.pdf",
                                        title: "TSA Work Log",
                                        className: "w-full",
                                        style: {
                                            height: '860px',
                                            border: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/TSA_Work_Log.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            fontFamily: 'var(--font-space)',
                                            fontSize: '12px',
                                            color: LINK
                                        },
                                        children: "Open PDF in new tab"
                                    }, void 0, false, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Sources and Citations"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto rounded-2xl border",
                                    style: {
                                        borderColor: BORDER
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b",
                                                    style: {
                                                        backgroundColor: '#DBEAFE',
                                                        borderColor: BORDER
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-6 py-4",
                                                            style: hdStyle,
                                                            children: "Resource"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-6 py-4",
                                                            style: hdStyle,
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-6 py-4",
                                                            style: hdStyle,
                                                            children: "License"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-6 py-4",
                                                            style: hdStyle,
                                                            children: "URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: sources.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b last:border-0",
                                                        style: {
                                                            backgroundColor: i % 2 === 0 ? INNER : ROW_ALT,
                                                            borderColor: BORDER
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3",
                                                                style: {
                                                                    fontFamily: 'var(--font-space)',
                                                                    fontSize: '13px',
                                                                    color: B
                                                                },
                                                                children: row.resource
                                                            }, void 0, false, {
                                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3",
                                                                style: {
                                                                    fontFamily: 'var(--font-space)',
                                                                    fontSize: '12px',
                                                                    color: MUTED
                                                                },
                                                                children: row.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3",
                                                                style: {
                                                                    fontFamily: 'var(--font-space)',
                                                                    fontSize: '12px',
                                                                    color: MUTED
                                                                },
                                                                children: row.license
                                                            }, void 0, false, {
                                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3",
                                                                style: {
                                                                    fontFamily: 'var(--font-space)',
                                                                    fontSize: '12px',
                                                                    color: LINK
                                                                },
                                                                children: row.url
                                                            }, void 0, false, {
                                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Framework Statement"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border p-6",
                                    style: {
                                        backgroundColor: CARD,
                                        borderColor: BORDER
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: bodyStyle,
                                        children: [
                                            "This website was built entirely from scratch using ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: H
                                                },
                                                children: "Next.js 16"
                                            }, void 0, false, {
                                                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 68
                                            }, this),
                                            " with the App Router. No website templates or pre-built themes were used. All components, layouts, and UI elements were custom-coded by team members using React, TypeScript, and Tailwind CSS for styling, and Framer Motion for animations. The site is fully responsive and optimized for accessibility."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Accessibility Statement"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border p-6",
                                    style: {
                                        backgroundColor: CARD,
                                        borderColor: BORDER
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...bodyStyle,
                                                marginBottom: '16px'
                                            },
                                            children: "Community Connect is committed to ensuring digital accessibility for all users. A full Accessibility Settings panel is available via the gear icon in the navigation bar."
                                        }, void 0, false, {
                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid sm:grid-cols-2 gap-2",
                                            children: [
                                                'WCAG 2.1 Level AA compliant design',
                                                'Keyboard navigable interface',
                                                'Screen reader compatible markup',
                                                'Responsive design for all screen sizes',
                                                'High contrast mode',
                                                'Dark mode',
                                                'Adjustable font sizes (Small to X-Large)',
                                                'Color blind mode and grayscale filter',
                                                'Reduced motion mode',
                                                'Page zoom up to 200%'
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    style: bodyStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: LINK,
                                                                fontWeight: 700
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        item
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: h2Style,
                                    children: "Privacy and Terms"
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border p-6",
                                    style: {
                                        backgroundColor: CARD,
                                        borderColor: BORDER
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: bodyStyle,
                                        children: "This website was created for educational purposes as part of the TSA Webmaster competition. All events, donation causes, and submitted resource data are fictional and created for demonstration purposes only. Organization names and contact information reference publicly available data for real Bothell-area nonprofits. No actual user data is collected, stored, or processed."
                                    }, void 0, false, {
                                        fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-community-connect/app/copyright/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/next-community-connect/node_modules/lucide-react/dist/esm/icons/move-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoveRight
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MoveRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MoveRight", [
    [
        "path",
        {
            d: "M18 8L22 12L18 16",
            key: "1r0oui"
        }
    ],
    [
        "path",
        {
            d: "M2 12H22",
            key: "1m8cig"
        }
    ]
]);
;
 //# sourceMappingURL=move-right.js.map
}),
"[project]/next-community-connect/node_modules/lucide-react/dist/esm/icons/move-right.js [app-ssr] (ecmascript) <export default as MoveRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-community-connect/node_modules/lucide-react/dist/esm/icons/move-right.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=next-community-connect_fb5239a2._.js.map