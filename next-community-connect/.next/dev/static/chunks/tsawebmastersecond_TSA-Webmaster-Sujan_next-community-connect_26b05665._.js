(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EtherealShadow",
    ()=>EtherealShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}
const useInstanceId = ()=>{
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `etherealshadow-${cleanId}`;
    return instanceId;
};
_s(useInstanceId, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
function EtherealShadow({ sizing = 'fill', color = 'rgba(45, 74, 40, 1)', animation, noise, style, className, children }) {
    _s1();
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hueRotateMotionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(180);
    const hueRotateAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EtherealShadow.useEffect": ()=>{
            if (feColorMatrixRef.current && animationEnabled) {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
                hueRotateMotionValue.set(0);
                hueRotateAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(hueRotateMotionValue, 360, {
                    duration: animationDuration / 25,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    ease: "linear",
                    delay: 0,
                    onUpdate: {
                        "EtherealShadow.useEffect": (value)=>{
                            if (feColorMatrixRef.current) {
                                feColorMatrixRef.current.setAttribute("values", String(value));
                            }
                        }
                    }["EtherealShadow.useEffect"]
                });
                return ({
                    "EtherealShadow.useEffect": ()=>{
                        if (hueRotateAnimation.current) {
                            hueRotateAnimation.current.stop();
                        }
                    }
                })["EtherealShadow.useEffect"];
            }
        }
    }["EtherealShadow.useEffect"], [
        animationEnabled,
        animationDuration,
        hueRotateMotionValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: "100%",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none"
                },
                children: [
                    animationEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        style: {
                            position: "absolute"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: id,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                        result: "undulation",
                                        numOctaves: "2",
                                        baseFrequency: `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`,
                                        seed: "0",
                                        type: "turbulence"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                        lineNumber: 116,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                        ref: feColorMatrixRef,
                                        in: "undulation",
                                        type: "hueRotate",
                                        values: "180"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                        lineNumber: 123,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                        in: "dist",
                                        result: "circulation",
                                        type: "matrix",
                                        values: "4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                        in: "SourceGraphic",
                                        in2: "circulation",
                                        scale: displacementScale,
                                        result: "dist"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                        in: "dist",
                                        in2: "undulation",
                                        scale: displacementScale,
                                        result: "output"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                                lineNumber: 115,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                            lineNumber: 114,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: color,
                            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                            maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            width: "100%",
                            height: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 10,
                    width: "100%",
                    padding: "0 20px"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this),
            noise && noise.opacity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                    backgroundSize: noise.scale * 200,
                    backgroundRepeat: "repeat",
                    opacity: noise.opacity / 2
                }
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
                lineNumber: 180,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
_s1(EtherealShadow, "m1skgjVRtASffuNdxXljjHdkeFo=", false, function() {
    return [
        useInstanceId,
        __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = EtherealShadow;
var _c;
__turbopack_context__.k.register(_c, "EtherealShadow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EtherealHero",
    ()=>EtherealHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-shadow.tsx [app-client] (ecmascript)");
'use client';
;
;
function EtherealHero({ title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-deep via-green-mid to-green-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherealShadow"], {
                    color: "rgba(45, 74, 40, 0.8)",
                    animation: {
                        scale: 60,
                        speed: 50
                    },
                    noise: {
                        opacity: 0.8,
                        scale: 1
                    },
                    sizing: "fill",
                    className: "h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(145,176,138,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(45,74,40,0.6)_0%,transparent_50%)]"
                }, void 0, false, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
                children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-space text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4",
                            style: {
                                letterSpacing: '-2px'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-outfit text-lg sm:text-xl text-white/75 max-w-2xl mx-auto",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] uppercase tracking-[1.5px]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = EtherealHero;
var _c;
__turbopack_context__.k.register(_c, "EtherealHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const events = [
    {
        id: 'cleanup',
        title: 'Community Cleanup Drive',
        date: 'November 10, 2025',
        time: '10:00 AM — 1:00 PM',
        location: 'Bothell Landing Park, South Entrance',
        audience: 'All ages, families welcome',
        category: 'volunteer',
        description: "Join us for a community-wide cleanup event. We'll provide gloves, bags, and light refreshments. Meet at the south entrance of Bothell Landing Park.",
        day: 10,
        month: 'Nov'
    },
    {
        id: 'stem',
        title: 'STEM Mentorship Workshop',
        date: 'November 22, 2025',
        time: '4:00 PM — 6:30 PM',
        location: 'Bothell Regional Library, Room 2B',
        audience: 'Students ages 12 and up',
        category: 'education',
        description: 'A workshop for students interested in STEM careers, featuring guest speakers from local universities and hands-on breakout sessions.',
        day: 22,
        month: 'Nov'
    },
    {
        id: 'food',
        title: 'Holiday Food Drive',
        date: 'December 5, 2025',
        time: '9:00 AM — 4:00 PM',
        location: 'Bothell Community Center, Main Hall',
        audience: 'All community members',
        category: 'donation',
        description: 'Help us collect non-perishable food items for families in need this holiday season. Suggested donations: canned vegetables, rice, pasta.',
        day: 5,
        month: 'Dec'
    },
    {
        id: 'clothing',
        title: 'Winter Clothing Donation',
        date: 'December 19, 2025',
        time: '10:00 AM — 3:00 PM',
        location: 'Bothell City Hall, Front Lobby',
        audience: 'All ages',
        category: 'donation',
        description: 'Donate warm coats, hats, gloves, scarves, and blankets. All items will be checked for quality and distributed to local shelters.',
        day: 19,
        month: 'Dec'
    }
];
const locations = [
    {
        name: 'Bothell Landing Park',
        address: 'South Entrance\nNov 10 — Cleanup Drive',
        icon: '🌳'
    },
    {
        name: 'Bothell Regional Library',
        address: 'Room 2B, Main Branch\nNov 22 — STEM Workshop',
        icon: '📚'
    },
    {
        name: 'Bothell Community Center',
        address: 'Main Hall\nDec 5 — Food Drive',
        icon: '🏢'
    },
    {
        name: 'Bothell City Hall',
        address: 'Front Lobby\nDec 19 — Clothing Drive',
        icon: '🏛️'
    }
];
const categoryColors = {
    volunteer: 'bg-gradient-to-r from-green-mid to-green-pale',
    education: 'bg-gradient-to-r from-blue-600 to-blue-400',
    donation: 'bg-gradient-to-r from-orange-600 to-orange-400'
};
function EventsPage() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredEvents = activeFilter === 'all' ? events : events.filter((e)=>e.category === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherealHero"], {
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
                            duration: 0.7
                        },
                        className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-green-pale animate-pulse-slow"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-white/90 tracking-widest uppercase",
                                children: "Always Something Happening"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.1
                        },
                        className: "font-space text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4",
                        style: {
                            letterSpacing: '-2px'
                        },
                        children: "Upcoming Events"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
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
                            duration: 0.7,
                            delay: 0.2
                        },
                        className: "font-outfit text-base sm:text-lg text-white/75 max-w-md mx-auto mb-9",
                        children: "Stay connected with what's happening in our community. From cleanups to workshops — there's a place for everyone."
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
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
                            duration: 0.7,
                            delay: 0.3
                        },
                        className: "flex gap-2 justify-center flex-wrap",
                        children: [
                            'all',
                            'volunteer',
                            'education',
                            'donation'
                        ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFilter(filter),
                                className: `px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter ? 'bg-gradient-to-r from-accent-gold to-accent-gold-light text-[#1a2718]' : 'bg-white/10 border border-white/20 text-white/85 hover:bg-white hover:text-green-mid'}`,
                                children: filter === 'all' ? 'All Events' : filter.charAt(0).toUpperCase() + filter.slice(1)
                            }, filter, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-eyebrow",
                                    children: "What's Coming Up"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-heading",
                                    children: "Mark Your Calendar"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-subtext",
                                    children: "All events are free and open to the public unless otherwise noted. Click any event to see full details and get directions."
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "bg-gradient-to-br from-green-deep to-green-mid rounded-[var(--radius-lg)] overflow-hidden mb-10 grid lg:grid-cols-2 border border-green-pale/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-64 lg:h-auto bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center text-[100px] relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🍂"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-transparent to-green-deep/60"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 lg:p-10 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1.5 bg-green-pale/20 border border-green-pale/30 rounded-full px-3 py-1 text-xs font-bold text-green-pale uppercase tracking-wider w-fit mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "⭐"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                " Next Up"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-space text-2xl lg:text-3xl font-bold text-white mb-3",
                                            children: "Community Cleanup Drive"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-outfit text-white/70 mb-6",
                                            children: "Join neighbors, volunteers, and local organizations for a city-wide cleanup. We'll provide all supplies — just bring your energy and enthusiasm!"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 mb-6 text-sm text-white/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: "📅 November 10, 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: "🕐 10:00 AM — 1:00 PM"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: "📍 Bothell Landing Park"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: "👥 All Ages Welcome"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedEvent(events[0]),
                                            className: "btn-primary px-6 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center gap-2 w-fit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "View Details & Directions"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-7",
                            children: filteredEvents.map((event, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    onClick: ()=>setSelectedEvent(event),
                                    className: "bg-white rounded-[var(--radius-lg)] border border-green-wash overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-card border-green-light card-glow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 bg-gradient-to-br ${categoryColors[event.category]} flex items-center justify-center text-[72px]`,
                                                    children: [
                                                        event.category === 'volunteer' && '🍂',
                                                        event.category === 'education' && '💻',
                                                        event.category === 'donation' && '🍽️'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4 bg-white rounded-[10px] p-2 text-center shadow-md min-w-[56px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-space font-bold text-xl text-green-mid leading-none",
                                                            children: event.day
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-outfit text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                                                            children: event.month
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4 bg-green-mid/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                                                    children: event.category
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-space font-bold text-xl text-[var(--text-dark)] mb-2.5",
                                                    children: event.title
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-outfit text-sm text-[var(--text-muted)] leading-relaxed mb-5",
                                                    children: event.description
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2 mb-5 text-sm text-[var(--text-body)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-4 text-green-light",
                                                                    children: "🕐"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                event.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-4 text-green-light",
                                                                    children: "📍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                event.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-4 text-green-light",
                                                                    children: "✉️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " events@communityconnect.org"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-4 border-t border-green-wash",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-2 text-sm text-[var(--text-muted)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-pale",
                                                                    children: "👶"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                event.audience
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1 text-sm font-semibold text-green-mid",
                                                            children: [
                                                                "Details ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, event.id, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-[var(--section-bg)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-eyebrow",
                                    children: "Find Us"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-heading",
                                    children: "Event Locations"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-subtext mx-auto",
                                    children: "All events take place at accessible community spaces. Click a location below to get directions."
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "rounded-[var(--radius-lg)] overflow-hidden border border-green-wash shadow-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[420px] bg-gradient-to-br from-green-mist to-green-wash flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-6xl mb-4 block",
                                                children: "🗺️"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-outfit text-[var(--text-muted)]",
                                                children: "Google Maps integration"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-wash border-t border-green-wash",
                                    children: locations.map((loc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 hover:bg-green-mist cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-full bg-gradient-to-br from-green-mid to-green-pale flex items-center justify-center text-white mb-2.5 text-lg",
                                                    children: loc.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-space font-semibold text-sm text-[var(--text-dark)] mb-1",
                                                    children: loc.name
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-outfit text-xs text-[var(--text-muted)] whitespace-pre-line",
                                                    children: loc.address
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-[rgba(15,26,14,0.7)] backdrop-blur-sm z-50 flex items-center justify-center p-5",
                onClick: ()=>setSelectedEvent(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "bg-white rounded-[var(--radius-lg)] w-full max-w-lg max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-52 relative ${categoryColors[selectedEvent.category]} flex items-center justify-center text-[80px]`,
                            children: [
                                selectedEvent.category === 'volunteer' && '🍂',
                                selectedEvent.category === 'education' && '💻',
                                selectedEvent.category === 'donation' && '🍽️',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedEvent(null),
                                    className: "absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[var(--text-dark)] hover:bg-white transition-colors",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-space text-2xl font-bold text-[var(--text-dark)] mb-4",
                                    children: selectedEvent.title
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-outfit text-[var(--text-muted)] mb-6",
                                    children: selectedEvent.description
                                }, void 0, false, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-light",
                                                    children: "📅"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-outfit text-sm font-semibold text-[var(--text-dark)]",
                                                            children: selectedEvent.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-light",
                                                    children: "🕐"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                                                            children: "Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-outfit text-sm font-semibold text-[var(--text-dark)]",
                                                            children: selectedEvent.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-light",
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-outfit text-sm font-semibold text-[var(--text-dark)]",
                                                            children: selectedEvent.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-light",
                                                    children: "👥"
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                                                            children: "Who"
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-outfit text-sm font-semibold text-[var(--text-dark)]",
                                                            children: selectedEvent.audience
                                                        }, void 0, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex-1 bg-gradient-to-r from-green-mid to-green-pale text-white px-5 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all",
                                            children: "📍 Get Directions"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white border border-green-wash text-green-mid px-5 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center justify-center gap-2 hover:bg-green-mist transition-colors",
                                            children: "✕ Close"
                                        }, void 0, false, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                    lineNumber: 291,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/events/page.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(EventsPage, "7PZyGQ7f907XgipcBq/BrFObz6s=");
_c = EventsPage;
var _c;
__turbopack_context__.k.register(_c, "EventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tsawebmastersecond_TSA-Webmaster-Sujan_next-community-connect_26b05665._.js.map