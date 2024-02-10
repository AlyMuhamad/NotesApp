"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addNotes/page",{

/***/ "(app-pages-browser)/./app/addNotes/page.tsx":
/*!*******************************!*\
  !*** ./app/addNotes/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/addNotes/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../(ui)/AppLayout */ \"(app-pages-browser)/./app/(ui)/AppLayout.tsx\");\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddNotes() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true && localStorage.getItem(\"token\") ? true : false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        if (!text) return;\n        const requestOptions = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                body: text,\n                user: \"65c4d343a1d977f90308ca2a\"\n            })\n        };\n        if (authenticated) {\n            await fetch(\"http://127.0.0.1:5000/notes/addNotes\", requestOptions);\n        }\n        setText(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {\n                apiKey: \"52rb5jrn1gbmngwnhw3k5ngd5eqqrhv4lpkmvh8xycaqxmeu\",\n                onEditorChange: (newValue, editor)=>{\n                    setValue(newValue);\n                    setText(editor.getContent({\n                        format: \"html\"\n                    }));\n                },\n                onInit: (evt, editor)=>{\n                    setText(editor.getContent({\n                        format: \"html\"\n                    }));\n                },\n                id: \"tinycmeEditor\",\n                value: text,\n                init: {\n                    // selector: 'textarea',\n                    placeholder: \"Start typing here...\",\n                    body_class: \"my_class\",\n                    skin: \"borderless\",\n                    max_width: 800,\n                    // height: 600,\n                    // max_height: 600,\n                    resize: false,\n                    branding: false,\n                    // content_style:\n                    //   'body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}',\n                    content_style: 'body { font-family: \"Poppins\";}',\n                    toolbar: \"undo redo | bold italic underline strikethrough | blocks fontfamily fontsize | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat\",\n                    plugins: \"mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage inlinecss tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography \"\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\addNotes\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                onClick: handleSubmit,\n                children: \"Add note\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\addNotes\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\addNotes\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNotes, \"l5HkIS7EwMvoZfM3vVEDyE4AhSw=\");\n_c = AddNotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNotes);\nvar _c;\n$RefreshReg$(_c, \"AddNotes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGROb3Rlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXVDO0FBQ047QUFDUztBQUNNO0FBR2hELFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFxQjtJQUNyRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FDaEQsS0FBa0IsSUFBZVUsYUFBYUMsT0FBTyxDQUFDLFdBQ2xELE9BQ0E7SUFHTixlQUFlQyxhQUFhQyxDQUFNO1FBQ2hDQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUksQ0FBQ1IsTUFBTTtRQUVYLE1BQU1TLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CRixNQUFNWjtnQkFDTmUsTUFBTTtZQUNSO1FBQ0Y7UUFFQSxJQUFJYixlQUFlO1lBQ2pCLE1BQU1jLE1BQU0sd0NBQXdDUDtRQUN0RDtRQUVBUixRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ04scURBQVNBOzswQkFDUiw4REFBQ0MsMERBQU1BO2dCQUNMcUIsUUFBTztnQkFDUEMsZ0JBQWdCLENBQUNDLFVBQVVDO29CQUN6QnJCLFNBQVNvQjtvQkFDVGxCLFFBQVFtQixPQUFPQyxVQUFVLENBQUM7d0JBQUVDLFFBQVE7b0JBQU87Z0JBQzdDO2dCQUNBQyxRQUFRLENBQUNDLEtBQUtKO29CQUNabkIsUUFBUW1CLE9BQU9DLFVBQVUsQ0FBQzt3QkFBRUMsUUFBUTtvQkFBTztnQkFDN0M7Z0JBQ0FHLElBQUc7Z0JBQ0gzQixPQUFPRTtnQkFDUDBCLE1BQU07b0JBQ0osd0JBQXdCO29CQUN4QkMsYUFBYTtvQkFDYkMsWUFBWTtvQkFDWkMsTUFBTTtvQkFDTkMsV0FBVztvQkFDWCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkJDLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1YsaUJBQWlCO29CQUNqQix1RUFBdUU7b0JBQ3ZFQyxlQUFlO29CQUNmQyxTQUNFO29CQUNGQyxTQUNFO2dCQUVKOzs7Ozs7MEJBRUYsOERBQUNDO2dCQUFPQyxXQUFXNUMsNkRBQVU7Z0JBQUU4QyxTQUFTakM7MEJBQWM7Ozs7Ozs7Ozs7OztBQUs1RDtHQXJFU1Q7S0FBQUE7QUF1RVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkZE5vdGVzL3BhZ2UudHN4P2FjZjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLyh1aSkvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBBZGROb3RlcygpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCcnKTtcclxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgID8gdHJ1ZVxyXG4gICAgICA6IGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IGFueSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0ZXh0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGJvZHk6IHRleHQsXHJcbiAgICAgICAgdXNlcjogJzY1YzRkMzQzYTFkOTc3ZjkwMzA4Y2EyYScsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYXV0aGVudGljYXRlZCkge1xyXG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL25vdGVzL2FkZE5vdGVzJywgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHQoJycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxFZGl0b3JcclxuICAgICAgICBhcGlLZXk9XCI1MnJiNWpybjFnYm1uZ3duaHczazVuZ2Q1ZXFxcmh2NGxwa212aDh4eWNhcXhtZXVcIlxyXG4gICAgICAgIG9uRWRpdG9yQ2hhbmdlPXsobmV3VmFsdWUsIGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgc2V0VGV4dChlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogJ2h0bWwnIH0pKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uSW5pdD17KGV2dCwgZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRUZXh0KGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiAnaHRtbCcgfSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWQ9XCJ0aW55Y21lRWRpdG9yXCJcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAvLyBzZWxlY3RvcjogJ3RleHRhcmVhJyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU3RhcnQgdHlwaW5nIGhlcmUuLi4nLFxyXG4gICAgICAgICAgYm9keV9jbGFzczogJ215X2NsYXNzJyxcclxuICAgICAgICAgIHNraW46ICdib3JkZXJsZXNzJyxcclxuICAgICAgICAgIG1heF93aWR0aDogODAwLFxyXG4gICAgICAgICAgLy8gaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAvLyBtYXhfaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICByZXNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgYnJhbmRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgLy8gY29udGVudF9zdHlsZTpcclxuICAgICAgICAgIC8vICAgJ2JvZHkgeyBmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOjE0cHg7fScsXHJcbiAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjt9JyxcclxuICAgICAgICAgIHRvb2xiYXI6XHJcbiAgICAgICAgICAgICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCB8IGJsb2NrcyBmb250ZmFtaWx5IGZvbnRzaXplIHwgbGluayBpbWFnZSBtZWRpYSB0YWJsZSBtZXJnZXRhZ3MgfCBhbGlnbiBsaW5laGVpZ2h0IHwgdGlueWNvbW1lbnRzIHwgY2hlY2tsaXN0IG51bWxpc3QgYnVsbGlzdCBpbmRlbnQgb3V0ZGVudCB8IGVtb3RpY29ucyBjaGFybWFwIHwgcmVtb3ZlZm9ybWF0JyxcclxuICAgICAgICAgIHBsdWdpbnM6XHJcbiAgICAgICAgICAgICdtZW50aW9ucyBhbmNob3IgYXV0b2xpbmsgY2hhcm1hcCBjb2Rlc2FtcGxlIGVtb3RpY29ucyBpbWFnZSBsaW5rIGxpc3RzIG1lZGlhIHNlYXJjaHJlcGxhY2UgdGFibGUgdmlzdWFsYmxvY2tzIHdvcmRjb3VudCBjaGVja2xpc3QgbWVkaWFlbWJlZCBjYXNlY2hhbmdlIGV4cG9ydCBmb3JtYXRwYWludGVyIHBhZ2VlbWJlZCBwZXJtYW5lbnRwZW4gZm9vdG5vdGVzIGFkdnRlbXBsYXRlIGFkdnRhYmxlIGFkdmNvZGUgZWRpdGltYWdlIGlubGluZWNzcyB0YWJsZW9mY29udGVudHMgbWVyZ2V0YWdzIHBvd2VycGFzdGUgdGlueW1jZXNwZWxsY2hlY2tlciBhdXRvY29ycmVjdCBhMTF5Y2hlY2tlciB0eXBvZ3JhcGh5ICcsXHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIEFkZCBub3RlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTm90ZXM7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkFwcExheW91dCIsIkVkaXRvciIsIkFkZE5vdGVzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInRleHQiLCJzZXRUZXh0IiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiZmV0Y2giLCJhcGlLZXkiLCJvbkVkaXRvckNoYW5nZSIsIm5ld1ZhbHVlIiwiZWRpdG9yIiwiZ2V0Q29udGVudCIsImZvcm1hdCIsIm9uSW5pdCIsImV2dCIsImlkIiwiaW5pdCIsInBsYWNlaG9sZGVyIiwiYm9keV9jbGFzcyIsInNraW4iLCJtYXhfd2lkdGgiLCJyZXNpemUiLCJicmFuZGluZyIsImNvbnRlbnRfc3R5bGUiLCJ0b29sYmFyIiwicGx1Z2lucyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImJ0biIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addNotes/page.tsx\n"));

/***/ })

});