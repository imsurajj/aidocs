"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/layout/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Moon,Sun,X!=!lucide-react */ \"__barrel_optimize__?names=Menu,Moon,Sun,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navItems = [\n    {\n        label: \"Features\",\n        href: \"#features\"\n    },\n    {\n        label: \"How it Works\",\n        href: \"#how-it-works\"\n    },\n    {\n        label: \"Pricing\",\n        href: \"#pricing\"\n    },\n    {\n        label: \"FAQ\",\n        href: \"#faq\"\n    },\n    {\n        label: \"Get Started\",\n        href: \"/auth\",\n        isButton: true\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    const toggleTheme = ()=>{\n        setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed w-full z-50 glass-effect\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"text-2xl font-bold text-gradient\",\n                            children: \"PDFCompanion\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex items-center space-x-6\",\n                            children: [\n                                navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: item.href,\n                                        className: item.isButton ? \"btn-primary\" : \"nav-link\",\n                                        children: item.label\n                                    }, item.label, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleTheme,\n                                    className: \"p-2 rounded-md hover:bg-muted/50 transition-colors\",\n                                    \"aria-label\": \"Toggle theme\",\n                                    children: mounted && (theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Sun, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Moon, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth\",\n                            className: \"btn-primary px-4 py-2 text-sm lg:text-base rounded-sm hidden sm:inline-flex\",\n                            children: \"Get Started Free\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden flex items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleTheme,\n                                    className: \"p-2 rounded-md hover:bg-muted/50 transition-colors\",\n                                    \"aria-label\": \"Toggle theme\",\n                                    children: mounted && (theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Sun, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Moon, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setIsOpen(!isOpen),\n                                    className: \"p-2 rounded-md hover:bg-muted/50 transition-colors\",\n                                    \"aria-expanded\": isOpen,\n                                    children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.X, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Moon_Sun_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                        className: \"h-5 w-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    animate: {\n                        opacity: 1,\n                        height: \"auto\"\n                    },\n                    exit: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    className: \"md:hidden border-t border-border/50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container py-4 space-y-2\",\n                            children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: item.href,\n                                    className: item.isButton ? \"btn-primary w-full justify-center\" : \"mobile-nav-link\",\n                                    onClick: ()=>setIsOpen(false),\n                                    children: item.label\n                                }, item.label, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4 pb-3 border-t border-border/50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/auth\",\n                                className: \"btn-primary w-full px-4 py-2 text-sm lg:text-base rounded-sm text-center\",\n                                children: \"Get Started Free\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsu\\\\Downloads\\\\docsquery\\\\components\\\\layout\\\\Navbar.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"WTRnmK+Ab8NgT7jYnYj89t/v2Pg=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDZlcsV0FBV0csS0FBS2IsUUFBUSxHQUNwQixzQ0FDQTtvQ0FFSmUsU0FBUyxJQUFNWixVQUFVOzhDQUV4QlUsS0FBS2YsS0FBSzttQ0FSTmUsS0FBS2YsS0FBSzs7Ozs7Ozs7OztzQ0FhckIsOERBQUNhOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDckIsa0RBQUlBO2dDQUNIVSxNQUFLO2dDQUNMVyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0FsSU1UOztRQUd3QlQsaURBQVFBOzs7S0FIaENTO0FBb0lOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci50c3g/NDY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCB7IFN1biwgTW9vbiwgTWVudSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSAnQC90eXBlcyc7XG5cbmNvbnN0IG5hdkl0ZW1zOiBOYXZJdGVtW10gPSBbXG4gIHsgbGFiZWw6ICdGZWF0dXJlcycsIGhyZWY6ICcjZmVhdHVyZXMnIH0sXG4gIHsgbGFiZWw6ICdIb3cgaXQgV29ya3MnLCBocmVmOiAnI2hvdy1pdC13b3JrcycgfSxcbiAgeyBsYWJlbDogJ1ByaWNpbmcnLCBocmVmOiAnI3ByaWNpbmcnIH0sXG4gIHsgbGFiZWw6ICdGQVEnLCBocmVmOiAnI2ZhcScgfSxcbiAgeyBsYWJlbDogJ0dldCBTdGFydGVkJywgaHJlZjogJy9hdXRoJywgaXNCdXR0b246IHRydWUgfSxcbl07XG5cbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB3LWZ1bGwgei01MCBnbGFzcy1lZmZlY3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaC1mdWxsXCI+XG4gICAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmFkaWVudFwiPlxuICAgICAgICAgICAgUERGQ29tcGFuaW9uXG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pc0J1dHRvbiBcbiAgICAgICAgICAgICAgICAgID8gXCJidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIFRoZW1lIHRvZ2dsZSAqL31cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLW1kIGhvdmVyOmJnLW11dGVkLzUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttb3VudGVkICYmIChcbiAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnID8gKFxuICAgICAgICAgICAgICAgICAgPFN1biBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPE1vb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUHJpbWFyeSBBY3Rpb24gKi99XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvYXV0aFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBweC00IHB5LTIgdGV4dC1zbSBsZzp0ZXh0LWJhc2Ugcm91bmRlZC1zbSBoaWRkZW4gc206aW5saW5lLWZsZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBTdGFydGVkIEZyZWVcbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1tdXRlZC81MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICAgIDxTdW4gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxNb29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLW1kIGhvdmVyOmJnLW11dGVkLzUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgbWVudSAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJvcmRlci10IGJvcmRlci1ib3JkZXIvNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTQgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlzQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgID8gXCJidG4tcHJpbWFyeSB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA6IFwibW9iaWxlLW5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE1vYmlsZSBNZW51IExpbmtzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTMgYm9yZGVyLXQgYm9yZGVyLWJvcmRlci81MFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXV0aFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgdy1mdWxsIHB4LTQgcHktMiB0ZXh0LXNtIGxnOnRleHQtYmFzZSByb3VuZGVkLXNtIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkIEZyZWVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlVGhlbWUiLCJTdW4iLCJNb29uIiwiTWVudSIsIlgiLCJuYXZJdGVtcyIsImxhYmVsIiwiaHJlZiIsImlzQnV0dG9uIiwiTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJhcmlhLWV4cGFuZGVkIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Navbar.tsx\n"));

/***/ })

});