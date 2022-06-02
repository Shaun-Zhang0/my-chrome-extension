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
            console.log({ isActive, urlMode: url_mode_1.UrlMode[i] });
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
            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                console.log(tabs[0].url);
                alert(tabs[0].url);
                const modes = url_mode_1.UrlMode;
                Object.keys(url_mode_1.UrlMode).map(item => {
                    if (tabs[0].url && tabs[0].url.indexOf(url_mode_1.UrlMode[item]) > 0) {
                        // @ts-ignore
                        this.activeIndex.push(url_mode_1.UrlMode.item);
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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
const use_store_1 = __importDefault(__webpack_require__(/*! ../../utils/hooks/use-store */ "./src/utils/hooks/use-store.ts"));
const store_1 = __importDefault(__webpack_require__(/*! ./store */ "./src/components/video-info/store.ts"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
const styles = __webpack_require__(/*! ./index.less */ "./src/components/video-info/index.less");
const VideoInfo = () => {
    const store = use_store_1.default(() => new store_1.default());
    /**
     * 视频相关信息
     */
    const videoInfoContainer = () => {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "videoDuration / \u89C6\u9891\u65F6\u95F4\u957F\u5EA6"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    Math.floor(store.videoTime),
                    " s")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "video Data Rate / \u89C6\u9891\u7801\u7387"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    store.videoRate,
                    " kbps")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "video Size / \u89C6\u9891\u6587\u4EF6\u5927\u5C0F"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    store.videoSize / 1000 * 8,
                    "kb")),
            react_1.default.createElement("div", { className: styles.videoInfoRow },
                react_1.default.createElement("div", { className: styles.videoInfoRowHeader }, "\u9996\u5E27\u56FE\u7247"),
                react_1.default.createElement("div", { className: styles.videoInfoValue },
                    react_1.default.createElement("img", { className: styles.videoFirstFrameImage, ref: store.videoFirstFrameRef, src: store.videoFirstFrameImg }),
                    react_1.default.createElement("div", { className: styles.downloadImage, onClick: store.downloadImg }, "\u5BFC\u51FA\u56FE\u7247"))));
    };
    return (react_1.default.createElement("div", { className: styles.videoForm },
        store.loading && react_1.default.createElement("div", { className: styles.loadingIcon },
            react_1.default.createElement("img", { src: __webpack_require__(/*! ./images/loading.gif */ "./src/components/video-info/images/loading.gif"), alt: "loading" }),
            react_1.default.createElement("div", { className: styles.loadingTips }, "\u6B63\u5728\u52AA\u529B\u83B7\u53D6\u4E2D...")),
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u67E5\u770B\u7EBF\u4E0A\u89C6\u9891\u76F8\u5173\u4FE1\u606F"),
        react_1.default.createElement("div", { className: styles.formItem },
            react_1.default.createElement("input", { className: styles.formInput, onChange: store.getVideoUrl, value: store.videoUrl, placeholder: '请输入视频的地址' })),
        react_1.default.createElement("div", { className: classnames_1.default(styles.formSubmit, store.loading && 'disabled'), onClick: store.submit }, "\u83B7\u53D6\u76F8\u5173\u4FE1\u606F"),
        react_1.default.createElement("video", { className: styles.video, ref: store.videoEl, src: store.videoUrl, autoPlay: true, muted: true, crossOrigin: "anonymous", onCanPlay: store.videoInit }),
        store.showInfoStatus && videoInfoContainer()));
};
exports.default = mobx_react_1.observer(VideoInfo);


/***/ }),

/***/ "./src/components/video-info/store.ts":
/*!********************************************!*\
  !*** ./src/components/video-info/store.ts ***!
  \********************************************/
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
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const regex_1 = __importDefault(__webpack_require__(/*! ../../utils/regex */ "./src/utils/regex/index.ts"));
class VideoInfoStore {
    constructor() {
        /**
         * 视频地址
         */
        this.videoUrl = '';
        /**
         * 视频文件大小
         */
        this.videoSize = 0;
        /**
         * 视频码率
         */
        this.videoRate = 0;
        /**
         * 视频时间长度
         */
        this.videoTime = 0;
        /**
         * 视频首帧图片
         */
        this.videoFirstFrameImg = '';
        /**
         * 数据加载中
         */
        this.loading = false;
        /**
         * 是否展示信息栏
         */
        this.showInfoStatus = false;
        /**
         * 获取视频的地址
         * @param e
         */
        this.getVideoUrl = (e) => {
            this.videoUrl = e.target.value;
        };
        this.submit = () => {
            this.loading = true;
            if (!regex_1.default('video', this.videoUrl) /**当前地址不是一个视频地址*/) {
                return;
            }
            this.onSubmitBtnClick();
        };
        /**
         * 点击提交按钮时回调
         */
        this.onSubmitBtnClick = () => {
            if (!this.videoUrl) {
                alert('请先输入视频地址');
            }
            if (!regex_1.default('video', this.videoUrl) /**当前地址不是一个视频地址*/) {
                return;
            }
            else {
                this.loading = true;
                const xhr = new XMLHttpRequest();
                xhr.open('get', this.videoUrl, true);
                xhr.responseType = 'blob';
                xhr.onreadystatechange = () => {
                    var _a;
                    if (xhr.status === 200 && (xhr.readyState === 3 || xhr.readyState === 4)) {
                        const headers = (_a = xhr.getAllResponseHeaders()) === null || _a === void 0 ? void 0 : _a.trim().split(/[\r\n]+/);
                        let headerMap = {};
                        headers.forEach(function (line) {
                            let parts = line.split(': ');
                            let header = parts.shift();
                            let value = parts.join(': ');
                            headerMap[String(header)] = value;
                        });
                        this.videoSize = headerMap['content-length'];
                        this.videoRate = Math.floor(this.videoSize / 1000 * 8 / this.videoTime);
                    }
                };
                xhr.send();
            }
        };
        /**
         * 在视频可以播放时回调
         * video onCanPlay 时回调
         */
        this.videoInit = () => {
            var _a;
            /**
             * 即时获取可能会获取不到对应的第一帧图
             * 故采取设置一个较短时间的定时器来实现
             * 经过多次尝试 50ms可以准确获取到图片 在视频播放上并没有影响
             */
            setTimeout(() => {
                var _a, _b;
                const canvas = document.createElement('canvas');
                canvas.width = (_a = this.videoEl.current) === null || _a === void 0 ? void 0 : _a.videoWidth;
                canvas.height = (_b = this.videoEl.current) === null || _b === void 0 ? void 0 : _b.videoHeight;
                canvas.getContext('2d').drawImage(this.videoEl.current, 0, 0);
                const img = canvas.toDataURL('image/png');
                this.videoFirstFrameImg = img;
            }, 50);
            this.videoEl.current && ((_a = this.videoEl.current) === null || _a === void 0 ? void 0 : _a.play());
            this.videoTime = this.getVideoDuration;
        };
        /**
         * 导出图片
         */
        this.downloadImg = () => {
            const a = document.createElement('a');
            a.style.display = 'none';
            a.download = `video-poster-${new Date().getTime()}`;
            a.href = this.videoFirstFrameImg;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click(); // 自动触发点击a标签的click事件
            document.body.removeChild(a);
        };
    }
    /**
     * 获取视频实际时间
     */
    get getVideoDuration() {
        var _a;
        if (!((_a = this.videoEl) === null || _a === void 0 ? void 0 : _a.current)) {
            return 0;
        }
        return Number(this.videoEl.current.duration);
    }
    use() {
        /**
         * 视频首帧图
         */
        this.videoFirstFrameRef = react_1.useRef(null);
        /**
         * 视频dom元素
         */
        this.videoEl = react_1.useRef(null);
        react_1.useEffect(() => {
            if (this.videoFirstFrameImg !== '' && this.videoRate !== 0) {
                this.loading = false;
                this.showInfoStatus = true;
            }
        }, [this.videoFirstFrameImg, this.videoRate]);
    }
}
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "videoUrl", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "videoSize", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "videoRate", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "videoTime", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "videoFirstFrameImg", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "loading", void 0);
__decorate([
    mobx_1.observable
], VideoInfoStore.prototype, "showInfoStatus", void 0);
__decorate([
    mobx_1.computed
], VideoInfoStore.prototype, "getVideoDuration", null);
exports.default = VideoInfoStore;


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


/***/ }),

/***/ "./src/utils/regex/index.ts":
/*!**********************************!*\
  !*** ./src/utils/regex/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function regex(type, val) {
    let reg;
    switch (type) {
        case "video":
            reg = /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/;
            break;
        default:
            reg = /\S/;
            break;
    }
    return reg.test(val);
}
exports.default = regex;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlLWluZm8vc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3M/NTlkMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC1tb2Rlcy9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2ltYWdlcy9sb2FkaW5nLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2luZGV4Lmxlc3M/OTM4MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1pbmZvL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzPzExYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXJsX21vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL2Jhc2Utc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL3VzZS1tb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9va3MvdXNlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZWdleC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QztBQUN2RixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0RBQWtELGFBQWE7QUFDL0QsOENBQThDLHlCQUF5QjtBQUN2RSxrREFBa0QsaUNBQWlDO0FBQ25GLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQjtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBvcHVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9fcGFnZUluZm9Sb290X18xaWU4QSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5pbmRleF9fcGFnZUluZm9Sb3dfX2RacHVMIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5pbmRleF9fcGFnZUluZm9Sb3dIZWFkZXJfXzJ6RzF2IHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaW5kZXhfX3BhZ2VJbmZvVmFsdWVfX0lRazhJIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLmluZGV4X19wYWdlVGl0bGVfXzFRQVJDIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZUluZm9Sb290XCI6IFwiaW5kZXhfX3BhZ2VJbmZvUm9vdF9fMWllOEFcIixcblx0XCJwYWdlSW5mb1Jvd1wiOiBcImluZGV4X19wYWdlSW5mb1Jvd19fZFpwdUxcIixcblx0XCJwYWdlSW5mb1Jvd0hlYWRlclwiOiBcImluZGV4X19wYWdlSW5mb1Jvd0hlYWRlcl9fMnpHMXZcIixcblx0XCJwYWdlSW5mb1ZhbHVlXCI6IFwiaW5kZXhfX3BhZ2VJbmZvVmFsdWVfX0lRazhJXCIsXG5cdFwicGFnZVRpdGxlXCI6IFwiaW5kZXhfX3BhZ2VUaXRsZV9fMVFBUkNcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9faGVhZGVyX18zNmFNYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4uaW5kZXhfX21vZGVJdGVtX192ZEtwMyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbmRleF9fbW9kZUNvbnRhaW5lcl9fMUhIazYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaW5kZXhfX2hlYWRlcl9fMzZhTWJcIixcblx0XCJtb2RlSXRlbVwiOiBcImluZGV4X19tb2RlSXRlbV9fdmRLcDNcIixcblx0XCJtb2RlQ29udGFpbmVyXCI6IFwiaW5kZXhfX21vZGVDb250YWluZXJfXzFISGs2XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfX3ZpZGVvRm9ybV9fMkpsQnkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuLmluZGV4X19mb3JtSXRlbV9fMjU0WEYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5pbmRleF9fZm9ybUlucHV0X18yaGxPSiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA5NiU7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGE2ZWUwO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBvdXRsaW5lLWNvbG9yOiAjNGI2MmM1O1xcbn1cXG4uaW5kZXhfX2Zvcm1MYWJlbF9faXBiV3Ege1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5pbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnUge1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogOTYlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBtYXJnaW46IDEwcHggYXV0byAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNmVlMDtcXG4gIGJvcmRlci1jb2xvcjogIzRhNmVlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmluZGV4X19mb3JtU3VibWl0X18xQmlSdS5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmluZGV4X19mb3JtU3VibWl0X18xQmlSdTphY3RpdmUge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG4uaW5kZXhfX3ZpZGVvX18yd2sxdCB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmluZGV4X19wYWdlVGl0bGVfX0NFdUNnIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmluZGV4X192aWRlb0luZm9Sb3dfXzNiZ21kIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5pbmRleF9fdmlkZW9JbmZvUm93SGVhZGVyX18xOFJpNyB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmluZGV4X192aWRlb0luZm9WYWx1ZV9fMS1yaGYge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uaW5kZXhfX2xvYWRpbmdJY29uX18xSXp1bCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDEwMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAyMDA7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiKDAgMCAwJSk7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYigwIDAgMCUpO1xcbn1cXG4uaW5kZXhfX2xvYWRpbmdJY29uX18xSXp1bCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NiU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbmRleF9fbG9hZGluZ1RpcHNfXzNSMHlGIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTYlO1xcbiAgbGVmdDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0YTZlZTA7XFxufVxcbi5pbmRleF9fdmlkZW9GaXJzdEZyYW1lX18xbXRRSCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcbi5pbmRleF9fdmlkZW9GaXJzdEZyYW1lSW1hZ2VfXzJvM2NGIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4uaW5kZXhfX2Rvd25sb2FkSW1hZ2VfXzJ1VTVxIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0byAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNmVlMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZGVvRm9ybVwiOiBcImluZGV4X192aWRlb0Zvcm1fXzJKbEJ5XCIsXG5cdFwiZm9ybUl0ZW1cIjogXCJpbmRleF9fZm9ybUl0ZW1fXzI1NFhGXCIsXG5cdFwiZm9ybUlucHV0XCI6IFwiaW5kZXhfX2Zvcm1JbnB1dF9fMmhsT0pcIixcblx0XCJmb3JtTGFiZWxcIjogXCJpbmRleF9fZm9ybUxhYmVsX19pcGJXcVwiLFxuXHRcImZvcm1TdWJtaXRcIjogXCJpbmRleF9fZm9ybVN1Ym1pdF9fMUJpUnVcIixcblx0XCJ2aWRlb1wiOiBcImluZGV4X192aWRlb19fMndrMXRcIixcblx0XCJwYWdlVGl0bGVcIjogXCJpbmRleF9fcGFnZVRpdGxlX19DRXVDZ1wiLFxuXHRcInZpZGVvSW5mb1Jvd1wiOiBcImluZGV4X192aWRlb0luZm9Sb3dfXzNiZ21kXCIsXG5cdFwidmlkZW9JbmZvUm93SGVhZGVyXCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1Jvd0hlYWRlcl9fMThSaTdcIixcblx0XCJ2aWRlb0luZm9WYWx1ZVwiOiBcImluZGV4X192aWRlb0luZm9WYWx1ZV9fMS1yaGZcIixcblx0XCJsb2FkaW5nSWNvblwiOiBcImluZGV4X19sb2FkaW5nSWNvbl9fMUl6dWxcIixcblx0XCJsb2FkaW5nVGlwc1wiOiBcImluZGV4X19sb2FkaW5nVGlwc19fM1IweUZcIixcblx0XCJ2aWRlb0ZpcnN0RnJhbWVcIjogXCJpbmRleF9fdmlkZW9GaXJzdEZyYW1lX18xbXRRSFwiLFxuXHRcInZpZGVvRmlyc3RGcmFtZUltYWdlXCI6IFwiaW5kZXhfX3ZpZGVvRmlyc3RGcmFtZUltYWdlX18ybzNjRlwiLFxuXHRcImRvd25sb2FkSW1hZ2VcIjogXCJpbmRleF9fZG93bmxvYWRJbWFnZV9fMnVVNXFcIlxufTsiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltYWdlcy9iZy5wbmdcIikpICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICMwZTEwMWE7XFxufVxcbi5wb3B1cF9fcm9vdF9fMWRGc2cge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuLnBvcHVwX19uYXZDb250YWluZXJfX2NQM3VvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2NjYztcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVggaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDUlO1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmRpc2FibGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZmE7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3IHtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyNyxcXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYLmFjdGl2ZSAucG9wdXBfX25hdkljb25fXzN5aEVkIHtcXG4gIGNvbG9yOiAjNGE2ZWUwO1xcbn1cXG4ucG9wdXBfX25hdkljb25fXzN5aEVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM1ZjU2NTE7XFxufVxcbi5wb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3Ige1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyrlrprkuYnmu5rliqjmnaHpq5jlrr3lj4rog4zmma8g6auY5a695YiG5Yir5a+55bqU5qiq56uW5rua5Yqo5p2h55qE5bC65a+4Ki9cXG59XFxuLnBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcInBvcHVwX19yb290X18xZEZzZ1wiLFxuXHRcIm5hdkNvbnRhaW5lclwiOiBcInBvcHVwX19uYXZDb250YWluZXJfX2NQM3VvXCIsXG5cdFwibmF2SXRlbVwiOiBcInBvcHVwX19uYXZJdGVtX185cnNlWFwiLFxuXHRcIm5hdkl0ZW1OYW1lXCI6IFwicG9wdXBfX25hdkl0ZW1OYW1lX18yMHZyN1wiLFxuXHRcIm5hdkljb25cIjogXCJwb3B1cF9fbmF2SWNvbl9fM3loRWRcIixcblx0XCJzaG93Q29udGFpbmVyXCI6IFwicG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yXCJcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IG1vYnhfcmVhY3RfMSA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpO1xyXG5jb25zdCB1c2Vfc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvaG9va3MvdXNlLXN0b3JlXCIpKTtcclxuY29uc3Qgc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdG9yZVwiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2Vfc3RvcmVfMS5kZWZhdWx0KCgpID0+IG5ldyBzdG9yZV8xLmRlZmF1bHQoKSk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XHJcbiAgICAgICAgICAgIHN0b3JlLnNldEN1cnJlbnRVcmwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzdG9yZS5zZXRDdXJyZW50VGl0bGUodGFic1swXS50aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xyXG4gICAgICAgICAgICBzdG9yZS5zZXRDdXJyZW50S2V5d29yZHMoKF9iID0gKF9hID0gYmcgPT09IG51bGwgfHwgYmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJnLnRlc3QxKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWdlSW5mbykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmtleXdvcmQpO1xyXG4gICAgICAgICAgICBzdG9yZS5zZXRDdXJyZW50RGVzY3JpcHRpb24oKF9kID0gKF9jID0gYmcgPT09IG51bGwgfHwgYmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJnLnRlc3QxKCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYWdlSW5mbykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgc3RvcmUuc2V0Q3VycmVudEF1dGhvcigoX2YgPSAoX2UgPSBiZyA9PT0gbnVsbCB8fCBiZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmcudGVzdDEoKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnBhZ2VJbmZvKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuYXV0aG9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm9vdCB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZVRpdGxlIH0sIFwiXFx1NUY1M1xcdTUyNERcXHU5ODc1XFx1OTc2MlxcdTRGRTFcXHU2MDZGXFx1RkYxQVwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJ1cmwgLyBcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NTczMFxcdTU3NDBcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBzdG9yZS5jdXJyZW50VXJsKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwidGl0bGUgLyBcXHU2ODA3XFx1OTg5OFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIHN0b3JlLmN1cnJlbnRUaXRsZSkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImtleXdvcmQgLyBcXHU1MTczXFx1OTUyRVxcdTVCNTdcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBzdG9yZS5jdXJyZW50S2V5d29yZCkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImRlc2NyaXB0aW9uIC8gXFx1NjNDRlxcdThGRjBcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBzdG9yZS5jdXJyZW50RGVzY3JpcHRpb24pKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJhdXRob3IgLyBcXHU0RjVDXFx1ODAwNVwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0sIHN0b3JlLmN1cnJlbnRBdXRob3IpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG1vYnhfcmVhY3RfMS5vYnNlcnZlcihQYWdlSW5mbyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1vYnhfMSA9IHJlcXVpcmUoXCJtb2J4XCIpO1xyXG5jb25zdCBiYXNlX3N0b3JlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2hvb2tzL2Jhc2Utc3RvcmVcIikpO1xyXG5jbGFzcyBQYWdlSW5mb1N0b3JlIGV4dGVuZHMgYmFzZV9zdG9yZV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZPliY3pobXpnaLnmoTlnLDlnYBcclxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVybCA9ICcnO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+WJjemhtemdoueahOWFs+mUruivjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VycmVudEtleXdvcmQgPSAnJztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZPliY3pobXpnaLnmoTmj4/ov7DmlofmoYhcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1cnJlbnREZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+WJjemhtemdoueahOS9nOiAhVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF1dGhvciA9ICcnO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+WJjemhtemdoueahOagh+mimFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpdGxlID0gJyc7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjemhtemdoueahHVybFxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50VXJsKHVybCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVybCA9IHVybDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN6aG16Z2i55qEdGl0bGVcclxuICAgICAqIEBwYXJhbSB0aXRsZVxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3pobXpnaLnmoTlhbPplK7lrZdcclxuICAgICAqIEBwYXJhbSBrZXl3b3Jkc1xyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50S2V5d29yZHMoa2V5d29yZHMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRLZXl3b3JkID0ga2V5d29yZHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjemhtemdoueahGF1dGhvclxyXG4gICAgICogQHBhcmFtIGF1dGhvclxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50QXV0aG9yKGF1dGhvcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF1dGhvciA9IGF1dGhvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aG16Z2i55qE5o+P6L+wXHJcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cclxuICAgICAqL1xyXG4gICAgc2V0Q3VycmVudERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHVzZSgpIHtcclxuICAgICAgICBzdXBlci51c2UoKTtcclxuICAgIH1cclxufVxyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnRVcmxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBtb2J4XzEub2JzZXJ2YWJsZVxyXG5dLCBQYWdlSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJjdXJyZW50S2V5d29yZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnREZXNjcmlwdGlvblwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnRBdXRob3JcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBtb2J4XzEub2JzZXJ2YWJsZVxyXG5dLCBQYWdlSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJjdXJyZW50VGl0bGVcIiwgdm9pZCAwKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGFnZUluZm9TdG9yZTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IHVybF9tb2RlXzEgPSByZXF1aXJlKFwiLi4vLi4vdXJsX21vZGVcIik7XHJcbmNvbnN0IG1vYnhfcmVhY3RfMSA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpO1xyXG5jb25zdCB1c2Vfc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvaG9va3MvdXNlLXN0b3JlXCIpKTtcclxuY29uc3Qgc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdG9yZVwiKSk7XHJcbmNvbnN0IGNsYXNzbmFtZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XHJcbmNvbnN0IFVybE1vZGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2Vfc3RvcmVfMS5kZWZhdWx0KCgpID0+IG5ldyBzdG9yZV8xLmRlZmF1bHQoKSk7XHJcbiAgICAvKipcclxuICAgICAqIOa4suafk+aooeW8j+eahOmAiemhuVxyXG4gICAgICovXHJcbiAgICBjb25zdCByZW5kZXJNb2RlSXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cmxfbW9kZV8xLlVybE1vZGUpLm1hcChpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBzdG9yZS5hY3RpdmVJbmRleC5pbmRleE9mKHVybF9tb2RlXzEuVXJsTW9kZVtpXSkgPiAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGlzQWN0aXZlLCB1cmxNb2RlOiB1cmxfbW9kZV8xLlVybE1vZGVbaV0gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoc3R5bGVzLm1vZGVJdGVtLCBpc0FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlSXRlbSksIG9uQ2xpY2s6ICgpID0+IHN0b3JlLm9uSXRlbUNsaWNrKHVybF9tb2RlXzEuVXJsTW9kZVtpXSkgfSwgdXJsX21vZGVfMS5VcmxNb2RlW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm9vdCB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuaGVhZGVyIH0sIFwiXFx1OEMwM1xcdThCRDVcXHU2QTIxXFx1NUYwRlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1vZGVDb250YWluZXIgfSwgcmVuZGVyTW9kZUl0ZW0oKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBtb2J4X3JlYWN0XzEub2JzZXJ2ZXIoVXJsTW9kZXMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2J4XzEgPSByZXF1aXJlKFwibW9ieFwiKTtcclxuY29uc3QgdXNlX21vdW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2hvb2tzL3VzZS1tb3VudFwiKSk7XHJcbmNvbnN0IHVybF9tb2RlXzEgPSByZXF1aXJlKFwiLi4vLi4vdXJsX21vZGVcIik7XHJcbmNsYXNzIFVybE1vZGVzU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i5Zyw5Z2AXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1cnJlbnRVUkwgPSAnJztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZPliY3mqKHlvI9cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54K55Ye75YiH5o2i5qih5byPXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrID0gKG1vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIER1cGxpY2F0ZWRDb2RlXHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhYklkID0gTnVtYmVyKHRhYnNbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBTdHJpbmcodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1VybCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGN1cnJlbnRVcmw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSAoX2EgPSBsaW5rLnNlYXJjaCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KFwiP1wiKVsxXTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VhcmNoIC8q5LiN5a2Y5Zyoc2VhcmNo6YOo5YiGKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bW9kZX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5a2Y5Zyoc2VhcmNoKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YobW9kZSkgPiAtMSAvKuW9k+WJjeW3suWtmOWcqOmAieS4reeahG1vZGXvvIzliJnnm7TmjqXljrvpmaTov5nkuKrmqKHlvI8qLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZignPycgKyBtb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnPycgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKCcmJyArIG1vZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlYXJjaCA9ICc/JyArIHNlYXJjaC5yZXBsYWNlKCcmJyArIG1vZGUsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgJHtuZXdTZWFyY2h9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWFyY2ggPSBzZWFyY2ggKyAnJicgKyBtb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdVcmwgPSBsaW5rLm9yaWdpbiArIGxpbmsucGF0aG5hbWUgKyBgPyR7bmV3U2VhcmNofWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKE51bWJlcihjdXJyZW50VGFiSWQpLCB7IHVybDogbmV3VXJsIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5mcmVzaE1vZGVTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZXMgPSB1cmxfbW9kZV8xLlVybE1vZGU7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1cmxfbW9kZV8xLlVybE1vZGUpLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFic1swXS51cmwgJiYgdGFic1swXS51cmwuaW5kZXhPZih1cmxfbW9kZV8xLlVybE1vZGVbaXRlbV0pID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXgucHVzaCh1cmxfbW9kZV8xLlVybE1vZGUuaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB1c2UoKSB7XHJcbiAgICAgICAgdXNlX21vdW50XzEuZGVmYXVsdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlc2hNb2RlU3RhdHVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuX19kZWNvcmF0ZShbXHJcbiAgICBtb2J4XzEub2JzZXJ2YWJsZVxyXG5dLCBVcmxNb2Rlc1N0b3JlLnByb3RvdHlwZSwgXCJjdXJyZW50VVJMXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgVXJsTW9kZXNTdG9yZS5wcm90b3R5cGUsIFwiYWN0aXZlSW5kZXhcIiwgdm9pZCAwKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVXJsTW9kZXNTdG9yZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEdBQVlBTVFBQUp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHo2L0x6aS9PVCsvS3ptL09UMi9QeisvTXp1L056Ni9LVGUvTnp5L1BUKy9MenkvTVQrL056Ky9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoK1FRSkJRQVRBQ3dBQUFBQUdBQVlBQUFGbk9Ba2ptUnBqa3Fxcm15clRnb014Mm9Rdk9rODA3aGlBQUNENjBVU09BUXdJREIyRXRFRWphakFCeFNtSHJ4ZHlnRm9BQnlwd0dLcWVFaXdLOWtFS2oyVm1TVGErcGlyWiszRGZFdVdXQ1NhZ0U0S0NJUVBPbll6RW5nQ2hBaG9lbWRFRTMwSGdZQnlpSmwzZXB5U0lnd1FmMjRIY0NneUVBTVFtZ2NSbFhncUNSQU1LZ2V6dEh1WEJRV2xiako0dFQySG5aMld4VTYrbThLSElRQWgrUVFKQlFBWEFDd0FBQUFBR0FBWUFJU2MxdnpjOHZ5MDh2ejArdnk4NXZ5czR2emMrdnpFOHZ6cyt2eWszdnlrMnZ5OCt2eXM2dnprK3Z6TS92eWMydnprOXZ5ODh2ejgvdnlzNXZ6TTh2enMvdnprL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRm5lQWxqbVJwamxLcXJteXJYaElNeDJvUXZPazgwN2hFQUFDQzYwV1MzRVFLb09KVWhBMEtpY0xBQnhSS0RBZURqZ1ZKZUc5R3NPUWdpTEJrbCtkRGVtcEVHaVphR2pMbGJlM0QvRkNHQ0VDWWdDSXBFNFI0aGdZNUt4TU1FM29xRm5VeElnZ1VDSUdBY29tR2R6dU9qaVVOQjNBbkVoV1NUVEZrQjVvekZRNFZkeXVoRFk4V0s2Wm5tQXNMcDB5WlBLVzJySnFlbjVmSE1wdkRlQ0VBSWZrRUNRVUFHQUFzQUFBQUFCZ0FHQUNFbE5MOHpPcjhyT3I4N1BiOHRPYjh6UGI4cE43OHZQYjg1UGI4L1A3OG5Ocjh4T3I4N1A3OHpQNzhyT2I4bk5MODNQTDh0Tzc4N1ByOHhPYjgxUGI4cE9MOHhQNzg1UDc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYU1nSm81a2FZNUpxcTVzcTJJSkRNY3FoTHpwUE5ONE1pbUtpZXRGU3R4RUJxQkJOQWdNVER5SE5QVUxKZ2FBQjJDUVl5RU1GUU0zWVVzRnNvREFTZ1lqR0FpeEVrSzdMZEZndHk2ditkUVAveTB5RWhBU0o0WkZDUVFSY0RwNk14ZCtDUkVDRVlBcWtFUVlnd3lIblhlT29EdzdscFlsRWdXRko1a29NZ1VSQmFFTURaeVJLYWNNS2d5NHVZR0hDUllXY2I0eWpoSzBvcldrUTUzTVJjVEkwSTBoQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEpUUy9NenEvT3oyL0t6bS9NeisvS1RlL056Mi9QeisvTHoyL0p6YS9PeisvTHp1L0p6Uy9MVHUvTlQ2L09UKy9PejYvTFRxL0t6aS9PVDIvUFQrL0p6Vy9OVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdtNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2alM5NlR6VCtCRWtpWURyUlRwQVloZEpvU0FSQ1FJQ0V5OGlpYVIrd2NPRUFXRGNlQ3JCWUN4STJhN2NpaEFuT2xDdHBtMTNVcUxCeXJuODRVblhELzh0TWhRR0ZDZUdSUmNMRVFzOE9ub1BGR0FIQ3cyTWdDbVFSQmVEaFllSGRucU9qWDZYbHlVVURoQ0dCNUZTTWc0SUJLRXBGQmFGcENrUXFTb1VDaXVSTEo0SEJMS2VNcU14Q2dxaW9xV214dERIekxPaklRQWgrUVFKQlFBWEFDd0FBQUFBR0FBWUFJU2MxdnpVK3Z5MDd2enM5dnk4K3Z5ODZ2ekU4dnlzNXZ6azl2ejgvdnk4N3Z6MC92ekU5dnkwNHZ5azN2elUvdnkwOHZ6MCt2ek0vdnpNNnZ6TTd2emsrdnkwNXZ6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnF1QWxqbVJwamttcXJteXJYZ2tNeCtxQXZPazgwM2hDT1E2SzYwVktSR0tYQnJBaEdrd0dKbDdob0VqOWdva0JZRHZJc1NLSDhERjdTMHkyZ01sS0JsTlFrU1R0RmxHaXdjYThHV0pDOXc3L0xqSUpOeWQxaENnWEJnSUdlWDR3QmhBTVBDbUtWWUFKREFxU09TSUxDQXVGUlJWd2dqcU9wNU9YbHlVTEFSR0ZDUXVrSW5ZQkRBK29DdytnZml1dHNpa0x3TUV0b1NJU0VzYTBnbm5DcG8ycXFzclR5OURQMXdraEFDSDVCQWtGQUJVQUxBQUFBQUFZQUJnQWhKVFMvTlR1L0t6cS9PejIvTFRlL0tUaS9OVCsvTHo2L0p6YS9MenEvUHorL0p6Uy9NejIvUFQrL05UeS9MVHkvT3o2L0x6bS9OeisvTVR1L0p6Vy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXb1lDV09aR21PU3FxdWJLdFdDZ3pIS2dTOTZUelR1QklVQklmclJTSkdDb1dJYUJBWW1IZ1R3U1RsUUFvSEZBcGlrR3NKdnFvRzE1ZWxCRll5V0hScUdpQVFGR2RSeHRLbG1NN3VjTytpYzA5RkJBc0VNU0l4REE4TVBIWXhBUUFBQ3dFN0NvaUtmQUVMajJlRk1IK0Fob0tFS0hTTGVwTThmS2s1SkEwU25DVUtEYStHTWhJSHJxV3hFZzJNTEx0aHNtRXRueUlHRXNTMHVSVU52S1o2cXFuSTBzbU0xYzRoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenkvT3o2L0t6cS9OVDYvS3ptL1B6Ky9MejIvS1RhL056Mi9QVDYvT1QrL0p6YS9OVDIvTVR1L056Ky9KelcvTlR1L096Ky9MVHEvTlQrL0xUaS9NVCsvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdySUNhT1pHbU9ScXF1Ykt0aUJnekhLYVlvYzE2LzY1d1VoWVRyUlNJNmdCT1JJb0lyMFF5TlFTRDFDeG9VQ0FoQ3NHTU5KaE9WZ211SU1CQ01TQzhHYXhTbUpnWGpMSERLWnQzWkV0Y2QrbHN5VjJ3bklnWVZFQldETVEwSGNIazFFUUNTRVhoUUJ3Ui9aUkFBRUdxS0VvT0VoZ0FWVFlFNlQ2ZzhtUzRLTEU0TG9VVTFkakVMQjdHcEtSY1VGNm9yRHlzWExNT3ZoQ0lQRk1jb2dhbkRxTCtzZnN2VVJjM1FqelFoQUNINUJBa0ZBQlFBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHppL0t6bS9PVDIvTVQrL09UKy9LVGUvTlQyL1B6Ky9NenUvTno2L0p6YS9OenkvUFQrL0x6Mi9OeisvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdnSUNXT1pHbU9US3F1Ykt0U0RBekhLU3pNZVAydTgyRVlCOWVyRkJNMWZnMlJBSElqeWh5RFJjb0haQWdVV0lHT05laXFJcEVVNVBGUVFIaEZTbUFRT0YyenppSnRQbHNlY3NLOFMyWk5uMkFGQUFWcE1RNFNEblJiYWdDTWJTdUdCSG9NQVl3QUFUVWlER0YvS0lFRlRYeDRvaXd6a3FaRUNYNGttcXFoQ1FpcGlab1RFWGdzc1Y4cllhU2NGQk1UdlpsOGliV0tXNmFTd2NyQ3NxT0pJUUFoK1FRSkJRQVlBQ3dBQUFBQUdBQVlBSVNjMXZ6Yzh2eTA3dnowK3Z5ODV2eXM0dnpjK3Z5OCt2ekU5dnpzK3Z5azN2eWsydnk4OHZ5czZ2emsrdnljMnZ6azl2eTA4dno4L3Z5czV2ek0vdnpNOHZ6cy92emsvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZvQ0Ftam1ScGpsS3FybXlyWWhJTXgrbHMxM2llSjlPVXVLK1RxREpwVkVRU3lNQkV3eGdZZ1ZTQzRKTU1Db3ZDUUtkaUNCaXFiUXJ5VUNpaXI1Z0l3akNjcmdwdHFTbkx6UWJLRzNEdnF0ZUVTQVFMQkdveURnY09OSW8yQVFDT0FUTXBCZ2NHZkJLTmozK1JnSUdEaFUxMm9ZdVdwSnBJRm9VbEVBZ1FURElXRktpakVnZ1JDSG9zc2k0QkNKVXJuRTRYd0hWNnhhS2xmTVBLb0xQR05DRUFJZmtFQ1FVQUdnQXNBQUFBQUJnQUdBQ0VsTkw4ek9yOHJPcjg3UGI4dE9iODFQYjh2UHI4cE43OHhPcjg1UGI4dFBMOC9QNzhuTnI4dE9yODdQNzhyT2I4NVA3OG5OTDgzUEw4N1ByOHhPYjh6UDc4cE9MOHhQTDg1UHI4dE83OC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUJhYWdKbzVrYVk1THFxNXNxMm9MRE1mcGJOZDRuazlOTTdtdmswZ2l5QlJFaTBHc1JOTmdMcGlVby9kYlBBNkVWK3VpdUxnR0I0c2xzWktKbnBpVDFaSmxtbW53MllKOEE5cGRzcUFRUmpsUWxqSVlCZzV4T1JvU0RJa0pjZ3NPQmhCM0M0aUpFalZJbG5zTGZYOG9lWVdmZFpFckF3RktaU1I2SkFNQXJBTnVNUTRWaElVQkFCRUFBVG9yc3kycnQ2YVlRaEFRSXdtbEprMkd5cCtpa1h2UHlKNTEwemdoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenEvTFRxL096Mi9LVGUvTXoyL0x6Mi9QeisvTnoyL0p6YS9PeisvS3ptL0p6Uy9MenUvS3plL09UKy9MVHUvT3o2L05UKy9NVCsvT1QyL1BUKy9KelcvS3ppL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsSUNhT1pHbU9SNnF1Ykt0aUJ3ekg2V3pYZUo1WFRWTzVyNU1JSVJBZ1JJZEJyRVREUkFxUkZNK1hFbHdFcjFiQlVIQU5Mb3RGTkR0NlBrNEhBUUhMbE1seXMwUDBCcXk3M0VzaE11QUk1R01LRXdvMGhEWVVDUVFKRkhFSGdZTjJoNGtVTlNoNktIeCtsWVZ3bklSMkxBTUJTaXRNUHljREFBd0FBMjB4RlJLUE53R3BBSDZlSzQ4dEE2b1dvNVI2RDJjaUZLSW1UWENtbll5ZmRwYk9KTWViMGpjaEFDSDVCQWtGQUJZQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9NenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTFRpL09UNi9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXb29DV09aR21PUjZxdWJLdGFCd3pINld6WGVLNFhSZVMrSjFGQ0lLQ0lEajRUelZJaCtBNFZYaVhGUURCZXJZQ0M0SW9ndmsvY0tPSThIYXJYMGxLV215RnA4Sis4SmFzSGo0YUpKSFprRWhad056RUREb1VKYmdjTGYzTUhDWVVPQ1RVb2R5Z1NlbnhzZ3BwdGpDMERCZ01zYWxNbkF3Q25BMm95RlE5VGdRY0dwd0FHT2l1dUtRME5LYWFua1VCQkZCQUtoeFlKQnNRa1N6c0ZXSytkblpUUnlXek9telFoQUNINUJBa0ZBQlVBTEFBQUFBQVlBQmdBaEpUUy9OVHUvS3pxL096Mi9MVGUvTXorL0tUaS9MejYvUHorL0p6YS9NejIvTVR1L1BUKy9Mem0vTlQ2L0p6Vy9OVHkvTFR5L096Ni9Lem0vTlQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsWUNXT1pHbU9TS3F1Ykt0V0NBekg2V3pYZUs0cmlydWVJMGtrTWhDOVNyUUt3OEZROFZTTHllTFZjaHdjdnNsRXdKS0psakVUSWpwRmVtbm9HUlh0YTdlOFFHU2dBUW5MR0lYbUxTMlpHQ1pGSzNoTmJnTUdoeEkxY1NjSWMzVW9Namw3azI0dUF3RURYU1FJZWlZREQ2QkZtM2NVaEkwQktRRVBDUW1vYklJcUJBQVBCQWdEQ2FFL1FBZ1BBTE14bDZLamFTa0V2YlhFcno0QnJtMkx6OE9VeVRjaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlR1L0t6cS9PejYvTVRxL05UNi9Lem0vUHorL0x6Mi9QVDYvS1RhL05UMi9NenkvTnorL0p6YS9MVHEvT3orL01UdS9OVCsvTFRpL0x6Ni9QVCsvTnoyL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXaTRDV09aR21PUjZxdWJLdGVCd3pINld6WGVLNHZoYnVlb3dFQ01SQzlTclJMcFZGUkxSZ3F4Z09xVXpVb0RkOUQ4R0RKak5uVFFRcEZmbW5vMmF2cWEvOWl3Sk9GWUNIRktwTG1MWjB3K0JOcUIwdE5ibjErQXpWeFFITjFLREk1ZTVGdUxna0JDVjUyZWlZSkRnNEtSWFl5Z3lvQkFTa0JuZzZtYUN5RUJ4TUFBQk1IQ1FDZWlFZGlzYkdBbGFDaGFTbXdBQXFRYkMyVmxtNkt6TUNTd2NFaEFDSDVCQWtGQUJRQUxBQUFBQUFZQUJnQWhKelcvTlR1L1BUNi9MVHUvTlQrL0x6aS9Lem0vT1QyL01UKy9PVCsvS1RlL05UMi9QeisvTXp1L056Ni9KemEvTnp5L1BUKy9MejIvTnorL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXY0lDV09aR21PVEtxdWJLdFNEQXpINld6WGVLNDdqcnVlbzRoRUVrR2RhTERKaXFkeURBSTNWZ0toZEEydUxKbUkwUU1Hbmlha0xCZU4rczR0TGRCMGFCeElzY2drUXF2ZkRQZ2lhNDVtQ1BBR2RERnJRRzF2Um5aa2luVjlLd0lRQWxsd2RDY0NDZzhLQWlWSWNvSU1BUUVwRUFxWEVEb3JuZ1VBQUFWK2w1ay9RQXlycXpHUG1wdGpkYXFzaXpOb0RRR1JaNFRGY0xwbHZnd2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSnpXL056eS9MVHUvUFQ2L0x6bS9LemkvTno2L0x6Ni9NVDIvT3o2L0tUZS9PVDYvS1RhL0x6eS9LenEvSnphL09UMi9MVHkvUHorL0t6bS9OeisvTVQrL016eS9PVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2pJQ2FPWkdtT1VxcXViS3RpRWd6SDZXelhlSzR2bEx1ZXFNTWhCaFRSWUpmVndxQXlOQUkzMXFXU2REVUVEWmJNbUNDYUFnMkQ2U2pMUmFPK2RHdGJMQ1VDRUJLdFI2dmZKaE5IUFRXZ0ROUXBlUk12YlNjSkZnbHlaWFptallBc0F4Qi9QeVFMRFhFbUF3VU1CUU1sUncwTlF5a0JBU2tRQ3FtbWV5cVdFQ2tFQUFBRUVwb1BuWlJBRExJTUlwR2VuNHN6c1ErMGpLdytwWUNGekViQ2ptY1NJUUFoK1FRSkJRQVpBQ3dBQUFBQUdBQVlBSVNVMHZ6TTZ2eXM2dnpzOXZ5MDV2elU5dnlrM3Z5OCt2ekU2dnprOXZ6OC92eWMydnkwOHZ6cy92eXM1dnprL3Z5YzB2emM4dnkwN3Z6cyt2ekU1dnpNL3Z5azR2ekU4dnprK3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZwMkFtam1ScGprcXFybXlyWmdvTXgrbHMxM2l1WTQrN25xakRJUVlVMFdDTlZhT1h3bHd3TjFhamtuUmRHQmVXekpnRU9xR2xveXdYamZyT3JXMnhOSWxNU0RSbUdVY1FTR2dySmxvaGtSQmVheWR0RFhCamVIT0hMUU1CQTJlTldpTUpBSk1ESmdvT0JnNUVLREFCRUFBUUFTa1JFU2tKQmhZV0NUb3BBNkFBalJRTEN4UXBCQlovUHlTTENTSUdCZ3NHUnF1V2hqT3l0R1NzUGhHcmFJSFFSc2JLaVRRaEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXpxL0xUcS9PejIvS1RlL016Mi9MejIvUHorL056Mi9KemEvT3orL0t6bS9KelMvTHp1L0t6ZS9PVCsvTFR1L096Ni9NeisvTVQrL09UMi9QVCsvSnpXL0t6aS9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbElDYU9aR21PUjZxdWJLdGlCd3pINld6WGVKNWppdUt1SjlSa0VndUthREJmclRlTEZDSTNWa1ZTK1JVTUJaYnM2QXM2SHlha2JFZW0vYzZ1cmJGVVFWUkl0RWMxZW1zSUdtYVZISjFxUVBBMWF5ZHRieWhqWm5SbEt3TUJBMmVPV2lNREFBd0FBMkVDRndKRmhnY0JBQllBQVNrVUZDa0RCQXNYRVRxbmxReW1BUWtFb3djQ0M1dEFKQlNOSWc0SkNRNUhyR0dITTdLMFpUTm9wWHlDejBmR3ltUWhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSnpXL05UNi9MVHUvT3oyL016Ky9NVHkvTHpxL1B6Ky9Lem0vT1QyL0x6Mi9PeisvTHp1L01UMi9LVGUvTlQrL0xUeS9QVDYvTXp1L016cS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3I0Q1dPWkdtT1I2cXViS3RlQnd6SDZXelhlSjVmMXVLdUp4U0JFQXVLYURETGE3R1lXUUpObmNwQ1VMb0NpZ0JMZGxRR0Z3MkxDU25ibVdtL3RLdGNLUm92a1lSYlZvQTAwRGRhUVZCQXB4b0tmV29IZTRKdUIyMXZJaEVWWWlobGVHZDVLd01UQTJrUkxTUURBSjBEWXdZSUJuTmxFNTBBRXlrRGNnY1JDSzlXTXlxY25YSVNEZzRTS1F3SURGc2tDUk1KSWhTNEZFZVpZNUF6RTdpNmtYNXBxNE9LMVVmTGttWWhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSlRTL05UdS9LenEvT3oyL0xUZS9NeisvS1RpL0p6YS9MejYvUHorL09UNi9KelMvTXoyL01UdS9QVCsvTHptL05UNi9OVHkvTFR5L096Ni9Lem0vSnpXL05UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3A0Q1dPWkdtT1NhcXViS3RlQ1F6SDZXelhlSjVmanVPdUoxS2hFQ1RSWUw1YWIrYUFPRzRzaHlYWlVpQWdMSmtvNFFzMm42V2piRWVtL2M2dUdXRkJpQlZoQS9jMkFGZ0FBdEFiUThJd0p3SjJkMmdKZTMwMU1HdHRiekFLY21NdlpYa3RBd0Z4ZzBBakF4V2JBeVlKRFJRTmptTUJGUWNWQVNrVEV5b1Vya2t6S3BxbmNSRVVCcW1mQXFLWW1aVWlEd1lHRDF1SFJvOHpFUVlVdVpLREE1Wm5pOU5ieUpGa0lRQWgrUVFKQlFBV0FDd0FBQUFBR0FBWUFJU1UwdnpNOHZ5czZ2enMrdnlzNXZ6VSt2eTg5dno4L3Z5azJ2ejArdnljMnZ6Yzl2ekU2dnpjL3Z5YzF2elU3dnkwOHZ6cy92eTA0dnpVL3Z5OCt2ejAvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnFhQWxqbVJwamtlcXJteXJXZ2NNeCtsczEzaWVXMVhscmlmU3BCRWswV0MrV205V2FWUnVyR2F5dGFBMFdETFJ3UmM4WEUxSDJXNU0rNWxkTTRsREVpdkNFbTN0QStBQVBLQzNBcVJRUHN6ckQyY0hlbncxTUdvU0NXNXZjV0lIY0hoa015c0pEM0NDUUNNSkNBb0lBMkFQQW9FbE5BOE9DZzZqQ1lvcEFnSVFMeXliblFNSEN3UUVDeW1oQVZna0E1WWlETGdNV29aR2pqTzN1WktZQTdWbmk5SmF5YzFsTUNFQUlma0VDUVVBRkFBc0FBQUFBQmdBR0FDRW5OYjgxTzc4OVByOHRPNzgxUDc4dk9MOHJPYjg1UGI4eFA3ODVQNzhwTjc4MVBiOC9QNzh6Tzc4M1ByOG5OcjgzUEw4OVA3OHZQYjgzUDc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmFNZ0pZNWthWTVNcXE1c3ExSU1ETWZwYk5kNG5zT1J1NTZreVFSSW92RmV2UmxqUW11dUlwT2VLNEZnL21JaVJ2TEVjR0NMTXRsdTdQU1pXYk1Db1BBRk1nUnRSZ0JBRDl5YU1JZkVxNXpYejEwU0JDOHdhZ1VDUkZsd1lGZDRaRW9xQWhCd2dEOGpBZ29BQ29nbUVBTVFKalFRRHdvUEVERkpLUU9yTHl5WUNwc01Cd1lHQnlrQkF3dG9KSktjRGJRTktGeGlUYk8xajVVQ1VtYUp6WXgzMEdNaEFDSDVCQWtGQUJrQUxBQUFBQUFZQUJnQWhKelcvTnp5L0xUdS9QVDYvTHptL056Ni9LemkvTHo2L01UMi9PejYvS1RlL09UNi9LVGEvT1QyL0x6eS9LenEvSnphL056Mi9MVHkvUHorL056Ky9Lem0vTVQrL016eS9PVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXZ1lDYU9aR21PVTZxdWJLdG1Fd3pINld6WGVKN0RnN3VlSkFvRlNLSmxGb2NHYmpDYllHalFsVVBpOENVc3oxOU0xRUFzZ001dFVTYmJtYU8rTkd0R1lCREU0Qm9xQUtnSGJsQVlzaENsMjlVVEJRY0xMekJ0YjBRaWhZcGxlV2Q0S3dNTlBZQS9Jd01HREFaTUpnME9FU1kwRFFxa0VZNFREZ0lPa0NtWXBDa0pGUUlKS1FHZmF5U1NuQmNWRlJlSlpYaXhGYlNuVFpWcXdNcU14bzg0SVFBaCtRUUpCUUFaQUN3QUFBQUFHQUFZQUlTVTB2ek02dnlzNnZ6czl2eTA1dnpVOXZ5azN2eTgrdnpFNnZ6azl2ejgvdnljMnZ5MDh2enMvdnlzNXZ6ay92eWMwdnpjOHZ5MDd2enMrdnpFNXZ6TS92eWs0dnpFOHZ6ayt2ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGbzJBbWptUnBqa3Fxcm15clpnb014K2xzMTNpZXorNWFEb0hCNlBFNGxXZ0RBQUNTb0RrVkRTY3ZGVmdDQXE1RzVjR1NaWkpMb1VuQkhjdUFUZWxPMTJ0M1V4UURKV1lVdlZDSmhUNXlVMDhPWlNvUmVndHBiUmdIVVRVd2NYTjFkb3QyTW10cWxTeUdiajRvRGdZRWRDVUpGd2xtQ2drR25FMTlGd3dYZlNzRW5Ta1RFcDRwR0JjWVhTU2xkQVVFQWdXUGszMnpFaE9VVTVsdXdzeVNsWDNRQ2lFQUlma0VDUVVBRndBc0FBQUFBQmdBR0FDRWxOTDh6T3I4dE9yODdQYjhwTjc4elBiOHZQYjgvUDc4M1BiODdQNzhyT2I4bk5MOHZPNzhyTjc4NVA3OHRPNzg3UHI4elA3OHhQNzg1UGI4OVA3OG5OYjhyT0w4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmFiZ0pZNWthWTVIcXE1c3ExNEhETWZwYk5kNG5zL3VXZzZCd2NqaE9KVm9BOEFDTUloUmFLa0VsSmNLTENzQkZ5VWk5Y1V1eVFyemRKQ2FhT0RBWk1lRzl0NnRXYUNSTlpLK3FBbWhRcGpjcG1VU1ppb1RmQVFJY0FjUUVnNHZNQUVXZFhZaWVKUXliWDkvTEUySkxIY0NGZ0tWSXdNRkVHY3dBeFlLQkJDQUJ3VVBCWm9xQWdxaUJ4UU1ERStLcHA1M1RTSUlBZzhJazVkL3VyeVluYzdJMEphdm1Xd2hBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSnpXL05UNi9MVHUvT3oyL016Ky9NVHkvTHpxL1B6Ky9Lem0vT1QyL0x6Mi9PeisvTHp1L01UMi9LVGUvTlQrL0xUeS9QVDYvTXp1L016cS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV200Q1dPWkdtT1I2cXViS3RlQnd6SDZXelhlSzRYamJ1V2c4bEFWRkZBS2ljU2JRQm9EZzZSUm1GbG9WbFZreVpnNHJJUXFyL1loZGxNbkE1VkUrMlNtQ1J5Tit2TVIyL05KQlJ1VWxrNkRCeUFabkE0WGd0WENZQU9iM1VMQklZMU1IZ1NZbnN5ZkhLRG1GY3JFWFV1U2dZSUJwUWtFUUVSYWpBUkNLeWRjUUVLQkhFckRBZ01LZ1VGWUFNQmp5OUtybXdDQW1hVmF6a1d1V0J4YzU2ZWxkQ1h6SmszSVFBaCtRUUpCUUFXQUN3QUFBQUFHQUFZQUlTVTB2elU3dnlzNnZ6czl2eTAzdnpNL3Z5azR2eTgrdnljMnZ5ODZ2ejgvdnljMHZ6TTl2ejAvdnpVK3Z6VTh2eTA4dnpzK3Z5czV2ekU3dnljMXZ6VS92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcDZBbGptUnBqa3Fxcm15cldnb014Mm9Rdk9rODA3aENBQUNDNjBVYUJBYXd4UUt3aUoxRXRBR0NRaG40bU1KVWc3ZExCYWlJbThLbWFsUzJLNWxGU2tFZ1RZb3RYR2EwY25ONDNuRGZtZ1VTTjArQ01BMEdCQVlST25tRUJYSXFBd2FSRVh4eGpVUUtEd2tQVG9OemQ1K0tlcFNVSkFvVEVoT2NKQTBPRFo0S0VyR09QQTRNRHFFcnA2a3BEQXhsclN3bFJCRVFFRytDTkxpOVBiaWpmSjNRVURLTDFIY2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016eS9LenEvT3o2L05UNi9Lem0vTHo2L01UcS9QeisvS1RhL056Mi9QVDYvSnphL05UMi9MVHkvTnorL0p6Vy9OVHUvTFRxL096Ky9OVCsvTFRpL01UdS9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV21JQ2FPWkdtT1NLcXViS3RpQ0F6SGFoUzk2VHpUT0ZJQmtJcnJSVnBFRmpBSUFCZzdpV2lEQkNNeDhDbUZxUXR2bDRvd3ZqZmpNZnZRcm1TWWhUU0JOQ0cwYnRrZ1V0M203cnlodmlWVEhCUk9nVThMQllWSWVEcHZGSEFxaElWMWVoZUxSQmgrZ0lKT05JbDJuRng3bnlRSUFSSUJUU1VJQ2hkeEtSSUNFb2dwQ2dZUG15c0JBcVVwRFFRclpTeW5PUmdURGc1dGdacDRDTHM5dForZ21OQXluYkIySVFBN1wiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5jb25zdCB1c2Vfc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvaG9va3MvdXNlLXN0b3JlXCIpKTtcclxuY29uc3Qgc3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdG9yZVwiKSk7XHJcbmNvbnN0IG1vYnhfcmVhY3RfMSA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xyXG5jb25zdCBWaWRlb0luZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZV9zdG9yZV8xLmRlZmF1bHQoKCkgPT4gbmV3IHN0b3JlXzEuZGVmYXVsdCgpKTtcclxuICAgIC8qKlxyXG4gICAgICog6KeG6aKR55u45YWz5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHZpZGVvSW5mb0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlb0R1cmF0aW9uIC8gXFx1ODlDNlxcdTk4OTFcXHU2NUY2XFx1OTVGNFxcdTk1N0ZcXHU1RUE2XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Ioc3RvcmUudmlkZW9UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBzXCIpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW8gRGF0YSBSYXRlIC8gXFx1ODlDNlxcdTk4OTFcXHU3ODAxXFx1NzM4N1wiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS52aWRlb1JhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIga2Jwc1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvIFNpemUgLyBcXHU4OUM2XFx1OTg5MVxcdTY1ODdcXHU0RUY2XFx1NTkyN1xcdTVDMEZcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUudmlkZW9TaXplIC8gMTAwMCAqIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrYlwiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcIlxcdTk5OTZcXHU1RTI3XFx1NTZGRVxcdTcyNDdcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0ZpcnN0RnJhbWVJbWFnZSwgcmVmOiBzdG9yZS52aWRlb0ZpcnN0RnJhbWVSZWYsIHNyYzogc3RvcmUudmlkZW9GaXJzdEZyYW1lSW1nIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZG93bmxvYWRJbWFnZSwgb25DbGljazogc3RvcmUuZG93bmxvYWRJbWcgfSwgXCJcXHU1QkZDXFx1NTFGQVxcdTU2RkVcXHU3MjQ3XCIpKSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0Zvcm0gfSxcclxuICAgICAgICBzdG9yZS5sb2FkaW5nICYmIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGluZ0ljb24gfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlcy9sb2FkaW5nLmdpZlwiKSwgYWx0OiBcImxvYWRpbmdcIiB9KSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5sb2FkaW5nVGlwcyB9LCBcIlxcdTZCNjNcXHU1NzI4XFx1NTJBQVxcdTUyOUJcXHU4M0I3XFx1NTNENlxcdTRFMkQuLi5cIikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZVRpdGxlIH0sIFwiXFx1NjdFNVxcdTc3MEJcXHU3RUJGXFx1NEUwQVxcdTg5QzZcXHU5ODkxXFx1NzZGOFxcdTUxNzNcXHU0RkUxXFx1NjA2RlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmZvcm1JdGVtIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5mb3JtSW5wdXQsIG9uQ2hhbmdlOiBzdG9yZS5nZXRWaWRlb1VybCwgdmFsdWU6IHN0b3JlLnZpZGVvVXJsLCBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeinhumikeeahOWcsOWdgCcgfSkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdChzdHlsZXMuZm9ybVN1Ym1pdCwgc3RvcmUubG9hZGluZyAmJiAnZGlzYWJsZWQnKSwgb25DbGljazogc3RvcmUuc3VibWl0IH0sIFwiXFx1ODNCN1xcdTUzRDZcXHU3NkY4XFx1NTE3M1xcdTRGRTFcXHU2MDZGXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlbywgcmVmOiBzdG9yZS52aWRlb0VsLCBzcmM6IHN0b3JlLnZpZGVvVXJsLCBhdXRvUGxheTogdHJ1ZSwgbXV0ZWQ6IHRydWUsIGNyb3NzT3JpZ2luOiBcImFub255bW91c1wiLCBvbkNhblBsYXk6IHN0b3JlLnZpZGVvSW5pdCB9KSxcclxuICAgICAgICBzdG9yZS5zaG93SW5mb1N0YXR1cyAmJiB2aWRlb0luZm9Db250YWluZXIoKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBtb2J4X3JlYWN0XzEub2JzZXJ2ZXIoVmlkZW9JbmZvKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbW9ieF8xID0gcmVxdWlyZShcIm1vYnhcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlZ2V4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL3JlZ2V4XCIpKTtcclxuY2xhc3MgVmlkZW9JbmZvU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KeG6aKR5Zyw5Z2AXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy52aWRlb1VybCA9ICcnO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinhumikeaWh+S7tuWkp+Wwj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmlkZW9TaXplID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDop4bpopHnoIHnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZpZGVvUmF0ZSA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KeG6aKR5pe26Ze06ZW/5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy52aWRlb1RpbWUgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinhumikemmluW4p+WbvueJh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmlkZW9GaXJzdEZyYW1lSW1nID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pWw5o2u5Yqg6L295LitXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5piv5ZCm5bGV56S65L+h5oGv5qCPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zaG93SW5mb1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluinhumikeeahOWcsOWdgFxyXG4gICAgICAgICAqIEBwYXJhbSBlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5nZXRWaWRlb1VybCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9VcmwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXJlZ2V4XzEuZGVmYXVsdCgndmlkZW8nLCB0aGlzLnZpZGVvVXJsKSAvKirlvZPliY3lnLDlnYDkuI3mmK/kuIDkuKrop4bpopHlnLDlnYAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXRCdG5DbGljaygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54K55Ye75o+Q5Lqk5oyJ6ZKu5pe25Zue6LCDXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdEJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmlkZW9VcmwpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfor7flhYjovpPlhaXop4bpopHlnLDlnYAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlZ2V4XzEuZGVmYXVsdCgndmlkZW8nLCB0aGlzLnZpZGVvVXJsKSAvKirlvZPliY3lnLDlnYDkuI3mmK/kuIDkuKrop4bpopHlnLDlnYAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ2dldCcsIHRoaXMudmlkZW9VcmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgJiYgKHhoci5yZWFkeVN0YXRlID09PSAzIHx8IHhoci5yZWFkeVN0YXRlID09PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gKF9hID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlck1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBbU3RyaW5nKGhlYWRlcildID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvU2l6ZSA9IGhlYWRlck1hcFsnY29udGVudC1sZW5ndGgnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1JhdGUgPSBNYXRoLmZsb29yKHRoaXMudmlkZW9TaXplIC8gMTAwMCAqIDggLyB0aGlzLnZpZGVvVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWcqOinhumikeWPr+S7peaSreaUvuaXtuWbnuiwg1xyXG4gICAgICAgICAqIHZpZGVvIG9uQ2FuUGxheSDml7blm57osINcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZpZGVvSW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Y2z5pe26I635Y+W5Y+v6IO95Lya6I635Y+W5LiN5Yiw5a+55bqU55qE56ys5LiA5bin5Zu+XHJcbiAgICAgICAgICAgICAqIOaVhemHh+WPluiuvue9ruS4gOS4qui+g+efreaXtumXtOeahOWumuaXtuWZqOadpeWunueOsFxyXG4gICAgICAgICAgICAgKiDnu4/ov4flpJrmrKHlsJ3or5UgNTBtc+WPr+S7peWHhuehruiOt+WPluWIsOWbvueJhyDlnKjop4bpopHmkq3mlL7kuIrlubbmsqHmnInlvbHlk41cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gKF9hID0gdGhpcy52aWRlb0VsLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52aWRlb1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IChfYiA9IHRoaXMudmlkZW9FbC5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmlkZW9IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy52aWRlb0VsLmN1cnJlbnQsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvRmlyc3RGcmFtZUltZyA9IGltZztcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvRWwuY3VycmVudCAmJiAoKF9hID0gdGhpcy52aWRlb0VsLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wbGF5KCkpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvVGltZSA9IHRoaXMuZ2V0VmlkZW9EdXJhdGlvbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWvvOWHuuWbvueJh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYS5kb3dubG9hZCA9IGB2aWRlby1wb3N0ZXItJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xyXG4gICAgICAgICAgICBhLmhyZWYgPSB0aGlzLnZpZGVvRmlyc3RGcmFtZUltZztcclxuICAgICAgICAgICAgYS50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgYS5jbGljaygpOyAvLyDoh6rliqjop6blj5Hngrnlh7th5qCH562+55qEY2xpY2vkuovku7ZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bop4bpopHlrp7pmYXml7bpl7RcclxuICAgICAqL1xyXG4gICAgZ2V0IGdldFZpZGVvRHVyYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghKChfYSA9IHRoaXMudmlkZW9FbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMudmlkZW9FbC5jdXJyZW50LmR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIHVzZSgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDop4bpopHpppbluKflm75cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZpZGVvRmlyc3RGcmFtZVJlZiA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinhumikWRvbeWFg+e0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmlkZW9FbCA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xyXG4gICAgICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9GaXJzdEZyYW1lSW1nICE9PSAnJyAmJiB0aGlzLnZpZGVvUmF0ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0aGlzLnZpZGVvRmlyc3RGcmFtZUltZywgdGhpcy52aWRlb1JhdGVdKTtcclxuICAgIH1cclxufVxyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFZpZGVvSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJ2aWRlb1VybFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFZpZGVvSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJ2aWRlb1NpemVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBtb2J4XzEub2JzZXJ2YWJsZVxyXG5dLCBWaWRlb0luZm9TdG9yZS5wcm90b3R5cGUsIFwidmlkZW9SYXRlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgVmlkZW9JbmZvU3RvcmUucHJvdG90eXBlLCBcInZpZGVvVGltZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFZpZGVvSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJ2aWRlb0ZpcnN0RnJhbWVJbWdcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBtb2J4XzEub2JzZXJ2YWJsZVxyXG5dLCBWaWRlb0luZm9TdG9yZS5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFZpZGVvSW5mb1N0b3JlLnByb3RvdHlwZSwgXCJzaG93SW5mb1N0YXR1c1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5jb21wdXRlZFxyXG5dLCBWaWRlb0luZm9TdG9yZS5wcm90b3R5cGUsIFwiZ2V0VmlkZW9EdXJhdGlvblwiLCBudWxsKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmlkZW9JbmZvU3RvcmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUt3QUFBRFFDQU1BQUFDdEQzcFFBQUFBUEZCTVZFVkhjRXlQMk9PVTJkK04yOXVmMWV4OTRzdDk0c3gvNE02eXlmK3p5ditIM2RXenlQK0wyOW1PMnR1enlmK1cxZVd4eWY2eHlmNnd5ZjZ2eVA0aUJpSFVBQUFBRkhSU1RsTUFCZzBXSFNjNVRVZzVabHVGb1N1eGNvaWFyQlZXT3d3QUFBM0ZTVVJCVkhoZTdKWFJDc013Q0VXbjZmOS84eEFiRHNGSTJZTnBCcm5YeGU3dGNHUHc4MmM2T2pvNk9qb1M4L2FFN3UwbDQ3ZnNHMmRrMnpCaG1ZQUwvRHMrSU9uRi82MW9vUVFOZTl0cVFvV1lTZFB0eDE3akNydEV2d2M3SnVxa25ORGVKVnZNQWNEdzNqRlMxa3d2WmtvVE9pbDJUa2VOc08rUjkrNkd6ejdRaTVrQ0NxRWIzRkh2aGdveWxKbFVaQ1daZDloZ0hKNzlsRk90clE0ekVEOWtxcjJzTDF1aXJDbFFpVExsOUdiVzVjbUdEWm9DdyttMnRpeFZJclhLNTdQemdhZ2RWMWVQTEhtYTg2dkhhdVVxaGlOYUpnRE85T1l4cU91U1paMHlBaytKUnBXUHExUGliRDNGVzQrOGkvWlV0cVBneEY0ejFkNDdSMGcxdlB5Y1VadFhXN0VRMGxUMVB2UVoxYXpGTzB2U1ZIWFlUWkpUNGxiK3dBUlA5aE9rRWxGaDFXYXNyUkFUMW9tNC9VQUtJNXdtTFV3MnoxWGRITFBYNURaRy81bnFycDljQTJsWVQvSHFGVXBVbjJzY1ZwS2RvRHBwUkRYVlFQNk0ycndjRjh4UlYyV3NjVmFUeGQvOGNGVHJFOUIyWGEyZTh3T3FmR2szb3gyNWJSaUt0aXRMazNTenpmLy9iYlZpaUFOZDBnTllCU2xQOXZYZ2hMcWlCeU9jeGo1bFAybE56TDcrS1VCVjRHZzFUOU4yWjNSK0p2R3N5bkZReTYyQzIvamZCelVZdlhycjEvY3FEQUtBeWRWVWFvcHFvT3Z2Zkd4Vm5yRW9SV3ZBelVtL2ZTN08zbHhyTHpJTHErWVZkUy8xV3FpbTgxcXNodHA3Q2FpOFh5c3A1ejZrNHZSUExiTVQwejY5TGd6a2VCV3ZvRXFmdWxRam5SOTdWdFdrZ1l3RFVXdUdpdFBlYUZVRExZTFZmSTBIUWQ0QTFxaXd3bGtIeTFUSVdhQ2tpbXFRelNFZFZHbEhyMG9EcjUyMTJVZFFiVm1ySWxXOGpybUt2T1l4c0REejlPK1ErcDRTMGo1R2dWZkJoWllXQ0tGNk9XbU8yc2RhbGFncWxuRUYwdWFZVi96ZkIzV3hqbEVHQzY5a2x2UnFoelpqSGI1R0FTem5RYUpWV1dkdDUybTJxUnkxM0t4Nk5WUllHNkdhVzkxUUMyRFZMSm1seWZwdS96dWxQVjdWR3l6djE3aXhjcXQ5NExXb1p6bTg4R3Fnb0ZveFUwV3JYYlMreHF2R3JJcDFyN0Q2eVhwbkZkUmVDZXVzZHozZ1dudExRY25WdnBPT0gzVm1QNVFXVk5NNks3VEEyUGNXcUQ5Zm1DM0tXVkNsWDAycmVqWE83UmhBN0h5cTJnRFdwbUpOS3hHZ1IwQlBVT2Y2K1FLMllQVEdyS015c1FSU0tIa0dxR09pL3FneVN4YUlXR09sWFdOZWFXQ1oxbFdGOHl3aDY2aVlGYkhEeEJKWVhXaXQ2cU5MRTVieFNqTkFBb3ZJV2ozdyt1ZFZnTXFSNEdKQlpYTnBDRWhlb2RXOVR0ckNEVWJMeXB3VlVRa0JSWjFyYVgyVm05MWpWbWJYdXptZ2gzajlnL3BwWmt0d1B4S3pJYlVHeEZHc0xZZWRxeTRNTU1zSXk5R1Z0bXNrOWZyOGhxMHhxNmN0WWtQSERsNWVjMkxUYXFzeVo5VXNyd1ZZamJNZ2xQVHJ3aTB5S3h0TVJrUEV4bTROdkhSc0FhejJMTFFPQ3UwZ3J1TE9JZ28rSjZnOUJhak1zN2xaS28zWFBBbFdWWFZCTkN0aWRWZDFPSlYwcnMrcU5raXppNWlOWnZkaHdIazNYS3RhVkRYYkVEdHNvVmJOY25CWncxWnRNSERYSUNObUpXUVZOZXNDcTlKRHdXakpybjR4Y2N2R1VscENGdFpmUlcyUW4yRU5zenJEMGdHWXhXdTlXWVhWRTJIa21SVTMxM3hNN0srYU5BakhBbUxCSmJzUUsxN0ZiQ21xc0Y2d3BsOW1TV2hKd3hhWU5lSXdIdkFLaGxsbzA5U2laZGxncGU4MXFNM042bHNzNHhiREZtSXhlM3JMNE5HSmkxbUd3emRkQUt2aG5uSys3d0dTOWxZdFh0OE1CVVRCSVN3WHpiaHY4SDVNYkVaclpwdUk3WklFK1hGd3ZzR0FCaTlYeXpCemt3ZFVSRFczaUQzb1dTNmJvRmFwazJtR1BKRHdjbExXVGNjK05odTVnSTVxb1cxemlkblJzNGlWSmtBc2FYQkFiQjgwZzZ4Smk5bEYyelFQNHJTVjU5YXNrd05LTDNVSU1heUoyb2xLRzR3dXFKaU5UUURzUVJ5d0ROVWV3WldtZFY1bW1mZkJKV2JQeEFKa2lPRFNFTkNHOXdYVUFnb25yQnZxbVZsZzhnVnUvalZTeThJckN3UEVIclJCY2pXUys1c2lHclBBeXBpSVd6QmpFdUQxMkN3clI5NG5CQW1FaXozMlRpeXg1YnhIWWlIbFNxdzl5QVUxQklKOTIwVWYzSGJzL3pjYlVTbmpCenB0V2dZRVk3MS9wNlZmclk3RjBxK0Ixemp2MzhXOGE0RUZsQU1oaXYwNm53M0F5L1dDUzloSzB4b3ViWkMvem9EN1dHd0ttdk5xMnphbmRiWDdoQWlwTFdIOU9qSExpdGRqWTBNczFCaTFybmFuemMxU3B4MGI3M1RrdUh0NmtRZHp3YnI2NFA3MGNyRlAwNEJ3alplNnVJWWd2S1pjRW9IUkM3RVJGOVluR3l6M3FqZjVqRlVGeDRPaE54bG1KTFdDMkhPejRlZmNNQnF2Nk9YbHNYR09rUWo1RmhPeGkvYW9aUUZ3dHEyZ2oycVRiK2lpMnNocTZ5Uml2VUFGMk1BZFdIZzFiSjMyM3V5Tyt3QlVtb0Q5UktXRzJZQWtRcU5wT2NRQVpZYUI5S25aVkt4V0RteWZKR3lIOHlhanJGdDEzTk1MZmxqVnU1d1piallpMExXb1RZWVl6RDVMZzB3c0JJdUMrMGM3cjlzRk5nYUN2Q3JLOXNMc0E3WFNBbGdGRld3dm9pMVYyMU96YUhXMVoyRkFhbUhWcGE2Q1hmUnVnZUM0UXB0dHIxV25sL3gyc1JzbEJTOTZkVVJ3V21ESkxYYVg0WjZLcFYwYkt5dmhaWStoZGhCZlRydUx4ZXpaN1RtYVFEaHpYc1UxODlIc1FPMFdCTVo3K29zU1dOT2ZjdnZ0TXk5SkNIRGxHS05sZDdFRy9NUXJacmZJMGwvSSs4ZVJrMzdnKzVrdGJCRUxxb0UrYlFNOWFza0JRYVVBUmpDNEhHUFd0dEFpMWtnZDkrekhMNWcxQUdNRk5SYUMzVyttVmxqcFdhdUQvU1VScTgwNjY5L3Z4eGU0ODNGYXVnZTEwRHFyZ1ZJUEppNWdTWUxOYTNOT2FDTndBOWhSTHdMQnhUb3JZbytpUzE1WEhiV0pWb08wUDlIeEtuMGRRK3laV2VvdUM3alJnVmJqb3lhdVc5NTRqUlMxbUdWM2dmdjc2L2ZKSEVNV0dDMWVrWnFWS081WHMrV3NpTjJHQW1nZjNFK0ZOWmcxVGwvdnl2cGloWURmQVhlemlHVTBoSFN1cjdQWFdtSGR2TDZqcFM4TTJGYmFzYkJDZTVCY3lVSDdYeTFudU42MkNnVFJObTFUSE5XV2dQZC8xeTY3SnFObGtHMUJzc2hmNy8xM3Z0UFJDTWxXOXhIQVhHNlhjdGdmc3R6OEtZZFY3SzNXVm1oWjVZRFhkUjM2WnA1K3NZVVVPTlNLaXlGcW5mZkwrNjJ3Q3V4Q1hvZGl3S3plcTJPOTYzd3dnbGpBaFZOQXhiMlFCa0VWMk0wQzY3M0tlczFzLytFd24xL1FLaWlNeWlPb091SHlWMUVGVnNSdXNud1JyUGQxZG11QTRqb083S1VoRGJiazBGV08zWC8rTGFUUXFsNmprRVlIcWpQK3VoOXdUU3RDc0VjTmRSVldqUHRmSVJXcHh2cFJ2RVo0QmUrclBVdDN0bng2TlY1dkR2Vm8xR2NJSDh1aXFNdFdTTTNyTmUyMEt1ODZFd1BROHRsbDg0UjBLVXZIdEc2YjVUVktGVVREaGRqQ3VvNi9Sd2xXT1dDMmxnQ2pMcmJrYU9lamdCYXRTaHFWTWxaTXJQVk15L1ovK0lLU1JROFE2K0pRZ3dNV3pFVllaV0x4R3YrbCtHbTFoc0RVbmpiTFAzY29xQWdCSXJCM2FuZzhncm5wUitPNnhZSnFQWkFVY2IvT21KV2pmWXFOeUhKclFTeUVPa281S3FjbG9KQWE2OTNzQ2s2am5UZnJ6eTlrd0FmQTI3eURZcUpJTGJpQ0NyR2VWSUJQMzRuenMwdXFXS0pkaUpWUmkxZ0phL21rcEtoWWRiNmdERUNMREZSV3N4ckEyWlZxVTZRS3FVVWdPYkgyV1lkdXdmajZoY3lhMWgwci8vMDdVbGx5MUVreXhleHFSV0NIamZETy9hS2Z4ZHE0QklUSHBKOWVsVk9YR2EwQkFPL1pieitZOXBjMWx4TWIyR3g3VmtXMldwYVpOVkREbk0wc203VWhzWWNCaUVxTE1VaFRtd1FyVmJHQVBnRjdaUFkzZXJhSVJYSDUwaktyTGVybW5FYkZGZGFVRlZjWk1RTVhCV29ES2xsWEJRYktxSlVVcURhcnJXdENCQWgyUEFlSUFZckxzd0lYcUJ0RjFVakxaS0VGSnNHTzNONWlOOHRtd1JwQTZqdUFVSTAzWDdPYXpZTExiczlXRjcrdlRvbTF5UG9pQUMraElnSXB5MGRCczBhVzljNjhuT2g2bGlKTC9VclhnR1FMcUZrbTVUVWJLdE9lOE1wcWNZSzV6SEppZXhsSUpuYlBXcFlrSVJkZW1xSHFlaXVIM3hwd1pKR0NEZHVXMkhhckh0Q2FzbjQwQk1BZHkyei94NFdDQ3RxT1dVckIxc3VBYVRYVUJMUFg0VGFBV2tTV3pRYXdCa1Z0KzVVemtFRnF1Rm5GOGt5OU8yWGRwV2JieUlaV2JHeHlZSFZWQjZScHpZVzNPelB2Z01Nc1RqQ2doaVlFdmdhUWdZeWw4MVZtNVdDeDNjd3VJZUJPaTV1Z2tzSXJSczNPbldEZGR3K1FXVGFMeTFlTkFVaHRBUlJlazVLT1Z4ZnZhSm1XYTlhbmdEdTI2VmMzMDJaeFZlQ056RzEzQlF0Y1hKWFVsVlk1Z0FyZUtuWTRzeHlFOW5xTHZUZG9rVm5nOXNRNlVqckZwbVB3MXI4VDV4UUlLc3dlaTZVQjZPZ1ZqTTIyWnhndUNxalpnK1l5VkRxL2ZCUm9adjRKSmxWcnFHVDJIb05xbHNWeUNERHJlQnV3V3VENkhIVE5jaFUwRjlvOG5kbmpyZ1ZxdS9udW1GMzZadjJ1a09mcnpZTDIyT3pXTTh0aXUwSEk4MllCU3lmWVk3TWs5dERzMS9RczZnQTVzTTJCZVgzQkxIb3JQOG5zak5tZi9MWWZUakEyQzlZRlpsOUp3YnhaTGkvYzMxb09LTFBCbVRWY3pnR2p6bWVXOTdUdVpvSHV3V2pualJDQTlOdk4wbGVpT01NVWxuZGRIRmtPQXRQMjFZNitYKzl2Y0UwdHNRS1dJNnVZRU10cTU4MENGM1hnaXhhMHZycmtxREY0S3RaUUI4MkM5SEJMTzJTMjJtWFcrWTBNaDlZL1QrYnlhc1R5WTVoRHM5eTAxNEViUnE0RGV0WkZWekRGUFpuWkdiTVl4dTNYUWJjTkVObkhtVVVmekdjVzc4N3h2VUlBSzh6Q0sxKy92aTJ6d0NXelZGN2VyQ3RhRnR2UDdEZ3NhUGx1QWFubE9vQlpzSElaTUN6am5nVlZXbTVhTGkvMHJCTUxyeHdFenV5Y1dmN09CbC9ZNERzNzFFSGRkU0VFdUxOOTFseU1leGJWUHNaN3BOYnR1cFpIVDJNSWw4M20yY3hDTFcyOEdyVXdHemRFOXVtdXk5YTBXU3BhTGkrbzljK1N6NWtGTHNHTzcyWDRzdUIzdExTaDVXY0d6RW81QU95ZzJqZlFnclZWQzdOOENXUGVmZzd5cEZsK3BHeTB4L2NLVkYzRVNhekFIVGZycWhZNW9Gc2JOdHYvNXVPRjdzb0VPNlZXaHRYQ0xMNng1enBnVXFpMVk2SzZRUHZpUmF4TzVOQnlkWEVRNFBZL0g1OVNQQVlhc2FnQUFBQUFTVVZPUks1Q1lJST1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9wb3B1cC5sZXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuY29uc3QgcGFnZV9pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9wYWdlLWluZm9cIikpO1xyXG5jb25zdCB2aWRlb19pbmZvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy92aWRlby1pbmZvXCIpKTtcclxuY29uc3QgdXJsX21vZGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy91cmwtbW9kZXNcIikpO1xyXG5jb25zdCBpY29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFudGQvbGliL2ljb25cIikpO1xyXG5jb25zdCBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9wb3B1cC5sZXNzXCIpO1xyXG4vKipcclxuICog57Si5byVaWTnmoTmmKDlsIRcclxuICovXHJcbmNvbnN0IE5BVl9BQ1RJVkVfSU5ERVggPSB7XHJcbiAgICBcIlBBR0VfSU5GT1wiOiAwLFxyXG4gICAgXCJWSURFT19JTkZPXCI6IDEsXHJcbiAgICBcIlVSTF9NT0RFU1wiOiAyLFxyXG59O1xyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHJlYWN0XzEudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGFiSUQsIHNldEN1cnJlbnRUYWJJRF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmF2QWN0aXZlSW5kZXgsIHNldE5hdkl0ZW1BY3RpdmVJbmRleF0gPSByZWFjdF8xLnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbmF2SXRlbUFyciA9IFtcclxuICAgICAgICB7IG5hbWU6ICfpobXpnaLkv6Hmga8nLCBpZDogMCwgZGlzYWJsZTogZmFsc2UsIGljb246ICdpbmZvLWNpcmNsZScgfSxcclxuICAgICAgICB7IG5hbWU6ICfop4bpopHnm7jlhbMnLCBpZDogMSwgZGlzYWJsZTogZmFsc2UsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6LCD6K+V5qih5byPJywgaWQ6IDIsIGRpc2FibGU6IGZhbHNlLCBpY29uOiAnYnVnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+aVrOivt+acn+W+hScsIGlkOiAzLCBkaXNhYmxlOiB0cnVlLCBpY29uOiAnZWxsaXBzaXMnIH0sXHJcbiAgICBdO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7dGV4dDogY291bnQudG9TdHJpbmcoKX0pO1xyXG4gICAgfSwgW2NvdW50XSk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFVSTCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYWJJRCh0YWJzWzBdLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8qKlxyXG4gICAgICogIOa4suafk+mAiemhueWNoeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBjb25zdCByZW5kZXJOYXZJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW1BcnIubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NuYW1lc18xLmRlZmF1bHQoc3R5bGVzLm5hdkl0ZW0sIG5hdkFjdGl2ZUluZGV4ID09PSBpdGVtLmlkICYmICdhY3RpdmUnLCBpdGVtLmRpc2FibGUgJiYgJ2Rpc2FibGUnKSwga2V5OiBpdGVtLmlkLCBvbkNsaWNrOiAoKSA9PiBzZXROYXZJdGVtQWN0aXZlSW5kZXgoaXRlbS5pZCkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGljb25fMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogc3R5bGVzLm5hdkljb24sIHR5cGU6IGl0ZW0uaWNvbiB9KSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm5hdkl0ZW1OYW1lIH0sIGl0ZW0ubmFtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW25hdkFjdGl2ZUluZGV4XSk7XHJcbiAgICAvKipcclxuICAgICAqIOa4suafk+S4u+WGheWuuWBcclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVuZGVyU2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgTkFWX0FDVElWRV9JTkRFWC5QQUdFX0lORk86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocGFnZV9pbmZvXzEuZGVmYXVsdCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGNhc2UgTkFWX0FDVElWRV9JTkRFWC5WSURFT19JTkZPOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSBOQVZfQUNUSVZFX0lOREVYLlVSTF9NT0RFUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh1cmxfbW9kZXNfMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmF2QWN0aXZlSW5kZXhdKTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogJ3Jvb3QnIH0sXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5yb290IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmF2Q29udGFpbmVyIH0sIHJlbmRlck5hdkl0ZW0oKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuc2hvd0NvbnRhaW5lciB9LCByZW5kZXJTaG93Q29udGVudCgpKSkpKTtcclxufTtcclxucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIG51bGwpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5VcmxNb2RlID0ge1xyXG4gICAgbW9jazogJ19fTU9DS19fJyxcclxuICAgIHZjb25zb2xlOiAnX19WQ09OU09MRV9fJyxcclxuICAgIGRlYnVnZ2VyOiAnX19ERUJVR19fJ1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBCYXNlU3RvcmUge1xyXG4gICAgdXNlKCkgeyB9XHJcbiAgICA7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZVN0b3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBVc2VNb3VudCA9IChmbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZm4gaXMgbm90IGEgZnVuY3Rpb24sIGlzICR7dHlwZW9mIGZufWApO1xyXG4gICAgfVxyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9LCBbXSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVzZU1vdW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG4vKipcclxuICog55So5LqO5Yid5aeL5YyWU3RvcmVcclxuICogQHBhcmFtIGNyZWF0ZVN0b3JlRm5cclxuICogQHJldHVybnMgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCB1c2VTdG9yZSA9IChjcmVhdGVTdG9yZUZuKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiBjcmVhdGVTdG9yZUZuKCksIFtdKTtcclxuICAgIHN0b3JlID09PSBudWxsIHx8IHN0b3JlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZS51c2UoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlU3RvcmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHJlZ2V4KHR5cGUsIHZhbCkge1xyXG4gICAgbGV0IHJlZztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJ2aWRlb1wiOlxyXG4gICAgICAgICAgICByZWcgPSAvXFwuKG1wNHxhdml8d212fG1wZ3xtcGVnfG1vdnxybXxyYW18c3dmfGZsdikvO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZWcgPSAvXFxTLztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVnLnRlc3QodmFsKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSByZWdleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==