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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SavedNotes.module.css */ \"(app-pages-browser)/./app/(components)/SavedNotes.module.css\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../(assets)/(images)/5.png */ \"(app-pages-browser)/./app/(assets)/(images)/5.png\");\n/* harmony import */ var _barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=RiDeleteBin6Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FiArchive,FiEdit3!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TbPin,TbPinnedOff!=!react-icons/tb */ \"(app-pages-browser)/./node_modules/react-icons/tb/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 30rem;\\n  height: 22.7rem;\\n\\n  @media (max-width: 55em) {\\n    width: 40rem;\\n    height: 29rem;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst StyledImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n_c = StyledImage;\nfunction SavedNotes() {\n    _s();\n    const [DBnotes, setDBnotes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [DBnoteSelected, setDBnoteSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [selectedNote, setSelectedNote] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    function handleEdit(item) {}\n    async function handlePin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: true\n            })\n        };\n        await fetch(\"http://localhost:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleUnpin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: false\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleArchive(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                archived: true\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleDelete(note) {\n        const deleteRequest = {\n            method: \"DELETE\"\n        };\n        await fetch(\"http://127.0.0.1:5000/notes/addNotes/\".concat(note._id), deleteRequest);\n        setDBnoteSelected({});\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function handleSubmit() {\n            const res = await fetch(\"http://127.0.0.1:5000/notes/addNotes\");\n            const data = await res.json();\n            setDBnotes(data.data.notes);\n        }\n        handleSubmit();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().headline),\n                children: [\n                    DBnotes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Saved Notes\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 32\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: DBnotes.length > 0 && DBnoteSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().icons),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiEdit3, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().edit),\n                                    onClick: ()=>handleEdit(selectedNote)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this),\n                                DBnoteSelected.pinned ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPinnedOff, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinoff),\n                                    onClick: ()=>handleUnpin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pin),\n                                    onClick: ()=>handlePin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiArchive, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().archive),\n                                    onClick: ()=>handleArchive(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__.RiDeleteBin6Line, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"]),\n                                    onClick: ()=>handleDelete(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            DBnotes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesImage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                        src: _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"an image\",\n                        layout: \"resonsive\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesText),\n                        children: [\n                            \"No saved notes yet :( , \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 37\n                            }, this),\n                            \"try to add some to make me happy :)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, this) : DBnotes.map((DBnote)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        onClick: ()=>{\n                            setDBnoteSelected(DBnoteSelected ? undefined : DBnote);\n                        },\n                        style: {\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(DBnote.body))\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 19\n                                    }, this),\n                                    DBnote.pinned && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinned)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 172,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 169,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 13\n                    }, this)\n                }, DBnote._id, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                    lineNumber: 157,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s(SavedNotes, \"zsmfb6BOvKfeCJxuvgRcBepeLG4=\");\n_c1 = SavedNotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavedNotes);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledImage\");\n$RefreshReg$(_c1, \"SavedNotes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29tcG9uZW50cykvU2F2ZWROb3Rlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTjtBQUNEO0FBQ007QUFDYjtBQUNnQjtBQUNHO0FBQ0U7QUFDQTtBQUNyQjtBQVUvQixNQUFNYSxjQUFjWiw2REFBTUEsQ0FBQ0ksa0RBQUtBO0tBQTFCUTtBQVVOLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBUyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQ2xELENBQUM7SUFFSCxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFakQsU0FBU2lCLFdBQVdDLElBQWEsR0FBRztJQUVwQyxlQUFlQyxVQUFVQyxJQUFVO1FBQ2pDLE1BQU1DLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxRQUFRO1lBQ1Y7UUFDRjtRQUNBLE1BQU1DLE1BQ0osd0NBQWlELE9BQVRSLEtBQUtTLEdBQUcsR0FDaERSO1FBR0ZQLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUEsZUFBZWdCLFlBQVlWLElBQVU7UUFDbkMsTUFBTUMsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLFFBQVE7WUFDVjtRQUNGO1FBQ0EsTUFBTUMsTUFDSix3Q0FBaUQsT0FBVFIsS0FBS1MsR0FBRyxHQUNoRFI7UUFHRlAsa0JBQWtCLENBQUM7SUFDckI7SUFFQSxlQUFlaUIsY0FBY1gsSUFBVTtRQUNyQyxNQUFNQyxpQkFBaUI7WUFDckJDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQk0sVUFBVTtZQUNaO1FBQ0Y7UUFDQSxNQUFNSixNQUNKLHdDQUFpRCxPQUFUUixLQUFLUyxHQUFHLEdBQ2hEUjtRQUdGUCxrQkFBa0IsQ0FBQztJQUNyQjtJQUVBLGVBQWVtQixhQUFhYixJQUFVO1FBQ3BDLE1BQU1jLGdCQUFnQjtZQUFFWixRQUFRO1FBQVM7UUFDekMsTUFBTU0sTUFDSix3Q0FBaUQsT0FBVFIsS0FBS1MsR0FBRyxHQUNoREs7UUFFRnBCLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZW9DO1lBQ2IsTUFBTUMsTUFBTSxNQUFNUixNQUFNO1lBQ3hCLE1BQU1TLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtZQUMzQjFCLFdBQVd5QixLQUFLQSxJQUFJLENBQUNFLEtBQUs7UUFDNUI7UUFDQUo7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXN0MsdUVBQWM7OzBCQUM1Qiw4REFBQzRDO2dCQUFJQyxXQUFXN0Msd0VBQWU7O29CQUM1QmUsUUFBUWlDLE1BQU0sR0FBRyxtQkFBSyw4REFBQ0o7d0JBQUlDLFdBQVc3QyxxRUFBWTtrQ0FBRTs7Ozs7O2tDQUNyRCw4REFBQzRDO2tDQUNFN0IsUUFBUWlDLE1BQU0sR0FBRyxLQUFLL0IsZ0NBQ3JCLDhEQUFDMkI7NEJBQUlDLFdBQVc3QyxxRUFBWTs7OENBQzFCLDhEQUFDUSw0RkFBT0E7b0NBQ05xQyxXQUFXN0Msb0VBQVc7b0NBQ3RCb0QsU0FBUyxJQUFNL0IsV0FBV0Y7Ozs7OztnQ0FFM0JGLGVBQWVjLE1BQU0saUJBQ3BCLDhEQUFDcEIsZ0dBQVdBO29DQUNWa0MsV0FBVzdDLHNFQUFhO29DQUN4Qm9ELFNBQVMsSUFBTWxCLFlBQVlqQjs7Ozs7eURBRzdCLDhEQUFDUCwwRkFBS0E7b0NBQ0ptQyxXQUFXN0MsbUVBQVU7b0NBQ3JCb0QsU0FBUyxJQUFNN0IsVUFBVU47Ozs7Ozs4Q0FHN0IsOERBQUNSLDhGQUFTQTtvQ0FDUm9DLFdBQVc3Qyx1RUFBYztvQ0FDekJvRCxTQUFTLElBQU1qQixjQUFjbEI7Ozs7Ozs4Q0FFL0IsOERBQUNWLHFHQUFnQkE7b0NBQ2ZzQyxXQUFXN0MseUVBQWE7b0NBQ3hCb0QsU0FBUyxJQUFNZixhQUFhcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXJDRixRQUFRaUMsTUFBTSxLQUFLLGtCQUNsQiw4REFBQ0o7Z0JBQUlDLFdBQVc3Qyw0RUFBbUI7O2tDQUNqQyw4REFBQ2E7d0JBQVk2QyxLQUFLcEQsNERBQUtBO3dCQUFFcUQsS0FBSTt3QkFBV0MsUUFBTzt3QkFBWUMsUUFBUTs7Ozs7O2tDQUNuRSw4REFBQ2pCO3dCQUFJQyxXQUFXN0MsMkVBQWtCOzs0QkFBRTswQ0FDViw4REFBQytEOzs7Ozs0QkFBSzs7Ozs7Ozs7Ozs7O3VCQUtsQ2hELFFBQVFpRCxHQUFHLENBQUNDLENBQUFBLHVCQUNWLDhEQUFDckI7OEJBQ0MsNEVBQUNBO3dCQUNDQyxXQUFXN0Msb0VBQVc7d0JBQ3RCb0QsU0FBUzs0QkFDUGxDLGtCQUFrQkQsaUJBQWlCaUQsWUFBWUQ7d0JBQ2pEO3dCQUNBRSxPQUNFO3dCQUVBO2tDQUdGLDRFQUFDdkI7NEJBQUlDLFdBQVc3Qyx5RUFBZ0I7c0NBQzlCLDRFQUFDNEM7Z0NBQUlDLFdBQVc3Qyx1RUFBYzs7a0RBQzVCLDhEQUFDNEM7a0RBQUsxQyw2REFBS0EsQ0FBQyxHQUFlLE9BQVorRCxPQUFPckMsSUFBSTs7Ozs7O29DQUN6QnFDLE9BQU9sQyxNQUFNLGtCQUFJLDhEQUFDckIsMEZBQUtBO3dDQUFDbUMsV0FBVzdDLHNFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWYvQ2lFLE9BQU9oQyxHQUFHOzs7Ozs7Ozs7OztBQXdCOUI7R0FySlNuQjtNQUFBQTtBQXVKVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGNvbXBvbmVudHMpL1NhdmVkTm90ZXMudHN4PzlhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NhdmVkTm90ZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBpbWFnZSBmcm9tICcuLi8oYXNzZXRzKS8oaW1hZ2VzKS81LnBuZyc7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IEZpRWRpdDMsIEZpQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHsgVGJQaW4sIFRiUGlubmVkT2ZmIH0gZnJvbSAncmVhY3QtaWNvbnMvdGInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTm90ZSB7XHJcbiAgX2lkOiBudW1iZXI7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIHBpbm5lZDogYm9vbGVhbjtcclxuICBhcmNoaXZlZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBoZWlnaHQ6IDIyLjdyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBoZWlnaHQ6IDI5cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNhdmVkTm90ZXMoKSB7XHJcbiAgY29uc3QgW0RCbm90ZXMsIHNldERCbm90ZXNdID0gdXNlU3RhdGU8Tm90ZVtdPihbXSk7XHJcbiAgY29uc3QgW0RCbm90ZVNlbGVjdGVkLCBzZXREQm5vdGVTZWxlY3RlZF0gPSB1c2VTdGF0ZTxOb3RlIHwgdW5kZWZpbmVkPihcclxuICAgIHt9IGFzIE5vdGVcclxuICApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5vdGUsIHNldFNlbGVjdGVkTm90ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdChpdGVtOiBib29sZWFuKSB7fVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVQaW4obm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBwaW5uZWQ6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVbnBpbihub3RlOiBOb3RlKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBpbm5lZDogZmFsc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBcmNoaXZlKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYXJjaGl2ZWQ6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUobm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgZGVsZXRlUmVxdWVzdCA9IHsgbWV0aG9kOiAnREVMRVRFJyB9O1xyXG4gICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvbm90ZXMvYWRkTm90ZXMvJHtub3RlLl9pZH1gLFxyXG4gICAgICBkZWxldGVSZXF1ZXN0XHJcbiAgICApO1xyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL25vdGVzL2FkZE5vdGVzJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXREQm5vdGVzKGRhdGEuZGF0YS5ub3Rlcyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGxpbmV9PlxyXG4gICAgICAgIHtEQm5vdGVzLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+U2F2ZWQgTm90ZXM8L2Rpdj59XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtEQm5vdGVzLmxlbmd0aCA+IDAgJiYgREJub3RlU2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cclxuICAgICAgICAgICAgICA8RmlFZGl0M1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoc2VsZWN0ZWROb3RlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtEQm5vdGVTZWxlY3RlZC5waW5uZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5uZWRPZmZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGlub2ZmfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVbnBpbihEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGlufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQaW4oREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxGaUFyY2hpdmVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFyY2hpdmV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcmNoaXZlKERCbm90ZVNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSaURlbGV0ZUJpbjZMaW5lXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtEQm5vdGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90ZXNJbWFnZX0+XHJcbiAgICAgICAgICA8U3R5bGVkSW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYW4gaW1hZ2VcIiBsYXlvdXQ9XCJyZXNvbnNpdmVcIiBwcmlvcml0eSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub05vdGVzVGV4dH0+XHJcbiAgICAgICAgICAgIE5vIHNhdmVkIG5vdGVzIHlldCA6KCAsIDxiciAvPlxyXG4gICAgICAgICAgICB0cnkgdG8gYWRkIHNvbWUgdG8gbWFrZSBtZSBoYXBweSA6KVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgREJub3Rlcy5tYXAoREJub3RlID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtEQm5vdGUuX2lkfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vdGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0REJub3RlU2VsZWN0ZWQoREJub3RlU2VsZWN0ZWQgPyB1bmRlZmluZWQgOiBEQm5vdGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IERCbm90ZVNlbGVjdGVkICYmICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PntwYXJzZShgJHtEQm5vdGUuYm9keX1gKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge0RCbm90ZS5waW5uZWQgJiYgPFRiUGluIGNsYXNzTmFtZT17c3R5bGVzLnBpbm5lZH0gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2F2ZWROb3RlcztcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInN0eWxlZCIsInBhcnNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImltYWdlIiwiUmlEZWxldGVCaW42TGluZSIsIkZpRWRpdDMiLCJGaUFyY2hpdmUiLCJUYlBpbiIsIlRiUGlubmVkT2ZmIiwiUmVhY3QiLCJTdHlsZWRJbWFnZSIsIlNhdmVkTm90ZXMiLCJEQm5vdGVzIiwic2V0REJub3RlcyIsIkRCbm90ZVNlbGVjdGVkIiwic2V0REJub3RlU2VsZWN0ZWQiLCJzZWxlY3RlZE5vdGUiLCJzZXRTZWxlY3RlZE5vdGUiLCJoYW5kbGVFZGl0IiwiaXRlbSIsImhhbmRsZVBpbiIsIm5vdGUiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBpbm5lZCIsImZldGNoIiwiX2lkIiwiaGFuZGxlVW5waW4iLCJoYW5kbGVBcmNoaXZlIiwiYXJjaGl2ZWQiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVSZXF1ZXN0IiwiaGFuZGxlU3VibWl0IiwicmVzIiwiZGF0YSIsImpzb24iLCJub3RlcyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoZWFkbGluZSIsImxlbmd0aCIsInRpdGxlIiwiaWNvbnMiLCJlZGl0Iiwib25DbGljayIsInBpbm9mZiIsInBpbiIsImFyY2hpdmUiLCJkZWxldGUiLCJub05vdGVzSW1hZ2UiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm5vTm90ZXNUZXh0IiwiYnIiLCJtYXAiLCJEQm5vdGUiLCJ1bmRlZmluZWQiLCJzdHlsZSIsImNvbnRhaW5lciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(components)/SavedNotes.tsx\n"));

/***/ })

});