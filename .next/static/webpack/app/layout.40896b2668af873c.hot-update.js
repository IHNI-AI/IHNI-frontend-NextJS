/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2cdbc210d8a7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9pbmRleC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9pbmRleC5jc3M/YTAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJjZGJjMjEwZDhhN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/AuthMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/AuthMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthMenu: function() { return /* binding */ AuthMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSupabaseAuth */ \"(app-pages-browser)/./src/hooks/useSupabaseAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileSidebar */ \"(app-pages-browser)/./src/components/ProfileSidebar.tsx\");\n/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProfileSidebar__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthMenu auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AuthMenu() {\n    _s();\n    const { user, loading } = (0,_hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth)();\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogin = async ()=>{\n        window.location.href = \"/login\";\n    };\n    if (loading) return null;\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-4 py-2 bg-brand-blue text-white rounded\",\n            onClick: handleLogin,\n            children: \"Get Started\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium hover:bg-gray-200 transition\",\n                onClick: ()=>setSidebarOpen(true),\n                \"aria-label\": \"Open profile settings\",\n                children: user.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProfileSidebar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                open: sidebarOpen,\n                onClose: ()=>setSidebarOpen(false),\n                user: user\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\firul\\\\Desktop\\\\ihni-backend\\\\ihni-frontend-main\\\\src\\\\components\\\\AuthMenu.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AuthMenu, \"TD/xIeHQjHHGLTii4jTBwBEcRDo=\", false, function() {\n    return [\n        _hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth\n    ];\n});\n_c = AuthMenu;\nvar _c;\n$RefreshReg$(_c, \"AuthMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDMUI7QUFFYTtBQUV2QyxTQUFTRzs7SUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdMLHVFQUFlQTtJQUN6QyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFFL0MsTUFBTU8sY0FBYztRQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFQSxJQUFJTixTQUFTLE9BQU87SUFFcEIsSUFBSSxDQUFDRCxNQUFNO1FBQ1QscUJBQ0UsOERBQUNRO1lBQ0NDLFdBQVU7WUFDVkMsU0FBU047c0JBQ1Y7Ozs7OztJQUlMO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDSTtnQkFDQ0MsV0FBVTtnQkFDVkMsU0FBUyxJQUFNUCxlQUFlO2dCQUM5QlEsY0FBVzswQkFFVlgsS0FBS1ksS0FBSzs7Ozs7OzBCQUViLDhEQUFDZCx3REFBY0E7Z0JBQUNlLE1BQU1YO2dCQUFhWSxTQUFTLElBQU1YLGVBQWU7Z0JBQVFILE1BQU1BOzs7Ozs7OztBQUdyRjtHQWpDZ0JEOztRQUNZSCxtRUFBZUE7OztLQUQzQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aE1lbnUudHN4PzkxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdXBhYmFzZUF1dGggfSBmcm9tICcuLi9ob29rcy91c2VTdXBhYmFzZUF1dGgnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQcm9maWxlU2lkZWJhciBmcm9tICcuL1Byb2ZpbGVTaWRlYmFyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoTWVudSgpIHtcclxuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZVN1cGFiYXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiBudWxsO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYnJhbmQtYmx1ZSB0ZXh0LXdoaXRlIHJvdW5kZWRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4gICAgICA+XHJcbiAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIHRleHQteHMgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWdyYXktMjAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIHByb2ZpbGUgc2V0dGluZ3NcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3VzZXIuZW1haWx9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8UHJvZmlsZVNpZGViYXIgb3Blbj17c2lkZWJhck9wZW59IG9uQ2xvc2U9eygpID0+IHNldFNpZGViYXJPcGVuKGZhbHNlKX0gdXNlcj17dXNlcn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbInVzZVN1cGFiYXNlQXV0aCIsInVzZVN0YXRlIiwiUHJvZmlsZVNpZGViYXIiLCJBdXRoTWVudSIsInVzZXIiLCJsb2FkaW5nIiwic2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsImhhbmRsZUxvZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJlbWFpbCIsIm9wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthMenu.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ProfileSidebar.tsx":
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