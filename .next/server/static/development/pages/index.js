module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/food.js":
/*!*********************!*\
  !*** ./lib/food.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Every amount of kcal is per 100 pounds
/* harmony default export */ __webpack_exports__["default"] = ({
  fruits: {
    name: 'Fruits',
    color: 'rgb(108, 255, 94)',
    icon: '🍎',
    items: {
      Apple: 52,
      Banana: 88,
      Peach: 41,
      Mango: 57,
      Raspberry: 34,
      Strawberry: 32,
      Watermelon: 38,
      Pear: 55,
      Tangerine: 46,
      Kiwi: 51
    }
  },
  vegetables: {
    name: 'Vegetables',
    icon: '🍅',
    color: 'red',
    items: {
      Peas: 82,
      Potato: 86,
      Corn: 108,
      Paprika: 21,
      Zucchini: 20,
      Cucumber: 15,
      Mushroom: 22,
      Bean: 25,
      Broccoli: 35,
      Avocado: 165
    }
  },
  grain: {
    name: 'Grain',
    icon: '🍞',
    color: '#755400',
    items: {
      Spelt: 332,
      BarleyFlour: 340,
      Oatmeal: 366,
      MilletPorridge: 120,
      Linseed: 514,
      BrownRice: 352,
      Came: 478,
      Couscous: 345,
      Amaranth: 393,
      SemolinaDumplings: 357,
      SteamedNoodles: 212,
      Maccaroni: 168,
      PenneRigate: 358,
      Ravioli: 73,
      Spaghetti: 350,
      Tortellini: 187
    }
  },
  dairy: {
    name: 'Dairy',
    icon: '🐄',
    color: 'black',
    items: {
      Gouda: 326,
      LowfatQuark: 67,
      Cream: 204,
      Babybel: 302,
      CremeFraiche: 292,
      LowfatYogurt: 44,
      HighfatYogurt: 61,
      Edamer: 251,
      MountainCheese: 401,
      Mozzarella: 300
    }
  },
  meatFishEggs: {
    name: 'Meat, Fish & Eggs',
    icon: '🍖',
    items: {
      Trout: 50,
      Pike: 50,
      Bratwurst: 375,
      Duck: 375,
      FilletOfBeef: 115,
      PorkMeat: 171,
      Egg: 155,
      Salmon: 137,
      Lamb: 178,
      Bacon: 645
    }
  },
  sweets: {
    name: 'Sweets',
    icon: '🍪',
    color: '#755400',
    items: {
      Hanuta: 2216,
      Cookies: 1806,
      KinderCountry: 2326,
      MAndMs: 2031,
      Milchschnitte: 1750,
      KitKat: 520,
      Merci: 564,
      Milkyway: 449,
      Oreo: 471,
      Snickers: 506,
      Toffifee: 514
    }
  }
});

/***/ }),

/***/ "./lib/rc-slider-css.js":
/*!******************************!*\
  !*** ./lib/rc-slider-css.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const h1 = '1rem';
const h2 = '.5rem';
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([".rc-slider{position:relative;height:2.5rem;padding:5px 0;padding-top:1rem;width:100%;border-radius:6px;-ms-touch-action:none;touch-action:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-rail{position:absolute;width:100%;background-color:#e9e9e9;height:", ";border-radius:6px;}.rc-slider-track{position:absolute;left:0;height:", ";border-radius:6px;background-image:linear-gradient(-135deg,#ce9ffc 10%,#7367f0 100%);}.rc-slider-handle{position:absolute;width:2rem;height:2rem;cursor:pointer;cursor:-webkit-grab;margin-top:-11px;cursor:grab;border-radius:50%;border:solid 2px #96dbfa;background-color:#fff;-ms-touch-action:pan-x;touch-action:pan-x;}.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{border-color:#57c5f7;box-shadow:0 0 0 5px #96dbfa;}.rc-slider-handle:focus{outline:none;}.rc-slider-handle-click-focused:focus{border-color:#96dbfa;box-shadow:unset;}.rc-slider-handle:hover{border-color:#57c5f7;}.rc-slider-handle:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7;cursor:-webkit-grabbing;cursor:grabbing;}.rc-slider-mark{position:absolute;top:18px;left:0;width:100%;font-size:12px;}.rc-slider-mark-text{position:absolute;display:inline-block;vertical-align:middle;text-align:center;cursor:pointer;color:#999;}.rc-slider-mark-text-active{color:#666;}.rc-slider-step{position:absolute;width:100%;height:", ";background:transparent;}.rc-slider-dot{position:absolute;bottom:-2px;margin-left:-", ";width:8px;height:8px;border:2px solid #e9e9e9;background-color:#fff;cursor:pointer;border-radius:50%;vertical-align:middle;}.rc-slider-dot-active{border-color:#96dbfa;}.rc-slider-dot-reverse{margin-right:-", ";}.rc-slider-disabled{background-color:#e9e9e9;}.rc-slider-disabled .rc-slider-track{background-color:#ccc;}.rc-slider-disabled .rc-slider-handle,.rc-slider-disabled .rc-slider-dot{border-color:#ccc;box-shadow:none;background-color:#fff;cursor:not-allowed;}.rc-slider-disabled .rc-slider-mark-text,.rc-slider-disabled .rc-slider-dot{cursor:not-allowed !important;}.rc-slider-vertical{width:", ";height:100%;padding:0 5px;}.rc-slider-vertical .rc-slider-rail{height:100%;width:", ";}.rc-slider-vertical .rc-slider-track{left:5px;bottom:0;width:", ";}.rc-slider-vertical .rc-slider-handle{margin-left:-5px;-ms-touch-action:pan-y;touch-action:pan-y;}.rc-slider-vertical .rc-slider-mark{top:0;left:18px;height:100%;}.rc-slider-vertical .rc-slider-step{height:100%;width:", ";}.rc-slider-vertical .rc-slider-dot{left:2px;margin-bottom:-", ";}.rc-slider-vertical .rc-slider-dot:first-child{margin-bottom:-", ";}.rc-slider-vertical .rc-slider-dot:last-child{margin-bottom:-", ";}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{animation-duration:0.3s;animation-fill-mode:both;display:block !important;animation-play-state:paused;}.rc-slider-tooltip-zoom-down-leave{animation-duration:0.3s;animation-fill-mode:both;display:block !important;animation-play-state:paused;}.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active{animation-name:rcSliderTooltipZoomDownIn;animation-play-state:running;}.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active{animation-name:rcSliderTooltipZoomDownOut;animation-play-state:running;}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{transform:scale(0,0);animation-timing-function:cubic-bezier(0.23,1,0.32,1);}.rc-slider-tooltip-zoom-down-leave{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);}@keyframes rcSliderTooltipZoomDownIn{0%{opacity:0;transform-origin:50% 100%;transform:scale(0,0);}100%{transform-origin:50% 100%;transform:scale(1,1);}}@keyframes rcSliderTooltipZoomDownOut{0%{transform-origin:50% 100%;transform:scale(1,1);}100%{opacity:0;transform-origin:50% 100%;transform:scale(0,0);}}.rc-slider-tooltip{position:absolute;left:-9999px;top:-9999px;visibility:visible;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-tooltip *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-tooltip-hidden{display:none;}.rc-slider-tooltip-placement-top{padding:", " 0 8px 0;}.rc-slider-tooltip-inner{padding:6px 2px;min-width:2 ", ";height:2 ", ";font-size:12px;line-height:1;color:#fff;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 ", " #d9d9d9;}.rc-slider-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;}.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow{bottom:", ";left:50%;margin-left:-", ";border-width:", " ", " 0;border-top-color:#6c6c6c;}"], h2, h2, h2, h2, h2, h1, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "rc-slider");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_rc_slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../lib/rc-slider-css */ "./lib/rc-slider-css.js");
/* harmony import */ var _lib_food__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../lib/food */ "./lib/food.js");
var _jsxFileName = "/home/henry/stuff/git/twoweeksoffood/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const GlobalStyles = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
	* {
		font-family: Sen;
	}

	h1, h2, h3, h4, h5, p, body {
		margin: 0;
		padding: 0;
	}

	${_lib_rc_slider_css__WEBPACK_IMPORTED_MODULE_4__["default"]}
`;
const Wrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "ft51qc-0"
})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;background-image:linear-gradient(135deg,#90f7ec 10%,#32ccbc 100%);"]);
const Header = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Header",
  componentId: "ft51qc-1"
})(["display:flex;justify-content:center;margin-top:3rem;h1{background-image:linear-gradient( 90deg,rgb(255,255,255),rgb(184,255,253) );background-clip:text;-webkit-text-fill-color:transparent;font-size:calc(2rem + 2vw);-webkit-background-clip:text;color:white;filter:drop-shadow(0px 0px 5px rgba(0,0,0,0.3));font-size:calc(2rem + 2vw);}"]);
const Main = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Main",
  componentId: "ft51qc-2"
})(["display:flex;flex-direction:column;width:50rem;max-width:calc(100vw - 2rem);"]);
const Sliders = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Sliders",
  componentId: "ft51qc-3"
})(["display:flex;flex-direction:column;div{p{margin-top:1rem;font-size:1.8rem;color:white;filter:drop-shadow(0px 0px 5px rgba(0,0,0,0.3));}}"]);
let defaultSliderValues = {};
let sliders = []; // eslint-disable-next-line guard-for-in

for (const category in _lib_food__WEBPACK_IMPORTED_MODULE_5__["default"]) {
  defaultSliderValues[category] = 50;
  sliders.push(_objectSpread({
    key: category
  }, _lib_food__WEBPACK_IMPORTED_MODULE_5__["default"][category]));
}

const Home = () => {
  const {
    0: sliderValues,
    1: setSliderValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSliderValues);

  const updateSlider = key => value => setSliderValues(s => _objectSpread({}, s, {
    [key]: value
  }));

  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }
  }, __jsx(GlobalStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "TwoWeeksOfFood"), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  })), __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "TwoWeeksOfFood")), __jsx(Main, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(Sliders, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, sliders.map(({
    key,
    icon,
    name,
    color
  }) => __jsx("div", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, icon), " ", name), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: updateSlider(key),
    defaultValue: 50,
    startPoint: 50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 8
    }
  })))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, JSON.stringify(sliderValues, null, 2))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/henry/stuff/git/twoweeksoffood/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map