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

/***/ "./component/clientSlider.js":
/*!***********************************!*\
  !*** ./component/clientSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\teme1latest\\\\frontend\\\\component\\\\clientSlider.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // Importing the react-slick library\n\n // Importing the Next.js Image component\n\n // Importing React hooks\n\n\n\n\nfunction ClientSlider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1]; // State to store the fetched data\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    var apiUrl = 'http://localhost:1337/api/clients?populate=*'; // Replace with your API URL\n\n    var fetchClients = /*#__PURE__*/function () {\n      var _ref = (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n        var bearerToken, res, jsonData;\n        return C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                bearerToken = '92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b'; // Replace with your actual Bearer token\n\n                _context.next = 4;\n                return fetch(apiUrl, {\n                  headers: {\n                    Authorization: \"Bearer \".concat(bearerToken)\n                  }\n                });\n\n              case 4:\n                res = _context.sent;\n                _context.next = 7;\n                return res.json();\n\n              case 7:\n                jsonData = _context.sent;\n\n                // Check if the fetched data is an array before setting it to the state\n                if (Array.isArray(jsonData.data)) {\n                  setData(jsonData.data.map(function (item) {\n                    return item.attributes;\n                  })); // Extract the 'attributes' field from the API response\n                } else {\n                  console.error('Error fetching data: Data is not an array');\n                }\n\n                _context.next = 14;\n                break;\n\n              case 11:\n                _context.prev = 11;\n                _context.t0 = _context[\"catch\"](0);\n                console.error('Error fetching data:', _context.t0);\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 11]]);\n      }));\n\n      return function fetchClients() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchClients();\n  }, []); // Configuration settings for the react-slick Slider component\n\n  var settings = {\n    dots: false,\n    infinite: true,\n    slidesToShow: 6,\n    slidesToScroll: 1,\n    autoplay: true,\n    // Enable auto-sliding\n    autoplaySpeed: 2000,\n    // Set the slide duration in milliseconds (optional)\n    speed: 2000,\n    arrows: true,\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        slidesToShow: 4,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }]\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread(_objectSpread({}, settings), {}, {\n      children: data.length > 0 ? // Mapping over the 'data' state and rendering each client logo\n      data.map(function (client) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"item\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"clients-logo\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"logo-main\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: client.clientlogo.data.attributes.formats.large.url,\n                alt: \"\",\n                width: 100,\n                height: 100\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"logo-hover\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: client.clientlogo.data.attributes.formats.thumbnail.url,\n                alt: \"\",\n                width: 100,\n                height: 100\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this)\n        }, client.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this);\n      }) :\n      /*#__PURE__*/\n      // Render a loading message while data is being fetched\n      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(ClientSlider, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = ClientSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"ClientSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvY2xpZW50U2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWtDOztDQUNGOztDQUNhOzs7OztBQUU3QyxTQUFTSSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT0csSUFBUDtBQUFBLE1BQWFDLE9BQWIsZ0JBRHNCLENBQ2dCOzs7QUFFdENILEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1JLE1BQU0sR0FBRyw4Q0FBZixDQURjLENBQ2lEOztBQUUvRCxRQUFNQyxZQUFZO0FBQUEsd1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEMsZ0JBQUFBLFdBRlcsR0FFRyxrUUFGSCxFQUV1UTs7QUFGdlE7QUFBQSx1QkFJQ0MsS0FBSyxDQUFDSCxNQUFELEVBQVM7QUFDOUJJLGtCQUFBQSxPQUFPLEVBQUU7QUFDUEMsb0JBQUFBLGFBQWEsbUJBQVlILFdBQVo7QUFETjtBQURxQixpQkFBVCxDQUpOOztBQUFBO0FBSVhJLGdCQUFBQSxHQUpXO0FBQUE7QUFBQSx1QkFTTUEsR0FBRyxDQUFDQyxJQUFKLEVBVE47O0FBQUE7QUFTWEMsZ0JBQUFBLFFBVFc7O0FBV2pCO0FBQ0Esb0JBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFRLENBQUNWLElBQXZCLENBQUosRUFBa0M7QUFDaENDLGtCQUFBQSxPQUFPLENBQUNTLFFBQVEsQ0FBQ1YsSUFBVCxDQUFjYSxHQUFkLENBQWtCLFVBQUFDLElBQUk7QUFBQSwyQkFBSUEsSUFBSSxDQUFDQyxVQUFUO0FBQUEsbUJBQXRCLENBQUQsQ0FBUCxDQURnQyxDQUNxQjtBQUN0RCxpQkFGRCxNQUVPO0FBQ0xDLGtCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywyQ0FBZDtBQUNEOztBQWhCZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQmpCRCxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7O0FBbEJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaZCxZQUFZO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQXNCQUEsSUFBQUEsWUFBWTtBQUNiLEdBMUJRLEVBMEJOLEVBMUJNLENBQVQsQ0FIc0IsQ0ErQnRCOztBQUNBLE1BQU1lLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxJQUFJLEVBQUUsS0FEUztBQUVmQyxJQUFBQSxRQUFRLEVBQUUsSUFGSztBQUdmQyxJQUFBQSxZQUFZLEVBQUUsQ0FIQztBQUlmQyxJQUFBQSxjQUFjLEVBQUUsQ0FKRDtBQUtmQyxJQUFBQSxRQUFRLEVBQUUsSUFMSztBQUtDO0FBQ2hCQyxJQUFBQSxhQUFhLEVBQUUsSUFOQTtBQU1NO0FBQ3JCQyxJQUFBQSxLQUFLLEVBQUUsSUFQUTtBQVFmQyxJQUFBQSxNQUFNLEVBQUUsSUFSTztBQVNmQyxJQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFQyxNQUFBQSxVQUFVLEVBQUUsSUFEZDtBQUVFVixNQUFBQSxRQUFRLEVBQUU7QUFDUkcsUUFBQUEsWUFBWSxFQUFFLENBRE47QUFFUkMsUUFBQUEsY0FBYyxFQUFFO0FBRlI7QUFGWixLQURVLEVBUVY7QUFDRU0sTUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRVYsTUFBQUEsUUFBUSxFQUFFO0FBQ1JHLFFBQUFBLFlBQVksRUFBRSxDQUROO0FBRVJDLFFBQUFBLGNBQWMsRUFBRTtBQUZSO0FBRlosS0FSVSxFQWVWO0FBQ0VNLE1BQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVWLE1BQUFBLFFBQVEsRUFBRTtBQUNSRyxRQUFBQSxZQUFZLEVBQUUsQ0FETjtBQUVSQyxRQUFBQSxjQUFjLEVBQUU7QUFGUjtBQUZaLEtBZlU7QUFURyxHQUFqQjtBQWtDQSxzQkFDRTtBQUFBLDJCQUVFLDhEQUFDLG1EQUFELGtDQUFZSixRQUFaO0FBQUEsZ0JBQ0dsQixJQUFJLENBQUM2QixNQUFMLEdBQWMsQ0FBZCxHQUNDO0FBQ0E3QixNQUFBQSxJQUFJLENBQUNhLEdBQUwsQ0FBUyxVQUFDaUIsTUFBRDtBQUFBLDRCQUNQO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FFRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQUcsRUFBRUEsTUFBTSxDQUFDQyxVQUFQLENBQWtCL0IsSUFBbEIsQ0FBdUJlLFVBQXZCLENBQWtDaUIsT0FBbEMsQ0FBMENDLEtBQTFDLENBQWdEQyxHQUR2RDtBQUVFLG1CQUFHLEVBQUMsRUFGTjtBQUdFLHFCQUFLLEVBQUUsR0FIVDtBQUlFLHNCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVdFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBRyxFQUFFSixNQUFNLENBQUNDLFVBQVAsQ0FBa0IvQixJQUFsQixDQUF1QmUsVUFBdkIsQ0FBa0NpQixPQUFsQyxDQUEwQ0csU0FBMUMsQ0FBb0RELEdBRDNEO0FBRUUsbUJBQUcsRUFBQyxFQUZOO0FBR0UscUJBQUssRUFBRSxHQUhUO0FBSUUsc0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTJCSixNQUFNLENBQUNNLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFULENBRkQ7QUFBQTtBQTJCQztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQXFDRDs7R0F2R1FyQzs7S0FBQUE7QUF5R1QsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NsaWVudFNsaWRlci5qcz82MDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7IC8vIEltcG9ydGluZyB0aGUgcmVhY3Qtc2xpY2sgbGlicmFyeVxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gSW1wb3J0aW5nIHRoZSBOZXh0LmpzIEltYWdlIGNvbXBvbmVudFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLyBJbXBvcnRpbmcgUmVhY3QgaG9va3NcclxuXHJcbmZ1bmN0aW9uIENsaWVudFNsaWRlcigpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBmZXRjaGVkIGRhdGFcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2NsaWVudHM/cG9wdWxhdGU9Kic7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBVUkxcclxuXHJcbiAgICBjb25zdCBmZXRjaENsaWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYmVhcmVyVG9rZW4gPSAnOTI2MjZjMzFmNGQwNjE2NDNlZGZlZmJhMzY0NGViNTNkMjVlZmI5MDhkNmJlZThhN2I1NTBjMDIwMDA5MjdhZTEyYWIyODk0NjljYTNiZmJlYjc5OTYwNjExNWViYzM1NTZlMjAyMDcxNzY3Y2RlMTVjMDNiMTRhODM1ZjdmZjcyOWYyZGRjODk3YmJhM2JmNGNjODgyNTA3OTE0NGUxZjVlODk4MGZjMGYzYTIwZThmNDgxNTA4ZTgzMjM1M2NkOGVjZjg3YTExMWZkYjE5Yjk0NzY3MDc0YmMxMTFjYTQ0ZTc5NDQ5MmRjNzJhZjMwNTI1YzM5YWEzNjE0NDk3Yic7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBCZWFyZXIgdG9rZW5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJUb2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBmZXRjaGVkIGRhdGEgaXMgYW4gYXJyYXkgYmVmb3JlIHNldHRpbmcgaXQgdG8gdGhlIHN0YXRlXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuZGF0YSkpIHtcclxuICAgICAgICAgIHNldERhdGEoanNvbkRhdGEuZGF0YS5tYXAoaXRlbSA9PiBpdGVtLmF0dHJpYnV0ZXMpKTsgLy8gRXh0cmFjdCB0aGUgJ2F0dHJpYnV0ZXMnIGZpZWxkIGZyb20gdGhlIEFQSSByZXNwb25zZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOiBEYXRhIGlzIG5vdCBhbiBhcnJheScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaENsaWVudHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIENvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZSByZWFjdC1zbGljayBTbGlkZXIgY29tcG9uZW50XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgLy8gRW5hYmxlIGF1dG8tc2xpZGluZ1xyXG4gICAgYXV0b3BsYXlTcGVlZDogMjAwMCwgLy8gU2V0IHRoZSBzbGlkZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKG9wdGlvbmFsKVxyXG4gICAgc3BlZWQ6IDIwMDAsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogUmVhY3QtU2xpY2sgU2xpZGVyIGNvbXBvbmVudCAqL31cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAvLyBNYXBwaW5nIG92ZXIgdGhlICdkYXRhJyBzdGF0ZSBhbmQgcmVuZGVyaW5nIGVhY2ggY2xpZW50IGxvZ29cclxuICAgICAgICAgIGRhdGEubWFwKChjbGllbnQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIga2V5PXtjbGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTGFyZ2UgdmVyc2lvbiBvZiB0aGUgY2xpZW50IGxvZ28gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2NsaWVudC5jbGllbnRsb2dvLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzLmxhcmdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBUaHVtYm5haWwgdmVyc2lvbiBvZiB0aGUgY2xpZW50IGxvZ28gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjbGllbnQuY2xpZW50bG9nby5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy50aHVtYm5haWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIC8vIFJlbmRlciBhIGxvYWRpbmcgbWVzc2FnZSB3aGlsZSBkYXRhIGlzIGJlaW5nIGZldGNoZWRcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJTbGlkZXIiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2xpZW50U2xpZGVyIiwiZGF0YSIsInNldERhdGEiLCJhcGlVcmwiLCJmZXRjaENsaWVudHMiLCJiZWFyZXJUb2tlbiIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiYXR0cmlidXRlcyIsImNvbnNvbGUiLCJlcnJvciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVuZ3RoIiwiY2xpZW50IiwiY2xpZW50bG9nbyIsImZvcm1hdHMiLCJsYXJnZSIsInVybCIsInRodW1ibmFpbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/clientSlider.js\n");

/***/ })

});