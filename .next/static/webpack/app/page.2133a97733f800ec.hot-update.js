"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types */ \"(app-pages-browser)/./types/types.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new WebSocket(\"ws://127.0.0.1:5001\"));\n    // Aパターンの件数\n    const [ACount, setACount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Bパターンの件数\n    const [BCount, setBCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 接続\n        socketRef.current.onopen = (e)=>{\n            console.log(\"Socket 接続成功\");\n        };\n        // サーバーからデータを受け取る\n        socketRef.current.onmessage = (e)=>{\n            const data = JSON.parse(e.data);\n            console.log(data);\n            if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.formatSocketMessageData)(data)) {\n                if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeA)(data.type)) {\n                    console.log(\"type_a\");\n                    setACount((value)=>value + 1);\n                } else if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeB)(data.type)) {\n                    console.log(\"type_b\");\n                    setBCount((value)=>value + 1);\n                }\n            }\n        };\n    }, []);\n    // TypeAを実行\n    const type_a_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"check_in\");\n    }, []);\n    // TypeBを実行\n    const type_b_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"\");\n    }, []);\n    // TypeAの画面を表示\n    const reset_type_a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setACount(0);\n    }, []);\n    // TypeBの画面を表示\n    const reset_type_b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setBCount(0);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: type_a_exec,\n                    children: \"type_a_exec\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 8\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: type_b_exec,\n                    children: \"type_b_exec\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 8\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: reset_type_a,\n                        children: \"open_type_a\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 8\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: reset_type_b,\n                        children: \"open_type_b\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 8\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"efkOq5lkZA6Z+tMECvVFaGxkwbc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSWlFO0FBQ1M7QUFFM0QsU0FBU087O0lBRXRCLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDLElBQUlNLFVBQVU7SUFFdkMsV0FBVztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUM3QyxXQUFXO0lBQ1gsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFTO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLEtBQUs7UUFDTE8sVUFBVU0sT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQ0M7WUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUVBLGlCQUFpQjtRQUNqQlYsVUFBVU0sT0FBTyxDQUFDSyxTQUFTLEdBQUcsQ0FBQ0g7WUFDM0IsTUFBTUksT0FBT0MsS0FBS0MsS0FBSyxDQUFDTixFQUFFSSxJQUFJO1lBQzlCSCxRQUFRQyxHQUFHLENBQUNFO1lBQ1osSUFBSWYscUVBQXVCQSxDQUFDZSxPQUFPO2dCQUNqQyxJQUFJaEIscURBQU9BLENBQUNnQixLQUFLRyxJQUFJLEdBQUc7b0JBQ3RCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pQLFVBQVVhLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCLE9BQU8sSUFBSWxCLHFEQUFPQSxDQUFDYyxLQUFLRyxJQUFJLEdBQUc7b0JBQzdCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pMLFVBQVVXLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCO1lBQ0Y7UUFDSjtJQUNGLEdBQUcsRUFBRTtJQUdMLFdBQVc7SUFDWCxNQUFNQyxjQUFjekIsa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLFdBQVc7SUFDWCxNQUFNQyxjQUFjM0Isa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLGNBQWM7SUFDZCxNQUFNRSxlQUFlNUIsa0RBQVdBLENBQUM7UUFDL0JXLFVBQVU7SUFDWixHQUFHLEVBQUU7SUFFTCxjQUFjO0lBQ2QsTUFBTWtCLGVBQWU3QixrREFBV0EsQ0FBQztRQUMvQmEsVUFBVTtJQUNaLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDaUI7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2QsOERBQUNFO29CQUFRQyxTQUFTVDs4QkFBYTs7Ozs7OzhCQUMvQiw4REFBQ1E7b0JBQVFDLFNBQVNQOzhCQUFhOzs7Ozs7OEJBRy9CLDhEQUFDSzs4QkFDQSw0RUFBQ0M7d0JBQVFDLFNBQVNOO2tDQUFjOzs7Ozs7Ozs7Ozs4QkFFakMsOERBQUNJOzhCQUNBLDRFQUFDQzt3QkFBUUMsU0FBU0w7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEM7R0FyRXdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVHlwZUEsIGZvcm1hdFNvY2tldE1lc3NhZ2VEYXRhLCBpc1R5cGVCIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3Qgc29ja2V0UmVmID0gdXNlUmVmKG5ldyBXZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjUwMDEnKSk7XG5cbiAgLy8gQeODkeOCv+ODvOODs+OBruS7tuaVsFxuICBjb25zdCBbQUNvdW50LCBzZXRBQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgLy8gQuODkeOCv+ODvOODs+OBruS7tuaVsFxuICBjb25zdCBbQkNvdW50LCBzZXRCQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOaOpee2mlxuICAgIHNvY2tldFJlZi5jdXJyZW50Lm9ub3BlbiA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTb2NrZXQg5o6l57aa5oiQ5YqfJyk7XG4gICAgfTtcbiAgXG4gICAgLy8g44K144O844OQ44O844GL44KJ44OH44O844K/44KS5Y+X44GR5Y+W44KLXG4gICAgc29ja2V0UmVmLmN1cnJlbnQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgaWYgKGZvcm1hdFNvY2tldE1lc3NhZ2VEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgaWYgKGlzVHlwZUEoZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlX2FcIik7XG4gICAgICAgICAgICBzZXRBQ291bnQodmFsdWUgPT4gdmFsdWUrMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1R5cGVCKGRhdGEudHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHlwZV9iXCIpO1xuICAgICAgICAgICAgc2V0QkNvdW50KHZhbHVlID0+IHZhbHVlKzEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gIH0sIFtdKVxuICBcblxuICAvLyBUeXBlQeOCkuWun+ihjFxuICBjb25zdCB0eXBlX2FfZXhlYyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzb2NrZXRSZWYuY3VycmVudC5zZW5kKCdjaGVja19pbicpXG4gIH0sIFtdKTtcbiAgXG4gIC8vIFR5cGVC44KS5a6f6KGMXG4gIGNvbnN0IHR5cGVfYl9leGVjID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNvY2tldFJlZi5jdXJyZW50LnNlbmQoJycpXG4gIH0sIFtdKTtcblxuICAvLyBUeXBlQeOBrueUu+mdouOCkuihqOekulxuICBjb25zdCByZXNldF90eXBlX2EgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QUNvdW50KDApO1xuICB9LCBbXSk7XG5cbiAgLy8gVHlwZULjga7nlLvpnaLjgpLooajnpLpcbiAgY29uc3QgcmVzZXRfdHlwZV9iID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEJDb3VudCgwKTtcbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBtYXgtdy01eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBsZzpmbGV4XCI+XG4gICAgICAgPGJ1dHRvbiAgb25DbGljaz17dHlwZV9hX2V4ZWN9PnR5cGVfYV9leGVjPC9idXR0b24+XG4gICAgICAgPGJ1dHRvbiAgb25DbGljaz17dHlwZV9iX2V4ZWN9PnR5cGVfYl9leGVjPC9idXR0b24+XG4gICAgICAgey8qIDxkaXY+QUNvdW50OiB7QUNvdW50fTwvZGl2PiAqL31cbiAgICAgICB7LyogPGRpdj5CQ291bnQ6IHtCQ291bnR9PC9kaXY+ICovfVxuICAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3Jlc2V0X3R5cGVfYX0+b3Blbl90eXBlX2E8L2J1dHRvbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXtyZXNldF90eXBlX2J9Pm9wZW5fdHlwZV9iPC9idXR0b24+XG4gICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImlzVHlwZUEiLCJmb3JtYXRTb2NrZXRNZXNzYWdlRGF0YSIsImlzVHlwZUIiLCJIb21lIiwic29ja2V0UmVmIiwiV2ViU29ja2V0IiwiQUNvdW50Iiwic2V0QUNvdW50IiwiQkNvdW50Iiwic2V0QkNvdW50IiwiY3VycmVudCIsIm9ub3BlbiIsImUiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJ2YWx1ZSIsInR5cGVfYV9leGVjIiwic2VuZCIsInR5cGVfYl9leGVjIiwicmVzZXRfdHlwZV9hIiwicmVzZXRfdHlwZV9iIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});