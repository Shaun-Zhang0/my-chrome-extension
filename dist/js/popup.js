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
exports.push([module.i, ".index__videoForm__2JlBy {\n  position: relative;\n  width: 100%;\n  padding-top: 30px;\n}\n.index__formItem__254XF {\n  width: 100%;\n}\n.index__formInput__2hlOJ {\n  display: block;\n  height: 40px;\n  width: 96%;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #4a6ee0;\n  border-radius: 0.25rem;\n  font-weight: 400;\n  line-height: 40px;\n  margin: 0 auto;\n  padding: 0 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline-color: #4b62c5;\n}\n.index__formLabel__ipbWq {\n  display: inline-block;\n  margin-bottom: 0.5em;\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n.index__formSubmit__1BiRu {\n  color: #fff;\n  width: 96%;\n  height: 36px;\n  line-height: 36px;\n  margin: 10px auto 0;\n  background-color: #4a6ee0;\n  border-color: #4a6ee0;\n  text-align: center;\n  border-radius: 8px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  user-select: none;\n  cursor: pointer;\n}\n.index__formSubmit__1BiRu.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: default;\n}\n.index__formSubmit__1BiRu:active {\n  opacity: 0.8;\n}\n.index__video__2wk1t {\n  width: 0;\n  height: 0;\n}\n.index__pageTitle__CEuCg {\n  font-size: 18px;\n  border-bottom: 1px solid #f0f0f0;\n  height: 36px;\n  line-height: 36px;\n  width: 100%;\n  margin-bottom: 30px;\n  user-select: none;\n}\n.index__videoInfoRow__3bgmd {\n  position: relative;\n  width: 400px;\n  min-height: 100px;\n  margin: 10px auto;\n  border: 1px solid #cccccc;\n  padding: 0 24px;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15) !important;\n  background-color: #ffffff;\n}\n.index__videoInfoRowHeader__18Ri7 {\n  min-height: 40px;\n  line-height: 40px;\n  padding-left: 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n}\n.index__videoInfoValue__1-rhf {\n  min-height: 60px;\n  padding: 14px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n.index__loadingIcon__1Izul {\n  position: absolute;\n  width: 150px;\n  height: 70px;\n  left: 50%;\n  top: 100px;\n  transform: translate(-50%, -50%);\n  z-index: 200;\n  padding: 16px 24px;\n  overflow: hidden;\n  line-height: 1.5;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 4px 12px rgb(0 0 0%);\n  box-shadow: 0 4px 12px rgb(0 0 0%);\n}\n.index__loadingIcon__1Izul img {\n  position: absolute;\n  left: 50%;\n  top: 46%;\n  width: 32px;\n  height: 32px;\n  transform: translate(-50%, -50%);\n  user-select: none;\n}\n.index__loadingTips__3R0yF {\n  position: absolute;\n  bottom: 16%;\n  left: 0;\n  text-align: center;\n  width: 100%;\n  color: #4a6ee0;\n}\n.index__videoFirstFrame__1mtQH {\n  display: block;\n  width: 500px;\n  height: 300px;\n}\n.index__videoFirstFrameImage__2o3cF {\n  display: block;\n  width: 100%;\n  object-fit: contain;\n}\n.index__downloadImage__2uU5q {\n  border-radius: 40px;\n  width: 100px;\n  height: 30px;\n  margin: 10px auto 0;\n  background-color: #4a6ee0;\n  color: #ffffff;\n  line-height: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n", ""]);

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
	"loadingTips": "index__loadingTips__3R0yF",
	"videoFirstFrame": "index__videoFirstFrame__1mtQH",
	"videoFirstFrameImage": "index__videoFirstFrameImage__2o3cF",
	"downloadImage": "index__downloadImage__2uU5q"
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
const use_store_1 = __importDefault(__webpack_require__(/*! ../../utils/hooks/use-store */ "./src/utils/hooks/use-store.ts"));
const store_1 = __importDefault(__webpack_require__(/*! ./store */ "./src/components/page-info/store.ts"));
const styles = __webpack_require__(/*! ./index.less */ "./src/components/page-info/index.less");
const PageInfo = () => {
    const store = use_store_1.default(() => new store_1.default());
    react_1.useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var _a, _b, _c, _d, _e, _f;
            store.setCurrentUrl(tabs[0].url);
            store.setCurrentTitle(tabs[0].title);
            const bg = chrome.extension.getBackgroundPage();
            store.setCurrentKeywords((_b = (_a = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _a === void 0 ? void 0 : _a.pageInfo) === null || _b === void 0 ? void 0 : _b.keyword);
            store.setCurrentDescription((_d = (_c = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _c === void 0 ? void 0 : _c.pageInfo) === null || _d === void 0 ? void 0 : _d.description);
            store.setCurrentAuthor((_f = (_e = bg === null || bg === void 0 ? void 0 : bg.test1()) === null || _e === void 0 ? void 0 : _e.pageInfo) === null || _f === void 0 ? void 0 : _f.author);
        });
    }, []);
    return react_1.default.createElement("div", { className: styles.pageInfoRoot },
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u5F53\u524D\u9875\u9762\u4FE1\u606F\uFF1A"),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "url / \u5F53\u524D\u9875\u9762\u5730\u5740"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentUrl)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "title / \u6807\u9898"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentTitle)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "keyword / \u5173\u952E\u5B57"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentKeyword)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "description / \u63CF\u8FF0"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentDescription)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "author / \u4F5C\u8005"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentAuthor)));
};
exports.default = mobx_react_1.observer(PageInfo);


/***/ }),

/***/ "./src/components/page-info/store.ts":
/*!*******************************************!*\
  !*** ./src/components/page-info/store.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
const base_store_1 = __importDefault(__webpack_require__(/*! ../../utils/hooks/base-store */ "./src/utils/hooks/base-store.ts"));
class PageInfoStore extends base_store_1.default {
    constructor() {
        super();
        /**
         * 当前页面的地址
         * @type {string}
         */
        this.currentUrl = '';
        /**
         * 当前页面的关键词
         */
        this.currentKeyword = '';
        /**
         * 当前页面的描述文案
         */
        this.currentDescription = '';
        /**
         * 当前页面的作者
         */
        this.currentAuthor = '';
        /**
         * 当前页面的标题
         */
        this.currentTitle = '';
    }
    /**
     * 获取当前页面的url
     * @param url
     */
    setCurrentUrl(url) {
        this.currentUrl = url;
    }
    ;
    /**
     * 获取当前页面的title
     * @param title
     */
    setCurrentTitle(title) {
        this.currentTitle = title;
    }
    ;
    /**
     * 获取当前页面的关键字
     * @param keywords
     */
    setCurrentKeywords(keywords) {
        this.currentKeyword = keywords;
    }
    /**
     * 获取当前页面的author
     * @param author
     */
    setCurrentAuthor(author) {
        this.currentAuthor = author;
    }
    /**
     * 获取页面的描述
     * @param description
     */
    setCurrentDescription(description) {
        this.currentDescription = description;
    }
    use() {
        super.use();
    }
}
__decorate([
    mobx_1.observable
], PageInfoStore.prototype, "currentUrl", void 0);
__decorate([
    mobx_1.observable
], PageInfoStore.prototype, "currentKeyword", void 0);
__decorate([
    mobx_1.observable
], PageInfoStore.prototype, "currentDescription", void 0);
__decorate([
    mobx_1.observable
], PageInfoStore.prototype, "currentAuthor", void 0);
__decorate([
    mobx_1.observable
], PageInfoStore.prototype, "currentTitle", void 0);
exports.default = PageInfoStore;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const url_mode_1 = __webpack_require__(/*! ../../url_mode */ "./src/url_mode.ts");
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
const use_store_1 = __importDefault(__webpack_require__(/*! ../../utils/hooks/use-store */ "./src/utils/hooks/use-store.ts"));
const store_1 = __importDefault(__webpack_require__(/*! ./store */ "./src/components/url-modes/store.ts"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
const styles = __webpack_require__(/*! ./index.less */ "./src/components/url-modes/index.less");
const UrlModes = () => {
    const store = use_store_1.default(() => new store_1.default());
    /**
     * 渲染模式的选项
     */
    const renderModeItem = react_1.useCallback(() => {
        return Object.keys(url_mode_1.UrlMode).map(i => {
            const isActive = store.activeIndex.indexOf(url_mode_1.UrlMode[i]) > 0;
            return react_1.default.createElement("div", { className: classnames_1.default(styles.modeItem, isActive && styles.activeItem), onClick: () => store.onItemClick(url_mode_1.UrlMode[i]) }, url_mode_1.UrlMode[i]);
        });
    }, []);
    return react_1.default.createElement("div", { className: styles.pageInfoRoot },
        react_1.default.createElement("div", { className: styles.header }, "\u8C03\u8BD5\u6A21\u5F0F"),
        react_1.default.createElement("div", { className: styles.modeContainer }, renderModeItem()));
};
exports.default = mobx_react_1.observer(UrlModes);


/***/ }),

/***/ "./src/components/url-modes/store.ts":
/*!*******************************************!*\
  !*** ./src/components/url-modes/store.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
const use_mount_1 = __importDefault(__webpack_require__(/*! ../../utils/hooks/use-mount */ "./src/utils/hooks/use-mount.ts"));
const url_mode_1 = __webpack_require__(/*! ../../url_mode */ "./src/url_mode.ts");
class UrlModesStore {
    constructor() {
        /**
         * 当前页面地址
         * @type {string}
         */
        this.currentURL = '';
        /**
         * 当前模式
         */
        this.activeIndex = [];
        /**
         * 点击切换模式
         * @param mode {string}
         */
        this.onItemClick = (mode) => {
            // noinspection DuplicatedCode
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
        /**
         *
         */
        this.freshModeStatus = () => {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                console.log(tabs[0].url);
                alert(tabs[0].url);
                Object.keys(url_mode_1.UrlMode).map(item => {
                    if (tabs[0].url && tabs[0].url.indexOf(url_mode_1.UrlMode[item]) > 0) {
                        // @ts-ignore
                        this.activeIndex.push(url_mode_1.UrlMode[item]);
                    }
                });
            });
        };
    }
    use() {
        use_mount_1.default(() => {
            this.freshModeStatus();
        });
    }
}
__decorate([
    mobx_1.observable
], UrlModesStore.prototype, "currentURL", void 0);
__decorate([
    mobx_1.observable
], UrlModesStore.prototype, "activeIndex", void 0);
exports.default = UrlModesStore;


/***/ }),

/***/ "./src/components/video-info/images/loading.gif":
/*!******************************************************!*\
  !*** ./src/components/video-info/images/loading.gif ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhGAAYAMQAAJzW/NTu/PT6/LTu/NT+/Lz6/Lzi/OT+/Kzm/OT2/Pz+/Mzu/Nz6/KTe/Nzy/PT+/Lzy/MT+/Nz+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQATACwAAAAAGAAYAAAFnOAkjmRpjkqqrmyrTgoMx2oQvOk807hiAACD60USOAQwIDB2EtEEjajABxSmHrxdygFoABypwGKqeEiwK9kEKj2VmSTa+pirZ+3DfEuWWCSagE4KCIQPOnYzEngChAhoemdEE30HgYByiJl3epySIgwQf24HcCgyEAMQmgcRlXgqCRAMKgeztHuXBQWlbjJ4tT2HnZ2WxU6+m8KHIQAh+QQJBQAXACwAAAAAGAAYAISc1vzc8vy08vz0+vy85vys4vzc+vzE8vzs+vyk3vyk2vy8+vys6vzk+vzM/vyc2vzk9vy88vz8/vys5vzM8vzs/vzk/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFneAljmRpjlKqrmyrXhIMx2oQvOk807hEAACC60WS3EQKoOJUhA0KicLABxRKDAeDjgVJeG9GsOQgiLBkl+dDempEGiZaGjLlbe3D/FCGCECYgCIpE4R4hgY5KxMME3oqFnUxIggUCIGAcomGdzuOjiUNB3AnEhWSTTFkB5ozFQ4VdyuhDY8WK6ZnmAsLp0yZPKW2rJqen5fHMpvDeCEAIfkECQUAGAAsAAAAABgAGACElNL8zOr8rOr87Pb8tOb8zPb8pN78vPb85Pb8/P78nNr8xOr87P78zP78rOb8nNL83PL8tO787Pr8xOb81Pb8pOL8xP785P78////AAAAAAAAAAAAAAAAAAAAAAAAAAAABaMgJo5kaY5Jqq5sq2IJDMcqhLzpPNN4MimKietFStxEBqBBNAgMTDyHNPULJgaAB2CQYyEMFQM3YUsFsoDASgYjGAixEkK7LdFgty6v+dQP/y0yEhASJ4ZFCQQRcDp6Mxd+CRECEYAqkEQYgwyHnXeOoDw7lpYlEgWFJ5koMgURBaEMDZyRKacMKgy4uYGHCRYWcb4yjhK0orWkQ53MRcTI0I0hACH5BAkFABcALAAAAAAYABgAhJTS/Mzq/Oz2/Kzm/Mz+/KTe/Nz2/Pz+/Lz2/Jza/Oz+/Lzu/JzS/LTu/NT6/OT+/Oz6/LTq/Kzi/OT2/PT+/JzW/NT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWm4CWOZGmOR6qubKteBwzH6jS96TzT+BEkiYDrRTpAYhdJoSARCQICEy8iiaR+wcOEAWDceCrBYCxI2a7cihAnOlCtpm13UqLByrn84UnXD/8tMhQGFCeGRRcLEQs8OnoPFGAHCw2MgCmQRBeDhYeHdnqOjX6XlyUUDhCGB5FSMg4IBKEpFBaFpCkQqSoUCiuRLJ4HBLKeMqMxCgqioqWmxtDHzLOjIQAh+QQJBQAXACwAAAAAGAAYAISc1vzU+vy07vzs9vy8+vy86vzE8vys5vzk9vz8/vy87vz0/vzE9vy04vyk3vzU/vy08vz0+vzM/vzM6vzM7vzk+vy05vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFquAljmRpjkmqrmyrXgkMx+qAvOk803hCOQ6K60VKRGKXBrAhGkwGJl7hoEj9gokBYDvIsSKH8DF7S0y2gMlKBlNQkSTtFlGiwca8GWJC9w7/LjIJNyd1hCgXBgIGeX4wBhAMPCmKVYAJDAqSOSILCAuFRRVwgjqOp5OXlyULARGFCQukInYBDA+oCw+gfiutsikLwMEtoSISEsa0gnnCpo2qqsrTy9DP1wkhACH5BAkFABUALAAAAAAYABgAhJTS/NTu/Kzq/Oz2/LTe/KTi/NT+/Lz6/Jza/Lzq/Pz+/JzS/Mz2/PT+/NTy/LTy/Oz6/Lzm/Nz+/MTu/JzW/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoYCWOZGmOSqqubKtWCgzHKgS96TzTuBIUBIfrRSJGCoWIaBAYmHgTwSTlQAoHFApikGsJvqoG15elBFYyWHRqGiAQFGdRxtKlmM7ucO+ic09FBAsEMSIxDA8MPHYxAQAACwE7CoiKfAELj2eFMH+AhoKEKHSLepM8fKk5JA0SnCUKDa+GMhIHrqWxEg2MLLthsmEtnyIGEsS0uRUNvKZ6qqnI0smM1c4hACH5BAkFABgALAAAAAAYABgAhJTS/Mzy/Oz6/Kzq/NT6/Kzm/Pz+/Lz2/KTa/Nz2/PT6/OT+/Jza/NT2/MTu/Nz+/JzW/NTu/Oz+/LTq/NT+/LTi/MT+/PT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAWrICaOZGmORqqubKtiBgzHKaYoc16/65wUhYTrRSI6gBORIoIr0QyNQSD1CxoUCAhCsGMNJhOVgmuIMBCMSC8GaxSmJgXjLHDKZt3ZEtcd+lsyV2wnIgYVEBWDMQ0HcHk1EQCSEXhQBwR/ZRAAEGqKEoOEhgAVTYE6T6g8mS4KLE4LoUU1djELB7GpKRcUF6orDysXLMOvhCIPFMcoganDqL+sfsvURc3QjzQhACH5BAkFABQALAAAAAAYABgAhJzW/NTu/PT6/LTu/NT+/Lzi/Kzm/OT2/MT+/OT+/KTe/NT2/Pz+/Mzu/Nz6/Jza/Nzy/PT+/Lz2/Nz+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgICWOZGmOTKqubKtSDAzHKSzMeP2u82EYB9erFBM1fg2RAHIjyhyDRcoHZAgUWIGONeiqIpEU5PFQQHhFSmAQOF2zziJtPlsecsK8S2ZNn2AFAAVpMQ4SDnRbagCMbSuGBHoMAYwAATUiDGF/KIEFTXx4oiwzkqZECX4kmqqhCQipiZoTEXgssV8rYaScFBMTvZl8ibWKW6aSwcrCsqOJIQAh+QQJBQAYACwAAAAAGAAYAISc1vzc8vy07vz0+vy85vys4vzc+vy8+vzE9vzs+vyk3vyk2vy88vys6vzk+vyc2vzk9vy08vz8/vys5vzM/vzM8vzs/vzk/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAFoCAmjmRpjlKqrmyrYhIMx+ls13ieJ9OUuK+TqDJpVEQSyMBEwxgYgVSC4JMMCovCQKdiCBiqbQryUCiir5gIwjCcrgptqSnLzQbKG3DvqteESAQLBGoyDgcONIo2AQCOATMpBgcGfBKNj3+RgIGDhU12oYuWpJpIFoUlEAgQTDIWFKijEggRCHossi4BCJUrnE4XwHV6xaKlfMPKoLPGNCEAIfkECQUAGgAsAAAAABgAGACElNL8zOr8rOr87Pb8tOb81Pb8vPr8pN78xOr85Pb8tPL8/P78nNr8tOr87P78rOb85P78nNL83PL87Pr8xOb8zP78pOL8xPL85Pr8tO78////AAAAAAAAAAAAAAAAAAAABaagJo5kaY5Lqq5sq2oLDMfpbNd4nk9NM7mvk0giyBREi0GsRNNgLpiUo/dbPA6EV+uiuLgGB4slsZKJnpiT1ZJlmmnw2YJ8A9pdsqAQRjlQljIYBg5xORoSDIkJcgsOBhB3C4iJEjVIlnsLfX8oeYWfdZErAwFKZSR6JAMArANuMQ4VhIUBABEAATorsy2rt6aYQhAQIwmlJk2Gyp+ikXvPyJ510zghACH5BAkFABgALAAAAAAYABgAhJTS/Mzq/LTq/Oz2/KTe/Mz2/Lz2/Pz+/Nz2/Jza/Oz+/Kzm/JzS/Lzu/Kze/OT+/LTu/Oz6/NT+/MT+/OT2/PT+/JzW/Kzi/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAWlICaOZGmOR6qubKtiBwzH6WzXeJ5XTVO5r5MIIRAgRIdBrETDRAqRFM+XElwEr1bBUHANLotFNDt6Pk4HAQHLlMlys0P0Bqy73EshMuAI5GMKEwo0hDYUCQQJFHEHgYN2h4kUNSh6KHx+lYVwnIR2LAMBSitMPycDAAwAA20xFRKPNwGpAH6eK48tA6oWo5R6D2ciFKImTXCmnYyfdpbOJMeb0jchACH5BAkFABYALAAAAAAYABgAhJzW/NT6/LTu/Oz2/Mz+/MTy/Mzq/Pz+/Kzm/OT2/Lz2/Oz+/Lzu/MT2/KTe/NT+/LTy/PT6/Mzu/LTi/OT6/PT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWooCWOZGmOR6qubKtaBwzH6WzXeK4XReS+J1FCIKCIDj4TzVIh+A4VXiXFQDBerYCC4Iogvk/cKOI8HarX0lKWmyFp8J+8JasHj4aJJHZkEhZwNzEDDoUJbgcLf3MHCYUOCTUodygSenxsgpptjC0DBgMsalMnAwCnA2oyFQ9TgQcGpwAGOiuuKQ0NKaankUBBFBAKhxYJBsQkSzsFWK+dnZTRyWzOmzQhACH5BAkFABUALAAAAAAYABgAhJTS/NTu/Kzq/Oz2/LTe/Mz+/KTi/Lz6/Pz+/Jza/Mz2/MTu/PT+/Lzm/NT6/JzW/NTy/LTy/Oz6/Kzm/NT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWlYCWOZGmOSKqubKtWCAzH6WzXeK4rirueI0kkMhC9SrQKw8FQ8VSLyeLVchwcvslEwJKJljETIjpFemnoGRXta7e8QGSgAQnLGIXmLS2ZGCZFK3hNbgMGhxI1cScIc3UoMjl7k24uAwEDXSQIeiYDD6BFm3cUhI0BKQEPCQmobIIqBAAPBAgDCaE/QAgPALMxl6KjaSkEvbXErz4Brm2Lz8OUyTchACH5BAkFABcALAAAAAAYABgAhJzW/NTu/Kzq/Oz6/MTq/NT6/Kzm/Pz+/Lz2/PT6/KTa/NT2/Mzy/Nz+/Jza/LTq/Oz+/MTu/NT+/LTi/Lz6/PT+/Nz2/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWi4CWOZGmOR6qubKteBwzH6WzXeK4vhbueowECMRC9SrRLpVFRLRgqxgOqUzUoDd9D8GDJjNnTQQpFfmno2avqa/9iwJOFYCHFKpLmLZ0w+BNqB0tNbn1+AzVxQHN1KDI5e5FuLgkBCV52eiYJDg4KRXYygyoBASkBng6maCyEBxMAABMHCQCeiEdisbGAlaChaSmwAAqQbC2Vlm6KzMCSwcEhACH5BAkFABQALAAAAAAYABgAhJzW/NTu/PT6/LTu/NT+/Lzi/Kzm/OT2/MT+/OT+/KTe/NT2/Pz+/Mzu/Nz6/Jza/Nzy/PT+/Lz2/Nz+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWcICWOZGmOTKqubKtSDAzH6WzXeK47jrueo4hEEkGdaLDJiqdyDAI3VgKhdA2uLJmI0QMGniakLBeN+s4tLdB0aBxIscgkQqvfDPgia45mCPAGdDFrQG1vRnZkinV9KwIQAllwdCcCCg8KAiVIcoIMAQEpEAqXEDorngUAAAV+l5k/QAyrqzGPmptjdaqsizNoDQGRZ4TFcLplvgwhACH5BAkFABgALAAAAAAYABgAhJzW/Nzy/LTu/PT6/Lzm/Kzi/Nz6/Lz6/MT2/Oz6/KTe/OT6/KTa/Lzy/Kzq/Jza/OT2/LTy/Pz+/Kzm/Nz+/MT+/Mzy/OT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAWjICaOZGmOUqqubKtiEgzH6WzXeK4vlLueqMMhBhTRYJfVwqAyNAI31qWSdDUEDZbMmCCaAg2D6SjLRaO+dGtbLCUCEBKtR6vfJhNHPTWgDNQpeRMvbScJFglyZXZmjYAsAxB/PyQLDXEmAwUMBQMlRw0NQykBASkQCqmmeyqWECkEAAAEEpoPnZRADLIMIpGen4szsQ+0jKw+pYCFzEbCjmcSIQAh+QQJBQAZACwAAAAAGAAYAISU0vzM6vys6vzs9vy05vzU9vyk3vy8+vzE6vzk9vz8/vyc2vy08vzs/vys5vzk/vyc0vzc8vy07vzs+vzE5vzM/vyk4vzE8vzk+vz///8AAAAAAAAAAAAAAAAAAAAAAAAFp2AmjmRpjkqqrmyrZgoMx+ls13iuY4+7nqjDIQYU0WCNVaOXwlwwN1ajknRdGBeWzJgEOqGloywXjfrOrW2xNIlMSDRmGUcQSGgrJlohkRBeaydtDXBjeHOHLQMBA2eNWiMJAJMDJgoOBg5EKDABEAAQASkRESkJBhYWCTopA6AAjRQLCxQpBBZ/PySLCSIGBgsGRquWhjOytGSsPhGraIHQRsbKiTQhACH5BAkFABgALAAAAAAYABgAhJTS/Mzq/LTq/Oz2/KTe/Mz2/Lz2/Pz+/Nz2/Jza/Oz+/Kzm/JzS/Lzu/Kze/OT+/LTu/Oz6/Mz+/MT+/OT2/PT+/JzW/Kzi/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAWlICaOZGmOR6qubKtiBwzH6WzXeJ5jiuKuJ9RkEguKaDBfrTeLFCI3VkVS+RUMBZbs6As6HyakbEem/c6urbFUQVRItEc1emsIGmaVHJ1qQPA1aydtbyhjZnRlKwMBA2eOWiMDAAwAA2ECFwJFhgcBABYAASkUFCkDBAsXETqnlQymAQkEowcCC5tAJBSNIg4JCQ5HrGGHM7K0ZTNopXyCz0fGymQhACH5BAkFABcALAAAAAAYABgAhJzW/NT6/LTu/Oz2/Mz+/MTy/Lzq/Pz+/Kzm/OT2/Lz2/Oz+/Lzu/MT2/KTe/NT+/LTy/PT6/Mzu/Mzq/LTi/OT6/PT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWr4CWOZGmOR6qubKteBwzH6WzXeJ5f1uKuJxSBEAuKaDDLa7GYWQJNncpCULoCigBLdlQGFw2LCSnbmWm/tKtcKRovkYRbVoA00DdaQVBApxoKfWoHe4JuB21vIhEVYihleGd5KwMTA2kRLSQDAJ0DYwYIBnNlE50AEykDcgcRCK9WMyqcnXISDg4SKQwIDFskCRMJIhS4FEeZY5AzE7i6kX5pq4OK1UfLkmYhACH5BAkFABcALAAAAAAYABgAhJTS/NTu/Kzq/Oz2/LTe/Mz+/KTi/Jza/Lz6/Pz+/OT6/JzS/Mz2/MTu/PT+/Lzm/NT6/NTy/LTy/Oz6/Kzm/JzW/NT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWp4CWOZGmOSaqubKteCQzH6WzXeJ5fjuOuJ1KhECTRYL5ab+aAOG4shyXZUiAgLJko4Qs2n6WjbEem/c6uGWFBiBVhA/c2AFgAAtAbQ8IwJwJ2d2gJe301MGttbzAKcmMvZXktAwFxg0AjAxWbAyYJDRQNjmMBFQcVASkTEyoUrkkzKpqncREUBqmfAqKYmZUiDwYGD1uHRo8zEQYUuZKDA5Zni9NbyJFkIQAh+QQJBQAWACwAAAAAGAAYAISU0vzM8vys6vzs+vys5vzU+vy89vz8/vyk2vz0+vyc2vzc9vzE6vzc/vyc1vzU7vy08vzs/vy04vzU/vy8+vz0/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFqaAljmRpjkeqrmyrWgcMx+ls13ieW1XlrifSpBEk0WC+Wm9WaVRurGaytaA0WDLRwRc8XE1H2W5M+5ldM4lDEivCEm3tA+AAPKC3AqRQPszrD2cHenw1MGoSCW5vcWIHcHhkMysJD3CCQCMJCAoIA2APAoElNA8OCg6jCYopAgIQLyybnQMHCwQECymhAVgkA5YiDLgMWoZGjjO3uZKYA7Vni9Jayc1lMCEAIfkECQUAFAAsAAAAABgAGACEnNb81O789Pr8tO781P78vOL8rOb85Pb8xP785P78pN781Pb8/P78zO783Pr8nNr83PL89P78vPb83P78////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaMgJY5kaY5Mqq5sq1IMDMfpbNd4nsORu56kyQRIovFevRljQmuuIpOeK4Fg/mIiRvLEcGCLMtlu7PSZWbMCoPAFMgRtRgBAD9yaMIfEq5zXz10SBC8wagUCRFlwYFd4ZEoqAhBwgD8jAgoACogmEAMQJjQQDwoPEDFJKQOrLyyYCpsMBwYGBykBAwtoJJKcDbQNKFxiTbO1j5UCUmaJzYx30GMhACH5BAkFABkALAAAAAAYABgAhJzW/Nzy/LTu/PT6/Lzm/Nz6/Kzi/Lz6/MT2/Oz6/KTe/OT6/KTa/OT2/Lzy/Kzq/Jza/Nz2/LTy/Pz+/Nz+/Kzm/MT+/Mzy/OT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAWgYCaOZGmOU6qubKtmEwzH6WzXeJ7Dg7ueJAoFSKJlFocGbjCbYGjQlUPi8CUsz19M1EAsgM5tUSbbmaO+NGtGYBDE4BoqAKgHblAYshCl29UTBQcLLzBtb0QihYpleWd4KwMNPYA/IwMGDAZMJg0OESY0DQqkEY4TDgIOkCmYpCkJFQIJKQGfaySSnBcVFReJZXixFbSnTZVqwMqMxo84IQAh+QQJBQAZACwAAAAAGAAYAISU0vzM6vys6vzs9vy05vzU9vyk3vy8+vzE6vzk9vz8/vyc2vy08vzs/vys5vzk/vyc0vzc8vy07vzs+vzE5vzM/vyk4vzE8vzk+vz///8AAAAAAAAAAAAAAAAAAAAAAAAFo2AmjmRpjkqqrmyrZgoMx+ls13iez+5aDoHB6PE4lWgDAACSoDkVDScvFVgCAq5G5cGSZZJLoUnBHcuATelO12t3UxQDJWYUvVCJhT5yU08OZSoRegtpbRgHUTUwcXN1dot2MmtqlSyGbj4oDgYEdCUJFwlmCgkGnE19FwwXfSsEnSkTEp4pGBcYXSSldAUEAgWPk32zEhOUU5luwsySlX3QCiEAIfkECQUAFwAsAAAAABgAGACElNL8zOr8tOr87Pb8pN78zPb8vPb8/P783Pb87P78rOb8nNL8vO78rN785P78tO787Pr8zP78xP785Pb89P78nNb8rOL8////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABabgJY5kaY5Hqq5sq14HDMfpbNd4ns/uWg6BwcjhOJVoA8ACMIhRaKkElJcKLCsBFyUi9cUuyQrzdJCaaODAZMeG9t6tWaCRNZK+qAmhQpjcpmUSZioTfAQIcAcQEg4vMAEWdXYieJQybX9/LE2JLHcCFgKVIwMFEGcwAxYKBBCABwUPBZoqAgqiBxQMDE+Kpp53TSIIAg8Ik5d/uryYnc7I0JavmWwhACH5BAkFABcALAAAAAAYABgAhJzW/NT6/LTu/Oz2/Mz+/MTy/Lzq/Pz+/Kzm/OT2/Lz2/Oz+/Lzu/MT2/KTe/NT+/LTy/PT6/Mzu/Mzq/LTi/OT6/PT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWm4CWOZGmOR6qubKteBwzH6WzXeK4XjbuWg8lAVFFAKicSbQBoDg6RRmFloVlVkyZg4rIQqr/YhdlMnA5VE+2SmCRyN+vMR2/NJBRuUlk6DByAZnA4XgtXCYAOb3ULBIY1MHgSYnsyfHKDmFcrEXUuSgYIBpQkEQERajARCKydcQEKBHErDAgMKgUFYAMBjy9KrmwCAmaVazkWuWBxc56eldCXzJk3IQAh+QQJBQAWACwAAAAAGAAYAISU0vzU7vys6vzs9vy03vzM/vyk4vy8+vyc2vy86vz8/vyc0vzM9vz0/vzU+vzU8vy08vzs+vys5vzE7vyc1vzU/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFp6AljmRpjkqqrmyrWgoMx2oQvOk807hCAACC60UaBAawxQKwiJ1EtAGCQhn4mMJUg7dLBaiIm8KmalS2K5lFSkEgTYotXGa0cnN43nDfmgUSN0+CMA0GBAYROnmEBXIqAwaREXxxjUQKDwkPToNzd5+KepSUJAoTEhOcJA0ODZ4KErGOPA4MDqErp6kpDAxlrSwlRBEQEG+CNLi9PbijfJ3QUDKL1HchACH5BAkFABgALAAAAAAYABgAhJTS/Mzy/Kzq/Oz6/NT6/Kzm/Lz6/MTq/Pz+/KTa/Nz2/PT6/Jza/NT2/LTy/Nz+/JzW/NTu/LTq/Oz+/NT+/LTi/MTu/PT+/P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAWmICaOZGmOSKqubKtiCAzHahS96TzTOFIBkIrrRVpEFjAIABg7iWiDBCMx8CmFqQtvl4owvjfjMfvQrmSYhTSBNCG0btkgUt3m7ryhviVTHBROgU8LBYVIeDpvFHAqhIV1eheLRBh+gIJONIl2nFx7nyQIARIBTSUIChdxKRICEogpCgYPmysBAqUpDQQrZSynORgTDg5tgZp4CLs9tZ+gmNAynbB2IQA7"

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
    const [videoFirstFrameImg, setVideoFirstFrameImg] = react_1.useState(''); // 视频首帧图
    const [loading, setLoading] = react_1.useState(false); // 请求状态
    const videoFirstFrameRef = react_1.useRef(null); // 用于存储video第一帧的图片
    const isVideo = (path) => {
        return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    };
    let videoEl = react_1.useRef(null);
    const getVideoUrl = (e) => {
        setVideoUrl(e.target.value);
    };
    /**
     * 通过xhr创建一个get请求
     */
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
    /**
     * 更新首帧的图片
     */
    react_1.useEffect(() => {
        getVideoFirstFrame();
    }, [videoTime]);
    /**
     * 视频相关信息
     */
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
                    "kb")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "\u9996\u5E27\u56FE\u7247"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    react_1.default.createElement("img", { className: styles.videoFirstFrameImage, ref: videoFirstFrameRef, src: videoFirstFrameImg }),
                    react_1.default.createElement("div", { className: styles.downloadImage, onClick: downloadImg }, "\u5BFC\u51FA\u56FE\u7247"))));
    };
    /**
     * 获取视频首帧图片
     */
    const getVideoFirstFrame = () => {
        videoEl.current.onloadeddata = (() => {
            /**
             * 即时获取可能会获取不到对应的第一帧图
             * 故采取设置一个时间较短的定时器来实现
             */
            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.width = videoEl.current.videoWidth;
                canvas.height = videoEl.current.videoHeight;
                canvas.getContext('2d').drawImage(videoEl.current, 0, 0);
                const img = canvas.toDataURL('image/png');
                setVideoFirstFrameImg(img);
            }, 50);
        });
    };
    /**
     * 导出图片
     */
    const downloadImg = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = `video-poster-${new Date().getTime()}`;
        a.href = videoFirstFrameImg;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click(); // 自动触发点击a标签的click事件
        document.body.removeChild(a);
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
/**
 * 索引id的映射
 */
const NAV_ACTIVE_INDEX = {
    "PAGE_INFO": 0,
    "VIDEO_INFO": 1,
    "URL_MODES": 2,
};
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
        // chrome.browserAction.setBadgeText({text: count.toString()});
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
    const renderNavItem = react_1.useCallback(() => {
        return navItemArr.map((item) => {
            return react_1.default.createElement("div", { className: classnames_1.default(styles.navItem, navActiveIndex === item.id && 'active', item.disable && 'disable'), key: item.id, onClick: () => setNavItemActiveIndex(item.id) },
                react_1.default.createElement(icon_1.default, { className: styles.navIcon, type: item.icon }),
                react_1.default.createElement("span", { className: styles.navItemName }, item.name));
        });
    }, [navActiveIndex]);
    /**
     * 渲染主内容`
     */
    const renderShowContent = react_1.useCallback(() => {
        switch (navActiveIndex) {
            case NAV_ACTIVE_INDEX.PAGE_INFO:
                return react_1.default.createElement(page_info_1.default, null);
            case NAV_ACTIVE_INDEX.VIDEO_INFO:
                return react_1.default.createElement(video_info_1.default, null);
            case NAV_ACTIVE_INDEX.URL_MODES:
                return react_1.default.createElement(url_modes_1.default, null);
            default:
                return;
        }
    }, [navActiveIndex]);
    return (react_1.default.createElement("div", { id: 'root' },
        react_1.default.createElement("div", { className: styles.root },
            react_1.default.createElement("div", { className: styles.navContainer }, renderNavItem()),
            react_1.default.createElement("div", { className: styles.showContainer }, renderShowContent()))));
};
react_dom_1.default.render(react_1.default.createElement(react_1.default.Fragment, null,
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


/***/ }),

/***/ "./src/utils/hooks/base-store.ts":
/*!***************************************!*\
  !*** ./src/utils/hooks/base-store.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseStore {
    use() { }
    ;
}
exports.default = BaseStore;


/***/ }),

/***/ "./src/utils/hooks/use-mount.ts":
/*!**************************************!*\
  !*** ./src/utils/hooks/use-mount.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const UseMount = (fn) => {
    if (typeof fn !== 'function') {
        throw new Error(`fn is not a function, is ${typeof fn}`);
    }
    react_1.useEffect(() => {
        fn();
    }, []);
};
exports.default = UseMount;


/***/ }),

/***/ "./src/utils/hooks/use-store.ts":
/*!**************************************!*\
  !*** ./src/utils/hooks/use-store.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * 用于初始化Store
 * @param createStoreFn
 * @returns Object
 */
const useStore = (createStoreFn) => {
    const store = react_1.useMemo(() => createStoreFn(), []);
    store === null || store === void 0 ? void 0 : store.use();
    return store;
};
exports.default = useStore;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlLWluZm8vc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3M/NTlkMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2ltYWdlcy9sb2FkaW5nLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2luZGV4Lmxlc3M/OTM4MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAubGVzcz8xMWMxIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VybF9tb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ob29rcy9iYXNlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ob29rcy91c2UtbW91bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL3VzZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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LG1EQUFtRDtBQUM1RCxTQUFTLHVEQUF1RDtBQUNoRTtBQUNBO0FBQ0EsOENBQThDLHVCQUF1QjtBQUNyRSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0xBQWtMO0FBQzNPLCtEQUErRCw2Q0FBNkM7QUFDNUcsdURBQXVELGdDQUFnQztBQUN2RixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0RBQWtELGFBQWE7QUFDL0QsOENBQThDLHlCQUF5QjtBQUN2RSxrREFBa0QsaUNBQWlDO0FBQ25GLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQjtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X19wYWdlSW5mb1Jvb3RfXzFpZThBIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmluZGV4X19wYWdlSW5mb1Jvd19fZFpwdUwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmluZGV4X19wYWdlSW5mb1Jvd0hlYWRlcl9fMnpHMXYge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pbmRleF9fcGFnZUluZm9WYWx1ZV9fSVFrOEkge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uaW5kZXhfX3BhZ2VUaXRsZV9fMVFBUkMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlSW5mb1Jvb3RcIjogXCJpbmRleF9fcGFnZUluZm9Sb290X18xaWU4QVwiLFxuXHRcInBhZ2VJbmZvUm93XCI6IFwiaW5kZXhfX3BhZ2VJbmZvUm93X19kWnB1TFwiLFxuXHRcInBhZ2VJbmZvUm93SGVhZGVyXCI6IFwiaW5kZXhfX3BhZ2VJbmZvUm93SGVhZGVyX18yekcxdlwiLFxuXHRcInBhZ2VJbmZvVmFsdWVcIjogXCJpbmRleF9fcGFnZUluZm9WYWx1ZV9fSVFrOElcIixcblx0XCJwYWdlVGl0bGVcIjogXCJpbmRleF9fcGFnZVRpdGxlX18xUUFSQ1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X19oZWFkZXJfXzM2YU1iIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5pbmRleF9fbW9kZUl0ZW1fX3ZkS3AzIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmluZGV4X19tb2RlQ29udGFpbmVyX18xSEhrNiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJpbmRleF9faGVhZGVyX18zNmFNYlwiLFxuXHRcIm1vZGVJdGVtXCI6IFwiaW5kZXhfX21vZGVJdGVtX192ZEtwM1wiLFxuXHRcIm1vZGVDb250YWluZXJcIjogXCJpbmRleF9fbW9kZUNvbnRhaW5lcl9fMUhIazZcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9fdmlkZW9Gb3JtX18ySmxCeSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4uaW5kZXhfX2Zvcm1JdGVtX18yNTRYRiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmluZGV4X19mb3JtSW5wdXRfXzJobE9KIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YTZlZTA7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG91dGxpbmUtY29sb3I6ICM0YjYyYzU7XFxufVxcbi5pbmRleF9fZm9ybUxhYmVsX19pcGJXcSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmluZGV4X19mb3JtU3VibWl0X18xQmlSdSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA5NiU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE2ZWUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjNGE2ZWUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1LmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1OmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbi5pbmRleF9fdmlkZW9fXzJ3azF0IHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uaW5kZXhfX3BhZ2VUaXRsZV9fQ0V1Q2cge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1Jvd19fM2JnbWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmluZGV4X192aWRlb0luZm9Sb3dIZWFkZXJfXzE4Umk3IHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1ZhbHVlX18xLXJoZiB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5pbmRleF9fbG9hZGluZ0ljb25fXzFJenVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMTAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2IoMCAwIDAlKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiKDAgMCAwJSk7XFxufVxcbi5pbmRleF9fbG9hZGluZ0ljb25fXzFJenVsIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ2JTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmluZGV4X19sb2FkaW5nVGlwc19fM1IweUYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxNiU7XFxuICBsZWZ0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLmluZGV4X192aWRlb0ZpcnN0RnJhbWVfXzFtdFFIIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLmluZGV4X192aWRlb0ZpcnN0RnJhbWVJbWFnZV9fMm8zY0Yge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5pbmRleF9fZG93bmxvYWRJbWFnZV9fMnVVNXEge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE2ZWUwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlkZW9Gb3JtXCI6IFwiaW5kZXhfX3ZpZGVvRm9ybV9fMkpsQnlcIixcblx0XCJmb3JtSXRlbVwiOiBcImluZGV4X19mb3JtSXRlbV9fMjU0WEZcIixcblx0XCJmb3JtSW5wdXRcIjogXCJpbmRleF9fZm9ybUlucHV0X18yaGxPSlwiLFxuXHRcImZvcm1MYWJlbFwiOiBcImluZGV4X19mb3JtTGFiZWxfX2lwYldxXCIsXG5cdFwiZm9ybVN1Ym1pdFwiOiBcImluZGV4X19mb3JtU3VibWl0X18xQmlSdVwiLFxuXHRcInZpZGVvXCI6IFwiaW5kZXhfX3ZpZGVvX18yd2sxdFwiLFxuXHRcInBhZ2VUaXRsZVwiOiBcImluZGV4X19wYWdlVGl0bGVfX0NFdUNnXCIsXG5cdFwidmlkZW9JbmZvUm93XCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1Jvd19fM2JnbWRcIixcblx0XCJ2aWRlb0luZm9Sb3dIZWFkZXJcIjogXCJpbmRleF9fdmlkZW9JbmZvUm93SGVhZGVyX18xOFJpN1wiLFxuXHRcInZpZGVvSW5mb1ZhbHVlXCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1ZhbHVlX18xLXJoZlwiLFxuXHRcImxvYWRpbmdJY29uXCI6IFwiaW5kZXhfX2xvYWRpbmdJY29uX18xSXp1bFwiLFxuXHRcImxvYWRpbmdUaXBzXCI6IFwiaW5kZXhfX2xvYWRpbmdUaXBzX18zUjB5RlwiLFxuXHRcInZpZGVvRmlyc3RGcmFtZVwiOiBcImluZGV4X192aWRlb0ZpcnN0RnJhbWVfXzFtdFFIXCIsXG5cdFwidmlkZW9GaXJzdEZyYW1lSW1hZ2VcIjogXCJpbmRleF9fdmlkZW9GaXJzdEZyYW1lSW1hZ2VfXzJvM2NGXCIsXG5cdFwiZG93bmxvYWRJbWFnZVwiOiBcImluZGV4X19kb3dubG9hZEltYWdlX18ydVU1cVwiXG59OyIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1hZ2VzL2JnLnBuZ1wiKSkgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzBlMTAxYTtcXG59XFxuLnBvcHVwX19yb290X18xZEZzZyB7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbn1cXG4ucG9wdXBfX25hdkNvbnRhaW5lcl9fY1AzdW8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjY2NjO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguZGlzYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmYTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcge1xcbiAgY29sb3I6ICM0YTZlZTA7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3LFxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SWNvbl9fM3loRWQge1xcbiAgY29sb3I6ICM0YTZlZTA7XFxufVxcbi5wb3B1cF9fbmF2SWNvbl9fM3loRWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzVmNTY1MTtcXG59XFxuLnBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPciB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKuWumuS5iea7muWKqOadoemrmOWuveWPiuiDjOaZryDpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xcbn1cXG4ucG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicG9wdXBfX3Jvb3RfXzFkRnNnXCIsXG5cdFwibmF2Q29udGFpbmVyXCI6IFwicG9wdXBfX25hdkNvbnRhaW5lcl9fY1AzdW9cIixcblx0XCJuYXZJdGVtXCI6IFwicG9wdXBfX25hdkl0ZW1fXzlyc2VYXCIsXG5cdFwibmF2SXRlbU5hbWVcIjogXCJwb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3XCIsXG5cdFwibmF2SWNvblwiOiBcInBvcHVwX19uYXZJY29uX18zeWhFZFwiLFxuXHRcInNob3dDb250YWluZXJcIjogXCJwb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3JcIlxufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgbW9ieF9yZWFjdF8xID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7XHJcbmNvbnN0IHVzZV9zdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9ob29rcy91c2Utc3RvcmVcIikpO1xyXG5jb25zdCBzdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0b3JlXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgUGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZV9zdG9yZV8xLmRlZmF1bHQoKCkgPT4gbmV3IHN0b3JlXzEuZGVmYXVsdCgpKTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgICAgICAgICAgc3RvcmUuc2V0Q3VycmVudFVybCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgIHN0b3JlLnNldEN1cnJlbnRUaXRsZSh0YWJzWzBdLnRpdGxlKTtcclxuICAgICAgICAgICAgY29uc3QgYmcgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XHJcbiAgICAgICAgICAgIHN0b3JlLnNldEN1cnJlbnRLZXl3b3JkcygoX2IgPSAoX2EgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iua2V5d29yZCk7XHJcbiAgICAgICAgICAgIHN0b3JlLnNldEN1cnJlbnREZXNjcmlwdGlvbigoX2QgPSAoX2MgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzdG9yZS5zZXRDdXJyZW50QXV0aG9yKChfZiA9IChfZSA9IGJnID09PSBudWxsIHx8IGJnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZy50ZXN0MSgpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFnZUluZm8pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5hdXRob3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb290IH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlVGl0bGUgfSwgXCJcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NEZFMVxcdTYwNkZcXHVGRjFBXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcInVybCAvIFxcdTVGNTNcXHU1MjREXFx1OTg3NVxcdTk3NjJcXHU1NzMwXFx1NTc0MFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIHN0b3JlLmN1cnJlbnRVcmwpKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJ0aXRsZSAvIFxcdTY4MDdcXHU5ODk4XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgc3RvcmUuY3VycmVudFRpdGxlKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwia2V5d29yZCAvIFxcdTUxNzNcXHU5NTJFXFx1NUI1N1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIHN0b3JlLmN1cnJlbnRLZXl3b3JkKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiZGVzY3JpcHRpb24gLyBcXHU2M0NGXFx1OEZGMFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIHN0b3JlLmN1cnJlbnREZXNjcmlwdGlvbikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImF1dGhvciAvIFxcdTRGNUNcXHU4MDA1XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSwgc3RvcmUuY3VycmVudEF1dGhvcikpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbW9ieF9yZWFjdF8xLm9ic2VydmVyKFBhZ2VJbmZvKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbW9ieF8xID0gcmVxdWlyZShcIm1vYnhcIik7XHJcbmNvbnN0IGJhc2Vfc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvaG9va3MvYmFzZS1zdG9yZVwiKSk7XHJcbmNsYXNzIFBhZ2VJbmZvU3RvcmUgZXh0ZW5kcyBiYXNlX3N0b3JlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+WJjemhtemdoueahOWcsOWdgFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i55qE5YWz6ZSu6K+NXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXJyZW50S2V5d29yZCA9ICcnO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+WJjemhtemdoueahOaPj+i/sOaWh+ahiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VycmVudERlc2NyaXB0aW9uID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i55qE5L2c6ICFXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXV0aG9yID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i55qE5qCH6aKYXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGl0bGUgPSAnJztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN6aG16Z2i55qEdXJsXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnJlbnRVcmwodXJsKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gdXJsO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3pobXpnaLnmoR0aXRsZVxyXG4gICAgICogQHBhcmFtIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnJlbnRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjemhtemdoueahOWFs+mUruWtl1xyXG4gICAgICogQHBhcmFtIGtleXdvcmRzXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnJlbnRLZXl3b3JkcyhrZXl3b3Jkcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEtleXdvcmQgPSBrZXl3b3JkcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN6aG16Z2i55qEYXV0aG9yXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnJlbnRBdXRob3IoYXV0aG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXV0aG9yID0gYXV0aG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpobXpnaLnmoTmj4/ov7BcclxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgdXNlKCkge1xyXG4gICAgICAgIHN1cGVyLnVzZSgpO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudFVybFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnRLZXl3b3JkXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudERlc2NyaXB0aW9uXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudEF1dGhvclwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnRUaXRsZVwiLCB2b2lkIDApO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQYWdlSW5mb1N0b3JlO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgdXJsX21vZGVfMSA9IHJlcXVpcmUoXCIuLi8uLi91cmxfbW9kZVwiKTtcclxuY29uc3QgbW9ieF9yZWFjdF8xID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7XHJcbmNvbnN0IHVzZV9zdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9ob29rcy91c2Utc3RvcmVcIikpO1xyXG5jb25zdCBzdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0b3JlXCIpKTtcclxuY29uc3QgY2xhc3NuYW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVXJsTW9kZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZV9zdG9yZV8xLmRlZmF1bHQoKCkgPT4gbmV3IHN0b3JlXzEuZGVmYXVsdCgpKTtcclxuICAgIC8qKlxyXG4gICAgICog5riy5p+T5qih5byP55qE6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlbmRlck1vZGVJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVybF9tb2RlXzEuVXJsTW9kZSkubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHN0b3JlLmFjdGl2ZUluZGV4LmluZGV4T2YodXJsX21vZGVfMS5VcmxNb2RlW2ldKSA+IDA7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoc3R5bGVzLm1vZGVJdGVtLCBpc0FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlSXRlbSksIG9uQ2xpY2s6ICgpID0+IHN0b3JlLm9uSXRlbUNsaWNrKHVybF9tb2RlXzEuVXJsTW9kZVtpXSkgfSwgdXJsX21vZGVfMS5VcmxNb2RlW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm9vdCB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuaGVhZGVyIH0sIFwiXFx1OEMwM1xcdThCRDVcXHU2QTIxXFx1NUYwRlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1vZGVDb250YWluZXIgfSwgcmVuZGVyTW9kZUl0ZW0oKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBtb2J4X3JlYWN0XzEub2JzZXJ2ZXIoVXJsTW9kZXMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2J4XzEgPSByZXF1aXJlKFwibW9ieFwiKTtcclxuY29uc3QgdXNlX21vdW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2hvb2tzL3VzZS1tb3VudFwiKSk7XHJcbmNvbnN0IHVybF9tb2RlXzEgPSByZXF1aXJlKFwiLi4vLi4vdXJsX21vZGVcIik7XHJcbmNsYXNzIFVybE1vZGVzU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i5Zyw5Z2AXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1cnJlbnRVUkwgPSAnJztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZPliY3mqKHlvI9cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54K55Ye75YiH5o2i5qih5byPXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrID0gKG1vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIER1cGxpY2F0ZWRDb2RlXHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhYklkID0gTnVtYmVyKHRhYnNbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBTdHJpbmcodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1VybCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGN1cnJlbnRVcmw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSAoX2EgPSBsaW5rLnNlYXJjaCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KFwiP1wiKVsxXTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VhcmNoIC8q5LiN5a2Y5Zyoc2VhcmNo6YOo5YiGKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bW9kZX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5a2Y5Zyoc2VhcmNoKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YobW9kZSkgPiAtMSAvKuW9k+WJjeW3suWtmOWcqOmAieS4reeahG1vZGXvvIzliJnnm7TmjqXljrvpmaTov5nkuKrmqKHlvI8qLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZignPycgKyBtb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnPycgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKCcmJyArIG1vZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlYXJjaCA9ICc/JyArIHNlYXJjaC5yZXBsYWNlKCcmJyArIG1vZGUsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgJHtuZXdTZWFyY2h9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWFyY2ggPSBzZWFyY2ggKyAnJicgKyBtb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bmV3U2VhcmNofWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKE51bWJlcihjdXJyZW50VGFiSWQpLCB7IHVybDogbmV3VXJsIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5mcmVzaE1vZGVTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1cmxfbW9kZV8xLlVybE1vZGUpLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFic1swXS51cmwgJiYgdGFic1swXS51cmwuaW5kZXhPZih1cmxfbW9kZV8xLlVybE1vZGVbaXRlbV0pID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXgucHVzaCh1cmxfbW9kZV8xLlVybE1vZGVbaXRlbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdXNlKCkge1xyXG4gICAgICAgIHVzZV9tb3VudF8xLmRlZmF1bHQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZyZXNoTW9kZVN0YXR1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgVXJsTW9kZXNTdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudFVSTFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFVybE1vZGVzU3RvcmUucHJvdG90eXBlLCBcImFjdGl2ZUluZGV4XCIsIHZvaWQgMCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVybE1vZGVzU3RvcmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhHQUFZQU1RQUFKelcvTlR1L1BUNi9MVHUvTlQrL0x6Ni9MemkvT1QrL0t6bS9PVDIvUHorL016dS9OejYvS1RlL056eS9QVCsvTHp5L01UKy9OeisvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUpCUUFUQUN3QUFBQUFHQUFZQUFBRm5PQWtqbVJwamtxcXJteXJUZ29NeDJvUXZPazgwN2hpQUFDRDYwVVNPQVF3SURCMkV0RUVqYWpBQnhTbUhyeGR5Z0ZvQUJ5cHdHS3FlRWl3SzlrRUtqMlZtU1RhK3BpclorM0RmRXVXV0NTYWdFNEtDSVFQT25ZekVuZ0NoQWhvZW1kRUUzMEhnWUJ5aUpsM2VweVNJZ3dRZjI0SGNDZ3lFQU1RbWdjUmxYZ3FDUkFNS2dlenRIdVhCUVdsYmpKNHRUMkhuWjJXeFU2K204S0hJUUFoK1FRSkJRQVhBQ3dBQUFBQUdBQVlBSVNjMXZ6Yzh2eTA4dnowK3Z5ODV2eXM0dnpjK3Z6RTh2enMrdnlrM3Z5azJ2eTgrdnlzNnZ6ayt2ek0vdnljMnZ6azl2eTg4dno4L3Z5czV2ek04dnpzL3Z6ay92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZuZUFsam1ScGpsS3FybXlyWGhJTXgyb1F2T2s4MDdoRUFBQ0M2MFdTM0VRS29PSlVoQTBLaWNMQUJ4UktEQWVEamdWSmVHOUdzT1FnaUxCa2wrZERlbXBFR2laYUdqTGxiZTNEL0ZDR0NFQ1lnQ0lwRTRSNGhnWTVLeE1NRTNvcUZuVXhJZ2dVQ0lHQWNvbUdkenVPamlVTkIzQW5FaFdTVFRGa0I1b3pGUTRWZHl1aERZOFdLNlpubUFzTHAweVpQS1cyckpxZW41ZkhNcHZEZUNFQUlma0VDUVVBR0FBc0FBQUFBQmdBR0FDRWxOTDh6T3I4ck9yODdQYjh0T2I4elBiOHBONzh2UGI4NVBiOC9QNzhuTnI4eE9yODdQNzh6UDc4ck9iOG5OTDgzUEw4dE83ODdQcjh4T2I4MVBiOHBPTDh4UDc4NVA3OC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmFNZ0pvNWthWTVKcXE1c3EySUpETWNxaEx6cFBOTjRNaW1LaWV0RlN0eEVCcUJCTkFnTVREeUhOUFVMSmdhQUIyQ1FZeUVNRlFNM1lVc0Zzb0RBU2dZakdBaXhFa0s3TGRGZ3R5NnYrZFFQL3kweUVoQVNKNFpGQ1FRUmNEcDZNeGQrQ1JFQ0VZQXFrRVFZZ3d5SG5YZU9vRHc3bHBZbEVnV0ZKNWtvTWdVUkJhRU1EWnlSS2FjTUtneTR1WUdIQ1JZV2NiNHlqaEswb3JXa1E1M01SY1RJMEkwaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKVFMvTXpxL096Mi9Lem0vTXorL0tUZS9OejIvUHorL0x6Mi9KemEvT3orL0x6dS9KelMvTFR1L05UNi9PVCsvT3o2L0xUcS9LemkvT1QyL1BUKy9KelcvTlQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbTRDV09aR21PUjZxdWJLdGVCd3pINmpTOTZUelQrQkVraVlEclJUcEFZaGRKb1NBUkNRSUNFeThpaWFSK3djT0VBV0RjZUNyQllDeEkyYTdjaWhBbk9sQ3RwbTEzVXFMQnlybjg0VW5YRC84dE1oUUdGQ2VHUlJjTEVRczhPbm9QRkdBSEN3Mk1nQ21RUkJlRGhZZUhkbnFPalg2WGx5VVVEaENHQjVGU01nNElCS0VwRkJhRnBDa1FxU29VQ2l1UkxKNEhCTEtlTXFNeENncWlvcVdteHRESHpMT2pJUUFoK1FRSkJRQVhBQ3dBQUFBQUdBQVlBSVNjMXZ6VSt2eTA3dnpzOXZ5OCt2eTg2dnpFOHZ5czV2ems5dno4L3Z5ODd2ejAvdnpFOXZ5MDR2eWszdnpVL3Z5MDh2ejArdnpNL3Z6TTZ2ek03dnprK3Z5MDV2ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZxdUFsam1ScGprbXFybXlyWGdrTXgrcUF2T2s4MDNoQ09RNks2MFZLUkdLWEJyQWhHa3dHSmw3aG9Fajlnb2tCWUR2SXNTS0g4REY3UzB5MmdNbEtCbE5Ra1NUdEZsR2l3Y2E4R1dKQzl3Ny9MaklKTnlkMWhDZ1hCZ0lHZVg0d0JoQU1QQ21LVllBSkRBcVNPU0lMQ0F1RlJSVndnanFPcDVPWGx5VUxBUkdGQ1F1a0luWUJEQStvQ3crZ2ZpdXRzaWtMd01FdG9TSVNFc2EwZ25uQ3BvMnFxc3JUeTlEUDF3a2hBQ0g1QkFrRkFCVUFMQUFBQUFBWUFCZ0FoSlRTL05UdS9LenEvT3oyL0xUZS9LVGkvTlQrL0x6Ni9KemEvTHpxL1B6Ky9KelMvTXoyL1BUKy9OVHkvTFR5L096Ni9Mem0vTnorL01UdS9KelcvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV29ZQ1dPWkdtT1NxcXViS3RXQ2d6SEtnUzk2VHpUdUJJVUJJZnJSU0pHQ29XSWFCQVltSGdUd1NUbFFBb0hGQXBpa0dzSnZxb0cxNWVsQkZZeVdIUnFHaUFRRkdkUnh0S2xtTTd1Y08raWMwOUZCQXNFTVNJeERBOE1QSFl4QVFBQUN3RTdDb2lLZkFFTGoyZUZNSCtBaG9LRUtIU0xlcE04ZktrNUpBMFNuQ1VLRGErR01oSUhycVd4RWcyTUxMdGhzbUV0bnlJR0VzUzB1UlVOdktaNnFxbkkwc21NMWM0aEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXp5L096Ni9LenEvTlQ2L0t6bS9QeisvTHoyL0tUYS9OejIvUFQ2L09UKy9KemEvTlQyL01UdS9OeisvSnpXL05UdS9PeisvTFRxL05UKy9MVGkvTVQrL1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXcklDYU9aR21PUnFxdWJLdGlCZ3pIS2FZb2MxNi82NXdVaFlUclJTSTZnQk9SSW9JcjBReU5RU0QxQ3hvVUNBaENzR01OSmhPVmdtdUlNQkNNU0M4R2F4U21KZ1hqTEhES1p0M1pFdGNkK2xzeVYyd25JZ1lWRUJXRE1RMEhjSGsxRVFDU0VYaFFCd1IvWlJBQUVHcUtFb09FaGdBVlRZRTZUNmc4bVM0S0xFNExvVVUxZGpFTEI3R3BLUmNVRjZvckR5c1hMTU92aENJUEZNY29nYW5EcUwrc2ZzdlVSYzNRanpRaEFDSDVCQWtGQUJRQUxBQUFBQUFZQUJnQWhKelcvTlR1L1BUNi9MVHUvTlQrL0x6aS9Lem0vT1QyL01UKy9PVCsvS1RlL05UMi9QeisvTXp1L056Ni9KemEvTnp5L1BUKy9MejIvTnorL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXZ0lDV09aR21PVEtxdWJLdFNEQXpIS1N6TWVQMnU4MkVZQjllckZCTTFmZzJSQUhJanloeURSY29IWkFnVVdJR09OZWlxSXBFVTVQRlFRSGhGU21BUU9GMnp6aUp0UGxzZWNzSzhTMlpObjJBRkFBVnBNUTRTRG5SYmFnQ01iU3VHQkhvTUFZd0FBVFVpREdGL0tJRUZUWHg0b2l3emtxWkVDWDRrbXFxaENRaXBpWm9URVhnc3NWOHJZYVNjRkJNVHZabDhpYldLVzZhU3djckNzcU9KSVFBaCtRUUpCUUFZQUN3QUFBQUFHQUFZQUlTYzF2emM4dnkwN3Z6MCt2eTg1dnlzNHZ6Yyt2eTgrdnpFOXZ6cyt2eWszdnlrMnZ5ODh2eXM2dnprK3Z5YzJ2ems5dnkwOHZ6OC92eXM1dnpNL3Z6TTh2enMvdnprL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGb0NBbWptUnBqbEtxcm15clloSU14K2xzMTNpZUo5T1V1SytUcURKcFZFUVN5TUJFd3hnWWdWU0M0Sk1NQ292Q1FLZGlDQmlxYlFyeVVDaWlyNWdJd2pDY3JncHRxU25MelFiS0czRHZxdGVFU0FRTEJHb3lEZ2NPTklvMkFRQ09BVE1wQmdjR2ZCS05qMytSZ0lHRGhVMTJvWXVXcEpwSUZvVWxFQWdRVERJV0ZLaWpFZ2dSQ0hvc3NpNEJDSlVybkU0WHdIVjZ4YUtsZk1QS29MUEdOQ0VBSWZrRUNRVUFHZ0FzQUFBQUFCZ0FHQUNFbE5MOHpPcjhyT3I4N1BiOHRPYjgxUGI4dlByOHBONzh4T3I4NVBiOHRQTDgvUDc4bk5yOHRPcjg3UDc4ck9iODVQNzhuTkw4M1BMODdQcjh4T2I4elA3OHBPTDh4UEw4NVByOHRPNzgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFCYWFnSm81a2FZNUxxcTVzcTJvTERNZnBiTmQ0bms5Tk03bXZrMGdpeUJSRWkwR3NSTk5nTHBpVW8vZGJQQTZFVit1aXVMZ0dCNHNsc1pLSm5waVQxWkpsbW1udzJZSjhBOXBkc3FBUVJqbFFsaklZQmc1eE9Sb1NESWtKY2dzT0JoQjNDNGlKRWpWSWxuc0xmWDhvZVlXZmRaRXJBd0ZLWlNSNkpBTUFyQU51TVE0VmhJVUJBQkVBQVRvcnN5MnJ0NmFZUWhBUUl3bWxKazJHeXAraWtYdlB5SjUxMHpnaEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXpxL0xUcS9PejIvS1RlL016Mi9MejIvUHorL056Mi9KemEvT3orL0t6bS9KelMvTHp1L0t6ZS9PVCsvTFR1L096Ni9OVCsvTVQrL09UMi9QVCsvSnpXL0t6aS9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbElDYU9aR21PUjZxdWJLdGlCd3pINld6WGVKNVhUVk81cjVNSUlSQWdSSWRCckVURFJBcVJGTStYRWx3RXIxYkJVSEFOTG90Rk5EdDZQazRIQVFITGxNbHlzMFAwQnF5NzNFc2hNdUFJNUdNS0V3bzBoRFlVQ1FRSkZIRUhnWU4yaDRrVU5TaDZLSHgrbFlWd25JUjJMQU1CU2l0TVB5Y0RBQXdBQTIweEZSS1BOd0dwQUg2ZUs0OHRBNm9XbzVSNkQyY2lGS0ltVFhDbW5ZeWZkcGJPSk1lYjBqY2hBQ0g1QkFrRkFCWUFMQUFBQUFBWUFCZ0FoSnpXL05UNi9MVHUvT3oyL016Ky9NVHkvTXpxL1B6Ky9Lem0vT1QyL0x6Mi9PeisvTHp1L01UMi9LVGUvTlQrL0xUeS9QVDYvTXp1L0xUaS9PVDYvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV29vQ1dPWkdtT1I2cXViS3RhQnd6SDZXelhlSzRYUmVTK0oxRkNJS0NJRGo0VHpWSWgrQTRWWGlYRlFEQmVyWUNDNElvZ3ZrL2NLT0k4SGFyWDBsS1dteUZwOEorOEphc0hqNGFKSkhaa0VoWndOekVERG9VSmJnY0xmM01IQ1lVT0NUVW9keWdTZW54c2dwcHRqQzBEQmdNc2FsTW5Bd0NuQTJveUZROVRnUWNHcHdBR09pdXVLUTBOS2FhbmtVQkJGQkFLaHhZSkJzUWtTenNGV0srZG5aVFJ5V3pPbXpRaEFDSDVCQWtGQUJVQUxBQUFBQUFZQUJnQWhKVFMvTlR1L0t6cS9PejIvTFRlL016Ky9LVGkvTHo2L1B6Ky9KemEvTXoyL01UdS9QVCsvTHptL05UNi9KelcvTlR5L0xUeS9PejYvS3ptL05UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbFlDV09aR21PU0txdWJLdFdDQXpINld6WGVLNHJpcnVlSTBra01oQzlTclFLdzhGUThWU0x5ZUxWY2h3Y3ZzbEV3SktKbGpFVElqcEZlbW5vR1JYdGE3ZThRR1NnQVFuTEdJWG1MUzJaR0NaRkszaE5iZ01HaHhJMWNTY0ljM1VvTWpsN2syNHVBd0VEWFNRSWVpWURENkJGbTNjVWhJMEJLUUVQQ1Ftb2JJSXFCQUFQQkFnRENhRS9RQWdQQUxNeGw2S2phU2tFdmJYRXJ6NEJybTJMejhPVXlUY2hBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSnpXL05UdS9LenEvT3o2L01UcS9OVDYvS3ptL1B6Ky9MejIvUFQ2L0tUYS9OVDIvTXp5L056Ky9KemEvTFRxL096Ky9NVHUvTlQrL0xUaS9MejYvUFQrL056Mi9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2k0Q1dPWkdtT1I2cXViS3RlQnd6SDZXelhlSzR2aGJ1ZW93RUNNUkM5U3JSTHBWRlJMUmdxeGdPcVV6VW9EZDlEOEdESmpOblRRUXBGZm1ubzJhdnFhLzlpd0pPRllDSEZLcExtTFowdytCTnFCMHROYm4xK0F6VnhRSE4xS0RJNWU1RnVMZ2tCQ1Y1MmVpWUpEZzRLUlhZeWd5b0JBU2tCbmc2bWFDeUVCeE1BQUJNSENRQ2VpRWRpc2JHQWxhQ2hhU213QUFxUWJDMlZsbTZLek1DU3djRWhBQ0g1QkFrRkFCUUFMQUFBQUFBWUFCZ0FoSnpXL05UdS9QVDYvTFR1L05UKy9MemkvS3ptL09UMi9NVCsvT1QrL0tUZS9OVDIvUHorL016dS9OejYvSnphL056eS9QVCsvTHoyL056Ky9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2NJQ1dPWkdtT1RLcXViS3RTREF6SDZXelhlSzQ3anJ1ZW80aEVFa0dkYUxESmlxZHlEQUkzVmdLaGRBMnVMSm1JMFFNR25pYWtMQmVOK3M0dExkQjBhQnhJc2Nna1FxdmZEUGdpYTQ1bUNQQUdkREZyUUcxdlJuWmtpblY5S3dJUUFsbHdkQ2NDQ2c4S0FpVkljb0lNQVFFcEVBcVhFRG9ybmdVQUFBVitsNWsvUUF5cnF6R1BtcHRqZGFxc2l6Tm9EUUdSWjRURmNMcGx2Z3doQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEp6Vy9OenkvTFR1L1BUNi9Mem0vS3ppL056Ni9MejYvTVQyL096Ni9LVGUvT1Q2L0tUYS9MenkvS3pxL0p6YS9PVDIvTFR5L1B6Ky9Lem0vTnorL01UKy9NenkvT1QrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdqSUNhT1pHbU9VcXF1Ykt0aUVnekg2V3pYZUs0dmxMdWVxTU1oQmhUUllKZlZ3cUF5TkFJMzFxV1NkRFVFRFpiTW1DQ2FBZzJENlNqTFJhTytkR3RiTENVQ0VCS3RSNnZmSmhOSFBUV2dETlFwZVJNdmJTY0pGZ2x5WlhabWpZQXNBeEIvUHlRTERYRW1Bd1VNQlFNbFJ3ME5ReWtCQVNrUUNxbW1leXFXRUNrRUFBQUVFcG9QblpSQURMSU1JcEdlbjRzenNRKzBqS3crcFlDRnpFYkNqbWNTSVFBaCtRUUpCUUFaQUN3QUFBQUFHQUFZQUlTVTB2ek02dnlzNnZ6czl2eTA1dnpVOXZ5azN2eTgrdnpFNnZ6azl2ejgvdnljMnZ5MDh2enMvdnlzNXZ6ay92eWMwdnpjOHZ5MDd2enMrdnpFNXZ6TS92eWs0dnpFOHZ6ayt2ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcDJBbWptUnBqa3Fxcm15clpnb014K2xzMTNpdVk0KzducWpESVFZVTBXQ05WYU9Yd2x3d04xYWprblJkR0JlV3pKZ0VPcUdsb3l3WGpmck9yVzJ4TklsTVNEUm1HVWNRU0dnckpsb2hrUkJlYXlkdERYQmplSE9ITFFNQkEyZU5XaU1KQUpNREpnb09CZzVFS0RBQkVBQVFBU2tSRVNrSkJoWVdDVG9wQTZBQWpSUUxDeFFwQkJaL1B5U0xDU0lHQmdzR1JxdVdoak95dEdTc1BoR3JhSUhRUnNiS2lUUWhBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016cS9MVHEvT3oyL0tUZS9NejIvTHoyL1B6Ky9OejIvSnphL096Ky9Lem0vSnpTL0x6dS9LemUvT1QrL0xUdS9PejYvTXorL01UKy9PVDIvUFQrL0p6Vy9LemkvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2xJQ2FPWkdtT1I2cXViS3RpQnd6SDZXelhlSjVqaXVLdUo5UmtFZ3VLYURCZnJUZUxGQ0kzVmtWUytSVU1CWmJzNkFzNkh5YWtiRWVtL2M2dXJiRlVRVlJJdEVjMWVtc0lHbWFWSEoxcVFQQTFheWR0YnloalpuUmxLd01CQTJlT1dpTURBQXdBQTJFQ0Z3SkZoZ2NCQUJZQUFTa1VGQ2tEQkFzWEVUcW5sUXltQVFrRW93Y0NDNXRBSkJTTklnNEpDUTVIckdHSE03SzBaVE5vcFh5Q3owZkd5bVFoQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEp6Vy9OVDYvTFR1L096Mi9NeisvTVR5L0x6cS9QeisvS3ptL09UMi9MejIvT3orL0x6dS9NVDIvS1RlL05UKy9MVHkvUFQ2L016dS9NenEvTFRpL09UNi9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdyNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2V3pYZUo1ZjF1S3VKeFNCRUF1S2FERExhN0dZV1FKTm5jcENVTG9DaWdCTGRsUUdGdzJMQ1NuYm1XbS90S3RjS1JvdmtZUmJWb0EwMERkYVFWQkFweG9LZldvSGU0SnVCMjF2SWhFVllpaGxlR2Q1S3dNVEEya1JMU1FEQUowRFl3WUlCbk5sRTUwQUV5a0RjZ2NSQ0s5V015cWNuWElTRGc0U0tRd0lERnNrQ1JNSkloUzRGRWVaWTVBekU3aTZrWDVwcTRPSzFVZkxrbVloQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEpUUy9OVHUvS3pxL096Mi9MVGUvTXorL0tUaS9KemEvTHo2L1B6Ky9PVDYvSnpTL016Mi9NVHUvUFQrL0x6bS9OVDYvTlR5L0xUeS9PejYvS3ptL0p6Vy9OVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdwNENXT1pHbU9TYXF1Ykt0ZUNRekg2V3pYZUo1Zmp1T3VKMUtoRUNUUllMNWFiK2FBT0c0c2h5WFpVaUFnTEprbzRRczJuNldqYkVlbS9jNnVHV0ZCaUJWaEEvYzJBRmdBQXRBYlE4SXdKd0oyZDJnSmUzMDFNR3R0YnpBS2NtTXZaWGt0QXdGeGcwQWpBeFdiQXlZSkRSUU5qbU1CRlFjVkFTa1RFeW9VcmtrektwcW5jUkVVQnFtZkFxS1ltWlVpRHdZR0QxdUhSbzh6RVFZVXVaS0RBNVpuaTlOYnlKRmtJUUFoK1FRSkJRQVdBQ3dBQUFBQUdBQVlBSVNVMHZ6TTh2eXM2dnpzK3Z5czV2elUrdnk4OXZ6OC92eWsydnowK3Z5YzJ2emM5dnpFNnZ6Yy92eWMxdnpVN3Z5MDh2enMvdnkwNHZ6VS92eTgrdnowL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZxYUFsam1ScGprZXFybXlyV2djTXgrbHMxM2llVzFYbHJpZlNwQkVrMFdDK1dtOVdhVlJ1ckdheXRhQTBXRExSd1JjOFhFMUgyVzVNKzVsZE00bERFaXZDRW0zdEErQUFQS0MzQXFSUVBzenJEMmNIZW53MU1Hb1NDVzV2Y1dJSGNIaGtNeXNKRDNDQ1FDTUpDQW9JQTJBUEFvRWxOQThPQ2c2akNZb3BBZ0lRTHl5Ym5RTUhDd1FFQ3ltaEFWZ2tBNVlpRExnTVdvWkdqak8zdVpLWUE3Vm5pOUpheWMxbE1DRUFJZmtFQ1FVQUZBQXNBQUFBQUJnQUdBQ0VuTmI4MU83ODlQcjh0Tzc4MVA3OHZPTDhyT2I4NVBiOHhQNzg1UDc4cE43ODFQYjgvUDc4ek83ODNQcjhuTnI4M1BMODlQNzh2UGI4M1A3OC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJhTWdKWTVrYVk1TXFxNXNxMUlNRE1mcGJOZDRuc09SdTU2a3lRUklvdkZldlJsalFtdXVJcE9lSzRGZy9tSWlSdkxFY0dDTE10bHU3UFNaV2JNQ29QQUZNZ1J0UmdCQUQ5eWFNSWZFcTV6WHoxMFNCQzh3YWdVQ1JGbHdZRmQ0WkVvcUFoQndnRDhqQWdvQUNvZ21FQU1RSmpRUUR3b1BFREZKS1FPckx5eVlDcHNNQndZR0J5a0JBd3RvSkpLY0RiUU5LRnhpVGJPMWo1VUNVbWFKell4MzBHTWhBQ0g1QkFrRkFCa0FMQUFBQUFBWUFCZ0FoSnpXL056eS9MVHUvUFQ2L0x6bS9OejYvS3ppL0x6Ni9NVDIvT3o2L0tUZS9PVDYvS1RhL09UMi9MenkvS3pxL0p6YS9OejIvTFR5L1B6Ky9OeisvS3ptL01UKy9NenkvT1QrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2dZQ2FPWkdtT1U2cXViS3RtRXd6SDZXelhlSjdEZzd1ZUpBb0ZTS0psRm9jR2JqQ2JZR2pRbFVQaThDVXN6MTlNMUVBc2dNNXRVU2JibWFPK05HdEdZQkRFNEJvcUFLZ0hibEFZc2hDbDI5VVRCUWNMTHpCdGIwUWloWXBsZVdkNEt3TU5QWUEvSXdNR0RBWk1KZzBPRVNZMERRcWtFWTRURGdJT2tDbVlwQ2tKRlFJSktRR2ZheVNTbkJjVkZSZUpaWGl4RmJTblRaVnF3TXFNeG84NElRQWgrUVFKQlFBWkFDd0FBQUFBR0FBWUFJU1UwdnpNNnZ5czZ2enM5dnkwNXZ6VTl2eWszdnk4K3Z6RTZ2ems5dno4L3Z5YzJ2eTA4dnpzL3Z5czV2emsvdnljMHZ6Yzh2eTA3dnpzK3Z6RTV2ek0vdnlrNHZ6RTh2emsrdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRm8yQW1qbVJwamtxcXJteXJaZ29NeCtsczEzaWV6KzVhRG9IQjZQRTRsV2dEQUFDU29Ea1ZEU2N2RlZnQ0FxNUc1Y0dTWlpKTG9VbkJIY3VBVGVsTzEydDNVeFFESldZVXZWQ0poVDV5VTA4T1pTb1JlZ3RwYlJnSFVUVXdjWE4xZG90Mk1tdHFsU3lHYmo0b0RnWUVkQ1VKRndsbUNna0duRTE5Rnd3WGZTc0VuU2tURXA0cEdCY1lYU1NsZEFVRUFnV1BrMzJ6RWhPVVU1bHV3c3lTbFgzUUNpRUFJZmtFQ1FVQUZ3QXNBQUFBQUJnQUdBQ0VsTkw4ek9yOHRPcjg3UGI4cE43OHpQYjh2UGI4L1A3ODNQYjg3UDc4ck9iOG5OTDh2Tzc4ck43ODVQNzh0Tzc4N1ByOHpQNzh4UDc4NVBiODlQNzhuTmI4ck9MOC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJhYmdKWTVrYVk1SHFxNXNxMTRIRE1mcGJOZDRucy91V2c2QndjamhPSlZvQThBQ01JaFJhS2tFbEpjS0xDc0JGeVVpOWNVdXlRcnpkSkNhYU9EQVpNZUc5dDZ0V2FDUk5aSytxQW1oUXBqY3BtVVNaaW9UZkFRSWNBY1FFZzR2TUFFV2RYWWllSlF5Ylg5L0xFMkpMSGNDRmdLVkl3TUZFR2N3QXhZS0JCQ0FCd1VQQlpvcUFncWlCeFFNREUrS3BwNTNUU0lJQWc4SWs1ZC91cnlZbmM3STBKYXZtV3doQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEp6Vy9OVDYvTFR1L096Mi9NeisvTVR5L0x6cS9QeisvS3ptL09UMi9MejIvT3orL0x6dS9NVDIvS1RlL05UKy9MVHkvUFQ2L016dS9NenEvTFRpL09UNi9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdtNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2V3pYZUs0WGpidVdnOGxBVkZGQUtpY1NiUUJvRGc2UlJtRmxvVmxWa3laZzRySVFxci9ZaGRsTW5BNVZFKzJTbUNSeU4rdk1SMi9OSkJSdVVsazZEQnlBWm5BNFhndFhDWUFPYjNVTEJJWTFNSGdTWW5zeWZIS0RtRmNyRVhVdVNnWUlCcFFrRVFFUmFqQVJDS3lkY1FFS0JIRXJEQWdNS2dVRllBTUJqeTlLcm13Q0FtYVZhemtXdVdCeGM1NmVsZENYekprM0lRQWgrUVFKQlFBV0FDd0FBQUFBR0FBWUFJU1UwdnpVN3Z5czZ2enM5dnkwM3Z6TS92eWs0dnk4K3Z5YzJ2eTg2dno4L3Z5YzB2ek05dnowL3Z6VSt2elU4dnkwOHZ6cyt2eXM1dnpFN3Z5YzF2elUvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnA2QWxqbVJwamtxcXJteXJXZ29NeDJvUXZPazgwN2hDQUFDQzYwVWFCQWF3eFFLd2lKMUV0QUdDUWhuNG1NSlVnN2RMQmFpSW04S21hbFMySzVsRlNrRWdUWW90WEdhMGNuTjQzbkRmbWdVU04wK0NNQTBHQkFZUk9ubUVCWElxQXdhUkVYeHhqVVFLRHdrUFRvTnpkNStLZXBTVUpBb1RFaE9jSkEwT0RaNEtFckdPUEE0TURxRXJwNmtwREF4bHJTd2xSQkVRRUcrQ05MaTlQYmlqZkozUVVES0wxSGNoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenkvS3pxL096Ni9OVDYvS3ptL0x6Ni9NVHEvUHorL0tUYS9OejIvUFQ2L0p6YS9OVDIvTFR5L056Ky9KelcvTlR1L0xUcS9PeisvTlQrL0xUaS9NVHUvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdtSUNhT1pHbU9TS3F1Ykt0aUNBekhhaFM5NlR6VE9GSUJrSXJyUlZwRUZqQUlBQmc3aVdpREJDTXg4Q21GcVF0dmw0b3d2amZqTWZ2UXJtU1loVFNCTkNHMGJ0a2dVdDNtN3J5aHZpVlRIQlJPZ1U4TEJZVkllRHB2RkhBcWhJVjFlaGVMUkJoK2dJSk9OSWwybkZ4N255UUlBUklCVFNVSUNoZHhLUklDRW9ncENnWVBteXNCQXFVcERRUXJaU3luT1JnVERnNXRnWnA0Q0xzOXRaK2dtTkF5bmJCMklRQTdcIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBWaWRlb0luZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmlkZW9VcmwsIHNldFZpZGVvVXJsXSA9IHJlYWN0XzEudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdmlkZW9TaXplLCBzZXRWaWRlb1NpemVdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTsgLy8g6YCa6L+HIFhIUiDnmoTlk43lupTlpLTnmoQgY29udGVudC1sZW5ndGgg6I635Y+W44CCIOWNleS9jToga2JcclxuICAgIGNvbnN0IFt2aWRlb1JhdGUsIHNldFZpZGVvUmF0ZV0gPSByZWFjdF8xLnVzZVN0YXRlKDApOyAvLyDpgJrov4cgdmlkZW/nu4Tku7Yg6I635Y+W6KeG6aKR55qE6ZW/5bqm44CCIOWNleS9jTog56eSXHJcbiAgICBjb25zdCBbdmlkZW9UaW1lLCBzZXRWaWRlb1RpbWVdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTsgLy8gdmlkZW8g5pe26Ze0XHJcbiAgICBjb25zdCBbdmlkZW9GaXJzdEZyYW1lSW1nLCBzZXRWaWRlb0ZpcnN0RnJhbWVJbWddID0gcmVhY3RfMS51c2VTdGF0ZSgnJyk7IC8vIOinhumikemmluW4p+WbvlxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gcmVhY3RfMS51c2VTdGF0ZShmYWxzZSk7IC8vIOivt+axgueKtuaAgVxyXG4gICAgY29uc3QgdmlkZW9GaXJzdEZyYW1lUmVmID0gcmVhY3RfMS51c2VSZWYobnVsbCk7IC8vIOeUqOS6juWtmOWCqHZpZGVv56ys5LiA5bin55qE5Zu+54mHXHJcbiAgICBjb25zdCBpc1ZpZGVvID0gKHBhdGgpID0+IHtcclxuICAgICAgICByZXR1cm4gL1xcLihtcDR8YXZpfHdtdnxtcGd8bXBlZ3xtb3Z8cm18cmFtfHN3ZnxmbHYpLy50ZXN0KHBhdGgpO1xyXG4gICAgfTtcclxuICAgIGxldCB2aWRlb0VsID0gcmVhY3RfMS51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBnZXRWaWRlb1VybCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmlkZW9VcmwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+HeGhy5Yib5bu65LiA5LiqZ2V06K+35rGCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWlzVmlkZW8odmlkZW9VcmwpIHx8IGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdnZXQnLCB2aWRlb1VybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgJiYgKHhoci5yZWFkeVN0YXRlID09PSAzIHx8IHhoci5yZWFkeVN0YXRlID09PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gKF9hID0gdGhpcy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRyaW0oKS5zcGxpdCgvW1xcclxcbl0rLyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyTWFwID0ge307XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW1N0cmluZyhoZWFkZXIpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRWaWRlb1NpemUoaGVhZGVyTWFwWydjb250ZW50LWxlbmd0aCddKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRWwuY3VycmVudCAmJiB2aWRlb0VsLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9EdXJhdGlvbiA9IGdldFZpZGVvRHVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvVGltZShOdW1iZXIodmlkZW9EdXJhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9EdXJhdGlvbiAmJiBzZXRWaWRlb1JhdGUoTWF0aC5mbG9vcihoZWFkZXJNYXBbJ2NvbnRlbnQtbGVuZ3RoJ10gLyAxMDAwICogOCAvIHZpZGVvRHVyYXRpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluinhumikeaXtumVv1xyXG4gICAgICovXHJcbiAgICBjb25zdCBnZXRWaWRlb0R1cmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2aWRlb0VsLmN1cnJlbnQgJiYgdmlkZW9FbC5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5pu05paw6aaW5bin55qE5Zu+54mHXHJcbiAgICAgKi9cclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRWaWRlb0ZpcnN0RnJhbWUoKTtcclxuICAgIH0sIFt2aWRlb1RpbWVdKTtcclxuICAgIC8qKlxyXG4gICAgICog6KeG6aKR55u45YWz5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHZpZGVvSW5mb0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlb0R1cmF0aW9uIC8gXFx1ODlDNlxcdTk4OTFcXHU2NUY2XFx1OTVGNFxcdTk1N0ZcXHU1RUE2XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodmlkZW9UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBzXCIpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW8gRGF0YSBSYXRlIC8gXFx1ODlDNlxcdTk4OTFcXHU3ODAxXFx1NzM4N1wiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1JhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIga2Jwc1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvIFNpemUgLyBcXHU4OUM2XFx1OTg5MVxcdTY1ODdcXHU0RUY2XFx1NTkyN1xcdTVDMEZcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9TaXplIC8gMTAwMCAqIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrYlwiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcIlxcdTk5OTZcXHU1RTI3XFx1NTZGRVxcdTcyNDdcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0ZpcnN0RnJhbWVJbWFnZSwgcmVmOiB2aWRlb0ZpcnN0RnJhbWVSZWYsIHNyYzogdmlkZW9GaXJzdEZyYW1lSW1nIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZG93bmxvYWRJbWFnZSwgb25DbGljazogZG93bmxvYWRJbWcgfSwgXCJcXHU1QkZDXFx1NTFGQVxcdTU2RkVcXHU3MjQ3XCIpKSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6KeG6aKR6aaW5bin5Zu+54mHXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldFZpZGVvRmlyc3RGcmFtZSA9ICgpID0+IHtcclxuICAgICAgICB2aWRlb0VsLmN1cnJlbnQub25sb2FkZWRkYXRhID0gKCgpID0+IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWNs+aXtuiOt+WPluWPr+iDveS8muiOt+WPluS4jeWIsOWvueW6lOeahOesrOS4gOW4p+WbvlxyXG4gICAgICAgICAgICAgKiDmlYXph4flj5borr7nva7kuIDkuKrml7bpl7TovoPnn63nmoTlrprml7blmajmnaXlrp7njrBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb0VsLmN1cnJlbnQudmlkZW9XaWR0aDtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlb0VsLmN1cnJlbnQudmlkZW9IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodmlkZW9FbC5jdXJyZW50LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9GaXJzdEZyYW1lSW1nKGltZyk7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOWvvOWHuuWbvueJh1xyXG4gICAgICovXHJcbiAgICBjb25zdCBkb3dubG9hZEltZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBhLmRvd25sb2FkID0gYHZpZGVvLXBvc3Rlci0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XHJcbiAgICAgICAgYS5ocmVmID0gdmlkZW9GaXJzdEZyYW1lSW1nO1xyXG4gICAgICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLmNsaWNrKCk7IC8vIOiHquWKqOinpuWPkeeCueWHu2HmoIfnrb7nmoRjbGlja+S6i+S7tlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvRm9ybSB9LFxyXG4gICAgICAgIGxvYWRpbmcgJiYgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5sb2FkaW5nSWNvbiB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2VzL2xvYWRpbmcuZ2lmXCIpIH0pLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmxvYWRpbmdUaXBzIH0sIFwiXFx1NkI2M1xcdTU3MjhcXHU1MkFBXFx1NTI5QlxcdTgzQjdcXHU1M0Q2XFx1NEUyRC4uLlwiKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlVGl0bGUgfSwgXCJcXHU2N0U1XFx1NzcwQlxcdTdFQkZcXHU0RTBBXFx1ODlDNlxcdTk4OTFcXHU3NkY4XFx1NTE3M1xcdTRGRTFcXHU2MDZGXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZm9ybUl0ZW0gfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmZvcm1JbnB1dCwgb25DaGFuZ2U6IGdldFZpZGVvVXJsLCB2YWx1ZTogdmlkZW9VcmwsIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6KeG6aKR55qE5Zyw5Z2AJyB9KSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXNfMS5kZWZhdWx0KHN0eWxlcy5mb3JtU3VibWl0LCBsb2FkaW5nICYmICdkaXNhYmxlZCcpLCBvbkNsaWNrOiBzdWJtaXQgfSwgXCJcXHU4M0I3XFx1NTNENlxcdTc2RjhcXHU1MTczXFx1NEZFMVxcdTYwNkZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvLCByZWY6IHZpZGVvRWwsIHNyYzogdmlkZW9VcmwsIG11dGVkOiB0cnVlLCBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIiB9KSxcclxuICAgICAgICB2aWRlb1VybCAmJiB2aWRlb1JhdGUgIT09IDAgJiYgdmlkZW9TaXplICE9PSAwICYmIHZpZGVvSW5mb0NvbnRhaW5lcigpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWN0XzEuZGVmYXVsdC5tZW1vKFZpZGVvSW5mbyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUt3QUFBRFFDQU1BQUFDdEQzcFFBQUFBUEZCTVZFVkhjRXlQMk9PVTJkK04yOXVmMWV4OTRzdDk0c3gvNE02eXlmK3p5ditIM2RXenlQK0wyOW1PMnR1enlmK1cxZVd4eWY2eHlmNnd5ZjZ2eVA0aUJpSFVBQUFBRkhSU1RsTUFCZzBXSFNjNVRVZzVabHVGb1N1eGNvaWFyQlZXT3d3QUFBM0ZTVVJCVkhoZTdKWFJDc013Q0VXbjZmOS84eEFiRHNGSTJZTnBCcm5YeGU3dGNHUHc4MmM2T2pvNk9qb1M4L2FFN3UwbDQ3ZnNHMmRrMnpCaG1ZQUwvRHMrSU9uRi82MW9vUVFOZTl0cVFvV1lTZFB0eDE3akNydEV2d2M3SnVxa25ORGVKVnZNQWNEdzNqRlMxa3d2WmtvVE9pbDJUa2VOc08rUjkrNkd6ejdRaTVrQ0NxRWIzRkh2aGdveWxKbFVaQ1daZDloZ0hKNzlsRk90clE0ekVEOWtxcjJzTDF1aXJDbFFpVExsOUdiVzVjbUdEWm9DdyttMnRpeFZJclhLNTdQemdhZ2RWMWVQTEhtYTg2dkhhdVVxaGlOYUpnRE85T1l4cU91U1paMHlBaytKUnBXUHExUGliRDNGVzQrOGkvWlV0cVBneEY0ejFkNDdSMGcxdlB5Y1VadFhXN0VRMGxUMVB2UVoxYXpGTzB2U1ZIWFlUWkpUNGxiK3dBUlA5aE9rRWxGaDFXYXNyUkFUMW9tNC9VQUtJNXdtTFV3MnoxWGRITFBYNURaRy81bnFycDljQTJsWVQvSHFGVXBVbjJzY1ZwS2RvRHBwUkRYVlFQNk0ycndjRjh4UlYyV3NjVmFUeGQvOGNGVHJFOUIyWGEyZTh3T3FmR2szb3gyNWJSaUt0aXRMazNTenpmLy9iYlZpaUFOZDBnTllCU2xQOXZYZ2hMcWlCeU9jeGo1bFAybE56TDcrS1VCVjRHZzFUOU4yWjNSK0p2R3N5bkZReTYyQzIvamZCelVZdlhycjEvY3FEQUtBeWRWVWFvcHFvT3Z2Zkd4Vm5yRW9SV3ZBelVtL2ZTN08zbHhyTHpJTHErWVZkUy8xV3FpbTgxcXNodHA3Q2FpOFh5c3A1ejZrNHZSUExiTVQwejY5TGd6a2VCV3ZvRXFmdWxRam5SOTdWdFdrZ1l3RFVXdUdpdFBlYUZVRExZTFZmSTBIUWQ0QTFxaXd3bGtIeTFUSVdhQ2tpbXFRelNFZFZHbEhyMG9EcjUyMTJVZFFiVm1ySWxXOGpybUt2T1l4c0REejlPK1ErcDRTMGo1R2dWZkJoWllXQ0tGNk9XbU8yc2RhbGFncWxuRUYwdWFZVi96ZkIzV3hqbEVHQzY5a2x2UnFoelpqSGI1R0FTem5RYUpWV1dkdDUybTJxUnkxM0t4Nk5WUllHNkdhVzkxUUMyRFZMSm1seWZwdS96dWxQVjdWR3l6djE3aXhjcXQ5NExXb1p6bTg4R3Fnb0ZveFUwV3JYYlMreHF2R3JJcDFyN0Q2eVhwbkZkUmVDZXVzZHozZ1dudExRY25WdnBPT0gzVm1QNVFXVk5NNks3VEEyUGNXcUQ5Zm1DM0tXVkNsWDAycmVqWE83UmhBN0h5cTJnRFdwbUpOS3hHZ1IwQlBVT2Y2K1FLMllQVEdyS015c1FSU0tIa0dxR09pL3FneVN4YUlXR09sWFdOZWFXQ1oxbFdGOHl3aDY2aVlGYkhEeEJKWVhXaXQ2cU5MRTVieFNqTkFBb3ZJV2ozdyt1ZFZnTXFSNEdKQlpYTnBDRWhlb2RXOVR0ckNEVWJMeXB3VlVRa0JSWjFyYVgyVm05MWpWbWJYdXptZ2gzajlnL3BwWmt0d1B4S3pJYlVHeEZHc0xZZWRxeTRNTU1zSXk5R1Z0bXNrOWZyOGhxMHhxNmN0WWtQSERsNWVjMkxUYXFzeVo5VXNyd1ZZamJNZ2xQVHJ3aTB5S3h0TVJrUEV4bTROdkhSc0FhejJMTFFPQ3UwZ3J1TE9JZ28rSjZnOUJhak1zN2xaS28zWFBBbFdWWFZCTkN0aWRWZDFPSlYwcnMrcU5raXppNWlOWnZkaHdIazNYS3RhVkRYYkVEdHNvVmJOY25CWncxWnRNSERYSUNObUpXUVZOZXNDcTlKRHdXakpybjR4Y2N2R1VscENGdFpmUlcyUW4yRU5zenJEMGdHWXhXdTlXWVhWRTJIa21SVTMxM3hNN0srYU5BakhBbUxCSmJzUUsxN0ZiQ21xc0Y2d3BsOW1TV2hKd3hhWU5lSXdIdkFLaGxsbzA5U2laZGxncGU4MXFNM042bHNzNHhiREZtSXhlM3JMNE5HSmkxbUd3emRkQUt2aG5uSys3d0dTOWxZdFh0OE1CVVRCSVN3WHpiaHY4SDVNYkVaclpwdUk3WklFK1hGd3ZzR0FCaTlYeXpCemt3ZFVSRFczaUQzb1dTNmJvRmFwazJtR1BKRHdjbExXVGNjK05odTVnSTVxb1cxemlkblJzNGlWSmtBc2FYQkFiQjgwZzZ4Smk5bEYyelFQNHJTVjU5YXNrd05LTDNVSU1heUoyb2xLRzR3dXFKaU5UUURzUVJ5d0ROVWV3WldtZFY1bW1mZkJKV2JQeEFKa2lPRFNFTkNHOXdYVUFnb25yQnZxbVZsZzhnVnUvalZTeThJckN3UEVIclJCY2pXUys1c2lHclBBeXBpSVd6QmpFdUQxMkN3clI5NG5CQW1FaXozMlRpeXg1YnhIWWlIbFNxdzl5QVUxQklKOTIwVWYzSGJzL3pjYlVTbmpCenB0V2dZRVk3MS9wNlZmclk3RjBxK0Ixemp2MzhXOGE0RUZsQU1oaXYwNm53M0F5L1dDUzloSzB4b3ViWkMvem9EN1dHd0ttdk5xMnphbmRiWDdoQWlwTFdIOU9qSExpdGRqWTBNczFCaTFybmFuemMxU3B4MGI3M1RrdUh0NmtRZHp3YnI2NFA3MGNyRlAwNEJ3alplNnVJWWd2S1pjRW9IUkM3RVJGOVluR3l6M3FqZjVqRlVGeDRPaE54bG1KTFdDMkhPejRlZmNNQnF2Nk9YbHNYR09rUWo1RmhPeGkvYW9aUUZ3dHEyZ2oycVRiK2lpMnNocTZ5Uml2VUFGMk1BZFdIZzFiSjMyM3V5Tyt3QlVtb0Q5UktXRzJZQWtRcU5wT2NRQVpZYUI5S25aVkt4V0RteWZKR3lIOHlhanJGdDEzTk1MZmxqVnU1d1piallpMExXb1RZWVl6RDVMZzB3c0JJdUMrMGM3cjlzRk5nYUN2Q3JLOXNMc0E3WFNBbGdGRld3dm9pMVYyMU96YUhXMVoyRkFhbUhWcGE2Q1hmUnVnZUM0UXB0dHIxV25sL3gyc1JzbEJTOTZkVVJ3V21ESkxYYVg0WjZLcFYwYkt5dmhaWStoZGhCZlRydUx4ZXpaN1RtYVFEaHpYc1UxODlIc1FPMFdCTVo3K29zU1dOT2ZjdnZ0TXk5SkNIRGxHS05sZDdFRy9NUXJacmZJMGwvSSs4ZVJrMzdnKzVrdGJCRUxxb0UrYlFNOWFza0JRYVVBUmpDNEhHUFd0dEFpMWtnZDkrekhMNWcxQUdNRk5SYUMzVyttVmxqcFdhdUQvU1VScTgwNjY5L3Z4eGU0ODNGYXVnZTEwRHFyZ1ZJUEppNWdTWUxOYTNOT2FDTndBOWhSTHdMQnhUb3JZbytpUzE1WEhiV0pWb08wUDlIeEtuMGRRK3laV2VvdUM3alJnVmJqb3lhdVc5NTRqUlMxbUdWM2dmdjc2L2ZKSEVNV0dDMWVrWnFWS081WHMrV3NpTjJHQW1nZjNFK0ZOWmcxVGwvdnl2cGloWURmQVhlemlHVTBoSFN1cjdQWFdtSGR2TDZqcFM4TTJGYmFzYkJDZTVCY3lVSDdYeTFudU42MkNnVFJObTFUSE5XV2dQZC8xeTY3SnFObGtHMUJzc2hmNy8xM3Z0UFJDTWxXOXhIQVhHNlhjdGdmc3R6OEtZZFY3SzNXVm1oWjVZRFhkUjM2WnA1K3NZVVVPTlNLaXlGcW5mZkwrNjJ3Q3V4Q1hvZGl3S3plcTJPOTYzd3dnbGpBaFZOQXhiMlFCa0VWMk0wQzY3M0tlczFzLytFd24xL1FLaWlNeWlPb091SHlWMUVGVnNSdXNud1JyUGQxZG11QTRqb083S1VoRGJiazBGV08zWC8rTGFUUXFsNmprRVlIcWpQK3VoOXdUU3RDc0VjTmRSVldqUHRmSVJXcHh2cFJ2RVo0QmUrclBVdDN0bng2TlY1dkR2Vm8xR2NJSDh1aXFNdFdTTTNyTmUyMEt1ODZFd1BROHRsbDg0UjBLVXZIdEc2YjVUVktGVVREaGRqQ3VvNi9Sd2xXT1dDMmxnQ2pMcmJrYU9lamdCYXRTaHFWTWxaTXJQVk15L1ovK0lLU1JROFE2K0pRZ3dNV3pFVllaV0x4R3YrbCtHbTFoc0RVbmpiTFAzY29xQWdCSXJCM2FuZzhncm5wUitPNnhZSnFQWkFVY2IvT21KV2pmWXFOeUhKclFTeUVPa281S3FjbG9KQWE2OTNzQ2s2am5UZnJ6eTlrd0FmQTI3eURZcUpJTGJpQ0NyR2VWSUJQMzRuenMwdXFXS0pkaUpWUmkxZ0phL21rcEtoWWRiNmdERUNMREZSV3N4ckEyWlZxVTZRS3FVVWdPYkgyV1lkdXdmajZoY3lhMWgwci8vMDdVbGx5MUVreXhleHFSV0NIamZETy9hS2Z4ZHE0QklUSHBKOWVsVk9YR2EwQkFPL1pieitZOXBjMWx4TWIyR3g3VmtXMldwYVpOVkREbk0wc203VWhzWWNCaUVxTE1VaFRtd1FyVmJHQVBnRjdaUFkzZXJhSVJYSDUwaktyTGVybW5FYkZGZGFVRlZjWk1RTVhCV29ES2xsWEJRYktxSlVVcURhcnJXdENCQWgyUEFlSUFZckxzd0lYcUJ0RjFVakxaS0VGSnNHTzNONWlOOHRtd1JwQTZqdUFVSTAzWDdPYXpZTExiczlXRjcrdlRvbTF5UG9pQUMraElnSXB5MGRCczBhVzljNjhuT2g2bGlKTC9VclhnR1FMcUZrbTVUVWJLdE9lOE1wcWNZSzV6SEppZXhsSUpuYlBXcFlrSVJkZW1xSHFlaXVIM3hwd1pKR0NEZHVXMkhhckh0Q2FzbjQwQk1BZHkyei94NFdDQ3RxT1dVckIxc3VBYVRYVUJMUFg0VGFBV2tTV3pRYXdCa1Z0KzVVemtFRnF1Rm5GOGt5OU8yWGRwV2JieUlaV2JHeHlZSFZWQjZScHpZVzNPelB2Z01Nc1RqQ2doaVlFdmdhUWdZeWw4MVZtNVdDeDNjd3VJZUJPaTV1Z2tzSXJSczNPbldEZGR3K1FXVGFMeTFlTkFVaHRBUlJlazVLT1Z4ZnZhSm1XYTlhbmdEdTI2VmMzMDJaeFZlQ056RzEzQlF0Y1hKWFVsVlk1Z0FyZUtuWTRzeHlFOW5xTHZUZG9rVm5nOXNRNlVqckZwbVB3MXI4VDV4UUlLc3dlaTZVQjZPZ1ZqTTIyWnhndUNxalpnK1l5VkRxL2ZCUm9adjRKSmxWcnFHVDJIb05xbHNWeUNERHJlQnV3V3VENkhIVE5jaFUwRjlvOG5kbmpyZ1ZxdS9udW1GMzZadjJ1a09mcnpZTDIyT3pXTTh0aXUwSEk4MllCU3lmWVk3TWs5dERzMS9RczZnQTVzTTJCZVgzQkxIb3JQOG5zak5tZi9MWWZUakEyQzlZRlpsOUp3YnhaTGkvYzMxb09LTFBCbVRWY3pnR2p6bWVXOTdUdVpvSHV3V2pualJDQTlOdk4wbGVpT01NVWxuZGRIRmtPQXRQMjFZNitYKzl2Y0UwdHNRS1dJNnVZRU10cTU4MENGM1hnaXhhMHZycmtxREY0S3RaUUI4MkM5SEJMTzJTMjJtWFcrWTBNaDlZL1QrYnlhc1R5WTVoRHM5eTAxNEViUnE0RGV0WkZWekRGUFpuWkdiTVl4dTNYUWJjTkVObkhtVVVmekdjVzc4N3h2VUlBSzh6Q0sxKy92aTJ6d0NXelZGN2VyQ3RhRnR2UDdEZ3NhUGx1QWFubE9vQlpzSElaTUN6am5nVlZXbTVhTGkvMHJCTUxyeHdFenV5Y1dmN09CbC9ZNERzNzFFSGRkU0VFdUxOOTFseU1leGJWUHNaN3BOYnR1cFpIVDJNSWw4M20yY3hDTFcyOEdyVXdHemRFOXVtdXk5YTBXU3BhTGkrbzljK1N6NWtGTHNHTzcyWDRzdUIzdExTaDVXY0d6RW81QU95ZzJqZlFnclZWQzdOOENXUGVmZzd5cEZsK3BHeTB4L2NLVkYzRVNhekFIVGZycWhZNW9Gc2JOdHYvNXVPRjdzb0VPNlZXaHRYQ0xMNng1enBnVXFpMVk2SzZRUHZpUmF4TzVOQnlkWEVRNFBZL0g1OVNQQVlhc2FnQUFBQUFTVVZPUks1Q1lJST1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9wb3B1cC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuY29uc3QgcGFnZV9pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9wYWdlLWluZm9cIikpO1xyXG5jb25zdCB2aWRlb19pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy92aWRlby1pbmZvXCIpKTtcclxuY29uc3QgdXJsX21vZGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy91cmwtbW9kZXNcIikpO1xyXG5jb25zdCBpY29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFudGQvbGliL2ljb25cIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9wb3B1cC5sZXNzXCIpO1xyXG4vKipcclxuICog57Si5byVaWTnmoTmmKDlsIRcclxuICovXHJcbmNvbnN0IE5BVl9BQ1RJVkVfSU5ERVggPSB7XHJcbiAgICBcIlBBR0VfSU5GT1wiOiAwLFxyXG4gICAgXCJWSURFT19JTkZPXCI6IDEsXHJcbiAgICBcIlVSTF9NT0RFU1wiOiAyLFxyXG59O1xyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSUQsIHNldEN1cnJlbnRUYWJJRF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmF2QWN0aXZlSW5kZXgsIHNldE5hdkl0ZW1BY3RpdmVJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbmF2SXRlbUFyciA9IFtcclxuICAgICAgICB7IG5hbWU6ICfpobXpnaLkv6Hmga8nLCBpZDogMCwgZGlzYWJsZTogZmFsc2UsIGljb246ICdpbmZvLWNpcmNsZScgfSxcclxuICAgICAgICB7IG5hbWU6ICfop4bpopHnm7jlhbMnLCBpZDogMSwgZGlzYWJsZTogZmFsc2UsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6LCD6K+V5qih5byPJywgaWQ6IDIsIGRpc2FibGU6IGZhbHNlLCBpY29uOiAnYnVnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+aVrOivt+acn+W+hScsIGlkOiAzLCBkaXNhYmxlOiB0cnVlLCBpY29uOiAnZWxsaXBzaXMnIH0sXHJcbiAgICBdO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7dGV4dDogY291bnQudG9TdHJpbmcoKX0pO1xyXG4gICAgfSwgW2NvdW50XSk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFVSTCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYWJJRCh0YWJzWzBdLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8qKlxyXG4gICAgICogIOa4suafk+mAiemhueWNoeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBjb25zdCByZW5kZXJOYXZJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW1BcnIubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoc3R5bGVzLm5hdkl0ZW0sIG5hdkFjdGl2ZUluZGV4ID09PSBpdGVtLmlkICYmICdhY3RpdmUnLCBpdGVtLmRpc2FibGUgJiYgJ2Rpc2FibGUnKSwga2V5OiBpdGVtLmlkLCBvbkNsaWNrOiAoKSA9PiBzZXROYXZJdGVtQWN0aXZlSW5kZXgoaXRlbS5pZCkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGljb25fMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogc3R5bGVzLm5hdkljb24sIHR5cGU6IGl0ZW0uaWNvbiB9KSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm5hdkl0ZW1OYW1lIH0sIGl0ZW0ubmFtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW25hdkFjdGl2ZUluZGV4XSk7XHJcbiAgICAvKipcclxuICAgICAqIOa4suafk+S4u+WGheWuuWBcclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVuZGVyU2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgTkFWX0FDVElWRV9JTkRFWC5QQUdFX0lORk86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocGFnZV9pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGNhc2UgTkFWX0FDVElWRV9JTkRFWC5WSURFT19JTkZPOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSBOQVZfQUNUSVZFX0lOREVYLlVSTF9NT0RFUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh1cmxfbW9kZXNfMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmF2QWN0aXZlSW5kZXhdKTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogJ3Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5yb290IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2Q29udGFpbmVyIH0sIHJlbmRlck5hdkl0ZW0oKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuc2hvd0NvbnRhaW5lciB9LCByZW5kZXJTaG93Q29udGVudCgpKSkpKTtcclxufTtcclxucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIG51bGwpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5VcmxNb2RlID0ge1xyXG4gICAgbW9jazogJ19fTU9DS19fJyxcclxuICAgIHZjb25zb2xlOiAnX19WQ09OU09MRV9fJyxcclxuICAgIGRlYnVnZ2VyOiAnX19ERUJVR19fJ1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBCYXNlU3RvcmUge1xyXG4gICAgdXNlKCkgeyB9XHJcbiAgICA7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZVN0b3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBVc2VNb3VudCA9IChmbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZm4gaXMgbm90IGEgZnVuY3Rpb24sIGlzICR7dHlwZW9mIGZufWApO1xyXG4gICAgfVxyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9LCBbXSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVzZU1vdW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG4vKipcclxuICog55So5LqO5Yid5aeL5YyWU3RvcmVcclxuICogQHBhcmFtIGNyZWF0ZVN0b3JlRm5cclxuICogQHJldHVybnMgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCB1c2VTdG9yZSA9IChjcmVhdGVTdG9yZUZuKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiBjcmVhdGVTdG9yZUZuKCksIFtdKTtcclxuICAgIHN0b3JlID09PSBudWxsIHx8IHN0b3JlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZS51c2UoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlU3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=