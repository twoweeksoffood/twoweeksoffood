webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var _lib_rc_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../lib/rc-slider-css */ "./lib/rc-slider-css.js");
/* harmony import */ var _lib_food__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../lib/food */ "./lib/food.js");



var _this = undefined,
    _jsxFileName = "/home/henry/stuff/git/twoweeksoffood/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t* {\n\t\tfont-family: Sen;\n\t}\n\n\th1, h2, h3, h4, h5, p, body {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GlobalStyles = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject(), _lib_rc_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
var Wrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "ft51qc-0"
})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;background-image:linear-gradient(135deg,#90f7ec 10%,#32ccbc 100%);"]);
var Header = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__Header",
  componentId: "ft51qc-1"
})(["display:flex;justify-content:center;margin-top:3rem;h1{background-image:linear-gradient( 90deg,rgb(255,255,255),rgb(184,255,253) );background-clip:text;-webkit-text-fill-color:transparent;font-size:calc(2rem + 2vw);-webkit-background-clip:text;color:white;filter:drop-shadow(0px 0px 5px rgba(0,0,0,0.3));font-size:calc(2rem + 2vw);}"]);
var Main = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__Main",
  componentId: "ft51qc-2"
})(["display:flex;flex-direction:column;width:50rem;max-width:calc(100vw - 2rem);"]);
var Sliders = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__Sliders",
  componentId: "ft51qc-3"
})(["display:flex;flex-direction:column;div{margin-top:1rem;p{font-size:2rem;color:white;filter:drop-shadow(0px 0px 5px rgba(0,0,0,0.3));}}"]);
var defaultSliderValues = {};
var sliders = []; // eslint-disable-next-line guard-for-in

for (var category in _lib_food__WEBPACK_IMPORTED_MODULE_7__["default"]) {
  defaultSliderValues[category] = 50;
  sliders.push(_objectSpread({
    key: category
  }, _lib_food__WEBPACK_IMPORTED_MODULE_7__["default"][category]));
}

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultSliderValues),
      sliderValues = _useState[0],
      setSliderValues = _useState[1];

  var updateSlider = function updateSlider(key) {
    return function (value) {
      return setSliderValues(function (s) {
        return _objectSpread({}, s, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
      });
    };
  };

  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }
  }, __jsx(GlobalStyles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "TwoWeeksOfFood"), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  })), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "TwoWeeksOfFood")), __jsx(Main, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(Sliders, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, sliders.map(function (_ref) {
    var key = _ref.key,
        icon = _ref.icon,
        name = _ref.name;
    return __jsx("div", {
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 8
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, icon), " ", name), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: updateSlider(key),
      defaultValue: 50,
      startPoint: 50,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 8
      }
    }));
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, JSON.stringify(sliderValues, null, 2))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2d9ad248c8c863e77865.hot-update.js.map