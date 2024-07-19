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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types */ \"(app-pages-browser)/./types/types.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new WebSocket(\"ws://127.0.0.1:5001\"));\n    // Aパターンの件数\n    const [ACount, setACount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Bパターンの件数\n    const [BCount, setBCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 接続\n        socketRef.current.onopen = (e)=>{\n            console.log(\"Socket 接続成功\");\n        };\n        // サーバーからデータを受け取る\n        socketRef.current.onmessage = (e)=>{\n            const data = JSON.parse(e.data);\n            console.log(data);\n            if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.formatSocketMessageData)(data)) {\n                if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeA)(data.type)) {\n                    console.log(\"type_a\");\n                    setACount((value)=>value + 1);\n                } else if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeB)(data.type)) {\n                    console.log(\"type_b\");\n                    setBCount((value)=>value + 1);\n                }\n            }\n        };\n    }, []);\n    // TypeAを実行\n    const type_a_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"check_in\");\n    }, []);\n    // TypeBを実行\n    const type_b_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"\");\n    }, []);\n    // TypeAの画面を表示\n    const reset_type_a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setACount(0);\n    }, []);\n    // TypeBの画面を表示\n    const reset_type_b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setBCount(0);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative top-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: reset_type_a,\n                                        children: \"open_type_a\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    ACount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute rounded-full bg-red-700 w-5 h-5 text-center text-white\",\n                                        children: ACount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: reset_type_b,\n                                        children: \"open_type_b\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    BCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute rounded-full bg-red-700 w-5 h-5 text-center text-white\",\n                                        children: BCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: type_a_exec,\n                                    children: \"type_a_exec\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: type_b_exec,\n                                    children: \"type_b_exec\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"efkOq5lkZA6Z+tMECvVFaGxkwbc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSWlFO0FBQ1M7QUFFM0QsU0FBU087O0lBRXRCLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDLElBQUlNLFVBQVU7SUFFdkMsV0FBVztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUM3QyxXQUFXO0lBQ1gsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFTO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLEtBQUs7UUFDTE8sVUFBVU0sT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQ0M7WUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUVBLGlCQUFpQjtRQUNqQlYsVUFBVU0sT0FBTyxDQUFDSyxTQUFTLEdBQUcsQ0FBQ0g7WUFDM0IsTUFBTUksT0FBT0MsS0FBS0MsS0FBSyxDQUFDTixFQUFFSSxJQUFJO1lBQzlCSCxRQUFRQyxHQUFHLENBQUNFO1lBQ1osSUFBSWYscUVBQXVCQSxDQUFDZSxPQUFPO2dCQUNqQyxJQUFJaEIscURBQU9BLENBQUNnQixLQUFLRyxJQUFJLEdBQUc7b0JBQ3RCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pQLFVBQVVhLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCLE9BQU8sSUFBSWxCLHFEQUFPQSxDQUFDYyxLQUFLRyxJQUFJLEdBQUc7b0JBQzdCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pMLFVBQVVXLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCO1lBQ0Y7UUFDSjtJQUNGLEdBQUcsRUFBRTtJQUdMLFdBQVc7SUFDWCxNQUFNQyxjQUFjekIsa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLFdBQVc7SUFDWCxNQUFNQyxjQUFjM0Isa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLGNBQWM7SUFDZCxNQUFNRSxlQUFlNUIsa0RBQVdBLENBQUM7UUFDL0JXLFVBQVU7SUFDWixHQUFHLEVBQUU7SUFFTCxjQUFjO0lBQ2QsTUFBTWtCLGVBQWU3QixrREFBV0EsQ0FBQztRQUMvQmEsVUFBVTtJQUNaLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDaUI7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0U7d0NBQVFDLFNBQVNOO2tEQUFjOzs7Ozs7b0NBQy9CbEIsU0FBUyxtQkFBTSw4REFBQ3NCO3dDQUFJRCxXQUFVO2tEQUFtRXJCOzs7Ozs7Ozs7Ozs7MENBRXBHLDhEQUFDc0I7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBUUMsU0FBU0w7a0RBQWM7Ozs7OztvQ0FDL0JqQixTQUFTLG1CQUFNLDhEQUFDb0I7d0NBQUlELFdBQVU7a0RBQW1FbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdEcsOERBQUNvQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUNDLDRFQUFDQztvQ0FBUUMsU0FBU1Q7OENBQWE7Ozs7Ozs7Ozs7OzBDQUVqQyw4REFBQ087MENBQ0MsNEVBQUNDO29DQUFRQyxTQUFTUDs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdDO0dBL0V3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1R5cGVBLCBmb3JtYXRTb2NrZXRNZXNzYWdlRGF0YSwgaXNUeXBlQiB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHNvY2tldFJlZiA9IHVzZVJlZihuZXcgV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo1MDAxJykpO1xuXG4gIC8vIEHjg5Hjgr/jg7zjg7Pjga7ku7bmlbBcbiAgY29uc3QgW0FDb3VudCwgc2V0QUNvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIC8vIELjg5Hjgr/jg7zjg7Pjga7ku7bmlbBcbiAgY29uc3QgW0JDb3VudCwgc2V0QkNvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDmjqXntppcbiAgICBzb2NrZXRSZWYuY3VycmVudC5vbm9wZW4gPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU29ja2V0IOaOpee2muaIkOWKnycpO1xuICAgIH07XG4gIFxuICAgIC8vIOOCteODvOODkOODvOOBi+OCieODh+ODvOOCv+OCkuWPl+OBkeWPluOCi1xuICAgIHNvY2tldFJlZi5jdXJyZW50Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGlmIChmb3JtYXRTb2NrZXRNZXNzYWdlRGF0YShkYXRhKSkge1xuICAgICAgICAgIGlmIChpc1R5cGVBKGRhdGEudHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHlwZV9hXCIpO1xuICAgICAgICAgICAgc2V0QUNvdW50KHZhbHVlID0+IHZhbHVlKzEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNUeXBlQihkYXRhLnR5cGUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVfYlwiKTtcbiAgICAgICAgICAgIHNldEJDb3VudCh2YWx1ZSA9PiB2YWx1ZSsxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICB9LCBbXSlcbiAgXG5cbiAgLy8gVHlwZUHjgpLlrp/ooYxcbiAgY29uc3QgdHlwZV9hX2V4ZWMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc29ja2V0UmVmLmN1cnJlbnQuc2VuZCgnY2hlY2tfaW4nKVxuICB9LCBbXSk7XG4gIFxuICAvLyBUeXBlQuOCkuWun+ihjFxuICBjb25zdCB0eXBlX2JfZXhlYyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzb2NrZXRSZWYuY3VycmVudC5zZW5kKCcnKVxuICB9LCBbXSk7XG5cbiAgLy8gVHlwZUHjga7nlLvpnaLjgpLooajnpLpcbiAgY29uc3QgcmVzZXRfdHlwZV9hID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFDb3VudCgwKTtcbiAgfSwgW10pO1xuXG4gIC8vIFR5cGVC44Gu55S76Z2i44KS6KGo56S6XG4gIGNvbnN0IHJlc2V0X3R5cGVfYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRCQ291bnQoMCk7XG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXtyZXNldF90eXBlX2F9Pm9wZW5fdHlwZV9hPC9idXR0b24+XG4gICAgICAgICAgICAgIHtBQ291bnQgPiAwICYmICg8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCBiZy1yZWQtNzAwIHctNSBoLTUgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPntBQ291bnR9PC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17cmVzZXRfdHlwZV9ifT5vcGVuX3R5cGVfYjwvYnV0dG9uPlxuICAgICAgICAgICAgICB7QkNvdW50ID4gMCAmJiAoPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgYmctcmVkLTcwMCB3LTUgaC01IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj57QkNvdW50fTwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0eXBlX2FfZXhlY30+dHlwZV9hX2V4ZWM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dHlwZV9iX2V4ZWN9PnR5cGVfYl9leGVjPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImlzVHlwZUEiLCJmb3JtYXRTb2NrZXRNZXNzYWdlRGF0YSIsImlzVHlwZUIiLCJIb21lIiwic29ja2V0UmVmIiwiV2ViU29ja2V0IiwiQUNvdW50Iiwic2V0QUNvdW50IiwiQkNvdW50Iiwic2V0QkNvdW50IiwiY3VycmVudCIsIm9ub3BlbiIsImUiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJ2YWx1ZSIsInR5cGVfYV9leGVjIiwic2VuZCIsInR5cGVfYl9leGVjIiwicmVzZXRfdHlwZV9hIiwicmVzZXRfdHlwZV9iIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});