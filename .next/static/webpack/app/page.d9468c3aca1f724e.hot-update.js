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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types */ \"(app-pages-browser)/./types/types.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new WebSocket(\"ws://127.0.0.1:5001\"));\n    // Aパターンの件数\n    const [ACount, setACount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Bパターンの件数\n    const [BCount, setBCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 接続\n        socketRef.current.onopen = (e)=>{\n            console.log(\"Socket 接続成功\");\n        };\n        // サーバーからデータを受け取る\n        socketRef.current.onmessage = (e)=>{\n            const data = JSON.parse(e.data);\n            console.log(data);\n            if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.formatSocketMessageData)(data)) {\n                if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeA)(data.type)) {\n                    console.log(\"type_a\");\n                    setACount((value)=>value + 1);\n                } else if ((0,_types_types__WEBPACK_IMPORTED_MODULE_2__.isTypeB)(data.type)) {\n                    console.log(\"type_b\");\n                    setBCount((value)=>value + 1);\n                }\n            }\n        };\n    }, []);\n    // TypeAを実行\n    const type_a_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"check_in\");\n    }, []);\n    // TypeBを実行\n    const type_b_exec = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        socketRef.current.send(\"\");\n    }, []);\n    // TypeAの画面を表示\n    const reset_type_a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setACount(0);\n    }, []);\n    // TypeBの画面を表示\n    const reset_type_b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setBCount(0);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: reset_type_a,\n                                children: \"open_type_a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: reset_type_b,\n                                children: \"open_type_b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 8\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: type_a_exec,\n                    children: \"type_a_exec\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 8\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: type_b_exec,\n                    children: \"type_b_exec\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 8\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\81908\\\\Documents\\\\test\\\\react_websocket\\\\app\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"efkOq5lkZA6Z+tMECvVFaGxkwbc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSWlFO0FBQ1M7QUFFM0QsU0FBU087O0lBRXRCLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDLElBQUlNLFVBQVU7SUFFdkMsV0FBVztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUM3QyxXQUFXO0lBQ1gsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFTO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLEtBQUs7UUFDTE8sVUFBVU0sT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQ0M7WUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUVBLGlCQUFpQjtRQUNqQlYsVUFBVU0sT0FBTyxDQUFDSyxTQUFTLEdBQUcsQ0FBQ0g7WUFDM0IsTUFBTUksT0FBT0MsS0FBS0MsS0FBSyxDQUFDTixFQUFFSSxJQUFJO1lBQzlCSCxRQUFRQyxHQUFHLENBQUNFO1lBQ1osSUFBSWYscUVBQXVCQSxDQUFDZSxPQUFPO2dCQUNqQyxJQUFJaEIscURBQU9BLENBQUNnQixLQUFLRyxJQUFJLEdBQUc7b0JBQ3RCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pQLFVBQVVhLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCLE9BQU8sSUFBSWxCLHFEQUFPQSxDQUFDYyxLQUFLRyxJQUFJLEdBQUc7b0JBQzdCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pMLFVBQVVXLENBQUFBLFFBQVNBLFFBQU07Z0JBQzNCO1lBQ0Y7UUFDSjtJQUNGLEdBQUcsRUFBRTtJQUdMLFdBQVc7SUFDWCxNQUFNQyxjQUFjekIsa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLFdBQVc7SUFDWCxNQUFNQyxjQUFjM0Isa0RBQVdBLENBQUM7UUFDOUJRLFVBQVVNLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtJQUVMLGNBQWM7SUFDZCxNQUFNRSxlQUFlNUIsa0RBQVdBLENBQUM7UUFDL0JXLFVBQVU7SUFDWixHQUFHLEVBQUU7SUFFTCxjQUFjO0lBQ2QsTUFBTWtCLGVBQWU3QixrREFBV0EsQ0FBQztRQUMvQmEsVUFBVTtJQUNaLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDaUI7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDZCw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUFRQyxTQUFTTjswQ0FBYzs7Ozs7Ozs7Ozs7c0NBRWxDLDhEQUFDSTs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQVFDLFNBQVNMOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbkMsOERBQUNJO29CQUFRQyxTQUFTVDs4QkFBYTs7Ozs7OzhCQUMvQiw4REFBQ1E7b0JBQVFDLFNBQVNQOzhCQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztHQXZFd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNUeXBlQSwgZm9ybWF0U29ja2V0TWVzc2FnZURhdGEsIGlzVHlwZUIgfSBmcm9tICcuLi90eXBlcy90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBzb2NrZXRSZWYgPSB1c2VSZWYobmV3IFdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6NTAwMScpKTtcblxuICAvLyBB44OR44K/44O844Oz44Gu5Lu25pWwXG4gIGNvbnN0IFtBQ291bnQsIHNldEFDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAvLyBC44OR44K/44O844Oz44Gu5Lu25pWwXG4gIGNvbnN0IFtCQ291bnQsIHNldEJDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g5o6l57aaXG4gICAgc29ja2V0UmVmLmN1cnJlbnQub25vcGVuID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvY2tldCDmjqXntprmiJDlip8nKTtcbiAgICB9O1xuICBcbiAgICAvLyDjgrXjg7zjg5Djg7zjgYvjgonjg4fjg7zjgr/jgpLlj5fjgZHlj5bjgotcbiAgICBzb2NrZXRSZWYuY3VycmVudC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBpZiAoZm9ybWF0U29ja2V0TWVzc2FnZURhdGEoZGF0YSkpIHtcbiAgICAgICAgICBpZiAoaXNUeXBlQShkYXRhLnR5cGUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVfYVwiKTtcbiAgICAgICAgICAgIHNldEFDb3VudCh2YWx1ZSA9PiB2YWx1ZSsxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzVHlwZUIoZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlX2JcIik7XG4gICAgICAgICAgICBzZXRCQ291bnQodmFsdWUgPT4gdmFsdWUrMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgfSwgW10pXG4gIFxuXG4gIC8vIFR5cGVB44KS5a6f6KGMXG4gIGNvbnN0IHR5cGVfYV9leGVjID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNvY2tldFJlZi5jdXJyZW50LnNlbmQoJ2NoZWNrX2luJylcbiAgfSwgW10pO1xuICBcbiAgLy8gVHlwZULjgpLlrp/ooYxcbiAgY29uc3QgdHlwZV9iX2V4ZWMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc29ja2V0UmVmLmN1cnJlbnQuc2VuZCgnJylcbiAgfSwgW10pO1xuXG4gIC8vIFR5cGVB44Gu55S76Z2i44KS6KGo56S6XG4gIGNvbnN0IHJlc2V0X3R5cGVfYSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBQ291bnQoMCk7XG4gIH0sIFtdKTtcblxuICAvLyBUeXBlQuOBrueUu+mdouOCkuihqOekulxuICBjb25zdCByZXNldF90eXBlX2IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QkNvdW50KDApO1xuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwXCI+XG4gICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17cmVzZXRfdHlwZV9hfT5vcGVuX3R5cGVfYTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiPlxuICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3Jlc2V0X3R5cGVfYn0+b3Blbl90eXBlX2I8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGJ1dHRvbiAgb25DbGljaz17dHlwZV9hX2V4ZWN9PnR5cGVfYV9leGVjPC9idXR0b24+XG4gICAgICAgPGJ1dHRvbiAgb25DbGljaz17dHlwZV9iX2V4ZWN9PnR5cGVfYl9leGVjPC9idXR0b24+XG4gICAgICAgey8qIDxkaXY+QUNvdW50OiB7QUNvdW50fTwvZGl2PiAqL31cbiAgICAgICB7LyogPGRpdj5CQ291bnQ6IHtCQ291bnR9PC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJpc1R5cGVBIiwiZm9ybWF0U29ja2V0TWVzc2FnZURhdGEiLCJpc1R5cGVCIiwiSG9tZSIsInNvY2tldFJlZiIsIldlYlNvY2tldCIsIkFDb3VudCIsInNldEFDb3VudCIsIkJDb3VudCIsInNldEJDb3VudCIsImN1cnJlbnQiLCJvbm9wZW4iLCJlIiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwidmFsdWUiLCJ0eXBlX2FfZXhlYyIsInNlbmQiLCJ0eXBlX2JfZXhlYyIsInJlc2V0X3R5cGVfYSIsInJlc2V0X3R5cGVfYiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});