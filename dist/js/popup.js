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
    // const [currentURL, setCurrentURL] = useState<string>('');
    // const [currentKeyword, setCurrentKeyword] = useState<string>('');
    // const [currentDescription, setCurrentDescription] = useState<string>('');
    // const [currentAuthor, setCurrentAuthor] = useState<string>('');
    // const [currentTitle, setCurrentTitle] = useState<string>('');
    react_1.useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // setCurrentURL(tabs[0].url);
            // store.currentUrl = tabs[0].url
            store.setCurrentUrl(tabs[0].url);
            // setCurrentTitle(tabs[0].title);
            // const bg: any = chrome.extension.getBackgroundPage();
            // setCurrentKeyword(bg?.test1()?.pageInfo?.keyword);
            // setCurrentDescription(bg?.test1()?.pageInfo?.description);
            // setCurrentAuthor(bg?.test1()?.pageInfo?.author);
        });
    }, []);
    return react_1.default.createElement("div", { className: styles.pageInfoRoot, key: '123123123' },
        react_1.default.createElement("div", { className: styles.pageTitle }, "\u5F53\u524D\u9875\u9762\u4FE1\u606F\uFF1A"),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "url / \u5F53\u524D\u9875\u9762\u5730\u5740"),
            react_1.default.createElement("div", { className: styles.pageInfoValue }, store.currentUrl)),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "title / \u6807\u9898"),
            react_1.default.createElement("div", { className: styles.pageInfoValue })),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "keyword / \u5173\u952E\u5B57"),
            react_1.default.createElement("div", { className: styles.pageInfoValue })),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "description / \u63CF\u8FF0"),
            react_1.default.createElement("div", { className: styles.pageInfoValue })),
        react_1.default.createElement("div", { className: styles.pageInfoRow },
            react_1.default.createElement("div", { className: styles.pageInfoRowHeader }, "author / \u4F5C\u8005"),
            react_1.default.createElement("div", { className: styles.pageInfoValue })));
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
        this.currentKeyword = '';
        this.currentDescription = '';
        this.currentAuthor = '';
    }
    setCurrentUrl(url) {
        this.currentUrl = url;
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
    return (react_1.default.createElement("div", { id: 'root' },
        react_1.default.createElement("div", { className: styles.root },
            react_1.default.createElement("div", { className: styles.navContainer }, navItem()),
            react_1.default.createElement("div", { className: styles.showContainer }, showContent()))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8taW5mby9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaW5mby9pbmRleC5sZXNzP2YyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1pbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlLWluZm8vc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXJsLW1vZGVzL2luZGV4Lmxlc3M/NTlkMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwtbW9kZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLWluZm8vaW1hZ2VzL2xvYWRpbmcuZ2lmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLWluZm8vaW5kZXgubGVzcz85MzgwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLWluZm8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5sZXNzPzExYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXJsX21vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL2Jhc2Utc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL3VzZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1h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LFNBQVMsdURBQXVEO0FBQ2hFO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrTEFBa0w7QUFDM08sK0RBQStELDZDQUE2QztBQUM1Ryx1REFBdUQsZ0NBQWdDO0FBQ3ZGLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrREFBa0QsYUFBYTtBQUMvRCw4Q0FBOEMseUJBQXlCO0FBQ3ZFLGtEQUFrRCxpQ0FBaUM7QUFDbkYsa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC50c3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X19wYWdlSW5mb1Jvb3RfXzFpZThBIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmluZGV4X19wYWdlSW5mb1Jvd19fZFpwdUwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmluZGV4X19wYWdlSW5mb1Jvd0hlYWRlcl9fMnpHMXYge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pbmRleF9fcGFnZUluZm9WYWx1ZV9fSVFrOEkge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uaW5kZXhfX3BhZ2VUaXRsZV9fMVFBUkMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlSW5mb1Jvb3RcIjogXCJpbmRleF9fcGFnZUluZm9Sb290X18xaWU4QVwiLFxuXHRcInBhZ2VJbmZvUm93XCI6IFwiaW5kZXhfX3BhZ2VJbmZvUm93X19kWnB1TFwiLFxuXHRcInBhZ2VJbmZvUm93SGVhZGVyXCI6IFwiaW5kZXhfX3BhZ2VJbmZvUm93SGVhZGVyX18yekcxdlwiLFxuXHRcInBhZ2VJbmZvVmFsdWVcIjogXCJpbmRleF9fcGFnZUluZm9WYWx1ZV9fSVFrOElcIixcblx0XCJwYWdlVGl0bGVcIjogXCJpbmRleF9fcGFnZVRpdGxlX18xUUFSQ1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X19oZWFkZXJfXzM2YU1iIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5pbmRleF9fbW9kZUl0ZW1fX3ZkS3AzIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmluZGV4X19tb2RlQ29udGFpbmVyX18xSEhrNiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJpbmRleF9faGVhZGVyX18zNmFNYlwiLFxuXHRcIm1vZGVJdGVtXCI6IFwiaW5kZXhfX21vZGVJdGVtX192ZEtwM1wiLFxuXHRcIm1vZGVDb250YWluZXJcIjogXCJpbmRleF9fbW9kZUNvbnRhaW5lcl9fMUhIazZcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9fdmlkZW9Gb3JtX18ySmxCeSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4uaW5kZXhfX2Zvcm1JdGVtX18yNTRYRiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmluZGV4X19mb3JtSW5wdXRfXzJobE9KIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YTZlZTA7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIG91dGxpbmUtY29sb3I6ICM0YjYyYzU7XFxufVxcbi5pbmRleF9fZm9ybUxhYmVsX19pcGJXcSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmluZGV4X19mb3JtU3VibWl0X18xQmlSdSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA5NiU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE2ZWUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjNGE2ZWUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1LmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaW5kZXhfX2Zvcm1TdWJtaXRfXzFCaVJ1OmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbi5pbmRleF9fdmlkZW9fXzJ3azF0IHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uaW5kZXhfX3BhZ2VUaXRsZV9fQ0V1Q2cge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1Jvd19fM2JnbWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmluZGV4X192aWRlb0luZm9Sb3dIZWFkZXJfXzE4Umk3IHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaW5kZXhfX3ZpZGVvSW5mb1ZhbHVlX18xLXJoZiB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5pbmRleF9fbG9hZGluZ0ljb25fXzFJenVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMTAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2IoMCAwIDAlKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiKDAgMCAwJSk7XFxufVxcbi5pbmRleF9fbG9hZGluZ0ljb25fXzFJenVsIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQ2JTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmluZGV4X19sb2FkaW5nVGlwc19fM1IweUYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxNiU7XFxuICBsZWZ0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzRhNmVlMDtcXG59XFxuLmluZGV4X192aWRlb0ZpcnN0RnJhbWVfXzFtdFFIIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLmluZGV4X192aWRlb0ZpcnN0RnJhbWVJbWFnZV9fMm8zY0Yge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5pbmRleF9fZG93bmxvYWRJbWFnZV9fMnVVNXEge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE2ZWUwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlkZW9Gb3JtXCI6IFwiaW5kZXhfX3ZpZGVvRm9ybV9fMkpsQnlcIixcblx0XCJmb3JtSXRlbVwiOiBcImluZGV4X19mb3JtSXRlbV9fMjU0WEZcIixcblx0XCJmb3JtSW5wdXRcIjogXCJpbmRleF9fZm9ybUlucHV0X18yaGxPSlwiLFxuXHRcImZvcm1MYWJlbFwiOiBcImluZGV4X19mb3JtTGFiZWxfX2lwYldxXCIsXG5cdFwiZm9ybVN1Ym1pdFwiOiBcImluZGV4X19mb3JtU3VibWl0X18xQmlSdVwiLFxuXHRcInZpZGVvXCI6IFwiaW5kZXhfX3ZpZGVvX18yd2sxdFwiLFxuXHRcInBhZ2VUaXRsZVwiOiBcImluZGV4X19wYWdlVGl0bGVfX0NFdUNnXCIsXG5cdFwidmlkZW9JbmZvUm93XCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1Jvd19fM2JnbWRcIixcblx0XCJ2aWRlb0luZm9Sb3dIZWFkZXJcIjogXCJpbmRleF9fdmlkZW9JbmZvUm93SGVhZGVyX18xOFJpN1wiLFxuXHRcInZpZGVvSW5mb1ZhbHVlXCI6IFwiaW5kZXhfX3ZpZGVvSW5mb1ZhbHVlX18xLXJoZlwiLFxuXHRcImxvYWRpbmdJY29uXCI6IFwiaW5kZXhfX2xvYWRpbmdJY29uX18xSXp1bFwiLFxuXHRcImxvYWRpbmdUaXBzXCI6IFwiaW5kZXhfX2xvYWRpbmdUaXBzX18zUjB5RlwiLFxuXHRcInZpZGVvRmlyc3RGcmFtZVwiOiBcImluZGV4X192aWRlb0ZpcnN0RnJhbWVfXzFtdFFIXCIsXG5cdFwidmlkZW9GaXJzdEZyYW1lSW1hZ2VcIjogXCJpbmRleF9fdmlkZW9GaXJzdEZyYW1lSW1hZ2VfXzJvM2NGXCIsXG5cdFwiZG93bmxvYWRJbWFnZVwiOiBcImluZGV4X19kb3dubG9hZEltYWdlX18ydVU1cVwiXG59OyIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1hZ2VzL2JnLnBuZ1wiKSkgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzBlMTAxYTtcXG59XFxuLnBvcHVwX19yb290X18xZEZzZyB7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbn1cXG4ucG9wdXBfX25hdkNvbnRhaW5lcl9fY1AzdW8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjY2NjO1xcbn1cXG4ucG9wdXBfX25hdkl0ZW1fXzlyc2VYIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguZGlzYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmYTtcXG59XFxuLnBvcHVwX19uYXZJdGVtX185cnNlWC5hY3RpdmUgLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcge1xcbiAgY29sb3I6ICM0YTZlZTA7XFxufVxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3LFxcbi5wb3B1cF9fbmF2SXRlbV9fOXJzZVguYWN0aXZlIC5wb3B1cF9fbmF2SWNvbl9fM3loRWQge1xcbiAgY29sb3I6ICM0YTZlZTA7XFxufVxcbi5wb3B1cF9fbmF2SWNvbl9fM3loRWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0NSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLnBvcHVwX19uYXZJdGVtTmFtZV9fMjB2cjcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzVmNTY1MTtcXG59XFxuLnBvcHVwX19zaG93Q29udGFpbmVyX18yb2pPciB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKuWumuS5iea7muWKqOadoemrmOWuveWPiuiDjOaZryDpq5jlrr3liIbliKvlr7nlupTmqKrnq5bmu5rliqjmnaHnmoTlsLrlr7gqL1xcbn1cXG4ucG9wdXBfX3Nob3dDb250YWluZXJfXzJvak9yOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicG9wdXBfX3Jvb3RfXzFkRnNnXCIsXG5cdFwibmF2Q29udGFpbmVyXCI6IFwicG9wdXBfX25hdkNvbnRhaW5lcl9fY1AzdW9cIixcblx0XCJuYXZJdGVtXCI6IFwicG9wdXBfX25hdkl0ZW1fXzlyc2VYXCIsXG5cdFwibmF2SXRlbU5hbWVcIjogXCJwb3B1cF9fbmF2SXRlbU5hbWVfXzIwdnI3XCIsXG5cdFwibmF2SWNvblwiOiBcInBvcHVwX19uYXZJY29uX18zeWhFZFwiLFxuXHRcInNob3dDb250YWluZXJcIjogXCJwb3B1cF9fc2hvd0NvbnRhaW5lcl9fMm9qT3JcIlxufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgbW9ieF9yZWFjdF8xID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7XHJcbmNvbnN0IHVzZV9zdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9ob29rcy91c2Utc3RvcmVcIikpO1xyXG5jb25zdCBzdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0b3JlXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgUGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZV9zdG9yZV8xLmRlZmF1bHQoKCkgPT4gbmV3IHN0b3JlXzEuZGVmYXVsdCgpKTtcclxuICAgIC8vIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgLy8gY29uc3QgW2N1cnJlbnRLZXl3b3JkLCBzZXRDdXJyZW50S2V5d29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIC8vIGNvbnN0IFtjdXJyZW50RGVzY3JpcHRpb24sIHNldEN1cnJlbnREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIC8vIGNvbnN0IFtjdXJyZW50QXV0aG9yLCBzZXRDdXJyZW50QXV0aG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgLy8gY29uc3QgW2N1cnJlbnRUaXRsZSwgc2V0Q3VycmVudFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIC8vIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICAvLyBzdG9yZS5jdXJyZW50VXJsID0gdGFic1swXS51cmxcclxuICAgICAgICAgICAgc3RvcmUuc2V0Q3VycmVudFVybCh0YWJzWzBdLnVybCk7XHJcbiAgICAgICAgICAgIC8vIHNldEN1cnJlbnRUaXRsZSh0YWJzWzBdLnRpdGxlKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgYmc6IGFueSA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcclxuICAgICAgICAgICAgLy8gc2V0Q3VycmVudEtleXdvcmQoYmc/LnRlc3QxKCk/LnBhZ2VJbmZvPy5rZXl3b3JkKTtcclxuICAgICAgICAgICAgLy8gc2V0Q3VycmVudERlc2NyaXB0aW9uKGJnPy50ZXN0MSgpPy5wYWdlSW5mbz8uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAvLyBzZXRDdXJyZW50QXV0aG9yKGJnPy50ZXN0MSgpPy5wYWdlSW5mbz8uYXV0aG9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm9vdCwga2V5OiAnMTIzMTIzMTIzJyB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZVRpdGxlIH0sIFwiXFx1NUY1M1xcdTUyNERcXHU5ODc1XFx1OTc2MlxcdTRGRTFcXHU2MDZGXFx1RkYxQVwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJ1cmwgLyBcXHU1RjUzXFx1NTI0RFxcdTk4NzVcXHU5NzYyXFx1NTczMFxcdTU3NDBcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9LCBzdG9yZS5jdXJyZW50VXJsKSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwidGl0bGUgLyBcXHU2ODA3XFx1OTg5OFwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1ZhbHVlIH0pKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93IH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3dIZWFkZXIgfSwgXCJrZXl3b3JkIC8gXFx1NTE3M1xcdTk1MkVcXHU1QjU3XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvVmFsdWUgfSkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9Sb3cgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvd0hlYWRlciB9LCBcImRlc2NyaXB0aW9uIC8gXFx1NjNDRlxcdThGRjBcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9KSksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnBhZ2VJbmZvUm93SGVhZGVyIH0sIFwiYXV0aG9yIC8gXFx1NEY1Q1xcdTgwMDVcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZUluZm9WYWx1ZSB9KSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBtb2J4X3JlYWN0XzEub2JzZXJ2ZXIoUGFnZUluZm8pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2J4XzEgPSByZXF1aXJlKFwibW9ieFwiKTtcclxuY29uc3QgYmFzZV9zdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9ob29rcy9iYXNlLXN0b3JlXCIpKTtcclxuY2xhc3MgUGFnZUluZm9TdG9yZSBleHRlbmRzIGJhc2Vfc3RvcmVfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i55qE5Zyw5Z2AXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSAnJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRLZXl3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGVzY3JpcHRpb24gPSAnJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRBdXRob3IgPSAnJztcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRVcmwodXJsKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gdXJsO1xyXG4gICAgfVxyXG4gICAgdXNlKCkge1xyXG4gICAgICAgIHN1cGVyLnVzZSgpO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudFVybFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIG1vYnhfMS5vYnNlcnZhYmxlXHJcbl0sIFBhZ2VJbmZvU3RvcmUucHJvdG90eXBlLCBcImN1cnJlbnRLZXl3b3JkXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudERlc2NyaXB0aW9uXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbW9ieF8xLm9ic2VydmFibGVcclxuXSwgUGFnZUluZm9TdG9yZS5wcm90b3R5cGUsIFwiY3VycmVudEF1dGhvclwiLCB2b2lkIDApO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQYWdlSW5mb1N0b3JlO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgdXJsX21vZGVfMSA9IHJlcXVpcmUoXCIuLi8uLi91cmxfbW9kZVwiKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVXJsTW9kZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFVSTCwgc2V0Q3VycmVudFVSTF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRhYkluZGV4LCBzZXRDdXJyZW50VGFiSW5kZXhdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYnNbMF0udXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG1vZGVJdGVtID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVybF9tb2RlXzEuVXJsTW9kZSkubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tb2RlSXRlbSwgb25DbGljazogKCkgPT4gY2hhbmdlTW9kZSh1cmxfbW9kZV8xLlVybE1vZGVbaV0pIH0sIHVybF9tb2RlXzEuVXJsTW9kZVtpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqIOWIh+aNoumhtemdouiwg+ivleaooeW8j1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGFuZ2VNb2RlID0gKG1vZGUpID0+IHtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFiSWQgPSBOdW1iZXIodGFic1swXS5pZCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXJsID0gU3RyaW5nKHRhYnNbMF0udXJsKTtcclxuICAgICAgICAgICAgbGV0IG5ld1VybCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjdXJyZW50VXJsO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSAoX2EgPSBsaW5rLnNlYXJjaCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KFwiP1wiKVsxXTtcclxuICAgICAgICAgICAgaWYgKCFzZWFyY2ggLyrkuI3lrZjlnKhzZWFyY2jpg6jliIYqLykge1xyXG4gICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke21vZGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgLyrlrZjlnKhzZWFyY2gqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKG1vZGUpID4gLTEgLyrlvZPliY3lt7LlrZjlnKjpgInkuK3nmoRtb2Rl77yM5YiZ55u05o6l5Y676Zmk6L+Z5Liq5qih5byPKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKCc/JyArIG1vZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nICsgbW9kZSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoJyYnICsgbW9kZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWFyY2ggPSAnPycgKyBzZWFyY2gucmVwbGFjZSgnJicgKyBtb2RlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1VybCA9IGxpbmsub3JpZ2luICsgbGluay5wYXRobmFtZSArIGAke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8q5b2T5YmN5LiN5a2Y5ZyobW9kZSovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlYXJjaCA9IHNlYXJjaCArICcmJyArIG1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VXJsID0gbGluay5vcmlnaW4gKyBsaW5rLnBhdGhuYW1lICsgYD8ke25ld1NlYXJjaH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShOdW1iZXIoY3VycmVudFRhYklkKSwgeyB1cmw6IG5ld1VybCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5wYWdlSW5mb1Jvb3QgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmhlYWRlciB9LCBcIlxcdThDMDNcXHU4QkQ1XFx1NkEyMVxcdTVGMEZcIiksXHJcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tb2RlQ29udGFpbmVyIH0sIG1vZGVJdGVtKCkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfMS5kZWZhdWx0Lm1lbW8oVXJsTW9kZXMpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoR0FBWUFNUUFBSnpXL05UdS9QVDYvTFR1L05UKy9MejYvTHppL09UKy9Lem0vT1QyL1B6Ky9NenUvTno2L0tUZS9OenkvUFQrL0x6eS9NVCsvTnorL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQlFBVEFDd0FBQUFBR0FBWUFBQUZuT0Fram1ScGprcXFybXlyVGdvTXgyb1F2T2s4MDdoaUFBQ0Q2MFVTT0FRd0lEQjJFdEVFamFqQUJ4U21IcnhkeWdGb0FCeXB3R0txZUVpd0s5a0VLajJWbVNUYStwaXJaKzNEZkV1V1dDU2FnRTRLQ0lRUE9uWXpFbmdDaEFob2VtZEVFMzBIZ1lCeWlKbDNlcHlTSWd3UWYyNEhjQ2d5RUFNUW1nY1JsWGdxQ1JBTUtnZXp0SHVYQlFXbGJqSjR0VDJIbloyV3hVNittOEtISVFBaCtRUUpCUUFYQUN3QUFBQUFHQUFZQUlTYzF2emM4dnkwOHZ6MCt2eTg1dnlzNHZ6Yyt2ekU4dnpzK3Z5azN2eWsydnk4K3Z5czZ2emsrdnpNL3Z5YzJ2ems5dnk4OHZ6OC92eXM1dnpNOHZ6cy92emsvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGbmVBbGptUnBqbEtxcm15clhoSU14Mm9Rdk9rODA3aEVBQUNDNjBXUzNFUUtvT0pVaEEwS2ljTEFCeFJLREFlRGpnVkplRzlHc09RZ2lMQmtsK2REZW1wRUdpWmFHakxsYmUzRC9GQ0dDRUNZZ0NJcEU0UjRoZ1k1S3hNTUUzb3FGblV4SWdnVUNJR0Fjb21HZHp1T2ppVU5CM0FuRWhXU1RURmtCNW96RlE0VmR5dWhEWThXSzZabm1Bc0xwMHlaUEtXMnJKcWVuNWZITXB2RGVDRUFJZmtFQ1FVQUdBQXNBQUFBQUJnQUdBQ0VsTkw4ek9yOHJPcjg3UGI4dE9iOHpQYjhwTjc4dlBiODVQYjgvUDc4bk5yOHhPcjg3UDc4elA3OHJPYjhuTkw4M1BMOHRPNzg3UHI4eE9iODFQYjhwT0w4eFA3ODVQNzgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJhTWdKbzVrYVk1SnFxNXNxMklKRE1jcWhMenBQTk40TWltS2lldEZTdHhFQnFCQk5BZ01URHlITlBVTEpnYUFCMkNRWXlFTUZRTTNZVXNGc29EQVNnWWpHQWl4RWtLN0xkRmd0eTZ2K2RRUC95MHlFaEFTSjRaRkNRUVJjRHA2TXhkK0NSRUNFWUFxa0VRWWd3eUhuWGVPb0R3N2xwWWxFZ1dGSjVrb01nVVJCYUVNRFp5UkthY01LZ3k0dVlHSENSWVdjYjR5amhLMG9yV2tRNTNNUmNUSTBJMGhBQ0g1QkFrRkFCY0FMQUFBQUFBWUFCZ0FoSlRTL016cS9PejIvS3ptL016Ky9LVGUvTnoyL1B6Ky9MejIvSnphL096Ky9MenUvSnpTL0xUdS9OVDYvT1QrL096Ni9MVHEvS3ppL09UMi9QVCsvSnpXL05UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV200Q1dPWkdtT1I2cXViS3RlQnd6SDZqUzk2VHpUK0JFa2lZRHJSVHBBWWhkSm9TQVJDUUlDRXk4aWlhUit3Y09FQVdEY2VDckJZQ3hJMmE3Y2loQW5PbEN0cG0xM1VxTEJ5cm44NFVuWEQvOHRNaFFHRkNlR1JSY0xFUXM4T25vUEZHQUhDdzJNZ0NtUVJCZURoWWVIZG5xT2pYNlhseVVVRGhDR0I1RlNNZzRJQktFcEZCYUZwQ2tRcVNvVUNpdVJMSjRIQkxLZU1xTXhDZ3Fpb3FXbXh0REh6TE9qSVFBaCtRUUpCUUFYQUN3QUFBQUFHQUFZQUlTYzF2elUrdnkwN3Z6czl2eTgrdnk4NnZ6RTh2eXM1dnprOXZ6OC92eTg3dnowL3Z6RTl2eTA0dnlrM3Z6VS92eTA4dnowK3Z6TS92ek02dnpNN3Z6ayt2eTA1dnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcXVBbGptUnBqa21xcm15clhna014K3FBdk9rODAzaENPUTZLNjBWS1JHS1hCckFoR2t3R0psN2hvRWo5Z29rQllEdklzU0tIOERGN1MweTJnTWxLQmxOUWtTVHRGbEdpd2NhOEdXSkM5dzcvTGpJSk55ZDFoQ2dYQmdJR2VYNHdCaEFNUENtS1ZZQUpEQXFTT1NJTENBdUZSUlZ3Z2pxT3A1T1hseVVMQVJHRkNRdWtJbllCREErb0N3K2dmaXV0c2lrTHdNRXRvU0lTRXNhMGdubkNwbzJxcXNyVHk5RFAxd2toQUNINUJBa0ZBQlVBTEFBQUFBQVlBQmdBaEpUUy9OVHUvS3pxL096Mi9MVGUvS1RpL05UKy9MejYvSnphL0x6cS9QeisvSnpTL016Mi9QVCsvTlR5L0xUeS9PejYvTHptL056Ky9NVHUvSnpXL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdvWUNXT1pHbU9TcXF1Ykt0V0NnekhLZ1M5NlR6VHVCSVVCSWZyUlNKR0NvV0lhQkFZbUhnVHdTVGxRQW9IRkFwaWtHc0p2cW9HMTVlbEJGWXlXSFJxR2lBUUZHZFJ4dEtsbU03dWNPK2ljMDlGQkFzRU1TSXhEQThNUEhZeEFRQUFDd0U3Q29pS2ZBRUxqMmVGTUgrQWhvS0VLSFNMZXBNOGZLazVKQTBTbkNVS0RhK0dNaElIcnFXeEVnMk1MTHRoc21FdG55SUdFc1MwdVJVTnZLWjZxcW5JMHNtTTFjNGhBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016eS9PejYvS3pxL05UNi9Lem0vUHorL0x6Mi9LVGEvTnoyL1BUNi9PVCsvSnphL05UMi9NVHUvTnorL0p6Vy9OVHUvT3orL0xUcS9OVCsvTFRpL01UKy9QVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV3JJQ2FPWkdtT1JxcXViS3RpQmd6SEthWW9jMTYvNjV3VWhZVHJSU0k2Z0JPUklvSXIwUXlOUVNEMUN4b1VDQWhDc0dNTkpoT1ZnbXVJTUJDTVNDOEdheFNtSmdYakxIREtadDNaRXRjZCtsc3lWMnduSWdZVkVCV0RNUTBIY0hrMUVRQ1NFWGhRQndSL1pSQUFFR3FLRW9PRWhnQVZUWUU2VDZnOG1TNEtMRTRMb1VVMWRqRUxCN0dwS1JjVUY2b3JEeXNYTE1PdmhDSVBGTWNvZ2FuRHFMK3Nmc3ZVUmMzUWp6UWhBQ0g1QkFrRkFCUUFMQUFBQUFBWUFCZ0FoSnpXL05UdS9QVDYvTFR1L05UKy9MemkvS3ptL09UMi9NVCsvT1QrL0tUZS9OVDIvUHorL016dS9OejYvSnphL056eS9QVCsvTHoyL056Ky9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2dJQ1dPWkdtT1RLcXViS3RTREF6SEtTek1lUDJ1ODJFWUI5ZXJGQk0xZmcyUkFISWp5aHlEUmNvSFpBZ1VXSUdPTmVpcUlwRVU1UEZRUUhoRlNtQVFPRjJ6emlKdFBsc2Vjc0s4UzJaTm4yQUZBQVZwTVE0U0RuUmJhZ0NNYlN1R0JIb01BWXdBQVRVaURHRi9LSUVGVFh4NG9pd3prcVpFQ1g0a21xcWhDUWlwaVpvVEVYZ3NzVjhyWWFTY0ZCTVR2Wmw4aWJXS1c2YVN3Y3JDc3FPSklRQWgrUVFKQlFBWUFDd0FBQUFBR0FBWUFJU2MxdnpjOHZ5MDd2ejArdnk4NXZ5czR2emMrdnk4K3Z6RTl2enMrdnlrM3Z5azJ2eTg4dnlzNnZ6ayt2eWMydnprOXZ5MDh2ejgvdnlzNXZ6TS92ek04dnpzL3Z6ay92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRm9DQW1qbVJwamxLcXJteXJZaElNeCtsczEzaWVKOU9VdUsrVHFESnBWRVFTeU1CRXd4Z1lnVlNDNEpNTUNvdkNRS2RpQ0JpcWJRcnlVQ2lpcjVnSXdqQ2NyZ3B0cVNuTHpRYktHM0R2cXRlRVNBUUxCR295RGdjT05JbzJBUUNPQVRNcEJnY0dmQktOajMrUmdJR0RoVTEyb1l1V3BKcElGb1VsRUFnUVRESVdGS2lqRWdnUkNIb3NzaTRCQ0pVcm5FNFh3SFY2eGFLbGZNUEtvTFBHTkNFQUlma0VDUVVBR2dBc0FBQUFBQmdBR0FDRWxOTDh6T3I4ck9yODdQYjh0T2I4MVBiOHZQcjhwTjc4eE9yODVQYjh0UEw4L1A3OG5Ocjh0T3I4N1A3OHJPYjg1UDc4bk5MODNQTDg3UHI4eE9iOHpQNzhwT0w4eFBMODVQcjh0Tzc4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQmFhZ0pvNWthWTVMcXE1c3Eyb0xETWZwYk5kNG5rOU5NN212azBnaXlCUkVpMEdzUk5OZ0xwaVVvL2RiUEE2RVYrdWl1TGdHQjRzbHNaS0pucGlUMVpKbG1tbncyWUo4QTlwZHNxQVFSamxRbGpJWUJnNXhPUm9TRElrSmNnc09CaEIzQzRpSkVqVklsbnNMZlg4b2VZV2ZkWkVyQXdGS1pTUjZKQU1BckFOdU1RNFZoSVVCQUJFQUFUb3JzeTJydDZhWVFoQVFJd21sSmsyR3lwK2lrWHZQeUo1MTB6Z2hBQ0g1QkFrRkFCZ0FMQUFBQUFBWUFCZ0FoSlRTL016cS9MVHEvT3oyL0tUZS9NejIvTHoyL1B6Ky9OejIvSnphL096Ky9Lem0vSnpTL0x6dS9LemUvT1QrL0xUdS9PejYvTlQrL01UKy9PVDIvUFQrL0p6Vy9LemkvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2xJQ2FPWkdtT1I2cXViS3RpQnd6SDZXelhlSjVYVFZPNXI1TUlJUkFnUklkQnJFVERSQXFSRk0rWEVsd0VyMWJCVUhBTkxvdEZORHQ2UGs0SEFRSExsTWx5czBQMEJxeTczRXNoTXVBSTVHTUtFd28waERZVUNRUUpGSEVIZ1lOMmg0a1VOU2g2S0h4K2xZVnduSVIyTEFNQlNpdE1QeWNEQUF3QUEyMHhGUktQTndHcEFINmVLNDh0QTZvV281UjZEMmNpRktJbVRYQ21uWXlmZHBiT0pNZWIwamNoQUNINUJBa0ZBQllBTEFBQUFBQVlBQmdBaEp6Vy9OVDYvTFR1L096Mi9NeisvTVR5L016cS9QeisvS3ptL09UMi9MejIvT3orL0x6dS9NVDIvS1RlL05UKy9MVHkvUFQ2L016dS9MVGkvT1Q2L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdvb0NXT1pHbU9SNnF1Ykt0YUJ3ekg2V3pYZUs0WFJlUytKMUZDSUtDSURqNFR6VkloK0E0VlhpWEZRREJlcllDQzRJb2d2ay9jS09JOEhhclgwbEtXbXlGcDhKKzhKYXNIajRhSkpIWmtFaFp3TnpFRERvVUpiZ2NMZjNNSENZVU9DVFVvZHlnU2VueHNncHB0akMwREJnTXNhbE1uQXdDbkEyb3lGUTlUZ1FjR3B3QUdPaXV1S1EwTkthYW5rVUJCRkJBS2h4WUpCc1FrU3pzRldLK2RuWlRSeVd6T216UWhBQ0g1QkFrRkFCVUFMQUFBQUFBWUFCZ0FoSlRTL05UdS9LenEvT3oyL0xUZS9NeisvS1RpL0x6Ni9QeisvSnphL016Mi9NVHUvUFQrL0x6bS9OVDYvSnpXL05UeS9MVHkvT3o2L0t6bS9OVCsvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV2xZQ1dPWkdtT1NLcXViS3RXQ0F6SDZXelhlSzRyaXJ1ZUkwa2tNaEM5U3JRS3c4RlE4VlNMeWVMVmNod2N2c2xFd0pLSmxqRVRJanBGZW1ub0dSWHRhN2U4UUdTZ0FRbkxHSVhtTFMyWkdDWkZLM2hOYmdNR2h4STFjU2NJYzNVb01qbDdrMjR1QXdFRFhTUUllaVlERDZCRm0zY1VoSTBCS1FFUENRbW9iSUlxQkFBUEJBZ0RDYUUvUUFnUEFMTXhsNktqYVNrRXZiWEVyejRCcm0yTHo4T1V5VGNoQUNINUJBa0ZBQmNBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvS3pxL096Ni9NVHEvTlQ2L0t6bS9QeisvTHoyL1BUNi9LVGEvTlQyL016eS9OeisvSnphL0xUcS9PeisvTVR1L05UKy9MVGkvTHo2L1BUKy9OejIvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdpNENXT1pHbU9SNnF1Ykt0ZUJ3ekg2V3pYZUs0dmhidWVvd0VDTVJDOVNyUkxwVkZSTFJncXhnT3FVelVvRGQ5RDhHREpqTm5UUVFwRmZtbm8yYXZxYS85aXdKT0ZZQ0hGS3BMbUxaMHcrQk5xQjB0TmJuMStBelZ4UUhOMUtESTVlNUZ1TGdrQkNWNTJlaVlKRGc0S1JYWXlneW9CQVNrQm5nNm1hQ3lFQnhNQUFCTUhDUUNlaUVkaXNiR0FsYUNoYVNtd0FBcVFiQzJWbG02S3pNQ1N3Y0VoQUNINUJBa0ZBQlFBTEFBQUFBQVlBQmdBaEp6Vy9OVHUvUFQ2L0xUdS9OVCsvTHppL0t6bS9PVDIvTVQrL09UKy9LVGUvTlQyL1B6Ky9NenUvTno2L0p6YS9OenkvUFQrL0x6Mi9OeisvUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdjSUNXT1pHbU9US3F1Ykt0U0RBekg2V3pYZUs0N2pydWVvNGhFRWtHZGFMREppcWR5REFJM1ZnS2hkQTJ1TEptSTBRTUduaWFrTEJlTitzNHRMZEIwYUJ4SXNjZ2tRcXZmRFBnaWE0NW1DUEFHZERGclFHMXZSblpraW5WOUt3SVFBbGx3ZENjQ0NnOEtBaVZJY29JTUFRRXBFQXFYRURvcm5nVUFBQVYrbDVrL1FBeXJxekdQbXB0amRhcXNpek5vRFFHUlo0VEZjTHBsdmd3aEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKelcvTnp5L0xUdS9QVDYvTHptL0t6aS9OejYvTHo2L01UMi9PejYvS1RlL09UNi9LVGEvTHp5L0t6cS9KemEvT1QyL0xUeS9QeisvS3ptL056Ky9NVCsvTXp5L09UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXaklDYU9aR21PVXFxdWJLdGlFZ3pINld6WGVLNHZsTHVlcU1NaEJoVFJZSmZWd3FBeU5BSTMxcVdTZERVRURaYk1tQ0NhQWcyRDZTakxSYU8rZEd0YkxDVUNFQkt0UjZ2ZkpoTkhQVFdnRE5RcGVSTXZiU2NKRmdseVpYWm1qWUFzQXhCL1B5UUxEWEVtQXdVTUJRTWxSdzBOUXlrQkFTa1FDcW1tZXlxV0VDa0VBQUFFRXBvUG5aUkFETElNSXBHZW40c3pzUSswakt3K3BZQ0Z6RWJDam1jU0lRQWgrUVFKQlFBWkFDd0FBQUFBR0FBWUFJU1UwdnpNNnZ5czZ2enM5dnkwNXZ6VTl2eWszdnk4K3Z6RTZ2ems5dno4L3Z5YzJ2eTA4dnpzL3Z5czV2emsvdnljMHZ6Yzh2eTA3dnpzK3Z6RTV2ek0vdnlrNHZ6RTh2emsrdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRnAyQW1qbVJwamtxcXJteXJaZ29NeCtsczEzaXVZNCs3bnFqRElRWVUwV0NOVmFPWHdsd3dOMWFqa25SZEdCZVd6SmdFT3FHbG95d1hqZnJPclcyeE5JbE1TRFJtR1VjUVNHZ3JKbG9oa1JCZWF5ZHREWEJqZUhPSExRTUJBMmVOV2lNSkFKTURKZ29PQmc1RUtEQUJFQUFRQVNrUkVTa0pCaFlXQ1RvcEE2QUFqUlFMQ3hRcEJCWi9QeVNMQ1NJR0Jnc0dScXVXaGpPeXRHU3NQaEdyYUlIUVJzYktpVFFoQUNINUJBa0ZBQmdBTEFBQUFBQVlBQmdBaEpUUy9NenEvTFRxL096Mi9LVGUvTXoyL0x6Mi9QeisvTnoyL0p6YS9PeisvS3ptL0p6Uy9MenUvS3plL09UKy9MVHUvT3o2L016Ky9NVCsvT1QyL1BUKy9KelcvS3ppL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdsSUNhT1pHbU9SNnF1Ykt0aUJ3ekg2V3pYZUo1aml1S3VKOVJrRWd1S2FEQmZyVGVMRkNJM1ZrVlMrUlVNQlpiczZBczZIeWFrYkVlbS9jNnVyYkZVUVZSSXRFYzFlbXNJR21hVkhKMXFRUEExYXlkdGJ5aGpablJsS3dNQkEyZU9XaU1EQUF3QUEyRUNGd0pGaGdjQkFCWUFBU2tVRkNrREJBc1hFVHFubFF5bUFRa0Vvd2NDQzV0QUpCU05JZzRKQ1E1SHJHR0hNN0swWlROb3BYeUN6MGZHeW1RaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9MenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTXpxL0xUaS9PVDYvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXcjRDV09aR21PUjZxdWJLdGVCd3pINld6WGVKNWYxdUt1SnhTQkVBdUthRERMYTdHWVdRSk5uY3BDVUxvQ2lnQkxkbFFHRncyTENTbmJtV20vdEt0Y0tSb3ZrWVJiVm9BMDBEZGFRVkJBcHhvS2ZXb0hlNEp1QjIxdkloRVZZaWhsZUdkNUt3TVRBMmtSTFNRREFKMERZd1lJQm5ObEU1MEFFeWtEY2djUkNLOVdNeXFjblhJU0RnNFNLUXdJREZza0NSTUpJaFM0RkVlWlk1QXpFN2k2a1g1cHE0T0sxVWZMa21ZaEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKVFMvTlR1L0t6cS9PejIvTFRlL016Ky9LVGkvSnphL0x6Ni9QeisvT1Q2L0p6Uy9NejIvTVR1L1BUKy9Mem0vTlQ2L05UeS9MVHkvT3o2L0t6bS9KelcvTlQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXcDRDV09aR21PU2FxdWJLdGVDUXpINld6WGVKNWZqdU91SjFLaEVDVFJZTDVhYithQU9HNHNoeVhaVWlBZ0xKa280UXMybjZXamJFZW0vYzZ1R1dGQmlCVmhBL2MyQUZnQUF0QWJROEl3SndKMmQyZ0plMzAxTUd0dGJ6QUtjbU12WlhrdEF3RnhnMEFqQXhXYkF5WUpEUlFOam1NQkZRY1ZBU2tURXlvVXJra3pLcHFuY1JFVUJxbWZBcUtZbVpVaUR3WUdEMXVIUm84ekVRWVV1WktEQTVabmk5TmJ5SkZrSVFBaCtRUUpCUUFXQUN3QUFBQUFHQUFZQUlTVTB2ek04dnlzNnZ6cyt2eXM1dnpVK3Z5ODl2ejgvdnlrMnZ6MCt2eWMydnpjOXZ6RTZ2emMvdnljMXZ6VTd2eTA4dnpzL3Z5MDR2elUvdnk4K3Z6MC92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGcWFBbGptUnBqa2Vxcm15cldnY014K2xzMTNpZVcxWGxyaWZTcEJFazBXQytXbTlXYVZSdXJHYXl0YUEwV0RMUndSYzhYRTFIMlc1TSs1bGRNNGxERWl2Q0VtM3RBK0FBUEtDM0FxUlFQc3pyRDJjSGVudzFNR29TQ1c1dmNXSUhjSGhrTXlzSkQzQ0NRQ01KQ0FvSUEyQVBBb0VsTkE4T0NnNmpDWW9wQWdJUUx5eWJuUU1IQ3dRRUN5bWhBVmdrQTVZaURMZ01Xb1pHampPM3VaS1lBN1ZuaTlKYXljMWxNQ0VBSWZrRUNRVUFGQUFzQUFBQUFCZ0FHQUNFbk5iODFPNzg5UHI4dE83ODFQNzh2T0w4ck9iODVQYjh4UDc4NVA3OHBONzgxUGI4L1A3OHpPNzgzUHI4bk5yODNQTDg5UDc4dlBiODNQNzgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYU1nSlk1a2FZNU1xcTVzcTFJTURNZnBiTmQ0bnNPUnU1Nmt5UVJJb3ZGZXZSbGpRbXV1SXBPZUs0RmcvbUlpUnZMRWNHQ0xNdGx1N1BTWldiTUNvUEFGTWdSdFJnQkFEOXlhTUlmRXE1elh6MTBTQkM4d2FnVUNSRmx3WUZkNFpFb3FBaEJ3Z0Q4akFnb0FDb2dtRUFNUUpqUVFEd29QRURGSktRT3JMeXlZQ3BzTUJ3WUdCeWtCQXd0b0pKS2NEYlFOS0Z4aVRiTzFqNVVDVW1hSnpZeDMwR01oQUNINUJBa0ZBQmtBTEFBQUFBQVlBQmdBaEp6Vy9OenkvTFR1L1BUNi9Mem0vTno2L0t6aS9MejYvTVQyL096Ni9LVGUvT1Q2L0tUYS9PVDIvTHp5L0t6cS9KemEvTnoyL0xUeS9QeisvTnorL0t6bS9NVCsvTXp5L09UKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdnWUNhT1pHbU9VNnF1Ykt0bUV3ekg2V3pYZUo3RGc3dWVKQW9GU0tKbEZvY0diakNiWUdqUWxVUGk4Q1VzejE5TTFFQXNnTTV0VVNiYm1hTytOR3RHWUJERTRCb3FBS2dIYmxBWXNoQ2wyOVVUQlFjTEx6QnRiMFFpaFlwbGVXZDRLd01OUFlBL0l3TUdEQVpNSmcwT0VTWTBEUXFrRVk0VERnSU9rQ21ZcENrSkZRSUpLUUdmYXlTU25CY1ZGUmVKWlhpeEZiU25UWlZxd01xTXhvODRJUUFoK1FRSkJRQVpBQ3dBQUFBQUdBQVlBSVNVMHZ6TTZ2eXM2dnpzOXZ5MDV2elU5dnlrM3Z5OCt2ekU2dnprOXZ6OC92eWMydnkwOHZ6cy92eXM1dnprL3Z5YzB2emM4dnkwN3Z6cyt2ekU1dnpNL3Z5azR2ekU4dnprK3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZvMkFtam1ScGprcXFybXlyWmdvTXgrbHMxM2lleis1YURvSEI2UEU0bFdnREFBQ1NvRGtWRFNjdkZWZ0NBcTVHNWNHU1paSkxvVW5CSGN1QVRlbE8xMnQzVXhRREpXWVV2VkNKaFQ1eVUwOE9aU29SZWd0cGJSZ0hVVFV3Y1hOMWRvdDJNbXRxbFN5R2JqNG9EZ1lFZENVSkZ3bG1DZ2tHbkUxOUZ3d1hmU3NFblNrVEVwNHBHQmNZWFNTbGRBVUVBZ1dQazMyekVoT1VVNWx1d3N5U2xYM1FDaUVBSWZrRUNRVUFGd0FzQUFBQUFCZ0FHQUNFbE5MOHpPcjh0T3I4N1BiOHBONzh6UGI4dlBiOC9QNzgzUGI4N1A3OHJPYjhuTkw4dk83OHJONzg1UDc4dE83ODdQcjh6UDc4eFA3ODVQYjg5UDc4bk5iOHJPTDgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCYWJnSlk1a2FZNUhxcTVzcTE0SERNZnBiTmQ0bnMvdVdnNkJ3Y2poT0pWb0E4QUNNSWhSYUtrRWxKY0tMQ3NCRnlVaTljVXV5UXJ6ZEpDYWFPREFaTWVHOXQ2dFdhQ1JOWksrcUFtaFFwamNwbVVTWmlvVGZBUUljQWNRRWc0dk1BRVdkWFlpZUpReWJYOS9MRTJKTEhjQ0ZnS1ZJd01GRUdjd0F4WUtCQkNBQndVUEJab3FBZ3FpQnhRTURFK0twcDUzVFNJSUFnOElrNWQvdXJ5WW5jN0kwSmF2bVd3aEFDSDVCQWtGQUJjQUxBQUFBQUFZQUJnQWhKelcvTlQ2L0xUdS9PejIvTXorL01UeS9MenEvUHorL0t6bS9PVDIvTHoyL096Ky9MenUvTVQyL0tUZS9OVCsvTFR5L1BUNi9NenUvTXpxL0xUaS9PVDYvUFQrL1AvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbTRDV09aR21PUjZxdWJLdGVCd3pINld6WGVLNFhqYnVXZzhsQVZGRkFLaWNTYlFCb0RnNlJSbUZsb1ZsVmt5Wmc0cklRcXIvWWhkbE1uQTVWRSsyU21DUnlOK3ZNUjIvTkpCUnVVbGs2REJ5QVpuQTRYZ3RYQ1lBT2IzVUxCSVkxTUhnU1luc3lmSEtEbUZjckVYVXVTZ1lJQnBRa0VRRVJhakFSQ0t5ZGNRRUtCSEVyREFnTUtnVUZZQU1Cank5S3Jtd0NBbWFWYXprV3VXQnhjNTZlbGRDWHpKazNJUUFoK1FRSkJRQVdBQ3dBQUFBQUdBQVlBSVNVMHZ6VTd2eXM2dnpzOXZ5MDN2ek0vdnlrNHZ5OCt2eWMydnk4NnZ6OC92eWMwdnpNOXZ6MC92elUrdnpVOHZ5MDh2enMrdnlzNXZ6RTd2eWMxdnpVL3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZwNkFsam1ScGprcXFybXlyV2dvTXgyb1F2T2s4MDdoQ0FBQ0M2MFVhQkFhd3hRS3dpSjFFdEFHQ1FobjRtTUpVZzdkTEJhaUltOEttYWxTMks1bEZTa0VnVFlvdFhHYTBjbk40M25EZm1nVVNOMCtDTUEwR0JBWVJPbm1FQlhJcUF3YVJFWHh4alVRS0R3a1BUb056ZDUrS2VwU1VKQW9URWhPY0pBME9EWjRLRXJHT1BBNE1EcUVycDZrcERBeGxyU3dsUkJFUUVHK0NOTGk5UGJpamZKM1FVREtMMUhjaEFDSDVCQWtGQUJnQUxBQUFBQUFZQUJnQWhKVFMvTXp5L0t6cS9PejYvTlQ2L0t6bS9MejYvTVRxL1B6Ky9LVGEvTnoyL1BUNi9KemEvTlQyL0xUeS9OeisvSnpXL05UdS9MVHEvT3orL05UKy9MVGkvTVR1L1BUKy9QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXbUlDYU9aR21PU0txdWJLdGlDQXpIYWhTOTZUelRPRklCa0lyclJWcEVGakFJQUJnN2lXaURCQ014OENtRnFRdHZsNG93dmpmak1mdlFybVNZaFRTQk5DRzBidGtnVXQzbTdyeWh2aVZUSEJST2dVOExCWVZJZURwdkZIQXFoSVYxZWhlTFJCaCtnSUpPTklsMm5GeDdueVFJQVJJQlRTVUlDaGR4S1JJQ0VvZ3BDZ1lQbXlzQkFxVXBEUVFyWlN5bk9SZ1REZzV0Z1pwNENMczl0WitnbU5BeW5iQjJJUUE3XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgY2xhc3NuYW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcclxuY29uc3QgVmlkZW9JbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSByZWFjdF8xLnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZpZGVvU2l6ZSwgc2V0VmlkZW9TaXplXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIOmAmui/hyBYSFIg55qE5ZON5bqU5aS055qEIGNvbnRlbnQtbGVuZ3RoIOiOt+WPluOAgiDljZXkvY06IGtiXHJcbiAgICBjb25zdCBbdmlkZW9SYXRlLCBzZXRWaWRlb1JhdGVdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTsgLy8g6YCa6L+HIHZpZGVv57uE5Lu2IOiOt+WPluinhumikeeahOmVv+W6puOAgiDljZXkvY06IOenklxyXG4gICAgY29uc3QgW3ZpZGVvVGltZSwgc2V0VmlkZW9UaW1lXSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7IC8vIHZpZGVvIOaXtumXtFxyXG4gICAgY29uc3QgW3ZpZGVvRmlyc3RGcmFtZUltZywgc2V0VmlkZW9GaXJzdEZyYW1lSW1nXSA9IHJlYWN0XzEudXNlU3RhdGUoJycpOyAvLyDop4bpopHpppbluKflm75cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHJlYWN0XzEudXNlU3RhdGUoZmFsc2UpOyAvLyDor7fmsYLnirbmgIFcclxuICAgIGNvbnN0IHZpZGVvRmlyc3RGcmFtZVJlZiA9IHJlYWN0XzEudXNlUmVmKG51bGwpOyAvLyDnlKjkuo7lrZjlgqh2aWRlb+esrOS4gOW4p+eahOWbvueJh1xyXG4gICAgY29uc3QgaXNWaWRlbyA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIC9cXC4obXA0fGF2aXx3bXZ8bXBnfG1wZWd8bW92fHJtfHJhbXxzd2Z8Zmx2KS8udGVzdChwYXRoKTtcclxuICAgIH07XHJcbiAgICBsZXQgdmlkZW9FbCA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZ2V0VmlkZW9VcmwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h3hocuWIm+W7uuS4gOS4qmdldOivt+axglxyXG4gICAgICovXHJcbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1ZpZGVvKHZpZGVvVXJsKSB8fCBsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdmlkZW9VcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmICh4aHIucmVhZHlTdGF0ZSA9PT0gMyB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gNCkpIHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IChfYSA9IHRoaXMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlck1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtTdHJpbmcoaGVhZGVyKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9TaXplKGhlYWRlck1hcFsnY29udGVudC1sZW5ndGgnXSk7XHJcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmN1cnJlbnQgJiYgdmlkZW9FbC5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvRHVyYXRpb24gPSBnZXRWaWRlb0R1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWaWRlb1RpbWUoTnVtYmVyKHZpZGVvRHVyYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRHVyYXRpb24gJiYgc2V0VmlkZW9SYXRlKE1hdGguZmxvb3IoaGVhZGVyTWFwWydjb250ZW50LWxlbmd0aCddIC8gMTAwMCAqIDggLyB2aWRlb0R1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bop4bpopHml7bplb9cclxuICAgICAqL1xyXG4gICAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdmlkZW9FbC5jdXJyZW50ICYmIHZpZGVvRWwuY3VycmVudC5kdXJhdGlvbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOmmluW4p+eahOWbvueJh1xyXG4gICAgICovXHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VmlkZW9GaXJzdEZyYW1lKCk7XHJcbiAgICB9LCBbdmlkZW9UaW1lXSk7XHJcbiAgICAvKipcclxuICAgICAqIOinhumikeebuOWFs+S/oeaBr1xyXG4gICAgICovXHJcbiAgICBjb25zdCB2aWRlb0luZm9Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3cgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93SGVhZGVyIH0sIFwidmlkZW9EdXJhdGlvbiAvIFxcdTg5QzZcXHU5ODkxXFx1NjVGNlxcdTk1RjRcXHU5NTdGXFx1NUVBNlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHZpZGVvVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgc1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9JbmZvUm93IH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1Jvd0hlYWRlciB9LCBcInZpZGVvIERhdGEgUmF0ZSAvIFxcdTg5QzZcXHU5ODkxXFx1NzgwMVxcdTczODdcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9SYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIGticHNcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJ2aWRlbyBTaXplIC8gXFx1ODlDNlxcdTk4OTFcXHU2NTg3XFx1NEVGNlxcdTU5MjdcXHU1QzBGXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvU2l6ZSAvIDEwMDAgKiA4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2JcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnZpZGVvSW5mb1JvdyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9Sb3dIZWFkZXIgfSwgXCJcXHU5OTk2XFx1NUUyN1xcdTU2RkVcXHU3MjQ3XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0luZm9WYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudmlkZW9GaXJzdEZyYW1lSW1hZ2UsIHJlZjogdmlkZW9GaXJzdEZyYW1lUmVmLCBzcmM6IHZpZGVvRmlyc3RGcmFtZUltZyB9KSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmRvd25sb2FkSW1hZ2UsIG9uQ2xpY2s6IGRvd25sb2FkSW1nIH0sIFwiXFx1NUJGQ1xcdTUxRkFcXHU1NkZFXFx1NzI0N1wiKSkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluinhumikemmluW4p+WbvueJh1xyXG4gICAgICovXHJcbiAgICBjb25zdCBnZXRWaWRlb0ZpcnN0RnJhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdmlkZW9FbC5jdXJyZW50Lm9ubG9hZGVkZGF0YSA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDljbPml7bojrflj5blj6/og73kvJrojrflj5bkuI3liLDlr7nlupTnmoTnrKzkuIDluKflm75cclxuICAgICAgICAgICAgICog5pWF6YeH5Y+W6K6+572u5LiA5Liq5pe26Ze06L6D55+t55qE5a6a5pe25Zmo5p2l5a6e546wXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlkZW9FbC5jdXJyZW50LnZpZGVvV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW9FbC5jdXJyZW50LnZpZGVvSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHZpZGVvRWwuY3VycmVudCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvRmlyc3RGcmFtZUltZyhpbWcpO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDlr7zlh7rlm77niYdcclxuICAgICAqL1xyXG4gICAgY29uc3QgZG93bmxvYWRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgYS5kb3dubG9hZCA9IGB2aWRlby1wb3N0ZXItJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xyXG4gICAgICAgIGEuaHJlZiA9IHZpZGVvRmlyc3RGcmFtZUltZztcclxuICAgICAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS5jbGljaygpOyAvLyDoh6rliqjop6blj5Hngrnlh7th5qCH562+55qEY2xpY2vkuovku7ZcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlb0Zvcm0gfSxcclxuICAgICAgICBsb2FkaW5nICYmIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGluZ0ljb24gfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlcy9sb2FkaW5nLmdpZlwiKSB9KSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5sb2FkaW5nVGlwcyB9LCBcIlxcdTZCNjNcXHU1NzI4XFx1NTJBQVxcdTUyOUJcXHU4M0I3XFx1NTNENlxcdTRFMkQuLi5cIikpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMucGFnZVRpdGxlIH0sIFwiXFx1NjdFNVxcdTc3MEJcXHU3RUJGXFx1NEUwQVxcdTg5QzZcXHU5ODkxXFx1NzZGOFxcdTUxNzNcXHU0RkUxXFx1NjA2RlwiKSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmZvcm1JdGVtIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5mb3JtSW5wdXQsIG9uQ2hhbmdlOiBnZXRWaWRlb1VybCwgdmFsdWU6IHZpZGVvVXJsLCBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeinhumikeeahOWcsOWdgCcgfSkpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdChzdHlsZXMuZm9ybVN1Ym1pdCwgbG9hZGluZyAmJiAnZGlzYWJsZWQnKSwgb25DbGljazogc3VibWl0IH0sIFwiXFx1ODNCN1xcdTUzRDZcXHU3NkY4XFx1NTE3M1xcdTRGRTFcXHU2MDZGXCIpLFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIiwgeyBjbGFzc05hbWU6IHN0eWxlcy52aWRlbywgcmVmOiB2aWRlb0VsLCBzcmM6IHZpZGVvVXJsLCBtdXRlZDogdHJ1ZSwgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIgfSksXHJcbiAgICAgICAgdmlkZW9VcmwgJiYgdmlkZW9SYXRlICE9PSAwICYmIHZpZGVvU2l6ZSAhPT0gMCAmJiB2aWRlb0luZm9Db250YWluZXIoKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF8xLmRlZmF1bHQubWVtbyhWaWRlb0luZm8pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLd0FBQURRQ0FNQUFBQ3REM3BRQUFBQVBGQk1WRVZIY0V5UDJPT1UyZCtOMjl1ZjFleDk0c3Q5NHN4LzRNNnl5Zit6eXYrSDNkV3p5UCtMMjltTzJ0dXp5ZitXMWVXeHlmNnh5ZjZ3eWY2dnlQNGlCaUhVQUFBQUZIUlNUbE1BQmcwV0hTYzVUVWc1Wmx1Rm9TdXhjb2lhckJWV093d0FBQTNGU1VSQlZIaGU3SlhSQ3NNd0NFV242ZjkvOHhBYkRzRkkyWU5wQnJuWHhlN3RjR1B3ODJjNk9qbzZPam9TOC9hRTd1MGw0N2ZzRzJkazJ6QmhtWUFML0RzK0lPbkYvNjFvb1FRTmU5dHFRb1dZU2RQdHgxN2pDcnRFdndjN0p1cWtuTkRlSlZ2TUFjRHczakZTMWt3dlprb1RPaWwyVGtlTnNPK1I5KzZHeno3UWk1a0NDcUViM0ZIdmhnb3lsSmxVWkNXWmQ5aGdISjc5bEZPdHJRNHpFRDlrcXIyc0wxdWlyQ2xRaVRMbDlHYlc1Y21HRFpvQ3crbTJ0aXhWSXJYSzU3UHpnYWdkVjFlUExIbWE4NnZIYXVVcWhpTmFKZ0RPOU9ZeHFPdVNaWjB5QWsrSlJwV1BxMVBpYkQzRlc0KzhpL1pVdHFQZ3hGNHoxZDQ3UjBnMXZQeWNVWnRYVzdFUTBsVDFQdlFaMWF6Rk8wdlNWSFhZVFpKVDRsYit3QVJQOWhPa0VsRmgxV2FzclJBVDFvbTQvVUFLSTV3bUxVdzJ6MVhkSExQWDVEWkcvNW5xcnA5Y0EybFlUL0hxRlVwVW4yc2NWcEtkb0RwcFJEWFZRUDZNMnJ3Y0Y4eFJWMldzY1ZhVHhkLzhjRlRyRTlCMlhhMmU4d09xZkdrM294MjViUmlLdGl0TGszU3p6Zi8vYmJWaWlBTmQwZ05ZQlNsUDl2WGdoTHFpQnlPY3hqNWxQMmxOekw3K0tVQlY0R2cxVDlOMlozUitKdkdzeW5GUXk2MkMyL2pmQnpVWXZYcnIxL2NxREFLQXlkVlVhb3Bxb092dmZHeFZuckVvUld2QXpVbS9mUzdPM2x4ckx6SUxxK1lWZFMvMVdxaW04MXFzaHRwN0NhaThYeXNwNXo2azR2UlBMYk1UMHo2OUxnemtlQld2b0VxZnVsUWpuUjk3VnRXa2dZd0RVV3VHaXRQZWFGVURMWUxWZkkwSFFkNEExcWl3d2xrSHkxVElXYUNraW1xUXpTRWRWR2xIcjBvRHI1MjEyVWRRYlZtcklsVzhqcm1Ldk9ZeHNERHo5TytRK3A0UzBqNUdnVmZCaFpZV0NLRjZPV21PMnNkYWxhZ3FsbkVGMHVhWVYvemZCM1d4amxFR0M2OWtsdlJxaHpaakhiNUdBU3puUWFKVldXZHQ1Mm0ycVJ5MTNLeDZOVlJZRzZHYVc5MVFDMkRWTEptbHlmcHUvenVsUFY3Vkd5enYxN2l4Y3F0OTRMV29aem04OEdxZ29Gb3hVMFdyWGJTK3hxdkdySXAxcjdENnlYcG5GZFJlQ2V1c2R6M2dXbnRMUWNuVnZwT09IM1ZtUDVRV1ZOTTZLN1RBMlBjV3FEOWZtQzNLV1ZDbFgwMnJlalhPN1JoQTdIeXEyZ0RXcG1KTkt4R2dSMEJQVU9mNitRSzJZUFRHcktNeXNRUlNLSGtHcUdPaS9xZ3lTeGFJV0dPbFhXTmVhV0NaMWxXRjh5d2g2NmlZRmJIRHhCSllYV2l0NnFOTEU1YnhTak5BQW92SVdqM3crdWRWZ01xUjRHSkJaWE5wQ0VoZW9kVzlUdHJDRFViTHlwd1ZVUWtCUloxcmFYMlZtOTFqVm1iWHV6bWdoM2o5Zy9wcFprdHdQeEt6SWJVR3hGR3NMWWVkcXk0TU1Nc0l5OUdWdG1zazlmcjhocTB4cTZjdFlrUEhEbDVlYzJMVGFxc3laOVVzcndWWWpiTWdsUFRyd2kweUt4dE1Sa1BFeG00TnZIUnNBYXoyTExRT0N1MGdydUxPSWdvK0o2ZzlCYWpNczdsWktvM1hQQWxXVlhWQk5DdGlkVmQxT0pWMHJzK3FOa2l6aTVpTlp2ZGh3SGszWEt0YVZEWGJFRHRzb1ZiTmNuQlp3MVp0TUhEWElDTm1KV1FWTmVzQ3E5SkR3V2pKcm40eGNjdkdVbHBDRnRaZlJXMlFuMkVOc3pyRDBnR1l4V3U5V1lYVkUySGttUlUzMTN4TTdLK2FOQWpIQW1MQkpic1FLMTdGYkNtcXNGNndwbDltU1doSnd4YVlOZUl3SHZBS2hsbG8wOVNpWmRsZ3BlODFxTTNONmxzczR4YkRGbUl4ZTNyTDROR0ppMW1Hd3pkZEFLdmhubksrN3dHUzlsWXRYdDhNQlVUQklTd1h6Ymh2OEg1TWJFWnJacHVJN1pJRStYRnd2c0dBQmk5WHl6Qnprd2RVUkRXM2lEM29XUzZib0ZhcGsybUdQSkR3Y2xMV1RjYytOaHU1Z0k1cW9XMXppZG5SczRpVkprQXNhWEJBYkI4MGc2eEppOWxGMnpRUDRyU1Y1OWFza3dOS0wzVUlNYXlKMm9sS0c0d3VxSmlOVFFEc1FSeXdETlVld1pXbWRWNW1tZmZCSldiUHhBSmtpT0RTRU5DRzl3WFVBZ29uckJ2cW1WbGc4Z1Z1L2pWU3k4SXJDd1BFSHJSQmNqV1MrNXNpR3JQQXlwaUlXekJqRXVEMTJDd3JSOTRuQkFtRWl6MzJUaXl4NWJ4SFlpSGxTcXc5eUFVMUJJSjkyMFVmM0hicy96Y2JVU25qQnpwdFdnWUVZNzEvcDZWZnJZN0YwcStCMXpqdjM4VzhhNEVGbEFNaGl2MDZudzNBeS9XQ1M5aEsweG91YlpDL3pvRDdXR3dLbXZOcTJ6YW5kYlg3aEFpcExXSDlPakhMaXRkalkwTXMxQmkxcm5hbnpjMVNweDBiNzNUa3VIdDZrUWR6d2JyNjRQNzBjckZQMDRCd2paZTZ1SVlndktaY0VvSFJDN0VSRjlZbkd5ejNxamY1akZVRng0T2hOeGxtSkxXQzJIT3o0ZWZjTUJxdjZPWGxzWEdPa1FqNUZoT3hpL2FvWlFGd3RxMmdqMnFUYitpaTJzaHE2eVJpdlVBRjJNQWRXSGcxYkozMjN1eU8rd0JVbW9EOVJLV0cyWUFrUXFOcE9jUUFaWWFCOUtuWlZLeFdEbXlmSkd5SDh5YWpyRnQxM05NTGZsalZ1NXdaYmpZaTBMV29UWVlZekQ1TGcwd3NCSXVDKzBjN3I5c0ZOZ2FDdkNySzlzTHNBN1hTQWxnRkZXd3ZvaTFWMjFPemFIVzFaMkZBYW1IVnBhNkNYZlJ1Z2VDNFFwdHRyMVdubC94MnNSc2xCUzk2ZFVSd1dtREpMWGFYNFo2S3BWMGJLeXZoWlkraGRoQmZUcnVMeGV6WjdUbWFRRGh6WHNVMTg5SHNRTzBXQk1aNytvc1NXTk9mY3Z2dE15OUpDSERsR0tObGQ3RUcvTVFyWnJmSTBsL0krOGVSazM3Zys1a3RiQkVMcW9FK2JRTTlhc2tCUWFVQVJqQzRIR1BXdHRBaTFrZ2Q5K3pITDVnMUFHTUZOUmFDM1crbVZsanBXYXVEL1NVUnE4MDY2OS92eHhlNDgzRmF1Z2UxMERxcmdWSVBKaTVnU1lMTmEzTk9hQ053QTloUkx3TEJ4VG9yWW8raVMxNVhIYldKVm9PMFA5SHhLbjBkUSt5Wldlb3VDN2pSZ1Ziam95YXVXOTU0alJTMW1HVjNnZnY3Ni9mSkhFTVdHQzFla1pxVktPNVhzK1dzaU4yR0FtZ2YzRStGTlpnMVRsL3Z5dnBpaFlEZkFYZXppR1UwaEhTdXI3UFhXbUhkdkw2anBTOE0yRmJhc2JCQ2U1QmN5VUg3WHkxbnVONjJDZ1RSTm0xVEhOV1dnUGQvMXk2N0pxTmxrRzFCc3NoZjcvMTN2dFBSQ01sVzl4SEFYRzZYY3RnZnN0ejhLWWRWN0szV1ZtaFo1WURYZFIzNlpwNStzWVVVT05TS2l5RnFuZmZMKzYyd0N1eENYb2Rpd0t6ZXEyTzk2M3d3Z2xqQWhWTkF4YjJRQmtFVjJNMEM2NzNLZXMxcy8rRXduMS9RS2lpTXlpT29PdUh5VjFFRlZzUnVzbndSclBkMWRtdUE0am9PN0tVaERiYmswRldPM1gvK0xhVFFxbDZqa0VZSHFqUCt1aDl3VFN0Q3NFY05kUlZXalB0ZklSV3B4dnBSdkVaNEJlK3JQVXQzdG54Nk5WNXZEdlZvMUdjSUg4dWlxTXRXU00zck5lMjBLdTg2RXdQUTh0bGw4NFIwS1V2SHRHNmI1VFZLRlVURGhkakN1bzYvUndsV09XQzJsZ0NqTHJia2FPZWpnQmF0U2hxVk1sWk1yUFZNeS9aLytJS1NSUThRNitKUWd3TVd6RVZZWldMeEd2K2wrR20xaHNEVW5qYkxQM2NvcUFnQklyQjNhbmc4Z3JucFIrTzZ4WUpxUFpBVWNiL09tSldqZllxTnlISnJRU3lFT2tvNUtxY2xvSkFhNjkzc0NrNmpuVGZyenk5a3dBZkEyN3lEWXFKSUxiaUNDckdlVklCUDM0bnpzMHVxV0tKZGlKVlJpMWdKYS9ta3BLaFlkYjZnREVDTERGUldzeHJBMlpWcVU2UUtxVVVnT2JIMldZZHV3Zmo2aGN5YTFoMHIvLzA3VWxseTFFa3l4ZXhxUldDSGpmRE8vYUtmeGRxNEJJVEhwSjllbFZPWEdhMEJBTy9aYnorWTlwYzFseE1iMkd4N1ZrVzJXcGFaTlZERG5NMHNtN1Voc1ljQmlFcUxNVWhUbXdRclZiR0FQZ0Y3WlBZM2VyYUlSWEg1MGpLckxlcm1uRWJGRmRhVUZWY1pNUU1YQldvREtsbFhCUWJLcUpVVXFEYXJyV3RDQkFoMlBBZUlBWXJMc3dJWHFCdEYxVWpMWktFRkpzR08zTjVpTjh0bXdScEE2anVBVUkwM1g3T2F6WUxMYnM5V0Y3K3ZUb20xeVBvaUFDK2hJZ0lweTBkQnMwYVc5YzY4bk9oNmxpSkwvVXJYZ0dRTHFGa201VFViS3RPZThNcHFjWUs1ekhKaWV4bElKbmJQV3BZa0lSZGVtcUhxZWl1SDN4cHdaSkdDRGR1VzJIYXJIdENhc240MEJNQWR5MnoveDRXQ0N0cU9XVXJCMXN1QWFUWFVCTFBYNFRhQVdrU1d6UWF3QmtWdCs1VXprRUZxdUZuRjhreTlPMlhkcFdiYnlJWldiR3h5WUhWVkI2UnB6WVczT3pQdmdNTXNUakNnaGlZRXZnYVFnWXlsODFWbTVXQ3gzY3d1SWVCT2k1dWdrc0lyUnMzT25XRGRkdytRV1RhTHkxZU5BVWh0QVJSZWs1S09WeGZ2YUptV2E5YW5nRHUyNlZjMzAyWnhWZUNOekcxM0JRdGNYSlhVbFZZNWdBcmVLblk0c3h5RTlucUx2VGRva1ZuZzlzUTZVanJGcG1QdzFyOFQ1eFFJS3N3ZWk2VUI2T2dWak0yMlp4Z3VDcWpaZytZeVZEcS9mQlJvWnY0SkpsVnJxR1QySG9OcWxzVnlDRERyZUJ1d1d1RDZISFROY2hVMEY5bzhuZG5qcmdWcXUvbnVtRjM2WnYydWtPZnJ6WUwyMk96V004dGl1MEhJODJZQlN5ZllZN01rOXREczEvUXM2Z0E1c00yQmVYM0JMSG9yUDhuc2pObWYvTFlmVGpBMkM5WUZabDlKd2J4WkxpL2MzMW9PS0xQQm1UVmN6Z0dqem1lVzk3VHVab0h1d1dqbmpSQ0E5TnZOMGxlaU9NTVVsbmRkSEZrT0F0UDIxWTYrWCs5dmNFMHRzUUtXSTZ1WUVNdHE1ODBDRjNYZ2l4YTB2cnJrcURGNEt0WlFCODJDOUhCTE8yUzIybVhXK1kwTWg5WS9UK2J5YXNUeVk1aERzOXkwMTRFYlJxNERldFpGVnpERlBablpHYk1ZeHUzWFFiY05FTm5IbVVVZnpHY1c3ODd4dlVJQUs4ekNLMSsvdmkyendDV3pWRjdlckN0YUZ0dlA3RGdzYVBsdUFhbmxPb0Jac0hJWk1DempuZ1ZWV201YUxpLzByQk1Mcnh3RXp1eWNXZjdPQmwvWTREczcxRUhkZFNFRXVMTjkxbHlNZXhiVlBzWjdwTmJ0dXBaSFQyTUlsODNtMmN4Q0xXMjhHclV3R3pkRTl1bXV5OWEwV1NwYUxpK285YytTejVrRkxzR083Mlg0c3VCM3RMU2g1V2NHekVvNUFPeWcyamZRZ3JWVkM3TjhDV1BlZmc3eXBGbCtwR3kweC9jS1ZGM0VTYXpBSFRmcnFoWTVvRnNiTnR2LzV1T0Y3c29FTzZWV2h0WENMTDZ4NXpwZ1VxaTFZNks2UVB2aVJheE81TkJ5ZFhFUTRQWS9INTlTUEFZYXNhZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vcG9wdXAubGVzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XHJcbmNvbnN0IHBhZ2VfaW5mb18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvcGFnZS1pbmZvXCIpKTtcclxuY29uc3QgdmlkZW9faW5mb18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdmlkZW8taW5mb1wiKSk7XHJcbmNvbnN0IHVybF9tb2Rlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdXJsLW1vZGVzXCIpKTtcclxuY29uc3QgaWNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhbnRkL2xpYi9pY29uXCIpKTtcclxuY29uc3QgY2xhc3NuYW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vcG9wdXAubGVzc1wiKTtcclxuY29uc3QgUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHJlYWN0XzEudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFVSTCwgc2V0Q3VycmVudFVSTF0gPSByZWFjdF8xLnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRhYklELCBzZXRDdXJyZW50VGFiSURdID0gcmVhY3RfMS51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25hdkFjdGl2ZUluZGV4LCBzZXROYXZJdGVtQWN0aXZlSW5kZXhdID0gcmVhY3RfMS51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IG5hdkl0ZW1BcnIgPSBbXHJcbiAgICAgICAgeyBuYW1lOiAn6aG16Z2i5L+h5oGvJywgaWQ6IDAsIGRpc2FibGU6IGZhbHNlLCBpY29uOiAnaW5mby1jaXJjbGUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn6KeG6aKR55u45YWzJywgaWQ6IDEsIGRpc2FibGU6IGZhbHNlLCBpY29uOiAndmlkZW8tY2FtZXJhJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+iwg+ivleaooeW8jycsIGlkOiAyLCBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2J1ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICfmlazor7fmnJ/lvoUnLCBpZDogMywgZGlzYWJsZTogdHJ1ZSwgaWNvbjogJ2VsbGlwc2lzJyB9LFxyXG4gICAgXTtcclxuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6IGNvdW50LnRvU3RyaW5nKCl9KTtcclxuICAgIH0sIFtjb3VudF0pO1xyXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVUkwodGFic1swXS51cmwpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiSUQodGFic1swXS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvKipcclxuICAgICAqICDmuLLmn5PpgInpobnljaHliJfooahcclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYXZJdGVtQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXNfMS5kZWZhdWx0KHN0eWxlcy5uYXZJdGVtLCBuYXZBY3RpdmVJbmRleCA9PT0gaXRlbS5pZCAmJiAnYWN0aXZlJywgaXRlbS5kaXNhYmxlICYmICdkaXNhYmxlJyksIGtleTogaXRlbS5pZCwgb25DbGljazogKCkgPT4gc2V0TmF2SXRlbUFjdGl2ZUluZGV4KGl0ZW0uaWQpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpY29uXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJY29uLCB0eXBlOiBpdGVtLmljb24gfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZJdGVtTmFtZSB9LCBpdGVtLm5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG5hdkFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwYWdlX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZGVvX2luZm9fMS5kZWZhdWx0LCBudWxsKTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVybF9tb2Rlc18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHBhZ2VfaW5mb18xLmRlZmF1bHQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuYXZBY3RpdmVJbmRleF0pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiAncm9vdCcgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnJvb3QgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5uYXZDb250YWluZXIgfSwgbmF2SXRlbSgpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5zaG93Q29udGFpbmVyIH0sIHNob3dDb250ZW50KCkpKSkpO1xyXG59O1xyXG5yZWFjdF9kb21fMS5kZWZhdWx0LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXHJcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cCwgbnVsbCkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVybE1vZGUgPSB7XHJcbiAgICBtb2NrOiAnX19NT0NLX18nLFxyXG4gICAgdmNvbnNvbGU6ICdfX1ZDT05TT0xFX18nLFxyXG4gICAgZGVidWdnZXI6ICdfX0RFQlVHX18nXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEJhc2VTdG9yZSB7XHJcbiAgICB1c2UoKSB7IH1cclxuICAgIDtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBCYXNlU3RvcmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbi8qKlxyXG4gKiDnlKjkuo7liJ3lp4vljJZTdG9yZVxyXG4gKiBAcGFyYW0gY3JlYXRlU3RvcmVGblxyXG4gKiBAcmV0dXJucyBPYmplY3RcclxuICovXHJcbmNvbnN0IHVzZVN0b3JlID0gKGNyZWF0ZVN0b3JlRm4pID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gcmVhY3RfMS51c2VNZW1vKCgpID0+IGNyZWF0ZVN0b3JlRm4oKSwgW10pO1xyXG4gICAgc3RvcmUgPT09IG51bGwgfHwgc3RvcmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JlLnVzZSgpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSB1c2VTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==