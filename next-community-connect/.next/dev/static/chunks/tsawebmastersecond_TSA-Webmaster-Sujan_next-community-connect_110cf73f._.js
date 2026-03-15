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
"[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$context$2f$SettingsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/context/SettingsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contrast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contrast$3e$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/node_modules/lucide-react/dist/esm/icons/contrast.js [app-client] (ecmascript) <export default as Contrast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Font size options
const fontSizes = [
    {
        value: 'small',
        label: 'Small',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"]
    },
    {
        value: 'medium',
        label: 'Medium',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"]
    },
    {
        value: 'large',
        label: 'Large',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"]
    },
    {
        value: 'xlarge',
        label: 'X-Large',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"]
    }
];
function SettingsPage() {
    _s();
    const { settings, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$context$2f$SettingsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const toggle = (type)=>dispatch({
            type
        });
    const setFontSize = (size)=>dispatch({
            type: 'SET_FONT_SIZE',
            payload: size
        });
    const setGrayscale = (value)=>dispatch({
            type: 'SET_GRAYSCALE',
            payload: value
        });
    const setZoom = (value)=>dispatch({
            type: 'SET_ZOOM',
            payload: value
        });
    const resetAll = ()=>{
        // Simple reset to initial (could dispatch multiple)
        window.localStorage.removeItem('community-connect-settings');
        window.location.reload();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "min-h-screen py-24 px-4 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.1
                },
                className: "glass-bg-md rounded-3xl p-12 mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-syne text-5xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent mb-6",
                        children: "Accessibility"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-dm-sans text-xl text-sky-700 max-w-2xl mx-auto leading-relaxed",
                        children: "Customize your experience for comfort and clarity. Changes save automatically and apply site-wide."
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "glass-bg p-8 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    " Display & Theme"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: settings.dark ? "default" : "outline",
                                        onClick: ()=>toggle('TOGGLE_DARK'),
                                        className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: `w-5 h-5 mr-3 ${settings.dark ? 'text-white' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            "Dark Mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: settings.highContrast ? "default" : "outline",
                                        onClick: ()=>toggle('TOGGLE_HIGH_CONTRAST'),
                                        className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contrast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contrast$3e$__["Contrast"], {
                                                className: `w-5 h-5 mr-3 ${settings.highContrast ? 'text-white' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            "High Contrast"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: settings.largeCursor ? "default" : "outline",
                                        onClick: ()=>toggle('TOGGLE_LARGE_CURSOR'),
                                        className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                                                className: `w-5 h-5 mr-3 ${settings.largeCursor ? 'text-white' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            "Large Cursor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "glass-bg p-8 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    " Text & Reading"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold mb-3 block text-sky-900",
                                                children: "Font Size"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: fontSizes.map(({ value, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: settings.fontSize === value ? "default" : "outline",
                                                        onClick: ()=>setFontSize(value),
                                                        className: "h-12 px-3 justify-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: `w-4 h-4 mr-2 flex-shrink-0 ${settings.fontSize === value ? 'text-white' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this),
                                                            label
                                                        ]
                                                    }, value, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: settings.readingGuide ? "default" : "outline",
                                        onClick: ()=>toggle('TOGGLE_READING_GUIDE'),
                                        className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                className: `w-5 h-5 mr-3 ${settings.readingGuide ? 'text-white' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            "Reading Guide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: settings.textToSpeech ? "default" : "outline",
                                        onClick: ()=>toggle('TOGGLE_TEXT_TO_SPEECH'),
                                        className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: `w-5 h-5 mr-3 ${settings.textToSpeech ? 'text-white' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            "Text-to-Speech"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "glass-bg p-8 rounded-2xl lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    " Color Filters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: settings.colorBlind ? "default" : "outline",
                                                onClick: ()=>toggle('TOGGLE_COLOR_BLIND'),
                                                className: "w-full mb-4 justify-start h-14 px-4 text-left font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                        className: `w-5 h-5 mr-3 ${settings.colorBlind ? 'text-white' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Color Blind Mode"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: settings.invertColors ? "default" : "outline",
                                                onClick: ()=>toggle('TOGGLE_INVERT_COLORS'),
                                                className: "w-full mb-4 justify-start h-14 px-4 text-left font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: `w-5 h-5 mr-3 ${settings.invertColors ? 'text-white' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Invert Colors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: settings.sepia ? "default" : "outline",
                                                onClick: ()=>toggle('TOGGLE_SEPIA'),
                                                className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                        className: `w-5 h-5 mr-3 opacity-70 ${settings.sepia ? 'text-white' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Sepia Tone"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold mb-4 block text-sky-900 flex items-center gap-2",
                                                children: [
                                                    "Grayscale Intensity",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-normal text-sky-600",
                                                        children: [
                                                            "(",
                                                            settings.grayscale,
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: settings.grayscale,
                                                onChange: (e)=>setGrayscale(Number(e.target.value)),
                                                className: "w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "glass-bg p-8 rounded-2xl lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    " Motion & Zoom"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: settings.reducedMotion ? "default" : "outline",
                                            onClick: ()=>toggle('TOGGLE_REDUCED_MOTION'),
                                            className: "w-full justify-start h-14 px-4 text-left font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                    className: `w-5 h-5 mr-3 ${settings.reducedMotion ? 'text-white' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                "Reduced Motion"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold mb-2 block text-sky-900 flex items-center gap-2",
                                                children: [
                                                    "Page Zoom",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-normal text-sky-600",
                                                        children: [
                                                            "(",
                                                            settings.zoom,
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "100",
                                                max: "200",
                                                step: "10",
                                                value: settings.zoom,
                                                onChange: (e)=>setZoom(Number(e.target.value)),
                                                className: "w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                                            }, void 0, false, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-sky-500 text-center font-mono",
                                                children: [
                                                    settings.zoom,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.3
                },
                className: "mt-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: resetAll,
                        variant: "outline",
                        size: "lg",
                        className: "px-8 font-semibold text-sky-600 border-sky-300 hover:bg-sky-50",
                        children: "Reset All to Defaults"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-sky-500 font-medium",
                        children: "Settings saved automatically ✨"
                    }, void 0, false, {
                        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/tsawebmastersecond/TSA-Webmaster-Sujan/next-community-connect/app/settings/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "13EgE9Q/KmR5MsZuuMiFjKI7YK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$tsawebmastersecond$2f$TSA$2d$Webmaster$2d$Sujan$2f$next$2d$community$2d$connect$2f$context$2f$SettingsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=tsawebmastersecond_TSA-Webmaster-Sujan_next-community-connect_110cf73f._.js.map