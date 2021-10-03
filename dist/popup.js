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
exports.push([module.i, ".index__header__36aMb {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-size: 26px;\n}\n.index__modeItem__vdKp3 {\n  width: 100px;\n  height: 50px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 50px;\n  background-color: #cccccc;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.index__modeContainer__1HHk6 {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 150px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n", ""]);

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
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "url / \u5F53\u524D\u9875\u9762\u5730\u5740"),
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
const styles = __webpack_require__(/*! ./index.less */ "./src/components/url-modes/index.less");
const UrlModes = () => {
    const [currentURL, setCurrentURL] = react_1.useState();
    const [currentTabIndex, setCurrentTabIndex] = react_1.useState();
    react_1.useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            console.log(tabs[0].url);
        });
    }, []);
    const modeItem = react_1.useCallback(() => {
        return Object.keys(url_mode_1.UrlMode).map(i => {
            return react_1.default.createElement("div", { className: styles.modeItem, onClick: () => changeMode(url_mode_1.UrlMode[i]) }, url_mode_1.UrlMode[i]);
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
                        newSearch = '?' + search.replace('&' + mode, '');
                    }
                    newUrl = link.origin + link.pathname + `${newSearch}`;
                }
                else { /*当前不存在mode*/
                    let newSearch = search + '&' + mode;
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                }
            }
            chrome.tabs.update(Number(currentTabId), { url: newUrl });
        });
    };
    return react_1.default.createElement("div", { className: styles.pageInfoRoot },
        react_1.default.createElement("div", { className: styles.header }, "\u8C03\u8BD5\u6A21\u5F0F"),
        react_1.default.createElement("div", { className: styles.modeContainer }, modeItem()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgubGVzcz81OWQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbWFnZXMvbG9hZGluZy5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzPzkzODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmxlc3M/MTFjMSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy91cmxfbW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsZ0NBQWdDLGdCQUFnQixzQkFBc0IsbUJBQW1CLEdBQUcsOEJBQThCLHVCQUF1QixpQkFBaUIsc0JBQXNCLHNCQUFzQiw4QkFBOEIsb0JBQW9CLHVCQUF1Qix5REFBeUQsOEJBQThCLEdBQUcsb0NBQW9DLHFCQUFxQixzQkFBc0IsdUJBQXVCLHFDQUFxQyxtQkFBbUIscUJBQXFCLG9CQUFvQixHQUFHLGdDQUFnQyxxQkFBcUIsa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsb0JBQW9CLHFDQUFxQyxpQkFBaUIsc0JBQXNCLGdCQUFnQix3QkFBd0Isc0JBQXNCLEdBQUc7O0FBRTM0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDZEEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUywwQkFBMEIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLDJCQUEyQixpQkFBaUIsaUJBQWlCLHVCQUF1QixvQkFBb0Isc0JBQXNCLDhCQUE4Qix1QkFBdUIsb0JBQW9CLEdBQUcsZ0NBQWdDLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLGtCQUFrQixtQkFBbUIscUJBQXFCLEdBQUc7O0FBRWxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNaQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLHNCQUFzQixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyw0QkFBNEIsbUJBQW1CLGlCQUFpQixlQUFlLG1CQUFtQiwyQkFBMkIsOEJBQThCLDJCQUEyQixxQkFBcUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsNkVBQTZFLDJCQUEyQixHQUFHLDRCQUE0QiwwQkFBMEIseUJBQXlCLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLGdCQUFnQixlQUFlLGlCQUFpQixzQkFBc0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLHVCQUF1QiwwSUFBMEksc0JBQXNCLG9CQUFvQixHQUFHLHNDQUFzQyxpQkFBaUIseUJBQXlCLG9CQUFvQixHQUFHLG9DQUFvQyxpQkFBaUIsR0FBRyx3QkFBd0Isa0JBQWtCLGVBQWUsR0FBRyw0QkFBNEIsb0JBQW9CLHFDQUFxQyxpQkFBaUIsc0JBQXNCLGdCQUFnQix3QkFBd0Isc0JBQXNCLEdBQUcsK0JBQStCLHVCQUF1QixpQkFBaUIsc0JBQXNCLHNCQUFzQiw4QkFBOEIsb0JBQW9CLHVCQUF1Qix5REFBeUQsOEJBQThCLEdBQUcscUNBQXFDLHFCQUFxQixzQkFBc0IsdUJBQXVCLHFDQUFxQyxtQkFBbUIscUJBQXFCLG9CQUFvQixHQUFHLGlDQUFpQyxxQkFBcUIsa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyw4QkFBOEIsdUJBQXVCLGlCQUFpQixpQkFBaUIsY0FBYyxlQUFlLHFDQUFxQyxpQkFBaUIsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QiwrQ0FBK0MsdUNBQXVDLEdBQUcsa0NBQWtDLHVCQUF1QixjQUFjLGFBQWEsZ0JBQWdCLGlCQUFpQixxQ0FBcUMsc0JBQXNCLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0IsWUFBWSx1QkFBdUIsZ0JBQWdCLG1CQUFtQixHQUFHOztBQUVqdUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDckJBLGFBQWEsbUJBQU8sQ0FBQyxpR0FBOEM7QUFDbkUsMkJBQTJCLG1CQUFPLENBQUMsNkZBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxTQUFTLGdCQUFnQixpQkFBaUIscUNBQXFDLG1CQUFPLENBQUMsNENBQWlCLFFBQVEsZ0NBQWdDLGlDQUFpQywyQkFBMkIsY0FBYyxlQUFlLG1CQUFtQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRywrQkFBK0IsZ0JBQWdCLGtCQUFrQixzQkFBc0IscUJBQXFCLHNDQUFzQyxHQUFHLDBCQUEwQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHNCQUFzQix3QkFBd0Isb0JBQW9CLHVCQUF1QixzQkFBc0IsR0FBRyw4QkFBOEIsdUJBQXVCLGNBQWMsYUFBYSxzQkFBc0IsdUJBQXVCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsa0NBQWtDLHlCQUF5QixHQUFHLGlDQUFpQyw4QkFBOEIsR0FBRyw0REFBNEQsbUJBQW1CLEdBQUcsbUhBQW1ILG1CQUFtQixHQUFHLDBCQUEwQix1QkFBdUIsY0FBYyxhQUFhLHFDQUFxQyxvQkFBb0IsR0FBRyw4QkFBOEIsdUJBQXVCLGdCQUFnQixjQUFjLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixtQkFBbUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLGVBQWUsbUJBQW1CLG1CQUFtQixvQ0FBb0MsbURBQW1ELGtCQUFrQixHQUFHOztBQUVoekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDaEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsMk9BQTRIOztBQUU5Sjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM1QyxlQUFlLG1CQUFPLENBQUMsMkRBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxpREFBaUQsaUNBQWlDO0FBQ2xGLDhDQUE4Qyw4QkFBOEI7QUFDNUUsOENBQThDLGdDQUFnQztBQUM5RSxrREFBa0Qsc0NBQXNDO0FBQ3hGLGtEQUFrRCxrQ0FBa0M7QUFDcEYsOENBQThDLGdDQUFnQztBQUM5RSxrREFBa0Qsc0NBQXNDO0FBQ3hGLGtEQUFrRCxrQ0FBa0M7QUFDcEYsOENBQThDLGdDQUFnQztBQUM5RSxrREFBa0Qsc0NBQXNDO0FBQ3hGLGtEQUFrRCxrQ0FBa0M7QUFDcEYsOENBQThDLGdDQUFnQztBQUM5RSxrREFBa0Qsc0NBQXNDO0FBQ3hGLGtEQUFrRCxrQ0FBa0M7QUFDcEYsOENBQThDLGdDQUFnQztBQUM5RSxrREFBa0Qsc0NBQXNDO0FBQ3hGLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsMk9BQTRIOztBQUU5Sjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBZ0I7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLDJEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCwrRUFBK0U7QUFDeEksU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLO0FBQ2hFO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsVUFBVTtBQUN4RTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLCtEQUErRCxVQUFVO0FBQ3pFO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRSxTQUFTO0FBQ1Q7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLDhDQUE4QywyQkFBMkI7QUFDekUsOENBQThDLGtDQUFrQztBQUNoRjtBQUNBOzs7Ozs7Ozs7Ozs7QUMvREEsaUNBQWlDLG8wVTs7Ozs7Ozs7Ozs7QUNBakMsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyw0T0FBNEg7O0FBRTlKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDZGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUMscUNBQXFDLG1CQUFPLENBQUMsc0RBQVk7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDREQUFjO0FBQ3JDO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsMERBQTBEO0FBQzFELDBEQUEwRDtBQUMxRCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlDQUFpQztBQUNuRixzREFBc0QsdUNBQXVDO0FBQzdGLHNEQUFzRCxtQ0FBbUM7QUFDekY7QUFDQTtBQUNBLGtEQUFrRCxpQ0FBaUM7QUFDbkYsc0RBQXNELHVDQUF1QztBQUM3RixzREFBc0QsbUNBQW1DO0FBQ3pGO0FBQ0E7QUFDQSxrREFBa0QsaUNBQWlDO0FBQ25GLHNEQUFzRCx1Q0FBdUM7QUFDN0Ysc0RBQXNELG1DQUFtQztBQUN6RjtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGLHlEQUF5RCxnQ0FBZ0M7QUFDekYsa0RBQWtELE1BQU0sbUJBQU8sQ0FBQyw0RUFBc0IsR0FBRztBQUN6RixrREFBa0QsZ0NBQWdDO0FBQ2xGLDhDQUE4Qyw4QkFBOEI7QUFDNUUsOENBQThDLDZCQUE2QjtBQUMzRSxvREFBb0QsK0ZBQStGO0FBQ25KLDhDQUE4Qyw2RkFBNkY7QUFDM0ksZ0RBQWdELDhGQUE4RjtBQUM5STtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVGQSxpQ0FBaUMsNHpKOzs7Ozs7Ozs7OztBQ0FqQyxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDBNQUFnSDs7QUFFbEo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNkYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM1QyxvQ0FBb0MsbUJBQU8sQ0FBQyxvREFBVztBQUN2RCxvQ0FBb0MsbUJBQU8sQ0FBQyxvRUFBd0I7QUFDcEUscUNBQXFDLG1CQUFPLENBQUMsc0VBQXlCO0FBQ3RFLG9DQUFvQyxtQkFBTyxDQUFDLG9FQUF3QjtBQUNwRSwrQkFBK0IsbUJBQU8sQ0FBQyw0REFBZTtBQUN0RCxxQ0FBcUMsbUJBQU8sQ0FBQyxzREFBWTtBQUN6RCxlQUFlLG1CQUFPLENBQUMsc0NBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyREFBMkQ7QUFDcEUsU0FBUyw0REFBNEQ7QUFDckUsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyx1REFBdUQ7QUFDaEU7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEUsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtMQUFrTDtBQUMzTywrREFBK0QsNkNBQTZDO0FBQzVHLHVEQUF1RCxnQ0FBZ0M7QUFDdkYsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsOENBQThDLHlCQUF5QjtBQUN2RSxrREFBa0QsaUNBQWlDO0FBQ25GLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BvcHVwLnRzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX3BhZ2VJbmZvUm9vdF9fMWllOEEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93X19kWnB1TCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvUm93SGVhZGVyX18yekcxdiB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5pbmRleF9fcGFnZVRpdGxlX18xUUFSQyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2VJbmZvUm9vdFwiOiBcImluZGV4X19wYWdlSW5mb1Jvb3RfXzFpZThBXCIsXG5cdFwicGFnZUluZm9Sb3dcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dfX2RacHVMXCIsXG5cdFwicGFnZUluZm9Sb3dIZWFkZXJcIjogXCJpbmRleF9fcGFnZUluZm9Sb3dIZWFkZXJfXzJ6RzF2XCIsXG5cdFwicGFnZUluZm9WYWx1ZVwiOiBcImluZGV4X19wYWdlSW5mb1ZhbHVlX19JUWs4SVwiLFxuXHRcInBhZ2VUaXRsZVwiOiBcImluZGV4X19wYWdlVGl0bGVfXzFRQVJDXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX2hlYWRlcl9fMzZhTWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLmluZGV4X19tb2RlSXRlbV9fdmRLcDMge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5kZXhfX21vZGVDb250YWluZXJfXzFISGs2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcImluZGV4X19oZWFkZXJfXzM2YU1iXCIsXG5cdFwibW9kZUl0ZW1cIjogXCJpbmRleF9fbW9kZUl0ZW1fX3ZkS3AzXCIsXG5cdFwibW9kZUNvbnRhaW5lclwiOiBcImluZGV4X19tb2RlQ29udGFpbmVyX18xSEhrNlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X192aWRlb0Zvcm1fXzJKbEJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcbi5pbmRleF9fZm9ybUl0ZW1fXzI1NFhGIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW5kZXhfX2Zvcm1JbnB1dF9fMmhsT0oge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogOTYlO1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNmVlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgb3V0bGluZS1jb2xvcjogIzRiNjJjNTtcXG59XFxuLmluZGV4X19mb3JtTGFiZWxfX2lwYldxIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDk2JTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTZlZTA7XFxuICBib3JkZXItY29sb3I6ICM0YTZlZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnUuZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5pbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnU6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuLmluZGV4X192aWRlb19fMndrMXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5pbmRleF9fcGFnZVRpdGxlX19DRXVDZyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbmRleF9fdmlkZW9JbmZvUm93X18zYmdtZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1Jvd0hlYWRlcl9fMThSaTcge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pbmRleF9fdmlkZW9JbmZvVmFsdWVfXzEtcmhmIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLmluZGV4X19sb2FkaW5nSWNvbl9fMUl6dWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMjAwO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYigwIDAgMCUpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2IoMCAwIDAlKTtcXG59XFxuLmluZGV4X19sb2FkaW5nSWNvbl9fMUl6dWwgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDYlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW5kZXhfX2xvYWRpbmdUaXBzX18zUjB5RiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE2JTtcXG4gIGxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWRlb0Zvcm1cIjogXCJpbmRleF9fdmlkZW9Gb3JtX18ySmxCeVwiLFxuXHRcImZvcm1JdGVtXCI6IFwiaW5kZXhfX2Zvcm1JdGVtX18yNTRYRlwiLFxuXHRcImZvcm1JbnB1dFwiOiBcImluZGV4X19mb3JtSW5wdXRfXzJobE9KXCIsXG5cdFwiZm9ybUxhYmVsXCI6IFwiaW5kZXhfX2Zvcm1MYWJlbF9faXBiV3FcIixcblx0XCJmb3JtU3VibWl0XCI6IFwiaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1XCIsXG5cdFwidmlkZW9cIjogXCJpbmRleF9fdmlkZW9fXzJ3azF0XCIsXG5cdFwicGFnZVRpdGxlXCI6IFwiaW5kZXhfX3BhZ2VUaXRsZV9fQ0V1Q2dcIixcblx0XCJ2aWRlb0luZm9Sb3dcIjogXCJpbmRleF9fdmlkZW9JbmZvUm93X18zYmdtZFwiLFxuXHRcInZpZGVvSW5mb1Jvd0hlYWRlclwiOiBcImluZGV4X192aWRlb0luZm9Sb3dIZWFkZXJfXzE4Umk3XCIsXG5cdFwidmlkZW9JbmZvVmFsdWVcIjogXCJpbmRleF9fdmlkZW9JbmZvVmFsdWVfXzEtcmhmXCIsXG5cdFwibG9hZGluZ0ljb25cIjogXCJpbmRleF9fbG9hZGluZ0ljb25fXzFJenVsXCIsXG5cdFwibG9hZGluZ1RpcHNcIjogXCJpbmRleF9fbG9hZGluZ1RpcHNfXzNSMHlGXCJcbn07IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWFnZXMvYmcucG5nXCIpKSArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMGUxMDFhO1xcbn1cXG4ucG9wdXBfX3Jvb3RfXzFkRnNnIHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5wb3B1cF9fbmF2Q29udGFpbmVyX19jUDN1byB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NjY2M7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ1JTtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5kaXNhYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmZhO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyB7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcsXFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJY29uX18zeWhFZCB7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLnBvcHVwX19uYXZJY29uX18zeWhFZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNWY1NjUxO1xcbn1cXG4ucG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8q5a6a5LmJ5rua5Yqo5p2h6auY5a695Y+K6IOM5pmvIOmrmOWuveWIhuWIq+WvueW6lOaoquerlua7muWKqOadoeeahOWwuuWvuCovXFxufVxcbi5wb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3I6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJwb3B1cF9fcm9vdF9fMWRGc2dcIixcblx0XCJuYXZDb250YWluZXJcIjogXCJwb3B1cF9fbmF2Q29udGFpbmVyX19jUDN1b1wiLFxuXHRcIm5hdkl0ZW1cIjogXCJwb3B1cF9fbmF2SXRlbV9fOXJzZVhcIixcblx0XCJuYXZJdGVtTmFtZVwiOiBcInBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjdcIixcblx0XCJuYXZJY29uXCI6IFwicG9wdXBfX25hdkljb25fXzN5aEVkXCIsXG5cdFwic2hvd0NvbnRhaW5lclwiOiBcInBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPclwiXG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBQYWdlSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50S2V5d29yZCwgc2V0Q3VycmVudEtleXdvcmRdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnREZXNjcmlwdGlvbiwgc2V0Q3VycmVudERlc2NyaXB0aW9uXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QXV0aG9yLCBzZXRDdXJyZW50QXV0aG9yXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGl0bGUsIHNldEN1cnJlbnRUaXRsZV0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGl0bGUodGFic1swXS50aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50S2V5d29yZCgoX2IgPSAoX2EgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iua2V5d29yZCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnREZXNjcmlwdGlvbigoX2QgPSAoX2MgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50QXV0aG9yKChfZiA9IChfZSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFnZUluZm8pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5hdXRob3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb290IH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlVGl0bGUgfSwgXCJcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NEZFMVxcdTYwNkZcXHVGRjFBXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcInVybCAvIFxcdTVGNTNcXHU1MjREXFx1OTg3NVxcdTk3NjJcXHU1NzMwXFx1NTc0MFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnRVUkwpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJ0aXRsZSAvIFxcdTY4MDdcXHU5ODk4XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudFRpdGxlKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwia2V5d29yZCAvIFxcdTUxNzNcXHU5NTJFXFx1NUI1N1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnRLZXl3b3JkKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiZGVzY3JpcHRpb24gLyBcXHU2M0NGXFx1OEZGMFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIGN1cnJlbnREZXNjcmlwdGlvbikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImF1dGhvciAvIFxcdTRGNUNcXHU4MDA1XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgY3VycmVudEF1dGhvcikpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oUGFnZUluZm8pO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgdXJsX21vZGVfMSA9IHJlcXVpcmUoXCIuLi8uLi91cmxfbW9kZVwiKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVXJsTW9kZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFVSTCwgc2V0Q3VycmVudFVSTF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRhYkluZGV4LCBzZXRDdXJyZW50VGFiSW5kZXhdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYnNbMF0udXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG1vZGVJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVybF9tb2RlXzEuVXJsTW9kZSkubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tb2RlSXRlbSwgb25DbGljazogKCkgPT4gY2hhbmdlTW9kZSh1cmxfbW9kZV8xLlVybE1vZGVbaV0pIH0sIHVybF9tb2RlXzEuVXJsTW9kZVtpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqIOWIh+aNoumhtemdouiwg+ivleaooeW8j1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGFuZ2VNb2RlID0gKG1vZGUpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFiSWQgPSBOdW1iZXIodGFic1swXS5pZCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXJsID0gU3RyaW5nKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgbGV0IG5ld1VybCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjdXJyZW50VXJsO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSAoX2EgPSBsaW5rLnNlYXJjaCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KFwiP1wiKVsxXTtcclxuICAgICAgICAgICAgaWYgKCFzZWFyY2ggLyrkuI3lrZjlnKhzZWFyY2jpg6jliIYqLykge1xyXG4gICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke21vZGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgLyrlrZjlnKhzZWFyY2gqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKG1vZGUpID4gLTEgLyrlvZPliY3lt7LlrZjlnKjpgInkuK3nmoRtb2Rl77yM5YiZ55u05o6l5Y676Zmk6L+Z5Liq5qih5byPKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKCc/JyArIG1vZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nICsgbW9kZSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoJyYnICsgbW9kZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSAnPycgKyBzZWFyY2gucmVwbGFjZSgnJicgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1VybCA9IGxpbmsub3JpZ2luICsgbGluay5wYXRobmFtZSArIGAke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlYXJjaCA9IHNlYXJjaCArICcmJyArIG1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShOdW1iZXIoY3VycmVudFRhYklkKSwgeyB1cmw6IG5ld1VybCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvb3QgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmhlYWRlciB9LCBcIlxcdThDMDNcXHU4QkQ1XFx1NkEyMVxcdTVGMEZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tb2RlQ29udGFpbmVyIH0sIG1vZGVJdGVtKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVXJsTW9kZXMpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoR0FBWUFNUUFBSnpXL05UdS9QVDYvTFR1L05UKy9MejYvTHppL09UKy9Lem0vT1QyL1B6Ky9NenUvTno2L0tUZS9OenkvUFQrL0x6eS9NVCsvTnorL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQlFBVEFDd0FBQUFBR0FBWUFBQUZuT0Fram1ScGprcXFybXlyVGdvTXgyb1F2T2s4MDdoaUFBQ0Q2MFVTT0FRd0lEQjJFdEVFamFqQUJ4U21IcnhkeWdGb0FCeXB3R0txZUVpd0s5a0VLajJWbVNUYStwaXJaKzNEZkV1V1dDU2FnRTRLQ0lRUE9uWXpFbmdDaEFob2VtZEVFMzBIZ1lCeWlKbDNlcHlTSWd3UWYyNEhjQ2d5RUFNUW1nY1JsWGdxQ1JBTUtnZXp0SHVYQlFXbGJqSjR0VDJIbloyV3hVNittOEtISVFBaCtRUUpCUUFYQUN3QUFBQUFHQUFZQUlTYzF2emM4dnkwOHZ6MCt2eTg1dnlzNHZ6Yyt2ekU4dnpzK3Z5azN2eWsydnk4K3Z5czZ2emsrdnpNL3Z5YzJ2ems5dnk4OHZ6OC92eXM1dnpNOHZ6cy92emsvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGbmVBbGptUnBqbEtxcm15clhoSU14Mm9Rdk9rODA3aEVBQUNDNjBXUzNFUUtvT0pVaEEwS2ljTEFCeFJLREFlRGpnVkplRzlHc09RZ2lMQmtsK2REZW1wRUdpWmFHakxsYmUzRC9GQ0dDRUNZZ0NJcEU0UjRoZ1k1S3hNTUUzb3FGblV4SWdnVUNJR0Fjb21HZHp1T2ppVU5CM0FuRWhXU1RURmtCNW96RlE0VmR5dWhEWThXSzZabm1Bc0xwMHlaUEtXMnJKcWVuNWZITXB2RGVDRUFJZmtFQ1FVQUdBQXNBQUFBQUJnQUdBQ0VsTkw4ek9yOHJPcjg3UGI4dE9iOHpQYjhwTjc4dlBiODVQYjgvUDc4bk5yOHhPcjg3UDc4elA3OHJPYjhuTkw4M1BMOHRPNzg3UHI4eE9iODFQYjhwT0w4eFA3ODVQNzgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJhTWdKbzVrYVk1SnFxNXNxMklKRE1jcWhMenBQTk40TWltS2lldEZTdHhFQnFCQk5BZ01URHlITlBVTEpnYUFCMkNRWXlFTUZRTTNZVXNGc29EQVNnWWpHQWl4RWtLN0xkRmd0eTZ2K2RRUC95MHlFaEFTSjRaRkNRUVJjRHA2TXhkK0NSRUNFWUFxa0VRWWd3eUhuWGVPb0R3N2xwWWxFZ1dGSjVrb01nVVJCYUVNRFp5UkthY01LZ3k0dVlHSENSWVdjYjR5amhLMG9yV2tRNTNNUmNUSTBJMGhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSlRTL016cS9PejIvS3ptL016Ky9LVGUvTnoyL1B6Ky9MejIvSnphL096Ky9MenUvSnpTL0xUdS9OVDYvT1QrL096Ni9MVHEvS3ppL09UMi9QVCsvSnpXL05UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV200Q1dPWkdtT1I2cXViS3RlQnd6SDZqUzk2VHpUK0JFa2lZRHJSVHBBWWhkSm9TQVJDUUlDRXk4aWlhUit3Y09FQVdEY2VDckJZQ3hJMmE3Y2loQW5PbEN0cG0xM1VxTEJ5cm44NFVuWEQvOHRNaFFHRkNlR1JSY0xFUXM4T25vUEZHQUhDdzJNZ0NtUVJCZURoWWVIZG5xT2pYNlhseVVVRGhDR0I1RlNNZzRJQktFcEZCYUZwQ2tRcVNvVUNpdVJMSjRIQkxLZU1xTXhDZ3Fpb3FXbXh0REh6TE9qSVFBaCtRUUpCUUFYQUN3QUFBQUFHQUFZQUlTYzF2elUrdnkwN3Z6czl2eTgrdnk4NnZ6RTh2eXM1dnprOXZ6OC92eTg3dnowL3Z6RTl2eTA0dnlrM3Z6VS92eTA4dnowK3Z6TS92ek02dnpNN3Z6ayt2eTA1dnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcXVBbGptUnBqa21xcm15clhna014K3FBdk9rODAzaENPUTZLNjBWS1JHS1hCckFoR2t3R0psN2hvRWo5Z29rQllEdklzU0tIOERGN1MweTJnTWxLQmxOUWtTVHRGbEdpd2NhOEdXSkM5dzcvTGpJSk55ZDFoQ2dYQmdJR2VYNHdCaEFNUENtS1ZZQUpEQXFTT1NJTENBdUZSUlZ3Z2pxT3A1T1hseVVMQVJHRkNRdWtJbllCREErb0N3K2dmaXV0c2lrTHdNRXRvU0lTRXNhMGdubkNwbzJxcXNyVHk5RFAxd2toQUNINUJBa0ZBQlVBTEFBQUFBQVlBQmdBaEpUUy9OVHUvS3pxL096Mi9MVGUvS1RpL05UKy9MejYvSnphL0x6cS9QeisvSnpTL016Mi9QVCsvTlR5L0xUeS9PejYvTHptL056Ky9NVHUvSnpXL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdvWUNXT1pHbU9TcXF1Ykt0V0NnekhLZ1M5NlR6VHVCSVVCSWZyUlNKR0NvV0lhQkFZbUhnVHdTVGxRQW9IRkFwaWtHc0p2cW9HMTVlbEJGWXlXSFJxR2lBUUZHZFJ4dEtsbU03dWNPK2ljMDlGQkFzRU1TSXhEQThNUEhZeEFRQUFDd0U3Q29pS2ZBRUxqMmVGTUgrQWhvS0VLSFNMZXBNOGZLazVKQTBTbkNVS0RhK0dNaElIcnFXeEVnMk1MTHRoc21FdG55SUdFc1MwdVJVTnZLWjZxcW5JMHNtTTFjNGhBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016eS9PejYvS3pxL05UNi9Lem0vUHorL0x6Mi9LVGEvTnoyL1BUNi9PVCsvSnphL05UMi9NVHUvTnorL0p6Vy9OVHUvT3orL0xUcS9OVCsvTFRpL01UKy9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3JJQ2FPWkdtT1JxcXViS3RpQmd6SEthWW9jMTYvNjV3VWhZVHJSU0k2Z0JPUklvSXIwUXlOUVNEMUN4b1VDQWhDc0dNTkpoT1ZnbXVJTUJDTVNDOEdheFNtSmdYakxIREtadDNaRXRjZCtsc3lWMnduSWdZVkVCV0RNUTBIY0hrMUVRQ1NFWGhRQndSL1pSQUFFR3FLRW9PRWhnQVZUWUU2VDZnOG1TNEtMRTRMb1VVMWRqRUxCN0dwS1JjVUY2b3JEeXNYTE1PdmhDSVBGTWNvZ2FuRHFMK3Nmc3ZVUmMzUWp6UWhBQ0g1QkFrRkFCUUFMQUFBQUFBWUFCZ0FoSnpXL05UdS9QVDYvTFR1L05UKy9MemkvS3ptL09UMi9NVCsvT1QrL0tUZS9OVDIvUHorL016dS9OejYvSnphL056eS9QVCsvTHoyL056Ky9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2dJQ1dPWkdtT1RLcXViS3RTREF6SEtTek1lUDJ1ODJFWUI5ZXJGQk0xZmcyUkFISWp5aHlEUmNvSFpBZ1VXSUdPTmVpcUlwRVU1UEZRUUhoRlNtQVFPRjJ6emlKdFBsc2Vjc0s4UzJaTm4yQUZBQVZwTVE0U0RuUmJhZ0NNYlN1R0JIb01BWXdBQVRVaURHRi9LSUVGVFh4NG9pd3prcVpFQ1g0a21xcWhDUWlwaVpvVEVYZ3NzVjhyWWFTY0ZCTVR2Wmw4aWJXS1c2YVN3Y3JDc3FPSklRQWgrUVFKQlFBWUFDd0FBQUFBR0FBWUFJU2MxdnpjOHZ5MDd2ejArdnk4NXZ5czR2emMrdnk4K3Z6RTl2enMrdnlrM3Z5azJ2eTg4dnlzNnZ6ayt2eWMydnprOXZ5MDh2ejgvdnlzNXZ6TS92ek04dnpzL3Z6ay92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRm9DQW1qbVJwamxLcXJteXJZaElNeCtsczEzaWVKOU9VdUsrVHFESnBWRVFTeU1CRXd4Z1lnVlNDNEpNTUNvdkNRS2RpQ0JpcWJRcnlVQ2lpcjVnSXdqQ2NyZ3B0cVNuTHpRYktHM0R2cXRlRVNBUUxCR295RGdjT05JbzJBUUNPQVRNcEJnY0dmQktOajMrUmdJR0RoVTEyb1l1V3BKcElGb1VsRUFnUVRESVdGS2lqRWdnUkNIb3NzaTRCQ0pVcm5FNFh3SFY2eGFLbGZNUEtvTFBHTkNFQUlma0VDUVVBR2dBc0FBQUFBQmdBR0FDRWxOTDh6T3I4ck9yODdQYjh0T2I4MVBiOHZQcjhwTjc4eE9yODVQYjh0UEw4L1A3OG5Ocjh0T3I4N1A3OHJPYjg1UDc4bk5MODNQTDg3UHI4eE9iOHpQNzhwT0w4eFBMODVQcjh0Tzc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQmFhZ0pvNWthWTVMcXE1c3Eyb0xETWZwYk5kNG5rOU5NN212azBnaXlCUkVpMEdzUk5OZ0xwaVVvL2RiUEE2RVYrdWl1TGdHQjRzbHNaS0pucGlUMVpKbG1tbncyWUo4QTlwZHNxQVFSamxRbGpJWUJnNXhPUm9TRElrSmNnc09CaEIzQzRpSkVqVklsbnNMZlg4b2VZV2ZkWkVyQXdGS1pTUjZKQU1BckFOdU1RNFZoSVVCQUJFQUFUb3JzeTJydDZhWVFoQVFJd21sSmsyR3lwK2lrWHZQeUo1MTB6Z2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016cS9MVHEvT3oyL0tUZS9NejIvTHoyL1B6Ky9OejIvSnphL096Ky9Lem0vSnpTL0x6dS9LemUvT1QrL0xUdS9PejYvTlQrL01UKy9PVDIvUFQrL0p6Vy9LemkvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2xJQ2FPWkdtT1I2cXViS3RpQnd6SDZXelhlSjVYVFZPNXI1TUlJUkFnUklkQnJFVERSQXFSRk0rWEVsd0VyMWJCVUhBTkxvdEZORHQ2UGs0SEFRSExsTWx5czBQMEJxeTczRXNoTXVBSTVHTUtFd28waERZVUNRUUpGSEVIZ1lOMmg0a1VOU2g2S0h4K2xZVnduSVIyTEFNQlNpdE1QeWNEQUF3QUEyMHhGUktQTndHcEFINmVLNDh0QTZvV281UjZEMmNpRktJbVRYQ21uWXlmZHBiT0pNZWIwamNoQUNINUJBa0ZBQllBTEFBQUFBQVlBQmdBaEp6Vy9OVDYvTFR1L096Mi9NeisvTVR5L016cS9QeisvS3ptL09UMi9MejIvT3orL0x6dS9NVDIvS1RlL05UKy9MVHkvUFQ2L016dS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdvb0NXT1pHbU9SNnF1Ykt0YUJ3ekg2V3pYZUs0WFJlUytKMUZDSUtDSURqNFR6VkloK0E0VlhpWEZRREJlcllDQzRJb2d2ay9jS09JOEhhclgwbEtXbXlGcDhKKzhKYXNIajRhSkpIWmtFaFp3TnpFRERvVUpiZ2NMZjNNSENZVU9DVFVvZHlnU2VueHNncHB0akMwREJnTXNhbE1uQXdDbkEyb3lGUTlUZ1FjR3B3QUdPaXV1S1EwTkthYW5rVUJCRkJBS2h4WUpCc1FrU3pzRldLK2RuWlRSeVd6T216UWhBQ0g1QkFrRkFCVUFMQUFBQUFBWUFCZ0FoSlRTL05UdS9LenEvT3oyL0xUZS9NeisvS1RpL0x6Ni9QeisvSnphL016Mi9NVHUvUFQrL0x6bS9OVDYvSnpXL05UeS9MVHkvT3o2L0t6bS9OVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2xZQ1dPWkdtT1NLcXViS3RXQ0F6SDZXelhlSzRyaXJ1ZUkwa2tNaEM5U3JRS3c4RlE4VlNMeWVMVmNod2N2c2xFd0pLSmxqRVRJanBGZW1ub0dSWHRhN2U4UUdTZ0FRbkxHSVhtTFMyWkdDWkZLM2hOYmdNR2h4STFjU2NJYzNVb01qbDdrMjR1QXdFRFhTUUllaVlERDZCRm0zY1VoSTBCS1FFUENRbW9iSUlxQkFBUEJBZ0RDYUUvUUFnUEFMTXhsNktqYVNrRXZiWEVyejRCcm0yTHo4T1V5VGNoQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvS3pxL096Ni9NVHEvTlQ2L0t6bS9QeisvTHoyL1BUNi9LVGEvTlQyL016eS9OeisvSnphL0xUcS9PeisvTVR1L05UKy9MVGkvTHo2L1BUKy9OejIvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdpNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2V3pYZUs0dmhidWVvd0VDTVJDOVNyUkxwVkZSTFJncXhnT3FVelVvRGQ5RDhHREpqTm5UUVFwRmZtbm8yYXZxYS85aXdKT0ZZQ0hGS3BMbUxaMHcrQk5xQjB0TmJuMStBelZ4UUhOMUtESTVlNUZ1TGdrQkNWNTJlaVlKRGc0S1JYWXlneW9CQVNrQm5nNm1hQ3lFQnhNQUFCTUhDUUNlaUVkaXNiR0FsYUNoYVNtd0FBcVFiQzJWbG02S3pNQ1N3Y0VoQUNINUJBa0ZBQlFBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHppL0t6bS9PVDIvTVQrL09UKy9LVGUvTlQyL1B6Ky9NenUvTno2L0p6YS9OenkvUFQrL0x6Mi9OeisvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdjSUNXT1pHbU9US3F1Ykt0U0RBekg2V3pYZUs0N2pydWVvNGhFRWtHZGFMREppcWR5REFJM1ZnS2hkQTJ1TEptSTBRTUduaWFrTEJlTitzNHRMZEIwYUJ4SXNjZ2tRcXZmRFBnaWE0NW1DUEFHZERGclFHMXZSblpraW5WOUt3SVFBbGx3ZENjQ0NnOEtBaVZJY29JTUFRRXBFQXFYRURvcm5nVUFBQVYrbDVrL1FBeXJxekdQbXB0amRhcXNpek5vRFFHUlo0VEZjTHBsdmd3aEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKelcvTnp5L0xUdS9QVDYvTHptL0t6aS9OejYvTHo2L01UMi9PejYvS1RlL09UNi9LVGEvTHp5L0t6cS9KemEvT1QyL0xUeS9QeisvS3ptL056Ky9NVCsvTXp5L09UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXaklDYU9aR21PVXFxdWJLdGlFZ3pINld6WGVLNHZsTHVlcU1NaEJoVFJZSmZWd3FBeU5BSTMxcVdTZERVRURaYk1tQ0NhQWcyRDZTakxSYU8rZEd0YkxDVUNFQkt0UjZ2ZkpoTkhQVFdnRE5RcGVSTXZiU2NKRmdseVpYWm1qWUFzQXhCL1B5UUxEWEVtQXdVTUJRTWxSdzBOUXlrQkFTa1FDcW1tZXlxV0VDa0VBQUFFRXBvUG5aUkFETElNSXBHZW40c3pzUSswakt3K3BZQ0Z6RWJDam1jU0lRQWgrUVFKQlFBWkFDd0FBQUFBR0FBWUFJU1UwdnpNNnZ5czZ2enM5dnkwNXZ6VTl2eWszdnk4K3Z6RTZ2ems5dno4L3Z5YzJ2eTA4dnpzL3Z5czV2emsvdnljMHZ6Yzh2eTA3dnpzK3Z6RTV2ek0vdnlrNHZ6RTh2emsrdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnAyQW1qbVJwamtxcXJteXJaZ29NeCtsczEzaXVZNCs3bnFqRElRWVUwV0NOVmFPWHdsd3dOMWFqa25SZEdCZVd6SmdFT3FHbG95d1hqZnJPclcyeE5JbE1TRFJtR1VjUVNHZ3JKbG9oa1JCZWF5ZHREWEJqZUhPSExRTUJBMmVOV2lNSkFKTURKZ29PQmc1RUtEQUJFQUFRQVNrUkVTa0pCaFlXQ1RvcEE2QUFqUlFMQ3hRcEJCWi9QeVNMQ1NJR0Jnc0dScXVXaGpPeXRHU3NQaEdyYUlIUVJzYktpVFFoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenEvTFRxL096Mi9LVGUvTXoyL0x6Mi9QeisvTnoyL0p6YS9PeisvS3ptL0p6Uy9MenUvS3plL09UKy9MVHUvT3o2L016Ky9NVCsvT1QyL1BUKy9KelcvS3ppL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsSUNhT1pHbU9SNnF1Ykt0aUJ3ekg2V3pYZUo1aml1S3VKOVJrRWd1S2FEQmZyVGVMRkNJM1ZrVlMrUlVNQlpiczZBczZIeWFrYkVlbS9jNnVyYkZVUVZSSXRFYzFlbXNJR21hVkhKMXFRUEExYXlkdGJ5aGpablJsS3dNQkEyZU9XaU1EQUF3QUEyRUNGd0pGaGdjQkFCWUFBU2tVRkNrREJBc1hFVHFubFF5bUFRa0Vvd2NDQzV0QUpCU05JZzRKQ1E1SHJHR0hNN0swWlROb3BYeUN6MGZHeW1RaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9MenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTXpxL0xUaS9PVDYvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXcjRDV09aR21PUjZxdWJLdGVCd3pINld6WGVKNWYxdUt1SnhTQkVBdUthRERMYTdHWVdRSk5uY3BDVUxvQ2lnQkxkbFFHRncyTENTbmJtV20vdEt0Y0tSb3ZrWVJiVm9BMDBEZGFRVkJBcHhvS2ZXb0hlNEp1QjIxdkloRVZZaWhsZUdkNUt3TVRBMmtSTFNRREFKMERZd1lJQm5ObEU1MEFFeWtEY2djUkNLOVdNeXFjblhJU0RnNFNLUXdJREZza0NSTUpJaFM0RkVlWlk1QXpFN2k2a1g1cHE0T0sxVWZMa21ZaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKVFMvTlR1L0t6cS9PejIvTFRlL016Ky9LVGkvSnphL0x6Ni9QeisvT1Q2L0p6Uy9NejIvTVR1L1BUKy9Mem0vTlQ2L05UeS9MVHkvT3o2L0t6bS9KelcvTlQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXcDRDV09aR21PU2FxdWJLdGVDUXpINld6WGVKNWZqdU91SjFLaEVDVFJZTDVhYithQU9HNHNoeVhaVWlBZ0xKa280UXMybjZXamJFZW0vYzZ1R1dGQmlCVmhBL2MyQUZnQUF0QWJROEl3SndKMmQyZ0plMzAxTUd0dGJ6QUtjbU12WlhrdEF3RnhnMEFqQXhXYkF5WUpEUlFOam1NQkZRY1ZBU2tURXlvVXJra3pLcHFuY1JFVUJxbWZBcUtZbVpVaUR3WUdEMXVIUm84ekVRWVV1WktEQTVabmk5TmJ5SkZrSVFBaCtRUUpCUUFXQUN3QUFBQUFHQUFZQUlTVTB2ek04dnlzNnZ6cyt2eXM1dnpVK3Z5ODl2ejgvdnlrMnZ6MCt2eWMydnpjOXZ6RTZ2emMvdnljMXZ6VTd2eTA4dnpzL3Z5MDR2elUvdnk4K3Z6MC92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcWFBbGptUnBqa2Vxcm15cldnY014K2xzMTNpZVcxWGxyaWZTcEJFazBXQytXbTlXYVZSdXJHYXl0YUEwV0RMUndSYzhYRTFIMlc1TSs1bGRNNGxERWl2Q0VtM3RBK0FBUEtDM0FxUlFQc3pyRDJjSGVudzFNR29TQ1c1dmNXSUhjSGhrTXlzSkQzQ0NRQ01KQ0FvSUEyQVBBb0VsTkE4T0NnNmpDWW9wQWdJUUx5eWJuUU1IQ3dRRUN5bWhBVmdrQTVZaURMZ01Xb1pHampPM3VaS1lBN1ZuaTlKYXljMWxNQ0VBSWZrRUNRVUFGQUFzQUFBQUFCZ0FHQUNFbk5iODFPNzg5UHI4dE83ODFQNzh2T0w4ck9iODVQYjh4UDc4NVA3OHBONzgxUGI4L1A3OHpPNzgzUHI4bk5yODNQTDg5UDc4dlBiODNQNzgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYU1nSlk1a2FZNU1xcTVzcTFJTURNZnBiTmQ0bnNPUnU1Nmt5UVJJb3ZGZXZSbGpRbXV1SXBPZUs0RmcvbUlpUnZMRWNHQ0xNdGx1N1BTWldiTUNvUEFGTWdSdFJnQkFEOXlhTUlmRXE1elh6MTBTQkM4d2FnVUNSRmx3WUZkNFpFb3FBaEJ3Z0Q4akFnb0FDb2dtRUFNUUpqUVFEd29QRURGSktRT3JMeXlZQ3BzTUJ3WUdCeWtCQXd0b0pKS2NEYlFOS0Z4aVRiTzFqNVVDVW1hSnpZeDMwR01oQUNINUJBa0ZBQmtBTEFBQUFBQVlBQmdBaEp6Vy9OenkvTFR1L1BUNi9Mem0vTno2L0t6aS9MejYvTVQyL096Ni9LVGUvT1Q2L0tUYS9PVDIvTHp5L0t6cS9KemEvTnoyL0xUeS9QeisvTnorL0t6bS9NVCsvTXp5L09UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdnWUNhT1pHbU9VNnF1Ykt0bUV3ekg2V3pYZUo3RGc3dWVKQW9GU0tKbEZvY0diakNiWUdqUWxVUGk4Q1VzejE5TTFFQXNnTTV0VVNiYm1hTytOR3RHWUJERTRCb3FBS2dIYmxBWXNoQ2wyOVVUQlFjTEx6QnRiMFFpaFlwbGVXZDRLd01OUFlBL0l3TUdEQVpNSmcwT0VTWTBEUXFrRVk0VERnSU9rQ21ZcENrSkZRSUpLUUdmYXlTU25CY1ZGUmVKWlhpeEZiU25UWlZxd01xTXhvODRJUUFoK1FRSkJRQVpBQ3dBQUFBQUdBQVlBSVNVMHZ6TTZ2eXM2dnpzOXZ5MDV2elU5dnlrM3Z5OCt2ekU2dnprOXZ6OC92eWMydnkwOHZ6cy92eXM1dnprL3Z5YzB2emM4dnkwN3Z6cyt2ekU1dnpNL3Z5azR2ekU4dnprK3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZvMkFtam1ScGprcXFybXlyWmdvTXgrbHMxM2lleis1YURvSEI2UEU0bFdnREFBQ1NvRGtWRFNjdkZWZ0NBcTVHNWNHU1paSkxvVW5CSGN1QVRlbE8xMnQzVXhRREpXWVV2VkNKaFQ1eVUwOE9aU29SZWd0cGJSZ0hVVFV3Y1hOMWRvdDJNbXRxbFN5R2JqNG9EZ1lFZENVSkZ3bG1DZ2tHbkUxOUZ3d1hmU3NFblNrVEVwNHBHQmNZWFNTbGRBVUVBZ1dQazMyekVoT1VVNWx1d3N5U2xYM1FDaUVBSWZrRUNRVUFGd0FzQUFBQUFCZ0FHQUNFbE5MOHpPcjh0T3I4N1BiOHBONzh6UGI4dlBiOC9QNzgzUGI4N1A3OHJPYjhuTkw4dk83OHJONzg1UDc4dE83ODdQcjh6UDc4eFA3ODVQYjg5UDc4bk5iOHJPTDgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYWJnSlk1a2FZNUhxcTVzcTE0SERNZnBiTmQ0bnMvdVdnNkJ3Y2poT0pWb0E4QUNNSWhSYUtrRWxKY0tMQ3NCRnlVaTljVXV5UXJ6ZEpDYWFPREFaTWVHOXQ2dFdhQ1JOWksrcUFtaFFwamNwbVVTWmlvVGZBUUljQWNRRWc0dk1BRVdkWFlpZUpReWJYOS9MRTJKTEhjQ0ZnS1ZJd01GRUdjd0F4WUtCQkNBQndVUEJab3FBZ3FpQnhRTURFK0twcDUzVFNJSUFnOElrNWQvdXJ5WW5jN0kwSmF2bVd3aEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9MenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTXpxL0xUaS9PVDYvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbTRDV09aR21PUjZxdWJLdGVCd3pINld6WGVLNFhqYnVXZzhsQVZGRkFLaWNTYlFCb0RnNlJSbUZsb1ZsVmt5Wmc0cklRcXIvWWhkbE1uQTVWRSsyU21DUnlOK3ZNUjIvTkpCUnVVbGs2REJ5QVpuQTRYZ3RYQ1lBT2IzVUxCSVkxTUhnU1luc3lmSEtEbUZjckVYVXVTZ1lJQnBRa0VRRVJhakFSQ0t5ZGNRRUtCSEVyREFnTUtnVUZZQU1Cank5S3Jtd0NBbWFWYXprV3VXQnhjNTZlbGRDWHpKazNJUUFoK1FRSkJRQVdBQ3dBQUFBQUdBQVlBSVNVMHZ6VTd2eXM2dnpzOXZ5MDN2ek0vdnlrNHZ5OCt2eWMydnk4NnZ6OC92eWMwdnpNOXZ6MC92elUrdnpVOHZ5MDh2enMrdnlzNXZ6RTd2eWMxdnpVL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZwNkFsam1ScGprcXFybXlyV2dvTXgyb1F2T2s4MDdoQ0FBQ0M2MFVhQkFhd3hRS3dpSjFFdEFHQ1FobjRtTUpVZzdkTEJhaUltOEttYWxTMks1bEZTa0VnVFlvdFhHYTBjbk40M25EZm1nVVNOMCtDTUEwR0JBWVJPbm1FQlhJcUF3YVJFWHh4alVRS0R3a1BUb056ZDUrS2VwU1VKQW9URWhPY0pBME9EWjRLRXJHT1BBNE1EcUVycDZrcERBeGxyU3dsUkJFUUVHK0NOTGk5UGJpamZKM1FVREtMMUhjaEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXp5L0t6cS9PejYvTlQ2L0t6bS9MejYvTVRxL1B6Ky9LVGEvTnoyL1BUNi9KemEvTlQyL0xUeS9OeisvSnpXL05UdS9MVHEvT3orL05UKy9MVGkvTVR1L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbUlDYU9aR21PU0txdWJLdGlDQXpIYWhTOTZUelRPRklCa0lyclJWcEVGakFJQUJnN2lXaURCQ014OENtRnFRdHZsNG93dmpmak1mdlFybVNZaFRTQk5DRzBidGtnVXQzbTdyeWh2aVZUSEJST2dVOExCWVZJZURwdkZIQXFoSVYxZWhlTFJCaCtnSUpPTklsMm5GeDdueVFJQVJJQlRTVUlDaGR4S1JJQ0VvZ3BDZ1lQbXlzQkFxVXBEUVFyWlN5bk9SZ1REZzV0Z1pwNENMczl0WitnbU5BeW5iQjJJUUE3XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgY2xhc3NuYW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVmlkZW9JbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSByZWFjdF8xLnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZpZGVvU2l6ZSwgc2V0VmlkZW9TaXplXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIOmAmui/hyBYSFIg55qE5ZON5bqU5aS055qEIGNvbnRlbnQtbGVuZ3RoIOiOt+WPluOAgiDljZXkvY06IGtiXHJcbiAgICBjb25zdCBbdmlkZW9SYXRlLCBzZXRWaWRlb1JhdGVdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTsgLy8g6YCa6L+HIHZpZGVv57uE5Lu2IOiOt+WPluinhumikeeahOmVv+W6puOAgiDljZXkvY06IOenklxyXG4gICAgY29uc3QgW3ZpZGVvVGltZSwgc2V0VmlkZW9UaW1lXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIHZpZGVvIOaXtumXtFxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gcmVhY3RfMS51c2VTdGF0ZShmYWxzZSk7IC8vIOivt+axgueKtuaAgVxyXG4gICAgY29uc3QgaXNWaWRlbyA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIC9cXC4obXA0fGF2aXx3bXZ8bXBnfG1wZWd8bW92fHJtfHJhbXxzd2Z8Zmx2KS8udGVzdChwYXRoKTtcclxuICAgIH07XHJcbiAgICBsZXQgdmlkZW9FbCA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZ2V0VmlkZW9VcmwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1ZpZGVvKHZpZGVvVXJsKSB8fCBsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdmlkZW9VcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmICh4aHIucmVhZHlTdGF0ZSA9PT0gMyB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gNCkpIHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IChfYSA9IHRoaXMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlck1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtTdHJpbmcoaGVhZGVyKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9TaXplKGhlYWRlck1hcFsnY29udGVudC1sZW5ndGgnXSk7XHJcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmN1cnJlbnQgJiYgdmlkZW9FbC5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvRHVyYXRpb24gPSBnZXRWaWRlb0R1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWaWRlb1RpbWUoTnVtYmVyKHZpZGVvRHVyYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRHVyYXRpb24gJiYgc2V0VmlkZW9SYXRlKE1hdGguZmxvb3IoaGVhZGVyTWFwWydjb250ZW50LWxlbmd0aCddIC8gMTAwMCAqIDggLyB2aWRlb0R1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bop4bpopHml7bplb9cclxuICAgICAqL1xyXG4gICAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdmlkZW9FbC5jdXJyZW50ICYmIHZpZGVvRWwuY3VycmVudC5kdXJhdGlvbjtcclxuICAgIH07XHJcbiAgICBjb25zdCB2aWRlb0luZm9Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW9EdXJhdGlvbiAvIFxcdTg5QzZcXHU5ODkxXFx1NjVGNlxcdTk1RjRcXHU5NTdGXFx1NUVBNlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHZpZGVvVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgc1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvIERhdGEgUmF0ZSAvIFxcdTg5QzZcXHU5ODkxXFx1NzgwMVxcdTczODdcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9SYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIGticHNcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlbyBTaXplIC8gXFx1ODlDNlxcdTk4OTFcXHU2NTg3XFx1NEVGNlxcdTU5MjdcXHU1QzBGXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvU2l6ZSAvIDEwMDAgKiA4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2JcIikpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9Gb3JtIH0sXHJcbiAgICAgICAgbG9hZGluZyAmJiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmxvYWRpbmdJY29uIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZXMvbG9hZGluZy5naWZcIikgfSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGluZ1RpcHMgfSwgXCJcXHU2QjYzXFx1NTcyOFxcdTUyQUFcXHU1MjlCXFx1ODNCN1xcdTUzRDZcXHU0RTJELi4uXCIpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VUaXRsZSB9LCBcIlxcdTY3RTVcXHU3NzBCXFx1N0VCRlxcdTRFMEFcXHU4OUM2XFx1OTg5MVxcdTc2RjhcXHU1MTczXFx1NEZFMVxcdTYwNkZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5mb3JtSXRlbSB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZm9ybUlucHV0LCBvbkNoYW5nZTogZ2V0VmlkZW9VcmwsIHZhbHVlOiB2aWRlb1VybCwgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXop4bpopHnmoTlnLDlnYAnIH0pKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoc3R5bGVzLmZvcm1TdWJtaXQsIGxvYWRpbmcgJiYgJ2Rpc2FibGVkJyksIG9uQ2xpY2s6IHN1Ym1pdCB9LCBcIlxcdTgzQjdcXHU1M0Q2XFx1NzZGOFxcdTUxNzNcXHU0RkUxXFx1NjA2RlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW8sIHJlZjogdmlkZW9FbCwgc3JjOiB2aWRlb1VybCwgbXV0ZWQ6IHRydWUsIGNyb3NzT3JpZ2luOiBcImFub255bW91c1wiIH0pLFxyXG4gICAgICAgIHZpZGVvVXJsICYmIHZpZGVvUmF0ZSAhPT0gMCAmJiB2aWRlb1NpemUgIT09IDAgJiYgdmlkZW9JbmZvQ29udGFpbmVyKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVmlkZW9JbmZvKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS3dBQUFEUUNBTUFBQUN0RDNwUUFBQUFQRkJNVkVWSGNFeVAyT09VMmQrTjI5dWYxZXg5NHN0OTRzeC80TTZ5eWYrenl2K0gzZFd6eVArTDI5bU8ydHV6eWYrVzFlV3h5ZjZ4eWY2d3lmNnZ5UDRpQmlIVUFBQUFGSFJTVGxNQUJnMFdIU2M1VFVnNVpsdUZvU3V4Y29pYXJCVldPd3dBQUEzRlNVUkJWSGhlN0pYUkNzTXdDRVduNmY5Lzh4QWJEc0ZJMllOcEJyblh4ZTd0Y0dQdzgyYzZPam82T2pvUzgvYUU3dTBsNDdmc0cyZGsyekJobVlBTC9EcytJT25GLzYxb29RUU5lOXRxUW9XWVNkUHR4MTdqQ3J0RXZ3YzdKdXFrbk5EZUpWdk1BY0R3M2pGUzFrd3Zaa29UT2lsMlRrZU5zTytSOSs2R3p6N1FpNWtDQ3FFYjNGSHZoZ295bEpsVVpDV1pkOWhnSEo3OWxGT3RyUTR6RUQ5a3FyMnNMMXVpckNsUWlUTGw5R2JXNWNtR0Rab0N3K20ydGl4VklyWEs1N1B6Z2FnZFYxZVBMSG1hODZ2SGF1VXFoaU5hSmdETzlPWXhxT3VTWloweUFrK0pScFdQcTFQaWJEM0ZXNCs4aS9aVXRxUGd4RjR6MWQ0N1IwZzF2UHljVVp0WFc3RVEwbFQxUHZRWjFhekZPMHZTVkhYWVRaSlQ0bGIrd0FSUDloT2tFbEZoMVdhc3JSQVQxb200L1VBS0k1d21MVXcyejFYZEhMUFg1RFpHLzVucXJwOWNBMmxZVC9IcUZVcFVuMnNjVnBLZG9EcHBSRFhWUVA2TTJyd2NGOHhSVjJXc2NWYVR4ZC84Y0ZUckU5QjJYYTJlOHdPcWZHazNveDI1YlJpS3RpdExrM1N6emYvL2JiVmlpQU5kMGdOWUJTbFA5dlhnaExxaUJ5T2N4ajVsUDJsTnpMNytLVUJWNEdnMVQ5TjJaM1IrSnZHc3luRlF5NjJDMi9qZkJ6VVl2WHJyMS9jcURBS0F5ZFZVYW9wcW9PdnZmR3hWbnJFb1JXdkF6VW0vZlM3TzNseHJMeklMcStZVmRTLzFXcWltODFxc2h0cDdDYWk4WHlzcDV6Nms0dlJQTGJNVDB6NjlMZ3prZUJXdm9FcWZ1bFFqblI5N1Z0V2tnWXdEVVd1R2l0UGVhRlVETFlMVmZJMEhRZDRBMXFpd3dsa0h5MVRJV2FDa2ltcVF6U0VkVkdsSHIwb0RyNTIxMlVkUWJWbXJJbFc4anJtS3ZPWXhzRER6OU8rUStwNFMwajVHZ1ZmQmhaWVdDS0Y2T1dtTzJzZGFsYWdxbG5FRjB1YVlWL3pmQjNXeGpsRUdDNjlrbHZScWh6WmpIYjVHQVN6blFhSlZXV2R0NTJtMnFSeTEzS3g2TlZSWUc2R2FXOTFRQzJEVkxKbWx5ZnB1L3p1bFBWN1ZHeXp2MTdpeGNxdDk0TFdvWnptODhHcWdvRm94VTBXclhiUyt4cXZHcklwMXI3RDZ5WHBuRmRSZUNldXNkejNnV250TFFjblZ2cE9PSDNWbVA1UVdWTk02SzdUQTJQY1dxRDlmbUMzS1dWQ2xYMDJyZWpYTzdSaEE3SHlxMmdEV3BtSk5LeEdnUjBCUFVPZjYrUUsyWVBUR3JLTXlzUVJTS0hrR3FHT2kvcWd5U3hhSVdHT2xYV05lYVdDWjFsV0Y4eXdoNjZpWUZiSER4QkpZWFdpdDZxTkxFNWJ4U2pOQUFvdklXajN3K3VkVmdNcVI0R0pCWlhOcENFaGVvZFc5VHRyQ0RVYkx5cHdWVVFrQlJaMXJhWDJWbTkxalZtYlh1em1naDNqOWcvcHBaa3R3UHhLekliVUd4RkdzTFllZHF5NE1NTXNJeTlHVnRtc2s5ZnI4aHEweHE2Y3RZa1BIRGw1ZWMyTFRhcXN5WjlVc3J3VllqYk1nbFBUcndpMHlLeHRNUmtQRXhtNE52SFJzQWF6MkxMUU9DdTBncnVMT0lnbytKNmc5QmFqTXM3bFpLbzNYUEFsV1ZYVkJOQ3RpZFZkMU9KVjBycytxTmtpemk1aU5admRod0hrM1hLdGFWRFhiRUR0c29WYk5jbkJadzFadE1IRFhJQ05tSldRVk5lc0NxOUpEd1dqSnJuNHhjY3ZHVWxwQ0Z0WmZSVzJRbjJFTnN6ckQwZ0dZeFd1OVdZWFZFMkhrbVJVMzEzeE03SythTkFqSEFtTEJKYnNRSzE3RmJDbXFzRjZ3cGw5bVNXaEp3eGFZTmVJd0h2QUtobGxvMDlTaVpkbGdwZTgxcU0zTjZsc3M0eGJERm1JeGUzckw0TkdKaTFtR3d6ZGRBS3Zobm5LKzd3R1M5bFl0WHQ4TUJVVEJJU3dYemJodjhINU1iRVpyWnB1STdaSUUrWEZ3dnNHQUJpOVh5ekJ6a3dkVVJEVzNpRDNvV1M2Ym9GYXBrMm1HUEpEd2NsTFdUY2MrTmh1NWdJNXFvVzF6aWRuUnM0aVZKa0FzYVhCQWJCODBnNnhKaTlsRjJ6UVA0clNWNTlhc2t3TktMM1VJTWF5SjJvbEtHNHd1cUppTlRRRHNRUnl3RE5VZXdaV21kVjVtbWZmQkpXYlB4QUpraU9EU0VOQ0c5d1hVQWdvbnJCdnFtVmxnOGdWdS9qVlN5OElyQ3dQRUhyUkJjaldTKzVzaUdyUEF5cGlJV3pCakV1RDEyQ3dyUjk0bkJBbUVpejMyVGl5eDVieEhZaUhsU3F3OXlBVTFCSUo5MjBVZjNIYnMvemNiVVNuakJ6cHRXZ1lFWTcxL3A2VmZyWTdGMHErQjF6anYzOFc4YTRFRmxBTWhpdjA2bnczQXkvV0NTOWhLMHhvdWJaQy96b0Q3V0d3S212TnEyemFuZGJYN2hBaXBMV0g5T2pITGl0ZGpZME1zMUJpMXJuYW56YzFTcHgwYjczVGt1SHQ2a1FkendicjY0UDcwY3JGUDA0QndqWmU2dUlZZ3ZLWmNFb0hSQzdFUkY5WW5HeXozcWpmNWpGVUZ4NE9oTnhsbUpMV0MySE96NGVmY01CcXY2T1hsc1hHT2tRajVGaE94aS9hb1pRRnd0cTJnajJxVGIraWkyc2hxNnlSaXZVQUYyTUFkV0hnMWJKMzIzdXlPK3dCVW1vRDlSS1dHMllBa1FxTnBPY1FBWllhQjlLblpWS3hXRG15ZkpHeUg4eWFqckZ0MTNOTUxmbGpWdTV3WmJqWWkwTFdvVFlZWXpENUxnMHdzQkl1QyswYzdyOXNGTmdhQ3ZDcks5c0xzQTdYU0FsZ0ZGV3d2b2kxVjIxT3phSFcxWjJGQWFtSFZwYTZDWGZSdWdlQzRRcHR0cjFXbmwveDJzUnNsQlM5NmRVUndXbURKTFhhWDRaNktwVjBiS3l2aFpZK2hkaEJmVHJ1THhlelo3VG1hUURoelhzVTE4OUhzUU8wV0JNWjcrb3NTV05PZmN2dnRNeTlKQ0hEbEdLTmxkN0VHL01RclpyZkkwbC9JKzhlUmszN2crNWt0YkJFTHFvRStiUU05YXNrQlFhVUFSakM0SEdQV3R0QWkxa2dkOSt6SEw1ZzFBR01GTlJhQzNXK21WbGpwV2F1RC9TVVJxODA2Njkvdnh4ZTQ4M0ZhdWdlMTBEcXJnVklQSmk1Z1NZTE5hM05PYUNOd0E5aFJMd0xCeFRvcllvK2lTMTVYSGJXSlZvTzBQOUh4S24wZFEreVpXZW91QzdqUmdWYmpveWF1Vzk1NGpSUzFtR1YzZ2Z2NzYvZkpIRU1XR0MxZWtacVZLTzVYcytXc2lOMkdBbWdmM0UrRk5aZzFUbC92eXZwaWhZRGZBWGV6aUdVMGhIU3VyN1BYV21IZHZMNmpwUzhNMkZiYXNiQkNlNUJjeVVIN1h5MW51TjYyQ2dUUk5tMVRITldXZ1BkLzF5NjdKcU5sa0cxQnNzaGY3LzEzdnRQUkNNbFc5eEhBWEc2WGN0Z2ZzdHo4S1lkVjdLM1dWbWhaNVlEWGRSMzZacDUrc1lVVU9OU0tpeUZxbmZmTCs2MndDdXhDWG9kaXdLemVxMk85NjN3d2dsakFoVk5BeGIyUUJrRVYyTTBDNjczS2VzMXMvK0V3bjEvUUtpaU15aU9vT3VIeVYxRUZWc1J1c253UnJQZDFkbXVBNGpvTzdLVWhEYmJrMEZXTzNYLytMYVRRcWw2amtFWUhxalArdWg5d1RTdENzRWNOZFJWV2pQdGZJUldweHZwUnZFWjRCZStyUFV0M3RueDZOVjV2RHZWbzFHY0lIOHVpcU10V1NNM3JOZTIwS3U4NkV3UFE4dGxsODRSMEtVdkh0RzZiNVRWS0ZVVERoZGpDdW82L1J3bFdPV0MybGdDakxyYmthT2VqZ0JhdFNocVZNbFpNclBWTXkvWi8rSUtTUlE4UTYrSlFnd01XekVWWVpXTHhHditsK0dtMWhzRFVuamJMUDNjb3FBZ0JJckIzYW5nOGdybnBSK082eFlKcVBaQVVjYi9PbUpXamZZcU55SEpyUVN5RU9rbzVLcWNsb0pBYTY5M3NDazZqblRmcnp5OWt3QWZBMjd5RFlxSklMYmlDQ3JHZVZJQlAzNG56czB1cVdLSmRpSlZSaTFnSmEvbWtwS2hZZGI2Z0RFQ0xERlJXc3hyQTJaVnFVNlFLcVVVZ09iSDJXWWR1d2ZqNmhjeWExaDByLy8wN1VsbHkxRWt5eGV4cVJXQ0hqZkRPL2FLZnhkcTRCSVRIcEo5ZWxWT1hHYTBCQU8vWmJ6K1k5cGMxbHhNYjJHeDdWa1cyV3BhWk5WRERuTTBzbTdVaHNZY0JpRXFMTVVoVG13UXJWYkdBUGdGN1pQWTNlcmFJUlhINTBqS3JMZXJtbkViRkZkYVVGVmNaTVFNWEJXb0RLbGxYQlFiS3FKVVVxRGFycld0Q0JBaDJQQWVJQVlyTHN3SVhxQnRGMVVqTFpLRUZKc0dPM041aU44dG13UnBBNmp1QVVJMDNYN09hellMTGJzOVdGNyt2VG9tMXlQb2lBQytoSWdJcHkwZEJzMGFXOWM2OG5PaDZsaUpML1VyWGdHUUxxRmttNVRVYkt0T2U4TXBxY1lLNXpISmlleGxJSm5iUFdwWWtJUmRlbXFIcWVpdUgzeHB3WkpHQ0RkdVcySGFySHRDYXNuNDBCTUFkeTJ6L3g0V0NDdHFPV1VyQjFzdUFhVFhVQkxQWDRUYUFXa1NXelFhd0JrVnQrNVV6a0VGcXVGbkY4a3k5TzJYZHBXYmJ5SVpXYkd4eVlIVlZCNlJwellXM096UHZnTU1zVGpDZ2hpWUV2Z2FRZ1l5bDgxVm01V0N4M2N3dUllQk9pNXVna3NJclJzM09uV0RkZHcrUVdUYUx5MWVOQVVodEFSUmVrNUtPVnhmdmFKbVdhOWFuZ0R1MjZWYzMwMlp4VmVDTnpHMTNCUXRjWEpYVWxWWTVnQXJlS25ZNHN4eUU5bnFMdlRkb2tWbmc5c1E2VWpyRnBtUHcxcjhUNXhRSUtzd2VpNlVCNk9nVmpNMjJaeGd1Q3FqWmcrWXlWRHEvZkJSb1p2NEpKbFZycUdUMkhvTnFsc1Z5Q0REcmVCdXdXdUQ2SEhUTmNoVTBGOW84bmRuanJnVnF1L251bUYzNlp2MnVrT2ZyellMMjJPeldNOHRpdTBISTgyWUJTeWZZWTdNazl0RHMxL1FzNmdBNXNNMkJlWDNCTEhvclA4bnNqTm1mL0xZZlRqQTJDOVlGWmw5SndieFpMaS9jMzFvT0tMUEJtVFZjemdHanptZVc5N1R1Wm9IdXdXam5qUkNBOU52TjBsZWlPTU1VbG5kZEhGa09BdFAyMVk2K1grOXZjRTB0c1FLV0k2dVlFTXRxNTgwQ0YzWGdpeGEwdnJya3FERjRLdFpRQjgyQzlIQkxPMlMyMm1YVytZME1oOVkvVCtieWFzVHlZNWhEczl5MDE0RWJScTREZXRaRlZ6REZQWm5aR2JNWXh1M1hRYmNORU5uSG1VVWZ6R2NXNzg3eHZVSUFLOHpDSzErL3ZpMnp3Q1d6VkY3ZXJDdGFGdHZQN0Rnc2FQbHVBYW5sT29CWnNISVpNQ3pqbmdWVldtNWFMaS8wckJNTHJ4d0V6dXljV2Y3T0JsL1k0RHM3MUVIZGRTRUV1TE45MWx5TWV4YlZQc1o3cE5idHVwWkhUMk1JbDgzbTJjeENMVzI4R3JVd0d6ZEU5dW11eTlhMFdTcGFMaStvOWMrU3o1a0ZMc0dPNzJYNHN1QjN0TFNoNVdjR3pFbzVBT3lnMmpmUWdyVlZDN044Q1dQZWZnN3lwRmwrcEd5MHgvY0tWRjNFU2F6QUhUZnJxaFk1b0ZzYk50di81dU9GN3NvRU82VldodFhDTEw2eDV6cGdVcWkxWTZLNlFQdmlSYXhPNU5CeWRYRVE0UFkvSDU5U1BBWWFzYWdBQUFBQVNVVk9SSzVDWUlJPVwiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL3BvcHVwLmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IHJlYWN0X2RvbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xyXG5jb25zdCBwYWdlX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BhZ2UtaW5mb1wiKSk7XHJcbmNvbnN0IHZpZGVvX2luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3ZpZGVvLWluZm9cIikpO1xyXG5jb25zdCB1cmxfbW9kZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3VybC1tb2Rlc1wiKSk7XHJcbmNvbnN0IGljb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYW50ZC9saWIvaWNvblwiKSk7XHJcbmNvbnN0IGNsYXNzbmFtZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL3BvcHVwLmxlc3NcIik7XHJcbmNvbnN0IFBvcHVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUYWJJRCwgc2V0Q3VycmVudFRhYklEXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuYXZBY3RpdmVJbmRleCwgc2V0TmF2SXRlbUFjdGl2ZUluZGV4XSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBuYXZJdGVtQXJyID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ+mhtemdouS/oeaBrycsIGlkOiAwLCBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2luZm8tY2lyY2xlJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+inhumikeebuOWFsycsIGlkOiAxLCBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ3ZpZGVvLWNhbWVyYScgfSxcclxuICAgICAgICB7IG5hbWU6ICfosIPor5XmqKHlvI8nLCBpZDogMiwgZGlzYWJsZTogZmFsc2UsIGljb246ICdidWcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5pWs6K+35pyf5b6FJywgaWQ6IDMsIGRpc2FibGU6IHRydWUsIGljb246ICdlbGxpcHNpcycgfSxcclxuICAgIF07XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogY291bnQudG9TdHJpbmcoKSB9KTtcclxuICAgIH0sIFtjb3VudF0pO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiSUQodGFic1swXS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqICDmuLLmn5PpgInpobnljaHliJfooahcclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYXZJdGVtQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXNfMS5kZWZhdWx0KHN0eWxlcy5uYXZJdGVtLCBuYXZBY3RpdmVJbmRleCA9PT0gaXRlbS5pZCAmJiAnYWN0aXZlJywgaXRlbS5kaXNhYmxlICYmICdkaXNhYmxlJyksIGtleTogaXRlbS5pZCwgb25DbGljazogKCkgPT4gc2V0TmF2SXRlbUFjdGl2ZUluZGV4KGl0ZW0uaWQpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpY29uXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJY29uLCB0eXBlOiBpdGVtLmljb24gfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJdGVtTmFtZSB9LCBpdGVtLm5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwYWdlX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVybF9tb2Rlc18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHBhZ2VfaW5mb18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc29sZS5sb2coc3R5bGVzKTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogJ3Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5yb290IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2Q29udGFpbmVyIH0sIG5hdkl0ZW0oKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuc2hvd0NvbnRhaW5lciB9LCBzaG93Q29udGVudCgpKSkpKTtcclxufTtcclxucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXHJcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cCwgbnVsbCkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVybE1vZGUgPSB7XHJcbiAgICBtb2NrOiAnX19NT0NLX18nLFxyXG4gICAgdmNvbnNvbGU6ICdfX1ZDT05TT0xFX18nLFxyXG4gICAgZGVidWdnZXI6ICdfX0RFQlVHX18nXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=