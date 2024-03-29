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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js":
/*!************************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (e, t) {
   true ? t(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) : undefined;
}(this, function (e, p) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  function t(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function l(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2 ? t(Object(r), !0).forEach(function (e) {
        var t, n, i;
        t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
      });
    }

    return o;
  }

  p = p && p.hasOwnProperty("default") ? p["default"] : p;
  var n = "transitionend";

  function o(e) {
    var t = this,
        n = !1;
    return p(this).one(m.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || m.triggerTransitionEnd(t);
    }, e), this;
  }

  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(e) {
      for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) {
        ;
      }

      return e;
    },
    getSelectorFromElement: function getSelectorFromElement(e) {
      var t = e.getAttribute("data-target");

      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
      if (!e) return 0;
      var t = p(e).css("transition-duration"),
          n = p(e).css("transition-delay"),
          i = parseFloat(t),
          o = parseFloat(n);
      return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
    },
    reflow: function reflow(e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(e) {
      p(e).trigger(n);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(n);
    },
    isElement: function isElement(e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(e, t, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = t[i],
              s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
    jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = p.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  m.jQueryDetection(), p.fn.emulateTransitionEnd = o, p.event.special[m.TRANSITION_END] = {
    bindType: n,
    delegateType: n,
    handle: function handle(e) {
      if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    }
  };

  var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = p.fn[r],
      u = {
    CLOSE: "close" + c,
    CLOSED: "closed" + c,
    CLICK_DATA_API: "click" + c + ".data-api"
  },
      f = "alert",
      d = "fade",
      g = "show",
      _ = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, e.dispose = function () {
      p.removeData(this._element, a), this._element = null;
    }, e._getRootElement = function (e) {
      var t = m.getSelectorFromElement(e),
          n = !1;
      return t && (n = document.querySelector(t)), n = n || p(e).closest("." + f)[0];
    }, e._triggerCloseEvent = function (e) {
      var t = p.Event(u.CLOSE);
      return p(e).trigger(t), t;
    }, e._removeElement = function (t) {
      var n = this;

      if (p(t).removeClass(g), p(t).hasClass(d)) {
        var e = m.getTransitionDurationFromElement(t);
        p(t).one(m.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(e);
      } else this._destroyElement(t);
    }, e._destroyElement = function (e) {
      p(e).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(a);
        t || (t = new i(this), e.data(a, t)), "close" === n && t[n](this);
      });
    }, i._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), p.fn[r] = _._jQueryInterface, p.fn[r].Constructor = _, p.fn[r].noConflict = function () {
    return p.fn[r] = h, _._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      b = ".data-api",
      w = p.fn[v],
      T = "active",
      C = "btn",
      S = "focus",
      D = '[data-toggle^="button"]',
      I = '[data-toggle="buttons"]',
      A = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      N = 'input:not([type="hidden"])',
      k = ".active",
      L = ".btn",
      P = {
    CLICK_DATA_API: "click" + E + b,
    FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
    LOAD_DATA_API: "load" + E + b
  },
      x = function () {
    function n(e) {
      this._element = e;
    }

    var e = n.prototype;
    return e.toggle = function () {
      var e = !0,
          t = !0,
          n = p(this._element).closest(I)[0];

      if (n) {
        var i = this._element.querySelector(N);

        if (i) {
          if ("radio" === i.type) {
            if (i.checked && this._element.classList.contains(T)) e = !1;else {
              var o = n.querySelector(k);
              o && p(o).removeClass(T);
            }
          } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(T) && (e = !1) : e = !1;
          e && (i.checked = !this._element.classList.contains(T), p(i).trigger("change")), i.focus(), t = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && p(this._element).toggleClass(T));
    }, e.dispose = function () {
      p.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(y);
        e || (e = new n(this), p(this).data(y, e)), "toggle" === t && e[t]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), n;
  }();

  p(document).on(P.CLICK_DATA_API, D, function (e) {
    var t = e.target;
    if (p(t).hasClass(C) || (t = p(t).closest(L)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();else {
      var n = t.querySelector(N);
      if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void e.preventDefault();

      x._jQueryInterface.call(p(t), "toggle");
    }
  }).on(P.FOCUS_BLUR_DATA_API, D, function (e) {
    var t = p(e.target).closest(L)[0];
    p(t).toggleClass(S, /^focus(in)?$/.test(e.type));
  }), p(window).on(P.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(O)), t = 0, n = e.length; t < n; t++) {
      var i = e[t],
          o = i.querySelector(N);
      o.checked || o.hasAttribute("checked") ? i.classList.add(T) : i.classList.remove(T);
    }

    for (var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length; r < s; r++) {
      var a = e[r];
      "true" === a.getAttribute("aria-pressed") ? a.classList.add(T) : a.classList.remove(T);
    }
  }), p.fn[v] = x._jQueryInterface, p.fn[v].Constructor = x, p.fn[v].noConflict = function () {
    return p.fn[v] = w, x._jQueryInterface;
  };

  var j = "carousel",
      H = "bs.carousel",
      R = "." + H,
      F = ".data-api",
      M = p.fn[j],
      W = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      B = "next",
      q = "prev",
      K = "left",
      Q = "right",
      V = {
    SLIDE: "slide" + R,
    SLID: "slid" + R,
    KEYDOWN: "keydown" + R,
    MOUSEENTER: "mouseenter" + R,
    MOUSELEAVE: "mouseleave" + R,
    TOUCHSTART: "touchstart" + R,
    TOUCHMOVE: "touchmove" + R,
    TOUCHEND: "touchend" + R,
    POINTERDOWN: "pointerdown" + R,
    POINTERUP: "pointerup" + R,
    DRAG_START: "dragstart" + R,
    LOAD_DATA_API: "load" + R + F,
    CLICK_DATA_API: "click" + R + F
  },
      Y = "carousel",
      z = "active",
      X = "slide",
      G = "carousel-item-right",
      $ = "carousel-item-left",
      J = "carousel-item-next",
      Z = "carousel-item-prev",
      ee = "pointer-event",
      te = ".active",
      ne = ".active.carousel-item",
      ie = ".carousel-item",
      oe = ".carousel-item img",
      re = ".carousel-item-next, .carousel-item-prev",
      se = ".carousel-indicators",
      ae = "[data-slide], [data-slide-to]",
      le = '[data-ride="carousel"]',
      ce = {
    TOUCH: "touch",
    PEN: "pen"
  },
      he = function () {
    function r(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(se), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var e = r.prototype;
    return e.next = function () {
      this._isSliding || this._slide(B);
    }, e.nextWhenVisible = function () {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(q);
    }, e.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(re) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector(ne);

      var n = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) p(this._element).one(V.SLID, function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();
        var i = n < e ? B : q;

        this._slide(i, this._items[e]);
      }
    }, e.dispose = function () {
      p(this._element).off(R), p.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (e) {
      return e = l({}, W, {}, e), m.typeCheckConfig(j, e, U), e;
    }, e._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);

      if (!(e <= 40)) {
        var t = e / this.touchDeltaX;
        (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next();
      }
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && p(this._element).on(V.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(V.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), this._config.touch && this._addTouchEventListeners();
    }, e._addTouchEventListeners = function () {
      var t = this;

      if (this._touchSupported) {
        var n = function n(e) {
          t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
        },
            i = function i(e) {
          t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval));
        };

        p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function (e) {
          return n(e);
        }), p(this._element).on(V.POINTERUP, function (e) {
          return i(e);
        }), this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function (e) {
          return n(e);
        }), p(this._element).on(V.TOUCHMOVE, function (e) {
          return function (e) {
            e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
          }(e);
        }), p(this._element).on(V.TOUCHEND, function (e) {
          return i(e);
        }));
      }
    }, e._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;

        case 39:
          e.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e);
    }, e._getItemByDirection = function (e, t) {
      var n = e === B,
          i = e === q,
          o = this._getItemIndex(t),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
      var s = (o + (e === q ? -1 : 1)) % this._items.length;
      return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(ne)),
          o = p.Event(V.SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });

      return p(this._element).trigger(o), o;
    }, e._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
        p(t).removeClass(z);

        var n = this._indicatorsElement.children[this._getItemIndex(e)];

        n && p(n).addClass(z);
      }
    }, e._slide = function (e, t) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(ne),
          a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = e === B ? (n = $, i = J, K) : (n = G, i = Z, Q), l && p(l).hasClass(z)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = p.Event(V.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (p(this._element).hasClass(X)) {
          p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var d = m.getTransitionDurationFromElement(s);
          p(s).one(m.TRANSITION_END, function () {
            p(l).removeClass(n + " " + i).addClass(z), p(s).removeClass(z + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return p(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else p(s).removeClass(z), p(l).addClass(z), this._isSliding = !1, p(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var e = p(this).data(H),
            t = l({}, W, {}, p(this).data());
        "object" == typeof i && (t = l({}, t, {}, i));
        var n = "string" == typeof i ? i : t.slide;
        if (e || (e = new r(this, t), p(this).data(H, e)), "number" == typeof i) e.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        } else t.interval && t.ride && (e.pause(), e.cycle());
      });
    }, r._dataApiClickHandler = function (e) {
      var t = m.getSelectorFromElement(this);

      if (t) {
        var n = p(t)[0];

        if (n && p(n).hasClass(Y)) {
          var i = l({}, p(n).data(), {}, p(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(H).to(o), e.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return W;
      }
    }]), r;
  }();

  p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler), p(window).on(V.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) {
      var i = p(e[t]);

      he._jQueryInterface.call(i, i.data());
    }
  }), p.fn[j] = he._jQueryInterface, p.fn[j].Constructor = he, p.fn[j].noConflict = function () {
    return p.fn[j] = M, he._jQueryInterface;
  };

  var ue = "collapse",
      fe = "bs.collapse",
      de = "." + fe,
      pe = p.fn[ue],
      me = {
    toggle: !0,
    parent: ""
  },
      ge = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _e = {
    SHOW: "show" + de,
    SHOWN: "shown" + de,
    HIDE: "hide" + de,
    HIDDEN: "hidden" + de,
    CLICK_DATA_API: "click" + de + ".data-api"
  },
      ve = "show",
      ye = "collapse",
      Ee = "collapsing",
      be = "collapsed",
      we = "width",
      Te = "height",
      Ce = ".show, .collapsing",
      Se = '[data-toggle="collapse"]',
      De = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
          return e === t;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = a.prototype;
    return e.toggle = function () {
      p(this._element).hasClass(ve) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          t,
          n = this;

      if (!this._isTransitioning && !p(this._element).hasClass(ve) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function (e) {
        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ye);
      })).length && (e = null), !(e && (t = p(e).not(this._selector).data(fe)) && t._isTransitioning))) {
        var i = p.Event(_e.SHOW);

        if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
          e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(fe, null));

          var o = this._getDimension();

          p(this._element).removeClass(ye).addClass(Ee), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0), this.setTransitioning(!0);
          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            p(n._element).removeClass(Ee).addClass(ye).addClass(ve), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(_e.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, e.hide = function () {
      var e = this;

      if (!this._isTransitioning && p(this._element).hasClass(ve)) {
        var t = p.Event(_e.HIDE);

        if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = m.getSelectorFromElement(r);
            if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(ve) || p(r).addClass(be).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            e.setTransitioning(!1), p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, e.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, e.dispose = function () {
      p.removeData(this._element, fe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (e) {
      return (e = l({}, me, {}, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(ue, e, ge), e;
    }, e._getDimension = function () {
      return p(this._element).hasClass(we) ? we : Te;
    }, e._getParent = function () {
      var e,
          n = this;
      m.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(e.querySelectorAll(t));
      return p(i).each(function (e, t) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
      }), e;
    }, e._addAriaAndCollapsedClass = function (e, t) {
      var n = p(e).hasClass(ve);
      t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (e) {
      var t = m.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var e = p(this),
            t = e.data(fe),
            n = l({}, me, {}, e.data(), {}, "object" == typeof i && i ? i : {});

        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(fe, t)), "string" == typeof i) {
          if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return me;
      }
    }]), a;
  }();

  p(document).on(_e.CLICK_DATA_API, Se, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = p(this),
        t = m.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
    p(i).each(function () {
      var e = p(this),
          t = e.data(fe) ? "toggle" : n.data();

      De._jQueryInterface.call(e, t);
    });
  }), p.fn[ue] = De._jQueryInterface, p.fn[ue].Constructor = De, p.fn[ue].noConflict = function () {
    return p.fn[ue] = pe, De._jQueryInterface;
  };

  var Ie = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      Ae = function () {
    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) {
      if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
    }

    return 0;
  }();

  var Oe = Ie && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, Ae));
    };
  };

  function Ne(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function ke(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function Pe(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;

      case "#document":
        return e.body;
    }

    var t = ke(e),
        n = t.overflow,
        i = t.overflowX,
        o = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e));
  }

  function xe(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }

  var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
      He = Ie && /MSIE 10/.test(navigator.userAgent);

  function Re(e) {
    return 11 === e ? je : 10 === e ? He : je || He;
  }

  function Fe(e) {
    if (!e) return document.documentElement;

    for (var t = Re(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function Me(e) {
    return null !== e.parentNode ? Me(e.parentNode) : e;
  }

  function We(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if (e !== s && t !== s || i.contains(o)) return function (e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e);
    }(s) ? s : Fe(s);
    var a = Me(e);
    return a.host ? We(a.host, t) : We(e, Me(t).host);
  }

  function Ue(e, t) {
    var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
        i = e.nodeName;
    if ("BODY" !== i && "HTML" !== i) return e[n];
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[n];
  }

  function Be(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }

  function qe(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Re(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }

  function Ke(e) {
    var t = e.body,
        n = e.documentElement,
        i = Re(10) && getComputedStyle(n);
    return {
      height: qe("Height", t, n, i),
      width: qe("Width", t, n, i)
    };
  }

  var Qe = function Qe(e, t, n) {
    return t && Ve(e.prototype, t), n && Ve(e, n), e;
  };

  function Ve(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function Ye(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  var ze = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }

    return e;
  };

  function Xe(e) {
    return ze({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function Ge(e) {
    var t = {};

    try {
      if (Re(10)) {
        t = e.getBoundingClientRect();
        var n = Ue(e, "top"),
            i = Ue(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}

    var o = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top
    },
        r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
        s = r.width || e.clientWidth || o.width,
        a = r.height || e.clientHeight || o.height,
        l = e.offsetWidth - s,
        c = e.offsetHeight - a;

    if (l || c) {
      var h = ke(e);
      l -= Be(h, "x"), c -= Be(h, "y"), o.width -= l, o.height -= c;
    }

    return Xe(o);
  }

  function $e(e, t, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
        o = Re(10),
        r = "HTML" === t.nodeName,
        s = Ge(e),
        a = Ge(t),
        l = Pe(e),
        c = ke(t),
        h = parseFloat(c.borderTopWidth, 10),
        u = parseFloat(c.borderLeftWidth, 10);
    i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
    var f = Xe({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height
    });

    if (f.marginTop = 0, f.marginLeft = 0, !o && r) {
      var d = parseFloat(c.marginTop, 10),
          p = parseFloat(c.marginLeft, 10);
      f.top -= h - d, f.bottom -= h - d, f.left -= u - p, f.right -= u - p, f.marginTop = d, f.marginLeft = p;
    }

    return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function (e, t, n) {
      var i = 2 < arguments.length && void 0 !== n && n,
          o = Ue(t, "top"),
          r = Ue(t, "left"),
          s = i ? -1 : 1;
      return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e;
    }(f, t)), f;
  }

  function Je(e) {
    if (!e || !e.parentElement || Re()) return document.documentElement;

    for (var t = e.parentElement; t && "none" === ke(t, "transform");) {
      t = t.parentElement;
    }

    return t || document.documentElement;
  }

  function Ze(e, t, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
        s = {
      top: 0,
      left: 0
    },
        a = r ? Je(e) : We(e, xe(t));
    if ("viewport" === i) s = function (e, t) {
      var n = 1 < arguments.length && void 0 !== t && t,
          i = e.ownerDocument.documentElement,
          o = $e(e, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : Ue(i),
          l = n ? 0 : Ue(i, "left");
      return Xe({
        top: a - o.top + o.marginTop,
        left: l - o.left + o.marginLeft,
        width: r,
        height: s
      });
    }(a, r);else {
      var l = void 0;
      "scrollParent" === i ? "BODY" === (l = Pe(Le(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
      var c = $e(l, a, r);
      if ("HTML" !== l.nodeName || function e(t) {
        var n = t.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === ke(t, "position")) return !0;
        var i = Le(t);
        return !!i && e(i);
      }(a)) s = c;else {
        var h = Ke(e.ownerDocument),
            u = h.height,
            f = h.width;
        s.top += c.top - c.marginTop, s.bottom = u + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left;
      }
    }
    var d = "number" == typeof (n = n || 0);
    return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s;
  }

  function et(e, t, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === e.indexOf("auto")) return e;
    var a = Ze(i, n, s, o),
        l = {
      top: {
        width: a.width,
        height: t.top - a.top
      },
      right: {
        width: a.right - t.right,
        height: a.height
      },
      bottom: {
        width: a.width,
        height: a.bottom - t.bottom
      },
      left: {
        width: t.left - a.left,
        height: a.height
      }
    },
        c = Object.keys(l).map(function (e) {
      return ze({
        key: e
      }, l[e], {
        area: function (e) {
          return e.width * e.height;
        }(l[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        h = c.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= i.clientWidth && n >= i.clientHeight;
    }),
        u = 0 < h.length ? h[0].key : c[0].key,
        f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }

  function tt(e, t, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return $e(n, o ? Je(t) : We(t, xe(n)), o);
  }

  function nt(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
  }

  function it(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function ot(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
        o = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
    return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[it(a)], o;
  }

  function rt(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function st(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var i = rt(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }(e, "name", t))).forEach(function (e) {
      e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e["function"] || e.fn;
      e.enabled && Ne(t) && (n.offsets.popper = Xe(n.offsets.popper), n.offsets.reference = Xe(n.offsets.reference), n = t(n, e));
    }), n;
  }

  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }

  function lt(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
          r = o ? "" + o + n : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function ht(e, t, n, i) {
    n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var o = Pe(e);
    return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;
      s.addEventListener(n, i, {
        passive: !0
      }), r || e(Pe(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }

  function ut() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
      return ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }(this.reference, this.state));
  }

  function ft(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ft(i[e]) && (t = "px"), n.style[e] = i[e] + t;
    });
  }

  function pt(e, t) {
    function n(e) {
      return e;
    }

    var i = e.offsets,
        o = i.popper,
        r = i.reference,
        s = Math.round,
        a = Math.floor,
        l = s(r.width),
        c = s(o.width),
        h = -1 !== ["left", "right"].indexOf(e.placement),
        u = -1 !== e.placement.indexOf("-"),
        f = t ? h || u || l % 2 == c % 2 ? s : a : n,
        d = t ? s : n;
    return {
      left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
      top: d(o.top),
      bottom: d(o.bottom),
      right: f(o.right)
    };
  }

  var mt = Ie && /Firefox/i.test(navigator.userAgent);

  function gt(e, t, n) {
    var i = rt(e, function (e) {
      return e.name === t;
    }),
        o = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });

    if (!o) {
      var r = "`" + t + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }

    return o;
  }

  var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      vt = _t.slice(3);

  function yt(e, t) {
    var n = 1 < arguments.length && void 0 !== t && t,
        i = vt.indexOf(e),
        o = vt.slice(i + 1).concat(vt.slice(0, i));
    return n ? o.reverse() : o;
  }

  var Et = "flip",
      bt = "clockwise",
      wt = "counterclockwise";

  function Tt(e, o, r, t) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        i = n.indexOf(rt(n, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (e, t) {
      var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];
          if (!r) return e;
          if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
          var a = void 0;

          switch (s) {
            case "%p":
              a = n;
              break;

            case "%":
            case "%r":
            default:
              a = i;
          }

          return Xe(a)[t] / 100 * r;
        }(e, n, o, r);
      });
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), s;
  }

  var Ct = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];

          if (i) {
            var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
              start: Ye({}, l, r[l]),
              end: Ye({}, l, r[l] + r[c] - s[c])
            };
            e.offsets.popper = ze({}, s, h[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ft(+n) ? [+n, 0] : Tt(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, i) {
          var t = i.boundariesElement || Fe(e.instance.popper);
          e.instance.reference === t && (t = Fe(t));
          var n = lt("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
          o.top = "", o.left = "", o[n] = "";
          var l = Ze(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          o.top = r, o.left = s, o[n] = a, i.boundaries = l;
          var c = i.priority,
              h = e.offsets.popper,
              u = {
            primary: function primary(e) {
              var t = h[e];
              return h[e] < l[e] && !i.escapeWithReference && (t = Math.max(h[e], l[e])), Ye({}, e, t);
            },
            secondary: function secondary(e) {
              var t = "right" === e ? "left" : "top",
                  n = h[t];
              return h[e] > l[e] && !i.escapeWithReference && (n = Math.min(h[t], l[e] - ("right" === e ? h.width : h.height))), Ye({}, t, n);
            }
          };
          return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            h = ze({}, h, u[t](e));
          }), e.offsets.popper = h, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, t) {
          var n;
          if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;

          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;

          var o = e.placement.split("-")[0],
              r = e.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
          a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]), e.offsets.popper = Xe(e.offsets.popper);

          var m = a[u] + a[c] / 2 - p / 2,
              g = ke(e.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - e.offsets.popper[u] - _ - v;

          return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ye(n = {}, u, Math.round(y)), Ye(n, f, ""), n), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(m, g) {
          if (at(m.instance.modifiers, "inner")) return m;
          if (m.flipped && m.placement === m.originalPlacement) return m;

          var _ = Ze(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
              v = m.placement.split("-")[0],
              y = it(v),
              E = m.placement.split("-")[1] || "",
              b = [];

          switch (g.behavior) {
            case Et:
              b = [v, y];
              break;

            case bt:
              b = yt(v);
              break;

            case wt:
              b = yt(v, !0);
              break;

            default:
              b = g.behavior;
          }

          return b.forEach(function (e, t) {
            if (v !== e || b.length === t + 1) return m;
            v = m.placement.split("-")[0], y = it(v);
            var n = m.offsets.popper,
                i = m.offsets.reference,
                o = Math.floor,
                r = "left" === v && o(n.right) > o(i.left) || "right" === v && o(n.left) < o(i.right) || "top" === v && o(n.bottom) > o(i.top) || "bottom" === v && o(n.top) < o(i.bottom),
                s = o(n.left) < o(_.left),
                a = o(n.right) > o(_.right),
                l = o(n.top) < o(_.top),
                c = o(n.bottom) > o(_.bottom),
                h = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && c,
                u = -1 !== ["top", "bottom"].indexOf(v),
                f = !!g.flipVariations && (u && "start" === E && s || u && "end" === E && a || !u && "start" === E && l || !u && "end" === E && c),
                d = !!g.flipVariationsByContent && (u && "start" === E && a || u && "end" === E && s || !u && "start" === E && c || !u && "end" === E && l),
                p = f || d;
            (r || h || p) && (m.flipped = !0, (r || h) && (v = b[t + 1]), p && (E = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(E)), m.placement = v + (E ? "-" + E : ""), m.offsets.popper = ze({}, m.offsets.popper, ot(m.instance.popper, m.offsets.reference, m.placement)), m = st(m.instance.modifiers, m, "flip"));
          }), m;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport",
        flipVariations: !1,
        flipVariationsByContent: !1
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Xe(o), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
              n = rt(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;

          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = rt(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== r ? r : t.gpuAcceleration,
              a = Fe(e.instance.popper),
              l = Ge(a),
              c = {
            position: o.position
          },
              h = pt(e, window.devicePixelRatio < 2 || !mt),
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = lt("transform"),
              p = void 0,
              m = void 0;
          if (m = "bottom" == u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top, p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[u] = 0, c[f] = 0, c.willChange = "transform";else {
            var g = "bottom" == u ? -1 : 1,
                _ = "right" == f ? -1 : 1;

            c[u] = m * g, c[f] = p * _, c.willChange = u + ", " + f;
          }
          var v = {
            "x-placement": e.placement
          };
          return e.attributes = ze({}, v, e.attributes), e.styles = ze({}, c, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return dt(e.instance.popper, e.styles), function (t, n) {
            Object.keys(n).forEach(function (e) {
              !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
            });
          }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, n, i, o) {
          var r = tt(o, t, e, n.positionFixed),
              s = et(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), dt(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      St = (Qe(Dt, [{
    key: "update",
    value: function value() {
      return function () {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ot(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
      }.call(this);
    }
  }, {
    key: "destroy",
    value: function value() {
      return function () {
        return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function value() {
      return function () {
        this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate));
      }.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function value() {
      return ut.call(this);
    }
  }]), Dt);

  function Dt(e, t) {
    var n = this,
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, Dt), this.scheduleUpdate = function () {
      return requestAnimationFrame(n.update);
    }, this.update = Oe(this.update.bind(this)), this.options = ze({}, Dt.Defaults, i), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function (e) {
      n.options.modifiers[e] = ze({}, Dt.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
      return ze({
        name: e
      }, n.options.modifiers[e]);
    }).sort(function (e, t) {
      return e.order - t.order;
    }), this.modifiers.forEach(function (e) {
      e.enabled && Ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
    }), this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), this.state.eventsEnabled = o;
  }

  St.Utils = ("undefined" != typeof window ? window : global).PopperUtils, St.placements = _t, St.Defaults = Ct;

  var It = "dropdown",
      At = "bs.dropdown",
      Ot = "." + At,
      Nt = ".data-api",
      kt = p.fn[It],
      Lt = new RegExp("38|40|27"),
      Pt = {
    HIDE: "hide" + Ot,
    HIDDEN: "hidden" + Ot,
    SHOW: "show" + Ot,
    SHOWN: "shown" + Ot,
    CLICK: "click" + Ot,
    CLICK_DATA_API: "click" + Ot + Nt,
    KEYDOWN_DATA_API: "keydown" + Ot + Nt,
    KEYUP_DATA_API: "keyup" + Ot + Nt
  },
      xt = "disabled",
      jt = "show",
      Ht = "dropup",
      Rt = "dropright",
      Ft = "dropleft",
      Mt = "dropdown-menu-right",
      Wt = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Bt = ".dropdown form",
      qt = ".dropdown-menu",
      Kt = ".navbar-nav",
      Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Vt = "top-start",
      Yt = "top-end",
      zt = "bottom-start",
      Xt = "bottom-end",
      Gt = "right-start",
      $t = "left-start",
      Jt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      Zt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      en = function () {
    function c(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = c.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !p(this._element).hasClass(xt)) {
        var e = p(this._menu).hasClass(jt);
        c._clearMenus(), e || this.show(!0);
      }
    }, e.show = function (e) {
      if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass(xt) || p(this._menu).hasClass(jt))) {
        var t = {
          relatedTarget: this._element
        },
            n = p.Event(Pt.SHOW, t),
            i = c._getParentFromElement(this._element);

        if (p(i).trigger(n), !n.isDefaultPrevented()) {
          if (!this._inNavbar && e) {
            if ("undefined" == typeof St) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var o = this._element;
            "parent" === this._config.reference ? o = i : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(i).addClass(Wt), this._popper = new St(o, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === p(i).closest(Kt).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(jt), p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t));
        }
      }
    }, e.hide = function () {
      if (!this._element.disabled && !p(this._element).hasClass(xt) && p(this._menu).hasClass(jt)) {
        var e = {
          relatedTarget: this._element
        },
            t = p.Event(Pt.HIDE, e),
            n = c._getParentFromElement(this._element);

        p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass(jt), p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)));
      }
    }, e.dispose = function () {
      p.removeData(this._element, At), p(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      p(this._element).on(Pt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (e) {
      return e = l({}, this.constructor.Default, {}, p(this._element).data(), {}, e), m.typeCheckConfig(It, e, this.constructor.DefaultType), e;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = c._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(qt));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var e = p(this._element.parentNode),
          t = zt;
      return e.hasClass(Ht) ? (t = Vt, p(this._menu).hasClass(Mt) && (t = Yt)) : e.hasClass(Rt) ? t = Gt : e.hasClass(Ft) ? t = $t : p(this._menu).hasClass(Mt) && (t = Xt), t;
    }, e._detectNavbar = function () {
      return 0 < p(this._element).closest(".navbar").length;
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e;
      } : e.offset = this._config.offset, e;
    }, e._getPopperConfig = function () {
      var e = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (e.modifiers.applyStyle = {
        enabled: !1
      }), l({}, e, {}, this._config.popperConfig);
    }, c._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(At);

        if (e || (e = new c(this, "object" == typeof t ? t : null), p(this).data(At, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, c._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = t.length; n < i; n++) {
        var o = c._getParentFromElement(t[n]),
            r = p(t[n]).data(At),
            s = {
          relatedTarget: t[n]
        };

        if (e && "click" === e.type && (s.clickEvent = e), r) {
          var a = r._menu;

          if (p(o).hasClass(jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(o, e.target))) {
            var l = p.Event(Pt.HIDE, s);
            p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), p(a).removeClass(jt), p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (e) {
      var t,
          n = m.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, c._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qt).length)) : Lt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(xt))) {
        var t = c._getParentFromElement(this),
            n = p(t).hasClass(jt);

        if (n || 27 !== e.which) if (n && (!n || 27 !== e.which && 32 !== e.which)) {
          var i = [].slice.call(t.querySelectorAll(Qt)).filter(function (e) {
            return p(e).is(":visible");
          });

          if (0 !== i.length) {
            var o = i.indexOf(e.target);
            38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === e.which) {
            var r = t.querySelector(Ut);
            p(r).trigger("focus");
          }

          p(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Jt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zt;
      }
    }]), c;
  }();

  p(document).on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus).on(Pt.CLICK_DATA_API, Ut, function (e) {
    e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(p(this), "toggle");
  }).on(Pt.CLICK_DATA_API, Bt, function (e) {
    e.stopPropagation();
  }), p.fn[It] = en._jQueryInterface, p.fn[It].Constructor = en, p.fn[It].noConflict = function () {
    return p.fn[It] = kt, en._jQueryInterface;
  };

  var tn = "modal",
      nn = "bs.modal",
      on = "." + nn,
      rn = p.fn[tn],
      sn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      an = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      ln = {
    HIDE: "hide" + on,
    HIDE_PREVENTED: "hidePrevented" + on,
    HIDDEN: "hidden" + on,
    SHOW: "show" + on,
    SHOWN: "shown" + on,
    FOCUSIN: "focusin" + on,
    RESIZE: "resize" + on,
    CLICK_DISMISS: "click.dismiss" + on,
    KEYDOWN_DISMISS: "keydown.dismiss" + on,
    MOUSEUP_DISMISS: "mouseup.dismiss" + on,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
    CLICK_DATA_API: "click" + on + ".data-api"
  },
      cn = "modal-dialog-scrollable",
      hn = "modal-scrollbar-measure",
      un = "modal-backdrop",
      fn = "modal-open",
      dn = "fade",
      pn = "show",
      mn = "modal-static",
      gn = ".modal-dialog",
      _n = ".modal-body",
      vn = '[data-toggle="modal"]',
      yn = '[data-dismiss="modal"]',
      En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      bn = ".sticky-top",
      wn = function () {
    function o(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(gn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var e = o.prototype;
    return e.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, e.show = function (e) {
      var t = this;

      if (!this._isShown && !this._isTransitioning) {
        p(this._element).hasClass(dn) && (this._isTransitioning = !0);
        var n = p.Event(ln.SHOW, {
          relatedTarget: e
        });
        p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(ln.CLICK_DISMISS, yn, function (e) {
          return t.hide(e);
        }), p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function () {
          p(t._element).one(ln.MOUSEUP_DISMISS, function (e) {
            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, e.hide = function (e) {
      var t = this;

      if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = p.Event(ln.HIDE);

        if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = p(this._element).hasClass(dn);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(ln.FOCUSIN), p(this._element).removeClass(pn), p(this._element).off(ln.CLICK_DISMISS), p(this._dialog).off(ln.MOUSEDOWN_DISMISS), i) {
            var o = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return p(e).off(on);
      }), p(document).off(ln.FOCUSIN), p.removeData(this._element, nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (e) {
      return e = l({}, sn, {}, e), m.typeCheckConfig(tn, e, an), e;
    }, e._triggerBackdropTransition = function () {
      var e = this;

      if ("static" === this._config.backdrop) {
        var t = p.Event(ln.HIDE_PREVENTED);
        if (p(this._element).trigger(t), t.defaultPrevented) return;

        this._element.classList.add(mn);

        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, function () {
          e._element.classList.remove(mn);
        }).emulateTransitionEnd(n), this._element.focus();
      } else this.hide();
    }, e._showElement = function (e) {
      var t = this,
          n = p(this._element).hasClass(dn),
          i = this._dialog ? this._dialog.querySelector(_n) : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(pn), this._config.focus && this._enforceFocus();

      function o() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r);
      }

      var r = p.Event(ln.SHOWN, {
        relatedTarget: e
      });

      if (n) {
        var s = m.getTransitionDurationFromElement(this._dialog);
        p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s);
      } else o();
    }, e._enforceFocus = function () {
      var t = this;
      p(document).off(ln.FOCUSIN).on(ln.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? p(this._element).on(ln.KEYDOWN_DISMISS, function (e) {
        27 === e.which && t._triggerBackdropTransition();
      }) : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? p(window).on(ln.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : p(window).off(ln.RESIZE);
    }, e._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        p(document.body).removeClass(fn), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(ln.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (e) {
      var t = this,
          n = p(this._element).hasClass(dn) ? dn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = un, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(ln.CLICK_DISMISS, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition();
        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(pn), !e) return;
        if (!n) return void e();
        var i = m.getTransitionDurationFromElement(this._backdrop);
        p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        p(this._backdrop).removeClass(pn);

        var o = function o() {
          t._removeBackdrop(), e && e();
        };

        if (p(this._element).hasClass(dn)) {
          var r = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else e && e();
    }, e._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(En)),
            t = [].slice.call(document.querySelectorAll(bn));
        p(e).each(function (e, t) {
          var n = t.style.paddingRight,
              i = p(t).css("padding-right");
          p(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), p(t).each(function (e, t) {
          var n = t.style.marginRight,
              i = p(t).css("margin-right");
          p(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = p(document.body).css("padding-right");
        p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      p(document.body).addClass(fn);
    }, e._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(En));
      p(e).each(function (e, t) {
        var n = p(t).data("padding-right");
        p(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll("" + bn));
      p(t).each(function (e, t) {
        var n = p(t).data("margin-right");
        "undefined" != typeof n && p(t).css("margin-right", n).removeData("margin-right");
      });
      var n = p(document.body).data("padding-right");
      p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = hn, document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var e = p(this).data(nn),
            t = l({}, sn, {}, p(this).data(), {}, "object" == typeof n && n ? n : {});

        if (e || (e = new o(this, t), p(this).data(nn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](i);
        } else t.show && e.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return sn;
      }
    }]), o;
  }();

  p(document).on(ln.CLICK_DATA_API, vn, function (e) {
    var t,
        n = this,
        i = m.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var r = p(t).one(ln.SHOW, function (e) {
      e.isDefaultPrevented() || r.one(ln.HIDDEN, function () {
        p(n).is(":visible") && n.focus();
      });
    });

    wn._jQueryInterface.call(p(t), o, this);
  }), p.fn[tn] = wn._jQueryInterface, p.fn[tn].Constructor = wn, p.fn[tn].noConflict = function () {
    return p.fn[tn] = rn, wn._jQueryInterface;
  };
  var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Cn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function In(e, r, t) {
    if (0 === e.length) return e;
    if (t && "function" == typeof t) return t(e);

    for (var n = new window.DOMParser().parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function i(e) {
      var t = a[e],
          n = t.nodeName.toLowerCase();
      if (-1 === s.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t), "continue";
      var i = [].slice.call(t.attributes),
          o = [].concat(r["*"] || [], r[n] || []);
      i.forEach(function (e) {
        !function (e, t) {
          var n = e.nodeName.toLowerCase();
          if (-1 !== t.indexOf(n)) return -1 === Tn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn));

          for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        }(e, o) && t.removeAttribute(e.nodeName);
      });
    }, o = 0, l = a.length; o < l; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var An = "tooltip",
      On = "bs.tooltip",
      Nn = "." + On,
      kn = p.fn[An],
      Ln = "bs-tooltip",
      Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
      xn = ["sanitize", "whiteList", "sanitizeFn"],
      jn = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      Hn = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Rn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Cn,
    popperConfig: null
  },
      Fn = "show",
      Mn = "out",
      Wn = {
    HIDE: "hide" + Nn,
    HIDDEN: "hidden" + Nn,
    SHOW: "show" + Nn,
    SHOWN: "shown" + Nn,
    INSERTED: "inserted" + Nn,
    CLICK: "click" + Nn,
    FOCUSIN: "focusin" + Nn,
    FOCUSOUT: "focusout" + Nn,
    MOUSEENTER: "mouseenter" + Nn,
    MOUSELEAVE: "mouseleave" + Nn
  },
      Un = "fade",
      Bn = "show",
      qn = ".tooltip-inner",
      Kn = ".arrow",
      Qn = "hover",
      Vn = "focus",
      Yn = "click",
      zn = "manual",
      Xn = function () {
    function i(e, t) {
      if ("undefined" == typeof St) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var e = i.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = p(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (p(this.getTipElement()).hasClass(Bn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = p.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        p(this.element).trigger(e);
        var n = m.findShadowRoot(this.element),
            i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !i) return;
        var o = this.getTipElement(),
            r = m.getUID(this.constructor.NAME);
        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Un);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new St(this.element, o, this._getPopperConfig(a)), p(o).addClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);

        var c = function c() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Mn && t._leave(null, t);
        };

        if (p(this.tip).hasClass(Un)) {
          var h = m.getTransitionDurationFromElement(this.tip);
          p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, e.hide = function (e) {
      function t() {
        n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      }

      var n = this,
          i = this.getTipElement(),
          o = p.Event(this.constructor.Event.HIDE);

      if (p(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (p(i).removeClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Yn] = !1, this._activeTrigger[Vn] = !1, this._activeTrigger[Qn] = !1, p(this.tip).hasClass(Un)) {
          var r = m.getTransitionDurationFromElement(i);
          p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r);
        } else t();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (e) {
      p(this.getTipElement()).addClass(Ln + "-" + e);
    }, e.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()), p(e).removeClass(Un + " " + Bn);
    }, e.setElementContent = function (e, t) {
      "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = In(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text());
    }, e.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, e._getPopperConfig = function (e) {
      var t = this;
      return l({}, {
        placement: e,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Kn
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(e) {
          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
        },
        onUpdate: function onUpdate(e) {
          return t._handlePopperPlacementChange(e);
        }
      }, {}, this.config.popperConfig);
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this.config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e;
      } : e.offset = this.config.offset, e;
    }, e._getContainer = function () {
      return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
    }, e._getAttachment = function (e) {
      return Hn[e.toUpperCase()];
    }, e._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
          return i.toggle(e);
        });else if (e !== zn) {
          var t = e === Qn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = e === Qn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          p(i.element).on(t, i.config.selector, function (e) {
            return i._enter(e);
          }).on(n, i.config.selector, function (e) {
            return i._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        i.element && i.hide();
      }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var e = typeof this.element.getAttribute("data-original-title");
      !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0), p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn ? t._hoverState = Fn : (clearTimeout(t._timeout), t._hoverState = Fn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === Fn && t.show();
      }, t.config.delay.show) : t.show());
    }, e._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Mn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        t._hoverState === Mn && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, e._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }, e._getConfig = function (e) {
      var t = p(this.element).data();
      return Object.keys(t).forEach(function (e) {
        -1 !== xn.indexOf(e) && delete t[e];
      }), "number" == typeof (e = l({}, this.constructor.Default, {}, t, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(An, e, this.constructor.DefaultType), e.sanitize && (e.template = In(e.template, e.whiteList, e.sanitizeFn)), e;
    }, e._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }
      return e;
    }, e._cleanTipClass = function () {
      var e = p(this.getTipElement()),
          t = e.attr("class").match(Pn);
      null !== t && t.length && e.removeClass(t.join(""));
    }, e._handlePopperPlacementChange = function (e) {
      var t = e.instance;
      this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, e._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;
      null === e.getAttribute("x-placement") && (p(e).removeClass(Un), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this).data(On),
            t = "object" == typeof n && n;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(On, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return An;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return On;
      }
    }, {
      key: "Event",
      get: function get() {
        return Wn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Nn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return jn;
      }
    }]), i;
  }();

  p.fn[An] = Xn._jQueryInterface, p.fn[An].Constructor = Xn, p.fn[An].noConflict = function () {
    return p.fn[An] = kn, Xn._jQueryInterface;
  };

  var Gn = "popover",
      $n = "bs.popover",
      Jn = "." + $n,
      Zn = p.fn[Gn],
      ei = "bs-popover",
      ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
      ni = l({}, Xn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      ii = l({}, Xn.DefaultType, {
    content: "(string|element|function)"
  }),
      oi = "fade",
      ri = "show",
      si = ".popover-header",
      ai = ".popover-body",
      li = {
    HIDE: "hide" + Jn,
    HIDDEN: "hidden" + Jn,
    SHOW: "show" + Jn,
    SHOWN: "shown" + Jn,
    INSERTED: "inserted" + Jn,
    CLICK: "click" + Jn,
    FOCUSIN: "focusin" + Jn,
    FOCUSOUT: "focusout" + Jn,
    MOUSEENTER: "mouseenter" + Jn,
    MOUSELEAVE: "mouseleave" + Jn
  },
      ci = function (e) {
    function i() {
      return e.apply(this, arguments) || this;
    }

    !function (e, t) {
      e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t;
    }(i, e);
    var t = i.prototype;
    return t.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, t.addAttachmentClass = function (e) {
      p(this.getTipElement()).addClass(ei + "-" + e);
    }, t.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var e = p(this.getTipElement());
      this.setElementContent(e.find(si), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(ai), t), e.removeClass(oi + " " + ri);
    }, t._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, t._cleanTipClass = function () {
      var e = p(this.getTipElement()),
          t = e.attr("class").match(ti);
      null !== t && 0 < t.length && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this).data($n),
            t = "object" == typeof n ? n : null;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data($n, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ni;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Gn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return $n;
      }
    }, {
      key: "Event",
      get: function get() {
        return li;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Jn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ii;
      }
    }]), i;
  }(Xn);

  p.fn[Gn] = ci._jQueryInterface, p.fn[Gn].Constructor = ci, p.fn[Gn].noConflict = function () {
    return p.fn[Gn] = Zn, ci._jQueryInterface;
  };

  var hi = "scrollspy",
      ui = "bs.scrollspy",
      fi = "." + ui,
      di = p.fn[hi],
      pi = {
    offset: 10,
    method: "auto",
    target: ""
  },
      mi = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      gi = {
    ACTIVATE: "activate" + fi,
    SCROLL: "scroll" + fi,
    LOAD_DATA_API: "load" + fi + ".data-api"
  },
      _i = "dropdown-item",
      vi = "active",
      yi = '[data-spy="scroll"]',
      Ei = ".nav, .list-group",
      bi = ".nav-link",
      wi = ".nav-item",
      Ti = ".list-group-item",
      Ci = ".dropdown",
      Si = ".dropdown-item",
      Di = ".dropdown-toggle",
      Ii = "offset",
      Ai = "position",
      Oi = function () {
    function n(e, t) {
      var n = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + bi + "," + this._config.target + " " + Ti + "," + this._config.target + " " + Si, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(gi.SCROLL, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }

    var e = n.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
          o = "auto" === this._config.method ? e : this._config.method,
          r = o === Ai ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            n = m.getSelectorFromElement(e);

        if (n && (t = document.querySelector(n)), t) {
          var i = t.getBoundingClientRect();
          if (i.width || i.height) return [p(t)[o]().top + r, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      p.removeData(this._element, ui), p(this._scrollElement).off(fi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (e) {
      if ("string" != typeof (e = l({}, pi, {}, "object" == typeof e && e ? e : {})).target) {
        var t = p(e.target).attr("id");
        t || (t = m.getUID(hi), p(e.target).attr("id", t)), e.target = "#" + t;
      }

      return m.typeCheckConfig(hi, e, mi), e;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), n <= e) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = p([].slice.call(document.querySelectorAll(e.join(","))));

      n.hasClass(_i) ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi)) : (n.addClass(vi), n.parents(Ei).prev(bi + ", " + Ti).addClass(vi), n.parents(Ei).prev(wi).children(bi).addClass(vi)), p(this._scrollElement).trigger(gi.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains(vi);
      }).forEach(function (e) {
        return e.classList.remove(vi);
      });
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(ui);

        if (e || (e = new n(this, "object" == typeof t && t), p(this).data(ui, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return pi;
      }
    }]), n;
  }();

  p(window).on(gi.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(yi)), t = e.length; t--;) {
      var n = p(e[t]);

      Oi._jQueryInterface.call(n, n.data());
    }
  }), p.fn[hi] = Oi._jQueryInterface, p.fn[hi].Constructor = Oi, p.fn[hi].noConflict = function () {
    return p.fn[hi] = di, Oi._jQueryInterface;
  };

  var Ni = "bs.tab",
      ki = "." + Ni,
      Li = p.fn.tab,
      Pi = {
    HIDE: "hide" + ki,
    HIDDEN: "hidden" + ki,
    SHOW: "show" + ki,
    SHOWN: "shown" + ki,
    CLICK_DATA_API: "click" + ki + ".data-api"
  },
      xi = "dropdown-menu",
      ji = "active",
      Hi = "disabled",
      Ri = "fade",
      Fi = "show",
      Mi = ".dropdown",
      Wi = ".nav, .list-group",
      Ui = ".active",
      Bi = "> li > .active",
      qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Ki = ".dropdown-toggle",
      Qi = "> .dropdown-menu .active",
      Vi = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(ji) || p(this._element).hasClass(Hi))) {
        var e,
            i,
            t = p(this._element).closest(Wi)[0],
            o = m.getSelectorFromElement(this._element);

        if (t) {
          var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
          i = (i = p.makeArray(p(t).find(r)))[i.length - 1];
        }

        var s = p.Event(Pi.HIDE, {
          relatedTarget: this._element
        }),
            a = p.Event(Pi.SHOW, {
          relatedTarget: i
        });

        if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (e = document.querySelector(o)), this._activate(this._element, t);

          var l = function l() {
            var e = p.Event(Pi.HIDDEN, {
              relatedTarget: n._element
            }),
                t = p.Event(Pi.SHOWN, {
              relatedTarget: i
            });
            p(i).trigger(e), p(n._element).trigger(t);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      p.removeData(this._element, Ni), this._element = null;
    }, e._activate = function (e, t, n) {
      function i() {
        return o._transitionComplete(e, r, n);
      }

      var o = this,
          r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ui) : p(t).find(Bi))[0],
          s = n && r && p(r).hasClass(Ri);

      if (r && s) {
        var a = m.getTransitionDurationFromElement(r);
        p(r).removeClass(Fi).one(m.TRANSITION_END, i).emulateTransitionEnd(a);
      } else i();
    }, e._transitionComplete = function (e, t, n) {
      if (t) {
        p(t).removeClass(ji);
        var i = p(t.parentNode).find(Qi)[0];
        i && p(i).removeClass(ji), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      if (p(e).addClass(ji), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(Ri) && e.classList.add(Fi), e.parentNode && p(e.parentNode).hasClass(xi)) {
        var o = p(e).closest(Mi)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(Ki));
          p(r).addClass(ji);
        }

        e.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(Ni);

        if (t || (t = new i(this), e.data(Ni, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  p(document).on(Pi.CLICK_DATA_API, qi, function (e) {
    e.preventDefault(), Vi._jQueryInterface.call(p(this), "show");
  }), p.fn.tab = Vi._jQueryInterface, p.fn.tab.Constructor = Vi, p.fn.tab.noConflict = function () {
    return p.fn.tab = Li, Vi._jQueryInterface;
  };

  var Yi = "toast",
      zi = "bs.toast",
      Xi = "." + zi,
      Gi = p.fn[Yi],
      $i = {
    CLICK_DISMISS: "click.dismiss" + Xi,
    HIDE: "hide" + Xi,
    HIDDEN: "hidden" + Xi,
    SHOW: "show" + Xi,
    SHOWN: "shown" + Xi
  },
      Ji = "fade",
      Zi = "hide",
      eo = "show",
      to = "showing",
      no = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      io = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      oo = '[data-dismiss="toast"]',
      ro = function () {
    function i(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }

    var e = i.prototype;
    return e.show = function () {
      var e = this,
          t = p.Event($i.SHOW);

      if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
        this._config.animation && this._element.classList.add(Ji);

        var n = function n() {
          e._element.classList.remove(to), e._element.classList.add(eo), p(e._element).trigger($i.SHOWN), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };

        if (this._element.classList.remove(Zi), m.reflow(this._element), this._element.classList.add(to), this._config.animation) {
          var i = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, e.hide = function () {
      if (this._element.classList.contains(eo)) {
        var e = p.Event($i.HIDE);
        p(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(eo) && this._element.classList.remove(eo), p(this._element).off($i.CLICK_DISMISS), p.removeData(this._element, zi), this._element = null, this._config = null;
    }, e._getConfig = function (e) {
      return e = l({}, io, {}, p(this._element).data(), {}, "object" == typeof e && e ? e : {}), m.typeCheckConfig(Yi, e, this.constructor.DefaultType), e;
    }, e._setListeners = function () {
      var e = this;
      p(this._element).on($i.CLICK_DISMISS, oo, function () {
        return e.hide();
      });
    }, e._close = function () {
      function e() {
        t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN);
      }

      var t = this;

      if (this._element.classList.remove(eo), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(zi);

        if (t || (t = new i(this, "object" == typeof n && n), e.data(zi, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return no;
      }
    }, {
      key: "Default",
      get: function get() {
        return io;
      }
    }]), i;
  }();

  p.fn[Yi] = ro._jQueryInterface, p.fn[Yi].Constructor = ro, p.fn[Yi].noConflict = function () {
    return p.fn[Yi] = Gi, ro._jQueryInterface;
  }, e.Alert = _, e.Button = x, e.Carousel = he, e.Collapse = De, e.Dropdown = en, e.Modal = wn, e.Popover = ci, e.Scrollspy = Oi, e.Tab = Vi, e.Toast = ro, e.Tooltip = Xn, e.Util = m, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.min.js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
   true ? e(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) : undefined;
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function e(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? e(Object(r), !0).forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var n = "transitionend";

  function o(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(n);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(n);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
    jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = g.fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = {
    bindType: n,
    delegateType: n,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = g.fn[r],
      f = {
    CLOSE: "close" + c,
    CLOSED: "closed" + c,
    CLICK_DATA_API: "click" + c + ".data-api"
  },
      d = "alert",
      m = "fade",
      p = "show",
      v = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, a), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0];
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(f.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(p), g(e).hasClass(m)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(a);
        e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v())), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function () {
    return g.fn[r] = h, v._jQueryInterface;
  };

  var y = "button",
      E = "bs.button",
      C = "." + E,
      T = ".data-api",
      b = g.fn[y],
      S = "active",
      D = "btn",
      I = "focus",
      w = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      P = ".active",
      L = ".btn",
      j = {
    CLICK_DATA_API: "click" + C + T,
    FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
    LOAD_DATA_API: "load" + C + T
  },
      H = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(A)[0];

      if (n) {
        var i = this._element.querySelector(k);

        if (i) {
          if ("radio" === i.type) {
            if (i.checked && this._element.classList.contains(S)) t = !1;else {
              var o = n.querySelector(P);
              o && g(o).removeClass(S);
            }
          } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
          t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S));
    }, t.dispose = function () {
      g.removeData(this._element, E), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(E);
        t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), n;
  }();

  g(document).on(j.CLICK_DATA_API, w, function (t) {
    var e = t.target;
    if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();else {
      var n = e.querySelector(k);
      if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();

      H._jQueryInterface.call(g(e), "toggle");
    }
  }).on(j.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(L)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g(window).on(j.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
      var i = t[e],
          o = i.querySelector(k);
      o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S);
    }

    for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
      var a = t[r];
      "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S);
    }
  }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function () {
    return g.fn[y] = b, H._jQueryInterface;
  };

  var R = "carousel",
      x = "bs.carousel",
      F = "." + x,
      U = ".data-api",
      W = g.fn[R],
      q = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      M = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      Q = "prev",
      B = "left",
      V = "right",
      Y = {
    SLIDE: "slide" + F,
    SLID: "slid" + F,
    KEYDOWN: "keydown" + F,
    MOUSEENTER: "mouseenter" + F,
    MOUSELEAVE: "mouseleave" + F,
    TOUCHSTART: "touchstart" + F,
    TOUCHMOVE: "touchmove" + F,
    TOUCHEND: "touchend" + F,
    POINTERDOWN: "pointerdown" + F,
    POINTERUP: "pointerup" + F,
    DRAG_START: "dragstart" + F,
    LOAD_DATA_API: "load" + F + U,
    CLICK_DATA_API: "click" + F + U
  },
      z = "carousel",
      X = "active",
      $ = "slide",
      G = "carousel-item-right",
      J = "carousel-item-left",
      Z = "carousel-item-next",
      tt = "carousel-item-prev",
      et = "pointer-event",
      nt = ".active",
      it = ".active.carousel-item",
      ot = ".carousel-item",
      rt = ".carousel-item img",
      st = ".carousel-item-next, .carousel-item-prev",
      at = ".carousel-indicators",
      lt = "[data-slide], [data-slide-to]",
      ct = '[data-ride="carousel"]',
      ht = {
    TOUCH: "touch",
    PEN: "pen"
  },
      ut = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(K);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(Q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(it);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Y.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? K : Q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Y.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Y.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;

      if (this._touchSupported) {
        var n = function n(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };

        g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function (t) {
          return n(t);
        }), g(this._element).on(Y.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function (t) {
          return n(t);
        }), g(this._element).on(Y.TOUCHMOVE, function (t) {
          return function (t) {
            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), g(this._element).on(Y.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === K,
          i = t === Q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === Q ? -1 : 1)) % this._items.length;
      return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(it)),
          o = g.Event(Y.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
        g(e).removeClass(X);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(X);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(it),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Y.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass($)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(x),
            e = l({}, q, {}, g(this).data());
        "object" == typeof i && (e = l({}, e, {}, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(z)) {
          var i = l({}, g(n).data(), {}, g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return q;
      }
    }]), r;
  }();

  g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      ut._jQueryInterface.call(i, i.data());
    }
  }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function () {
    return g.fn[R] = W, ut._jQueryInterface;
  };

  var ft = "collapse",
      dt = "bs.collapse",
      gt = "." + dt,
      _t = g.fn[ft],
      mt = {
    toggle: !0,
    parent: ""
  },
      pt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      vt = {
    SHOW: "show" + gt,
    SHOWN: "shown" + gt,
    HIDE: "hide" + gt,
    HIDDEN: "hidden" + gt,
    CLICK_DATA_API: "click" + gt + ".data-api"
  },
      yt = "show",
      Et = "collapse",
      Ct = "collapsing",
      Tt = "collapsed",
      bt = "width",
      St = "height",
      Dt = ".show, .collapsing",
      It = '[data-toggle="collapse"]',
      wt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(yt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
        var i = g.Event(vt.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));

          var o = this._getDimension();

          g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(yt)) {
        var e = g.Event(vt.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(bt) ? bt : St;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(yt);
      e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(dt),
            n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return mt;
      }
    }]), a;
  }();

  g(document).on(vt.CLICK_DATA_API, It, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(dt) ? "toggle" : n.data();

      wt._jQueryInterface.call(t, e);
    });
  }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function () {
    return g.fn[ft] = _t, wt._jQueryInterface;
  };

  var At = "dropdown",
      Nt = "bs.dropdown",
      Ot = "." + Nt,
      kt = ".data-api",
      Pt = g.fn[At],
      Lt = new RegExp("38|40|27"),
      jt = {
    HIDE: "hide" + Ot,
    HIDDEN: "hidden" + Ot,
    SHOW: "show" + Ot,
    SHOWN: "shown" + Ot,
    CLICK: "click" + Ot,
    CLICK_DATA_API: "click" + Ot + kt,
    KEYDOWN_DATA_API: "keydown" + Ot + kt,
    KEYUP_DATA_API: "keyup" + Ot + kt
  },
      Ht = "disabled",
      Rt = "show",
      xt = "dropup",
      Ft = "dropright",
      Ut = "dropleft",
      Wt = "dropdown-menu-right",
      qt = "position-static",
      Mt = '[data-toggle="dropdown"]',
      Kt = ".dropdown form",
      Qt = ".dropdown-menu",
      Bt = ".navbar-nav",
      Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Yt = "top-start",
      zt = "top-end",
      Xt = "bottom-start",
      $t = "bottom-end",
      Gt = "right-start",
      Jt = "left-start",
      Zt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      te = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      ee = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
        var t = g(this._menu).hasClass(Rt);
        c._clearMenus(), t || this.show(!0);
      }
    }, t.show = function (t) {
      if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
        var e = {
          relatedTarget: this._element
        },
            n = g.Event(jt.SHOW, e),
            i = c._getParentFromElement(this._element);

        if (g(i).trigger(n), !n.isDefaultPrevented()) {
          if (!this._inNavbar && t) {
            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var o = this._element;
            "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(jt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(jt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(Qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Xt;
      return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), l({}, t, {}, this._config.popperConfig);
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Nt);

        if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Nt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(jt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Rt);

        if (n || 27 !== t.which) if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Vt)).filter(function (t) {
            return g(t).is(":visible");
          });

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Mt);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Zt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return te;
      }
    }]), c;
  }();

  g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function (t) {
    t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle");
  }).on(jt.CLICK_DATA_API, Kt, function (t) {
    t.stopPropagation();
  }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function () {
    return g.fn[At] = Pt, ee._jQueryInterface;
  };

  var ne = "modal",
      ie = "bs.modal",
      oe = "." + ie,
      re = g.fn[ne],
      se = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      ae = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      le = {
    HIDE: "hide" + oe,
    HIDE_PREVENTED: "hidePrevented" + oe,
    HIDDEN: "hidden" + oe,
    SHOW: "show" + oe,
    SHOWN: "shown" + oe,
    FOCUSIN: "focusin" + oe,
    RESIZE: "resize" + oe,
    CLICK_DISMISS: "click.dismiss" + oe,
    KEYDOWN_DISMISS: "keydown.dismiss" + oe,
    MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
    CLICK_DATA_API: "click" + oe + ".data-api"
  },
      ce = "modal-dialog-scrollable",
      he = "modal-scrollbar-measure",
      ue = "modal-backdrop",
      fe = "modal-open",
      de = "fade",
      ge = "show",
      _e = "modal-static",
      me = ".modal-dialog",
      pe = ".modal-body",
      ve = '[data-toggle="modal"]',
      ye = '[data-dismiss="modal"]',
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ce = ".sticky-top",
      Te = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(de) && (this._isTransitioning = !0);
        var n = g.Event(le.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(le.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(de);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(oe);
      }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t;
    }, t._triggerBackdropTransition = function () {
      var t = this;

      if ("static" === this._config.backdrop) {
        var e = g.Event(le.HIDE_PREVENTED);
        if (g(this._element).trigger(e), e.defaultPrevented) return;

        this._element.classList.add(_e);

        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, function () {
          t._element.classList.remove(_e);
        }).emulateTransitionEnd(n), this._element.focus();
      } else this.hide();
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(de),
          i = this._dialog ? this._dialog.querySelector(pe) : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

      function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r);
      }

      var r = g.Event(le.SHOWN, {
        relatedTarget: t
      });

      if (n) {
        var s = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(le.FOCUSIN).on(le.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
        27 === t.which && e._triggerBackdropTransition();
      }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(le.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(le.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(de) ? de : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ge);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(de)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(Ee)),
            e = [].slice.call(document.querySelectorAll(Ce));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(fe);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(Ee));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + Ce));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = he, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(ie),
            e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return se;
      }
    }]), o;
  }();

  g(document).on(le.CLICK_DATA_API, ve, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(le.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(le.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    Te._jQueryInterface.call(g(e), o, this);
  }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function () {
    return g.fn[ne] = re, Te._jQueryInterface;
  };
  var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Se = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function we(t, r, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function i(t) {
      var e = a[t],
          n = e.nodeName.toLowerCase();
      if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
      var i = [].slice.call(e.attributes),
          o = [].concat(r["*"] || [], r[n] || []);
      i.forEach(function (t) {
        !function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        }(t, o) && e.removeAttribute(t.nodeName);
      });
    }, o = 0, l = a.length; o < l; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var Ae = "tooltip",
      Ne = "bs.tooltip",
      Oe = "." + Ne,
      ke = g.fn[Ae],
      Pe = "bs-tooltip",
      Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      He = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      Re = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      xe = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Se,
    popperConfig: null
  },
      Fe = "show",
      Ue = "out",
      We = {
    HIDE: "hide" + Oe,
    HIDDEN: "hidden" + Oe,
    SHOW: "show" + Oe,
    SHOWN: "shown" + Oe,
    INSERTED: "inserted" + Oe,
    CLICK: "click" + Oe,
    FOCUSIN: "focusin" + Oe,
    FOCUSOUT: "focusout" + Oe,
    MOUSEENTER: "mouseenter" + Oe,
    MOUSELEAVE: "mouseleave" + Oe
  },
      qe = "fade",
      Me = "show",
      Ke = ".tooltip-inner",
      Qe = ".arrow",
      Be = "hover",
      Ve = "focus",
      Ye = "click",
      ze = "manual",
      Xe = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e);
        };

        if (g(this.tip).hasClass(qe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      function e() {
        n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
      }

      var n = this,
          i = this.getTipElement(),
          o = g.Event(this.constructor.Event.HIDE);

      if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) {
          var r = _.getTransitionDurationFromElement(i);

          g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
        } else e();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Pe + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me);
    }, t.setElementContent = function (t, e) {
      "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, t._getPopperConfig = function (t) {
      var e = this;
      return l({}, {
        placement: t,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Qe
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(t) {
          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
        },
        onUpdate: function onUpdate(t) {
          return e._handlePopperPlacementChange(t);
        }
      }, {}, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Re[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== ze) {
          var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        i.element && i.hide();
      }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");
      !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === Fe && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === Ue && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== je.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Le);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ne),
            e = "object" == typeof n && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return xe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ne;
      }
    }, {
      key: "Event",
      get: function get() {
        return We;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Oe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }]), i;
  }();

  g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function () {
    return g.fn[Ae] = ke, Xe._jQueryInterface;
  };

  var $e = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = g.fn[$e],
      tn = "bs-popover",
      en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
      nn = l({}, Xe.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      on = l({}, Xe.DefaultType, {
    content: "(string|element|function)"
  }),
      rn = "fade",
      sn = "show",
      an = ".popover-header",
      ln = ".popover-body",
      cn = {
    HIDE: "hide" + Je,
    HIDDEN: "hidden" + Je,
    SHOW: "show" + Je,
    SHOWN: "shown" + Je,
    INSERTED: "inserted" + Je,
    CLICK: "click" + Je,
    FOCUSIN: "focusin" + Je,
    FOCUSOUT: "focusout" + Je,
    MOUSEENTER: "mouseenter" + Je,
    MOUSELEAVE: "mouseleave" + Je
  },
      hn = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }

    !function (t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }(i, t);
    var e = i.prototype;
    return e.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, e.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(tn + "-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(an), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn);
    }, e._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, e._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(en);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ge),
            e = "object" == typeof n ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return $e;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ge;
      }
    }, {
      key: "Event",
      get: function get() {
        return cn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Je;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return on;
      }
    }]), i;
  }(Xe);

  g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function () {
    return g.fn[$e] = Ze, hn._jQueryInterface;
  };

  var un = "scrollspy",
      fn = "bs.scrollspy",
      dn = "." + fn,
      gn = g.fn[un],
      _n = {
    offset: 10,
    method: "auto",
    target: ""
  },
      mn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      pn = {
    ACTIVATE: "activate" + dn,
    SCROLL: "scroll" + dn,
    LOAD_DATA_API: "load" + dn + ".data-api"
  },
      vn = "dropdown-item",
      yn = "active",
      En = '[data-spy="scroll"]',
      Cn = ".nav, .list-group",
      Tn = ".nav-link",
      bn = ".nav-item",
      Sn = ".list-group-item",
      Dn = ".dropdown",
      In = ".dropdown-item",
      wn = ".dropdown-toggle",
      An = "offset",
      Nn = "position",
      On = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? An : Nn,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === Nn ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(un, t, mn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(yn);
      }).forEach(function (t) {
        return t.classList.remove(yn);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(fn);

        if (t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return _n;
      }
    }]), n;
  }();

  g(window).on(pn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
      var n = g(t[e]);

      On._jQueryInterface.call(n, n.data());
    }
  }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function () {
    return g.fn[un] = gn, On._jQueryInterface;
  };

  var kn = "bs.tab",
      Pn = "." + kn,
      Ln = g.fn.tab,
      jn = {
    HIDE: "hide" + Pn,
    HIDDEN: "hidden" + Pn,
    SHOW: "show" + Pn,
    SHOWN: "shown" + Pn,
    CLICK_DATA_API: "click" + Pn + ".data-api"
  },
      Hn = "dropdown-menu",
      Rn = "active",
      xn = "disabled",
      Fn = "fade",
      Un = "show",
      Wn = ".dropdown",
      qn = ".nav, .list-group",
      Mn = ".active",
      Kn = "> li > .active",
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Bn = ".dropdown-toggle",
      Vn = "> .dropdown-menu .active",
      Yn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
        var t,
            i,
            e = g(this._element).closest(qn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(jn.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(jn.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(jn.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(jn.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, kn), this._element = null;
    }, t._activate = function (t, e, n) {
      function i() {
        return o._transitionComplete(t, r, n);
      }

      var o = this,
          r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
          s = n && r && g(r).hasClass(Fn);

      if (r && s) {
        var a = _.getTransitionDurationFromElement(r);

        g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a);
      } else i();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Rn);
        var i = g(e.parentNode).find(Vn)[0];
        i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) {
        var o = g(t).closest(Wn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(Bn));
          g(r).addClass(Rn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(kn);

        if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
    t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Ln, Yn._jQueryInterface;
  };

  var zn = "toast",
      Xn = "bs.toast",
      $n = "." + Xn,
      Gn = g.fn[zn],
      Jn = {
    CLICK_DISMISS: "click.dismiss" + $n,
    HIDE: "hide" + $n,
    HIDDEN: "hidden" + $n,
    SHOW: "show" + $n,
    SHOWN: "shown" + $n
  },
      Zn = "fade",
      ti = "hide",
      ei = "show",
      ni = "showing",
      ii = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      oi = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ri = '[data-dismiss="toast"]',
      si = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this,
          e = g.Event(Jn.SHOW);

      if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
        this._config.animation && this._element.classList.add(Zn);

        var n = function n() {
          t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) {
          var i = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains(ei)) {
        var t = g.Event(Jn.HIDE);
        g(this._element).trigger(t), t.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
        return t.hide();
      });
    }, t._close = function () {
      function t() {
        e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
      }

      var e = this;

      if (this._element.classList.remove(ei), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Xn);

        if (e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ii;
      }
    }, {
      key: "Default",
      get: function get() {
        return oi;
      }
    }]), i;
  }();

  g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function () {
    return g.fn[zn] = Gn, si._jQueryInterface;
  }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************!*\
  !*** multi ./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js ./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.min.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mishal/Desktop/ruby/login/app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js */"./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js");
module.exports = __webpack_require__(/*! /home/mishal/Desktop/ruby/login/app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.min.js */"./app/javascript/packs/assets/libs/bootstrap/dist/js/bootstrap.min.js");


/***/ })

/******/ });
//# sourceMappingURL=bootstrap-8c8d24b9c6781d92f646.js.map