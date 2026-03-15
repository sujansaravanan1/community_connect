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
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/ethereal-hero.tsx [app-client] (ecmascript)");
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$ethereal$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherealHero"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            duration: 0.5,
                            type: 'spring'
                        },
                        className: "w-24 h-24 rounded-full bg-green-pale/20 border-4 border-green-pale flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-12 h-12 text-green-pale"
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
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
                            delay: 0.2
                        },
                        className: "font-space text-4xl font-bold text-white mb-4",
                        children: "Thank You!"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
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
                            delay: 0.3
                        },
                        className: "font-outfit text-lg text-white/75 mb-8",
                        children: "Your resource submission has been received. Our team will review it within 2-3 business days and add it to the directory."
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 78,
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
                            delay: 0.4
                        },
                        className: "flex gap-4 justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "btn-primary px-6 py-3 rounded-xl font-outfit font-semibold",
                                children: "Return Home"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/resources",
                                className: "btn-outline px-6 py-3 rounded-xl font-outfit font-semibold",
                                children: "Browse Resources"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-deep via-green-mid to-green-light pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(145,176,138,0.3)_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(45,74,40,0.6)_0%,transparent_50%)]"
                        }, void 0, false, {
                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-80px] right-[10%] w-[300px] h-[300px] rounded-full bg-white/5 animate-orb-float",
                                style: {
                                    animationDuration: '20s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-40px] left-[8%] w-[180px] h-[180px] rounded-full bg-white/5 animate-orb-float",
                                style: {
                                    animationDuration: '15s',
                                    animationDelay: '-5s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center px-4 max-w-3xl mx-auto",
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
                                className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-green-pale animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-white/90 tracking-wider uppercase",
                                        children: "Community Driven"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
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
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                className: "font-space text-5xl md:text-6xl font-bold text-white leading-tight mb-4",
                                children: "Submit a Resource"
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
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
                                className: "font-outfit text-lg text-white/75",
                                children: "Know of a program that helped you or someone you know? Share it with our community so others can benefit too."
                            }, void 0, false, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 108,
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
                                        lineNumber: 161,
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
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            " by our team within 2-3 business days to ensure quality and accuracy before being added to the directory."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 160,
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
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 170,
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
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 169,
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
                                                lineNumber: 187,
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
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 186,
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
                                                        lineNumber: 204,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 203,
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
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat,
                                                            children: cat
                                                        }, cat, false, {
                                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 202,
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
                                                        lineNumber: 224,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 223,
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
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 222,
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
                                                                lineNumber: 242,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 245,
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
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 240,
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
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light"
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                                lineNumber: 263,
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
                                                                lineNumber: 264,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 239,
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
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "absolute left-4 top-4 w-4 h-4 text-green-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                        lineNumber: 283,
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
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 278,
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
                                                        lineNumber: 299,
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
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 298,
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
                                                        lineNumber: 313,
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
                                                        lineNumber: 316,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 297,
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
                                                    lineNumber: 336,
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
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this),
                                                "Submit Resource"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/submit/page.tsx",
                lineNumber: 151,
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
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckCircle
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CheckCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CheckCircle", [
    [
        "path",
        {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
            key: "g774vq"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
]);
;
 //# sourceMappingURL=check-circle.js.map
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript)");
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertCircle
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const AlertCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("AlertCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=alert-circle.js.map
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript)");
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Upload
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/errors.mjs [app-client] (ecmascript)");
;
function resolveElements(elements, scope, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        let root = document;
        if (scope) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(scope.current), "Scope provided, but no element detected.");
            root = scope.current;
        }
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = root.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else {
            elements = root.querySelectorAll(elements);
        }
    } else if (elements instanceof Element) {
        elements = [
            elements
        ];
    }
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/memo.mjs [app-client] (ecmascript)");
;
const supportsScrollTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>window.ScrollTimeline !== undefined);
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupPlaybackControls",
    ()=>GroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$supports$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs [app-client] (ecmascript)");
;
;
class GroupPlaybackControls {
    constructor(animations){
        this.animations = animations.filter(Boolean);
    }
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline) {
        const cancelAll = this.animations.map((animation)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$supports$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() && animation.attachTimeline) {
                animation.attachTimeline(timeline);
            } else {
                animation.pause();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                    animation.time = animation.duration * progress;
                }, timeline);
            }
        });
        return ()=>{
            cancelAll.forEach((cancelTimeline, i)=>{
                if (cancelTimeline) cancelTimeline();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    stop() {
        this.runAll("stop");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDOMKeyframes",
    ()=>isDOMKeyframes
]);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createVisualElement",
    ()=>createVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
;
;
;
;
function createVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) ? new __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"](options, {
        enableHardwareAcceleration: false
    }) : new __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"](options, {
        enableHardwareAcceleration: true
    });
    node.mount(element);
    __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(element, node);
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneratorEasing",
    ()=>createGeneratorEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/time-conversion.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100) {
    const generator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"])({
        keyframes: [
            0,
            scale
        ],
        ...options
    });
    const duration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
    return {
        type: "keyframes",
        ease: (progress)=>generator.next(duration * progress).value / scale,
        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration)
    };
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcNextTime",
    ()=>calcNextTime
]);
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/wrap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrap",
    ()=>wrap
]);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addKeyframes",
    ()=>addKeyframes,
    "eraseKeyframes",
    ()=>eraseKeyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$mix$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/mix.mjs [app-client] (ecmascript)");
;
;
;
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$mix$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(startTime, endTime, offset[i]),
            easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i)
        });
    }
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByTime",
    ()=>compareByTime
]);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else {
        return a.at - b.at;
    }
}
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnimationsFromSequence",
    ()=>createAnimationsFromSequence,
    "getValueTransition",
    ()=>getValueTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$resolve$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)");
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
const defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) {
            currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numElements = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(valueKeyframesAsList), type = "keyframes", ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numElements) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            if (numKeyframes <= 2 && type === "spring") {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...remainingTransition
                };
                if (duration !== undefined) {
                    springTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration);
                }
                const springEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(springTransition, absoluteDelta);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
            const startTime = currentTime + calculatedDelay;
            const targetTime = startTime + duration;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeyframes"])(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            /**
             * Find all the elements specified in the definition and parse value
             * keyframes from their timeline definitions.
             */ const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$resolve$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject, scope, elementCache);
            const numElements = elements.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let elementIndex = 0; elementIndex < numElements; elementIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes = keyframes;
                transition = transition;
                const element = elements[elementIndex];
                const subjectSequence = getSubjectSequence(element, sequences);
                for(const key in keyframes){
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), elementIndex, numElements);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {}
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/animate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animate",
    ()=>animate,
    "createScopedAnimate",
    ()=>createScopedAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$resolve$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$GroupPlaybackControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
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
function animateElements(elementOrSelector, keyframes, options, scope) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$resolve$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector, scope);
    const numElements = elements.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numElements), "No valid element provided.");
    const animations = [];
    for(let i = 0; i < numElements; i++){
        const element = elements[i];
        /**
         * Check each element for an associated VisualElement. If none exists,
         * we need to create one.
         */ if (!__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].has(element)) {
            /**
             * TODO: We only need render-specific parts of the VisualElement.
             * With some additional work the size of the animate() function
             * could be reduced significantly.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVisualElement"])(element);
        }
        const visualElement = __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].get(element);
        const transition = {
            ...options
        };
        /**
         * Resolve stagger function if provided.
         */ if (typeof transition.delay === "function") {
            transition.delay = transition.delay(i, numElements);
        }
        animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, {
            ...keyframes,
            transition
        }, {}));
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$GroupPlaybackControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupPlaybackControls"](animations);
}
const isSequence = (value)=>Array.isArray(value) && Array.isArray(value[0]);
function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationsFromSequence"])(sequence, options, scope);
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        let animation;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject)) {
            animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(subject, keyframes.default, transition.default);
        } else {
            animation = animateElements(subject, keyframes, transition);
        }
        animations.push(animation);
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$GroupPlaybackControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupPlaybackControls"](animations);
}
const createScopedAnimate = (scope)=>{
    /**
     * Implementation
     */ function scopedAnimate(valueOrElementOrSequence, keyframes, options) {
        let animation;
        if (isSequence(valueOrElementOrSequence)) {
            animation = animateSequence(valueOrElementOrSequence, keyframes, scope);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes)) {
            animation = animateElements(valueOrElementOrSequence, keyframes, options, scope);
        } else {
            animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(valueOrElementOrSequence, keyframes, options);
        }
        if (scope) {
            scope.animations.push(animation);
        }
        return animation;
    }
    return scopedAnimate;
};
const animate = createScopedAnimate();
;
}),
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMotionValue.useConstant[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initial)
    }["useMotionValue.useConstant[value]"]);
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useMotionValue.useEffect": ()=>value.on("change", setLatest)
        }["useMotionValue.useEffect"], []);
    }
    return value;
}
;
}),
]);

//# sourceMappingURL=tsawebmastersecond_TSA-Webmaster-Sujan_next-community-connect_ad847a51._.js.map