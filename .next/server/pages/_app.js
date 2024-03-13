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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketProvider: () => (/* binding */ SocketProvider),\n/* harmony export */   useSocket: () => (/* binding */ useSocket)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useSocket = ()=>{\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n    return socket;\n};\nconst SocketProvider = (props)=>{\n    const { children } = props;\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)();\n        console.log(\"socket connection\", connection);\n        setSocket(connection);\n    }, []);\n    socket?.on(\"connect_error\", async (err)=>{\n        console.log(\"Error establishing socket\", err);\n        await fetch(\"/api/socket\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: socket,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/happy/Desktop/New Folder/meet/context/socket.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNqQztBQUV0QyxNQUFNSyw4QkFBZ0JMLG9EQUFhQSxDQUFDO0FBRTdCLE1BQU1NLFlBQVk7SUFDckIsTUFBTUMsU0FBU04saURBQVVBLENBQUNJO0lBQzFCLE9BQU9FO0FBQ1gsRUFBQztBQUVNLE1BQU1DLGlCQUFpQixDQUFDQztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRDtJQUNyQixNQUFNLENBQUNGLFFBQVFJLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYVIsb0RBQUVBO1FBQ3JCUyxRQUFRQyxHQUFHLENBQUMscUJBQXFCRjtRQUNqQ0QsVUFBVUM7SUFDWixHQUFHLEVBQUU7SUFFTEwsUUFBUVEsR0FBRyxpQkFBaUIsT0FBT0M7UUFDakNILFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJFO1FBQ3pDLE1BQU1DLE1BQU07SUFDZDtJQUdBLHFCQUNFLDhEQUFDWixjQUFjYSxRQUFRO1FBQUNDLE9BQU9aO2tCQUFVRzs7Ozs7O0FBRTdDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2dnbGUtbWVldC1jbG9uZS8uL2NvbnRleHQvc29ja2V0LmpzP2FiMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5jb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGNvbnN0IHVzZVNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpXG4gICAgcmV0dXJuIHNvY2tldFxufVxuXG5leHBvcnQgY29uc3QgU29ja2V0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBpbygpO1xuICAgIGNvbnNvbGUubG9nKFwic29ja2V0IGNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbilcbiAgICBzZXRTb2NrZXQoY29ubmVjdGlvbik7XG4gIH0sIFtdKTtcblxuICBzb2NrZXQ/Lm9uKCdjb25uZWN0X2Vycm9yJywgYXN5bmMgKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZXN0YWJsaXNoaW5nIHNvY2tldFwiLCBlcnIpXG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvc29ja2V0JylcbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NvY2tldH0gPntjaGlsZHJlbn08L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIlNvY2tldENvbnRleHQiLCJ1c2VTb2NrZXQiLCJzb2NrZXQiLCJTb2NrZXRQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJzZXRTb2NrZXQiLCJjb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXJyIiwiZmV0Y2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/socket.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/socket */ \"./context/socket.js\");\n/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/clerk-react */ \"@clerk/clerk-react\");\n/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket__WEBPACK_IMPORTED_MODULE_2__]);\n_context_socket__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__.ClerkProvider, {\n        publishableKey: \"pk_test_bG92ZWQtbmV3dC00OC5jbGVyay5hY2NvdW50cy5kZXYk\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket__WEBPACK_IMPORTED_MODULE_2__.SocketProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/happy/Desktop/New Folder/meet/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/happy/Desktop/New Folder/meet/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/happy/Desktop/New Folder/meet/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVvQjtBQUNDO0FBRXBDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDZEQUFhQTtRQUFDSSxnQkFBZ0JDLHNEQUE2QztrQkFFNUUsNEVBQUNOLDJEQUFjQTtzQkFDYiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZ2dsZS1tZWV0LWNsb25lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7IFNvY2tldFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9zb2NrZXRcIjtcbmltcG9ydCB7IENsZXJrUHJvdmlkZXIgfSBmcm9tIFwiQGNsZXJrL2NsZXJrLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2xlcmtQcm92aWRlciBwdWJsaXNoYWJsZUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfUFVCTElTSEFCTEVfS0VZfT5cblxuICAgIDxTb2NrZXRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NvY2tldFByb3ZpZGVyPlxuICAgIDwvQ2xlcmtQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTb2NrZXRQcm92aWRlciIsIkNsZXJrUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwdWJsaXNoYWJsZUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTEVSS19QVUJMSVNIQUJMRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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