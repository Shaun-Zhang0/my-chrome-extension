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
exports.push([module.i, ".index__videoForm__2JlBy {\n  position: relative;\n  width: 100%;\n  padding-top: 30px;\n}\n.index__formItem__254XF {\n  width: 100%;\n}\n.index__formInput__2hlOJ {\n  display: block;\n  height: 40px;\n  width: 96%;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #4a6ee0;\n  border-radius: 0.25rem;\n  font-weight: 400;\n  line-height: 40px;\n  margin: 0 auto;\n  padding: 0 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline-color: #4b62c5;\n}\n.index__formLabel__ipbWq {\n  display: inline-block;\n  margin-bottom: 0.5em;\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n.index__formSubmit__1BiRu {\n  color: #fff;\n  width: 96%;\n  height: 36px;\n  line-height: 36px;\n  margin: 10px auto 0;\n  background-color: #4a6ee0;\n  border-color: #4a6ee0;\n  text-align: center;\n  border-radius: 8px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  user-select: none;\n  cursor: pointer;\n}\n.index__formSubmit__1BiRu.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: default;\n}\n.index__formSubmit__1BiRu:active {\n  opacity: 0.8;\n}\n.index__video__2wk1t {\n  display: none;\n  opacity: 0;\n}\n.index__pageTitle__CEuCg {\n  font-size: 18px;\n  border-bottom: 1px solid #f0f0f0;\n  height: 36px;\n  line-height: 36px;\n  width: 100%;\n  margin-bottom: 30px;\n  user-select: none;\n}\n.index__videoInfoRow__3bgmd {\n  position: relative;\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15) !important;\n  background-color: #ffffff;\n}\n.index__videoInfoRowHeader__18Ri7 {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.index__videoInfoValue__1-rhf {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n.index__loadingIcon__1Izul {\n  position: absolute;\n  width: 150px;\n  height: 70px;\n  left: 50%;\n  top: 100px;\n  transform: translate(-50%, -50%);\n  z-index: 200;\n  padding: 16px 24px;\n  overflow: hidden;\n  line-height: 1.5;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 4px 12px rgb(0 0 0%);\n  box-shadow: 0 4px 12px rgb(0 0 0%);\n}\n.index__loadingIcon__1Izul img {\n  position: absolute;\n  left: 50%;\n  top: 46%;\n  width: 32px;\n  height: 32px;\n  transform: translate(-50%, -50%);\n  user-select: none;\n}\n.index__loadingTips__3R0yF {\n  position: absolute;\n  bottom: 16%;\n  left: 0;\n  text-align: center;\n  width: 100%;\n  color: #4a6ee0;\n}\n", ""]);

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
	"videoInfoValue": "index__videoInfoValue__1-rhf",
	"loadingIcon": "index__loadingIcon__1Izul",
	"loadingTips": "index__loadingTips__3R0yF"
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

/***/ "./src/components/video-info/images/loading.gif":
/*!******************************************************!*\
  !*** ./src/components/video-info/images/loading.gif ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
const styles = __webpack_require__(/*! ./index.less */ "./src/components/video-info/index.less");
const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = react_1.useState("");
    const [videoSize, setVideoSize] = react_1.useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = react_1.useState(0); // 通过 video组件 获取视频的长度。 单位: 秒
    const [videoTime, setVideoTime] = react_1.useState(0); // video 时间
    const [loading, setLoading] = react_1.useState(false); // 请求状态
    const isVideo = (path) => {
        return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    };
    let videoEl = react_1.useRef(null);
    const getVideoUrl = (e) => {
        setVideoUrl(e.target.value);
    };
    const submit = () => {
        if (!isVideo(videoUrl) || loading) {
            return;
        }
        setLoading(true);
        const xhr = new XMLHttpRequest();
        xhr.open('get', videoUrl, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            var _a;
            if (xhr.status === 200 && (xhr.readyState === 3 || xhr.readyState === 4)) {
                setLoading(false);
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
        loading && react_1.default.createElement("div", { className: styles.loadingIcon },
            react_1.default.createElement("img", { src: __webpack_require__(/*! ./images/loading.gif */ "./src/components/video-info/images/loading.gif") }),
            react_1.default.createElement("div", { className: styles.loadingTips }, "\u6B63\u5728\u52AA\u529B\u83B7\u53D6\u4E2D...")),
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u67E5\u770B\u7EBF\u4E0A\u89C6\u9891\u76F8\u5173\u4FE1\u606F"),
        react_1.default.createElement("div", { className: styles.formItem },
            react_1.default.createElement("input", { className: styles.formInput, onChange: getVideoUrl, value: videoUrl, placeholder: '请输入视频的地址' })),
        react_1.default.createElement("div", { className: classnames_1.default(styles.formSubmit, loading && 'disabled'), onClick: submit }, "\u83B7\u53D6\u76F8\u5173\u4FE1\u606F"),
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAADQCAMAAACtD3pQAAAAPFBMVEVHcEyP2OOU2d+N29uf1ex94st94sx/4M6yyf+zyv+H3dWzyP+L29mO2tuzyf+W1eWxyf6xyf6wyf6vyP4iBiHUAAAAFHRSTlMABg0WHSc5TUg5ZluFoSuxcoiarBVWOwwAAA3FSURBVHhe7JXRCsMwCEWn6f9/8xAbDsFI2YNpBrnXxe7tcGPw82c6Ojo6OjoS8/aE7u0l47fsG2dk2zBhmYAL/Ds+IOnF/61ooQQNe9tqQoWYSdPtx17jCrtEvwc7JuqknNDeJVvMAcDw3jFS1kwvZkoTOil2TkeNsO+R9+6Gzz7Qi5kCCqEb3FHvhgoylJlUZCWZd9hgHJ79lFOtrQ4zED9kqr2sL1uirClQiTLl9GbW5cmGDZoCw+m2tixVIrXK57PzgagdV1ePLHma86vHauUqhiNaJgDO9OYxqOuSZZ0yAk+JRpWPq1PibD3FW4+8i/ZUtqPgxF4z1d47R0g1vPycUZtXW7EQ0lT1PvQZ1azFO0vSVHXYTZJT4lb+wARP9hOkElFh1WasrRAT1om4/UAKI5wmLUw2z1XdHLPX5DZG/5nqrp9cA2lYT/HqFUpUn2scVpKdoDppRDXVQP6M2rwcF8xRV2WscVaTxd/8cFTrE9B2Xa2e8wOqfGk3ox25bRiKtitLk3Szzf//bbViiANd0gNYBSlP9vXghLqiByOcxj5lP2lNzL7+KUBV4Gg1T9N2Z3R+JvGsynFQy62C2/jfBzUYvXrr1/cqDAKAydVUaopqoOvvfGxVnrEoRWvAzUm/fS7O3lxrLzILq+YVdS/1Wqim81qshtp7Cai8Xysp5z6k4vRPLbMT0z69LgzkeBWvoEqfulQjnR97VtWkgYwDUWuGitPeaFUDLYLVfI0HQd4A1qiwwlkHy1TIWaCkimqQzSEdVGlHr0oDr5212UdQbVmrIlW8jrmKvOYxsDDz9O+Q+p4S0j5GgVfBhZYWCKF6OWmO2sdalagqlnEF0uaYV/zfB3WxjlEGC69klvRqhzZjHb5GASznQaJVWWdt52m2qRy13Kx6NVRYG6GaW91QC2DVLJmlyfpu/zulPV7VGyzv17ixcqt94LWoZzm88GqgoFoxU0WrXbS+xqvGrIp1r7D6yXpnFdReCeusdz3gWntLQcnVvpOOH3VmP5QWVNM6K7TA2PcWqD9fmC3KWVClX02rejXO7RhA7Hyq2gDWpmJNKxGgR0BPUOf6+QK2YPTGrKMysQRSKHkGqGOi/qgySxaIWGOlXWNeaWCZ1lWF8ywh66iYFbHDxBJYXWit6qNLE5bxSjNAAovIWj3w+udVgMqR4GJBZXNpCEheodW9TtrCDUbLypwVUQkBRZ1raX2Vm91jVmbXuzmgh3j9g/ppZktwPxKzIbUGxFGsLYedqy4MMMsIy9GVtmsk9fr8hq0xq6ctYkPHDl5ec2LTaqsyZ9UsrwVYjbMglPTrwi0yKxtMRkPExm4NvHRsAaz2LLQOCu0gruLOIgo+J6g9BajMs7lZKo3XPAlWVXVBNCtidVd1OJV0rs+qNkizi5iNZvdhwHk3XKtaVDXbEDtsoVbNcnBZw1ZtMHDXICNmJWQVNesCq9JDwWjJrn4xccvGUlpCFtZfRW2Qn2ENszrD0gGYxWu9WYXVE2HkmRU313xM7K+aNAjHAmLBJbsQK17FbCmqsF6wpl9mSWhJwxaYNeIwHvAKhllo09SiZdlgpe81qM3N6lss4xbDFmIxe3rL4NGJi1mGwzddAKvhnnK+7wGS9lYtXt8MBUTBISwXzbhv8H5MbEZrZpuI7ZIE+XFwvsGABi9XyzBzkwdURDW3iD3oWS6boFapk2mGPJDwclLWTcc+Nhu5gI5qoW1zidnRs4iVJkAsaXBAbB80g6xJi9lF2zQP4rSV59askwNKL3UIMayJ2olKG4wuqJiNTQDsQRywDNUewZWmdV5mmffBJWbPxAJkiODSENCG9wXUAgonrBvqmVlg8gVu/jVSy8IrCwPEHrRBcjWS+5siGrPAypiIWzBjEuD12CwrR94nBAmEiz32Tiyx5bxHYiHlSqw9yAU1BIJ920Uf3Hbs/zcbUSnjBzptWgYEY71/p6VfrY7F0q+B1zjv38W8a4EFlAMhiv06nw3Ay/WCS9hK0xoubZC/zoD7WGwKmvNq2zandbX7hAipLWH9OjHLitdjY0Ms1Bi1rnanzc1Spx0b73TkuHt6kQdzwbr64P70crFP04BwjZe6uIYgvKZcEoHRC7ERF9YnGyz3qjf5jFUFx4OhNxlmJLWC2HOz4efcMBqv6OXlsXGOkQj5FhOxi/aoZQFwtq2gj2qTb+ii2shq6yRivUAF2MAdWHg1bJ323uyO+wBUmoD9RKWG2YAkQqNpOcQAZYaB9KnZVKxWDmyfJGyH8yajrFt13NMLfljVu5wZbjYi0LWoTYYYzD5Lg0wsBIuC+0c7r9sFNgaCvCrK9sLsA7XSAlgFFWwvoi1V21OzaHW1Z2FAamHVpa6CXfRugeC4Qpttr1Wnl/x2sRslBS96dURwWmDJLXaX4Z6KpV0bKyvhZY+hdhBfTruLxezZ7TmaQDhzXsU189HsQO0WBMZ7+osSWNOfcvvtMy9JCHDlGKNld7EG/MQrZrfI0l/I+8eRk37g+5ktbBELqoE+bQM9askBQaUARjC4HGPWttAi1kgd9+zHL5g1AGMFNRaC3W+mVljpWauD/SURq80669/vxxe483Fauge10DqrgVIPJi5gSYLNa3NOaCNwA9hRLwLBxTorYo+iS15XHbWJVoO0P9HxKn0dQ+yZWeouC7jRgVbjoyauW954jRS1mGV3gfv76/fJHEMWGC1ekZqVKO5Xs+WsiN2GAmgf3E+FNZg1Tl/vyvpihYDfAXeziGU0hHSur7PXWmHdvL6jpS8M2FbasbBCe5BcyUH7Xy1nuN62CgTRNm1THNWWgPd/1y67JqNlkG1Bsshf7/13vtPRCMlW9xHAXG6Xctgfstz8KYdV7K3WVmhZ5YDXdR36Zp5+sYUUONSKiyFqnffL+62wCuxCXodiwKzeq2O963wwgljAhVNAxb2QBkEV2M0C673Kes1s/+Ewn1/QKiiMyiOoOuHyV1EFVsRusnwRrPd1dmuA4joO7KUhDbbk0FWO3X/+LaTQql6jkEYHqjP+uh9wTStCsEcNdRVWjPtfIRWpxvpRvEZ4Be+rPUt3tnx6NV5vDvVo1GcIH8uiqMtWSM3rNe20Ku86EwPQ8tll84R0KUvHtG6b5TVKFUTDhdjCuo6/RwlWOWC2lgCjLrbkaOejgBatShqVMlZMrPVMy/Z/+IKSRQ8Q6+JQgwMWzEVYZWLxGv+l+Gm1hsDUnjbLP3coqAgBIrB3ang8grnpR+O6xYJqPZAUcb/OmJWjfYqNyHJrQSyEOko5KqcloJAa693sCk6jnTfrzy9kwAfA27yDYqJILbiCCrGeVIBP34nzs0uqWKJdiJVRi1gJa/mkpKhYdb6gDECLDFRWsxrA2ZVqU6QKqUUgObH2WYduwfj6hcya1h0r//07Ully1EkyxexqRWCHjfDO/aKfxdq4BITHpJ9elVOXGa0BAO/Zbz+Y9pc1lxMb2Gx7VkW2WpaZNVDDnM0sm7UhsYcBiEqLMUhTmwQrVbGAPgF7ZPY3eraIRXH50jKrLermnEbFFdaUFVcZMQMXBWoDKllXBQbKqJUUqDarrWtCBAh2PAeIAYrLswIXqBtF1UjLZKEFJsGO3N5iN8tmwRpA6juAUI03X7OazYLLbs9WF7+vTom1yPoiAC+hIgIpy0dBs0aW9c68nOh6liJL/UrXgGQLqFkm5TUbKtOe8MpqcYK5zHJiexlIJnbPWpYkIRdemqHqeiuH3xpwZJGCDduW2HarHtCasn40BMAdy2z/x4WCCtqOWUrB1suAaTXUBLPX4TaAWkSWzQawBkVt+5UzkEFquFnF8ky9O2XdpWbbyIZWbGxyYHVVB6RpzYW3OzPvgMMsTjCghiYEvgaQgYyl81Vm5WCx3cwuIeBOi5ugksIrRs3OnWDddw+QWTaLy1eNAUhtARRek5KOVxfvaJmWa9angDu26Vc302ZxVeCNzG13BQtcXJXUlVY5gAreKnY4sxyE9nqLvTdokVng9sQ6UjrFpmPw1r8T5xQIKswei6UB6OgVjM22ZxguCqjZg+YyVDq/fBRoZv4JJlVrqGT2HoNqlsVyCDDreBuwWuD6HHTNchU0F9o8ndnjrgVqu/numF36Zv2ukOfrzYL22OzWM8tiu0HI82YBSyfYY7Mk9tDs1/Qs6gA5sM2BeX3BLHorP8nsjNmf/LYfTjA2C9YFZl9JwbxZLi/c31oOKLPBmTVczgGjzmeW97TuZoHuwWjnjRCA9NvN0leiOMMUlnddHFkOAtP21Y6+X+9vcE0tsQKWI6uYEMtq580CF3Xgixa0vrrkqDF4KtZQB82C9HBLO2S22mXW+Y0Mh9Y/T+byasTyY5hDs9y014EbRq4DetZFVzDFPZnZGbMYxu3XQbcNENnHmUUfzGcW787xvUIAK8zCK1+/vi2zwCWzVF7erCtaFtvP7DgsaPluAanlOoBZsHIZMCzjngVVWm5aLi/0rBMLrxwEzuycWf7OBl/Y4Ds71EHddSEEuLN91lyMexbVPsZ7pNbtupZHT2MIl83m2cxCLW28GrUwGzdE9umuy9a0WSpaLi+o9c+Sz5kFLsGO72X4suB3tLSh5WcGzEo5AOyg2jfQgrVVC7N8CWPefg7ypFl+pGy0x/cKVF3ESazAHTfrqhY5oFsbNtv/5uOF7soEO6VWhtXCLL6x5zpgUqi1Y6K6QPviRaxO5NBydXEQ4PY/H59SPAYasagAAAAASUVORK5CYII="

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgubGVzcz81OWQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbWFnZXMvbG9hZGluZy5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzPzkzODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmxlc3M/MTFjMSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy91cmxfbW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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SztBQUNMO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsOENBQThDLHlCQUF5QjtBQUN2RSxrREFBa0QsaUNBQWlDO0FBQ25GLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BvcHVwLnRzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX3BhZ2VJbmZvUm9vdF9fMWllOEEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93X19kWnB1TCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93SGVhZGVyX18yekcxdiB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5pbmRleF9fcGFnZVRpdGxlX18xUUFSQyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2VJbmZvUm9vdFwiOiBcImluZGV4X19wYWdlSW5mb1Jvb3RfXzFpZThBXCIsXG5cdFwicGFnZUluZm9Sb3dcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dfX2RacHVMXCIsXG5cdFwicGFnZUluZm9Sb3dIZWFkZXJcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dIZWFkZXJfXzJ6RzF2XCIsXG5cdFwicGFnZUluZm9WYWx1ZVwiOiBcImluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SVwiLFxuXHRcInBhZ2VUaXRsZVwiOiBcImluZGV4X19wYWdlVGl0bGVfXzFRQVJDXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX2hlYWRlcl9fMzZhTWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLmluZGV4X19tb2RlSXRlbV9fdmRLcDMge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5kZXhfX21vZGVDb250YWluZXJfXzFISGs2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcImluZGV4X19oZWFkZXJfXzM2YU1iXCIsXG5cdFwibW9kZUl0ZW1cIjogXCJpbmRleF9fbW9kZUl0ZW1fX3ZkS3AzXCIsXG5cdFwibW9kZUNvbnRhaW5lclwiOiBcImluZGV4X19tb2RlQ29udGFpbmVyX18xSEhrNlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X192aWRlb0Zvcm1fXzJKbEJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcbi5pbmRleF9fZm9ybUl0ZW1fXzI1NFhGIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW5kZXhfX2Zvcm1JbnB1dF9fMmhsT0oge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogOTYlO1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNmVlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgb3V0bGluZS1jb2xvcjogIzRiNjJjNTtcXG59XFxuLmluZGV4X19mb3JtTGFiZWxfX2lwYldxIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDk2JTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTZlZTA7XFxuICBib3JkZXItY29sb3I6ICM0YTZlZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnUuZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5pbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnU6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuLmluZGV4X192aWRlb19fMndrMXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5pbmRleF9fcGFnZVRpdGxlX19DRXVDZyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbmRleF9fdmlkZW9JbmZvUm93X18zYmdtZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1Jvd0hlYWRlcl9fMThSaTcge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pbmRleF9fdmlkZW9JbmZvVmFsdWVfXzEtcmhmIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLmluZGV4X19sb2FkaW5nSWNvbl9fMUl6dWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMjAwO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYigwIDAgMCUpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2IoMCAwIDAlKTtcXG59XFxuLmluZGV4X19sb2FkaW5nSWNvbl9fMUl6dWwgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDYlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW5kZXhfX2xvYWRpbmdUaXBzX18zUjB5RiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE2JTtcXG4gIGxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWRlb0Zvcm1cIjogXCJpbmRleF9fdmlkZW9Gb3JtX18ySmxCeVwiLFxuXHRcImZvcm1JdGVtXCI6IFwiaW5kZXhfX2Zvcm1JdGVtX18yNTRYRlwiLFxuXHRcImZvcm1JbnB1dFwiOiBcImluZGV4X19mb3JtSW5wdXRfXzJobE9KXCIsXG5cdFwiZm9ybUxhYmVsXCI6IFwiaW5kZXhfX2Zvcm1MYWJlbF9faXBiV3FcIixcblx0XCJmb3JtU3VibWl0XCI6IFwiaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1XCIsXG5cdFwidmlkZW9cIjogXCJpbmRleF9fdmlkZW9fXzJ3azF0XCIsXG5cdFwicGFnZVRpdGxlXCI6IFwiaW5kZXhfX3BhZ2VUaXRsZV9fQ0V1Q2dcIixcblx0XCJ2aWRlb0luZm9Sb3dcIjogXCJpbmRleF9fdmlkZW9JbmZvUm93X18zYmdtZFwiLFxuXHRcInZpZGVvSW5mb1Jvd0hlYWRlclwiOiBcImluZGV4X192aWRlb0luZm9Sb3dIZWFkZXJfXzE4Umk3XCIsXG5cdFwidmlkZW9JbmZvVmFsdWVcIjogXCJpbmRleF9fdmlkZW9JbmZvVmFsdWVfXzEtcmhmXCIsXG5cdFwibG9hZGluZ0ljb25cIjogXCJpbmRleF9fbG9hZGluZ0ljb25fXzFJenVsXCIsXG5cdFwibG9hZGluZ1RpcHNcIjogXCJpbmRleF9fbG9hZGluZ1RpcHNfXzNSMHlGXCJcbn07IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWFnZXMvYmcucG5nXCIpKSArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMGUxMDFhO1xcbn1cXG4ucG9wdXBfX3Jvb3RfXzFkRnNnIHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5wb3B1cF9fbmF2Q29udGFpbmVyX19jUDN1byB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NjY2M7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ1JTtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5kaXNhYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmZhO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyB7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcsXFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJY29uX18zeWhFZCB7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLnBvcHVwX19uYXZJY29uX18zeWhFZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNWY1NjUxO1xcbn1cXG4ucG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8q5a6a5LmJ5rua5Yqo5p2h6auY5a695Y+K6IOM5pmvIOmrmOWuveWIhuWIq+WvueW6lOaoquerlua7muWKqOadoeeahOWwuuWvuCovXFxufVxcbi5wb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3I6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJwb3B1cF9fcm9vdF9fMWRGc2dcIixcblx0XCJuYXZDb250YWluZXJcIjogXCJwb3B1cF9fbmF2Q29udGFpbmVyX19jUDN1b1wiLFxuXHRcIm5hdkl0ZW1cIjogXCJwb3B1cF9fbmF2SXRlbV9fOXJzZVhcIixcblx0XCJuYXZJdGVtTmFtZVwiOiBcInBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjdcIixcblx0XCJuYXZJY29uXCI6IFwicG9wdXBfX25hdkljb25fXzN5aEVkXCIsXG5cdFwic2hvd0NvbnRhaW5lclwiOiBcInBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPclwiXG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBQYWdlSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50S2V5d29yZCwgc2V0Q3VycmVudEtleXdvcmRdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnREZXNjcmlwdGlvbiwgc2V0Q3VycmVudERlc2NyaXB0aW9uXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QXV0aG9yLCBzZXRDdXJyZW50QXV0aG9yXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGl0bGUsIHNldEN1cnJlbnRUaXRsZV0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGl0bGUodGFic1swXS50aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50S2V5d29yZCgoX2IgPSAoX2EgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iua2V5d29yZCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnREZXNjcmlwdGlvbigoX2QgPSAoX2MgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50QXV0aG9yKChfZiA9IChfZSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFnZUluZm8pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5hdXRob3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb290IH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlVGl0bGUgfSwgXCJcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NEZFMVxcdTYwNkZcXHVGRjFBXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcIlxcdTVGNTNcXHU1MjREXFx1OTg3NVxcdTk3NjJcXHU1NzMwXFx1NTc0MCAvIHVybFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnRVUkwpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJ0aXRsZSAvIFxcdTY4MDdcXHU5ODk4XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudFRpdGxlKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwia2V5d29yZCAvIFxcdTUxNzNcXHU5NTJFXFx1NUI1N1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnRLZXl3b3JkKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiZGVzY3JpcHRpb24gLyBcXHU2M0NGXFx1OEZGMFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnREZXNjcmlwdGlvbikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImF1dGhvciAvIFxcdTRGNUNcXHU4MDA1XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudEF1dGhvcikpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oUGFnZUluZm8pO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgdXJsX21vZGVfMSA9IHJlcXVpcmUoXCIuLi8uLi91cmxfbW9kZVwiKTtcclxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVXJsTW9kZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFVSTCwgc2V0Q3VycmVudFVSTF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRhYkluZGV4LCBzZXRDdXJyZW50VGFiSW5kZXhdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbW9kZUl0ZW0gPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXJsX21vZGVfMS5VcmxNb2RlKS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vZGVJdGVtJywgb25DbGljazogKCkgPT4gY2hhbmdlTW9kZSh1cmxfbW9kZV8xLlVybE1vZGVbaV0pIH0sIHVybF9tb2RlXzEuVXJsTW9kZVtpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqIOWIh+aNoumhtemdouiwg+ivleaooeW8j1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGFuZ2VNb2RlID0gKG1vZGUpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFiSWQgPSBOdW1iZXIodGFic1swXS5pZCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXJsID0gU3RyaW5nKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgbGV0IG5ld1VybCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjdXJyZW50VXJsO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSAoX2EgPSBsaW5rLnNlYXJjaCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KFwiP1wiKVsxXTtcclxuICAgICAgICAgICAgaWYgKCFzZWFyY2ggLyrkuI3lrZjlnKhzZWFyY2jpg6jliIYqLykge1xyXG4gICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke21vZGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgLyrlrZjlnKhzZWFyY2gqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKG1vZGUpID4gLTEgLyrlvZPliY3lt7LlrZjlnKjpgInkuK3nmoRtb2Rl77yM5YiZ55u05o6l5Y676Zmk6L+Z5Liq5qih5byPKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKCc/JyArIG1vZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nICsgbW9kZSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoJyYnICsgbW9kZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnJicgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1VybCA9IGxpbmsub3JpZ2luICsgbGluay5wYXRobmFtZSArIGA/JHtuZXdTZWFyY2h9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyAvKuW9k+WJjeS4jeWtmOWcqG1vZGUqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWFyY2ggPSBzZWFyY2ggKyAnJicgKyBtb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1VybCA9IGxpbmsub3JpZ2luICsgbGluay5wYXRobmFtZSArIGA/JHtuZXdTZWFyY2h9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoTnVtYmVyKGN1cnJlbnRUYWJJZCksIHsgdXJsOiBuZXdVcmwgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncGFnZUluZm9Sb290JyB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnaGVhZGVyJyB9LCBcIlxcdThDMDNcXHU4QkQ1XFx1NkEyMVxcdTVGMEZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdtb2RlQ29udGFpbmVyJyB9LCBtb2RlSXRlbSgpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWN0XzEuZGVmYXVsdC5tZW1vKFVybE1vZGVzKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEdBQVlBTVFBQUp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHo2L0x6aS9PVCsvS3ptL09UMi9QeisvTXp1L056Ni9LVGUvTnp5L1BUKy9MenkvTVQrL056Ky9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoK1FRSkJRQVRBQ3dBQUFBQUdBQVlBQUFGbk9Ba2ptUnBqa3Fxcm15clRnb014Mm9Rdk9rODA3aGlBQUNENjBVU09BUXdJREIyRXRFRWphakFCeFNtSHJ4ZHlnRm9BQnlwd0dLcWVFaXdLOWtFS2oyVm1TVGErcGlyWiszRGZFdVdXQ1NhZ0U0S0NJUVBPbll6RW5nQ2hBaG9lbWRFRTMwSGdZQnlpSmwzZXB5U0lnd1FmMjRIY0NneUVBTVFtZ2NSbFhncUNSQU1LZ2V6dEh1WEJRV2xiako0dFQySG5aMld4VTYrbThLSElRQWgrUVFKQlFBWEFDd0FBQUFBR0FBWUFJU2MxdnpjOHZ5MDh2ejArdnk4NXZ5czR2emMrdnpFOHZ6cyt2eWszdnlrMnZ5OCt2eXM2dnprK3Z6TS92eWMydnprOXZ5ODh2ejgvdnlzNXZ6TTh2enMvdnprL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRm5lQWxqbVJwamxLcXJteXJYaElNeDJvUXZPazgwN2hFQUFDQzYwV1MzRVFLb09KVWhBMEtpY0xBQnhSS0RBZURqZ1ZKZUc5R3NPUWdpTEJrbCtkRGVtcEVHaVphR2pMbGJlM0QvRkNHQ0VDWWdDSXBFNFI0aGdZNUt4TU1FM29xRm5VeElnZ1VDSUdBY29tR2R6dU9qaVVOQjNBbkVoV1NUVEZrQjVvekZRNFZkeXVoRFk4V0s2Wm5tQXNMcDB5WlBLVzJySnFlbjVmSE1wdkRlQ0VBSWZrRUNRVUFHQUFzQUFBQUFCZ0FHQUNFbE5MOHpPcjhyT3I4N1BiOHRPYjh6UGI4cE43OHZQYjg1UGI4L1A3OG5Ocjh4T3I4N1A3OHpQNzhyT2I4bk5MODNQTDh0Tzc4N1ByOHhPYjgxUGI4cE9MOHhQNzg1UDc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYU1nSm81a2FZNUpxcTVzcTJJSkRNY3FoTHpwUE5ONE1pbUtpZXRGU3R4RUJxQkJOQWdNVER5SE5QVUxKZ2FBQjJDUVl5RU1GUU0zWVVzRnNvREFTZ1lqR0FpeEVrSzdMZEZndHk2ditkUVAveTB5RWhBU0o0WkZDUVFSY0RwNk14ZCtDUkVDRVlBcWtFUVlnd3lIblhlT29EdzdscFlsRWdXRko1a29NZ1VSQmFFTURaeVJLYWNNS2d5NHVZR0hDUllXY2I0eWpoSzBvcldrUTUzTVJjVEkwSTBoQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEpUUy9NenEvT3oyL0t6bS9NeisvS1RlL056Mi9QeisvTHoyL0p6YS9PeisvTHp1L0p6Uy9MVHUvTlQ2L09UKy9PejYvTFRxL0t6aS9PVDIvUFQrL0p6Vy9OVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdtNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2alM5NlR6VCtCRWtpWURyUlRwQVloZEpvU0FSQ1FJQ0V5OGlpYVIrd2NPRUFXRGNlQ3JCWUN4STJhN2NpaEFuT2xDdHBtMTNVcUxCeXJuODRVblhELzh0TWhRR0ZDZUdSUmNMRVFzOE9ub1BGR0FIQ3cyTWdDbVFSQmVEaFllSGRucU9qWDZYbHlVVURoQ0dCNUZTTWc0SUJLRXBGQmFGcENrUXFTb1VDaXVSTEo0SEJMS2VNcU14Q2dxaW9xV214dERIekxPaklRQWgrUVFKQlFBWEFDd0FBQUFBR0FBWUFJU2MxdnpVK3Z5MDd2enM5dnk4K3Z5ODZ2ekU4dnlzNXZ6azl2ejgvdnk4N3Z6MC92ekU5dnkwNHZ5azN2elUvdnkwOHZ6MCt2ek0vdnpNNnZ6TTd2emsrdnkwNXZ6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnF1QWxqbVJwamttcXJteXJYZ2tNeCtxQXZPazgwM2hDT1E2SzYwVktSR0tYQnJBaEdrd0dKbDdob0VqOWdva0JZRHZJc1NLSDhERjdTMHkyZ01sS0JsTlFrU1R0RmxHaXdjYThHV0pDOXc3L0xqSUpOeWQxaENnWEJnSUdlWDR3QmhBTVBDbUtWWUFKREFxU09TSUxDQXVGUlJWd2dqcU9wNU9YbHlVTEFSR0ZDUXVrSW5ZQkRBK29DdytnZml1dHNpa0x3TUV0b1NJU0VzYTBnbm5DcG8ycXFzclR5OURQMXdraEFDSDVCQWtGQUJVQUxBQUFBQUFZQUJnQWhKVFMvTlR1L0t6cS9PejIvTFRlL0tUaS9OVCsvTHo2L0p6YS9MenEvUHorL0p6Uy9NejIvUFQrL05UeS9MVHkvT3o2L0x6bS9OeisvTVR1L0p6Vy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXb1lDV09aR21PU3FxdWJLdFdDZ3pIS2dTOTZUelR1QklVQklmclJTSkdDb1dJYUJBWW1IZ1R3U1RsUUFvSEZBcGlrR3NKdnFvRzE1ZWxCRll5V0hScUdpQVFGR2RSeHRLbG1NN3VjTytpYzA5RkJBc0VNU0l4REE4TVBIWXhBUUFBQ3dFN0NvaUtmQUVMajJlRk1IK0Fob0tFS0hTTGVwTThmS2s1SkEwU25DVUtEYStHTWhJSHJxV3hFZzJNTEx0aHNtRXRueUlHRXNTMHVSVU52S1o2cXFuSTBzbU0xYzRoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenkvT3o2L0t6cS9OVDYvS3ptL1B6Ky9MejIvS1RhL056Mi9QVDYvT1QrL0p6YS9OVDIvTVR1L056Ky9KelcvTlR1L096Ky9MVHEvTlQrL0xUaS9NVCsvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdySUNhT1pHbU9ScXF1Ykt0aUJnekhLYVlvYzE2LzY1d1VoWVRyUlNJNmdCT1JJb0lyMFF5TlFTRDFDeG9VQ0FoQ3NHTU5KaE9WZ211SU1CQ01TQzhHYXhTbUpnWGpMSERLWnQzWkV0Y2QrbHN5VjJ3bklnWVZFQldETVEwSGNIazFFUUNTRVhoUUJ3Ui9aUkFBRUdxS0VvT0VoZ0FWVFlFNlQ2ZzhtUzRLTEU0TG9VVTFkakVMQjdHcEtSY1VGNm9yRHlzWExNT3ZoQ0lQRk1jb2dhbkRxTCtzZnN2VVJjM1FqelFoQUNINUJBa0ZBQlFBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHppL0t6bS9PVDIvTVQrL09UKy9LVGUvTlQyL1B6Ky9NenUvTno2L0p6YS9OenkvUFQrL0x6Mi9OeisvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdnSUNXT1pHbU9US3F1Ykt0U0RBekhLU3pNZVAydTgyRVlCOWVyRkJNMWZnMlJBSElqeWh5RFJjb0haQWdVV0lHT05laXFJcEVVNVBGUVFIaEZTbUFRT0YyenppSnRQbHNlY3NLOFMyWk5uMkFGQUFWcE1RNFNEblJiYWdDTWJTdUdCSG9NQVl3QUFUVWlER0YvS0lFRlRYeDRvaXd6a3FaRUNYNGttcXFoQ1FpcGlab1RFWGdzc1Y4cllhU2NGQk1UdlpsOGliV0tXNmFTd2NyQ3NxT0pJUUFoK1FRSkJRQVlBQ3dBQUFBQUdBQVlBSVNjMXZ6Yzh2eTA3dnowK3Z5ODV2eXM0dnpjK3Z5OCt2ekU5dnpzK3Z5azN2eWsydnk4OHZ5czZ2emsrdnljMnZ6azl2eTA4dno4L3Z5czV2ek0vdnpNOHZ6cy92emsvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZvQ0Ftam1ScGpsS3FybXlyWWhJTXgrbHMxM2llSjlPVXVLK1RxREpwVkVRU3lNQkV3eGdZZ1ZTQzRKTU1Db3ZDUUtkaUNCaXFiUXJ5VUNpaXI1Z0l3akNjcmdwdHFTbkx6UWJLRzNEdnF0ZUVTQVFMQkdveURnY09OSW8yQVFDT0FUTXBCZ2NHZkJLTmozK1JnSUdEaFUxMm9ZdVdwSnBJRm9VbEVBZ1FURElXRktpakVnZ1JDSG9zc2k0QkNKVXJuRTRYd0hWNnhhS2xmTVBLb0xQR05DRUFJZmtFQ1FVQUdnQXNBQUFBQUJnQUdBQ0VsTkw4ek9yOHJPcjg3UGI4dE9iODFQYjh2UHI4cE43OHhPcjg1UGI4dFBMOC9QNzhuTnI4dE9yODdQNzhyT2I4NVA3OG5OTDgzUEw4N1ByOHhPYjh6UDc4cE9MOHhQTDg1UHI4dE83OC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUJhYWdKbzVrYVk1THFxNXNxMm9MRE1mcGJOZDRuazlOTTdtdmswZ2l5QlJFaTBHc1JOTmdMcGlVby9kYlBBNkVWK3VpdUxnR0I0c2xzWktKbnBpVDFaSmxtbW53MllKOEE5cGRzcUFRUmpsUWxqSVlCZzV4T1JvU0RJa0pjZ3NPQmhCM0M0aUpFalZJbG5zTGZYOG9lWVdmZFpFckF3RktaU1I2SkFNQXJBTnVNUTRWaElVQkFCRUFBVG9yc3kycnQ2YVlRaEFRSXdtbEprMkd5cCtpa1h2UHlKNTEwemdoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenEvTFRxL096Mi9LVGUvTXoyL0x6Mi9QeisvTnoyL0p6YS9PeisvS3ptL0p6Uy9MenUvS3plL09UKy9MVHUvT3o2L05UKy9NVCsvT1QyL1BUKy9KelcvS3ppL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsSUNhT1pHbU9SNnF1Ykt0aUJ3ekg2V3pYZUo1WFRWTzVyNU1JSVJBZ1JJZEJyRVREUkFxUkZNK1hFbHdFcjFiQlVIQU5Mb3RGTkR0NlBrNEhBUUhMbE1seXMwUDBCcXk3M0VzaE11QUk1R01LRXdvMGhEWVVDUVFKRkhFSGdZTjJoNGtVTlNoNktIeCtsWVZ3bklSMkxBTUJTaXRNUHljREFBd0FBMjB4RlJLUE53R3BBSDZlSzQ4dEE2b1dvNVI2RDJjaUZLSW1UWENtbll5ZmRwYk9KTWViMGpjaEFDSDVCQWtGQUJZQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9NenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTFRpL09UNi9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXb29DV09aR21PUjZxdWJLdGFCd3pINld6WGVLNFhSZVMrSjFGQ0lLQ0lEajRUelZJaCtBNFZYaVhGUURCZXJZQ0M0SW9ndmsvY0tPSThIYXJYMGxLV215RnA4Sis4SmFzSGo0YUpKSFprRWhad056RUREb1VKYmdjTGYzTUhDWVVPQ1RVb2R5Z1NlbnhzZ3BwdGpDMERCZ01zYWxNbkF3Q25BMm95RlE5VGdRY0dwd0FHT2l1dUtRME5LYWFua1VCQkZCQUtoeFlKQnNRa1N6c0ZXSytkblpUUnlXek9telFoQUNINUJBa0ZBQlVBTEFBQUFBQVlBQmdBaEpUUy9OVHUvS3pxL096Mi9MVGUvTXorL0tUaS9MejYvUHorL0p6YS9NejIvTVR1L1BUKy9Mem0vTlQ2L0p6Vy9OVHkvTFR5L096Ni9Lem0vTlQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsWUNXT1pHbU9TS3F1Ykt0V0NBekg2V3pYZUs0cmlydWVJMGtrTWhDOVNyUUt3OEZROFZTTHllTFZjaHdjdnNsRXdKS0psakVUSWpwRmVtbm9HUlh0YTdlOFFHU2dBUW5MR0lYbUxTMlpHQ1pGSzNoTmJnTUdoeEkxY1NjSWMzVW9Namw3azI0dUF3RURYU1FJZWlZREQ2QkZtM2NVaEkwQktRRVBDUW1vYklJcUJBQVBCQWdEQ2FFL1FBZ1BBTE14bDZLamFTa0V2YlhFcno0QnJtMkx6OE9VeVRjaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlR1L0t6cS9PejYvTVRxL05UNi9Lem0vUHorL0x6Mi9QVDYvS1RhL05UMi9NenkvTnorL0p6YS9MVHEvT3orL01UdS9OVCsvTFRpL0x6Ni9QVCsvTnoyL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXaTRDV09aR21PUjZxdWJLdGVCd3pINld6WGVLNHZoYnVlb3dFQ01SQzlTclJMcFZGUkxSZ3F4Z09xVXpVb0RkOUQ4R0RKak5uVFFRcEZmbW5vMmF2cWEvOWl3Sk9GWUNIRktwTG1MWjB3K0JOcUIwdE5ibjErQXpWeFFITjFLREk1ZTVGdUxna0JDVjUyZWlZSkRnNEtSWFl5Z3lvQkFTa0JuZzZtYUN5RUJ4TUFBQk1IQ1FDZWlFZGlzYkdBbGFDaGFTbXdBQXFRYkMyVmxtNkt6TUNTd2NFaEFDSDVCQWtGQUJRQUxBQUFBQUFZQUJnQWhKelcvTlR1L1BUNi9MVHUvTlQrL0x6aS9Lem0vT1QyL01UKy9PVCsvS1RlL05UMi9QeisvTXp1L056Ni9KemEvTnp5L1BUKy9MejIvTnorL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXY0lDV09aR21PVEtxdWJLdFNEQXpINld6WGVLNDdqcnVlbzRoRUVrR2RhTERKaXFkeURBSTNWZ0toZEEydUxKbUkwUU1Hbmlha0xCZU4rczR0TGRCMGFCeElzY2drUXF2ZkRQZ2lhNDVtQ1BBR2RERnJRRzF2Um5aa2luVjlLd0lRQWxsd2RDY0NDZzhLQWlWSWNvSU1BUUVwRUFxWEVEb3JuZ1VBQUFWK2w1ay9RQXlycXpHUG1wdGpkYXFzaXpOb0RRR1JaNFRGY0xwbHZnd2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSnpXL056eS9MVHUvUFQ2L0x6bS9LemkvTno2L0x6Ni9NVDIvT3o2L0tUZS9PVDYvS1RhL0x6eS9LenEvSnphL09UMi9MVHkvUHorL0t6bS9OeisvTVQrL016eS9PVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2pJQ2FPWkdtT1VxcXViS3RpRWd6SDZXelhlSzR2bEx1ZXFNTWhCaFRSWUpmVndxQXlOQUkzMXFXU2REVUVEWmJNbUNDYUFnMkQ2U2pMUmFPK2RHdGJMQ1VDRUJLdFI2dmZKaE5IUFRXZ0ROUXBlUk12YlNjSkZnbHlaWFptallBc0F4Qi9QeVFMRFhFbUF3VU1CUU1sUncwTlF5a0JBU2tRQ3FtbWV5cVdFQ2tFQUFBRUVwb1BuWlJBRExJTUlwR2VuNHN6c1ErMGpLdytwWUNGekViQ2ptY1NJUUFoK1FRSkJRQVpBQ3dBQUFBQUdBQVlBSVNVMHZ6TTZ2eXM2dnpzOXZ5MDV2elU5dnlrM3Z5OCt2ekU2dnprOXZ6OC92eWMydnkwOHZ6cy92eXM1dnprL3Z5YzB2emM4dnkwN3Z6cyt2ekU1dnpNL3Z5azR2ekU4dnprK3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZwMkFtam1ScGprcXFybXlyWmdvTXgrbHMxM2l1WTQrN25xakRJUVlVMFdDTlZhT1h3bHd3TjFhamtuUmRHQmVXekpnRU9xR2xveXdYamZyT3JXMnhOSWxNU0RSbUdVY1FTR2dySmxvaGtSQmVheWR0RFhCamVIT0hMUU1CQTJlTldpTUpBSk1ESmdvT0JnNUVLREFCRUFBUUFTa1JFU2tKQmhZV0NUb3BBNkFBalJRTEN4UXBCQlovUHlTTENTSUdCZ3NHUnF1V2hqT3l0R1NzUGhHcmFJSFFSc2JLaVRRaEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXpxL0xUcS9PejIvS1RlL016Mi9MejIvUHorL056Mi9KemEvT3orL0t6bS9KelMvTHp1L0t6ZS9PVCsvTFR1L096Ni9NeisvTVQrL09UMi9QVCsvSnpXL0t6aS9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbElDYU9aR21PUjZxdWJLdGlCd3pINld6WGVKNWppdUt1SjlSa0VndUthREJmclRlTEZDSTNWa1ZTK1JVTUJaYnM2QXM2SHlha2JFZW0vYzZ1cmJGVVFWUkl0RWMxZW1zSUdtYVZISjFxUVBBMWF5ZHRieWhqWm5SbEt3TUJBMmVPV2lNREFBd0FBMkVDRndKRmhnY0JBQllBQVNrVUZDa0RCQXNYRVRxbmxReW1BUWtFb3djQ0M1dEFKQlNOSWc0SkNRNUhyR0dITTdLMFpUTm9wWHlDejBmR3ltUWhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSnpXL05UNi9MVHUvT3oyL016Ky9NVHkvTHpxL1B6Ky9Lem0vT1QyL0x6Mi9PeisvTHp1L01UMi9LVGUvTlQrL0xUeS9QVDYvTXp1L016cS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3I0Q1dPWkdtT1I2cXViS3RlQnd6SDZXelhlSjVmMXVLdUp4U0JFQXVLYURETGE3R1lXUUpObmNwQ1VMb0NpZ0JMZGxRR0Z3MkxDU25ibVdtL3RLdGNLUm92a1lSYlZvQTAwRGRhUVZCQXB4b0tmV29IZTRKdUIyMXZJaEVWWWlobGVHZDVLd01UQTJrUkxTUURBSjBEWXdZSUJuTmxFNTBBRXlrRGNnY1JDSzlXTXlxY25YSVNEZzRTS1F3SURGc2tDUk1KSWhTNEZFZVpZNUF6RTdpNmtYNXBxNE9LMVVmTGttWWhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSlRTL05UdS9LenEvT3oyL0xUZS9NeisvS1RpL0p6YS9MejYvUHorL09UNi9KelMvTXoyL01UdS9QVCsvTHptL05UNi9OVHkvTFR5L096Ni9Lem0vSnpXL05UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3A0Q1dPWkdtT1NhcXViS3RlQ1F6SDZXelhlSjVmanVPdUoxS2hFQ1RSWUw1YWIrYUFPRzRzaHlYWlVpQWdMSmtvNFFzMm42V2piRWVtL2M2dUdXRkJpQlZoQS9jMkFGZ0FBdEFiUThJd0p3SjJkMmdKZTMwMU1HdHRiekFLY21NdlpYa3RBd0Z4ZzBBakF4V2JBeVlKRFJRTmptTUJGUWNWQVNrVEV5b1Vya2t6S3BxbmNSRVVCcW1mQXFLWW1aVWlEd1lHRDF1SFJvOHpFUVlVdVpLREE1Wm5pOU5ieUpGa0lRQWgrUVFKQlFBV0FDd0FBQUFBR0FBWUFJU1UwdnpNOHZ5czZ2enMrdnlzNXZ6VSt2eTg5dno4L3Z5azJ2ejArdnljMnZ6Yzl2ekU2dnpjL3Z5YzF2elU3dnkwOHZ6cy92eTA0dnpVL3Z5OCt2ejAvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnFhQWxqbVJwamtlcXJteXJXZ2NNeCtsczEzaWVXMVhscmlmU3BCRWswV0MrV205V2FWUnVyR2F5dGFBMFdETFJ3UmM4WEUxSDJXNU0rNWxkTTRsREVpdkNFbTN0QStBQVBLQzNBcVJRUHN6ckQyY0hlbncxTUdvU0NXNXZjV0lIY0hoa015c0pEM0NDUUNNSkNBb0lBMkFQQW9FbE5BOE9DZzZqQ1lvcEFnSVFMeXliblFNSEN3UUVDeW1oQVZna0E1WWlETGdNV29aR2pqTzN1WktZQTdWbmk5SmF5YzFsTUNFQUlma0VDUVVBRkFBc0FBQUFBQmdBR0FDRW5OYjgxTzc4OVByOHRPNzgxUDc4dk9MOHJPYjg1UGI4eFA3ODVQNzhwTjc4MVBiOC9QNzh6Tzc4M1ByOG5OcjgzUEw4OVA3OHZQYjgzUDc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmFNZ0pZNWthWTVNcXE1c3ExSU1ETWZwYk5kNG5zT1J1NTZreVFSSW92RmV2UmxqUW11dUlwT2VLNEZnL21JaVJ2TEVjR0NMTXRsdTdQU1pXYk1Db1BBRk1nUnRSZ0JBRDl5YU1JZkVxNXpYejEwU0JDOHdhZ1VDUkZsd1lGZDRaRW9xQWhCd2dEOGpBZ29BQ29nbUVBTVFKalFRRHdvUEVERkpLUU9yTHl5WUNwc01Cd1lHQnlrQkF3dG9KSktjRGJRTktGeGlUYk8xajVVQ1VtYUp6WXgzMEdNaEFDSDVCQWtGQUJrQUxBQUFBQUFZQUJnQWhKelcvTnp5L0xUdS9QVDYvTHptL056Ni9LemkvTHo2L01UMi9PejYvS1RlL09UNi9LVGEvT1QyL0x6eS9LenEvSnphL056Mi9MVHkvUHorL056Ky9Lem0vTVQrL016eS9PVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXZ1lDYU9aR21PVTZxdWJLdG1Fd3pINld6WGVKN0RnN3VlSkFvRlNLSmxGb2NHYmpDYllHalFsVVBpOENVc3oxOU0xRUFzZ001dFVTYmJtYU8rTkd0R1lCREU0Qm9xQUtnSGJsQVlzaENsMjlVVEJRY0xMekJ0YjBRaWhZcGxlV2Q0S3dNTlBZQS9Jd01HREFaTUpnME9FU1kwRFFxa0VZNFREZ0lPa0NtWXBDa0pGUUlKS1FHZmF5U1NuQmNWRlJlSlpYaXhGYlNuVFpWcXdNcU14bzg0SVFBaCtRUUpCUUFaQUN3QUFBQUFHQUFZQUlTVTB2ek02dnlzNnZ6czl2eTA1dnpVOXZ5azN2eTgrdnpFNnZ6azl2ejgvdnljMnZ5MDh2enMvdnlzNXZ6ay92eWMwdnpjOHZ5MDd2enMrdnpFNXZ6TS92eWs0dnpFOHZ6ayt2ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGbzJBbWptUnBqa3Fxcm15clpnb014K2xzMTNpZXorNWFEb0hCNlBFNGxXZ0RBQUNTb0RrVkRTY3ZGVmdDQXE1RzVjR1NaWkpMb1VuQkhjdUFUZWxPMTJ0M1V4UURKV1lVdlZDSmhUNXlVMDhPWlNvUmVndHBiUmdIVVRVd2NYTjFkb3QyTW10cWxTeUdiajRvRGdZRWRDVUpGd2xtQ2drR25FMTlGd3dYZlNzRW5Ta1RFcDRwR0JjWVhTU2xkQVVFQWdXUGszMnpFaE9VVTVsdXdzeVNsWDNRQ2lFQUlma0VDUVVBRndBc0FBQUFBQmdBR0FDRWxOTDh6T3I4dE9yODdQYjhwTjc4elBiOHZQYjgvUDc4M1BiODdQNzhyT2I4bk5MOHZPNzhyTjc4NVA3OHRPNzg3UHI4elA3OHhQNzg1UGI4OVA3OG5OYjhyT0w4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmFiZ0pZNWthWTVIcXE1c3ExNEhETWZwYk5kNG5zL3VXZzZCd2NqaE9KVm9BOEFDTUloUmFLa0VsSmNLTENzQkZ5VWk5Y1V1eVFyemRKQ2FhT0RBWk1lRzl0NnRXYUNSTlpLK3FBbWhRcGpjcG1VU1ppb1RmQVFJY0FjUUVnNHZNQUVXZFhZaWVKUXliWDkvTEUySkxIY0NGZ0tWSXdNRkVHY3dBeFlLQkJDQUJ3VVBCWm9xQWdxaUJ4UU1ERStLcHA1M1RTSUlBZzhJazVkL3VyeVluYzdJMEphdm1Xd2hBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSnpXL05UNi9MVHUvT3oyL016Ky9NVHkvTHpxL1B6Ky9Lem0vT1QyL0x6Mi9PeisvTHp1L01UMi9LVGUvTlQrL0xUeS9QVDYvTXp1L016cS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV200Q1dPWkdtT1I2cXViS3RlQnd6SDZXelhlSzRYamJ1V2c4bEFWRkZBS2ljU2JRQm9EZzZSUm1GbG9WbFZreVpnNHJJUXFyL1loZGxNbkE1VkUrMlNtQ1J5Tit2TVIyL05KQlJ1VWxrNkRCeUFabkE0WGd0WENZQU9iM1VMQklZMU1IZ1NZbnN5ZkhLRG1GY3JFWFV1U2dZSUJwUWtFUUVSYWpBUkNLeWRjUUVLQkhFckRBZ01LZ1VGWUFNQmp5OUtybXdDQW1hVmF6a1d1V0J4YzU2ZWxkQ1h6SmszSVFBaCtRUUpCUUFXQUN3QUFBQUFHQUFZQUlTVTB2elU3dnlzNnZ6czl2eTAzdnpNL3Z5azR2eTgrdnljMnZ5ODZ2ejgvdnljMHZ6TTl2ejAvdnpVK3Z6VTh2eTA4dnpzK3Z5czV2ekU3dnljMXZ6VS92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcDZBbGptUnBqa3Fxcm15cldnb014Mm9Rdk9rODA3aENBQUNDNjBVYUJBYXd4UUt3aUoxRXRBR0NRaG40bU1KVWc3ZExCYWlJbThLbWFsUzJLNWxGU2tFZ1RZb3RYR2EwY25ONDNuRGZtZ1VTTjArQ01BMEdCQVlST25tRUJYSXFBd2FSRVh4eGpVUUtEd2tQVG9OemQ1K0tlcFNVSkFvVEVoT2NKQTBPRFo0S0VyR09QQTRNRHFFcnA2a3BEQXhsclN3bFJCRVFFRytDTkxpOVBiaWpmSjNRVURLTDFIY2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016eS9LenEvT3o2L05UNi9Lem0vTHo2L01UcS9QeisvS1RhL056Mi9QVDYvSnphL05UMi9MVHkvTnorL0p6Vy9OVHUvTFRxL096Ky9OVCsvTFRpL01UdS9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV21JQ2FPWkdtT1NLcXViS3RpQ0F6SGFoUzk2VHpUT0ZJQmtJcnJSVnBFRmpBSUFCZzdpV2lEQkNNeDhDbUZxUXR2bDRvd3ZqZmpNZnZRcm1TWWhUU0JOQ0cwYnRrZ1V0M203cnlodmlWVEhCUk9nVThMQllWSWVEcHZGSEFxaElWMWVoZUxSQmgrZ0lKT05JbDJuRng3bnlRSUFSSUJUU1VJQ2hkeEtSSUNFb2dwQ2dZUG15c0JBcVVwRFFRclpTeW5PUmdURGc1dGdacDRDTHM5dForZ21OQXluYkIySVFBN1wiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IGNsYXNzbmFtZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFZpZGVvSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2aWRlb1VybCwgc2V0VmlkZW9VcmxdID0gcmVhY3RfMS51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2aWRlb1NpemUsIHNldFZpZGVvU2l6ZV0gPSByZWFjdF8xLnVzZVN0YXRlKDApOyAvLyDpgJrov4cgWEhSIOeahOWTjeW6lOWktOeahCBjb250ZW50LWxlbmd0aCDojrflj5bjgIIg5Y2V5L2NOiBrYlxyXG4gICAgY29uc3QgW3ZpZGVvUmF0ZSwgc2V0VmlkZW9SYXRlXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIOmAmui/hyB2aWRlb+e7hOS7tiDojrflj5bop4bpopHnmoTplb/luqbjgIIg5Y2V5L2NOiDnp5JcclxuICAgIGNvbnN0IFt2aWRlb1RpbWUsIHNldFZpZGVvVGltZV0gPSByZWFjdF8xLnVzZVN0YXRlKDApOyAvLyB2aWRlbyDml7bpl7RcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHJlYWN0XzEudXNlU3RhdGUoZmFsc2UpOyAvLyDor7fmsYLnirbmgIFcclxuICAgIGNvbnN0IGlzVmlkZW8gPSAocGF0aCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAvXFwuKG1wNHxhdml8d212fG1wZ3xtcGVnfG1vdnxybXxyYW18c3dmfGZsdikvLnRlc3QocGF0aCk7XHJcbiAgICB9O1xyXG4gICAgbGV0IHZpZGVvRWwgPSByZWFjdF8xLnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGdldFZpZGVvVXJsID0gKGUpID0+IHtcclxuICAgICAgICBzZXRWaWRlb1VybChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNWaWRlbyh2aWRlb1VybCkgfHwgbG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ2dldCcsIHZpZGVvVXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiAoeGhyLnJlYWR5U3RhdGUgPT09IDMgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSAoX2EgPSB0aGlzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKTtcclxuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJNYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFydHMuam9pbignOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBbU3RyaW5nKGhlYWRlcildID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvU2l6ZShoZWFkZXJNYXBbJ2NvbnRlbnQtbGVuZ3RoJ10pO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jdXJyZW50ICYmIHZpZGVvRWwuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0R1cmF0aW9uID0gZ2V0VmlkZW9EdXJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9UaW1lKE51bWJlcih2aWRlb0R1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB2aWRlb0R1cmF0aW9uICYmIHNldFZpZGVvUmF0ZShNYXRoLmZsb29yKGhlYWRlck1hcFsnY29udGVudC1sZW5ndGgnXSAvIDEwMDAgKiA4IC8gdmlkZW9EdXJhdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6KeG6aKR5pe26ZW/XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldFZpZGVvRHVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZpZGVvRWwuY3VycmVudCAmJiB2aWRlb0VsLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmlkZW9JbmZvQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvRHVyYXRpb24gLyBcXHU4OUM2XFx1OTg5MVxcdTY1RjZcXHU5NUY0XFx1OTU3RlxcdTVFQTZcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih2aWRlb1RpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIHNcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlbyBEYXRhIFJhdGUgLyBcXHU4OUM2XFx1OTg5MVxcdTc4MDFcXHU3Mzg3XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBrYnBzXCIpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW8gU2l6ZSAvIFxcdTg5QzZcXHU5ODkxXFx1NjU4N1xcdTRFRjZcXHU1OTI3XFx1NUMwRlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1NpemUgLyAxMDAwICogOCxcclxuICAgICAgICAgICAgICAgICAgICBcImtiXCIpKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvRm9ybSB9LFxyXG4gICAgICAgIGxvYWRpbmcgJiYgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5sb2FkaW5nSWNvbiB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2VzL2xvYWRpbmcuZ2lmXCIpIH0pLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmxvYWRpbmdUaXBzIH0sIFwiXFx1NkI2M1xcdTU3MjhcXHU1MkFBXFx1NTI5QlxcdTgzQjdcXHU1M0Q2XFx1NEUyRC4uLlwiKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlVGl0bGUgfSwgXCJcXHU2N0U1XFx1NzcwQlxcdTdFQkZcXHU0RTBBXFx1ODlDNlxcdTk4OTFcXHU3NkY4XFx1NTE3M1xcdTRGRTFcXHU2MDZGXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZm9ybUl0ZW0gfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmZvcm1JbnB1dCwgb25DaGFuZ2U6IGdldFZpZGVvVXJsLCB2YWx1ZTogdmlkZW9VcmwsIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6KeG6aKR55qE5Zyw5Z2AJyB9KSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXNfMS5kZWZhdWx0KHN0eWxlcy5mb3JtU3VibWl0LCBsb2FkaW5nICYmICdkaXNhYmxlZCcpLCBvbkNsaWNrOiBzdWJtaXQgfSwgXCJcXHU4M0I3XFx1NTNENlxcdTc2RjhcXHU1MTczXFx1NEZFMVxcdTYwNkZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvLCByZWY6IHZpZGVvRWwsIHNyYzogdmlkZW9VcmwsIG11dGVkOiB0cnVlLCBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIiB9KSxcclxuICAgICAgICB2aWRlb1VybCAmJiB2aWRlb1JhdGUgIT09IDAgJiYgdmlkZW9TaXplICE9PSAwICYmIHZpZGVvSW5mb0NvbnRhaW5lcigpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWN0XzEuZGVmYXVsdC5tZW1vKFZpZGVvSW5mbyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUt3QUFBRFFDQU1BQUFDdEQzcFFBQUFBUEZCTVZFVkhjRXlQMk9PVTJkK04yOXVmMWV4OTRzdDk0c3gvNE02eXlmK3p5ditIM2RXenlQK0wyOW1PMnR1enlmK1cxZVd4eWY2eHlmNnd5ZjZ2eVA0aUJpSFVBQUFBRkhSU1RsTUFCZzBXSFNjNVRVZzVabHVGb1N1eGNvaWFyQlZXT3d3QUFBM0ZTVVJCVkhoZTdKWFJDc013Q0VXbjZmOS84eEFiRHNGSTJZTnBCcm5YeGU3dGNHUHc4MmM2T2pvNk9qb1M4L2FFN3UwbDQ3ZnNHMmRrMnpCaG1ZQUwvRHMrSU9uRi82MW9vUVFOZTl0cVFvV1lTZFB0eDE3akNydEV2d2M3SnVxa25ORGVKVnZNQWNEdzNqRlMxa3d2WmtvVE9pbDJUa2VOc08rUjkrNkd6ejdRaTVrQ0NxRWIzRkh2aGdveWxKbFVaQ1daZDloZ0hKNzlsRk90clE0ekVEOWtxcjJzTDF1aXJDbFFpVExsOUdiVzVjbUdEWm9DdyttMnRpeFZJclhLNTdQemdhZ2RWMWVQTEhtYTg2dkhhdVVxaGlOYUpnRE85T1l4cU91U1paMHlBaytKUnBXUHExUGliRDNGVzQrOGkvWlV0cVBneEY0ejFkNDdSMGcxdlB5Y1VadFhXN0VRMGxUMVB2UVoxYXpGTzB2U1ZIWFlUWkpUNGxiK3dBUlA5aE9rRWxGaDFXYXNyUkFUMW9tNC9VQUtJNXdtTFV3MnoxWGRITFBYNURaRy81bnFycDljQTJsWVQvSHFGVXBVbjJzY1ZwS2RvRHBwUkRYVlFQNk0ycndjRjh4UlYyV3NjVmFUeGQvOGNGVHJFOUIyWGEyZTh3T3FmR2szb3gyNWJSaUt0aXRMazNTenpmLy9iYlZpaUFOZDBnTllCU2xQOXZYZ2hMcWlCeU9jeGo1bFAybE56TDcrS1VCVjRHZzFUOU4yWjNSK0p2R3N5bkZReTYyQzIvamZCelVZdlhycjEvY3FEQUtBeWRWVWFvcHFvT3Z2Zkd4Vm5yRW9SV3ZBelVtL2ZTN08zbHhyTHpJTHErWVZkUy8xV3FpbTgxcXNodHA3Q2FpOFh5c3A1ejZrNHZSUExiTVQwejY5TGd6a2VCV3ZvRXFmdWxRam5SOTdWdFdrZ1l3RFVXdUdpdFBlYUZVRExZTFZmSTBIUWQ0QTFxaXd3bGtIeTFUSVdhQ2tpbXFRelNFZFZHbEhyMG9EcjUyMTJVZFFiVm1ySWxXOGpybUt2T1l4c0REejlPK1ErcDRTMGo1R2dWZkJoWllXQ0tGNk9XbU8yc2RhbGFncWxuRUYwdWFZVi96ZkIzV3hqbEVHQzY5a2x2UnFoelpqSGI1R0FTem5RYUpWV1dkdDUybTJxUnkxM0t4Nk5WUllHNkdhVzkxUUMyRFZMSm1seWZwdS96dWxQVjdWR3l6djE3aXhjcXQ5NExXb1p6bTg4R3Fnb0ZveFUwV3JYYlMreHF2R3JJcDFyN0Q2eVhwbkZkUmVDZXVzZHozZ1dudExRY25WdnBPT0gzVm1QNVFXVk5NNks3VEEyUGNXcUQ5Zm1DM0tXVkNsWDAycmVqWE83UmhBN0h5cTJnRFdwbUpOS3hHZ1IwQlBVT2Y2K1FLMllQVEdyS015c1FSU0tIa0dxR09pL3FneVN4YUlXR09sWFdOZWFXQ1oxbFdGOHl3aDY2aVlGYkhEeEJKWVhXaXQ2cU5MRTVieFNqTkFBb3ZJV2ozdyt1ZFZnTXFSNEdKQlpYTnBDRWhlb2RXOVR0ckNEVWJMeXB3VlVRa0JSWjFyYVgyVm05MWpWbWJYdXptZ2gzajlnL3BwWmt0d1B4S3pJYlVHeEZHc0xZZWRxeTRNTU1zSXk5R1Z0bXNrOWZyOGhxMHhxNmN0WWtQSERsNWVjMkxUYXFzeVo5VXNyd1ZZamJNZ2xQVHJ3aTB5S3h0TVJrUEV4bTROdkhSc0FhejJMTFFPQ3UwZ3J1TE9JZ28rSjZnOUJhak1zN2xaS28zWFBBbFdWWFZCTkN0aWRWZDFPSlYwcnMrcU5raXppNWlOWnZkaHdIazNYS3RhVkRYYkVEdHNvVmJOY25CWncxWnRNSERYSUNObUpXUVZOZXNDcTlKRHdXakpybjR4Y2N2R1VscENGdFpmUlcyUW4yRU5zenJEMGdHWXhXdTlXWVhWRTJIa21SVTMxM3hNN0srYU5BakhBbUxCSmJzUUsxN0ZiQ21xc0Y2d3BsOW1TV2hKd3hhWU5lSXdIdkFLaGxsbzA5U2laZGxncGU4MXFNM042bHNzNHhiREZtSXhlM3JMNE5HSmkxbUd3emRkQUt2aG5uSys3d0dTOWxZdFh0OE1CVVRCSVN3WHpiaHY4SDVNYkVaclpwdUk3WklFK1hGd3ZzR0FCaTlYeXpCemt3ZFVSRFczaUQzb1dTNmJvRmFwazJtR1BKRHdjbExXVGNjK05odTVnSTVxb1cxemlkblJzNGlWSmtBc2FYQkFiQjgwZzZ4Smk5bEYyelFQNHJTVjU5YXNrd05LTDNVSU1heUoyb2xLRzR3dXFKaU5UUURzUVJ5d0ROVWV3WldtZFY1bW1mZkJKV2JQeEFKa2lPRFNFTkNHOXdYVUFnb25yQnZxbVZsZzhnVnUvalZTeThJckN3UEVIclJCY2pXUys1c2lHclBBeXBpSVd6QmpFdUQxMkN3clI5NG5CQW1FaXozMlRpeXg1YnhIWWlIbFNxdzl5QVUxQklKOTIwVWYzSGJzL3pjYlVTbmpCenB0V2dZRVk3MS9wNlZmclk3RjBxK0Ixemp2MzhXOGE0RUZsQU1oaXYwNm53M0F5L1dDUzloSzB4b3ViWkMvem9EN1dHd0ttdk5xMnphbmRiWDdoQWlwTFdIOU9qSExpdGRqWTBNczFCaTFybmFuemMxU3B4MGI3M1RrdUh0NmtRZHp3YnI2NFA3MGNyRlAwNEJ3alplNnVJWWd2S1pjRW9IUkM3RVJGOVluR3l6M3FqZjVqRlVGeDRPaE54bG1KTFdDMkhPejRlZmNNQnF2Nk9YbHNYR09rUWo1RmhPeGkvYW9aUUZ3dHEyZ2oycVRiK2lpMnNocTZ5Uml2VUFGMk1BZFdIZzFiSjMyM3V5Tyt3QlVtb0Q5UktXRzJZQWtRcU5wT2NRQVpZYUI5S25aVkt4V0RteWZKR3lIOHlhanJGdDEzTk1MZmxqVnU1d1piallpMExXb1RZWVl6RDVMZzB3c0JJdUMrMGM3cjlzRk5nYUN2Q3JLOXNMc0E3WFNBbGdGRld3dm9pMVYyMU96YUhXMVoyRkFhbUhWcGE2Q1hmUnVnZUM0UXB0dHIxV25sL3gyc1JzbEJTOTZkVVJ3V21ESkxYYVg0WjZLcFYwYkt5dmhaWStoZGhCZlRydUx4ZXpaN1RtYVFEaHpYc1UxODlIc1FPMFdCTVo3K29zU1dOT2ZjdnZ0TXk5SkNIRGxHS05sZDdFRy9NUXJacmZJMGwvSSs4ZVJrMzdnKzVrdGJCRUxxb0UrYlFNOWFza0JRYVVBUmpDNEhHUFd0dEFpMWtnZDkrekhMNWcxQUdNRk5SYUMzVyttVmxqcFdhdUQvU1VScTgwNjY5L3Z4eGU0ODNGYXVnZTEwRHFyZ1ZJUEppNWdTWUxOYTNOT2FDTndBOWhSTHdMQnhUb3JZbytpUzE1WEhiV0pWb08wUDlIeEtuMGRRK3laV2VvdUM3alJnVmJqb3lhdVc5NTRqUlMxbUdWM2dmdjc2L2ZKSEVNV0dDMWVrWnFWS081WHMrV3NpTjJHQW1nZjNFK0ZOWmcxVGwvdnl2cGloWURmQVhlemlHVTBoSFN1cjdQWFdtSGR2TDZqcFM4TTJGYmFzYkJDZTVCY3lVSDdYeTFudU42MkNnVFJObTFUSE5XV2dQZC8xeTY3SnFObGtHMUJzc2hmNy8xM3Z0UFJDTWxXOXhIQVhHNlhjdGdmc3R6OEtZZFY3SzNXVm1oWjVZRFhkUjM2WnA1K3NZVVVPTlNLaXlGcW5mZkwrNjJ3Q3V4Q1hvZGl3S3plcTJPOTYzd3dnbGpBaFZOQXhiMlFCa0VWMk0wQzY3M0tlczFzLytFd24xL1FLaWlNeWlPb091SHlWMUVGVnNSdXNud1JyUGQxZG11QTRqb083S1VoRGJiazBGV08zWC8rTGFUUXFsNmprRVlIcWpQK3VoOXdUU3RDc0VjTmRSVldqUHRmSVJXcHh2cFJ2RVo0QmUrclBVdDN0bng2TlY1dkR2Vm8xR2NJSDh1aXFNdFdTTTNyTmUyMEt1ODZFd1BROHRsbDg0UjBLVXZIdEc2YjVUVktGVVREaGRqQ3VvNi9Sd2xXT1dDMmxnQ2pMcmJrYU9lamdCYXRTaHFWTWxaTXJQVk15L1ovK0lLU1JROFE2K0pRZ3dNV3pFVllaV0x4R3YrbCtHbTFoc0RVbmpiTFAzY29xQWdCSXJCM2FuZzhncm5wUitPNnhZSnFQWkFVY2IvT21KV2pmWXFOeUhKclFTeUVPa281S3FjbG9KQWE2OTNzQ2s2am5UZnJ6eTlrd0FmQTI3eURZcUpJTGJpQ0NyR2VWSUJQMzRuenMwdXFXS0pkaUpWUmkxZ0phL21rcEtoWWRiNmdERUNMREZSV3N4ckEyWlZxVTZRS3FVVWdPYkgyV1lkdXdmajZoY3lhMWgwci8vMDdVbGx5MUVreXhleHFSV0NIamZETy9hS2Z4ZHE0QklUSHBKOWVsVk9YR2EwQkFPL1pieitZOXBjMWx4TWIyR3g3VmtXMldwYVpOVkREbk0wc203VWhzWWNCaUVxTE1VaFRtd1FyVmJHQVBnRjdaUFkzZXJhSVJYSDUwaktyTGVybW5FYkZGZGFVRlZjWk1RTVhCV29ES2xsWEJRYktxSlVVcURhcnJXdENCQWgyUEFlSUFZckxzd0lYcUJ0RjFVakxaS0VGSnNHTzNONWlOOHRtd1JwQTZqdUFVSTAzWDdPYXpZTExiczlXRjcrdlRvbTF5UG9pQUMraElnSXB5MGRCczBhVzljNjhuT2g2bGlKTC9VclhnR1FMcUZrbTVUVWJLdE9lOE1wcWNZSzV6SEppZXhsSUpuYlBXcFlrSVJkZW1xSHFlaXVIM3hwd1pKR0NEZHVXMkhhckh0Q2FzbjQwQk1BZHkyei94NFdDQ3RxT1dVckIxc3VBYVRYVUJMUFg0VGFBV2tTV3pRYXdCa1Z0KzVVemtFRnF1Rm5GOGt5OU8yWGRwV2JieUlaV2JHeHlZSFZWQjZScHpZVzNPelB2Z01Nc1RqQ2doaVlFdmdhUWdZeWw4MVZtNVdDeDNjd3VJZUJPaTV1Z2tzSXJSczNPbldEZGR3K1FXVGFMeTFlTkFVaHRBUlJlazVLT1Z4ZnZhSm1XYTlhbmdEdTI2VmMzMDJaeFZlQ056RzEzQlF0Y1hKWFVsVlk1Z0FyZUtuWTRzeHlFOW5xTHZUZG9rVm5nOXNRNlVqckZwbVB3MXI4VDV4UUlLc3dlaTZVQjZPZ1ZqTTIyWnhndUNxalpnK1l5VkRxL2ZCUm9adjRKSmxWcnFHVDJIb05xbHNWeUNERHJlQnV3V3VENkhIVE5jaFUwRjlvOG5kbmpyZ1ZxdS9udW1GMzZadjJ1a09mcnpZTDIyT3pXTTh0aXUwSEk4MllCU3lmWVk3TWs5dERzMS9RczZnQTVzTTJCZVgzQkxIb3JQOG5zak5tZi9MWWZUakEyQzlZRlpsOUp3YnhaTGkvYzMxb09LTFBCbVRWY3pnR2p6bWVXOTdUdVpvSHV3V2pualJDQTlOdk4wbGVpT01NVWxuZGRIRmtPQXRQMjFZNitYKzl2Y0UwdHNRS1dJNnVZRU10cTU4MENGM1hnaXhhMHZycmtxREY0S3RaUUI4MkM5SEJMTzJTMjJtWFcrWTBNaDlZL1QrYnlhc1R5WTVoRHM5eTAxNEViUnE0RGV0WkZWekRGUFpuWkdiTVl4dTNYUWJjTkVObkhtVVVmekdjVzc4N3h2VUlBSzh6Q0sxKy92aTJ6d0NXelZGN2VyQ3RhRnR2UDdEZ3NhUGx1QWFubE9vQlpzSElaTUN6am5nVlZXbTVhTGkvMHJCTUxyeHdFenV5Y1dmN09CbC9ZNERzNzFFSGRkU0VFdUxOOTFseU1leGJWUHNaN3BOYnR1cFpIVDJNSWw4M20yY3hDTFcyOEdyVXdHemRFOXVtdXk5YTBXU3BhTGkrbzljK1N6NWtGTHNHTzcyWDRzdUIzdExTaDVXY0d6RW81QU95ZzJqZlFnclZWQzdOOENXUGVmZzd5cEZsK3BHeTB4L2NLVkYzRVNhekFIVGZycWhZNW9Gc2JOdHYvNXVPRjdzb0VPNlZXaHRYQ0xMNng1enBnVXFpMVk2SzZRUHZpUmF4TzVOQnlkWEVRNFBZL0g1OVNQQVlhc2FnQUFBQUFTVVZPUks1Q1lJST1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9wb3B1cC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuY29uc3QgcGFnZV9pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9wYWdlLWluZm9cIikpO1xyXG5jb25zdCB2aWRlb19pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy92aWRlby1pbmZvXCIpKTtcclxuY29uc3QgdXJsX21vZGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy91cmwtbW9kZXNcIikpO1xyXG5jb25zdCBpY29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFudGQvbGliL2ljb25cIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9wb3B1cC5sZXNzXCIpO1xyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSUQsIHNldEN1cnJlbnRUYWJJRF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmF2QWN0aXZlSW5kZXgsIHNldE5hdkl0ZW1BY3RpdmVJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbmF2SXRlbUFyciA9IFtcclxuICAgICAgICB7IG5hbWU6ICfpobXpnaLkv6Hmga8nLCBpZDogMCwgZGlzYWJsZTogZmFsc2UsIGljb246ICdpbmZvLWNpcmNsZScgfSxcclxuICAgICAgICB7IG5hbWU6ICfop4bpopHnm7jlhbMnLCBpZDogMSwgZGlzYWJsZTogZmFsc2UsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6LCD6K+V5qih5byPJywgaWQ6IDIsIGRpc2FibGU6IGZhbHNlLCBpY29uOiAnYnVnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+aVrOivt+acn+W+hScsIGlkOiAzLCBkaXNhYmxlOiB0cnVlLCBpY29uOiAnZWxsaXBzaXMnIH0sXHJcbiAgICBdO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGNvdW50LnRvU3RyaW5nKCkgfSk7XHJcbiAgICB9LCBbY291bnRdKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VVJMKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYklEKHRhYnNbMF0uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLyoqXHJcbiAgICAgKiAg5riy5p+T6YCJ6aG55Y2h5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkl0ZW0gPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmF2SXRlbUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdChzdHlsZXMubmF2SXRlbSwgbmF2QWN0aXZlSW5kZXggPT09IGl0ZW0uaWQgJiYgJ2FjdGl2ZScsIGl0ZW0uZGlzYWJsZSAmJiAnZGlzYWJsZScpLCBrZXk6IGl0ZW0uaWQsIG9uQ2xpY2s6ICgpID0+IHNldE5hdkl0ZW1BY3RpdmVJbmRleChpdGVtLmlkKSB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaWNvbl8xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2SWNvbiwgdHlwZTogaXRlbS5pY29uIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2SXRlbU5hbWUgfSwgaXRlbS5uYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbbmF2QWN0aXZlSW5kZXhdKTtcclxuICAgIGNvbnN0IHNob3dDb250ZW50ID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChuYXZBY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocGFnZV9pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh2aWRlb19pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh1cmxfbW9kZXNfMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwYWdlX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmF2QWN0aXZlSW5kZXhdKTtcclxuICAgIGNvbnNvbGUubG9nKHN0eWxlcyk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6ICdyb290JyB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucm9vdCB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm5hdkNvbnRhaW5lciB9LCBuYXZJdGVtKCkpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnNob3dDb250YWluZXIgfSwgc2hvd0NvbnRlbnQoKSkpKSk7XHJcbn07XHJcbnJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5TdHJpY3RNb2RlLCBudWxsLFxyXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIG51bGwpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5VcmxNb2RlID0ge1xyXG4gICAgbW9jazogJ19fTU9DS19fJyxcclxuICAgIHZjb25zb2xlOiAnX19WQ09OU09MRV9fJyxcclxuICAgIGRlYnVnZ2VyOiAnX19ERUJVR19fJ1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9