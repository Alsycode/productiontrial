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

/***/ "./component/teamSlider.js":
/*!*********************************!*\
  !*** ./component/teamSlider.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\teme1latest\\\\frontend\\\\component\\\\teamSlider.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction TeamSlider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1]; // State to store the fetched data\n\n\n  var apiUrl = 'https://testgoood.onrender.com/api/blogs?populate=*';\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var bearerToken = 'd89f936b096cfa24d62d35c1392d9b79aeacef58beb41b93b02c1900822a140bc92f3bb85fb8267a7e6ffb37f1e1eef56164461dd1d3c5e96e21012c0f153fc67a53e61e12049239a15b6fa5bbdfbcf225623a9ada50aa42d9e1b6e1c7c60baaf8f0a2f42a830c6e95dbb23bd4d8ec89f14f3ba427e3e82f1254237904e6d46d'; // Replace with your actual Bearer token\n\n    var fetchBlogs = /*#__PURE__*/function () {\n      var _ref = (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n        var res, jsonData;\n        return C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch(apiUrl, {\n                  headers: {\n                    Authorization: \"Bearer \".concat(bearerToken)\n                  }\n                });\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                jsonData = _context.sent;\n\n                // Check if the fetched data is an array before setting it to the state\n                if (Array.isArray(jsonData.data)) {\n                  setData(jsonData.data.map(function (item) {\n                    return item.attributes;\n                  })); // Extract the 'attributes' field from the API response\n                } else {\n                  console.error('Error fetching data: Data is not an array');\n                }\n\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                console.error('Error fetching data:', _context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function fetchBlogs() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchBlogs();\n  }, []); // Configuration settings for the react-slick Slider component\n\n  var settings = {\n    dots: true,\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 3,\n    autoplay: false,\n    arrows: false,\n    speed: 5000,\n    responsive: [{\n      breakpoint: 1000,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false\n      }\n    }]\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, settings), {}, {\n      className: \"team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full\",\n      children: data.length > 0 ? // Mapping over the 'data' state and rendering each blog item as a slide\n      data.map(function (blog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"item wow fadeInUp\",\n          \"data-wow-duration\": \"2s\",\n          \"data-wow-delay\": \"0.1s\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"dlab-team style-1 m-b10\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"dlab-media\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                width: 400,\n                height: 400,\n                src: blog.photo.data.attributes.formats.small.url,\n                alt: blog.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"dlab-content\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                className: \"clearfix\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h4\", {\n                  className: \"dlab-name\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                    href: \"/team-1\",\n                    children: blog.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n                  className: \"dlab-position\",\n                  children: \"Senior Designer\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n                className: \"dlab-social-icon primary-light\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                    href: \"https://en-gb.facebook.com/\",\n                    className: \"fa fa-facebook\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 104,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                    href: \"https://www.instagram.com/\",\n                    className: \"fa fa-instagram\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 107,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                    href: \"https://twitter.com/login?lang=en\",\n                    className: \"fa fa-twitter\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 110,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 109,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 17\n            }, _this)]\n          }, blog.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 15\n          }, _this)\n        }, blog.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this);\n      }) :\n      /*#__PURE__*/\n      // If the 'data' state is empty, render a loading message\n      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(TeamSlider, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = TeamSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"TeamSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQUFJLEVBQUMsNkJBQVI7QUFBc0MsNkJBQVMsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQUEseUNBQ0U7QUFBRyx3QkFBSSxFQUFDLDRCQUFSO0FBQXFDLDZCQUFTLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFPRTtBQUFBLHlDQUNFO0FBQUcsd0JBQUksRUFBQyxtQ0FBUjtBQUE0Qyw2QkFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQSxhQUE4Q0wsSUFBSSxDQUFDTSxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBd0NOLElBQUksQ0FBQ00sRUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVQsQ0FGRDtBQUFBO0FBdUNDO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBaUREOztHQXZIUXBDOztLQUFBQTtBQXlIVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvdGVhbVNsaWRlci5qcz8xN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmZ1bmN0aW9uIFRlYW1TbGlkZXIoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgZmV0Y2hlZCBkYXRhXHJcbiAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vdGVzdGdvb29kLm9ucmVuZGVyLmNvbS9hcGkvYmxvZ3M/cG9wdWxhdGU9Kic7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBiZWFyZXJUb2tlbiA9ICdkODlmOTM2YjA5NmNmYTI0ZDYyZDM1YzEzOTJkOWI3OWFlYWNlZjU4YmViNDFiOTNiMDJjMTkwMDgyMmExNDBiYzkyZjNiYjg1ZmI4MjY3YTdlNmZmYjM3ZjFlMWVlZjU2MTY0NDYxZGQxZDNjNWU5NmUyMTAxMmMwZjE1M2ZjNjdhNTNlNjFlMTIwNDkyMzlhMTViNmZhNWJiZGZiY2YyMjU2MjNhOWFkYTUwYWE0MmQ5ZTFiNmUxYzdjNjBiYWFmOGYwYTJmNDJhODMwYzZlOTVkYmIyM2JkNGQ4ZWM4OWYxNGYzYmE0MjdlM2U4MmYxMjU0MjM3OTA0ZTZkNDZkJzsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIEJlYXJlciB0b2tlblxyXG5cclxuICAgIGNvbnN0IGZldGNoQmxvZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJUb2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBmZXRjaGVkIGRhdGEgaXMgYW4gYXJyYXkgYmVmb3JlIHNldHRpbmcgaXQgdG8gdGhlIHN0YXRlXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuZGF0YSkpIHtcclxuICAgICAgICAgIHNldERhdGEoanNvbkRhdGEuZGF0YS5tYXAoaXRlbSA9PiBpdGVtLmF0dHJpYnV0ZXMpKTsgLy8gRXh0cmFjdCB0aGUgJ2F0dHJpYnV0ZXMnIGZpZWxkIGZyb20gdGhlIEFQSSByZXNwb25zZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOiBEYXRhIGlzIG5vdCBhbiBhcnJheScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaEJsb2dzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBDb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGUgcmVhY3Qtc2xpY2sgU2xpZGVyIGNvbXBvbmVudFxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDUwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBSZWFjdC1TbGljayBTbGlkZXIgY29tcG9uZW50ICovfVxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwidGVhbS1jYXJvdXNlbDEgb3dsIG93bC1jYXJvdXNlbCBvd2wtbm9uZSBvd2wtdGhlbWUgb3dsLWRvdHMtcHJpbWFyeS1mdWxsXCI+XHJcbiAgICAgICAge2RhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIC8vIE1hcHBpbmcgb3ZlciB0aGUgJ2RhdGEnIHN0YXRlIGFuZCByZW5kZXJpbmcgZWFjaCBibG9nIGl0ZW0gYXMgYSBzbGlkZVxyXG4gICAgICAgICAgZGF0YS5tYXAoKGJsb2cpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtIHdvdyBmYWRlSW5VcFwiIGtleT17YmxvZy5pZH0gZGF0YS13b3ctZHVyYXRpb249XCIyc1wiIGRhdGEtd293LWRlbGF5PVwiMC4xc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi10ZWFtIHN0eWxlLTEgbS1iMTBcIiBrZXk9e2Jsb2cuaWR9PlxyXG4gICAgICAgICAgICAgICAgey8qIFJlbmRlcmluZyB0aGUgYmxvZyBwaG90byB1c2luZyBOZXh0LmpzIEltYWdlIGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YmxvZy5waG90by5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy5zbWFsbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJlbmRlcmluZyBibG9nIHRpdGxlIGFuZCBwb3NpdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGxhYi1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3RlYW0tMVwiPntibG9nLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRsYWItcG9zaXRpb25cIj5TZW5pb3IgRGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogUmVuZGVyaW5nIHNvY2lhbCBtZWRpYSBpY29ucyAqL31cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRsYWItc29jaWFsLWljb24gcHJpbWFyeS1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi1nYi5mYWNlYm9vay5jb20vXCIgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sb2dpbj9sYW5nPWVuXCIgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgLy8gSWYgdGhlICdkYXRhJyBzdGF0ZSBpcyBlbXB0eSwgcmVuZGVyIGEgbG9hZGluZyBtZXNzYWdlXHJcbiAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbVNsaWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2xpZGVyIiwiSW1hZ2UiLCJUZWFtU2xpZGVyIiwiZGF0YSIsInNldERhdGEiLCJhcGlVcmwiLCJiZWFyZXJUb2tlbiIsImZldGNoQmxvZ3MiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzIiwianNvbiIsImpzb25EYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImF0dHJpYnV0ZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJzcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVuZ3RoIiwiYmxvZyIsInBob3RvIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/teamSlider.js\n");

/***/ })

});