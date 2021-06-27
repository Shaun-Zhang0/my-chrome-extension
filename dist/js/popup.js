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
___CSS_LOADER_EXPORT___.push([module.i, ".pageInfoRoot {\n  width: 100%;\n  overflow: auto;\n  border-top: 1px dashed #cccccc;\n}\n.pageInfoRow {\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n}\n.pageInfoRowHeader {\n  min-height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: bold;\n  padding-left: 14px;\n}\n.pageInfoValue {\n  min-height: 60px;\n  padding: 14px;\n  border-top: 1px solid #cccccc;\n  word-wrap: break-word;\n  white-space: normal;\n}\n", "",{"version":3,"sources":["webpack://./src/components/page-info/index.less"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,cAAc;EACd,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":[".pageInfoRoot {\n  width: 100%;\n  overflow: auto;\n  border-top: 1px dashed #cccccc;\n}\n.pageInfoRow {\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n}\n.pageInfoRowHeader {\n  min-height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: bold;\n  padding-left: 14px;\n}\n.pageInfoValue {\n  min-height: 60px;\n  padding: 14px;\n  border-top: 1px solid #cccccc;\n  word-wrap: break-word;\n  white-space: normal;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, ".root {\n  min-width: 500px;\n}\n.navContainer {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  background-color: pink;\n  overflow: hidden;\n}\n.navItem {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  float: left;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  background-color: aliceblue;\n  margin-left: 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.navItem.active {\n  background-color: aqua;\n}\n.showContainer {\n  height: 300px;\n  width: 100%;\n  overflow: auto;\n  background-color: aliceblue;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n  /*定义滚动条轨道 内阴影+圆角*/\n  /*定义滑块 内阴影+圆角*/\n  /*定义最上方和最下方的按钮*/\n}\n.showContainer::-webkit-scrollbar {\n  width: 8px;\n  background-color: #fff;\n  z-index: 11;\n}\n.showContainer::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #ededed;\n}\n.showContainer::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #46cdff;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n}\n.showContainer::-webkit-scrollbar-button {\n  background-color: #000;\n  border: 1px solid yellow;\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/popup.less"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,WAAW;EACX,cAAc;EACd,2BAA2B;EAC3B,4BAA4B;EAC5B,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,UAAU;EACV,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,oDAAoD;EACpD,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,0MAA0M;AAC5M;AACA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;AACf","sourcesContent":[".root {\n  min-width: 500px;\n}\n.navContainer {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  background-color: pink;\n  overflow: hidden;\n}\n.navItem {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  float: left;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  background-color: aliceblue;\n  margin-left: 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.navItem.active {\n  background-color: aqua;\n}\n.showContainer {\n  height: 300px;\n  width: 100%;\n  overflow: auto;\n  background-color: aliceblue;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n  /*定义滚动条轨道 内阴影+圆角*/\n  /*定义滑块 内阴影+圆角*/\n  /*定义最上方和最下方的按钮*/\n}\n.showContainer::-webkit-scrollbar {\n  width: 8px;\n  background-color: #fff;\n  z-index: 11;\n}\n.showContainer::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #ededed;\n}\n.showContainer::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #46cdff;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n}\n.showContainer::-webkit-scrollbar-button {\n  background-color: #000;\n  border: 1px solid yellow;\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/video-info/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/video-info/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const VideoInfo = () => {
    return react_1.default.createElement("div", null, "\u89C6\u9891\u9875");
};
exports.default = react_1.default.memo(VideoInfo);


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
const url_mode_1 = __webpack_require__(/*! ./url_mode */ "./src/url_mode.ts");
const page_info_1 = __importDefault(__webpack_require__(/*! ./components/page-info */ "./src/components/page-info/index.tsx"));
const video_info_1 = __importDefault(__webpack_require__(/*! ./components/video-info */ "./src/components/video-info/index.tsx"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
__webpack_require__(/*! ./popup.less */ "./src/popup.less");
const Popup = () => {
    const [count, setCount] = react_1.useState(0);
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentTabID, setCurrentTabID] = react_1.useState();
    const [navActiveIndex, setNavItemActiveIndex] = react_1.useState(0);
    const navItemArr = [
        { name: '页面信息', id: 0 },
        { name: '视频相关', id: 1 },
        { name: '页面信息2', id: 2 },
        { name: '页面信息3', id: 3 },
        { name: '页面信息4', id: 4 },
        { name: '页面信息5', id: 5 },
        { name: '页面信息6', id: 6 },
        { name: '页面信息7', id: 7 },
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
     * 切换模式
     * @param {string} mode 模式
     * 例如: MOCK 对应的是__MOCK__
     */
    const selectMockMode = (mode) => {
        // console.log(mode)
        if (!mode) {
            throw new Error('mode不得为空');
        }
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (!tab.url) {
            }
            else {
                const currentTabUrl = tab.url.split('?')[0]; // 当前tab的URl
                const searchParams = tab.url.split('?')[1] ? tab.url.split('?')[1] : ''; // 判断当前URL是否存在search部分 存在则提取出来
                // // const rejectMode = '?__MOCK__';
                const injectMode = '?' + url_mode_1.UrlMode[mode];
                for (let i in url_mode_1.UrlMode) {
                    searchParams.replace(/UrlMode[i]/g, '');
                }
                debugger;
                // console.log(injectMode)
                // debugger;
                chrome.tabs.update(Number(currentTabID), { url: currentTabUrl + injectMode + searchParams });
                // const newCurrentTabURl = currentTabUrl
            }
        });
    };
    /**
     *  渲染选项卡列表
     */
    const navItem = react_1.useCallback(() => {
        return navItemArr.map((item) => {
            return react_1.default.createElement("div", { className: classnames_1.default('navItem', navActiveIndex === item.id && 'active'), key: item.id, onClick: () => setNavItemActiveIndex(item.id) }, item.name);
        });
    }, [navActiveIndex]);
    const showContent = react_1.useCallback(() => {
        switch (navActiveIndex) {
            case 0:
                return react_1.default.createElement(page_info_1.default, null);
            case 1:
                return react_1.default.createElement(video_info_1.default, null);
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
    vconsole: '__VCONSOLE__'
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3M/ODY4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlLWluZm8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLWluZm8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzPzc0NWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXJsX21vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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Q0E7QUFDQTtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsaURBQWlEO0FBQzNHO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtKQUFrSjtBQUMzTSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxvQkFBb0I7QUFDbEUsa0RBQWtELDRCQUE0QjtBQUM5RSxrREFBa0QsNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBvcHVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlSW5mb1Jvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2NjY2NjYztcXG59XFxuLnBhZ2VJbmZvUm93IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbn1cXG4ucGFnZUluZm9Sb3dIZWFkZXIge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxufVxcbi5wYWdlSW5mb1ZhbHVlIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wYWdlLWluZm8vaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2VJbmZvUm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjY2NjY2NjO1xcbn1cXG4ucGFnZUluZm9Sb3cge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxufVxcbi5wYWdlSW5mb1Jvd0hlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG59XFxuLnBhZ2VJbmZvVmFsdWUge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yb290IHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5uYXZDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm5hdkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2SXRlbS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuLnNob3dDb250YWluZXIge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAvKuWumuS5iea7muWKqOadoemrmOWuveWPiuiDjOaZryDpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xcbiAgLyrlrprkuYnmu5rliqjmnaHovajpgZMg5YaF6Zi05b2xK+WchuinkiovXFxuICAvKuWumuS5iea7keWdlyDlhoXpmLTlvbEr5ZyG6KeSKi9cXG4gIC8q5a6a5LmJ5pyA5LiK5pa55ZKM5pyA5LiL5pa555qE5oyJ6ZKuKi9cXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2Y2RmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XFxufVxcbi5zaG93Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBNQUEwTTtBQUM1TTtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubmF2SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZJdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uc2hvd0NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIC8q5a6a5LmJ5rua5Yqo5p2h6auY5a695Y+K6IOM5pmvIOmrmOWuveWIhuWIq+WvueW6lOaoquerlua7muWKqOadoeeahOWwuuWvuCovXFxuICAvKuWumuS5iea7muWKqOadoei9qOmBkyDlhoXpmLTlvbEr5ZyG6KeSKi9cXG4gIC8q5a6a5LmJ5ruR5Z2XIOWGhemYtOW9sSvlnIbop5IqL1xcbiAgLyrlrprkuYnmnIDkuIrmlrnlkozmnIDkuIvmlrnnmoTmjInpkq4qL1xcbn1cXG4uc2hvd0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMTtcXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZjZGZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcXG59XFxuLnNob3dDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgUGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFVSTCwgc2V0Q3VycmVudFVSTF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudEtleXdvcmQsIHNldEN1cnJlbnRLZXl3b3JkXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RGVzY3JpcHRpb24sIHNldEN1cnJlbnREZXNjcmlwdGlvbl0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudEF1dGhvciwgc2V0Q3VycmVudEF1dGhvcl0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRpdGxlLCBzZXRDdXJyZW50VGl0bGVdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xyXG4gICAgICAgIGNvbnN0IGJnID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRLZXl3b3JkKChfYiA9IChfYSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFnZUluZm8pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5rZXl3b3JkKTtcclxuICAgICAgICBzZXRDdXJyZW50RGVzY3JpcHRpb24oKF9kID0gKF9jID0gYmcgPT09IG51bGwgfHwgYmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJnLnRlc3QxKCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYWdlSW5mbykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50QXV0aG9yKChfZiA9IChfZSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFnZUluZm8pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5hdXRob3IpO1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGl0bGUodGFic1swXS50aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvb3QnIH0sXHJcbiAgICAgICAgXCJcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NEZFMVxcdTYwNkY6XCIsXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1JvdycgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvd0hlYWRlcicgfSwgXCJcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYydXJsXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvVmFsdWUnIH0sIGN1cnJlbnRVUkwpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvUm93SGVhZGVyJyB9LCBcInRpdGxlXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3BhZ2VJbmZvVmFsdWUnIH0sIGN1cnJlbnRUaXRsZSkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3cnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3dIZWFkZXInIH0sIFwia2V5d29yZFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1ZhbHVlJyB9LCBjdXJyZW50S2V5d29yZCkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3cnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb3dIZWFkZXInIH0sIFwiZGVzY3JpcHRpb25cIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9WYWx1ZScgfSwgY3VycmVudERlc2NyaXB0aW9uKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1JvdycgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvd0hlYWRlcicgfSwgXCJhdXRob3JcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9WYWx1ZScgfSwgY3VycmVudEF1dGhvcikpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oUGFnZUluZm8pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IFZpZGVvSW5mbyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIlxcdTg5QzZcXHU5ODkxXFx1OTg3NVwiKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVmlkZW9JbmZvKTtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuY29uc3QgdXJsX21vZGVfMSA9IHJlcXVpcmUoXCIuL3VybF9tb2RlXCIpO1xyXG5jb25zdCBwYWdlX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BhZ2UtaW5mb1wiKSk7XHJcbmNvbnN0IHZpZGVvX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3ZpZGVvLWluZm9cIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5yZXF1aXJlKFwiLi9wb3B1cC5sZXNzXCIpO1xyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSUQsIHNldEN1cnJlbnRUYWJJRF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmF2QWN0aXZlSW5kZXgsIHNldE5hdkl0ZW1BY3RpdmVJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbmF2SXRlbUFyciA9IFtcclxuICAgICAgICB7IG5hbWU6ICfpobXpnaLkv6Hmga8nLCBpZDogMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+inhumikeebuOWFsycsIGlkOiAxIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvMicsIGlkOiAyIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvMycsIGlkOiAzIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvNCcsIGlkOiA0IH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvNScsIGlkOiA1IH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvNicsIGlkOiA2IH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvNycsIGlkOiA3IH0sXHJcbiAgICBdO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XHJcbiAgICB9LCBbY291bnRdKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VVJMKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYklEKHRhYnNbMF0uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliIfmjaLmqKHlvI9cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIOaooeW8j1xyXG4gICAgICog5L6L5aaCOiBNT0NLIOWvueW6lOeahOaYr19fTU9DS19fXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHNlbGVjdE1vY2tNb2RlID0gKG1vZGUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtb2RlKVxyXG4gICAgICAgIGlmICghbW9kZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21vZGXkuI3lvpfkuLrnqbonKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFiID0gdGFic1swXTtcclxuICAgICAgICAgICAgaWYgKCF0YWIudXJsKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFiVXJsID0gdGFiLnVybC5zcGxpdCgnPycpWzBdOyAvLyDlvZPliY10YWLnmoRVUmxcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHRhYi51cmwuc3BsaXQoJz8nKVsxXSA/IHRhYi51cmwuc3BsaXQoJz8nKVsxXSA6ICcnOyAvLyDliKTmlq3lvZPliY1VUkzmmK/lkKblrZjlnKhzZWFyY2jpg6jliIYg5a2Y5Zyo5YiZ5o+Q5Y+W5Ye65p2lXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBjb25zdCByZWplY3RNb2RlID0gJz9fX01PQ0tfXyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmplY3RNb2RlID0gJz8nICsgdXJsX21vZGVfMS5VcmxNb2RlW21vZGVdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB1cmxfbW9kZV8xLlVybE1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMucmVwbGFjZSgvVXJsTW9kZVtpXS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluamVjdE1vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShOdW1iZXIoY3VycmVudFRhYklEKSwgeyB1cmw6IGN1cnJlbnRUYWJVcmwgKyBpbmplY3RNb2RlICsgc2VhcmNoUGFyYW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbmV3Q3VycmVudFRhYlVSbCA9IGN1cnJlbnRUYWJVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogIOa4suafk+mAiemhueWNoeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBjb25zdCBuYXZJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW1BcnIubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoJ25hdkl0ZW0nLCBuYXZBY3RpdmVJbmRleCA9PT0gaXRlbS5pZCAmJiAnYWN0aXZlJyksIGtleTogaXRlbS5pZCwgb25DbGljazogKCkgPT4gc2V0TmF2SXRlbUFjdGl2ZUluZGV4KGl0ZW0uaWQpIH0sIGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbbmF2QWN0aXZlSW5kZXhdKTtcclxuICAgIGNvbnN0IHNob3dDb250ZW50ID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChuYXZBY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocGFnZV9pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh2aWRlb19pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocGFnZV9pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW25hdkFjdGl2ZUluZGV4XSk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3Jvb3QnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbmF2Q29udGFpbmVyJyB9LCBuYXZJdGVtKCkpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3Nob3dDb250YWluZXInIH0sIHNob3dDb250ZW50KCkpKSkpO1xyXG59O1xyXG5yZWFjdF9kb21fMS5kZWZhdWx0LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuU3RyaWN0TW9kZSwgbnVsbCxcclxuICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwLCBudWxsKSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXJsTW9kZSA9IHtcclxuICAgIG1vY2s6ICdfX01PQ0tfXycsXHJcbiAgICB2Y29uc29sZTogJ19fVkNPTlNPTEVfXydcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==