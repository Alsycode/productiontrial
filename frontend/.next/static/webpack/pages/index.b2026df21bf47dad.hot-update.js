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

/***/ "./component/blogSlider.js":
/*!*********************************!*\
  !*** ./component/blogSlider.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\teme1latest\\\\frontend\\\\component\\\\blogSlider.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction BlogSlider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      newsData = _useState[0],\n      setNewsData = _useState[1];\n\n  var settings = {\n    dots: false,\n    arrows: false,\n    centerMode: false,\n    slidesToShow: 3,\n    draggable: true,\n    infinite: true,\n    slidesToScroll: 1,\n    autoplay: true,\n    speed: 5000,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false,\n        centerMode: false\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true\n      }\n    }]\n  };\n\n  var fetchNewsData = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var apiUrl, bearerToken, response, data;\n      return C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              apiUrl = \"http://localhost:1337/api/latestnewsblogs?populate=*\";\n              bearerToken = \"Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b\"; // Replace with your actual access token\n\n              _context.prev = 2;\n              _context.next = 5;\n              return fetch(apiUrl, {\n                headers: {\n                  Authorization: bearerToken\n                }\n              });\n\n            case 5:\n              response = _context.sent;\n\n              if (response.ok) {\n                _context.next = 8;\n                break;\n              }\n\n              throw new Error(\"Failed to fetch data.\");\n\n            case 8:\n              _context.next = 10;\n              return response.json();\n\n            case 10:\n              data = _context.sent;\n              setNewsData(data.data); // Update state with fetched data\n\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(\"Error fetching data:\", _context.t0);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 14]]);\n    }));\n\n    return function fetchNewsData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchNewsData();\n  }, []); // Fetch data on component mount\n\n  var renderArrows = function renderArrows() {// Your arrow rendering logic...\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary\",\n      style: {\n        \"position\": \"relative\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread(_objectSpread({}, settings), {}, {\n        children: newsData.map(function (news) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"item wow fadeInUp\",\n            \"data-wow-duration\": \"2s\",\n            \"data-wow-delay\": \"0.2s\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"dlab-blog style-1 bg-white text-center\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                className: \"dlab-media\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n                  src: news.attributes.newsimage.data.attributes.formats.medium.url,\n                  alt: \"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                className: \"dlab-info\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h5\", {\n                  className: \"dlab-title\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/blog-details/\".concat(news.id),\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                      children: news.attributes.heading\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 45\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 82,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                  className: \"m-b0\",\n                  children: news.attributes.explaination\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                  className: \"dlab-meta meta-bottom\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                      className: \"post-date\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"i\", {\n                        className: \"flaticon-clock m-r10\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 93,\n                        columnNumber: 49\n                      }, _this), news.attributes.publishedAt]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 92,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                      className: \"post-comment\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"i\", {\n                          className: \"flaticon-speech-bubble\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 98,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n                          children: news.attributes.comments\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 99,\n                          columnNumber: 53\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 97,\n                        columnNumber: 49\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 96,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                      className: \"post-share\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"i\", {\n                        className: \"flaticon-share\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 103,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {}, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 104,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 102,\n                      columnNumber: 45\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 29\n            }, _this)\n          }, news.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, this), renderArrows()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(BlogSlider, \"6YrLogOIIv2MkCPvnuOWZYhRk1I=\");\n\n_c = BlogSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQ0k7QUFBRyxtQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQUVJO0FBQUEsb0NBQU9ULElBQUksQ0FBQ0MsVUFBTCxDQUFnQlM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKLGVBV0k7QUFBSSwrQkFBUyxFQUFDLFlBQWQ7QUFBQSw4Q0FDSTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVVYsSUFBSSxDQUFDTSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBMkNLUixZQUFZLEVBM0NqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlESDs7R0FsSFE1Qjs7S0FBQUE7QUFvSFQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jsb2dTbGlkZXIuanM/ZDQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZnVuY3Rpb24gQmxvZ1NsaWRlcigpIHtcclxuICAgIGNvbnN0IFtuZXdzRGF0YSwgc2V0TmV3c0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6NTAwMCxcclxuXHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHQgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcblx0XHRcdCAgc2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdFx0Y2VudGVyTW9kZTpmYWxzZSxcclxuXHRcdFx0ICB9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0ICBicmVha3BvaW50OiA3NjcsXHJcblx0XHRcdCAgc2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdFx0XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFxyXG5cdFx0XVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmZXRjaE5ld3NEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sYXRlc3RuZXdzYmxvZ3M/cG9wdWxhdGU9KlwiO1xyXG4gICAgICAgIGNvbnN0IGJlYXJlclRva2VuID0gXCJCZWFyZXIgOTI2MjZjMzFmNGQwNjE2NDNlZGZlZmJhMzY0NGViNTNkMjVlZmI5MDhkNmJlZThhN2I1NTBjMDIwMDA5MjdhZTEyYWIyODk0NjljYTNiZmJlYjc5OTYwNjExNWViYzM1NTZlMjAyMDcxNzY3Y2RlMTVjMDNiMTRhODM1ZjdmZjcyOWYyZGRjODk3YmJhM2JmNGNjODgyNTA3OTE0NGUxZjVlODk4MGZjMGYzYTIwZThmNDgxNTA4ZTgzMjM1M2NkOGVjZjg3YTExMWZkYjE5Yjk0NzY3MDc0YmMxMTFjYTQ0ZTc5NDQ5MmRjNzJhZjMwNTI1YzM5YWEzNjE0NDk3YlwiOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgYWNjZXNzIHRva2VuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYmVhcmVyVG9rZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldE5ld3NEYXRhKGRhdGEuZGF0YSk7IC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIGZldGNoZWQgZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoTmV3c0RhdGEoKTtcclxuICAgIH0sIFtdKTsgLy8gRmV0Y2ggZGF0YSBvbiBjb21wb25lbnQgbW91bnRcclxuXHJcbiAgICBjb25zdCByZW5kZXJBcnJvd3MgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gWW91ciBhcnJvdyByZW5kZXJpbmcgbG9naWMuLi5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2Fyb3VzZWwxIG93bC1idG4tMSBvd2wtYnRuLWNlbnRlci1sciAgb3dsLWJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge25ld3NEYXRhLm1hcCgobmV3cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmV3cy5pZH0gY2xhc3NOYW1lPVwiaXRlbSB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItYmxvZyBzdHlsZS0xIGJnLXdoaXRlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmF0dHJpYnV0ZXMubmV3c2ltYWdlLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzLm1lZGl1bS51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRsYWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy1kZXRhaWxzLyR7bmV3cy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmV3cy5hdHRyaWJ1dGVzLmhlYWRpbmd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5hdHRyaWJ1dGVzLmV4cGxhaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQXNzdW1pbmcgeW91IGhhdmUgJ3B1Ymxpc2hlZEF0JywgJ2NvbW1lbnRzJywgYW5kIHNvY2lhbCBtZWRpYSBzaGFyZSBsaW5rcyBpbiAnbmV3cy5hdHRyaWJ1dGVzJyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLW1ldGEgbWV0YS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNsb2NrIG0tcjEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5hdHRyaWJ1dGVzLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3QtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3BlZWNoLWJ1YmJsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXdzLmF0dHJpYnV0ZXMuY29tbWVudHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1zaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaGFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFlvdXIgc29jaWFsIG1lZGlhIHNoYXJlIGxpbmtzLi4uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckFycm93cygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTbGlkZXIiLCJCbG9nU2xpZGVyIiwibmV3c0RhdGEiLCJzZXROZXdzRGF0YSIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImNlbnRlck1vZGUiLCJzbGlkZXNUb1Nob3ciLCJkcmFnZ2FibGUiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJzcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZmV0Y2hOZXdzRGF0YSIsImFwaVVybCIsImJlYXJlclRva2VuIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwicmVuZGVyQXJyb3dzIiwibWFwIiwibmV3cyIsImF0dHJpYnV0ZXMiLCJuZXdzaW1hZ2UiLCJmb3JtYXRzIiwibWVkaXVtIiwidXJsIiwiaWQiLCJoZWFkaW5nIiwiZXhwbGFpbmF0aW9uIiwicHVibGlzaGVkQXQiLCJjb21tZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/blogSlider.js\n");

/***/ })

});