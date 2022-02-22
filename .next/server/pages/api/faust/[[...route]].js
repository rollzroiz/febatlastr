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
exports.id = "pages/api/faust/[[...route]]";
exports.ids = ["pages/api/faust/[[...route]]"];
exports.modules = {

/***/ "@faustjs/core":
/*!********************************!*\
  !*** external "@faustjs/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("@faustjs/core");;

/***/ }),

/***/ "@faustjs/core/api":
/*!************************************!*\
  !*** external "@faustjs/core/api" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@faustjs/core/api");;

/***/ }),

/***/ "./src/faust.config.js?f905":
/*!*****************************!*\
  !*** ./src/faust.config.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faustjs/core */ \"@faustjs/core\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);\n_faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nif (false) {}\n/**\n * @type {import(\"@faustjs/core\").Config}\n */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)({\n    wpUrl: \"http://localhost:8080\",\n    apiClientSecret: process.env.FAUSTWP_SECRET_KEY\n}));\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmF1c3QuY29uZmlnLmpzP2Y5MDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0Q7QUFFcEQsRUFBRSxFQUFFLEtBQXNDLEVBQUUsRUFJM0M7QUFFRCxFQUVHOztDQUFBLEdBQ0gsaUVBQWVDLHFEQUFVLENBQUMsQ0FBQztJQUN6Qk0sS0FBSyxFQUFFTCx1QkFBcUM7SUFDNUNNLGVBQWUsRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLGtCQUFrQjtBQUNqRCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtaGVhZGxlc3MtZ2V0dGluZy1zdGFydGVkLy4vc3JjL2ZhdXN0LmNvbmZpZy5qcz9kMzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyBhcyBjb3JlQ29uZmlnIH0gZnJvbSAnQGZhdXN0anMvY29yZSc7XG5cbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09SRFBSRVNTX1VSTCkge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdZb3UgbXVzdCBwcm92aWRlIGEgTkVYVF9QVUJMSUNfV09SRFBSRVNTX1VSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSwgZGlkIHlvdSBmb3JnZXQgdG8gbG9hZCB5b3VyIC5lbnYubG9jYWwgZmlsZT8nLFxuICApO1xufVxuXG4vKipcbiAqIEB0eXBlIHtpbXBvcnQoXCJAZmF1c3Rqcy9jb3JlXCIpLkNvbmZpZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29yZUNvbmZpZyh7XG4gIHdwVXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT1JEUFJFU1NfVVJMLFxuICBhcGlDbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBVVNUV1BfU0VDUkVUX0tFWSxcbn0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvcmVDb25maWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV09SRFBSRVNTX1VSTCIsImNvbnNvbGUiLCJlcnJvciIsIndwVXJsIiwiYXBpQ2xpZW50U2VjcmV0IiwiRkFVU1RXUF9TRUNSRVRfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/faust.config.js?f905\n");

/***/ }),

/***/ "./src/pages/api/faust/[[...route]].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/faust/[[...route]].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faust_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faust.config */ \"./src/faust.config.js?f905\");\n/* harmony import */ var _faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faustjs/core/api */ \"@faustjs/core/api\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__, faust_config__WEBPACK_IMPORTED_MODULE_0__]);\n([_faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__, faust_config__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__.apiRouter);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2ZhdXN0L1tbLi4ucm91dGVdXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUI7QUFDd0I7QUFFN0MsaUVBQWVBLHdEQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWhlYWRsZXNzLWdldHRpbmctc3RhcnRlZC8uL3NyYy9wYWdlcy9hcGkvZmF1c3QvW1suLi5yb3V0ZV1dLnRzPzVmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmYXVzdC5jb25maWcnO1xuaW1wb3J0IHsgYXBpUm91dGVyIH0gZnJvbSAnQGZhdXN0anMvY29yZS9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBhcGlSb3V0ZXI7XG4iXSwibmFtZXMiOlsiYXBpUm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/faust/[[...route]].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/faust/[[...route]].ts"));
module.exports = __webpack_exports__;

})();