/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/autosize/dist/autosize.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/autosize/dist/autosize.min.js":
/*!************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/autosize/dist/autosize.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function (e, t) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var n; }
}(this, function (e, t) {
  "use strict";

  var n,
      o,
      p = "function" == typeof Map ? new Map() : (n = [], o = [], {
    has: function has(e) {
      return -1 < n.indexOf(e);
    },
    get: function get(e) {
      return o[n.indexOf(e)];
    },
    set: function set(e, t) {
      -1 === n.indexOf(e) && (n.push(e), o.push(t));
    },
    "delete": function _delete(e) {
      var t = n.indexOf(e);
      -1 < t && (n.splice(t, 1), o.splice(t, 1));
    }
  }),
      c = function c(e) {
    return new Event(e, {
      bubbles: !0
    });
  };

  try {
    new Event("test");
  } catch (e) {
    c = function c(e) {
      var t = document.createEvent("Event");
      return t.initEvent(e, !0, !1), t;
    };
  }

  function r(r) {
    if (r && r.nodeName && "TEXTAREA" === r.nodeName && !p.has(r)) {
      var e,
          n = null,
          o = null,
          i = null,
          d = function d() {
        r.clientWidth !== o && a();
      },
          l = function (t) {
        window.removeEventListener("resize", d, !1), r.removeEventListener("input", a, !1), r.removeEventListener("keyup", a, !1), r.removeEventListener("autosize:destroy", l, !1), r.removeEventListener("autosize:update", a, !1), Object.keys(t).forEach(function (e) {
          r.style[e] = t[e];
        }), p["delete"](r);
      }.bind(r, {
        height: r.style.height,
        resize: r.style.resize,
        overflowY: r.style.overflowY,
        overflowX: r.style.overflowX,
        wordWrap: r.style.wordWrap
      });

      r.addEventListener("autosize:destroy", l, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", a, !1), window.addEventListener("resize", d, !1), r.addEventListener("input", a, !1), r.addEventListener("autosize:update", a, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", p.set(r, {
        destroy: l,
        update: a
      }), "vertical" === (e = window.getComputedStyle(r, null)).resize ? r.style.resize = "none" : "both" === e.resize && (r.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), a();
    }

    function s(e) {
      var t = r.style.width;
      r.style.width = "0px", r.offsetWidth, r.style.width = t, r.style.overflowY = e;
    }

    function u() {
      if (0 !== r.scrollHeight) {
        var e = function (e) {
          for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) {
            e.parentNode.scrollTop && t.push({
              node: e.parentNode,
              scrollTop: e.parentNode.scrollTop
            }), e = e.parentNode;
          }

          return t;
        }(r),
            t = document.documentElement && document.documentElement.scrollTop;

        r.style.height = "", r.style.height = r.scrollHeight + n + "px", o = r.clientWidth, e.forEach(function (e) {
          e.node.scrollTop = e.scrollTop;
        }), t && (document.documentElement.scrollTop = t);
      }
    }

    function a() {
      u();
      var e = Math.round(parseFloat(r.style.height)),
          t = window.getComputedStyle(r, null),
          n = "content-box" === t.boxSizing ? Math.round(parseFloat(t.height)) : r.offsetHeight;

      if (n < e ? "hidden" === t.overflowY && (s("scroll"), u(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : "hidden" !== t.overflowY && (s("hidden"), u(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), i !== n) {
        i = n;
        var o = c("autosize:resized");

        try {
          r.dispatchEvent(o);
        } catch (e) {}
      }
    }
  }

  function i(e) {
    var t = p.get(e);
    t && t.destroy();
  }

  function d(e) {
    var t = p.get(e);
    t && t.update();
  }

  var l = null;
  "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function l(e) {
    return e;
  }).destroy = function (e) {
    return e;
  }, l.update = function (e) {
    return e;
  }) : ((l = function l(e, t) {
    return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
      return r(e);
    }), e;
  }).destroy = function (e) {
    return e && Array.prototype.forEach.call(e.length ? e : [e], i), e;
  }, l.update = function (e) {
    return e && Array.prototype.forEach.call(e.length ? e : [e], d), e;
  }), t["default"] = l, e.exports = t["default"];
});

/***/ })

/******/ });
//# sourceMappingURL=autosize-22a953580b98fad94766.js.map