"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("modules_auth_userMenu_index_js",{

/***/ "./modules/auth/userMenu/index.js":
/*!****************************************!*\
  !*** ./modules/auth/userMenu/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./modules/auth/store/index.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BiLogOutCircle_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BiLogOutCircle!=!react-icons/bi */ \"__barrel_optimize__?names=BiLogOutCircle!=!./node_modules/react-icons/bi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_CiMail_react_icons_ci__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CiMail!=!react-icons/ci */ \"__barrel_optimize__?names=CiMail!=!./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _utils_getInitials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getInitials */ \"./modules/utils/getInitials.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst UserMenu = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user, logout } = (0,_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const handleLogout = ()=>{\n        router.push(\"/auth\");\n        logout();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Menu.Target, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    variant: \"default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                                radius: \"xl\",\n                                size: 30,\n                                children: (0,_utils_getInitials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(user.name, \" \"))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined),\n                            user === null || user === void 0 ? void 0 : user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Menu.Dropdown, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        leftSection: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiMail_react_icons_ci__WEBPACK_IMPORTED_MODULE_6__.CiMail, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 33\n                        }, void 0),\n                        children: user === null || user === void 0 ? void 0 : user.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        leftSection: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiLogOutCircle_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogOutCircle, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 33\n                        }, void 0),\n                        onClick: handleLogout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Catalogue des projets\\\\notes\\\\client\\\\modules\\\\auth\\\\userMenu\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserMenu, \"1/IA+6wV0/o1QvH88qzxrsQr1eQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2F1dGgvdXNlck1lbnUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNKO0FBQ3dCO0FBQ1o7QUFDUjtBQUNVO0FBRWxELE1BQU1VLFdBQVc7O0lBQ2YsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBR1gsa0RBQVlBO0lBRXJDLE1BQU1ZLGVBQWU7UUFDbkJILE9BQU9JLElBQUksQ0FBQztRQUNaRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNQLCtDQUFJQTs7MEJBQ0gsOERBQUNBLCtDQUFJQSxDQUFDVSxNQUFNOzBCQUNWLDRFQUFDWixpREFBTUE7b0JBQUNhLFNBQVE7OEJBQ2QsNEVBQUNaLGdEQUFLQTs7MENBQ0osOERBQUNGLGlEQUFNQTtnQ0FBQ2UsUUFBTztnQ0FBS0MsTUFBTTswQ0FBS1YsOERBQVdBLENBQUMsR0FBYSxPQUFWRyxLQUFLUSxJQUFJLEVBQUM7Ozs7Ozs0QkFDdkRSLGlCQUFBQSwyQkFBQUEsS0FBTVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDZCwrQ0FBSUEsQ0FBQ2UsUUFBUTs7a0NBQ1osOERBQUNmLCtDQUFJQSxDQUFDZ0IsSUFBSTt3QkFBQ0MsMkJBQWEsOERBQUNmLGdGQUFNQTs7Ozs7a0NBQU1JLGlCQUFBQSwyQkFBQUEsS0FBTVksS0FBSzs7Ozs7O2tDQUNoRCw4REFBQ2xCLCtDQUFJQSxDQUFDZ0IsSUFBSTt3QkFBQ0MsMkJBQWEsOERBQUNoQixnR0FBY0E7Ozs7O3dCQUFLa0IsU0FBU1g7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zRTtHQTVCTUo7O1FBQ1dULGtEQUFTQTtRQUNDQyw4Q0FBWUE7OztLQUZqQ1E7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9hdXRoL3VzZXJNZW51L2luZGV4LmpzP2EzOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZUF1dGhTdG9yZSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIEdyb3VwLCBNZW51IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuaW1wb3J0IHsgQmlMb2dPdXRDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHsgQ2lNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tIFwiLi4vLi4vdXRpbHMvZ2V0SW5pdGlhbHNcIjtcclxuXHJcbmNvbnN0IFVzZXJNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoU3RvcmUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuICAgIGxvZ291dCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuVGFyZ2V0PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlZmF1bHRcIiA+XHJcbiAgICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgcmFkaXVzPVwieGxcIiBzaXplPXszMH0+e2dldEluaXRpYWxzKGAke3VzZXIubmFtZX0gYCl9PC9BdmF0YXI+XHJcbiAgICAgICAgICAgIHt1c2VyPy5uYW1lfVxyXG4gICAgICAgICAgPC9Hcm91cD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9NZW51LlRhcmdldD5cclxuICAgICAgPE1lbnUuRHJvcGRvd24+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBsZWZ0U2VjdGlvbj17PENpTWFpbCAvPn0+e3VzZXI/LmVtYWlsfTwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gbGVmdFNlY3Rpb249ezxCaUxvZ091dENpcmNsZSAvPn0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnUuRHJvcGRvd24+XHJcblxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwidXNlQXV0aFN0b3JlIiwiQXZhdGFyIiwiQnV0dG9uIiwiR3JvdXAiLCJNZW51IiwiQmlMb2dPdXRDaXJjbGUiLCJDaU1haWwiLCJnZXRJbml0aWFscyIsIlVzZXJNZW51Iiwicm91dGVyIiwidXNlciIsImxvZ291dCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJUYXJnZXQiLCJ2YXJpYW50IiwicmFkaXVzIiwic2l6ZSIsIm5hbWUiLCJEcm9wZG93biIsIkl0ZW0iLCJsZWZ0U2VjdGlvbiIsImVtYWlsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/auth/userMenu/index.js\n"));

/***/ })

});