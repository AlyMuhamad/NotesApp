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

/***/ "(app-pages-browser)/./app/(components)/SavedNotes.tsx":
/*!*****************************************!*\
  !*** ./app/(components)/SavedNotes.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SavedNotes.module.css */ \"(app-pages-browser)/./app/(components)/SavedNotes.module.css\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../(assets)/(images)/5.png */ \"(app-pages-browser)/./app/(assets)/(images)/5.png\");\n/* harmony import */ var _barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=RiDeleteBin6Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FiArchive,FiEdit3!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TbPin,TbPinnedOff!=!react-icons/tb */ \"(app-pages-browser)/./node_modules/react-icons/tb/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 30rem;\\n  height: 22.7rem;\\n\\n  @media (max-width: 55em) {\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst StyledImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n_c = StyledImage;\nfunction SavedNotes() {\n    _s();\n    const [DBnotes, setDBnotes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [DBnoteSelected, setDBnoteSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    function handleEdit(note) {}\n    async function handlePin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: true\n            })\n        };\n        await fetch(\"http://localhost:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleUnpin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: false\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleArchive(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                archived: true\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleDelete(note) {\n        const deleteRequest = {\n            method: \"DELETE\"\n        };\n        await fetch(\"http://127.0.0.1:5000/notes/addNotes/\".concat(note._id), deleteRequest);\n        setDBnoteSelected({});\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function handleSubmit() {\n            const res = await fetch(\"http://127.0.0.1:5000/notes/addNotes\");\n            const data = await res.json();\n            setDBnotes(data.data.notes);\n        }\n        handleSubmit();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().headline),\n                children: [\n                    DBnotes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Saved Notes\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 32\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: DBnotes.length > 0 && DBnoteSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().icons),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiEdit3, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().edit),\n                                    onClick: ()=>handleEdit(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this),\n                                DBnoteSelected.pinned ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPinnedOff, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinoff),\n                                    onClick: ()=>handleUnpin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pin),\n                                    onClick: ()=>handlePin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiArchive, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().archive),\n                                    onClick: ()=>handleArchive(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__.RiDeleteBin6Line, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"]),\n                                    onClick: ()=>handleDelete(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            DBnotes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                        src: _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"an image\",\n                        layout: \"resonsive\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesText),\n                        children: [\n                            \"No saved notes yet :( , \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 37\n                            }, this),\n                            \"try to add some to make me happy :)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this) : DBnotes.map((DBnote)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        onClick: ()=>{\n                            setDBnoteSelected(DBnoteSelected ? undefined : DBnote);\n                        },\n                        style: {\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(DBnote.body))\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 19\n                                    }, this),\n                                    DBnote.pinned && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinned)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 13\n                    }, this)\n                }, DBnote._id, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(SavedNotes, \"8njSGTeBaSq2paAvLI8rhN4jrlI=\");\n_c1 = SavedNotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavedNotes);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledImage\");\n$RefreshReg$(_c1, \"SavedNotes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29tcG9uZW50cykvU2F2ZWROb3Rlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTjtBQUNEO0FBQ007QUFDYjtBQUNnQjtBQUNHO0FBQ0U7QUFDQTtBQUNyQjtBQVUvQixNQUFNYSxjQUFjWiw2REFBTUEsQ0FBQ0ksa0RBQUtBO0tBQTFCUTtBQVFOLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBUyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQ2xELENBQUM7SUFHSCxTQUFTZSxXQUFXQyxJQUFVLEdBQUc7SUFFakMsZUFBZUMsVUFBVUQsSUFBVTtRQUNqQyxNQUFNRSxpQkFBaUI7WUFDckJDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsUUFBUTtZQUNWO1FBQ0Y7UUFDQSxNQUFNQyxNQUNKLHdDQUFpRCxPQUFUVCxLQUFLVSxHQUFHLEdBQ2hEUjtRQUdGSixrQkFBa0IsQ0FBQztJQUNyQjtJQUVBLGVBQWVhLFlBQVlYLElBQVU7UUFDbkMsTUFBTUUsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLFFBQVE7WUFDVjtRQUNGO1FBQ0EsTUFBTUMsTUFDSix3Q0FBaUQsT0FBVFQsS0FBS1UsR0FBRyxHQUNoRFI7UUFHRkosa0JBQWtCLENBQUM7SUFDckI7SUFFQSxlQUFlYyxjQUFjWixJQUFVO1FBQ3JDLE1BQU1FLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CTSxVQUFVO1lBQ1o7UUFDRjtRQUNBLE1BQU1KLE1BQ0osd0NBQWlELE9BQVRULEtBQUtVLEdBQUcsR0FDaERSO1FBR0ZKLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUEsZUFBZWdCLGFBQWFkLElBQVU7UUFDcEMsTUFBTWUsZ0JBQWdCO1lBQUVaLFFBQVE7UUFBUztRQUN6QyxNQUFNTSxNQUNKLHdDQUFpRCxPQUFUVCxLQUFLVSxHQUFHLEdBQ2hESztRQUVGakIsa0JBQWtCLENBQUM7SUFDckI7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUixlQUFlaUM7WUFDYixNQUFNQyxNQUFNLE1BQU1SLE1BQU07WUFDeEIsTUFBTVMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1lBQzNCdkIsV0FBV3NCLEtBQUtBLElBQUksQ0FBQ0UsS0FBSztRQUM1QjtRQUNBSjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVcxQyx1RUFBYzs7MEJBQzVCLDhEQUFDeUM7Z0JBQUlDLFdBQVcxQyx3RUFBZTs7b0JBQzVCZSxRQUFROEIsTUFBTSxHQUFHLG1CQUFLLDhEQUFDSjt3QkFBSUMsV0FBVzFDLHFFQUFZO2tDQUFFOzs7Ozs7a0NBQ3JELDhEQUFDeUM7a0NBQ0UxQixRQUFROEIsTUFBTSxHQUFHLEtBQUs1QixnQ0FDckIsOERBQUN3Qjs0QkFBSUMsV0FBVzFDLHFFQUFZOzs4Q0FDMUIsOERBQUNRLDRGQUFPQTtvQ0FDTmtDLFdBQVcxQyxvRUFBVztvQ0FDdEJpRCxTQUFTLElBQU05QixXQUFXRjs7Ozs7O2dDQUUzQkEsZUFBZVcsTUFBTSxpQkFDcEIsOERBQUNqQixnR0FBV0E7b0NBQ1YrQixXQUFXMUMsc0VBQWE7b0NBQ3hCaUQsU0FBUyxJQUFNbEIsWUFBWWQ7Ozs7O3lEQUc3Qiw4REFBQ1AsMEZBQUtBO29DQUNKZ0MsV0FBVzFDLG1FQUFVO29DQUNyQmlELFNBQVMsSUFBTTVCLFVBQVVKOzs7Ozs7OENBRzdCLDhEQUFDUiw4RkFBU0E7b0NBQ1JpQyxXQUFXMUMsdUVBQWM7b0NBQ3pCaUQsU0FBUyxJQUFNakIsY0FBY2Y7Ozs7Ozs4Q0FFL0IsOERBQUNWLHFHQUFnQkE7b0NBQ2ZtQyxXQUFXMUMseUVBQWE7b0NBQ3hCaUQsU0FBUyxJQUFNZixhQUFhakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXJDRixRQUFROEIsTUFBTSxLQUFLLGtCQUNsQiw4REFBQ0o7Z0JBQUlDLFdBQVcxQyw4RUFBcUI7O2tDQUNuQyw4REFBQ2E7d0JBQVkwQyxLQUFLakQsNERBQUtBO3dCQUFFa0QsS0FBSTt3QkFBV0MsUUFBTzt3QkFBWUMsUUFBUTs7Ozs7O2tDQUNuRSw4REFBQ2pCO3dCQUFJQyxXQUFXMUMsMkVBQWtCOzs0QkFBRTswQ0FDViw4REFBQzREOzs7Ozs0QkFBSzs7Ozs7Ozs7Ozs7O3VCQUtsQzdDLFFBQVE4QyxHQUFHLENBQUNDLENBQUFBLHVCQUNWLDhEQUFDckI7OEJBQ0MsNEVBQUNBO3dCQUNDQyxXQUFXMUMsb0VBQVc7d0JBQ3RCaUQsU0FBUzs0QkFDUC9CLGtCQUFrQkQsaUJBQWlCOEMsWUFBWUQ7d0JBQ2pEO3dCQUNBRSxPQUNFO3dCQUVBO2tDQUdGLDRFQUFDdkI7NEJBQUlDLFdBQVcxQyx5RUFBZ0I7c0NBQzlCLDRFQUFDeUM7Z0NBQUlDLFdBQVcxQyx1RUFBYzs7a0RBQzVCLDhEQUFDeUM7a0RBQUt2Qyw2REFBS0EsQ0FBQyxHQUFlLE9BQVo0RCxPQUFPckMsSUFBSTs7Ozs7O29DQUN6QnFDLE9BQU9sQyxNQUFNLGtCQUFJLDhEQUFDbEIsMEZBQUtBO3dDQUFDZ0MsV0FBVzFDLHNFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWYvQzhELE9BQU9oQyxHQUFHOzs7Ozs7Ozs7OztBQXdCOUI7R0FwSlNoQjtNQUFBQTtBQXNKVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGNvbXBvbmVudHMpL1NhdmVkTm90ZXMudHN4PzlhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NhdmVkTm90ZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBpbWFnZSBmcm9tICcuLi8oYXNzZXRzKS8oaW1hZ2VzKS81LnBuZyc7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IEZpRWRpdDMsIEZpQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHsgVGJQaW4sIFRiUGlubmVkT2ZmIH0gZnJvbSAncmVhY3QtaWNvbnMvdGInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTm90ZSB7XHJcbiAgX2lkOiBudW1iZXI7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIHBpbm5lZDogYm9vbGVhbjtcclxuICBhcmNoaXZlZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBoZWlnaHQ6IDIyLjdyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2F2ZWROb3RlcygpIHtcclxuICBjb25zdCBbREJub3Rlcywgc2V0REJub3Rlc10gPSB1c2VTdGF0ZTxOb3RlW10+KFtdKTtcclxuICBjb25zdCBbREJub3RlU2VsZWN0ZWQsIHNldERCbm90ZVNlbGVjdGVkXSA9IHVzZVN0YXRlPE5vdGUgfCB1bmRlZmluZWQ+KFxyXG4gICAge30gYXMgTm90ZVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUVkaXQobm90ZTogTm90ZSkge31cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUGluKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgcGlubmVkOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVW5waW4obm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBwaW5uZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXJjaGl2ZShub3RlOiBOb3RlKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGFyY2hpdmVkOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IGRlbGV0ZVJlcXVlc3QgPSB7IG1ldGhvZDogJ0RFTEVURScgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgZGVsZXRlUmVxdWVzdFxyXG4gICAgKTtcclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9ub3Rlcy9hZGROb3RlcycpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0REJub3RlcyhkYXRhLmRhdGEubm90ZXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRsaW5lfT5cclxuICAgICAgICB7REJub3Rlcy5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNhdmVkIE5vdGVzPC9kaXY+fVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7REJub3Rlcy5sZW5ndGggPiAwICYmIERCbm90ZVNlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XHJcbiAgICAgICAgICAgICAgPEZpRWRpdDNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KERCbm90ZVNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtEQm5vdGVTZWxlY3RlZC5waW5uZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5uZWRPZmZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGlub2ZmfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVbnBpbihEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGlufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQaW4oREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxGaUFyY2hpdmVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFyY2hpdmV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcmNoaXZlKERCbm90ZVNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSaURlbGV0ZUJpbjZMaW5lXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtEQm5vdGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90ZXNDb250ZW50fT5cclxuICAgICAgICAgIDxTdHlsZWRJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhbiBpbWFnZVwiIGxheW91dD1cInJlc29uc2l2ZVwiIHByaW9yaXR5IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90ZXNUZXh0fT5cclxuICAgICAgICAgICAgTm8gc2F2ZWQgbm90ZXMgeWV0IDooICwgPGJyIC8+XHJcbiAgICAgICAgICAgIHRyeSB0byBhZGQgc29tZSB0byBtYWtlIG1lIGhhcHB5IDopXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBEQm5vdGVzLm1hcChEQm5vdGUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e0RCbm90ZS5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREQm5vdGVTZWxlY3RlZChEQm5vdGVTZWxlY3RlZCA/IHVuZGVmaW5lZCA6IERCbm90ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogREJub3RlU2VsZWN0ZWQgJiYgJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e3BhcnNlKGAke0RCbm90ZS5ib2R5fWApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7REJub3RlLnBpbm5lZCAmJiA8VGJQaW4gY2xhc3NOYW1lPXtzdHlsZXMucGlubmVkfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYXZlZE5vdGVzO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwic3R5bGVkIiwicGFyc2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiaW1hZ2UiLCJSaURlbGV0ZUJpbjZMaW5lIiwiRmlFZGl0MyIsIkZpQXJjaGl2ZSIsIlRiUGluIiwiVGJQaW5uZWRPZmYiLCJSZWFjdCIsIlN0eWxlZEltYWdlIiwiU2F2ZWROb3RlcyIsIkRCbm90ZXMiLCJzZXREQm5vdGVzIiwiREJub3RlU2VsZWN0ZWQiLCJzZXREQm5vdGVTZWxlY3RlZCIsImhhbmRsZUVkaXQiLCJub3RlIiwiaGFuZGxlUGluIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaW5uZWQiLCJmZXRjaCIsIl9pZCIsImhhbmRsZVVucGluIiwiaGFuZGxlQXJjaGl2ZSIsImFyY2hpdmVkIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlUmVxdWVzdCIsImhhbmRsZVN1Ym1pdCIsInJlcyIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaGVhZGxpbmUiLCJsZW5ndGgiLCJ0aXRsZSIsImljb25zIiwiZWRpdCIsIm9uQ2xpY2siLCJwaW5vZmYiLCJwaW4iLCJhcmNoaXZlIiwiZGVsZXRlIiwibm9Ob3Rlc0NvbnRlbnQiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm5vTm90ZXNUZXh0IiwiYnIiLCJtYXAiLCJEQm5vdGUiLCJ1bmRlZmluZWQiLCJzdHlsZSIsImNvbnRhaW5lciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(components)/SavedNotes.tsx\n"));

/***/ })

});