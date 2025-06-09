/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AuthMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/AuthMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthMenu: function() { return /* binding */ AuthMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSupabaseAuth */ \"./src/hooks/useSupabaseAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileSidebar */ \"./src/components/ProfileSidebar.tsx\");\n/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProfileSidebar__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthMenu auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AuthMenu() {\n    _s();\n    const { user, loading } = (0,_hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth)();\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogin = async ()=>{\n        window.location.href = \"/login\";\n    };\n    if (loading) return null;\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-4 py-2 bg-brand-blue text-white rounded\",\n            onClick: handleLogin,\n            children: \"Get Started\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium hover:bg-gray-200 transition\",\n                onClick: ()=>setSidebarOpen(true),\n                \"aria-label\": \"Open profile settings\",\n                children: user.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProfileSidebar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                open: sidebarOpen,\n                onClose: ()=>setSidebarOpen(false),\n                user: user\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AuthMenu, \"TD/xIeHQjHHGLTii4jTBwBEcRDo=\", false, function() {\n    return [\n        _hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth\n    ];\n});\n_c = AuthMenu;\nvar _c;\n$RefreshReg$(_c, \"AuthMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJEO0FBQzFCO0FBRWE7QUFFdkMsU0FBU0c7O0lBQ2QsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHTCx1RUFBZUE7SUFDekMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1PLGNBQWM7UUFDbEJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEsSUFBSU4sU0FBUyxPQUFPO0lBRXBCLElBQUksQ0FBQ0QsTUFBTTtRQUNULHFCQUNFLDhEQUFDUTtZQUNDQyxXQUFVO1lBQ1ZDLFNBQVNOO3NCQUNWOzs7Ozs7SUFJTDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVMsSUFBTVAsZUFBZTtnQkFDOUJRLGNBQVc7MEJBRVZYLEtBQUtZLEtBQUs7Ozs7OzswQkFFYiw4REFBQ2Qsd0RBQWNBO2dCQUFDZSxNQUFNWDtnQkFBYVksU0FBUyxJQUFNWCxlQUFlO2dCQUFRSCxNQUFNQTs7Ozs7Ozs7QUFHckY7R0FqQ2dCRDs7UUFDWUgsbUVBQWVBOzs7S0FEM0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F1dGhNZW51LnRzeD85MTNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3VwYWJhc2VBdXRoIH0gZnJvbSAnLi4vaG9va3MvdXNlU3VwYWJhc2VBdXRoJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZmlsZVNpZGViYXIgZnJvbSAnLi9Qcm9maWxlU2lkZWJhcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aE1lbnUoKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VTdXBhYmFzZUF1dGgoKTtcclxuICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xyXG4gIH07XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJyYW5kLWJsdWUgdGV4dC13aGl0ZSByb3VuZGVkXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cclxuICAgICAgPlxyXG4gICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBmb250LW1lZGl1bSBob3ZlcjpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBwcm9maWxlIHNldHRpbmdzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPFByb2ZpbGVTaWRlYmFyIG9wZW49e3NpZGViYXJPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRTaWRlYmFyT3BlbihmYWxzZSl9IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59ICJdLCJuYW1lcyI6WyJ1c2VTdXBhYmFzZUF1dGgiLCJ1c2VTdGF0ZSIsIlByb2ZpbGVTaWRlYmFyIiwiQXV0aE1lbnUiLCJ1c2VyIiwibG9hZGluZyIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJoYW5kbGVMb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwiZW1haWwiLCJvcGVuIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AuthMenu.tsx\n"));

/***/ }),

/***/ "./src/components/ProfileSidebar.tsx":
/*!*******************************************!*\
  !*** ./src/components/ProfileSidebar.tsx ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});