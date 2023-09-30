"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n  const transporter = nodemailer.createTransport({\n    port: 465,\n    host: 'smtp.gmail.com',\n    auth: {\n      user: 'shyamalfred@gmail.com',\n      pass: 'yjkmdhmxtflkbzfk'\n    },\n    secure: true // Set it to true for a secure connection\n\n  });\n  const mailData = {\n    from: 'shyamalfred@gmail.com',\n    to: 'shyamalfred@gmail.com',\n    // Replace this with the recipient's email\n    subject: `Message From ${req.body.name}`,\n    text: req.body.message + ' | Sent from: ' + req.body.email + req.body.phone,\n    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p><p>Phone Number:${req.body.phone}</p>\n    <p>Project title:${req.body.projectTitle}</p>\n    <p>Project title:${req.body.dzOther}</p>`\n  };\n  transporter.sendMail(mailData, function (err, info) {\n    if (err) {\n      console.log(err);\n      res.status(500).json({\n        error: 'Failed to send the email.'\n      });\n    } else {\n      console.log(info);\n      res.status(200).json({\n        message: 'Email sent successfully!'\n      });\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNqQyxRQUFNQyxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBMUI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHRixVQUFVLENBQUNHLGVBQVgsQ0FBMkI7QUFDN0NDLElBQUFBLElBQUksRUFBRSxHQUR1QztBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRSx1QkFERjtBQUVKQyxNQUFBQSxJQUFJLEVBQUU7QUFGRixLQUh1QztBQU83Q0MsSUFBQUEsTUFBTSxFQUFFLElBUHFDLENBTy9COztBQVArQixHQUEzQixDQUFwQjtBQVVBLFFBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxJQUFJLEVBQUUsdUJBRFM7QUFFZkMsSUFBQUEsRUFBRSxFQUFFLHVCQUZXO0FBRWM7QUFDN0JDLElBQUFBLE9BQU8sRUFBRyxnQkFBZWYsR0FBRyxDQUFDZ0IsSUFBSixDQUFTQyxJQUFLLEVBSHhCO0FBSWZDLElBQUFBLElBQUksRUFBRWxCLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0csT0FBVCxHQUFtQixnQkFBbkIsR0FBc0NuQixHQUFHLENBQUNnQixJQUFKLENBQVNJLEtBQS9DLEdBQXVEcEIsR0FBRyxDQUFDZ0IsSUFBSixDQUFTSyxLQUp2RDtBQUtmQyxJQUFBQSxJQUFJLEVBQUcsUUFBT3RCLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0csT0FBUSx1QkFBc0JuQixHQUFHLENBQUNnQixJQUFKLENBQVNJLEtBQU0sdUJBQXNCcEIsR0FBRyxDQUFDZ0IsSUFBSixDQUFTSyxLQUFNO0FBQzdHLHVCQUF1QnJCLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU08sWUFBYTtBQUM3Qyx1QkFBdUJ2QixHQUFHLENBQUNnQixJQUFKLENBQVNRLE9BQVE7QUFQckIsR0FBakI7QUFVQXBCLEVBQUFBLFdBQVcsQ0FBQ3FCLFFBQVosQ0FBcUJiLFFBQXJCLEVBQStCLFVBQVVjLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUNsRCxRQUFJRCxHQUFKLEVBQVM7QUFDUEUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDQXpCLE1BQUFBLEdBQUcsQ0FBQzZCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMSixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBMUIsTUFBQUEsR0FBRyxDQUFDNkIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVaLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0Q7QUFDRixHQVJEO0FBU0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcclxuXHJcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICBwb3J0OiA0NjUsXHJcbiAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiAnc2h5YW1hbGZyZWRAZ21haWwuY29tJyxcclxuICAgICAgcGFzczogJ3lqa21kaG14dGZsa2J6ZmsnLFxyXG4gICAgfSxcclxuICAgIHNlY3VyZTogdHJ1ZSwgLy8gU2V0IGl0IHRvIHRydWUgZm9yIGEgc2VjdXJlIGNvbm5lY3Rpb25cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWFpbERhdGEgPSB7XHJcbiAgICBmcm9tOiAnc2h5YW1hbGZyZWRAZ21haWwuY29tJyxcclxuICAgIHRvOiAnc2h5YW1hbGZyZWRAZ21haWwuY29tJywgLy8gUmVwbGFjZSB0aGlzIHdpdGggdGhlIHJlY2lwaWVudCdzIGVtYWlsXHJcbiAgICBzdWJqZWN0OiBgTWVzc2FnZSBGcm9tICR7cmVxLmJvZHkubmFtZX1gLFxyXG4gICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSArICcgfCBTZW50IGZyb206ICcgKyByZXEuYm9keS5lbWFpbCArIHJlcS5ib2R5LnBob25lLFxyXG4gICAgaHRtbDogYDxkaXY+JHtyZXEuYm9keS5tZXNzYWdlfTwvZGl2PjxwPlNlbnQgZnJvbTogJHtyZXEuYm9keS5lbWFpbH08L3A+PHA+UGhvbmUgTnVtYmVyOiR7cmVxLmJvZHkucGhvbmV9PC9wPlxyXG4gICAgPHA+UHJvamVjdCB0aXRsZToke3JlcS5ib2R5LnByb2plY3RUaXRsZX08L3A+XHJcbiAgICA8cD5Qcm9qZWN0IHRpdGxlOiR7cmVxLmJvZHkuZHpPdGhlcn08L3A+YCxcclxuICB9O1xyXG5cclxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgdGhlIGVtYWlsLicgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhJyB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibm9kZW1haWxlciIsInJlcXVpcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VjdXJlIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiYm9keSIsIm5hbWUiLCJ0ZXh0IiwibWVzc2FnZSIsImVtYWlsIiwicGhvbmUiLCJodG1sIiwicHJvamVjdFRpdGxlIiwiZHpPdGhlciIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();