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

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst mapProductsToCards = (products)=>products.map((param)=>/*#__PURE__*/ {\n        let { name , id , price , image  } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/product/\".concat(id),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                as: \"a\",\n                header: name,\n                image: {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        width: 333,\n                        height: 333,\n                        alt: \"\"\n                    }, void 0, false, void 0, void 0)\n                },\n                meta: {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {\n                        style: {\n                            color: \"dimgray\"\n                        },\n                        children: price\n                    }, void 0, false, void 0, void 0)\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\EDUCACI\\xd3N\\\\Platzi\\\\2023\\\\Frontend\\\\Full Stack con Next.js\\\\Curso de Next.js\\\\proyecto\\\\components\\\\ProductList\\\\ProductList.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        }, id, false, {\n            fileName: \"D:\\\\EDUCACI\\xd3N\\\\Platzi\\\\2023\\\\Frontend\\\\Full Stack con Next.js\\\\Curso de Next.js\\\\proyecto\\\\components\\\\ProductList\\\\ProductList.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined);\n    });\nconst ProductList = (param)=>/*#__PURE__*/ {\n    let { products  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {\n        itemsPerRow: 2,\n        stackable: true,\n        children: mapProductsToCards(products)\n    }, void 0, false, {\n        fileName: \"D:\\\\EDUCACI\\xd3N\\\\Platzi\\\\2023\\\\Frontend\\\\Full Stack con Next.js\\\\Curso de Next.js\\\\proyecto\\\\components\\\\ProductList\\\\ProductList.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDZTtBQUVWO0FBTTlCLE1BQU1HLHFCQUFxQixDQUFDQyxXQUMxQkEsU0FBU0MsR0FBRyxDQUFDLHVCQUNYO1lBRFksRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFO2VBQ3RDLDhEQUFDQztZQUFXQyxNQUFNLFlBQWUsT0FBSEo7c0JBQzVCLDRFQUFDTixtREFBSUE7Z0JBQ0hXLElBQUc7Z0JBQ0hDLFFBQVFQO2dCQUNSRyxPQUFPO29CQUFFSyx3QkFBVSw4REFBQ1osbURBQUtBO3dCQUFDYSxLQUFLTjt3QkFBT08sT0FBTzt3QkFBS0MsUUFBUTt3QkFBS0MsS0FBSTs7Z0JBQU07Z0JBQ3pFQyxNQUFNO29CQUNKTCx3QkFBVSw4REFBQ2Isd0RBQVM7d0JBQUNvQixPQUFPOzRCQUFFQyxPQUFPO3dCQUFVO2tDQUFJZDs7Z0JBQ3JEOzs7Ozs7V0FQSUQ7Ozs7O0lBU0w7QUFHUCxNQUFNZ0IsY0FBYyx1QkFDbEI7UUFEbUIsRUFBRW5CLFNBQVEsRUFBb0I7V0FDakQsOERBQUNILHlEQUFVO1FBQUN3QixhQUFhO1FBQUdDLFNBQVM7a0JBQ2xDdkIsbUJBQW1CQzs7Ozs7O0FBQ1Y7S0FIUm1CO0FBTU4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3g/MGU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbnR5cGUgUHJvZHVjdExpc3RQcm9wcyA9IHtcclxuICBwcm9kdWN0czogVFByb2R1Y3RbXVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9kdWN0c1RvQ2FyZHMgPSAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+XHJcbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxyXG4gICAgPGEga2V5PXtpZH0gaHJlZj17YC9wcm9kdWN0LyR7aWR9YH0gPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgaGVhZGVyPXtuYW1lfVxyXG4gICAgICAgIGltYWdlPXt7IGNoaWxkcmVuOiA8SW1hZ2Ugc3JjPXtpbWFnZX0gd2lkdGg9ezMzM30gaGVpZ2h0PXszMzN9IGFsdD1cIlwiIC8+IH19XHJcbiAgICAgICAgbWV0YT17e1xyXG4gICAgICAgICAgY2hpbGRyZW46IDxDYXJkLk1ldGEgc3R5bGU9e3sgY29sb3I6ICdkaW1ncmF5JyB9fT57cHJpY2V9PC9DYXJkLk1ldGE+LFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgKSlcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgcHJvZHVjdHMgfTogUHJvZHVjdExpc3RQcm9wcykgPT4gKFxyXG4gIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBzdGFja2FibGU+XHJcbiAgICB7bWFwUHJvZHVjdHNUb0NhcmRzKHByb2R1Y3RzKX1cclxuICA8L0NhcmQuR3JvdXA+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJJbWFnZSIsIm1hcFByb2R1Y3RzVG9DYXJkcyIsInByb2R1Y3RzIiwibWFwIiwibmFtZSIsImlkIiwicHJpY2UiLCJpbWFnZSIsImEiLCJocmVmIiwiYXMiLCJoZWFkZXIiLCJjaGlsZHJlbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibWV0YSIsIk1ldGEiLCJzdHlsZSIsImNvbG9yIiwiUHJvZHVjdExpc3QiLCJHcm91cCIsIml0ZW1zUGVyUm93Iiwic3RhY2thYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductList/ProductList.tsx\n"));

/***/ })

});