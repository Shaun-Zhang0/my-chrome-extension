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

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/page-info/index.less":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/components/page-info/index.less ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index__pageInfoRoot__1ie8A {\n  width: 100%;\n  padding-top: 30px;\n  overflow: auto;\n}\n.index__pageInfoRow__dZpuL {\n  position: relative;\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15) !important;\n  background-color: #ffffff;\n}\n.index__pageInfoRowHeader__2zG1v {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.index__pageInfoValue__IQk8I {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n.index__pageTitle__1QARC {\n  font-size: 18px;\n  border-bottom: 1px solid #f0f0f0;\n  height: 36px;\n  line-height: 36px;\n  width: 100%;\n  margin-bottom: 30px;\n  user-select: none;\n}\n", ""]);

// exports
exports.locals = {
	"pageInfoRoot": "index__pageInfoRoot__1ie8A",
	"pageInfoRow": "index__pageInfoRow__dZpuL",
	"pageInfoRowHeader": "index__pageInfoRowHeader__2zG1v",
	"pageInfoValue": "index__pageInfoValue__IQk8I",
	"pageTitle": "index__pageTitle__1QARC"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/url-modes/index.less":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/components/url-modes/index.less ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index__header__36aMb {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-size: 26px;\n}\n.index__modeItem__vdKp3 {\n  width: 100px;\n  height: 50px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 50px;\n  background-color: #cccccc;\n  cursor: pointer;\n}\n.index__modeContainer__1HHk6 {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 150px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n", ""]);

// exports
exports.locals = {
	"header": "index__header__36aMb",
	"modeItem": "index__modeItem__vdKp3",
	"modeContainer": "index__modeContainer__1HHk6"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/video-info/index.less":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/components/video-info/index.less ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index__videoForm__2JlBy {\n  width: 100%;\n  padding-top: 30px;\n}\n.index__formItem__254XF {\n  width: 100%;\n}\n.index__formInput__2hlOJ {\n  display: block;\n  height: 40px;\n  width: 96%;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #4a6ee0;\n  border-radius: 0.25rem;\n  font-weight: 400;\n  line-height: 40px;\n  margin: 0 auto;\n  padding: 0 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline-color: #4b62c5;\n}\n.index__formLabel__ipbWq {\n  display: inline-block;\n  margin-bottom: 0.5em;\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n.index__formSubmit__1BiRu {\n  color: #fff;\n  width: 96%;\n  height: 36px;\n  line-height: 36px;\n  margin: 10px auto 0;\n  background-color: #4a6ee0;\n  border-color: #4a6ee0;\n  text-align: center;\n  border-radius: 8px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  user-select: none;\n}\n.index__video__2wk1t {\n  display: none;\n  opacity: 0;\n}\n.index__pageTitle__CEuCg {\n  font-size: 18px;\n  border-bottom: 1px solid #f0f0f0;\n  height: 36px;\n  line-height: 36px;\n  width: 100%;\n  margin-bottom: 30px;\n  user-select: none;\n}\n.index__videoInfoRow__3bgmd {\n  position: relative;\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15) !important;\n  background-color: #ffffff;\n}\n.index__videoInfoRowHeader__18Ri7 {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.index__videoInfoValue__1-rhf {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n", ""]);

// exports
exports.locals = {
	"videoForm": "index__videoForm__2JlBy",
	"formItem": "index__formItem__254XF",
	"formInput": "index__formInput__2hlOJ",
	"formLabel": "index__formLabel__ipbWq",
	"formSubmit": "index__formSubmit__1BiRu",
	"video": "index__video__2wk1t",
	"pageTitle": "index__pageTitle__CEuCg",
	"videoInfoRow": "index__videoInfoRow__3bgmd",
	"videoInfoRowHeader": "index__videoInfoRowHeader__18Ri7",
	"videoInfoValue": "index__videoInfoValue__1-rhf"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/popup.less":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/popup.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ./images/bg.png */ "./src/images/bg.png")) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  color: #0e101a;\n}\n.popup__root__1dFsg {\n  min-width: 500px;\n}\n.popup__navContainer__cP3uo {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  overflow: hidden;\n  border-bottom: 1px dashed #cccccc;\n}\n.popup__navItem__9rseX {\n  position: relative;\n  float: left;\n  width: 80px;\n  height: 80px;\n  font-size: 12px;\n  margin-left: 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  user-select: none;\n}\n.popup__navItem__9rseX img {\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  margin-top: -12px;\n  margin-left: -12px;\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.popup__navItem__9rseX.disable {\n  pointer-events: none;\n}\n.popup__navItem__9rseX.active {\n  background-color: #f1f2fa;\n}\n.popup__navItem__9rseX.active .popup__navItemName__20vr7 {\n  color: #4a6ee0;\n}\n.popup__navItem__9rseX.active .popup__navItemName__20vr7,\n.popup__navItem__9rseX.active .popup__navIcon__3yhEd {\n  color: #4a6ee0;\n}\n.popup__navIcon__3yhEd {\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  font-size: 24px;\n}\n.popup__navItemName__20vr7 {\n  position: absolute;\n  bottom: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #5f5651;\n}\n.popup__showContainer__2ojOr {\n  height: 300px;\n  width: 90%;\n  overflow: auto;\n  margin: 0 auto;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n}\n.popup__showContainer__2ojOr::-webkit-scrollbar {\n  display: none;\n}\n", ""]);

// exports
exports.locals = {
	"root": "popup__root__1dFsg",
	"navContainer": "popup__navContainer__cP3uo",
	"navItem": "popup__navItem__9rseX",
	"navItemName": "popup__navItemName__20vr7",
	"navIcon": "popup__navIcon__3yhEd",
	"showContainer": "popup__showContainer__2ojOr"
};

/***/ }),

/***/ "./src/components/page-info/index.less":
/*!*********************************************!*\
  !*** ./src/components/page-info/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/less-loader/dist/cjs.js??ref--5-2!./index.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/page-info/index.less");

            content = content.__esModule ? content.default : content;

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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
const styles = __webpack_require__(/*! ./index.less */ "./src/components/page-info/index.less");
const PageInfo = () => {
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentKeyword, setCurrentKeyword] = react_1.useState();
    const [currentDescription, setCurrentDescription] = react_1.useState();
    const [currentAuthor, setCurrentAuthor] = react_1.useState();
    const [currentTitle, setCurrentTitle] = react_1.useState();
    react_1.useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var _a, _b, _c, _d, _e, _f;
            setCurrentURL(tabs[0].url);
            setCurrentTitle(tabs[0].title);
            const bg = chrome.extension.getBackgroundPage();
            setCurrentKeyword((_b = (_a = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _a === void 0 ? void 0 : _a.pageInfo) === null || _b === void 0 ? void 0 : _b.keyword);
            setCurrentDescription((_d = (_c = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _c === void 0 ? void 0 : _c.pageInfo) === null || _d === void 0 ? void 0 : _d.description);
            setCurrentAuthor((_f = (_e = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _e === void 0 ? void 0 : _e.pageInfo) === null || _f === void 0 ? void 0 : _f.author);
        });
    }, []);
    return react_1.default.createElement("div", { className: styles.pageInfoRoot },
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u5F53\u524D\u9875\u9762\u4FE1\u606F\uFF1A"),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "\u5F53\u524D\u9875\u9762\u5730\u5740 / url"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, currentURL)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "title / \u6807\u9898"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, currentTitle)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "keyword / \u5173\u952E\u5B57"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, currentKeyword)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "description / \u63CF\u8FF0"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, currentDescription)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "author / \u4F5C\u8005"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, currentAuthor)));
};
exports.default = react_1.default.memo(PageInfo);


/***/ }),

/***/ "./src/components/url-modes/index.less":
/*!*********************************************!*\
  !*** ./src/components/url-modes/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/less-loader/dist/cjs.js??ref--5-2!./index.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/url-modes/index.less");

            content = content.__esModule ? content.default : content;

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/less-loader/dist/cjs.js??ref--5-2!./index.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/components/video-info/index.less");

            content = content.__esModule ? content.default : content;

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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
const styles = __webpack_require__(/*! ./index.less */ "./src/components/video-info/index.less");
const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = react_1.useState("");
    const [videoSize, setVideoSize] = react_1.useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = react_1.useState(0); // 通过 video组件 获取视频的长度。 单位: 秒
    const [videoTime, setVideoTime] = react_1.useState(0); // video 时间
    const isVideo = (path) => {
        return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    };
    let videoEl = react_1.useRef(null);
    const getVideoUrl = (e) => {
        if (isVideo(e.target.value)) {
            setVideoUrl(e.target.value);
        }
        else {
            return;
        }
    };
    const submit = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', videoUrl, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            var _a;
            if (xhr.status === 200) {
                const headers = (_a = this.getAllResponseHeaders()) === null || _a === void 0 ? void 0 : _a.trim().split(/[\r\n]+/);
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
                setVideoTime(Number(videoDuration));
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
    const videoInfoContainer = () => {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "videoDuration / \u89C6\u9891\u65F6\u95F4\u957F\u5EA6"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    Math.floor(videoTime),
                    " s")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "video Data Rate / \u89C6\u9891\u7801\u7387"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    videoRate,
                    " kbps")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "video Size / \u89C6\u9891\u6587\u4EF6\u5927\u5C0F"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    videoSize / 1000 * 8,
                    "kb")));
    };
    return (react_1.default.createElement("div", { className: styles.videoForm },
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u67E5\u770B\u7EBF\u4E0A\u89C6\u9891\u76F8\u5173\u4FE1\u606F"),
        react_1.default.createElement("div", { className: styles.formItem },
            react_1.default.createElement("input", { className: styles.formInput, onChange: getVideoUrl, value: videoUrl, placeholder: '请输入视频的地址' })),
        react_1.default.createElement("div", { className: styles.formSubmit, onClick: submit }, "\u83B7\u53D6\u76F8\u5173\u4FE1\u606F"),
        react_1.default.createElement("video", { className: styles.video, ref: videoEl, src: videoUrl, muted: true, crossOrigin: "anonymous" }),
        videoUrl && videoRate !== 0 && videoSize !== 0 && videoInfoContainer()));
};
exports.default = react_1.default.memo(VideoInfo);


/***/ }),

/***/ "./src/images/bg.png":
/*!***************************!*\
  !*** ./src/images/bg.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/popup.less":
/*!************************!*\
  !*** ./src/popup.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/less-loader/dist/cjs.js??ref--5-2!./popup.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/popup.less");

            content = content.__esModule ? content.default : content;

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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
const icon_1 = __importDefault(__webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
const styles = __webpack_require__(/*! ./popup.less */ "./src/popup.less");
const Popup = () => {
    const [count, setCount] = react_1.useState(0);
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentTabID, setCurrentTabID] = react_1.useState();
    const [navActiveIndex, setNavItemActiveIndex] = react_1.useState(0);
    const navItemArr = [
        { name: '页面信息', id: 0, disable: false, icon: 'info-circle' },
        { name: '视频相关', id: 1, disable: false, icon: 'video-camera' },
        { name: '调试模式', id: 2, disable: false, icon: 'bug' },
        { name: '敬请期待', id: 3, disable: true, icon: 'ellipsis' },
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
            return react_1.default.createElement("div", { className: classnames_1.default(styles.navItem, navActiveIndex === item.id && 'active', item.disable && 'disable'), key: item.id, onClick: () => setNavItemActiveIndex(item.id) },
                react_1.default.createElement(icon_1.default, { className: styles.navIcon, type: item.icon }),
                react_1.default.createElement("span", { className: styles.navItemName }, item.name));
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
    console.log(styles);
    return (react_1.default.createElement("div", { id: 'root' },
        react_1.default.createElement("div", { className: styles.root },
            react_1.default.createElement("div", { className: styles.navContainer }, navItem()),
            react_1.default.createElement("div", { className: styles.showContainer }, showContent()))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgubGVzcz81OWQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzPzkzODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmxlc3M/MTFjMSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy91cmxfbW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFB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QUMsc0NBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyREFBMkQ7QUFDcEUsU0FBUyw0REFBNEQ7QUFDckUsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyx1REFBdUQ7QUFDaEU7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEUsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtMQUFrTDtBQUMzTywrREFBK0QsNkNBQTZDO0FBQzVHLHVEQUF1RCxnQ0FBZ0M7QUFDdkYsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsOENBQThDLHlCQUF5QjtBQUN2RSxrREFBa0QsaUNBQWlDO0FBQ25GLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BvcHVwLnRzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX3BhZ2VJbmZvUm9vdF9fMWllOEEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93X19kWnB1TCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93SGVhZGVyX18yekcxdiB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5pbmRleF9fcGFnZVRpdGxlX18xUUFSQyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2VJbmZvUm9vdFwiOiBcImluZGV4X19wYWdlSW5mb1Jvb3RfXzFpZThBXCIsXG5cdFwicGFnZUluZm9Sb3dcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dfX2RacHVMXCIsXG5cdFwicGFnZUluZm9Sb3dIZWFkZXJcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dIZWFkZXJfXzJ6RzF2XCIsXG5cdFwicGFnZUluZm9WYWx1ZVwiOiBcImluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SVwiLFxuXHRcInBhZ2VUaXRsZVwiOiBcImluZGV4X19wYWdlVGl0bGVfXzFRQVJDXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX2hlYWRlcl9fMzZhTWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLmluZGV4X19tb2RlSXRlbV9fdmRLcDMge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5kZXhfX21vZGVDb250YWluZXJfXzFISGs2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcImluZGV4X19oZWFkZXJfXzM2YU1iXCIsXG5cdFwibW9kZUl0ZW1cIjogXCJpbmRleF9fbW9kZUl0ZW1fX3ZkS3AzXCIsXG5cdFwibW9kZUNvbnRhaW5lclwiOiBcImluZGV4X19tb2RlQ29udGFpbmVyX18xSEhrNlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X192aWRlb0Zvcm1fXzJKbEJ5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcbi5pbmRleF9fZm9ybUl0ZW1fXzI1NFhGIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW5kZXhfX2Zvcm1JbnB1dF9fMmhsT0oge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogOTYlO1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNmVlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgb3V0bGluZS1jb2xvcjogIzRiNjJjNTtcXG59XFxuLmluZGV4X19mb3JtTGFiZWxfX2lwYldxIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDk2JTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTZlZTA7XFxuICBib3JkZXItY29sb3I6ICM0YTZlZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbmRleF9fdmlkZW9fXzJ3azF0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uaW5kZXhfX3BhZ2VUaXRsZV9fQ0V1Q2cge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1Jvd19fM2JnbWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmluZGV4X192aWRlb0luZm9Sb3dIZWFkZXJfXzE4Umk3IHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1ZhbHVlX18xLXJoZiB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZGVvRm9ybVwiOiBcImluZGV4X192aWRlb0Zvcm1fXzJKbEJ5XCIsXG5cdFwiZm9ybUl0ZW1cIjogXCJpbmRleF9fZm9ybUl0ZW1fXzI1NFhGXCIsXG5cdFwiZm9ybUlucHV0XCI6IFwiaW5kZXhfX2Zvcm1JbnB1dF9fMmhsT0pcIixcblx0XCJmb3JtTGFiZWxcIjogXCJpbmRleF9fZm9ybUxhYmVsX19pcGJXcVwiLFxuXHRcImZvcm1TdWJtaXRcIjogXCJpbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnVcIixcblx0XCJ2aWRlb1wiOiBcImluZGV4X192aWRlb19fMndrMXRcIixcblx0XCJwYWdlVGl0bGVcIjogXCJpbmRleF9fcGFnZVRpdGxlX19DRXVDZ1wiLFxuXHRcInZpZGVvSW5mb1Jvd1wiOiBcImluZGV4X192aWRlb0luZm9Sb3dfXzNiZ21kXCIsXG5cdFwidmlkZW9JbmZvUm93SGVhZGVyXCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1Jvd0hlYWRlcl9fMThSaTdcIixcblx0XCJ2aWRlb0luZm9WYWx1ZVwiOiBcImluZGV4X192aWRlb0luZm9WYWx1ZV9fMS1yaGZcIlxufTsiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltYWdlcy9iZy5wbmdcIikpICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICMwZTEwMWE7XFxufVxcbi5wb3B1cF9fcm9vdF9fMWRGc2cge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuLnBvcHVwX19uYXZDb250YWluZXJfX2NQM3VvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2NjYztcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVggaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDUlO1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmRpc2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZmE7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3IHtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyxcXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkljb25fXzN5aEVkIHtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG4ucG9wdXBfX25hdkljb25fXzN5aEVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM1ZjU2NTE7XFxufVxcbi5wb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3Ige1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyrlrprkuYnmu5rliqjmnaHpq5jlrr3lj4rog4zmma8g6auY5a695YiG5Yir5a+55bqU5qiq56uW5rua5Yqo5p2h55qE5bC65a+4Ki9cXG59XFxuLnBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcInBvcHVwX19yb290X18xZEZzZ1wiLFxuXHRcIm5hdkNvbnRhaW5lclwiOiBcInBvcHVwX19uYXZDb250YWluZXJfX2NQM3VvXCIsXG5cdFwibmF2SXRlbVwiOiBcInBvcHVwX19uYXZJdGVtX185cnNlWFwiLFxuXHRcIm5hdkl0ZW1OYW1lXCI6IFwicG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyN1wiLFxuXHRcIm5hdkljb25cIjogXCJwb3B1cF9fbmF2SWNvbl9fM3loRWRcIixcblx0XCJzaG93Q29udGFpbmVyXCI6IFwicG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yXCJcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRLZXl3b3JkLCBzZXRDdXJyZW50S2V5d29yZF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudERlc2NyaXB0aW9uLCBzZXRDdXJyZW50RGVzY3JpcHRpb25dID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBdXRob3IsIHNldEN1cnJlbnRBdXRob3JdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUaXRsZSwgc2V0Q3VycmVudFRpdGxlXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFVSTCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaXRsZSh0YWJzWzBdLnRpdGxlKTtcclxuICAgICAgICAgICAgY29uc3QgYmcgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRLZXl3b3JkKChfYiA9IChfYSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFnZUluZm8pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5rZXl3b3JkKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudERlc2NyaXB0aW9uKChfZCA9IChfYyA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGFnZUluZm8pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRBdXRob3IoKF9mID0gKF9lID0gYmcgPT09IG51bGwgfHwgYmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJnLnRlc3QxKCkpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5wYWdlSW5mbykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmF1dGhvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvb3QgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VUaXRsZSB9LCBcIlxcdTVGNTNcXHU1MjREXFx1OTg3NVxcdTk3NjJcXHU0RkUxXFx1NjA2RlxcdUZGMUFcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiXFx1NUY1M1xcdTUyNERcXHU5ODc1XFx1OTc2MlxcdTU3MzBcXHU1NzQwIC8gdXJsXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudFVSTCkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcInRpdGxlIC8gXFx1NjgwN1xcdTk4OThcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBjdXJyZW50VGl0bGUpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJrZXl3b3JkIC8gXFx1NTE3M1xcdTk1MkVcXHU1QjU3XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudEtleXdvcmQpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJkZXNjcmlwdGlvbiAvIFxcdTYzQ0ZcXHU4RkYwXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudERlc2NyaXB0aW9uKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiYXV0aG9yIC8gXFx1NEY1Q1xcdTgwMDVcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBjdXJyZW50QXV0aG9yKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF8xLmRlZmF1bHQubWVtbyhQYWdlSW5mbyk7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCB1cmxfbW9kZV8xID0gcmVxdWlyZShcIi4uLy4uL3VybF9tb2RlXCIpO1xyXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBVcmxNb2RlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSW5kZXgsIHNldEN1cnJlbnRUYWJJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBtb2RlSXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cmxfbW9kZV8xLlVybE1vZGUpLm1hcChpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW9kZUl0ZW0nLCBvbkNsaWNrOiAoKSA9PiBjaGFuZ2VNb2RlKHVybF9tb2RlXzEuVXJsTW9kZVtpXSkgfSwgdXJsX21vZGVfMS5VcmxNb2RlW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8qKlxyXG4gICAgICog5YiH5o2i6aG16Z2i6LCD6K+V5qih5byPXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoYW5nZU1vZGUgPSAobW9kZSkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWJJZCA9IE51bWJlcih0YWJzWzBdLmlkKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBTdHJpbmcodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VXJsID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGN1cnJlbnRVcmw7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IChfYSA9IGxpbmsuc2VhcmNoKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoXCI/XCIpWzFdO1xyXG4gICAgICAgICAgICBpZiAoIXNlYXJjaCAvKuS4jeWtmOWcqHNlYXJjaOmDqOWIhiovKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bW9kZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAvKuWtmOWcqHNlYXJjaCovXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YobW9kZSkgPiAtMSAvKuW9k+WJjeW3suWtmOWcqOmAieS4reeahG1vZGXvvIzliJnnm7TmjqXljrvpmaTov5nkuKrmqKHlvI8qLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWFyY2ggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoJz8nICsgbW9kZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnPycgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZignJicgKyBtb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcmJyArIG1vZGUsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlYXJjaCA9IHNlYXJjaCArICcmJyArIG1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShOdW1iZXIoY3VycmVudFRhYklkKSwgeyB1cmw6IG5ld1VybCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdwYWdlSW5mb1Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdoZWFkZXInIH0sIFwiXFx1OEMwM1xcdThCRDVcXHU2QTIxXFx1NUYwRlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vZGVDb250YWluZXInIH0sIG1vZGVJdGVtKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVXJsTW9kZXMpO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVmlkZW9JbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSByZWFjdF8xLnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZpZGVvU2l6ZSwgc2V0VmlkZW9TaXplXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIOmAmui/hyBYSFIg55qE5ZON5bqU5aS055qEIGNvbnRlbnQtbGVuZ3RoIOiOt+WPluOAgiDljZXkvY06IGtiXHJcbiAgICBjb25zdCBbdmlkZW9SYXRlLCBzZXRWaWRlb1JhdGVdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTsgLy8g6YCa6L+HIHZpZGVv57uE5Lu2IOiOt+WPluinhumikeeahOmVv+W6puOAgiDljZXkvY06IOenklxyXG4gICAgY29uc3QgW3ZpZGVvVGltZSwgc2V0VmlkZW9UaW1lXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIHZpZGVvIOaXtumXtFxyXG4gICAgY29uc3QgaXNWaWRlbyA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIC9cXC4obXA0fGF2aXx3bXZ8bXBnfG1wZWd8bW92fHJtfHJhbXxzd2Z8Zmx2KS8udGVzdChwYXRoKTtcclxuICAgIH07XHJcbiAgICBsZXQgdmlkZW9FbCA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZ2V0VmlkZW9VcmwgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChpc1ZpZGVvKGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBzZXRWaWRlb1VybChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdmlkZW9VcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gKF9hID0gdGhpcy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRyaW0oKS5zcGxpdCgvW1xcclxcbl0rLyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyTWFwID0ge307XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW1N0cmluZyhoZWFkZXIpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRWaWRlb1NpemUoaGVhZGVyTWFwWydjb250ZW50LWxlbmd0aCddKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRWwuY3VycmVudCAmJiB2aWRlb0VsLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9EdXJhdGlvbiA9IGdldFZpZGVvRHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvVGltZShOdW1iZXIodmlkZW9EdXJhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9EdXJhdGlvbiAmJiBzZXRWaWRlb1JhdGUoTWF0aC5mbG9vcihoZWFkZXJNYXBbJ2NvbnRlbnQtbGVuZ3RoJ10gLyAxMDAwICogOCAvIHZpZGVvRHVyYXRpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluinhumikeaXtumVv1xyXG4gICAgICovXHJcbiAgICBjb25zdCBnZXRWaWRlb0R1cmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2aWRlb0VsLmN1cnJlbnQgJiYgdmlkZW9FbC5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHZpZGVvSW5mb0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlb0R1cmF0aW9uIC8gXFx1ODlDNlxcdTk4OTFcXHU2NUY2XFx1OTVGNFxcdTk1N0ZcXHU1RUE2XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodmlkZW9UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBzXCIpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW8gRGF0YSBSYXRlIC8gXFx1ODlDNlxcdTk4OTFcXHU3ODAxXFx1NzM4N1wiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1JhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIga2Jwc1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvIFNpemUgLyBcXHU4OUM2XFx1OTg5MVxcdTY1ODdcXHU0RUY2XFx1NTkyN1xcdTVDMEZcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9TaXplIC8gMTAwMCAqIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrYlwiKSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0Zvcm0gfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VUaXRsZSB9LCBcIlxcdTY3RTVcXHU3NzBCXFx1N0VCRlxcdTRFMEFcXHU4OUM2XFx1OTg5MVxcdTc2RjhcXHU1MTczXFx1NEZFMVxcdTYwNkZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5mb3JtSXRlbSB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZm9ybUlucHV0LCBvbkNoYW5nZTogZ2V0VmlkZW9VcmwsIHZhbHVlOiB2aWRlb1VybCwgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXop4bpopHnmoTlnLDlnYAnIH0pKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmZvcm1TdWJtaXQsIG9uQ2xpY2s6IHN1Ym1pdCB9LCBcIlxcdTgzQjdcXHU1M0Q2XFx1NzZGOFxcdTUxNzNcXHU0RkUxXFx1NjA2RlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW8sIHJlZjogdmlkZW9FbCwgc3JjOiB2aWRlb1VybCwgbXV0ZWQ6IHRydWUsIGNyb3NzT3JpZ2luOiBcImFub255bW91c1wiIH0pLFxyXG4gICAgICAgIHZpZGVvVXJsICYmIHZpZGVvUmF0ZSAhPT0gMCAmJiB2aWRlb1NpemUgIT09IDAgJiYgdmlkZW9JbmZvQ29udGFpbmVyKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVmlkZW9JbmZvKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS3dBQUFEUUNBTUFBQUN0RDNwUUFBQUFQRkJNVkVWSGNFeVAyT09VMmQrTjI5dWYxZXg5NHN0OTRzeC80TTZ5eWYrenl2K0gzZFd6eVArTDI5bU8ydHV6eWYrVzFlV3h5ZjZ4eWY2d3lmNnZ5UDRpQmlIVUFBQUFGSFJTVGxNQUJnMFdIU2M1VFVnNVpsdUZvU3V4Y29pYXJCVldPd3dBQUEzRlNVUkJWSGhlN0pYUkNzTXdDRVduNmY5Lzh4QWJEc0ZJMllOcEJyblh4ZTd0Y0dQdzgyYzZPam82T2pvUzgvYUU3dTBsNDdmc0cyZGsyekJobVlBTC9EcytJT25GLzYxb29RUU5lOXRxUW9XWVNkUHR4MTdqQ3J0RXZ3YzdKdXFrbk5EZUpWdk1BY0R3M2pGUzFrd3Zaa29UT2lsMlRrZU5zTytSOSs2R3p6N1FpNWtDQ3FFYjNGSHZoZ295bEpsVVpDV1pkOWhnSEo3OWxGT3RyUTR6RUQ5a3FyMnNMMXVpckNsUWlUTGw5R2JXNWNtR0Rab0N3K20ydGl4VklyWEs1N1B6Z2FnZFYxZVBMSG1hODZ2SGF1VXFoaU5hSmdETzlPWXhxT3VTWloweUFrK0pScFdQcTFQaWJEM0ZXNCs4aS9aVXRxUGd4RjR6MWQ0N1IwZzF2UHljVVp0WFc3RVEwbFQxUHZRWjFhekZPMHZTVkhYWVRaSlQ0bGIrd0FSUDloT2tFbEZoMVdhc3JSQVQxb200L1VBS0k1d21MVXcyejFYZEhMUFg1RFpHLzVucXJwOWNBMmxZVC9IcUZVcFVuMnNjVnBLZG9EcHBSRFhWUVA2TTJyd2NGOHhSVjJXc2NWYVR4ZC84Y0ZUckU5QjJYYTJlOHdPcWZHazNveDI1YlJpS3RpdExrM1N6emYvL2JiVmlpQU5kMGdOWUJTbFA5dlhnaExxaUJ5T2N4ajVsUDJsTnpMNytLVUJWNEdnMVQ5TjJaM1IrSnZHc3luRlF5NjJDMi9qZkJ6VVl2WHJyMS9jcURBS0F5ZFZVYW9wcW9PdnZmR3hWbnJFb1JXdkF6VW0vZlM3TzNseHJMeklMcStZVmRTLzFXcWltODFxc2h0cDdDYWk4WHlzcDV6Nms0dlJQTGJNVDB6NjlMZ3prZUJXdm9FcWZ1bFFqblI5N1Z0V2tnWXdEVVd1R2l0UGVhRlVETFlMVmZJMEhRZDRBMXFpd3dsa0h5MVRJV2FDa2ltcVF6U0VkVkdsSHIwb0RyNTIxMlVkUWJWbXJJbFc4anJtS3ZPWXhzRER6OU8rUStwNFMwajVHZ1ZmQmhaWVdDS0Y2T1dtTzJzZGFsYWdxbG5FRjB1YVlWL3pmQjNXeGpsRUdDNjlrbHZScWh6WmpIYjVHQVN6blFhSlZXV2R0NTJtMnFSeTEzS3g2TlZSWUc2R2FXOTFRQzJEVkxKbWx5ZnB1L3p1bFBWN1ZHeXp2MTdpeGNxdDk0TFdvWnptODhHcWdvRm94VTBXclhiUyt4cXZHcklwMXI3RDZ5WHBuRmRSZUNldXNkejNnV250TFFjblZ2cE9PSDNWbVA1UVdWTk02SzdUQTJQY1dxRDlmbUMzS1dWQ2xYMDJyZWpYTzdSaEE3SHlxMmdEV3BtSk5LeEdnUjBCUFVPZjYrUUsyWVBUR3JLTXlzUVJTS0hrR3FHT2kvcWd5U3hhSVdHT2xYV05lYVdDWjFsV0Y4eXdoNjZpWUZiSER4QkpZWFdpdDZxTkxFNWJ4U2pOQUFvdklXajN3K3VkVmdNcVI0R0pCWlhOcENFaGVvZFc5VHRyQ0RVYkx5cHdWVVFrQlJaMXJhWDJWbTkxalZtYlh1em1naDNqOWcvcHBaa3R3UHhLekliVUd4RkdzTFllZHF5NE1NTXNJeTlHVnRtc2s5ZnI4aHEweHE2Y3RZa1BIRGw1ZWMyTFRhcXN5WjlVc3J3VllqYk1nbFBUcndpMHlLeHRNUmtQRXhtNE52SFJzQWF6MkxMUU9DdTBncnVMT0lnbytKNmc5QmFqTXM3bFpLbzNYUEFsV1ZYVkJOQ3RpZFZkMU9KVjBycytxTmtpemk1aU5admRod0hrM1hLdGFWRFhiRUR0c29WYk5jbkJadzFadE1IRFhJQ05tSldRVk5lc0NxOUpEd1dqSnJuNHhjY3ZHVWxwQ0Z0WmZSVzJRbjJFTnN6ckQwZ0dZeFd1OVdZWFZFMkhrbVJVMzEzeE03SythTkFqSEFtTEJKYnNRSzE3RmJDbXFzRjZ3cGw5bVNXaEp3eGFZTmVJd0h2QUtobGxvMDlTaVpkbGdwZTgxcU0zTjZsc3M0eGJERm1JeGUzckw0TkdKaTFtR3d6ZGRBS3Zobm5LKzd3R1M5bFl0WHQ4TUJVVEJJU3dYemJodjhINU1iRVpyWnB1STdaSUUrWEZ3dnNHQUJpOVh5ekJ6a3dkVVJEVzNpRDNvV1M2Ym9GYXBrMm1HUEpEd2NsTFdUY2MrTmh1NWdJNXFvVzF6aWRuUnM0aVZKa0FzYVhCQWJCODBnNnhKaTlsRjJ6UVA0clNWNTlhc2t3TktMM1VJTWF5SjJvbEtHNHd1cUppTlRRRHNRUnl3RE5VZXdaV21kVjVtbWZmQkpXYlB4QUpraU9EU0VOQ0c5d1hVQWdvbnJCdnFtVmxnOGdWdS9qVlN5OElyQ3dQRUhyUkJjaldTKzVzaUdyUEF5cGlJV3pCakV1RDEyQ3dyUjk0bkJBbUVpejMyVGl5eDVieEhZaUhsU3F3OXlBVTFCSUo5MjBVZjNIYnMvemNiVVNuakJ6cHRXZ1lFWTcxL3A2VmZyWTdGMHErQjF6anYzOFc4YTRFRmxBTWhpdjA2bnczQXkvV0NTOWhLMHhvdWJaQy96b0Q3V0d3S212TnEyemFuZGJYN2hBaXBMV0g5T2pITGl0ZGpZME1zMUJpMXJuYW56YzFTcHgwYjczVGt1SHQ2a1FkendicjY0UDcwY3JGUDA0QndqWmU2dUlZZ3ZLWmNFb0hSQzdFUkY5WW5HeXozcWpmNWpGVUZ4NE9oTnhsbUpMV0MySE96NGVmY01CcXY2T1hsc1hHT2tRajVGaE94aS9hb1pRRnd0cTJnajJxVGIraWkyc2hxNnlSaXZVQUYyTUFkV0hnMWJKMzIzdXlPK3dCVW1vRDlSS1dHMllBa1FxTnBPY1FBWllhQjlLblpWS3hXRG15ZkpHeUg4eWFqckZ0MTNOTUxmbGpWdTV3WmJqWWkwTFdvVFlZWXpENUxnMHdzQkl1QyswYzdyOXNGTmdhQ3ZDcks5c0xzQTdYU0FsZ0ZGV3d2b2kxVjIxT3phSFcxWjJGQWFtSFZwYTZDWGZSdWdlQzRRcHR0cjFXbmwveDJzUnNsQlM5NmRVUndXbURKTFhhWDRaNktwVjBiS3l2aFpZK2hkaEJmVHJ1THhlelo3VG1hUURoelhzVTE4OUhzUU8wV0JNWjcrb3NTV05PZmN2dnRNeTlKQ0hEbEdLTmxkN0VHL01RclpyZkkwbC9JKzhlUmszN2crNWt0YkJFTHFvRStiUU05YXNrQlFhVUFSakM0SEdQV3R0QWkxa2dkOSt6SEw1ZzFBR01GTlJhQzNXK21WbGpwV2F1RC9TVVJxODA2Njkvdnh4ZTQ4M0ZhdWdlMTBEcXJnVklQSmk1Z1NZTE5hM05PYUNOd0E5aFJMd0xCeFRvcllvK2lTMTVYSGJXSlZvTzBQOUh4S24wZFEreVpXZW91QzdqUmdWYmpveWF1Vzk1NGpSUzFtR1YzZ2Z2NzYvZkpIRU1XR0MxZWtacVZLTzVYcytXc2lOMkdBbWdmM0UrRk5aZzFUbC92eXZwaWhZRGZBWGV6aUdVMGhIU3VyN1BYV21IZHZMNmpwUzhNMkZiYXNiQkNlNUJjeVVIN1h5MW51TjYyQ2dUUk5tMVRITldXZ1BkLzF5NjdKcU5sa0cxQnNzaGY3LzEzdnRQUkNNbFc5eEhBWEc2WGN0Z2ZzdHo4S1lkVjdLM1dWbWhaNVlEWGRSMzZacDUrc1lVVU9OU0tpeUZxbmZmTCs2MndDdXhDWG9kaXdLemVxMk85NjN3d2dsakFoVk5BeGIyUUJrRVYyTTBDNjczS2VzMXMvK0V3bjEvUUtpaU15aU9vT3VIeVYxRUZWc1J1c253UnJQZDFkbXVBNGpvTzdLVWhEYmJrMEZXTzNYLytMYVRRcWw2amtFWUhxalArdWg5d1RTdENzRWNOZFJWV2pQdGZJUldweHZwUnZFWjRCZStyUFV0M3RueDZOVjV2RHZWbzFHY0lIOHVpcU10V1NNM3JOZTIwS3U4NkV3UFE4dGxsODRSMEtVdkh0RzZiNVRWS0ZVVERoZGpDdW82L1J3bFdPV0MybGdDakxyYmthT2VqZ0JhdFNocVZNbFpNclBWTXkvWi8rSUtTUlE4UTYrSlFnd01XekVWWVpXTHhHditsK0dtMWhzRFVuamJMUDNjb3FBZ0JJckIzYW5nOGdybnBSK082eFlKcVBaQVVjYi9PbUpXamZZcU55SEpyUVN5RU9rbzVLcWNsb0pBYTY5M3NDazZqblRmcnp5OWt3QWZBMjd5RFlxSklMYmlDQ3JHZVZJQlAzNG56czB1cVdLSmRpSlZSaTFnSmEvbWtwS2hZZGI2Z0RFQ0xERlJXc3hyQTJaVnFVNlFLcVVVZ09iSDJXWWR1d2ZqNmhjeWExaDByLy8wN1VsbHkxRWt5eGV4cVJXQ0hqZkRPL2FLZnhkcTRCSVRIcEo5ZWxWT1hHYTBCQU8vWmJ6K1k5cGMxbHhNYjJHeDdWa1cyV3BhWk5WRERuTTBzbTdVaHNZY0JpRXFMTVVoVG13UXJWYkdBUGdGN1pQWTNlcmFJUlhINTBqS3JMZXJtbkViRkZkYVVGVmNaTVFNWEJXb0RLbGxYQlFiS3FKVVVxRGFycld0Q0JBaDJQQWVJQVlyTHN3SVhxQnRGMVVqTFpLRUZKc0dPM041aU44dG13UnBBNmp1QVVJMDNYN09hellMTGJzOVdGNyt2VG9tMXlQb2lBQytoSWdJcHkwZEJzMGFXOWM2OG5PaDZsaUpML1VyWGdHUUxxRmttNVRVYkt0T2U4TXBxY1lLNXpISmlleGxJSm5iUFdwWWtJUmRlbXFIcWVpdUgzeHB3WkpHQ0RkdVcySGFySHRDYXNuNDBCTUFkeTJ6L3g0V0NDdHFPV1VyQjFzdUFhVFhVQkxQWDRUYUFXa1NXelFhd0JrVnQrNVV6a0VGcXVGbkY4a3k5TzJYZHBXYmJ5SVpXYkd4eVlIVlZCNlJwellXM096UHZnTU1zVGpDZ2hpWUV2Z2FRZ1l5bDgxVm01V0N4M2N3dUllQk9pNXVna3NJclJzM09uV0RkZHcrUVdUYUx5MWVOQVVodEFSUmVrNUtPVnhmdmFKbVdhOWFuZ0R1MjZWYzMwMlp4VmVDTnpHMTNCUXRjWEpYVWxWWTVnQXJlS25ZNHN4eUU5bnFMdlRkb2tWbmc5c1E2VWpyRnBtUHcxcjhUNXhRSUtzd2VpNlVCNk9nVmpNMjJaeGd1Q3FqWmcrWXlWRHEvZkJSb1p2NEpKbFZycUdUMkhvTnFsc1Z5Q0REcmVCdXdXdUQ2SEhUTmNoVTBGOW84bmRuanJnVnF1L251bUYzNlp2MnVrT2ZyellMMjJPeldNOHRpdTBISTgyWUJTeWZZWTdNazl0RHMxL1FzNmdBNXNNMkJlWDNCTEhvclA4bnNqTm1mL0xZZlRqQTJDOVlGWmw5SndieFpMaS9jMzFvT0tMUEJtVFZjemdHanptZVc5N1R1Wm9IdXdXam5qUkNBOU52TjBsZWlPTU1VbG5kZEhGa09BdFAyMVk2K1grOXZjRTB0c1FLV0k2dVlFTXRxNTgwQ0YzWGdpeGEwdnJya3FERjRLdFpRQjgyQzlIQkxPMlMyMm1YVytZME1oOVkvVCtieWFzVHlZNWhEczl5MDE0RWJScTREZXRaRlZ6REZQWm5aR2JNWXh1M1hRYmNORU5uSG1VVWZ6R2NXNzg3eHZVSUFLOHpDSzErL3ZpMnp3Q1d6VkY3ZXJDdGFGdHZQN0Rnc2FQbHVBYW5sT29CWnNISVpNQ3pqbmdWVldtNWFMaS8wckJNTHJ4d0V6dXljV2Y3T0JsL1k0RHM3MUVIZGRTRUV1TE45MWx5TWV4YlZQc1o3cE5idHVwWkhUMk1JbDgzbTJjeENMVzI4R3JVd0d6ZEU5dW11eTlhMFdTcGFMaStvOWMrU3o1a0ZMc0dPNzJYNHN1QjN0TFNoNVdjR3pFbzVBT3lnMmpmUWdyVlZDN044Q1dQZWZnN3lwRmwrcEd5MHgvY0tWRjNFU2F6QUhUZnJxaFk1b0ZzYk50di81dU9GN3NvRU82VldodFhDTEw2eDV6cGdVcWkxWTZLNlFQdmlSYXhPNU5CeWRYRVE0UFkvSDU5U1BBWWFzYWdBQUFBQVNVVk9SSzVDWUlJPVwiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL3BvcHVwLmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IHJlYWN0X2RvbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xyXG5jb25zdCBwYWdlX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BhZ2UtaW5mb1wiKSk7XHJcbmNvbnN0IHZpZGVvX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3ZpZGVvLWluZm9cIikpO1xyXG5jb25zdCB1cmxfbW9kZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3VybC1tb2Rlc1wiKSk7XHJcbmNvbnN0IGljb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYW50ZC9saWIvaWNvblwiKSk7XHJcbmNvbnN0IGNsYXNzbmFtZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL3BvcHVwLmxlc3NcIik7XHJcbmNvbnN0IFBvcHVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUYWJJRCwgc2V0Q3VycmVudFRhYklEXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuYXZBY3RpdmVJbmRleCwgc2V0TmF2SXRlbUFjdGl2ZUluZGV4XSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBuYXZJdGVtQXJyID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ+mhtemdouS/oeaBrycsIGlkOiAwLCBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2luZm8tY2lyY2xlJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+inhumikeebuOWFsycsIGlkOiAxLCBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ3ZpZGVvLWNhbWVyYScgfSxcclxuICAgICAgICB7IG5hbWU6ICfosIPor5XmqKHlvI8nLCBpZDogMiwgZGlzYWJsZTogZmFsc2UsIGljb246ICdidWcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5pWs6K+35pyf5b6FJywgaWQ6IDMsIGRpc2FibGU6IHRydWUsIGljb246ICdlbGxpcHNpcycgfSxcclxuICAgIF07XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcclxuICAgIH0sIFtjb3VudF0pO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiSUQodGFic1swXS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqICDmuLLmn5PpgInpobnljaHliJfooahcclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYXZJdGVtQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXNfMS5kZWZhdWx0KHN0eWxlcy5uYXZJdGVtLCBuYXZBY3RpdmVJbmRleCA9PT0gaXRlbS5pZCAmJiAnYWN0aXZlJywgaXRlbS5kaXNhYmxlICYmICdkaXNhYmxlJyksIGtleTogaXRlbS5pZCwgb25DbGljazogKCkgPT4gc2V0TmF2SXRlbUFjdGl2ZUluZGV4KGl0ZW0uaWQpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpY29uXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJY29uLCB0eXBlOiBpdGVtLmljb24gfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJdGVtTmFtZSB9LCBpdGVtLm5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwYWdlX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVybF9tb2Rlc18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHBhZ2VfaW5mb18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc29sZS5sb2coc3R5bGVzKTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogJ3Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5yb290IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2Q29udGFpbmVyIH0sIG5hdkl0ZW0oKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuc2hvd0NvbnRhaW5lciB9LCBzaG93Q29udGVudCgpKSkpKTtcclxufTtcclxucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXHJcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cCwgbnVsbCkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVybE1vZGUgPSB7XHJcbiAgICBtb2NrOiAnX19NT0NLX18nLFxyXG4gICAgdmNvbnNvbGU6ICdfX1ZDT05TT0xFX18nLFxyXG4gICAgZGVidWdnZXI6ICdfX0RFQlVHX18nXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=