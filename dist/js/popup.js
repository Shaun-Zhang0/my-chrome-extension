/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"popup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/popup.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/page-info/index.less":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/page-info/index.less ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pageInfoRoot {\n  width: 100%;\n  padding-top: 30px;\n  overflow: auto;\n}\n.pageInfoRow {\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n}\n.pageInfoRowHeader {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.pageInfoValue {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n", "",{"version":3,"sources":["webpack://./src/components/page-info/index.less"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":[".pageInfoRoot {\n  width: 100%;\n  padding-top: 30px;\n  overflow: auto;\n}\n.pageInfoRow {\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n}\n.pageInfoRowHeader {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.pageInfoValue {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/url-modes/index.less":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/url-modes/index.less ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-size: 26px;\n}\n.modeItem {\n  width: 100px;\n  height: 50px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 50px;\n  background-color: #cccccc;\n  cursor: pointer;\n}\n.modeContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 150px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/components/url-modes/index.less"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,aAAa;EACb,cAAc;EACd,gBAAgB;AAClB","sourcesContent":[".header {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-size: 26px;\n}\n.modeItem {\n  width: 100px;\n  height: 50px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 50px;\n  background-color: #cccccc;\n  cursor: pointer;\n}\n.modeContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 150px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/video-info/index.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/video-info/index.less ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".video-form {\n  padding: 0 10px;\n}\n.form-item {\n  width: 100%;\n}\n.form-input {\n  display: block;\n  height: 40px;\n  font-weight: 400;\n  line-height: 40px;\n  padding: 0 10px;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-label {\n  display: inline-block;\n  margin-bottom: 0.5em;\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n.form-submit {\n  margin-top: 10px;\n  display: inline-block;\n  font-weight: 400;\n  color: #fff;\n  width: 100px;\n  background-color: #6c757d;\n  border-color: #6c757d;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  padding: 0 10px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.video {\n  display: none;\n  opacity: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/components/video-info/index.less"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,wEAAwE;AAC1E;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,qIAAqI;AACvI;AACA;EACE,aAAa;EACb,UAAU;AACZ","sourcesContent":[".video-form {\n  padding: 0 10px;\n}\n.form-item {\n  width: 100%;\n}\n.form-input {\n  display: block;\n  height: 40px;\n  font-weight: 400;\n  line-height: 40px;\n  padding: 0 10px;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-label {\n  display: inline-block;\n  margin-bottom: 0.5em;\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n.form-submit {\n  margin-top: 10px;\n  display: inline-block;\n  font-weight: 400;\n  color: #fff;\n  width: 100px;\n  background-color: #6c757d;\n  border-color: #6c757d;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  padding: 0 10px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.video {\n  display: none;\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/popup.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/popup.less ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".root {\n  min-width: 500px;\n}\n.navContainer {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  overflow: hidden;\n  border-bottom: 1px dashed #cccccc;\n}\n.navItem {\n  position: relative;\n  float: left;\n  width: 80px;\n  height: 80px;\n  font-size: 12px;\n  background-color: #F4F4F4;\n  margin-left: 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  user-select: none;\n}\n.navItem img {\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  margin-top: -12px;\n  margin-left: -12px;\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.navItem.disable {\n  pointer-events: none;\n}\n.navItem.active {\n  background-color: #dedede;\n}\n.navItem.active .navItemName {\n  color: #0091c3;\n}\n.navItemName {\n  position: absolute;\n  bottom: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #5f5651;\n}\n.showContainer {\n  height: 300px;\n  width: 100%;\n  overflow: auto;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n  /*定义滚动条轨道 内阴影+圆角*/\n  /*定义滑块 内阴影+圆角*/\n  /*定义最上方和最下方的按钮*/\n}\n.showContainer::-webkit-scrollbar {\n  width: 8px;\n  background-color: #fff;\n  z-index: 11;\n}\n.showContainer::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #ededed;\n}\n.showContainer::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #46cdff;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n}\n.showContainer::-webkit-scrollbar-button {\n  background-color: #000;\n  border: 1px solid yellow;\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/popup.less"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,YAAY;AACd;AACA;EACE,oBAAoB;AACtB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,WAAW;EACX,cAAc;EACd,4BAA4B;EAC5B,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,UAAU;EACV,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,oDAAoD;EACpD,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,0MAA0M;AAC5M;AACA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;AACf","sourcesContent":[".root {\n  min-width: 500px;\n}\n.navContainer {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  overflow: hidden;\n  border-bottom: 1px dashed #cccccc;\n}\n.navItem {\n  position: relative;\n  float: left;\n  width: 80px;\n  height: 80px;\n  font-size: 12px;\n  background-color: #F4F4F4;\n  margin-left: 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  user-select: none;\n}\n.navItem img {\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  margin-top: -12px;\n  margin-left: -12px;\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.navItem.disable {\n  pointer-events: none;\n}\n.navItem.active {\n  background-color: #dedede;\n}\n.navItem.active .navItemName {\n  color: #0091c3;\n}\n.navItemName {\n  position: absolute;\n  bottom: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #5f5651;\n}\n.showContainer {\n  height: 300px;\n  width: 100%;\n  overflow: auto;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n  /*定义滚动条轨道 内阴影+圆角*/\n  /*定义滑块 内阴影+圆角*/\n  /*定义最上方和最下方的按钮*/\n}\n.showContainer::-webkit-scrollbar {\n  width: 8px;\n  background-color: #fff;\n  z-index: 11;\n}\n.showContainer::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #ededed;\n}\n.showContainer::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #46cdff;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n}\n.showContainer::-webkit-scrollbar-button {\n  background-color: #000;\n  border: 1px solid yellow;\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/page-info/index.less":
/*!*********************************************!*\
  !*** ./src/components/page-info/index.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/page-info/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/page-info/index.tsx":
/*!********************************************!*\
  !*** ./src/components/page-info/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./index.less */ "./src/components/page-info/index.less");
const PageInfo = () => {
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentKeyword, setCurrentKeyword] = react_1.useState();
    const [currentDescription, setCurrentDescription] = react_1.useState();
    const [currentAuthor, setCurrentAuthor] = react_1.useState();
    const [currentTitle, setCurrentTitle] = react_1.useState();
    react_1.useEffect(() => {
        var _a, _b, _c, _d, _e, _f;
        const bg = chrome.extension.getBackgroundPage();
        setCurrentKeyword((_b = (_a = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _a === void 0 ? void 0 : _a.pageInfo) === null || _b === void 0 ? void 0 : _b.keyword);
        setCurrentDescription((_d = (_c = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _c === void 0 ? void 0 : _c.pageInfo) === null || _d === void 0 ? void 0 : _d.description);
        setCurrentAuthor((_f = (_e = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _e === void 0 ? void 0 : _e.pageInfo) === null || _f === void 0 ? void 0 : _f.author);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTitle(tabs[0].title);
        });
    }, []);
    return react_1.default.createElement("div", { className: 'pageInfoRoot' },
        "\u5F53\u524D\u9875\u9762\u4FE1\u606F:",
        react_1.default.createElement("div", { className: 'pageInfoRow' },
            react_1.default.createElement("div", { className: 'pageInfoRowHeader' }, "\u5F53\u524D\u9875\u9762url"),
            react_1.default.createElement("div", { className: 'pageInfoValue' }, currentURL)),
        react_1.default.createElement("div", { className: 'pageInfoRow' },
            react_1.default.createElement("div", { className: 'pageInfoRowHeader' }, "title"),
            react_1.default.createElement("div", { className: 'pageInfoValue' }, currentTitle)),
        react_1.default.createElement("div", { className: 'pageInfoRow' },
            react_1.default.createElement("div", { className: 'pageInfoRowHeader' }, "keyword"),
            react_1.default.createElement("div", { className: 'pageInfoValue' }, currentKeyword)),
        react_1.default.createElement("div", { className: 'pageInfoRow' },
            react_1.default.createElement("div", { className: 'pageInfoRowHeader' }, "description"),
            react_1.default.createElement("div", { className: 'pageInfoValue' }, currentDescription)),
        react_1.default.createElement("div", { className: 'pageInfoRow' },
            react_1.default.createElement("div", { className: 'pageInfoRowHeader' }, "author"),
            react_1.default.createElement("div", { className: 'pageInfoValue' }, currentAuthor)));
};
exports.default = react_1.default.memo(PageInfo);


/***/ }),

/***/ "./src/components/url-modes/index.less":
/*!*********************************************!*\
  !*** ./src/components/url-modes/index.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/url-modes/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/url-modes/index.tsx":
/*!********************************************!*\
  !*** ./src/components/url-modes/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const url_mode_1 = __webpack_require__(/*! ../../url_mode */ "./src/url_mode.ts");
__webpack_require__(/*! ./index.less */ "./src/components/url-modes/index.less");
const UrlModes = () => {
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentTabIndex, setCurrentTabIndex] = react_1.useState();
    react_1.useEffect(() => {
    }, []);
    const modeItem = react_1.useCallback(() => {
        return Object.keys(url_mode_1.UrlMode).map(i => {
            return react_1.default.createElement("div", { className: 'modeItem', onClick: () => changeMode(url_mode_1.UrlMode[i]) }, url_mode_1.UrlMode[i]);
        });
    }, []);
    /**
     * 切换页面调试模式
     */
    const changeMode = (mode) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var _a;
            let currentTabId = Number(tabs[0].id);
            let currentUrl = String(tabs[0].url);
            let newUrl = '';
            const link = document.createElement('a');
            link.href = currentUrl;
            const search = (_a = link.search) === null || _a === void 0 ? void 0 : _a.split("?")[1];
            if (!search /*不存在search部分*/) {
                newUrl = link.origin + link.pathname + `?${mode}`;
            }
            else { /*存在search*/
                if (search.indexOf(mode) > -1 /*当前已存在选中的mode，则直接去除这个模式*/) {
                    let newSearch = '';
                    if (search.indexOf('?' + mode) > -1) {
                        newSearch = search.replace('?' + mode, '');
                    }
                    if (search.indexOf('&' + mode) > -1) {
                        newSearch = search.replace('&' + mode, '');
                    }
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                }
                else { /*当前不存在mode*/
                    let newSearch = search + '&' + mode;
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                }
            }
            chrome.tabs.update(Number(currentTabId), { url: newUrl });
        });
    };
    return react_1.default.createElement("div", { className: 'pageInfoRoot' },
        react_1.default.createElement("div", { className: 'header' }, "\u8C03\u8BD5\u6A21\u5F0F"),
        react_1.default.createElement("div", { className: 'modeContainer' }, modeItem()));
};
exports.default = react_1.default.memo(UrlModes);


/***/ }),

/***/ "./src/components/video-info/index.less":
/*!**********************************************!*\
  !*** ./src/components/video-info/index.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/video-info/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/video-info/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/video-info/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./index.less */ "./src/components/video-info/index.less");
const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = react_1.useState("");
    const [videoSize, setVideoSize] = react_1.useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = react_1.useState(0); // 通过 video组件 获取视频的长度。 单位: 秒
    let videoEl = react_1.useRef(null);
    const getVideoUrl = (e) => {
        setVideoUrl(e.target.value);
    };
    const submit = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', videoUrl, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            var _a;
            if (this.readyState == this.HEADERS_RECEIVED) {
                const headers = (_a = this.getAllResponseHeaders()) === null || _a === void 0 ? void 0 : _a.trim().split(/[\r\n]+/);
                // Create a map of header names to values
                let headerMap = {};
                headers.forEach(function (line) {
                    let parts = line.split(': ');
                    let header = parts.shift();
                    let value = parts.join(': ');
                    headerMap[String(header)] = value;
                });
                setVideoSize(headerMap['content-length']);
                videoEl.current && videoEl.current.play();
                const videoDuration = getVideoDuration();
                videoDuration && setVideoRate(Math.floor(headerMap['content-length'] / 1000 * 8 / videoDuration));
            }
        };
        xhr.send();
    };
    /**
     * 获取视频时长
     */
    const getVideoDuration = () => {
        return videoEl.current && videoEl.current.duration;
    };
    return react_1.default.createElement("div", { className: "video-form" },
        react_1.default.createElement("div", { className: "form-title" }, "\u67E5\u770B\u7EBF\u4E0A\u89C6\u9891\u7684\u7801\u7387"),
        react_1.default.createElement("div", { className: "form-item" },
            react_1.default.createElement("label", { className: 'form-label' }, "\u89C6\u9891\u5730\u5740"),
            react_1.default.createElement("input", { className: 'form-input', onChange: getVideoUrl, value: videoUrl })),
        react_1.default.createElement("div", { className: "form-submit", onClick: submit }, "\u786E\u5B9A"),
        react_1.default.createElement("video", { className: 'video', ref: videoEl, src: videoUrl }),
        "\u89C6\u9891\u7801\u7387:",
        react_1.default.createElement("input", { value: videoRate }));
};
exports.default = react_1.default.memo(VideoInfo);


/***/ }),

/***/ "./src/images/debug.png":
/*!******************************!*\
  !*** ./src/images/debug.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADtElEQVRYR82XW2gcVRzGv29mXZNWmp3FBqxIazszoHijBW9Iqz6ojeCDYKwBK33pZmckYN7EPmwRfRQ1mdkURLxBNAoFLV7wUkFIi1KpL7XdmfRBK0qsO7tWrGt25y8zYddpNm1TyJDu254958xvv/P//ucbYoU/XOHn4/IE6Cv796uhDAmxDhA/hPJm3dKPLFRLczwHlExgmYXFlFzj+HqGYTkEx2qW8eFic7oU0MpeESHGSSjtBQIIgd1Vy3its0lJlHy/34q+V1U9iwLnugBdfzch+wR4O7CMnRcF0NyTt0CaR0CqAJ4T4hBD7CKxU4AAqnJ9UNhUjzeaEjV/2m/GAE30YMRodCtUKZCcEOCdwDKeXAKA9yKBZwWcCCy9GC8QoVb2vyOwJSQfrRX1/akB5N3KGwCfCsGRmqWPtYk1tzJJcMc546ko4HgWCQeQL6qzxoMoMewtn7i2N1SOgVjTUuSB+rD5eWoK4KWfe/M9Z2cAXgPgMwgOg3gMwI0C+SawzK2dc0xDgWjzq5zKDVeAn5BYn3DBNFRloFOAaRVh0mJav7+fwCMgStWisbergtNSoP2gdkGKwA5sw00C5FxvGwVjJG6eN4ocFYXP1IrG18l5mnOJNkwuPh9A37i3WSGmSVy5QJV/QpG7arZ5tOOeNADyrncIwJ0i+JQtPF5d3RKtoUQ2fTgaC2xje3oAU6Jqp/0GARVNXFcdMU7FhfuqtzabwaxA5oJZoyeybzS+/EdQEkXr984SzCYBVo39tK5HbfwSt+Wr9QwGGd8Ryw8QbepWDkRyx32iicG4CFWZJDkggu8D29iS3hEAyE2cvFUJW9MAVi0swibVbX8WN36bKkC0eW68spXEKyRv69gQymjN1g+mbsNLacU5t7JHAZ+P3BEyO1S31gcLG9p5I9mFGtHFLiNt30wfmq0DJO9JtHMJBYN12/ggCZEOgON9ReI+AMcgeF+I2wlsF8i/DTW74e/Chl/bEMsOEOdJkS8hOCUZ5ab4AotCjet/TOIhCPZWbaOUGkCUKSlwRWQysM2h/x0xnzUE8m5gmU+kBpAre/cqgoPnKBA1sLXeR/O9Ql4IbHNPagBRWNV+94+T0CHyI8ApAe6I5BdBKKq6uTa88YclAHivA9glkGJgmRNdeeACsTzv+HeDEoXX/qQLBBitWcbLS3KBNj4zQLZG50S1zjy9qdIFEPd6L8qPamCbw12/v/Xb6vyZv4aEMkDBHy1V3uvkycTky/PVbLF/m9bYiivwH3eFpD9NueSDAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/more.png":
/*!*****************************!*\
  !*** ./src/images/more.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD4klEQVRYR+2Xa2gcVRTH/+fuYtqKyc5gKtgK2uzdYCmBgqXFgq+AKIhgsbVQouZDpDuT+KIBsR+69Iuv0JQ2Mxuo4CPih2LRih9UiIJWqQ8QH4ju3US0tWJa5m6CYLU798gsXUnSfWSTDUVwPs6d8z+/OffcM/8hXOaLLnN+/PcA2kYnbqIwvJtA14H42qiCDPoN4J9ZxN6d3t3xZSNVXVgFMhxPXKMcYWgQYMGEY8QURIkM4SoC1gB8I4G6wDhtwEOFs9JDhor1YOoCtI7kNscFjTHz74ZjmWl33Qcg4krCrV4+GSfzEIMGCJgqGu6Z6U99VguiJoDt5fsY5hkIPKzTqXfqvU153T6kWk0c+wjcTyz6Azd5pFpsVQDbV0+CMYgYuoPd8vuFJp/9nOWpXSC8AvCD2km9XkmjIkCbp+6PEcYM4eZCWn61mOTlmISf6yWmLIzYpAc6vp2vdSnASz+tsP688CuAvdpJjS4leTnW8tUIMXcH7XIDdlA4W/MSAMvL7yUyPcGUXI8MmWYA4JBqseJQxBgOXDlcE8D2c2dCwsB0OnWsKckviti+2g7mg4GbWlMVwPInu4jDk0H7Xwns2PB3MwFw9Lsr7HMtmkOxZXYvzNkC28vvYfAt2pX3NjX5RTHLU28T6KPATQ6V9ecARM0C4A/tyKeWBcBXz4JxpXblQGUAT73FROMFJ3l4NkDCU0MEfowh7iy4yQ9LaxmOW+0qB6KYXhnvRO8N56Pb0eSMEU6A6Ih2pDNHx88PEPgO7cj7qlXgTTCNazcZVeLfy/KVD+a+UMS3zqTXfV5aOHBqpbXi/I8AX9BTsrM89xNe/naCeR+Eg9pJDc4ByOYeFQa3BW5qW7UKeCBMa0c+vTxbkHseoFXakf0VAUpNSLxRO3LX8gCo48T0cY0mnOwCiuM6LVdX++ItGiw6hmdbCmzE5qrHMBK3PXWKBe3U6eQni05WITDhTWwTCA/XHERRXMJXjxOwXTtya9MAMiys1fmvAbymHflc1UlYWjjKMftc/hsAw4EjX2wGhOXnHyHm/cGq+PXl41qxCcs3SyMZxROG6NYlf46zaqNgfGoMdhb65fH5L1TdkHj5PoD3L8WQ2KNqPUKMg/BC4MgDlapZ05IlsqqHDA83asmiRFY2dw8MXmZBTxTScqzaVtY1pbavtgB4dSGmFMzUlp3sFhzuI+BqEPUGjjxZq4/qApSCI1verlwB2hPZcgBvsKAfYHC6tC6wlgx1AvwAgGLJlrfLkfnup+EtqBTQ6k1sEgjvIsJalP4Hoj8TOsPEvxiOvTfjdnzRyMlZWAUaUWzw2f8B/gFPPY4wwCT8kgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/page-info.png":
/*!**********************************!*\
  !*** ./src/images/page-info.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABLElEQVRYR2NkQAKC024fYGRgsEcWI5f98z+L5NdsxReE9DMiKxCadvs/IQ2kyP9nZhJ4n678EZ8erA5490qFmaGB8R8ploHUCk67p8fI8Pcisr53PLw8DHESX3GZRXMHgCx+x6zCxpDO+BubI2jigP//Ga7+Z/jfw8TIOB9mKa5QpZkD3mer6ghNvZPKwPh/FtwRWaoo9oHEaeoAcLqYejuLkZFhKi5H0MoBrxkZGKbBLP3PyJDHyMAgCOL/////7ftsNRGYHFUdwD/5gSIz8+97hHLPO6SooKoDQBYLTLuVyPSfUR6rIxgZ6sG5gpYOwOd7WEE36oDREBgNgdEQGA2B0RAYDYHREBgNgcEfAoRatZTK4w6Bqbf2MDAyOlNqAX79//e8y1JzhakBAGInWTAa5goEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/video-info.png":
/*!***********************************!*\
  !*** ./src/images/video-info.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAADiElEQVRYR+WY3WscZRTGn2dmY1PIbnYGU4pYxexHiihS2uJHFAX1wisvCyqptYXsbkoCoRBrEUIxplJQq5lJg9AEP8D0HxBB9EIEoSJVWoq7k7YgFakls1FqWrM7j8zWNJtok26ySS6cq+Gdd875cT6eM+8QVVd8qPA8iQyIjdXrdb2XroLGkJ9LfjZrl+FNdOTC1obSzBjIhwFcFuABmKmrcwCUGgXuJGEA+DJgZG8xe99F4u2fN1obrv0I6h6R+4rZ1Ef1dl5tLzry050NJbNbDPogXPKjsQdpO95hUK8HxN5iNnViNQHmpd7N7zHAExIO0nLzpwk0TubSW9cKYNaP7eTPifiLtluYlnDS70rtXgeIUQEvhRAS9L6fS3evA8QxkN3/PwjL9Z4D1FcV8VYAW2qKRHy4sM0QxiXZoPGan018AFK3m0Zr2GuHNDC3n5sBtdUEYbmF7wHEAPxKoB3AtyXD6Pg9kyjcLkj1PtvJ114TllsIIDj+b8keu8XrAfGmBAoaKEZSR9DJmlR2WRALOynmeMkIgo8rci+dK5tmx1Qm8d1iUbGHCo8GJjaEexhgH4kXa0rHf7Zzvwy7ZaJXDAYgRkAM+03RPnRsvroQJu7kewzy3XnrAlYO8Y/FqHu+LYLyJwS2C/rBN5seQ+ddf1Y7bHbzrabYMbsm4hkI7XWDqBjulxHf5B01gN4yjGencokvFk3NcgpzSXXtV8Rq8d4hsV/k4342+c2aQtxIR2mc4EMSvvJzyacXaog1MtGMkvYTagjhAuApAk+uPB0nZVpXvAOADoeFSeDY5PXGQ+jdMr0wCrbjHQB1tHpdKy3MsEVN6tOwGMMWDYAXil3p07dMgXO5KW5M7bhZmAEyJrGrpkjcFKtcsjs+7PUYwGBFrKg3imbqrTURK8steIDC79JLBJ9YF9mOORM7Q4UU0QLikJ9JHq9lgDW73nYTwRGBlcIEcDeARE3pWM6QmidWxyd2mEF5cF0h/t0ty5iiK43EYhDTgMYnc+mX6+1kKXu2kx9VOEUrn/zCHZNd6fuXeqnez223cFbQzNzhR9pT7EqP1dvRrezFXW+3AY0JeJUYvdBoTZfOQLqXMAZnIuX3/uhsu7KaMLbj7RKDDwH84jfFHpg7EJdLowAekRAQOiXy2iqAhLMlBWBTOORkRF65cSCuulb71wCF64JOgZHP/Vzr17Ou/waPJTMRN8DE3gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/popup.less":
/*!************************!*\
  !*** ./src/popup.less ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_popup_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./popup.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/popup.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_popup_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_popup_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/popup.tsx":
/*!***********************!*\
  !*** ./src/popup.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const page_info_1 = __importDefault(__webpack_require__(/*! ./components/page-info */ "./src/components/page-info/index.tsx"));
const video_info_1 = __importDefault(__webpack_require__(/*! ./components/video-info */ "./src/components/video-info/index.tsx"));
const url_modes_1 = __importDefault(__webpack_require__(/*! ./components/url-modes */ "./src/components/url-modes/index.tsx"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
__webpack_require__(/*! ./popup.less */ "./src/popup.less");
const Popup = () => {
    const [count, setCount] = react_1.useState(0);
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentTabID, setCurrentTabID] = react_1.useState();
    const [navActiveIndex, setNavItemActiveIndex] = react_1.useState(0);
    const navItemArr = [
        { name: '页面信息', id: 0, disable: false, icon: __webpack_require__(/*! ./images/page-info.png */ "./src/images/page-info.png") },
        { name: '视频相关', id: 1, disable: false, icon: __webpack_require__(/*! ./images/video-info.png */ "./src/images/video-info.png") },
        { name: '调试模式', id: 2, disable: false, icon: __webpack_require__(/*! ./images/debug.png */ "./src/images/debug.png") },
        { name: '敬请期待', id: 3, disable: true, icon: __webpack_require__(/*! ./images/more.png */ "./src/images/more.png") },
    ];
    react_1.useEffect(() => {
        chrome.browserAction.setBadgeText({ text: count.toString() });
    }, [count]);
    react_1.useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTabID(tabs[0].id);
        });
    }, []);
    /**
     *  渲染选项卡列表
     */
    const navItem = react_1.useCallback(() => {
        return navItemArr.map((item) => {
            return react_1.default.createElement("div", { className: classnames_1.default('navItem', navActiveIndex === item.id && 'active', item.disable && 'disable'), key: item.id, onClick: () => setNavItemActiveIndex(item.id) },
                react_1.default.createElement("img", { src: item.icon }),
                react_1.default.createElement("span", { className: "navItemName" }, item.name));
        });
    }, [navActiveIndex]);
    const showContent = react_1.useCallback(() => {
        switch (navActiveIndex) {
            case 0:
                return react_1.default.createElement(page_info_1.default, null);
            case 1:
                return react_1.default.createElement(video_info_1.default, null);
            case 2:
                return react_1.default.createElement(url_modes_1.default, null);
            default:
                return react_1.default.createElement(page_info_1.default, null);
        }
    }, [navActiveIndex]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'root' },
            react_1.default.createElement("div", { className: 'navContainer' }, navItem()),
            react_1.default.createElement("div", { className: 'showContainer' }, showContent()))));
};
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Popup, null)), document.getElementById("root"));


/***/ }),

/***/ "./src/url_mode.ts":
/*!*************************!*\
  !*** ./src/url_mode.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlMode = {
    mock: '__MOCK__',
    vconsole: '__VCONSOLE__',
    debugger: '__DEBUG__'
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzPzg2OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgubGVzcz8yY2Q1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzP2RhMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZWJ1Zy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BhZ2UtaW5mby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92aWRlby1pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAubGVzcz83NDVkIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VybF9tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7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Q0E7QUFDQTtBQUNBLFNBQVMsNENBQTRDLG1CQUFPLENBQUMsMERBQXdCLEdBQUc7QUFDeEYsU0FBUyw0Q0FBNEMsbUJBQU8sQ0FBQyw0REFBeUIsR0FBRztBQUN6RixTQUFTLDRDQUE0QyxtQkFBTyxDQUFDLGtEQUFvQixHQUFHO0FBQ3BGLFNBQVMsMkNBQTJDLG1CQUFPLENBQUMsZ0RBQW1CLEdBQUc7QUFDbEY7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEUsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZLQUE2SztBQUN0TyxzREFBc0QsaUJBQWlCO0FBQ3ZFLHVEQUF1RCwyQkFBMkI7QUFDbEYsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLG9CQUFvQjtBQUNsRSxrREFBa0QsNEJBQTRCO0FBQzlFLGtEQUFrRCw2QkFBNkI7QUFDL0U7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BvcHVwLnRzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZUluZm9Sb290IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLnBhZ2VJbmZvUm93IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucGFnZUluZm9Sb3dIZWFkZXIge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wYWdlSW5mb1ZhbHVlIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2VJbmZvUm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5wYWdlSW5mb1JvdyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnBhZ2VJbmZvUm93SGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucGFnZUluZm9WYWx1ZSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLm1vZGVJdGVtIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubW9kZUl0ZW0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudmlkZW8tZm9ybSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5mb3JtLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG59XFxuLmZvcm0tbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mb3JtLXN1Ym1pdCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlkZW8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLWluZm8vaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFJQUFxSTtBQUN2STtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudmlkZW8tZm9ybSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5mb3JtLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG59XFxuLmZvcm0tbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mb3JtLXN1Ym1pdCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlkZW8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yb290IHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5uYXZDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjY2NjO1xcbn1cXG4ubmF2SXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ubmF2SXRlbSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5uYXZJdGVtLmRpc2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uYXZJdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xcbn1cXG4ubmF2SXRlbS5hY3RpdmUgLm5hdkl0ZW1OYW1lIHtcXG4gIGNvbG9yOiAjMDA5MWMzO1xcbn1cXG4ubmF2SXRlbU5hbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzVmNTY1MTtcXG59XFxuLnNob3dDb250YWluZXIge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKuWumuS5iea7muWKqOadoemrmOWuveWPiuiDjOaZryDpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xcbiAgLyrlrprkuYnmu5rliqjmnaHovajpgZMg5YaF6Zi05b2xK+WchuinkiovXFxuICAvKuWumuS5iea7keWdlyDlhoXpmLTlvbEr5ZyG6KeSKi9cXG4gIC8q5a6a5LmJ5pyA5LiK5pa55ZKM5pyA5LiL5pa555qE5oyJ6ZKuKi9cXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2Y2RmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwTUFBME07QUFDNU07QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5uYXZDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjY2NjO1xcbn1cXG4ubmF2SXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ubmF2SXRlbSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5uYXZJdGVtLmRpc2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uYXZJdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xcbn1cXG4ubmF2SXRlbS5hY3RpdmUgLm5hdkl0ZW1OYW1lIHtcXG4gIGNvbG9yOiAjMDA5MWMzO1xcbn1cXG4ubmF2SXRlbU5hbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzVmNTY1MTtcXG59XFxuLnNob3dDb250YWluZXIge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKuWumuS5iea7muWKqOadoemrmOWuveWPiuiDjOaZryDpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xcbiAgLyrlrprkuYnmu5rliqjmnaHovajpgZMg5YaF6Zi05b2xK+WchuinkiovXFxuICAvKuWumuS5iea7keWdlyDlhoXpmLTlvbEr5ZyG6KeSKi9cXG4gIC8q5a6a5LmJ5pyA5LiK5pa55ZKM5pyA5LiL5pa555qE5oyJ6ZKuKi9cXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2Y2RmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRLZXl3b3JkLCBzZXRDdXJyZW50S2V5d29yZF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudERlc2NyaXB0aW9uLCBzZXRDdXJyZW50RGVzY3JpcHRpb25dID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBdXRob3IsIHNldEN1cnJlbnRBdXRob3JdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUaXRsZSwgc2V0Q3VycmVudFRpdGxlXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgICAgICBjb25zdCBiZyA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcclxuICAgICAgICBzZXRDdXJyZW50S2V5d29yZCgoX2IgPSAoX2EgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iua2V5d29yZCk7XHJcbiAgICAgICAgc2V0Q3VycmVudERlc2NyaXB0aW9uKChfZCA9IChfYyA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGFnZUluZm8pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudEF1dGhvcigoX2YgPSAoX2UgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuYXV0aG9yKTtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VVJMKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpdGxlKHRhYnNbMF0udGl0bGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb290JyB9LFxyXG4gICAgICAgIFwiXFx1NUY1M1xcdTUyNERcXHU5ODc1XFx1OTc2MlxcdTRGRTFcXHU2MDZGOlwiLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3cnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3dIZWFkZXInIH0sIFwiXFx1NUY1M1xcdTUyNERcXHU5ODc1XFx1OTc2MnVybFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1ZhbHVlJyB9LCBjdXJyZW50VVJMKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1JvdycgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvd0hlYWRlcicgfSwgXCJ0aXRsZVwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1ZhbHVlJyB9LCBjdXJyZW50VGl0bGUpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93SGVhZGVyJyB9LCBcImtleXdvcmRcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9WYWx1ZScgfSwgY3VycmVudEtleXdvcmQpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93SGVhZGVyJyB9LCBcImRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvVmFsdWUnIH0sIGN1cnJlbnREZXNjcmlwdGlvbikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3cnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3dIZWFkZXInIH0sIFwiYXV0aG9yXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvVmFsdWUnIH0sIGN1cnJlbnRBdXRob3IpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWN0XzEuZGVmYXVsdC5tZW1vKFBhZ2VJbmZvKTtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCB1cmxfbW9kZV8xID0gcmVxdWlyZShcIi4uLy4uL3VybF9tb2RlXCIpO1xyXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBVcmxNb2RlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSW5kZXgsIHNldEN1cnJlbnRUYWJJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBtb2RlSXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cmxfbW9kZV8xLlVybE1vZGUpLm1hcChpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW9kZUl0ZW0nLCBvbkNsaWNrOiAoKSA9PiBjaGFuZ2VNb2RlKHVybF9tb2RlXzEuVXJsTW9kZVtpXSkgfSwgdXJsX21vZGVfMS5VcmxNb2RlW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8qKlxyXG4gICAgICog5YiH5o2i6aG16Z2i6LCD6K+V5qih5byPXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoYW5nZU1vZGUgPSAobW9kZSkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWJJZCA9IE51bWJlcih0YWJzWzBdLmlkKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBTdHJpbmcodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VXJsID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGN1cnJlbnRVcmw7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IChfYSA9IGxpbmsuc2VhcmNoKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoXCI/XCIpWzFdO1xyXG4gICAgICAgICAgICBpZiAoIXNlYXJjaCAvKuS4jeWtmOWcqHNlYXJjaOmDqOWIhiovKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bW9kZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAvKuWtmOWcqHNlYXJjaCovXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YobW9kZSkgPiAtMSAvKuW9k+WJjeW3suWtmOWcqOmAieS4reeahG1vZGXvvIzliJnnm7TmjqXljrvpmaTov5nkuKrmqKHlvI8qLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWFyY2ggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoJz8nICsgbW9kZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnPycgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZignJicgKyBtb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcmJyArIG1vZGUsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlYXJjaCA9IHNlYXJjaCArICcmJyArIG1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShOdW1iZXIoY3VycmVudFRhYklkKSwgeyB1cmw6IG5ld1VybCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdoZWFkZXInIH0sIFwiXFx1OEMwM1xcdThCRDVcXHU2QTIxXFx1NUYwRlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vZGVDb250YWluZXInIH0sIG1vZGVJdGVtKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVXJsTW9kZXMpO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFZpZGVvSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2aWRlb1VybCwgc2V0VmlkZW9VcmxdID0gcmVhY3RfMS51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2aWRlb1NpemUsIHNldFZpZGVvU2l6ZV0gPSByZWFjdF8xLnVzZVN0YXRlKDApOyAvLyDpgJrov4cgWEhSIOeahOWTjeW6lOWktOeahCBjb250ZW50LWxlbmd0aCDojrflj5bjgIIg5Y2V5L2NOiBrYlxyXG4gICAgY29uc3QgW3ZpZGVvUmF0ZSwgc2V0VmlkZW9SYXRlXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIOmAmui/hyB2aWRlb+e7hOS7tiDojrflj5bop4bpopHnmoTplb/luqbjgIIg5Y2V5L2NOiDnp5JcclxuICAgIGxldCB2aWRlb0VsID0gcmVhY3RfMS51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBnZXRWaWRlb1VybCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmlkZW9VcmwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdmlkZW9VcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IHRoaXMuSEVBREVSU19SRUNFSVZFRCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IChfYSA9IHRoaXMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbWFwIG9mIGhlYWRlciBuYW1lcyB0byB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJNYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFydHMuam9pbignOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBbU3RyaW5nKGhlYWRlcildID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvU2l6ZShoZWFkZXJNYXBbJ2NvbnRlbnQtbGVuZ3RoJ10pO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jdXJyZW50ICYmIHZpZGVvRWwuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0R1cmF0aW9uID0gZ2V0VmlkZW9EdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9EdXJhdGlvbiAmJiBzZXRWaWRlb1JhdGUoTWF0aC5mbG9vcihoZWFkZXJNYXBbJ2NvbnRlbnQtbGVuZ3RoJ10gLyAxMDAwICogOCAvIHZpZGVvRHVyYXRpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluinhumikeaXtumVv1xyXG4gICAgICovXHJcbiAgICBjb25zdCBnZXRWaWRlb0R1cmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2aWRlb0VsLmN1cnJlbnQgJiYgdmlkZW9FbC5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ2aWRlby1mb3JtXCIgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLXRpdGxlXCIgfSwgXCJcXHU2N0U1XFx1NzcwQlxcdTdFQkZcXHU0RTBBXFx1ODlDNlxcdTk4OTFcXHU3Njg0XFx1NzgwMVxcdTczODdcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1pdGVtXCIgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogJ2Zvcm0tbGFiZWwnIH0sIFwiXFx1ODlDNlxcdTk4OTFcXHU1NzMwXFx1NTc0MFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogJ2Zvcm0taW5wdXQnLCBvbkNoYW5nZTogZ2V0VmlkZW9VcmwsIHZhbHVlOiB2aWRlb1VybCB9KSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1zdWJtaXRcIiwgb25DbGljazogc3VibWl0IH0sIFwiXFx1Nzg2RVxcdTVCOUFcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiLCB7IGNsYXNzTmFtZTogJ3ZpZGVvJywgcmVmOiB2aWRlb0VsLCBzcmM6IHZpZGVvVXJsIH0pLFxyXG4gICAgICAgIFwiXFx1ODlDNlxcdTk4OTFcXHU3ODAxXFx1NzM4NzpcIixcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdmFsdWU6IHZpZGVvUmF0ZSB9KSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWN0XzEuZGVmYXVsdC5tZW1vKFZpZGVvSW5mbyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFEdEVsRVFWUllSODJYVzJnY1ZSekd2MjltWFpOV21wM0ZCcXhJYXpzem9IaWpCVzlJcXo2b2plQ0RZS3dCSzMzcFptY2tZTjdFUG13UmZSUTFtZGtVUkx4Qk5Bb0ZMVjd3VWtGSWkxS3BMN1hkbWZSQkswcXNPN3RXckd0MjV5OHpZZGRwTm0xVHlKRHUyNTQ5NTh4dnYvUC8vdWNiWW9VL1hPSG40L0lFNkN2Nzk2dWhEQW14RGhBL2hQSm0zZEtQTEZSTGN6d0hsRXhnbVlYRmxGemorSHFHWVRrRXgycVc4ZUZpYzdvVTBNcGVFU0hHU1NqdEJRSUlnZDFWeTNpdHMwbEpsSHkvMzRxK1YxVTlpd0xudWdCZGZ6Y2grd1I0TzdDTW5SY0YwTnlUdDBDYVIwQ3FBSjRUNGhCRDdDS3hVNEFBcW5KOVVOaFVqemVhRWpWLzJtL0dBRTMwWU1Sb2RDdFVLWkNjRU9DZHdES2VYQUtBOXlLQlp3V2NDQ3k5R0M4UW9WYjJ2eU93SlNRZnJSWDEvYWtCNU4zS0d3Q2ZDc0dSbXFXUHRZazF0ekpKY01jNTQ2a280SGdXQ1FlUUw2cXp4b01vTWV3dG43aTJOMVNPZ1ZqVFV1U0IrckQ1ZVdvSzRLV2ZlL005WjJjQVhnUGdNd2dPZzNnTXdJMEMrU2F3eksyZGMweERnV2p6cTV6S0RWZUFuNUJZbjNEQk5GUmxvRk9BYVJWaDBtSmF2Nytmd0NNZ1N0V2lzYmVyZ3ROU29QMmdka0dLd0E1c3cwMEM1Rnh2R3dWakpHNmVONG9jRllYUDFJckcxOGw1bW5PSk5rd3VQaDlBMzdpM1dTR21TVnk1UUpWL1FwRzdhclo1dE9PZU5BRHlybmNJd0owaStKUXRQRjVkM1JLdG9VUTJmVGdhQzJ4amUzb0FVNkpxcC8wR0FSVk5YRmNkTVU3RmhmdXF0emFid2F4QTVvSlpveWV5YnpTKy9FZFFFa1hyOTg0U3pDWUJWbzM5dEs1SGJmd1N0K1dyOVF3R0dkOFJ5dzhRYmVwV0RrUnl4MzJpaWNHNENGV1pKRGtnZ3U4RDI5aVMzaEVBeUUyY3ZGVUpXOU1BVmkwc3dpYlZiWDhXTjM2YktrQzBlVzY4c3BYRUt5UnY2OWdReW1qTjFnK21ic05MYWNVNXQ3SkhBWitQM0JFeU8xUzMxZ2NMRzlwNUk5bUZHdEhGTGlOdDMwd2ZtcTBESk85SnRITUpCWU4xMi9nZ0NaRU9nT045UmVJK0FNY2dlRitJMndsc0Y4aS9EVFc3NGUvQ2hsL2JFTXNPRU9kSmtTOGhPQ1VaNWFiNEFvdENqZXQvVE9JaENQWldiYU9VR2tDVUtTbHdSV1F5c00yaC94MHhuelVFOG01Z21VK2tCcEFyZS9jcWdvUG5LQkExc0xYZVIvTzlRbDRJYkhOUGFnQlJXTlYrOTQrVDBDSHlJOEFwQWU2STVCZEJLS3E2dVRhODhZY2xBSGl2QTlnbGtHSmdtUk5kZWVBQ3NUenYrSGVERW9YWC9xUUxCQml0V2NiTFMzS0JOajR6UUxaRzUwUzF6ank5cWRJRkVQZDZMOHFQYW1DYncxMi92L1hiNnZ5WnY0YUVNa0RCSHkxVjN1dmt5Y1RreS9QVmJMRi9tOWJZaWl2d0gzZUZwRDlOdWVTREFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFENGtsRVFWUllSKzJYYTJnY1ZSVEgvK2Z1WXRxS3ljNWdLdGdLMnV6ZFlDbUJncVhGZ3ErQUtJaGdzYlZRb3VaRHBEdVQrS0lCc1IrNjlJdXYwSlEyTXh1bzRDUGloMkxSaWg5VWlJSldxUThRSDRqdTNVUzB0V0phNW02Q1lMVTc5OGdzWFVuU2ZXU1REVVZ3UHM2ZDh6Ky9PZmZjTS84aFhPYUxMbk4rL1BjQTJrWW5icUl3dkp0QTE0SDQycWlDRFBvTjRKOVp4TjZkM3QzeFpTTlZYVmdGTWh4UFhLTWNZV2dRWU1HRVk4UVVSSWtNNFNvQzFnQjhJNEc2d0RodHdFT0ZzOUpEaG9yMVlPb0N0STdrTnNjRmpUSHo3NFpqbVdsMzNRY2c0a3JDclY0K0dTZnpFSU1HQ0pncUd1Nlo2VTk5Vmd1aUpvRHQ1ZnNZNWhrSVBLelRxWGZxdlUxNTNUNmtXazBjK3dqY1R5ejZBemQ1cEZwc1ZRRGJWMCtDTVlnWXVvUGQ4dnVGSnAvOW5PV3BYU0M4QXZDRDJrbTlYa21qSWtDYnArNlBFY1lNNGVaQ1duNjFtT1RsbUlTZjZ5V21MSXpZcEFjNnZwMnZkU25BU3ordHNQNjg4Q3VBdmRwSmpTNGxlVG5XOHRVSU1YY0g3WElEZGxBNFcvTVNBTXZMN3lVeVBjR1VYSThNbVdZQTRKQnFzZUpReEJnT1hEbGNFOEQyYzJkQ3dzQjBPbldzS2Nrdml0aSsyZzdtZzRHYldsTVZ3UEludTRqRGswSDdYd25zMlBCM013Rnc5THNyN0hNdG1rT3haWFl2ek5rQzI4dnZZZkF0MnBYM05qWDVSVEhMVTI4VDZLUEFUUTZWOWVjQVJNMEM0QS90eUtlV0JjQlh6NEp4cFhibFFHVUFUNzNGUk9NRkozbDROa0RDVTBNRWZvd2g3aXk0eVE5TGF4bU9XKzBxQjZLWVhobnZSTzhONTZQYjBlU01FVTZBNkloMnBETkh4ODhQRVBnTzdjajdxbFhnVFRDTmF6Y1pWZUxmeS9LVkQrYStVTVMzenFUWGZWNWFPSEJxcGJYaS9JOEFYOUJUc3JNODl4TmUvbmFDZVIrRWc5cEpEYzRCeU9ZZUZRYTNCVzVxVzdVS2VDQk1hMGMrdlR4YmtIc2VvRlhha2YwVkFVcE5TTHhSTzNMWDhnQ280OFQwY1kwbW5Pd0NpdU02TFZkWCsrSXRHaXc2aG1kYkNtekU1cXJITUJLM1BYV0tCZTNVNmVRbmkwNVdJVERoVFd3VENBL1hIRVJSWE1KWGp4T3dYVHR5YTlNQU1peXMxZm12QWJ5bUhmbGMxVWxZV2pqS01mdGMvaHNBdzRFalgyd0doT1huSHlIbS9jR3ErUFhsNDFxeENjczNTeU1aeFJPRzZOWWxmNDZ6YXFOZ2ZHb01kaGI2NWZINUwxVGRrSGo1UG9EM0w4V1EyS05xUFVLTWcvQkM0TWdEbGFwWjA1SWxzcXFIREE4M2FzbWlSRlkyZHc4TVhtWkJUeFRTY3F6YVZ0WTFwYmF2dGdCNGRTR21GTXpVbHAzc0ZoenVJK0JxRVBVR2pqeFpxNC9xQXBTQ0kxdmVybHdCMmhQWmNnQnZzS0FmWUhDNnRDNndsZ3gxQXZ3QWdHTEpscmZMa2ZudXArRXRxQlRRNmsxc0VnanZJc0phbFA0SG9qOFRPc1BFdnhpT3ZUZmpkbnpSeU1sWldBVWFVV3p3MmY4Qi9nRlBQWTR3d0NUOGtnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQkxFbEVRVlJZUjJOa1FBS0MwMjRmWUdSZ3NFY1dJNWY5OHorTDVOZHN4UmVFOURNaUt4Q2FkdnMvSVEya3lQOW5aaEo0bjY3OEVaOGVyQTU0OTBxRm1hR0I4UjhwbG9IVUNrNjdwOGZJOFBjaXNyNTNQTHc4REhFU1gzR1pSWE1IZ0N4K3g2ekN4cERPK0J1YkkyamlnUC8vR2E3K1ovamZ3OFRJT0I5bUthNVFwWmtEM21lcjZnaE52WlBLd1BoL0Z0d1JXYW9vOW9IRWFlb0FjTHFZZWp1TGtaRmhLaTVIME1vQnJ4a1pHS2JCTFAzUHlKREh5TUFnQ09MLy8vLy83ZnRzTlJHWUhGVWR3RC81Z1NJejgrOTdoSExQTzZTb29Lb0RRQllMVEx1VnlQU2ZVUjZySXhnWjZzRzVncFlPd09kN1dFRTM2b0RSRUJnTmdkRVFHQTJCMFJBWURZSFJFQmdOZ2NFZkFvUmF0WlRLNHc2QnFiZjJNREF5T2xOcUFYNzkvL2U4eTFKemhha0JBR0luV1RBYTVnb0VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDRUFBQUFnQ0FZQUFBQ2N1QkhLQUFBRGlFbEVRVlJZUitXWTNXc2NaUlRHbjJkbVkxUElibllHVTRwWXhleEhpaWhTMnVKSEZBWDF3aXN2Q3lxcHRZWHNia29Db1JCckVVSXhwbEpRcTVsSmc5QUVQOEQwSHhCQjlFSUVvU0pWV29xN2s3WWdGYWtsczFGcVdyTTdqOHpXTkp0b2syNnlTUzZjcStHZGQ4NzVjVDZlTSs4UVZWZDhxUEE4aVF5SWpkWHJkYjJYcm9MR2tKOUxmalpybCtGTmRPVEMxb2JTekJqSWh3RmNGdUFCbUttcmN3Q1VHZ1h1SkdFQStESmdaRzh4ZTk5RjR1MmZOMW9icnYwSTZoNlIrNHJaMUVmMWRsNXRMenJ5MDUwTkpiTmJEUG9nWFBLanNRZHBPOTVoVUs4SHhONWlOblZpTlFIbXBkN043ekhBRXhJTzBuTHpwd2swVHViU1c5Y0tZTmFQN2VUUGlmaUx0bHVZbG5EUzcwcnRYZ2VJVVFFdmhSQVM5TDZmUzNldkE4UXhrTjMvUHdqTDlaNEQxRmNWOFZZQVcycUtSSHk0c00wUXhpWFpvUEdhbjAxOEFGSzNtMFpyMkd1SE5EQzNuNXNCdGRVRVlibUY3d0hFQVB4S29CM0F0eVhENlBnOWt5amNMa2oxUHR2SjExNFRsbHNJSURqK2I4a2V1OFhyQWZHbUJBb2FLRVpTUjlESm1sUjJXUkFMT3lubWVNa0lnbzhyY2krZEs1dG14MVFtOGQxaVViR0hDbzhHSmphRWV4aGdINGtYYTBySGY3Wnp2d3k3WmFKWERBWWdSa0FNKzAzUlBuUnN2cm9RSnU3a2V3enkzWG5yQWxZTzhZL0ZxSHUrTFlMeUp3UzJDL3JCTjVzZVErZGRmMVk3YkhienJhYllNYnNtNGhrSTdYV0RxQmp1bHhIZjVCMDFnTjR5akdlbmNva3ZGazNOY2dwelNYWHRWOFJxOGQ0aHNWL2s0MzQyK2MyYVF0eElSMm1jNEVNU3Z2Snp5YWNYYW9nMU10R01rdllUYWdqaEF1QXBBayt1UEIwblpWcFh2QU9BRG9lRlNlRFk1UFhHUStqZE1yMHdDcmJqSFFCMXRIcGRLeTNNc0VWTjZ0T3dHTU1XRFlBWGlsM3AwN2RNZ1hPNUtXNU03YmhabUFFeUpyR3Jwa2pjRkt0Y3Nqcys3UFVZd0dCRnJLZzNpbWJxclRVUks4c3RlSURDNzlKTEJKOVlGOW1PT1JNN1E0VVUwUUxpa0o5SkhxOWxnRFc3M25ZVHdSR0JsY0lFY0RlQVJFM3BXTTZRbWlkV3h5ZDJtRUY1Y0YwaC90MHR5NWlpSzQzRVloRFRnTVluYyttWDYrMWtLWHUya3g5Vk9FVXJuL3pDSFpOZDZmdVhlcW5lejIyM2NGYlF6TnpoUjlwVDdFcVAxZHZScmV6RlhXKzNBWTBKZUpVWXZkQm9UWmZPUUxxWE1BWm5JdVgzL3Voc3U3S2FNTGJqN1JLRER3SDg0amZGSHBnN0VKZExvd0Fla1JBUU9pWHkyaXFBaExNbEJXQlRPT1JrUkY2NWNTQ3V1bGI3MXdDRjY0Sk9nWkhQL1Z6cjE3T3Uvd2FQSlRNUk44REUzZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuY29uc3QgcGFnZV9pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9wYWdlLWluZm9cIikpO1xyXG5jb25zdCB2aWRlb19pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy92aWRlby1pbmZvXCIpKTtcclxuY29uc3QgdXJsX21vZGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy91cmwtbW9kZXNcIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5yZXF1aXJlKFwiLi9wb3B1cC5sZXNzXCIpO1xyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSUQsIHNldEN1cnJlbnRUYWJJRF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmF2QWN0aXZlSW5kZXgsIHNldE5hdkl0ZW1BY3RpdmVJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbmF2SXRlbUFyciA9IFtcclxuICAgICAgICB7IG5hbWU6ICfpobXpnaLkv6Hmga8nLCBpZDogMCwgZGlzYWJsZTogZmFsc2UsIGljb246IHJlcXVpcmUoXCIuL2ltYWdlcy9wYWdlLWluZm8ucG5nXCIpIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6KeG6aKR55u45YWzJywgaWQ6IDEsIGRpc2FibGU6IGZhbHNlLCBpY29uOiByZXF1aXJlKFwiLi9pbWFnZXMvdmlkZW8taW5mby5wbmdcIikgfSxcclxuICAgICAgICB7IG5hbWU6ICfosIPor5XmqKHlvI8nLCBpZDogMiwgZGlzYWJsZTogZmFsc2UsIGljb246IHJlcXVpcmUoXCIuL2ltYWdlcy9kZWJ1Zy5wbmdcIikgfSxcclxuICAgICAgICB7IG5hbWU6ICfmlazor7fmnJ/lvoUnLCBpZDogMywgZGlzYWJsZTogdHJ1ZSwgaWNvbjogcmVxdWlyZShcIi4vaW1hZ2VzL21vcmUucG5nXCIpIH0sXHJcbiAgICBdO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XHJcbiAgICB9LCBbY291bnRdKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VVJMKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYklEKHRhYnNbMF0uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLyoqXHJcbiAgICAgKiAg5riy5p+T6YCJ6aG55Y2h5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkl0ZW0gPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmF2SXRlbUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdCgnbmF2SXRlbScsIG5hdkFjdGl2ZUluZGV4ID09PSBpdGVtLmlkICYmICdhY3RpdmUnLCBpdGVtLmRpc2FibGUgJiYgJ2Rpc2FibGUnKSwga2V5OiBpdGVtLmlkLCBvbkNsaWNrOiAoKSA9PiBzZXROYXZJdGVtQWN0aXZlSW5kZXgoaXRlbS5pZCkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpdGVtLmljb24gfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibmF2SXRlbU5hbWVcIiB9LCBpdGVtLm5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwYWdlX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVybF9tb2Rlc18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHBhZ2VfaW5mb18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdyb290JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ25hdkNvbnRhaW5lcicgfSwgbmF2SXRlbSgpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzaG93Q29udGFpbmVyJyB9LCBzaG93Q29udGVudCgpKSkpKTtcclxufTtcclxucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXHJcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cCwgbnVsbCkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVybE1vZGUgPSB7XHJcbiAgICBtb2NrOiAnX19NT0NLX18nLFxyXG4gICAgdmNvbnNvbGU6ICdfX1ZDT05TT0xFX18nLFxyXG4gICAgZGVidWdnZXI6ICdfX0RFQlVHX18nXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=