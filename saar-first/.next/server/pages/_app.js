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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/socket.js":
/*!***************************!*\
  !*** ./context/socket.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketProvider: () => (/* binding */ SocketProvider),\n/* harmony export */   useSocket: () => (/* binding */ useSocket)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useSocket = ()=>{\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n    return socket;\n};\nconst SocketProvider = (props)=>{\n    const { children } = props;\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)();\n        console.log(\"socket connection\", connection);\n        setSocket(connection);\n    }, []);\n    socket?.on(\"connect_error\", async (err)=>{\n        console.log(\"Error establishing socket\", err);\n        await fetch(\"/api/socket\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: socket,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shakshi\\\\Desktop\\\\saar\\\\saar-first\\\\context\\\\socket.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNqQztBQUV0QyxNQUFNSyw4QkFBZ0JMLG9EQUFhQSxDQUFDO0FBRTdCLE1BQU1NLFlBQVk7SUFDckIsTUFBTUMsU0FBU04saURBQVVBLENBQUNJO0lBQzFCLE9BQU9FO0FBQ1gsRUFBQztBQUVNLE1BQU1DLGlCQUFpQixDQUFDQztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRDtJQUNyQixNQUFNLENBQUNGLFFBQVFJLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYVIsb0RBQUVBO1FBQ3JCUyxRQUFRQyxHQUFHLENBQUMscUJBQXFCRjtRQUNqQ0QsVUFBVUM7SUFDWixHQUFHLEVBQUU7SUFFTEwsUUFBUVEsR0FBRyxpQkFBaUIsT0FBT0M7UUFDakNILFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJFO1FBQ3pDLE1BQU1DLE1BQU07SUFDZDtJQUVBLHFCQUNFLDhEQUFDWixjQUFjYSxRQUFRO1FBQUNDLE9BQU9aO2tCQUFTRzs7Ozs7O0FBRTVDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2dnbGUtbWVldC1jbG9uZS8uL2NvbnRleHQvc29ja2V0LmpzP2FiMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTb2NrZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpXHJcbiAgICByZXR1cm4gc29ja2V0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NrZXRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBpbygpO1xyXG4gICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdGlvblwiLCBjb25uZWN0aW9uKVxyXG4gICAgc2V0U29ja2V0KGNvbm5lY3Rpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgc29ja2V0Py5vbignY29ubmVjdF9lcnJvcicsIGFzeW5jIChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZXN0YWJsaXNoaW5nIHNvY2tldFwiLCBlcnIpXHJcbiAgICBhd2FpdCBmZXRjaCgnL2FwaS9zb2NrZXQnKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT57Y2hpbGRyZW59PC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJTb2NrZXRDb250ZXh0IiwidXNlU29ja2V0Iiwic29ja2V0IiwiU29ja2V0UHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwic2V0U29ja2V0IiwiY29ubmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImVyciIsImZldGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/socket.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/socket */ \"./context/socket.js\");\n/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/clerk-react */ \"@clerk/clerk-react\");\n/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket__WEBPACK_IMPORTED_MODULE_2__]);\n_context_socket__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__.ClerkProvider, {\n        publishableKey: \"pk_test_bG92ZWQtbmV3dC00OC5jbGVyay5hY2NvdW50cy5kZXYk\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket__WEBPACK_IMPORTED_MODULE_2__.SocketProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shakshi\\\\Desktop\\\\saar\\\\saar-first\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shakshi\\\\Desktop\\\\saar\\\\saar-first\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shakshi\\\\Desktop\\\\saar\\\\saar-first\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVvQjtBQUNDO0FBRXBDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDZEQUFhQTtRQUFDSSxnQkFBZ0JDLHNEQUE2QztrQkFFNUUsNEVBQUNOLDJEQUFjQTtzQkFDYiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZ2dsZS1tZWV0LWNsb25lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvc29ja2V0XCI7XHJcbmltcG9ydCB7IENsZXJrUHJvdmlkZXIgfSBmcm9tIFwiQGNsZXJrL2NsZXJrLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDbGVya1Byb3ZpZGVyIHB1Ymxpc2hhYmxlS2V5PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTEVSS19QVUJMSVNIQUJMRV9LRVl9PlxyXG5cclxuICAgIDxTb2NrZXRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Tb2NrZXRQcm92aWRlcj5cclxuICAgIDwvQ2xlcmtQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTb2NrZXRQcm92aWRlciIsIkNsZXJrUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwdWJsaXNoYWJsZUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTEVSS19QVUJMSVNIQUJMRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@clerk/clerk-react":
/*!*************************************!*\
  !*** external "@clerk/clerk-react" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@clerk/clerk-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();