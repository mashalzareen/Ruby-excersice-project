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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/@shopify/draggable/lib/droppable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/@shopify/draggable/lib/droppable.js":
/*!******************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/@shopify/draggable/lib/droppable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 44);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(40);

      Object.defineProperty(exports, 'closest', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_closest)["default"];
        }
      });

      var _requestNextAnimationFrame = __webpack_require__(38);

      Object.defineProperty(exports, 'requestNextAnimationFrame', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_requestNextAnimationFrame)["default"];
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SensorEvent = __webpack_require__(19);

      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SensorEvent[key];
          }
        });
      });
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(22);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Sensor2["default"];
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractEvent = __webpack_require__(42);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _AbstractEvent2["default"];
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(31);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _AbstractPlugin2["default"];
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(2);

      Object.defineProperty(exports, 'Sensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Sensor)["default"];
        }
      });

      var _MouseSensor = __webpack_require__(21);

      Object.defineProperty(exports, 'MouseSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_MouseSensor)["default"];
        }
      });

      var _TouchSensor = __webpack_require__(18);

      Object.defineProperty(exports, 'TouchSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_TouchSensor)["default"];
        }
      });

      var _DragSensor = __webpack_require__(16);

      Object.defineProperty(exports, 'DragSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_DragSensor)["default"];
        }
      });

      var _ForceTouchSensor = __webpack_require__(14);

      Object.defineProperty(exports, 'ForceTouchSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ForceTouchSensor)["default"];
        }
      });

      var _SensorEvent = __webpack_require__(1);

      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SensorEvent[key];
          }
        });
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Announcement = __webpack_require__(33);

      Object.defineProperty(exports, 'Announcement', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Announcement)["default"];
        }
      });
      Object.defineProperty(exports, 'defaultAnnouncementOptions', {
        enumerable: true,
        get: function get() {
          return _Announcement.defaultOptions;
        }
      });

      var _Focusable = __webpack_require__(30);

      Object.defineProperty(exports, 'Focusable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Focusable)["default"];
        }
      });

      var _Mirror = __webpack_require__(28);

      Object.defineProperty(exports, 'Mirror', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Mirror)["default"];
        }
      });
      Object.defineProperty(exports, 'defaultMirrorOptions', {
        enumerable: true,
        get: function get() {
          return _Mirror.defaultOptions;
        }
      });

      var _Scrollable = __webpack_require__(24);

      Object.defineProperty(exports, 'Scrollable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Scrollable)["default"];
        }
      });
      Object.defineProperty(exports, 'defaultScrollableOptions', {
        enumerable: true,
        get: function get() {
          return _Scrollable.defaultOptions;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DraggableEvent = __webpack_require__(34);

      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DraggableEvent[key];
          }
        });
      });
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragEvent = __webpack_require__(35);

      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DragEvent[key];
          }
        });
      });
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DroppableEvent = __webpack_require__(43);

      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DroppableEvent[key];
          }
        });
      });
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
       * @class Emitter
       * @module Emitter
       */

      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          this.callbacks = {};
        }
        /**
         * Registers callbacks by event name
         * @param {String} type
         * @param {...Function} callbacks
         */


        _createClass(Emitter, [{
          key: "on",
          value: function on(type) {
            var _this$callbacks$type;

            if (!this.callbacks[type]) {
              this.callbacks[type] = [];
            }

            for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              callbacks[_key - 1] = arguments[_key];
            }

            (_this$callbacks$type = this.callbacks[type]).push.apply(_this$callbacks$type, callbacks);

            return this;
          }
          /**
           * Unregisters callbacks by event name
           * @param {String} type
           * @param {Function} callback
           */

        }, {
          key: "off",
          value: function off(type, callback) {
            if (!this.callbacks[type]) {
              return null;
            }

            var copy = this.callbacks[type].slice(0);

            for (var i = 0; i < copy.length; i++) {
              if (callback === copy[i]) {
                this.callbacks[type].splice(i, 1);
              }
            }

            return this;
          }
          /**
           * Triggers event callbacks by event object
           * @param {AbstractEvent} event
           */

        }, {
          key: "trigger",
          value: function trigger(event) {
            if (!this.callbacks[event.type]) {
              return null;
            }

            var callbacks = _toConsumableArray(this.callbacks[event.type]);

            var caughtErrors = [];

            for (var i = callbacks.length - 1; i >= 0; i--) {
              var callback = callbacks[i];

              try {
                callback(event);
              } catch (error) {
                caughtErrors.push(error);
              }
            }

            if (caughtErrors.length) {
              /* eslint-disable no-console */
              console.error("Draggable caught errors while triggering '".concat(event.type, "'"), caughtErrors);
              /* eslint-disable no-console */
            }

            return this;
          }
        }]);

        return Emitter;
      }();

      exports["default"] = Emitter;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Emitter = __webpack_require__(10);

      var _Emitter2 = _interopRequireDefault(_Emitter);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Emitter2["default"];
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _utils = __webpack_require__(0);

      var _Plugins = __webpack_require__(6);

      var _Emitter = __webpack_require__(11);

      var _Emitter2 = _interopRequireDefault(_Emitter);

      var _Sensors = __webpack_require__(5);

      var _DraggableEvent = __webpack_require__(7);

      var _DragEvent = __webpack_require__(8);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragMove = Symbol('onDragMove');
      var onDragStop = Symbol('onDragStop');
      var onDragPressure = Symbol('onDragPressure');
      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['drag:start']
       * @const {Function} defaultAnnouncements['drag:stop']
       */

      var defaultAnnouncements = {
        'drag:start': function dragStart(event) {
          return "Picked up ".concat(event.source.textContent.trim() || event.source.id || 'draggable element');
        },
        'drag:stop': function dragStop(event) {
          return "Released ".concat(event.source.textContent.trim() || event.source.id || 'draggable element');
        }
      };
      var defaultClasses = {
        'container:dragging': 'draggable-container--is-dragging',
        'source:dragging': 'draggable-source--is-dragging',
        'source:placed': 'draggable-source--placed',
        'container:placed': 'draggable-container--placed',
        'body:dragging': 'draggable--is-dragging',
        'draggable:over': 'draggable--over',
        'container:over': 'draggable-container--over',
        'source:original': 'draggable--original',
        mirror: 'draggable-mirror'
      };
      var defaultOptions = exports.defaultOptions = {
        draggable: '.draggable-source',
        handle: null,
        delay: 100,
        placedTimeout: 800,
        plugins: [],
        sensors: []
      };
      /**
       * This is the core draggable library that does the heavy lifting
       * @class Draggable
       * @module Draggable
       */

      var Draggable = /*#__PURE__*/function () {
        /**
         * Draggable constructor.
         * @constructs Draggable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
         * @param {Object} options - Options for draggable
         */
        function Draggable() {
          var _this = this;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [document.body];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Draggable);

          /**
           * Draggable containers
           * @property containers
           * @type {HTMLElement[]}
           */
          if (containers instanceof NodeList || containers instanceof Array) {
            this.containers = _toConsumableArray(containers);
          } else if (containers instanceof HTMLElement) {
            this.containers = [containers];
          } else {
            throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
          }

          this.options = _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || {}),
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          });
          /**
           * Draggables event emitter
           * @property emitter
           * @type {Emitter}
           */

          this.emitter = new _Emitter2["default"]();
          /**
           * Current drag state
           * @property dragging
           * @type {Boolean}
           */

          this.dragging = false;
          /**
           * Active plugins
           * @property plugins
           * @type {Plugin[]}
           */

          this.plugins = [];
          /**
           * Active sensors
           * @property sensors
           * @type {Sensor[]}
           */

          this.sensors = [];
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onDragPressure] = this[onDragPressure].bind(this);
          document.addEventListener('drag:start', this[onDragStart], true);
          document.addEventListener('drag:move', this[onDragMove], true);
          document.addEventListener('drag:stop', this[onDragStop], true);
          document.addEventListener('drag:pressure', this[onDragPressure], true);
          var defaultPlugins = Object.values(Draggable.Plugins).map(function (Plugin) {
            return Plugin;
          });
          var defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];
          this.addPlugin.apply(this, [].concat(_toConsumableArray(defaultPlugins), _toConsumableArray(this.options.plugins)));
          this.addSensor.apply(this, [].concat(defaultSensors, _toConsumableArray(this.options.sensors)));
          var draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
            draggable: this
          });
          this.on('mirror:created', function (_ref8) {
            var mirror = _ref8.mirror;
            return _this.mirror = mirror;
          });
          this.on('mirror:destroy', function () {
            return _this.mirror = null;
          });
          this.trigger(draggableInitializedEvent);
        }
        /**
         * Destroys Draggable instance. This removes all internal event listeners and
         * deactivates sensors and plugins
         */

        /**
         * Default plugins draggable uses
         * @static
         * @property {Object} Plugins
         * @property {Announcement} Plugins.Announcement
         * @property {Focusable} Plugins.Focusable
         * @property {Mirror} Plugins.Mirror
         * @property {Scrollable} Plugins.Scrollable
         * @type {Object}
         */


        _createClass(Draggable, [{
          key: "destroy",
          value: function destroy() {
            document.removeEventListener('drag:start', this[onDragStart], true);
            document.removeEventListener('drag:move', this[onDragMove], true);
            document.removeEventListener('drag:stop', this[onDragStop], true);
            document.removeEventListener('drag:pressure', this[onDragPressure], true);
            var draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
              draggable: this
            });
            this.trigger(draggableDestroyEvent);
            this.removePlugin.apply(this, _toConsumableArray(this.plugins.map(function (plugin) {
              return plugin.constructor;
            })));
            this.removeSensor.apply(this, _toConsumableArray(this.sensors.map(function (sensor) {
              return sensor.constructor;
            })));
          }
          /**
           * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
           * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
           * @return {Draggable}
           * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
           */

        }, {
          key: "addPlugin",
          value: function addPlugin() {
            var _this2 = this;

            for (var _len2 = arguments.length, plugins = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              plugins[_key2] = arguments[_key2];
            }

            var activePlugins = plugins.map(function (Plugin) {
              return new Plugin(_this2);
            });
            activePlugins.forEach(function (plugin) {
              return plugin.attach();
            });
            this.plugins = [].concat(_toConsumableArray(this.plugins), _toConsumableArray(activePlugins));
            return this;
          }
          /**
           * Removes plugins that are already attached to this draggable instance. This will end up calling
           * the detach method of the plugin
           * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
           * @return {Draggable}
           * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
           */

        }, {
          key: "removePlugin",
          value: function removePlugin() {
            for (var _len3 = arguments.length, plugins = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              plugins[_key3] = arguments[_key3];
            }

            var removedPlugins = this.plugins.filter(function (plugin) {
              return plugins.includes(plugin.constructor);
            });
            removedPlugins.forEach(function (plugin) {
              return plugin.detach();
            });
            this.plugins = this.plugins.filter(function (plugin) {
              return !plugins.includes(plugin.constructor);
            });
            return this;
          }
          /**
           * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
           * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
           * @return {Draggable}
           * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
           */

        }, {
          key: "addSensor",
          value: function addSensor() {
            var _this3 = this;

            for (var _len4 = arguments.length, sensors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              sensors[_key4] = arguments[_key4];
            }

            var activeSensors = sensors.map(function (Sensor) {
              return new Sensor(_this3.containers, _this3.options);
            });
            activeSensors.forEach(function (sensor) {
              return sensor.attach();
            });
            this.sensors = [].concat(_toConsumableArray(this.sensors), _toConsumableArray(activeSensors));
            return this;
          }
          /**
           * Removes sensors that are already attached to this draggable instance. This will end up calling
           * the detach method of the sensor
           * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
           * @return {Draggable}
           * @example draggable.removeSensor(TouchSensor, DragSensor)
           */

        }, {
          key: "removeSensor",
          value: function removeSensor() {
            for (var _len5 = arguments.length, sensors = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              sensors[_key5] = arguments[_key5];
            }

            var removedSensors = this.sensors.filter(function (sensor) {
              return sensors.includes(sensor.constructor);
            });
            removedSensors.forEach(function (sensor) {
              return sensor.detach();
            });
            this.sensors = this.sensors.filter(function (sensor) {
              return !sensors.includes(sensor.constructor);
            });
            return this;
          }
          /**
           * Adds container to this draggable instance
           * @param {...HTMLElement} containers - Containers you want to add to draggable
           * @return {Draggable}
           * @example draggable.addContainer(document.body)
           */

        }, {
          key: "addContainer",
          value: function addContainer() {
            for (var _len6 = arguments.length, containers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              containers[_key6] = arguments[_key6];
            }

            this.containers = [].concat(_toConsumableArray(this.containers), containers);
            this.sensors.forEach(function (sensor) {
              return sensor.addContainer.apply(sensor, containers);
            });
            return this;
          }
          /**
           * Removes container from this draggable instance
           * @param {...HTMLElement} containers - Containers you want to remove from draggable
           * @return {Draggable}
           * @example draggable.removeContainer(document.body)
           */

        }, {
          key: "removeContainer",
          value: function removeContainer() {
            for (var _len7 = arguments.length, containers = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              containers[_key7] = arguments[_key7];
            }

            this.containers = this.containers.filter(function (container) {
              return !containers.includes(container);
            });
            this.sensors.forEach(function (sensor) {
              return sensor.removeContainer.apply(sensor, containers);
            });
            return this;
          }
          /**
           * Adds listener for draggable events
           * @param {String} type - Event name
           * @param {...Function} callbacks - Event callbacks
           * @return {Draggable}
           * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
           */

        }, {
          key: "on",
          value: function on(type) {
            var _this$emitter;

            for (var _len8 = arguments.length, callbacks = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
              callbacks[_key8 - 1] = arguments[_key8];
            }

            (_this$emitter = this.emitter).on.apply(_this$emitter, [type].concat(callbacks));

            return this;
          }
          /**
           * Removes listener from draggable
           * @param {String} type - Event name
           * @param {Function} callback - Event callback
           * @return {Draggable}
           * @example draggable.off('drag:start', handlerFunction);
           */

        }, {
          key: "off",
          value: function off(type, callback) {
            this.emitter.off(type, callback);
            return this;
          }
          /**
           * Triggers draggable event
           * @param {AbstractEvent} event - Event instance
           * @return {Draggable}
           * @example draggable.trigger(event);
           */

        }, {
          key: "trigger",
          value: function trigger(event) {
            this.emitter.trigger(event);
            return this;
          }
          /**
           * Returns class name for class identifier
           * @param {String} name - Name of class identifier
           * @return {String|null}
           */

        }, {
          key: "getClassNameFor",
          value: function getClassNameFor(name) {
            return this.options.classes[name];
          }
          /**
           * Returns true if this draggable instance is currently dragging
           * @return {Boolean}
           */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return Boolean(this.dragging);
          }
          /**
           * Returns all draggable elements
           * @return {HTMLElement[]}
           */

        }, {
          key: "getDraggableElements",
          value: function getDraggableElements() {
            var _this4 = this;

            return this.containers.reduce(function (current, container) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(_this4.getDraggableElementsForContainer(container)));
            }, []);
          }
          /**
           * Returns draggable elements for a given container, excluding the mirror and
           * original source element if present
           * @param {HTMLElement} container
           * @return {HTMLElement[]}
           */

        }, {
          key: "getDraggableElementsForContainer",
          value: function getDraggableElementsForContainer(container) {
            var _this5 = this;

            var allDraggableElements = container.querySelectorAll(this.options.draggable);
            return _toConsumableArray(allDraggableElements).filter(function (childElement) {
              return childElement !== _this5.originalSource && childElement !== _this5.mirror;
            });
          }
          /**
           * Drag start handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            var _this6 = this;

            var sensorEvent = getSensorEvent(event);
            var target = sensorEvent.target,
                container = sensorEvent.container;

            if (!this.containers.includes(container)) {
              return;
            }

            if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
              sensorEvent.cancel();
              return;
            } // Find draggable source element


            this.originalSource = (0, _utils.closest)(target, this.options.draggable);
            this.sourceContainer = container;

            if (!this.originalSource) {
              sensorEvent.cancel();
              return;
            }

            if (this.lastPlacedSource && this.lastPlacedContainer) {
              clearTimeout(this.placedTimeoutID);
              this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
              this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
            }

            this.source = this.originalSource.cloneNode(true);
            this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
            this.originalSource.style.display = 'none';
            var dragEvent = new _DragEvent.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent: sensorEvent
            });
            this.trigger(dragEvent);
            this.dragging = !dragEvent.canceled();

            if (dragEvent.canceled()) {
              this.source.parentNode.removeChild(this.source);
              this.originalSource.style.display = null;
              return;
            }

            this.originalSource.classList.add(this.getClassNameFor('source:original'));
            this.source.classList.add(this.getClassNameFor('source:dragging'));
            this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));
            document.body.classList.add(this.getClassNameFor('body:dragging'));
            applyUserSelect(document.body, 'none');
            requestAnimationFrame(function () {
              var oldSensorEvent = getSensorEvent(event);
              var newSensorEvent = oldSensorEvent.clone({
                target: _this6.source
              });

              _this6[onDragMove](_extends({}, event, {
                detail: newSensorEvent
              }));
            });
          }
          /**
           * Drag move handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var sensorEvent = getSensorEvent(event);
            var container = sensorEvent.container;
            var target = sensorEvent.target;
            var dragMoveEvent = new _DragEvent.DragMoveEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent: sensorEvent
            });
            this.trigger(dragMoveEvent);

            if (dragMoveEvent.canceled()) {
              sensorEvent.cancel();
            }

            target = (0, _utils.closest)(target, this.options.draggable);
            var withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
            var overContainer = sensorEvent.overContainer || withinCorrectContainer;
            var isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
            var isLeavingDraggable = this.currentOver && target !== this.currentOver;
            var isOverContainer = overContainer && this.currentOverContainer !== overContainer;
            var isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;

            if (isLeavingDraggable) {
              var dragOutEvent = new _DragEvent.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                over: this.currentOver
              });
              this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
              this.currentOver = null;
              this.trigger(dragOutEvent);
            }

            if (isLeavingContainer) {
              var dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: this.currentOverContainer
              });
              this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
              this.currentOverContainer = null;
              this.trigger(dragOutContainerEvent);
            }

            if (isOverContainer) {
              overContainer.classList.add(this.getClassNameFor('container:over'));
              var dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: overContainer
              });
              this.currentOverContainer = overContainer;
              this.trigger(dragOverContainerEvent);
            }

            if (isOverDraggable) {
              target.classList.add(this.getClassNameFor('draggable:over'));
              var dragOverEvent = new _DragEvent.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: overContainer,
                over: target
              });
              this.currentOver = target;
              this.trigger(dragOverEvent);
            }
          }
          /**
           * Drag stop handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var _this7 = this;

            if (!this.dragging) {
              return;
            }

            this.dragging = false;
            var dragStopEvent = new _DragEvent.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: event.sensorEvent,
              sourceContainer: this.sourceContainer
            });
            this.trigger(dragStopEvent);
            this.source.parentNode.insertBefore(this.originalSource, this.source);
            this.source.parentNode.removeChild(this.source);
            this.originalSource.style.display = '';
            this.source.classList.remove(this.getClassNameFor('source:dragging'));
            this.originalSource.classList.remove(this.getClassNameFor('source:original'));
            this.originalSource.classList.add(this.getClassNameFor('source:placed'));
            this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));
            this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));
            document.body.classList.remove(this.getClassNameFor('body:dragging'));
            applyUserSelect(document.body, '');

            if (this.currentOver) {
              this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
            }

            if (this.currentOverContainer) {
              this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
            }

            this.lastPlacedSource = this.originalSource;
            this.lastPlacedContainer = this.sourceContainer;
            this.placedTimeoutID = setTimeout(function () {
              if (_this7.lastPlacedSource) {
                _this7.lastPlacedSource.classList.remove(_this7.getClassNameFor('source:placed'));
              }

              if (_this7.lastPlacedContainer) {
                _this7.lastPlacedContainer.classList.remove(_this7.getClassNameFor('container:placed'));
              }

              _this7.lastPlacedSource = null;
              _this7.lastPlacedContainer = null;
            }, this.options.placedTimeout);
            this.source = null;
            this.originalSource = null;
            this.currentOverContainer = null;
            this.currentOver = null;
            this.sourceContainer = null;
          }
          /**
           * Drag pressure handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragPressure,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var sensorEvent = getSensorEvent(event);
            var source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
            var dragPressureEvent = new _DragEvent.DragPressureEvent({
              sensorEvent: sensorEvent,
              source: source,
              pressure: sensorEvent.pressure
            });
            this.trigger(dragPressureEvent);
          }
        }]);

        return Draggable;
      }();

      exports["default"] = Draggable;
      Draggable.Plugins = {
        Announcement: _Plugins.Announcement,
        Focusable: _Plugins.Focusable,
        Mirror: _Plugins.Mirror,
        Scrollable: _Plugins.Scrollable
      };

      function getSensorEvent(event) {
        return event.detail;
      }

      function applyUserSelect(element, value) {
        element.style.webkitUserSelect = value;
        element.style.mozUserSelect = value;
        element.style.msUserSelect = value;
        element.style.oUserSelect = value;
        element.style.userSelect = value;
      }
      /***/

    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(2);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
      var onMouseForceDown = Symbol('onMouseForceDown');
      var onMouseDown = Symbol('onMouseDown');
      var onMouseForceChange = Symbol('onMouseForceChange');
      var onMouseMove = Symbol('onMouseMove');
      var onMouseUp = Symbol('onMouseUp');
      var onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');
      /**
       * This sensor picks up native force touch events and dictates drag operations
       * @class ForceTouchSensor
       * @module ForceTouchSensor
       * @extends Sensor
       */

      var ForceTouchSensor = /*#__PURE__*/function (_Sensor2$default) {
        _inherits(ForceTouchSensor, _Sensor2$default);

        var _super = _createSuper(ForceTouchSensor);

        /**
         * ForceTouchSensor constructor.
         * @constructs ForceTouchSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function ForceTouchSensor() {
          var _this8;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, ForceTouchSensor);

          _this8 = _super.call(this, containers, options);
          /**
           * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
           * @property mightDrag
           * @type {Boolean}
           */

          _this8.mightDrag = false;
          _this8[onMouseForceWillBegin] = _this8[onMouseForceWillBegin].bind(_assertThisInitialized(_this8));
          _this8[onMouseForceDown] = _this8[onMouseForceDown].bind(_assertThisInitialized(_this8));
          _this8[onMouseDown] = _this8[onMouseDown].bind(_assertThisInitialized(_this8));
          _this8[onMouseForceChange] = _this8[onMouseForceChange].bind(_assertThisInitialized(_this8));
          _this8[onMouseMove] = _this8[onMouseMove].bind(_assertThisInitialized(_this8));
          _this8[onMouseUp] = _this8[onMouseUp].bind(_assertThisInitialized(_this8));
          return _this8;
        }
        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(ForceTouchSensor, [{
          key: "attach",
          value: function attach() {
            var _iterator = _createForOfIteratorHelper(this.containers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var container = _step.value;
                container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                container.addEventListener('mousedown', this[onMouseDown], true);
                container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            document.addEventListener('mousemove', this[onMouseMove]);
            document.addEventListener('mouseup', this[onMouseUp]);
          }
          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: "detach",
          value: function detach() {
            var _iterator2 = _createForOfIteratorHelper(this.containers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var container = _step2.value;
                container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                container.removeEventListener('mousedown', this[onMouseDown], true);
                container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            document.removeEventListener('mousemove', this[onMouseMove]);
            document.removeEventListener('mouseup', this[onMouseUp]);
          }
          /**
           * Mouse force will begin handler
           * @private
           * @param {Event} event - Mouse force will begin event
           */

        }, {
          key: onMouseForceWillBegin,
          value: function value(event) {
            event.preventDefault();
            this.mightDrag = true;
          }
          /**
           * Mouse force down handler
           * @private
           * @param {Event} event - Mouse force down event
           */

        }, {
          key: onMouseForceDown,
          value: function value(event) {
            if (this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = event.currentTarget;
            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });
            this.trigger(container, dragStartEvent);
            this.currentContainer = container;
            this.dragging = !dragStartEvent.canceled();
            this.mightDrag = false;
          }
          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragStopEvent);
            this.currentContainer = null;
            this.dragging = false;
            this.mightDrag = false;
          }
          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            if (!this.mightDrag) {
              return;
            } // Need workaround for real click
            // Cancel potential drag events


            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
          }
          /**
           * Mouse move handler
           * @private
           * @param {Event} event - Mouse force will begin event
           */

        }, {
          key: onMouseMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragMoveEvent);
          }
          /**
           * Mouse force change handler
           * @private
           * @param {Event} event - Mouse force change event
           */

        }, {
          key: onMouseForceChange,
          value: function value(event) {
            if (this.dragging) {
              return;
            }

            var target = event.target;
            var container = event.currentTarget;
            var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
              pressure: event.webkitForce,
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });
            this.trigger(container, dragPressureEvent);
          }
          /**
           * Mouse force global change handler
           * @private
           * @param {Event} event - Mouse force global change event
           */

        }, {
          key: onMouseForceGlobalChange,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = event.target;
            var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
              pressure: event.webkitForce,
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragPressureEvent);
          }
        }]);

        return ForceTouchSensor;
      }(_Sensor2["default"]);

      exports["default"] = ForceTouchSensor;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _ForceTouchSensor = __webpack_require__(13);

      var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _ForceTouchSensor2["default"];
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(0);

      var _Sensor = __webpack_require__(2);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onMouseDown = Symbol('onMouseDown');
      var onMouseUp = Symbol('onMouseUp');
      var onDragStart = Symbol('onDragStart');
      var onDragOver = Symbol('onDragOver');
      var onDragEnd = Symbol('onDragEnd');
      var onDrop = Symbol('onDrop');
      var reset = Symbol('reset');
      /**
       * This sensor picks up native browser drag events and dictates drag operations
       * @class DragSensor
       * @module DragSensor
       * @extends Sensor
       */

      var DragSensor = /*#__PURE__*/function (_Sensor2$default2) {
        _inherits(DragSensor, _Sensor2$default2);

        var _super2 = _createSuper(DragSensor);

        /**
         * DragSensor constructor.
         * @constructs DragSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function DragSensor() {
          var _this9;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, DragSensor);

          _this9 = _super2.call(this, containers, options);
          /**
           * Mouse down timer which will end up setting the draggable attribute, unless canceled
           * @property mouseDownTimeout
           * @type {Number}
           */

          _this9.mouseDownTimeout = null;
          /**
           * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
           * @property draggableElement
           * @type {HTMLElement}
           */

          _this9.draggableElement = null;
          /**
           * Native draggable element could be links or images, their draggable state will be disabled during drag operation
           * @property nativeDraggableElement
           * @type {HTMLElement}
           */

          _this9.nativeDraggableElement = null;
          _this9[onMouseDown] = _this9[onMouseDown].bind(_assertThisInitialized(_this9));
          _this9[onMouseUp] = _this9[onMouseUp].bind(_assertThisInitialized(_this9));
          _this9[onDragStart] = _this9[onDragStart].bind(_assertThisInitialized(_this9));
          _this9[onDragOver] = _this9[onDragOver].bind(_assertThisInitialized(_this9));
          _this9[onDragEnd] = _this9[onDragEnd].bind(_assertThisInitialized(_this9));
          _this9[onDrop] = _this9[onDrop].bind(_assertThisInitialized(_this9));
          return _this9;
        }
        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(DragSensor, [{
          key: "attach",
          value: function attach() {
            document.addEventListener('mousedown', this[onMouseDown], true);
          }
          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: "detach",
          value: function detach() {
            document.removeEventListener('mousedown', this[onMouseDown], true);
          }
          /**
           * Drag start handler
           * @private
           * @param {Event} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            var _this10 = this;

            // Need for firefox. "text" key is needed for IE
            event.dataTransfer.setData('text', '');
            event.dataTransfer.effectAllowed = this.options.type;
            var target = document.elementFromPoint(event.clientX, event.clientY);
            this.currentContainer = (0, _utils.closest)(event.target, this.containers);

            if (!this.currentContainer) {
              return;
            }

            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            }); // Workaround

            setTimeout(function () {
              _this10.trigger(_this10.currentContainer, dragStartEvent);

              if (dragStartEvent.canceled()) {
                _this10.dragging = false;
              } else {
                _this10.dragging = true;
              }
            }, 0);
          }
          /**
           * Drag over handler
           * @private
           * @param {Event} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = this.currentContainer;
            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });
            this.trigger(container, dragMoveEvent);

            if (!dragMoveEvent.canceled()) {
              event.preventDefault();
              event.dataTransfer.dropEffect = this.options.type;
            }
          }
          /**
           * Drag end handler
           * @private
           * @param {Event} event - Drag end event
           */

        }, {
          key: onDragEnd,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            document.removeEventListener('mouseup', this[onMouseUp], true);
            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = this.currentContainer;
            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });
            this.trigger(container, dragStopEvent);
            this.dragging = false;
            this[reset]();
          }
          /**
           * Drop handler
           * @private
           * @param {Event} event - Drop event
           */

        }, {
          key: onDrop,
          value: function value(event) {
            // eslint-disable-line class-methods-use-this
            event.preventDefault();
          }
          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            var _this11 = this;

            // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
            if (event.target && (event.target.form || event.target.contenteditable)) {
              return;
            }

            var nativeDraggableElement = (0, _utils.closest)(event.target, function (element) {
              return element.draggable;
            });

            if (nativeDraggableElement) {
              nativeDraggableElement.draggable = false;
              this.nativeDraggableElement = nativeDraggableElement;
            }

            document.addEventListener('mouseup', this[onMouseUp], true);
            document.addEventListener('dragstart', this[onDragStart], false);
            document.addEventListener('dragover', this[onDragOver], false);
            document.addEventListener('dragend', this[onDragEnd], false);
            document.addEventListener('drop', this[onDrop], false);
            var target = (0, _utils.closest)(event.target, this.options.draggable);

            if (!target) {
              return;
            }

            this.mouseDownTimeout = setTimeout(function () {
              target.draggable = true;
              _this11.draggableElement = target;
            }, this.options.delay);
          }
          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value() {
            this[reset]();
          }
          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: reset,
          value: function value() {
            clearTimeout(this.mouseDownTimeout);
            document.removeEventListener('mouseup', this[onMouseUp], true);
            document.removeEventListener('dragstart', this[onDragStart], false);
            document.removeEventListener('dragover', this[onDragOver], false);
            document.removeEventListener('dragend', this[onDragEnd], false);
            document.removeEventListener('drop', this[onDrop], false);

            if (this.nativeDraggableElement) {
              this.nativeDraggableElement.draggable = true;
              this.nativeDraggableElement = null;
            }

            if (this.draggableElement) {
              this.draggableElement.draggable = false;
              this.draggableElement = null;
            }
          }
        }]);

        return DragSensor;
      }(_Sensor2["default"]);

      exports["default"] = DragSensor;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragSensor = __webpack_require__(15);

      var _DragSensor2 = _interopRequireDefault(_DragSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _DragSensor2["default"];
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(0);

      var _Sensor = __webpack_require__(2);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onTouchStart = Symbol('onTouchStart');
      var onTouchHold = Symbol('onTouchHold');
      var onTouchEnd = Symbol('onTouchEnd');
      var onTouchMove = Symbol('onTouchMove');
      /**
       * Prevents scrolling when set to true
       * @var {Boolean} preventScrolling
       */

      var preventScrolling = false; // WebKit requires cancelable `touchmove` events to be added as early as possible

      window.addEventListener('touchmove', function (event) {
        if (!preventScrolling) {
          return;
        } // Prevent scrolling


        event.preventDefault();
      }, {
        passive: false
      });
      /**
       * This sensor picks up native browser touch events and dictates drag operations
       * @class TouchSensor
       * @module TouchSensor
       * @extends Sensor
       */

      var TouchSensor = /*#__PURE__*/function (_Sensor2$default3) {
        _inherits(TouchSensor, _Sensor2$default3);

        var _super3 = _createSuper(TouchSensor);

        /**
         * TouchSensor constructor.
         * @constructs TouchSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function TouchSensor() {
          var _this12;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, TouchSensor);

          _this12 = _super3.call(this, containers, options);
          /**
           * Closest scrollable container so accidental scroll can cancel long touch
           * @property currentScrollableParent
           * @type {HTMLElement}
           */

          _this12.currentScrollableParent = null;
          /**
           * TimeoutID for long touch
           * @property tapTimeout
           * @type {Number}
           */

          _this12.tapTimeout = null;
          /**
           * touchMoved indicates if touch has moved during tapTimeout
           * @property touchMoved
           * @type {Boolean}
           */

          _this12.touchMoved = false;
          _this12[onTouchStart] = _this12[onTouchStart].bind(_assertThisInitialized(_this12));
          _this12[onTouchHold] = _this12[onTouchHold].bind(_assertThisInitialized(_this12));
          _this12[onTouchEnd] = _this12[onTouchEnd].bind(_assertThisInitialized(_this12));
          _this12[onTouchMove] = _this12[onTouchMove].bind(_assertThisInitialized(_this12));
          return _this12;
        }
        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(TouchSensor, [{
          key: "attach",
          value: function attach() {
            document.addEventListener('touchstart', this[onTouchStart]);
          }
          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: "detach",
          value: function detach() {
            document.removeEventListener('touchstart', this[onTouchStart]);
          }
          /**
           * Touch start handler
           * @private
           * @param {Event} event - Touch start event
           */

        }, {
          key: onTouchStart,
          value: function value(event) {
            var container = (0, _utils.closest)(event.target, this.containers);

            if (!container) {
              return;
            }

            document.addEventListener('touchmove', this[onTouchMove]);
            document.addEventListener('touchend', this[onTouchEnd]);
            document.addEventListener('touchcancel', this[onTouchEnd]);
            container.addEventListener('contextmenu', onContextMenu);
            this.currentContainer = container;
            this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
          }
          /**
           * Touch hold handler
           * @private
           * @param {Event} event - Touch start event
           * @param {HTMLElement} container - Container element
           */

        }, {
          key: onTouchHold,
          value: function value(event, container) {
            var _this13 = this;

            return function () {
              if (_this13.touchMoved) {
                return;
              }

              var touch = event.touches[0] || event.changedTouches[0];
              var target = event.target;
              var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                clientX: touch.pageX,
                clientY: touch.pageY,
                target: target,
                container: container,
                originalEvent: event
              });

              _this13.trigger(container, dragStartEvent);

              _this13.dragging = !dragStartEvent.canceled();
              preventScrolling = _this13.dragging;
            };
          }
          /**
           * Touch move handler
           * @private
           * @param {Event} event - Touch move event
           */

        }, {
          key: onTouchMove,
          value: function value(event) {
            this.touchMoved = true;

            if (!this.dragging) {
              return;
            }

            var touch = event.touches[0] || event.changedTouches[0];
            var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: touch.pageX,
              clientY: touch.pageY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragMoveEvent);
          }
          /**
           * Touch end handler
           * @private
           * @param {Event} event - Touch end event
           */

        }, {
          key: onTouchEnd,
          value: function value(event) {
            this.touchMoved = false;
            preventScrolling = false;
            document.removeEventListener('touchend', this[onTouchEnd]);
            document.removeEventListener('touchcancel', this[onTouchEnd]);
            document.removeEventListener('touchmove', this[onTouchMove]);

            if (this.currentContainer) {
              this.currentContainer.removeEventListener('contextmenu', onContextMenu);
            }

            clearTimeout(this.tapTimeout);

            if (!this.dragging) {
              return;
            }

            var touch = event.touches[0] || event.changedTouches[0];
            var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
            event.preventDefault();
            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: touch.pageX,
              clientY: touch.pageY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragStopEvent);
            this.currentContainer = null;
            this.dragging = false;
          }
        }]);

        return TouchSensor;
      }(_Sensor2["default"]);

      exports["default"] = TouchSensor;

      function onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      /***/

    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _TouchSensor = __webpack_require__(17);

      var _TouchSensor2 = _interopRequireDefault(_TouchSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _TouchSensor2["default"];
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base sensor event
       * @class SensorEvent
       * @module SensorEvent
       * @extends AbstractEvent
       */


      var SensorEvent = /*#__PURE__*/function (_AbstractEvent2$defau) {
        _inherits(SensorEvent, _AbstractEvent2$defau);

        var _super4 = _createSuper(SensorEvent);

        function SensorEvent() {
          _classCallCheck(this, SensorEvent);

          return _super4.apply(this, arguments);
        }

        _createClass(SensorEvent, [{
          key: "originalEvent",
          get:
          /**
           * Original browser event that triggered a sensor
           * @property originalEvent
           * @type {Event}
           * @readonly
           */
          function get() {
            return this.data.originalEvent;
          }
          /**
           * Normalized clientX for both touch and mouse events
           * @property clientX
           * @type {Number}
           * @readonly
           */

        }, {
          key: "clientX",
          get: function get() {
            return this.data.clientX;
          }
          /**
           * Normalized clientY for both touch and mouse events
           * @property clientY
           * @type {Number}
           * @readonly
           */

        }, {
          key: "clientY",
          get: function get() {
            return this.data.clientY;
          }
          /**
           * Normalized target for both touch and mouse events
           * Returns the element that is behind cursor or touch pointer
           * @property target
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "target",
          get: function get() {
            return this.data.target;
          }
          /**
           * Container that initiated the sensor
           * @property container
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "container",
          get: function get() {
            return this.data.container;
          }
          /**
           * Trackpad pressure
           * @property pressure
           * @type {Number}
           * @readonly
           */

        }, {
          key: "pressure",
          get: function get() {
            return this.data.pressure;
          }
        }]);

        return SensorEvent;
      }(_AbstractEvent2["default"]);

      exports.SensorEvent = SensorEvent;
      /**
       * Drag start sensor event
       * @class DragStartSensorEvent
       * @module DragStartSensorEvent
       * @extends SensorEvent
       */

      var DragStartSensorEvent = /*#__PURE__*/function (_SensorEvent2) {
        _inherits(DragStartSensorEvent, _SensorEvent2);

        var _super5 = _createSuper(DragStartSensorEvent);

        function DragStartSensorEvent() {
          _classCallCheck(this, DragStartSensorEvent);

          return _super5.apply(this, arguments);
        }

        return _createClass(DragStartSensorEvent);
      }(SensorEvent);

      exports.DragStartSensorEvent = DragStartSensorEvent;
      /**
       * Drag move sensor event
       * @class DragMoveSensorEvent
       * @module DragMoveSensorEvent
       * @extends SensorEvent
       */

      DragStartSensorEvent.type = 'drag:start';

      var DragMoveSensorEvent = /*#__PURE__*/function (_SensorEvent3) {
        _inherits(DragMoveSensorEvent, _SensorEvent3);

        var _super6 = _createSuper(DragMoveSensorEvent);

        function DragMoveSensorEvent() {
          _classCallCheck(this, DragMoveSensorEvent);

          return _super6.apply(this, arguments);
        }

        return _createClass(DragMoveSensorEvent);
      }(SensorEvent);

      exports.DragMoveSensorEvent = DragMoveSensorEvent;
      /**
       * Drag stop sensor event
       * @class DragStopSensorEvent
       * @module DragStopSensorEvent
       * @extends SensorEvent
       */

      DragMoveSensorEvent.type = 'drag:move';

      var DragStopSensorEvent = /*#__PURE__*/function (_SensorEvent4) {
        _inherits(DragStopSensorEvent, _SensorEvent4);

        var _super7 = _createSuper(DragStopSensorEvent);

        function DragStopSensorEvent() {
          _classCallCheck(this, DragStopSensorEvent);

          return _super7.apply(this, arguments);
        }

        return _createClass(DragStopSensorEvent);
      }(SensorEvent);

      exports.DragStopSensorEvent = DragStopSensorEvent;
      /**
       * Drag pressure sensor event
       * @class DragPressureSensorEvent
       * @module DragPressureSensorEvent
       * @extends SensorEvent
       */

      DragStopSensorEvent.type = 'drag:stop';

      var DragPressureSensorEvent = /*#__PURE__*/function (_SensorEvent5) {
        _inherits(DragPressureSensorEvent, _SensorEvent5);

        var _super8 = _createSuper(DragPressureSensorEvent);

        function DragPressureSensorEvent() {
          _classCallCheck(this, DragPressureSensorEvent);

          return _super8.apply(this, arguments);
        }

        return _createClass(DragPressureSensorEvent);
      }(SensorEvent);

      exports.DragPressureSensorEvent = DragPressureSensorEvent;
      DragPressureSensorEvent.type = 'drag:pressure';
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(0);

      var _Sensor = __webpack_require__(2);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
      var onMouseDown = Symbol('onMouseDown');
      var onMouseMove = Symbol('onMouseMove');
      var onMouseUp = Symbol('onMouseUp');
      /**
       * This sensor picks up native browser mouse events and dictates drag operations
       * @class MouseSensor
       * @module MouseSensor
       * @extends Sensor
       */

      var MouseSensor = /*#__PURE__*/function (_Sensor2$default4) {
        _inherits(MouseSensor, _Sensor2$default4);

        var _super9 = _createSuper(MouseSensor);

        /**
         * MouseSensor constructor.
         * @constructs MouseSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function MouseSensor() {
          var _this14;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, MouseSensor);

          _this14 = _super9.call(this, containers, options);
          /**
           * Indicates if mouse button is still down
           * @property mouseDown
           * @type {Boolean}
           */

          _this14.mouseDown = false;
          /**
           * Mouse down timer which will end up triggering the drag start operation
           * @property mouseDownTimeout
           * @type {Number}
           */

          _this14.mouseDownTimeout = null;
          /**
           * Indicates if context menu has been opened during drag operation
           * @property openedContextMenu
           * @type {Boolean}
           */

          _this14.openedContextMenu = false;
          _this14[onContextMenuWhileDragging] = _this14[onContextMenuWhileDragging].bind(_assertThisInitialized(_this14));
          _this14[onMouseDown] = _this14[onMouseDown].bind(_assertThisInitialized(_this14));
          _this14[onMouseMove] = _this14[onMouseMove].bind(_assertThisInitialized(_this14));
          _this14[onMouseUp] = _this14[onMouseUp].bind(_assertThisInitialized(_this14));
          return _this14;
        }
        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(MouseSensor, [{
          key: "attach",
          value: function attach() {
            document.addEventListener('mousedown', this[onMouseDown], true);
          }
          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: "detach",
          value: function detach() {
            document.removeEventListener('mousedown', this[onMouseDown], true);
          }
          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            var _this15 = this;

            if (event.button !== 0 || event.ctrlKey || event.metaKey) {
              return;
            }

            document.addEventListener('mouseup', this[onMouseUp]);
            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = (0, _utils.closest)(target, this.containers);

            if (!container) {
              return;
            }

            document.addEventListener('dragstart', preventNativeDragStart);
            this.mouseDown = true;
            clearTimeout(this.mouseDownTimeout);
            this.mouseDownTimeout = setTimeout(function () {
              if (!_this15.mouseDown) {
                return;
              }

              var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                clientX: event.clientX,
                clientY: event.clientY,
                target: target,
                container: container,
                originalEvent: event
              });

              _this15.trigger(container, dragStartEvent);

              _this15.currentContainer = container;
              _this15.dragging = !dragStartEvent.canceled();

              if (_this15.dragging) {
                document.addEventListener('contextmenu', _this15[onContextMenuWhileDragging]);
                document.addEventListener('mousemove', _this15[onMouseMove]);
              }
            }, this.options.delay);
          }
          /**
           * Mouse move handler
           * @private
           * @param {Event} event - Mouse move event
           */

        }, {
          key: onMouseMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragMoveEvent);
          }
          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value(event) {
            this.mouseDown = Boolean(this.openedContextMenu);

            if (this.openedContextMenu) {
              this.openedContextMenu = false;
              return;
            }

            document.removeEventListener('mouseup', this[onMouseUp]);
            document.removeEventListener('dragstart', preventNativeDragStart);

            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });
            this.trigger(this.currentContainer, dragStopEvent);
            document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);
            document.removeEventListener('mousemove', this[onMouseMove]);
            this.currentContainer = null;
            this.dragging = false;
          }
          /**
           * Context menu handler
           * @private
           * @param {Event} event - Context menu event
           */

        }, {
          key: onContextMenuWhileDragging,
          value: function value(event) {
            event.preventDefault();
            this.openedContextMenu = true;
          }
        }]);

        return MouseSensor;
      }(_Sensor2["default"]);

      exports["default"] = MouseSensor;

      function preventNativeDragStart(event) {
        event.preventDefault();
      }
      /***/

    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _MouseSensor = __webpack_require__(20);

      var _MouseSensor2 = _interopRequireDefault(_MouseSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _MouseSensor2["default"];
      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
      /**
       * Base sensor class. Extend from this class to create a new or custom sensor
       * @class Sensor
       * @module Sensor
       */


      var Sensor = /*#__PURE__*/function () {
        /**
         * Sensor constructor.
         * @constructs Sensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function Sensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Sensor);

          /**
           * Current containers
           * @property containers
           * @type {HTMLElement[]}
           */
          this.containers = _toConsumableArray(containers);
          /**
           * Current options
           * @property options
           * @type {Object}
           */

          this.options = _extends({}, options);
          /**
           * Current drag state
           * @property dragging
           * @type {Boolean}
           */

          this.dragging = false;
          /**
           * Current container
           * @property currentContainer
           * @type {HTMLElement}
           */

          this.currentContainer = null;
        }
        /**
         * Attaches sensors event listeners to the DOM
         * @return {Sensor}
         */


        _createClass(Sensor, [{
          key: "attach",
          value: function attach() {
            return this;
          }
          /**
           * Detaches sensors event listeners to the DOM
           * @return {Sensor}
           */

        }, {
          key: "detach",
          value: function detach() {
            return this;
          }
          /**
           * Adds container to this sensor instance
           * @param {...HTMLElement} containers - Containers you want to add to this sensor
           * @example draggable.addContainer(document.body)
           */

        }, {
          key: "addContainer",
          value: function addContainer() {
            for (var _len9 = arguments.length, containers = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              containers[_key9] = arguments[_key9];
            }

            this.containers = [].concat(_toConsumableArray(this.containers), containers);
          }
          /**
           * Removes container from this sensor instance
           * @param {...HTMLElement} containers - Containers you want to remove from this sensor
           * @example draggable.removeContainer(document.body)
           */

        }, {
          key: "removeContainer",
          value: function removeContainer() {
            for (var _len10 = arguments.length, containers = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              containers[_key10] = arguments[_key10];
            }

            this.containers = this.containers.filter(function (container) {
              return !containers.includes(container);
            });
          }
          /**
           * Triggers event on target element
           * @param {HTMLElement} element - Element to trigger event on
           * @param {SensorEvent} sensorEvent - Sensor event to trigger
           */

        }, {
          key: "trigger",
          value: function trigger(element, sensorEvent) {
            var event = document.createEvent('Event');
            event.detail = sensorEvent;
            event.initEvent(sensorEvent.type, true, true);
            element.dispatchEvent(event);
            this.lastEvent = sensorEvent;
            return sensorEvent;
          }
        }]);

        return Sensor;
      }();

      exports["default"] = Sensor;
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(0);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onDragStart = exports.onDragStart = Symbol('onDragStart');
      var onDragMove = exports.onDragMove = Symbol('onDragMove');
      var onDragStop = exports.onDragStop = Symbol('onDragStop');
      var scroll = exports.scroll = Symbol('scroll');
      /**
       * Scrollable default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.speed
       * @property {Number} defaultOptions.sensitivity
       * @property {HTMLElement[]} defaultOptions.scrollableElements
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {
        speed: 6,
        sensitivity: 50,
        scrollableElements: []
      };
      /**
       * Scrollable plugin which scrolls the closest scrollable parent
       * @class Scrollable
       * @module Scrollable
       * @extends AbstractPlugin
       */

      var Scrollable = /*#__PURE__*/function (_AbstractPlugin2$defa) {
        _inherits(Scrollable, _AbstractPlugin2$defa);

        var _super10 = _createSuper(Scrollable);

        /**
         * Scrollable constructor.
         * @constructs Scrollable
         * @param {Draggable} draggable - Draggable instance
         */
        function Scrollable(draggable) {
          var _this16;

          _classCallCheck(this, Scrollable);

          _this16 = _super10.call(this, draggable);
          /**
           * Scrollable options
           * @property {Object} options
           * @property {Number} options.speed
           * @property {Number} options.sensitivity
           * @property {HTMLElement[]} options.scrollableElements
           * @type {Object}
           */

          _this16.options = _extends({}, defaultOptions, _this16.getOptions());
          /**
           * Keeps current mouse position
           * @property {Object} currentMousePosition
           * @property {Number} currentMousePosition.clientX
           * @property {Number} currentMousePosition.clientY
           * @type {Object|null}
           */

          _this16.currentMousePosition = null;
          /**
           * Scroll animation frame
           * @property scrollAnimationFrame
           * @type {Number|null}
           */

          _this16.scrollAnimationFrame = null;
          /**
           * Closest scrollable element
           * @property scrollableElement
           * @type {HTMLElement|null}
           */

          _this16.scrollableElement = null;
          /**
           * Animation frame looking for the closest scrollable element
           * @property findScrollableElementFrame
           * @type {Number|null}
           */

          _this16.findScrollableElementFrame = null;
          _this16[onDragStart] = _this16[onDragStart].bind(_assertThisInitialized(_this16));
          _this16[onDragMove] = _this16[onDragMove].bind(_assertThisInitialized(_this16));
          _this16[onDragStop] = _this16[onDragStop].bind(_assertThisInitialized(_this16));
          _this16[scroll] = _this16[scroll].bind(_assertThisInitialized(_this16));
          return _this16;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(Scrollable, [{
          key: "attach",
          value: function attach() {
            this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.scrollable || {};
          }
          /**
           * Returns closest scrollable elements by element
           * @param {HTMLElement} target
           * @return {HTMLElement}
           */

        }, {
          key: "getScrollableElement",
          value: function getScrollableElement(target) {
            if (this.hasDefinedScrollableElements()) {
              return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
            } else {
              return closestScrollableElement(target);
            }
          }
          /**
           * Returns true if at least one scrollable element have been defined via options
           * @param {HTMLElement} target
           * @return {Boolean}
           */

        }, {
          key: "hasDefinedScrollableElements",
          value: function hasDefinedScrollableElements() {
            return Boolean(this.options.scrollableElements.length !== 0);
          }
          /**
           * Drag start handler. Finds closest scrollable parent in separate frame
           * @param {DragStartEvent} dragEvent
           * @private
           */

        }, {
          key: onDragStart,
          value: function value(dragEvent) {
            var _this17 = this;

            this.findScrollableElementFrame = requestAnimationFrame(function () {
              _this17.scrollableElement = _this17.getScrollableElement(dragEvent.source);
            });
          }
          /**
           * Drag move handler. Remembers mouse position and initiates scrolling
           * @param {DragMoveEvent} dragEvent
           * @private
           */

        }, {
          key: onDragMove,
          value: function value(dragEvent) {
            var _this18 = this;

            this.findScrollableElementFrame = requestAnimationFrame(function () {
              _this18.scrollableElement = _this18.getScrollableElement(dragEvent.sensorEvent.target);
            });

            if (!this.scrollableElement) {
              return;
            }

            var sensorEvent = dragEvent.sensorEvent;
            var scrollOffset = {
              x: 0,
              y: 0
            };

            if ('ontouchstart' in window) {
              scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
              scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            }

            this.currentMousePosition = {
              clientX: sensorEvent.clientX - scrollOffset.x,
              clientY: sensorEvent.clientY - scrollOffset.y
            };
            this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
          }
          /**
           * Drag stop handler. Cancels scroll animations and resets state
           * @private
           */

        }, {
          key: onDragStop,
          value: function value() {
            cancelAnimationFrame(this.scrollAnimationFrame);
            cancelAnimationFrame(this.findScrollableElementFrame);
            this.scrollableElement = null;
            this.scrollAnimationFrame = null;
            this.findScrollableElementFrame = null;
            this.currentMousePosition = null;
          }
          /**
           * Scroll function that does the heavylifting
           * @private
           */

        }, {
          key: scroll,
          value: function value() {
            if (!this.scrollableElement || !this.currentMousePosition) {
              return;
            }

            cancelAnimationFrame(this.scrollAnimationFrame);
            var _this$options = this.options,
                speed = _this$options.speed,
                sensitivity = _this$options.sensitivity;
            var rect = this.scrollableElement.getBoundingClientRect();
            var bottomCutOff = rect.bottom > window.innerHeight;
            var topCutOff = rect.top < 0;
            var cutOff = topCutOff || bottomCutOff;
            var documentScrollingElement = getDocumentScrollingElement();
            var scrollableElement = this.scrollableElement;
            var clientX = this.currentMousePosition.clientX;
            var clientY = this.currentMousePosition.clientY;

            if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
              var offsetHeight = scrollableElement.offsetHeight,
                  offsetWidth = scrollableElement.offsetWidth;

              if (rect.top + offsetHeight - clientY < sensitivity) {
                scrollableElement.scrollTop += speed;
              } else if (clientY - rect.top < sensitivity) {
                scrollableElement.scrollTop -= speed;
              }

              if (rect.left + offsetWidth - clientX < sensitivity) {
                scrollableElement.scrollLeft += speed;
              } else if (clientX - rect.left < sensitivity) {
                scrollableElement.scrollLeft -= speed;
              }
            } else {
              var _window = window,
                  innerHeight = _window.innerHeight,
                  innerWidth = _window.innerWidth;

              if (clientY < sensitivity) {
                documentScrollingElement.scrollTop -= speed;
              } else if (innerHeight - clientY < sensitivity) {
                documentScrollingElement.scrollTop += speed;
              }

              if (clientX < sensitivity) {
                documentScrollingElement.scrollLeft -= speed;
              } else if (innerWidth - clientX < sensitivity) {
                documentScrollingElement.scrollLeft += speed;
              }
            }

            this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
          }
        }]);

        return Scrollable;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Scrollable;
      /**
       * Returns true if the passed element has overflow
       * @param {HTMLElement} element
       * @return {Boolean}
       * @private
       */

      function hasOverflow(element) {
        var overflowRegex = /(auto|scroll)/;
        var computedStyles = getComputedStyle(element, null);
        var overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
        return overflowRegex.test(overflow);
      }
      /**
       * Returns true if the passed element is statically positioned
       * @param {HTMLElement} element
       * @return {Boolean}
       * @private
       */


      function isStaticallyPositioned(element) {
        var position = getComputedStyle(element).getPropertyValue('position');
        return position === 'static';
      }
      /**
       * Finds closest scrollable element
       * @param {HTMLElement} element
       * @return {HTMLElement}
       * @private
       */


      function closestScrollableElement(element) {
        if (!element) {
          return getDocumentScrollingElement();
        }

        var position = getComputedStyle(element).getPropertyValue('position');
        var excludeStaticParents = position === 'absolute';
        var scrollableElement = (0, _utils.closest)(element, function (parent) {
          if (excludeStaticParents && isStaticallyPositioned(parent)) {
            return false;
          }

          return hasOverflow(parent);
        });

        if (position === 'fixed' || !scrollableElement) {
          return getDocumentScrollingElement();
        } else {
          return scrollableElement;
        }
      }
      /**
       * Returns element that scrolls document
       * @return {HTMLElement}
       * @private
       */


      function getDocumentScrollingElement() {
        return document.scrollingElement || document.documentElement;
      }
      /***/

    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Scrollable = __webpack_require__(23);

      var _Scrollable2 = _interopRequireDefault(_Scrollable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Scrollable2["default"];
      exports.defaultOptions = _Scrollable.defaultOptions;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base mirror event
       * @class MirrorEvent
       * @module MirrorEvent
       * @extends AbstractEvent
       */


      var MirrorEvent = /*#__PURE__*/function (_AbstractEvent2$defau2) {
        _inherits(MirrorEvent, _AbstractEvent2$defau2);

        var _super11 = _createSuper(MirrorEvent);

        function MirrorEvent() {
          _classCallCheck(this, MirrorEvent);

          return _super11.apply(this, arguments);
        }

        _createClass(MirrorEvent, [{
          key: "source",
          get:
          /**
           * Draggables source element
           * @property source
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.source;
          }
          /**
           * Draggables original source element
           * @property originalSource
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "originalSource",
          get: function get() {
            return this.data.originalSource;
          }
          /**
           * Draggables source container element
           * @property sourceContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "sourceContainer",
          get: function get() {
            return this.data.sourceContainer;
          }
          /**
           * Sensor event
           * @property sensorEvent
           * @type {SensorEvent}
           * @readonly
           */

        }, {
          key: "sensorEvent",
          get: function get() {
            return this.data.sensorEvent;
          }
          /**
           * Drag event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */

        }, {
          key: "dragEvent",
          get: function get() {
            return this.data.dragEvent;
          }
          /**
           * Original event that triggered sensor event
           * @property originalEvent
           * @type {Event}
           * @readonly
           */

        }, {
          key: "originalEvent",
          get: function get() {
            if (this.sensorEvent) {
              return this.sensorEvent.originalEvent;
            }

            return null;
          }
        }]);

        return MirrorEvent;
      }(_AbstractEvent2["default"]);

      exports.MirrorEvent = MirrorEvent;
      /**
       * Mirror create event
       * @class MirrorCreateEvent
       * @module MirrorCreateEvent
       * @extends MirrorEvent
       */

      var MirrorCreateEvent = /*#__PURE__*/function (_MirrorEvent2) {
        _inherits(MirrorCreateEvent, _MirrorEvent2);

        var _super12 = _createSuper(MirrorCreateEvent);

        function MirrorCreateEvent() {
          _classCallCheck(this, MirrorCreateEvent);

          return _super12.apply(this, arguments);
        }

        return _createClass(MirrorCreateEvent);
      }(MirrorEvent);

      exports.MirrorCreateEvent = MirrorCreateEvent;
      /**
       * Mirror created event
       * @class MirrorCreatedEvent
       * @module MirrorCreatedEvent
       * @extends MirrorEvent
       */

      MirrorCreateEvent.type = 'mirror:create';

      var MirrorCreatedEvent = /*#__PURE__*/function (_MirrorEvent3) {
        _inherits(MirrorCreatedEvent, _MirrorEvent3);

        var _super13 = _createSuper(MirrorCreatedEvent);

        function MirrorCreatedEvent() {
          _classCallCheck(this, MirrorCreatedEvent);

          return _super13.apply(this, arguments);
        }

        _createClass(MirrorCreatedEvent, [{
          key: "mirror",
          get:
          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorCreatedEvent;
      }(MirrorEvent);

      exports.MirrorCreatedEvent = MirrorCreatedEvent;
      /**
       * Mirror attached event
       * @class MirrorAttachedEvent
       * @module MirrorAttachedEvent
       * @extends MirrorEvent
       */

      MirrorCreatedEvent.type = 'mirror:created';

      var MirrorAttachedEvent = /*#__PURE__*/function (_MirrorEvent4) {
        _inherits(MirrorAttachedEvent, _MirrorEvent4);

        var _super14 = _createSuper(MirrorAttachedEvent);

        function MirrorAttachedEvent() {
          _classCallCheck(this, MirrorAttachedEvent);

          return _super14.apply(this, arguments);
        }

        _createClass(MirrorAttachedEvent, [{
          key: "mirror",
          get:
          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorAttachedEvent;
      }(MirrorEvent);

      exports.MirrorAttachedEvent = MirrorAttachedEvent;
      /**
       * Mirror move event
       * @class MirrorMoveEvent
       * @module MirrorMoveEvent
       * @extends MirrorEvent
       */

      MirrorAttachedEvent.type = 'mirror:attached';

      var MirrorMoveEvent = /*#__PURE__*/function (_MirrorEvent5) {
        _inherits(MirrorMoveEvent, _MirrorEvent5);

        var _super15 = _createSuper(MirrorMoveEvent);

        function MirrorMoveEvent() {
          _classCallCheck(this, MirrorMoveEvent);

          return _super15.apply(this, arguments);
        }

        _createClass(MirrorMoveEvent, [{
          key: "mirror",
          get:
          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorMoveEvent;
      }(MirrorEvent);

      exports.MirrorMoveEvent = MirrorMoveEvent;
      /**
       * Mirror destroy event
       * @class MirrorDestroyEvent
       * @module MirrorDestroyEvent
       * @extends MirrorEvent
       */

      MirrorMoveEvent.type = 'mirror:move';
      MirrorMoveEvent.cancelable = true;

      var MirrorDestroyEvent = /*#__PURE__*/function (_MirrorEvent6) {
        _inherits(MirrorDestroyEvent, _MirrorEvent6);

        var _super16 = _createSuper(MirrorDestroyEvent);

        function MirrorDestroyEvent() {
          _classCallCheck(this, MirrorDestroyEvent);

          return _super16.apply(this, arguments);
        }

        _createClass(MirrorDestroyEvent, [{
          key: "mirror",
          get:
          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorDestroyEvent;
      }(MirrorEvent);

      exports.MirrorDestroyEvent = MirrorDestroyEvent;
      MirrorDestroyEvent.type = 'mirror:destroy';
      MirrorDestroyEvent.cancelable = true;
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _MirrorEvent = __webpack_require__(25);

      Object.keys(_MirrorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _MirrorEvent[key];
          }
        });
      });
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _MirrorEvent = __webpack_require__(26);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }

        return target;
      }

      var onDragStart = exports.onDragStart = Symbol('onDragStart');
      var onDragMove = exports.onDragMove = Symbol('onDragMove');
      var onDragStop = exports.onDragStop = Symbol('onDragStop');
      var onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
      var onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
      var onScroll = exports.onScroll = Symbol('onScroll');
      var getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');
      /**
       * Mirror default options
       * @property {Object} defaultOptions
       * @property {Boolean} defaultOptions.constrainDimensions
       * @property {Boolean} defaultOptions.xAxis
       * @property {Boolean} defaultOptions.yAxis
       * @property {null} defaultOptions.cursorOffsetX
       * @property {null} defaultOptions.cursorOffsetY
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {
        constrainDimensions: false,
        xAxis: true,
        yAxis: true,
        cursorOffsetX: null,
        cursorOffsetY: null
      };
      /**
       * Mirror plugin which controls the mirror positioning while dragging
       * @class Mirror
       * @module Mirror
       * @extends AbstractPlugin
       */

      var Mirror = /*#__PURE__*/function (_AbstractPlugin2$defa2) {
        _inherits(Mirror, _AbstractPlugin2$defa2);

        var _super17 = _createSuper(Mirror);

        /**
         * Mirror constructor.
         * @constructs Mirror
         * @param {Draggable} draggable - Draggable instance
         */
        function Mirror(draggable) {
          var _this19;

          _classCallCheck(this, Mirror);

          _this19 = _super17.call(this, draggable);
          /**
           * Mirror options
           * @property {Object} options
           * @property {Boolean} options.constrainDimensions
           * @property {Boolean} options.xAxis
           * @property {Boolean} options.yAxis
           * @property {Number|null} options.cursorOffsetX
           * @property {Number|null} options.cursorOffsetY
           * @property {String|HTMLElement|Function} options.appendTo
           * @type {Object}
           */

          _this19.options = _extends({}, defaultOptions, _this19.getOptions());
          /**
           * Scroll offset for touch devices because the mirror is positioned fixed
           * @property {Object} scrollOffset
           * @property {Number} scrollOffset.x
           * @property {Number} scrollOffset.y
           */

          _this19.scrollOffset = {
            x: 0,
            y: 0
          };
          /**
           * Initial scroll offset for touch devices because the mirror is positioned fixed
           * @property {Object} scrollOffset
           * @property {Number} scrollOffset.x
           * @property {Number} scrollOffset.y
           */

          _this19.initialScrollOffset = {
            x: window.scrollX,
            y: window.scrollY
          };
          _this19[onDragStart] = _this19[onDragStart].bind(_assertThisInitialized(_this19));
          _this19[onDragMove] = _this19[onDragMove].bind(_assertThisInitialized(_this19));
          _this19[onDragStop] = _this19[onDragStop].bind(_assertThisInitialized(_this19));
          _this19[onMirrorCreated] = _this19[onMirrorCreated].bind(_assertThisInitialized(_this19));
          _this19[onMirrorMove] = _this19[onMirrorMove].bind(_assertThisInitialized(_this19));
          _this19[onScroll] = _this19[onScroll].bind(_assertThisInitialized(_this19));
          return _this19;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(Mirror, [{
          key: "attach",
          value: function attach() {
            this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.mirror || {};
          }
        }, {
          key: onDragStart,
          value: function value(dragEvent) {
            if (dragEvent.canceled()) {
              return;
            }

            if ('ontouchstart' in window) {
              document.addEventListener('scroll', this[onScroll], true);
            }

            this.initialScrollOffset = {
              x: window.scrollX,
              y: window.scrollY
            };
            var source = dragEvent.source,
                originalSource = dragEvent.originalSource,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;
            var mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent
            });
            this.draggable.trigger(mirrorCreateEvent);

            if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
              return;
            }

            var appendableContainer = this[getAppendableContainer](source) || sourceContainer;
            this.mirror = source.cloneNode(true);
            var mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });
            var mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });
            this.draggable.trigger(mirrorCreatedEvent);
            appendableContainer.appendChild(this.mirror);
            this.draggable.trigger(mirrorAttachedEvent);
          }
        }, {
          key: onDragMove,
          value: function value(dragEvent) {
            if (!this.mirror || dragEvent.canceled()) {
              return;
            }

            var source = dragEvent.source,
                originalSource = dragEvent.originalSource,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;
            var mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });
            this.draggable.trigger(mirrorMoveEvent);
          }
        }, {
          key: onDragStop,
          value: function value(dragEvent) {
            if ('ontouchstart' in window) {
              document.removeEventListener('scroll', this[onScroll], true);
            }

            this.initialScrollOffset = {
              x: 0,
              y: 0
            };
            this.scrollOffset = {
              x: 0,
              y: 0
            };

            if (!this.mirror) {
              return;
            }

            var source = dragEvent.source,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;
            var mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
              source: source,
              mirror: this.mirror,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent
            });
            this.draggable.trigger(mirrorDestroyEvent);

            if (!mirrorDestroyEvent.canceled()) {
              this.mirror.parentNode.removeChild(this.mirror);
            }
          }
        }, {
          key: onScroll,
          value: function value() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y
            };
          }
          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @return {Promise}
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref9) {
            var _this20 = this;

            var mirror = _ref9.mirror,
                source = _ref9.source,
                sensorEvent = _ref9.sensorEvent;
            var mirrorClass = this.draggable.getClassNameFor('mirror');

            var setState = function setState(_ref) {
              var mirrorOffset = _ref.mirrorOffset,
                  initialX = _ref.initialX,
                  initialY = _ref.initialY,
                  args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);

              _this20.mirrorOffset = mirrorOffset;
              _this20.initialX = initialX;
              _this20.initialY = initialY;
              return _extends({
                mirrorOffset: mirrorOffset,
                initialX: initialX,
                initialY: initialY
              }, args);
            };

            var initialState = {
              mirror: mirror,
              source: source,
              sensorEvent: sensorEvent,
              mirrorClass: mirrorClass,
              scrollOffset: this.scrollOffset,
              options: this.options
            };
            return Promise.resolve(initialState) // Fix reflow here
            .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
              initial: true
            })).then(removeMirrorID).then(setState);
          }
          /**
           * Mirror move handler
           * @param {MirrorMoveEvent} mirrorEvent
           * @return {Promise|null}
           * @private
           */

        }, {
          key: onMirrorMove,
          value: function value(mirrorEvent) {
            if (mirrorEvent.canceled()) {
              return null;
            }

            var initialState = {
              mirror: mirrorEvent.mirror,
              sensorEvent: mirrorEvent.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset
            };
            return Promise.resolve(initialState).then(positionMirror({
              raf: true
            }));
          }
          /**
           * Returns appendable container for mirror based on the appendTo option
           * @private
           * @param {Object} options
           * @param {HTMLElement} options.source - Current source
           * @return {HTMLElement}
           */

        }, {
          key: getAppendableContainer,
          value: function value(source) {
            var appendTo = this.options.appendTo;

            if (typeof appendTo === 'string') {
              return document.querySelector(appendTo);
            } else if (appendTo instanceof HTMLElement) {
              return appendTo;
            } else if (typeof appendTo === 'function') {
              return appendTo(source);
            } else {
              return source.parentNode;
            }
          }
        }]);

        return Mirror;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Mirror;
      /**
       * Computes mirror dimensions based on the source element
       * Adds sourceRect to state
       * @param {Object} state
       * @param {HTMLElement} state.source
       * @return {Promise}
       * @private
       */

      function computeMirrorDimensions(_ref2) {
        var source = _ref2.source,
            args = _objectWithoutProperties(_ref2, ['source']);

        return withPromise(function (resolve) {
          var sourceRect = source.getBoundingClientRect();
          resolve(_extends({
            source: source,
            sourceRect: sourceRect
          }, args));
        });
      }
      /**
       * Calculates mirror offset
       * Adds mirrorOffset to state
       * @param {Object} state
       * @param {SensorEvent} state.sensorEvent
       * @param {DOMRect} state.sourceRect
       * @return {Promise}
       * @private
       */


      function calculateMirrorOffset(_ref3) {
        var sensorEvent = _ref3.sensorEvent,
            sourceRect = _ref3.sourceRect,
            options = _ref3.options,
            args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);

        return withPromise(function (resolve) {
          var top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
          var left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
          var mirrorOffset = {
            top: top,
            left: left
          };
          resolve(_extends({
            sensorEvent: sensorEvent,
            sourceRect: sourceRect,
            mirrorOffset: mirrorOffset,
            options: options
          }, args));
        });
      }
      /**
       * Applys mirror styles
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {HTMLElement} state.source
       * @param {Object} state.options
       * @return {Promise}
       * @private
       */


      function resetMirror(_ref4) {
        var mirror = _ref4.mirror,
            source = _ref4.source,
            options = _ref4.options,
            args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);

        return withPromise(function (resolve) {
          var offsetHeight;
          var offsetWidth;

          if (options.constrainDimensions) {
            var computedSourceStyles = getComputedStyle(source);
            offsetHeight = computedSourceStyles.getPropertyValue('height');
            offsetWidth = computedSourceStyles.getPropertyValue('width');
          }

          mirror.style.position = 'fixed';
          mirror.style.pointerEvents = 'none';
          mirror.style.top = 0;
          mirror.style.left = 0;
          mirror.style.margin = 0;

          if (options.constrainDimensions) {
            mirror.style.height = offsetHeight;
            mirror.style.width = offsetWidth;
          }

          resolve(_extends({
            mirror: mirror,
            source: source,
            options: options
          }, args));
        });
      }
      /**
       * Applys mirror class on mirror element
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {String} state.mirrorClass
       * @return {Promise}
       * @private
       */


      function addMirrorClasses(_ref5) {
        var mirror = _ref5.mirror,
            mirrorClass = _ref5.mirrorClass,
            args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);

        return withPromise(function (resolve) {
          mirror.classList.add(mirrorClass);
          resolve(_extends({
            mirror: mirror,
            mirrorClass: mirrorClass
          }, args));
        });
      }
      /**
       * Removes source ID from cloned mirror element
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @return {Promise}
       * @private
       */


      function removeMirrorID(_ref6) {
        var mirror = _ref6.mirror,
            args = _objectWithoutProperties(_ref6, ['mirror']);

        return withPromise(function (resolve) {
          mirror.removeAttribute('id');
          delete mirror.id;
          resolve(_extends({
            mirror: mirror
          }, args));
        });
      }
      /**
       * Positions mirror with translate3d
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {SensorEvent} state.sensorEvent
       * @param {Object} state.mirrorOffset
       * @param {Number} state.initialY
       * @param {Number} state.initialX
       * @param {Object} state.options
       * @return {Promise}
       * @private
       */


      function positionMirror() {
        var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref10$withFrame = _ref10.withFrame,
            withFrame = _ref10$withFrame === void 0 ? false : _ref10$withFrame,
            _ref10$initial = _ref10.initial,
            initial = _ref10$initial === void 0 ? false : _ref10$initial;

        return function (_ref7) {
          var mirror = _ref7.mirror,
              sensorEvent = _ref7.sensorEvent,
              mirrorOffset = _ref7.mirrorOffset,
              initialY = _ref7.initialY,
              initialX = _ref7.initialX,
              scrollOffset = _ref7.scrollOffset,
              options = _ref7.options,
              args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);

          return withPromise(function (resolve) {
            var result = _extends({
              mirror: mirror,
              sensorEvent: sensorEvent,
              mirrorOffset: mirrorOffset,
              options: options
            }, args);

            if (mirrorOffset) {
              var x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
              var y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;

              if (options.xAxis && options.yAxis || initial) {
                mirror.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
              } else if (options.xAxis && !options.yAxis) {
                mirror.style.transform = "translate3d(".concat(x, "px, ").concat(initialY, "px, 0)");
              } else if (options.yAxis && !options.xAxis) {
                mirror.style.transform = "translate3d(".concat(initialX, "px, ").concat(y, "px, 0)");
              }

              if (initial) {
                result.initialX = x;
                result.initialY = y;
              }
            }

            resolve(result);
          }, {
            frame: withFrame
          });
        };
      }
      /**
       * Wraps functions in promise with potential animation frame option
       * @param {Function} callback
       * @param {Object} options
       * @param {Boolean} options.raf
       * @return {Promise}
       * @private
       */


      function withPromise(callback) {
        var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref11$raf = _ref11.raf,
            raf = _ref11$raf === void 0 ? false : _ref11$raf;

        return new Promise(function (resolve, reject) {
          if (raf) {
            requestAnimationFrame(function () {
              callback(resolve, reject);
            });
          } else {
            callback(resolve, reject);
          }
        });
      }
      /**
       * Returns true if the sensor event was triggered by a native browser drag event
       * @param {SensorEvent} sensorEvent
       */


      function isNativeDragEvent(sensorEvent) {
        return /^drag/.test(sensorEvent.originalEvent.type);
      }
      /***/

    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Mirror = __webpack_require__(27);

      var _Mirror2 = _interopRequireDefault(_Mirror);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Mirror2["default"];
      exports.defaultOptions = _Mirror.defaultOptions;
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onInitialize = Symbol('onInitialize');
      var onDestroy = Symbol('onDestroy');
      /**
       * Focusable default options
       * @property {Object} defaultOptions
       * @type {Object}
       */

      var defaultOptions = {};
      /**
       * Focusable plugin
       * @class Focusable
       * @module Focusable
       * @extends AbstractPlugin
       */

      var Focusable = /*#__PURE__*/function (_AbstractPlugin2$defa3) {
        _inherits(Focusable, _AbstractPlugin2$defa3);

        var _super18 = _createSuper(Focusable);

        /**
         * Focusable constructor.
         * @constructs Focusable
         * @param {Draggable} draggable - Draggable instance
         */
        function Focusable(draggable) {
          var _this21;

          _classCallCheck(this, Focusable);

          _this21 = _super18.call(this, draggable);
          /**
           * Focusable options
           * @property {Object} options
           * @type {Object}
           */

          _this21.options = _extends({}, defaultOptions, _this21.getOptions());
          _this21[onInitialize] = _this21[onInitialize].bind(_assertThisInitialized(_this21));
          _this21[onDestroy] = _this21[onDestroy].bind(_assertThisInitialized(_this21));
          return _this21;
        }
        /**
         * Attaches listeners to draggable
         */


        _createClass(Focusable, [{
          key: "attach",
          value: function attach() {
            this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
          }
          /**
           * Detaches listeners from draggable
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.focusable || {};
          }
          /**
           * Returns draggable containers and elements
           * @return {HTMLElement[]}
           */

        }, {
          key: "getElements",
          value: function getElements() {
            return [].concat(_toConsumableArray(this.draggable.containers), _toConsumableArray(this.draggable.getDraggableElements()));
          }
          /**
           * Intialize handler
           * @private
           */

        }, {
          key: onInitialize,
          value: function value() {
            var _this22 = this;

            // Can wait until the next best frame is available
            requestAnimationFrame(function () {
              _this22.getElements().forEach(function (element) {
                return decorateElement(element);
              });
            });
          }
          /**
           * Destroy handler
           * @private
           */

        }, {
          key: onDestroy,
          value: function value() {
            var _this23 = this;

            // Can wait until the next best frame is available
            requestAnimationFrame(function () {
              _this23.getElements().forEach(function (element) {
                return stripElement(element);
              });
            });
          }
        }]);

        return Focusable;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Focusable;
      /**
       * Keeps track of all the elements that are missing tabindex attributes
       * so they can be reset when draggable gets destroyed
       * @const {HTMLElement[]} elementsWithMissingTabIndex
       */

      var elementsWithMissingTabIndex = [];
      /**
       * Decorates element with tabindex attributes
       * @param {HTMLElement} element
       * @return {Object}
       * @private
       */

      function decorateElement(element) {
        var hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);

        if (hasMissingTabIndex) {
          elementsWithMissingTabIndex.push(element);
          element.tabIndex = 0;
        }
      }
      /**
       * Removes elements tabindex attributes
       * @param {HTMLElement} element
       * @private
       */


      function stripElement(element) {
        var tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);

        if (tabIndexElementPosition !== -1) {
          element.tabIndex = -1;
          elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
        }
      }
      /***/

    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Focusable = __webpack_require__(29);

      var _Focusable2 = _interopRequireDefault(_Focusable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Focusable2["default"];
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * All draggable plugins inherit from this class.
       * @abstract
       * @class AbstractPlugin
       * @module AbstractPlugin
       */

      var AbstractPlugin = /*#__PURE__*/function () {
        /**
         * AbstractPlugin constructor.
         * @constructs AbstractPlugin
         * @param {Draggable} draggable - Draggable instance
         */
        function AbstractPlugin(draggable) {
          _classCallCheck(this, AbstractPlugin);

          /**
           * Draggable instance
           * @property draggable
           * @type {Draggable}
           */
          this.draggable = draggable;
        }
        /**
         * Override to add listeners
         * @abstract
         */


        _createClass(AbstractPlugin, [{
          key: "attach",
          value: function attach() {
            throw new Error('Not Implemented');
          }
          /**
           * Override to remove listeners
           * @abstract
           */

        }, {
          key: "detach",
          value: function detach() {
            throw new Error('Not Implemented');
          }
        }]);

        return AbstractPlugin;
      }();

      exports["default"] = AbstractPlugin;
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onInitialize = Symbol('onInitialize');
      var onDestroy = Symbol('onDestroy');
      var announceEvent = Symbol('announceEvent');
      var announceMessage = Symbol('announceMessage');
      var ARIA_RELEVANT = 'aria-relevant';
      var ARIA_ATOMIC = 'aria-atomic';
      var ARIA_LIVE = 'aria-live';
      var ROLE = 'role';
      /**
       * Announcement default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.expire
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {
        expire: 7000
      };
      /**
       * Announcement plugin
       * @class Announcement
       * @module Announcement
       * @extends AbstractPlugin
       */

      var Announcement = /*#__PURE__*/function (_AbstractPlugin2$defa4) {
        _inherits(Announcement, _AbstractPlugin2$defa4);

        var _super19 = _createSuper(Announcement);

        /**
         * Announcement constructor.
         * @constructs Announcement
         * @param {Draggable} draggable - Draggable instance
         */
        function Announcement(draggable) {
          var _this24;

          _classCallCheck(this, Announcement);

          _this24 = _super19.call(this, draggable);
          /**
           * Plugin options
           * @property options
           * @type {Object}
           */

          _this24.options = _extends({}, defaultOptions, _this24.getOptions());
          /**
           * Original draggable trigger method. Hack until we have onAll or on('all')
           * @property originalTriggerMethod
           * @type {Function}
           */

          _this24.originalTriggerMethod = _this24.draggable.trigger;
          _this24[onInitialize] = _this24[onInitialize].bind(_assertThisInitialized(_this24));
          _this24[onDestroy] = _this24[onDestroy].bind(_assertThisInitialized(_this24));
          return _this24;
        }
        /**
         * Attaches listeners to draggable
         */


        _createClass(Announcement, [{
          key: "attach",
          value: function attach() {
            this.draggable.on('draggable:initialize', this[onInitialize]);
          }
          /**
           * Detaches listeners from draggable
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off('draggable:destroy', this[onDestroy]);
          }
          /**
           * Returns passed in options
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.announcements || {};
          }
          /**
           * Announces event
           * @private
           * @param {AbstractEvent} event
           */

        }, {
          key: announceEvent,
          value: function value(event) {
            var message = this.options[event.type];

            if (message && typeof message === 'string') {
              this[announceMessage](message);
            }

            if (message && typeof message === 'function') {
              this[announceMessage](message(event));
            }
          }
          /**
           * Announces message to screen reader
           * @private
           * @param {String} message
           */

        }, {
          key: announceMessage,
          value: function value(message) {
            announce(message, {
              expire: this.options.expire
            });
          }
          /**
           * Initialize hander
           * @private
           */

        }, {
          key: onInitialize,
          value: function value() {
            var _this25 = this;

            // Hack until there is an api for listening for all events
            this.draggable.trigger = function (event) {
              try {
                _this25[announceEvent](event);
              } finally {
                // Ensure that original trigger is called
                _this25.originalTriggerMethod.call(_this25.draggable, event);
              }
            };
          }
          /**
           * Destroy hander
           * @private
           */

        }, {
          key: onDestroy,
          value: function value() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }]);

        return Announcement;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Announcement;
      /**
       * @const {HTMLElement} liveRegion
       */

      var liveRegion = createRegion();
      /**
       * Announces message via live region
       * @param {String} message
       * @param {Object} options
       * @param {Number} options.expire
       */

      function announce(message, _ref12) {
        var expire = _ref12.expire;
        var element = document.createElement('div');
        element.textContent = message;
        liveRegion.appendChild(element);
        return setTimeout(function () {
          liveRegion.removeChild(element);
        }, expire);
      }
      /**
       * Creates region element
       * @return {HTMLElement}
       */


      function createRegion() {
        var element = document.createElement('div');
        element.setAttribute('id', 'draggable-live-region');
        element.setAttribute(ARIA_RELEVANT, 'additions');
        element.setAttribute(ARIA_ATOMIC, 'true');
        element.setAttribute(ARIA_LIVE, 'assertive');
        element.setAttribute(ROLE, 'log');
        element.style.position = 'fixed';
        element.style.width = '1px';
        element.style.height = '1px';
        element.style.top = '-1px';
        element.style.overflow = 'hidden';
        return element;
      } // Append live region element as early as possible


      document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(liveRegion);
      });
      /***/
    },
    /* 33 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Announcement = __webpack_require__(32);

      var _Announcement2 = _interopRequireDefault(_Announcement);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Announcement2["default"];
      exports.defaultOptions = _Announcement.defaultOptions;
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base draggable event
       * @class DraggableEvent
       * @module DraggableEvent
       * @extends AbstractEvent
       */


      var DraggableEvent = /*#__PURE__*/function (_AbstractEvent2$defau3) {
        _inherits(DraggableEvent, _AbstractEvent2$defau3);

        var _super20 = _createSuper(DraggableEvent);

        function DraggableEvent() {
          _classCallCheck(this, DraggableEvent);

          return _super20.apply(this, arguments);
        }

        _createClass(DraggableEvent, [{
          key: "draggable",
          get:
          /**
           * Draggable instance
           * @property draggable
           * @type {Draggable}
           * @readonly
           */
          function get() {
            return this.data.draggable;
          }
        }]);

        return DraggableEvent;
      }(_AbstractEvent2["default"]);

      exports.DraggableEvent = DraggableEvent;
      /**
       * Draggable initialized event
       * @class DraggableInitializedEvent
       * @module DraggableInitializedEvent
       * @extends DraggableEvent
       */

      DraggableEvent.type = 'draggable';

      var DraggableInitializedEvent = /*#__PURE__*/function (_DraggableEvent2) {
        _inherits(DraggableInitializedEvent, _DraggableEvent2);

        var _super21 = _createSuper(DraggableInitializedEvent);

        function DraggableInitializedEvent() {
          _classCallCheck(this, DraggableInitializedEvent);

          return _super21.apply(this, arguments);
        }

        return _createClass(DraggableInitializedEvent);
      }(DraggableEvent);

      exports.DraggableInitializedEvent = DraggableInitializedEvent;
      /**
       * Draggable destory event
       * @class DraggableInitializedEvent
       * @module DraggableDestroyEvent
       * @extends DraggableDestroyEvent
       */

      DraggableInitializedEvent.type = 'draggable:initialize';

      var DraggableDestroyEvent = /*#__PURE__*/function (_DraggableEvent3) {
        _inherits(DraggableDestroyEvent, _DraggableEvent3);

        var _super22 = _createSuper(DraggableDestroyEvent);

        function DraggableDestroyEvent() {
          _classCallCheck(this, DraggableDestroyEvent);

          return _super22.apply(this, arguments);
        }

        return _createClass(DraggableDestroyEvent);
      }(DraggableEvent);

      exports.DraggableDestroyEvent = DraggableDestroyEvent;
      DraggableDestroyEvent.type = 'draggable:destroy';
      /***/
    },
    /* 35 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base drag event
       * @class DragEvent
       * @module DragEvent
       * @extends AbstractEvent
       */


      var DragEvent = /*#__PURE__*/function (_AbstractEvent2$defau4) {
        _inherits(DragEvent, _AbstractEvent2$defau4);

        var _super23 = _createSuper(DragEvent);

        function DragEvent() {
          _classCallCheck(this, DragEvent);

          return _super23.apply(this, arguments);
        }

        _createClass(DragEvent, [{
          key: "source",
          get:
          /**
           * Draggables source element
           * @property source
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.source;
          }
          /**
           * Draggables original source element
           * @property originalSource
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "originalSource",
          get: function get() {
            return this.data.originalSource;
          }
          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "mirror",
          get: function get() {
            return this.data.mirror;
          }
          /**
           * Draggables source container element
           * @property sourceContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "sourceContainer",
          get: function get() {
            return this.data.sourceContainer;
          }
          /**
           * Sensor event
           * @property sensorEvent
           * @type {SensorEvent}
           * @readonly
           */

        }, {
          key: "sensorEvent",
          get: function get() {
            return this.data.sensorEvent;
          }
          /**
           * Original event that triggered sensor event
           * @property originalEvent
           * @type {Event}
           * @readonly
           */

        }, {
          key: "originalEvent",
          get: function get() {
            if (this.sensorEvent) {
              return this.sensorEvent.originalEvent;
            }

            return null;
          }
        }]);

        return DragEvent;
      }(_AbstractEvent2["default"]);

      exports.DragEvent = DragEvent;
      /**
       * Drag start event
       * @class DragStartEvent
       * @module DragStartEvent
       * @extends DragEvent
       */

      DragEvent.type = 'drag';

      var DragStartEvent = /*#__PURE__*/function (_DragEvent2) {
        _inherits(DragStartEvent, _DragEvent2);

        var _super24 = _createSuper(DragStartEvent);

        function DragStartEvent() {
          _classCallCheck(this, DragStartEvent);

          return _super24.apply(this, arguments);
        }

        return _createClass(DragStartEvent);
      }(DragEvent);

      exports.DragStartEvent = DragStartEvent;
      /**
       * Drag move event
       * @class DragMoveEvent
       * @module DragMoveEvent
       * @extends DragEvent
       */

      DragStartEvent.type = 'drag:start';
      DragStartEvent.cancelable = true;

      var DragMoveEvent = /*#__PURE__*/function (_DragEvent3) {
        _inherits(DragMoveEvent, _DragEvent3);

        var _super25 = _createSuper(DragMoveEvent);

        function DragMoveEvent() {
          _classCallCheck(this, DragMoveEvent);

          return _super25.apply(this, arguments);
        }

        return _createClass(DragMoveEvent);
      }(DragEvent);

      exports.DragMoveEvent = DragMoveEvent;
      /**
       * Drag over event
       * @class DragOverEvent
       * @module DragOverEvent
       * @extends DragEvent
       */

      DragMoveEvent.type = 'drag:move';

      var DragOverEvent = /*#__PURE__*/function (_DragEvent4) {
        _inherits(DragOverEvent, _DragEvent4);

        var _super26 = _createSuper(DragOverEvent);

        function DragOverEvent() {
          _classCallCheck(this, DragOverEvent);

          return _super26.apply(this, arguments);
        }

        _createClass(DragOverEvent, [{
          key: "overContainer",
          get:
          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.overContainer;
          }
          /**
           * Draggable element you are over
           * @property over
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "over",
          get: function get() {
            return this.data.over;
          }
        }]);

        return DragOverEvent;
      }(DragEvent);

      exports.DragOverEvent = DragOverEvent;
      /**
       * Drag out event
       * @class DragOutEvent
       * @module DragOutEvent
       * @extends DragEvent
       */

      DragOverEvent.type = 'drag:over';
      DragOverEvent.cancelable = true;

      var DragOutEvent = /*#__PURE__*/function (_DragEvent5) {
        _inherits(DragOutEvent, _DragEvent5);

        var _super27 = _createSuper(DragOutEvent);

        function DragOutEvent() {
          _classCallCheck(this, DragOutEvent);

          return _super27.apply(this, arguments);
        }

        _createClass(DragOutEvent, [{
          key: "overContainer",
          get:
          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.overContainer;
          }
          /**
           * Draggable element you left
           * @property over
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "over",
          get: function get() {
            return this.data.over;
          }
        }]);

        return DragOutEvent;
      }(DragEvent);

      exports.DragOutEvent = DragOutEvent;
      /**
       * Drag over container event
       * @class DragOverContainerEvent
       * @module DragOverContainerEvent
       * @extends DragEvent
       */

      DragOutEvent.type = 'drag:out';

      var DragOverContainerEvent = /*#__PURE__*/function (_DragEvent6) {
        _inherits(DragOverContainerEvent, _DragEvent6);

        var _super28 = _createSuper(DragOverContainerEvent);

        function DragOverContainerEvent() {
          _classCallCheck(this, DragOverContainerEvent);

          return _super28.apply(this, arguments);
        }

        _createClass(DragOverContainerEvent, [{
          key: "overContainer",
          get:
          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.overContainer;
          }
        }]);

        return DragOverContainerEvent;
      }(DragEvent);

      exports.DragOverContainerEvent = DragOverContainerEvent;
      /**
       * Drag out container event
       * @class DragOutContainerEvent
       * @module DragOutContainerEvent
       * @extends DragEvent
       */

      DragOverContainerEvent.type = 'drag:over:container';

      var DragOutContainerEvent = /*#__PURE__*/function (_DragEvent7) {
        _inherits(DragOutContainerEvent, _DragEvent7);

        var _super29 = _createSuper(DragOutContainerEvent);

        function DragOutContainerEvent() {
          _classCallCheck(this, DragOutContainerEvent);

          return _super29.apply(this, arguments);
        }

        _createClass(DragOutContainerEvent, [{
          key: "overContainer",
          get:
          /**
           * Draggable container you left
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.overContainer;
          }
        }]);

        return DragOutContainerEvent;
      }(DragEvent);

      exports.DragOutContainerEvent = DragOutContainerEvent;
      /**
       * Drag pressure event
       * @class DragPressureEvent
       * @module DragPressureEvent
       * @extends DragEvent
       */

      DragOutContainerEvent.type = 'drag:out:container';

      var DragPressureEvent = /*#__PURE__*/function (_DragEvent8) {
        _inherits(DragPressureEvent, _DragEvent8);

        var _super30 = _createSuper(DragPressureEvent);

        function DragPressureEvent() {
          _classCallCheck(this, DragPressureEvent);

          return _super30.apply(this, arguments);
        }

        _createClass(DragPressureEvent, [{
          key: "pressure",
          get:
          /**
           * Pressure applied on draggable element
           * @property pressure
           * @type {Number}
           * @readonly
           */
          function get() {
            return this.data.pressure;
          }
        }]);

        return DragPressureEvent;
      }(DragEvent);

      exports.DragPressureEvent = DragPressureEvent;
      /**
       * Drag stop event
       * @class DragStopEvent
       * @module DragStopEvent
       * @extends DragEvent
       */

      DragPressureEvent.type = 'drag:pressure';

      var DragStopEvent = /*#__PURE__*/function (_DragEvent9) {
        _inherits(DragStopEvent, _DragEvent9);

        var _super31 = _createSuper(DragStopEvent);

        function DragStopEvent() {
          _classCallCheck(this, DragStopEvent);

          return _super31.apply(this, arguments);
        }

        return _createClass(DragStopEvent);
      }(DragEvent);

      exports.DragStopEvent = DragStopEvent;
      DragStopEvent.type = 'drag:stop';
      /***/
    },
    /* 36 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragEvent = __webpack_require__(8);

      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DragEvent[key];
          }
        });
      });

      var _DraggableEvent = __webpack_require__(7);

      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DraggableEvent[key];
          }
        });
      });

      var _Plugins = __webpack_require__(6);

      Object.keys(_Plugins).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _Plugins[key];
          }
        });
      });

      var _Sensors = __webpack_require__(5);

      Object.keys(_Sensors).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _Sensors[key];
          }
        });
      });

      var _Draggable = __webpack_require__(12);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Draggable2["default"];
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = requestNextAnimationFrame;

      function requestNextAnimationFrame(callback) {
        return requestAnimationFrame(function () {
          requestAnimationFrame(callback);
        });
      }
      /***/

    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _requestNextAnimationFrame = __webpack_require__(37);

      var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _requestNextAnimationFrame2["default"];
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = closest;
      var matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
      /**
       * Get the closest parent element of a given element that matches the given
       * selector string or matching function
       *
       * @param {Element} element The child element to find a parent of
       * @param {String|Function} selector The string or function to use to match
       *     the parent element
       * @return {Element|null}
       */

      function closest(element, value) {
        if (!element) {
          return null;
        }

        var selector = value;
        var callback = value;
        var nodeList = value;
        var singleElement = value;
        var isSelector = Boolean(typeof value === 'string');
        var isFunction = Boolean(typeof value === 'function');
        var isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
        var isElement = Boolean(value instanceof HTMLElement);

        function conditionFn(currentElement) {
          if (!currentElement) {
            return currentElement;
          } else if (isSelector) {
            return matchFunction.call(currentElement, selector);
          } else if (isNodeList) {
            return _toConsumableArray(nodeList).includes(currentElement);
          } else if (isElement) {
            return singleElement === currentElement;
          } else if (isFunction) {
            return callback(currentElement);
          } else {
            return null;
          }
        }

        var current = element;

        do {
          current = current.correspondingUseElement || current.correspondingElement || current;

          if (conditionFn(current)) {
            return current;
          }

          current = current.parentNode;
        } while (current && current !== document.body && current !== document);

        return null;
      }
      /***/

    },
    /* 40 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(39);

      var _closest2 = _interopRequireDefault(_closest);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _closest2["default"];
      /***/
    },
    /* 41 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _utils = __webpack_require__(0);

      var _Draggable = __webpack_require__(36);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      var _DroppableEvent = __webpack_require__(9);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragMove = Symbol('onDragMove');
      var onDragStop = Symbol('onDragStop');
      var dropInDropzone = Symbol('dropInDropZone');
      var returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
      var closestDropzone = Symbol('closestDropzone');
      var getDropzones = Symbol('getDropzones');
      /**
       * Returns an announcement message when the Draggable element is dropped into a dropzone element
       * @param {DroppableDroppedEvent} droppableEvent
       * @return {String}
       */

      function onDroppableDroppedDefaultAnnouncement(_ref13) {
        var dragEvent = _ref13.dragEvent,
            dropzone = _ref13.dropzone;
        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        var dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
        return "Dropped ".concat(sourceText, " into ").concat(dropzoneText);
      }
      /**
       * Returns an announcement message when the Draggable element has returned to its original dropzone element
       * @param {DroppableReturnedEvent} droppableEvent
       * @return {String}
       */


      function onDroppableReturnedDefaultAnnouncement(_ref14) {
        var dragEvent = _ref14.dragEvent,
            dropzone = _ref14.dropzone;
        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        var dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
        return "Returned ".concat(sourceText, " from ").concat(dropzoneText);
      }
      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['droppable:dropped']
       * @const {Function} defaultAnnouncements['droppable:returned']
       */


      var defaultAnnouncements = {
        'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
        'droppable:returned': onDroppableReturnedDefaultAnnouncement
      };
      var defaultClasses = {
        'droppable:active': 'draggable-dropzone--active',
        'droppable:occupied': 'draggable-dropzone--occupied'
      };
      var defaultOptions = {
        dropzone: '.draggable-droppable'
      };
      /**
       * Droppable is built on top of Draggable and allows dropping draggable elements
       * into dropzone element
       * @class Droppable
       * @module Droppable
       * @extends Draggable
       */

      var Droppable = /*#__PURE__*/function (_Draggable2$default) {
        _inherits(Droppable, _Draggable2$default);

        var _super32 = _createSuper(Droppable);

        /**
         * Droppable constructor.
         * @constructs Droppable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers
         * @param {Object} options - Options for Droppable
         */
        function Droppable() {
          var _this26;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Droppable);

          _this26 = _super32.call(this, containers, _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || {}),
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          }));
          /**
           * All dropzone elements on drag start
           * @property dropzones
           * @type {HTMLElement[]}
           */

          _this26.dropzones = null;
          /**
           * Last dropzone element that the source was dropped into
           * @property lastDropzone
           * @type {HTMLElement}
           */

          _this26.lastDropzone = null;
          /**
           * Initial dropzone element that the source was drag from
           * @property initialDropzone
           * @type {HTMLElement}
           */

          _this26.initialDropzone = null;
          _this26[onDragStart] = _this26[onDragStart].bind(_assertThisInitialized(_this26));
          _this26[onDragMove] = _this26[onDragMove].bind(_assertThisInitialized(_this26));
          _this26[onDragStop] = _this26[onDragStop].bind(_assertThisInitialized(_this26));

          _this26.on('drag:start', _this26[onDragStart]).on('drag:move', _this26[onDragMove]).on('drag:stop', _this26[onDragStop]);

          return _this26;
        }
        /**
         * Destroys Droppable instance.
         */


        _createClass(Droppable, [{
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(Droppable.prototype), "destroy", this).call(this);

            this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
          }
          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            this.dropzones = _toConsumableArray(this[getDropzones]());
            var dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);

            if (!dropzone) {
              event.cancel();
              return;
            }

            var droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
              dragEvent: event,
              dropzone: dropzone
            });
            this.trigger(droppableStartEvent);

            if (droppableStartEvent.canceled()) {
              event.cancel();
              return;
            }

            this.initialDropzone = dropzone;

            var _iterator3 = _createForOfIteratorHelper(this.dropzones),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var dropzoneElement = _step3.value;

                if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
                  continue;
                }

                dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          /**
           * Drag move handler
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            var dropzone = this[closestDropzone](event.sensorEvent.target);
            var overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));

            if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
              this.lastDropzone = dropzone;
            } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
              this[returnToOriginalDropzone](event);
              this.lastDropzone = null;
            }
          }
          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
              dragEvent: event,
              dropzone: this.lastDropzone || this.initialDropzone
            });
            this.trigger(droppableStopEvent);
            var occupiedClass = this.getClassNameFor('droppable:occupied');

            var _iterator4 = _createForOfIteratorHelper(this.dropzones),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var dropzone = _step4.value;
                dropzone.classList.remove(this.getClassNameFor('droppable:active'));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
              this.initialDropzone.classList.remove(occupiedClass);
            }

            this.dropzones = null;
            this.lastDropzone = null;
            this.initialDropzone = null;
          }
          /**
           * Drops a draggable element into a dropzone element
           * @private
           * @param {DragMoveEvent} event - Drag move event
           * @param {HTMLElement} dropzone - Dropzone element to drop draggable into
           */

        }, {
          key: dropInDropzone,
          value: function value(event, dropzone) {
            var droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
              dragEvent: event,
              dropzone: dropzone
            });
            this.trigger(droppableDroppedEvent);

            if (droppableDroppedEvent.canceled()) {
              return false;
            }

            var occupiedClass = this.getClassNameFor('droppable:occupied');

            if (this.lastDropzone) {
              this.lastDropzone.classList.remove(occupiedClass);
            }

            dropzone.appendChild(event.source);
            dropzone.classList.add(occupiedClass);
            return true;
          }
          /**
           * Moves the previously dropped element back into its original dropzone
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: returnToOriginalDropzone,
          value: function value(event) {
            var droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
              dragEvent: event,
              dropzone: this.lastDropzone
            });
            this.trigger(droppableReturnedEvent);

            if (droppableReturnedEvent.canceled()) {
              return;
            }

            this.initialDropzone.appendChild(event.source);
            this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));
          }
          /**
           * Returns closest dropzone element for even target
           * @private
           * @param {HTMLElement} target - Event target
           * @return {HTMLElement|null}
           */

        }, {
          key: closestDropzone,
          value: function value(target) {
            if (!this.dropzones) {
              return null;
            }

            return (0, _utils.closest)(target, this.dropzones);
          }
          /**
           * Returns all current dropzone elements for this draggable instance
           * @private
           * @return {NodeList|HTMLElement[]|Array}
           */

        }, {
          key: getDropzones,
          value: function value() {
            var dropzone = this.options.dropzone;

            if (typeof dropzone === 'string') {
              return document.querySelectorAll(dropzone);
            } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
              return dropzone;
            } else if (typeof dropzone === 'function') {
              return dropzone();
            } else {
              return [];
            }
          }
        }]);

        return Droppable;
      }(_Draggable2["default"]);

      exports["default"] = Droppable;
      /***/
    },
    /* 42 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _canceled = Symbol('canceled');
      /**
       * All events fired by draggable inherit this class. You can call `cancel()` to
       * cancel a specific event or you can check if an event has been canceled by
       * calling `canceled()`.
       * @abstract
       * @class AbstractEvent
       * @module AbstractEvent
       */


      var AbstractEvent = /*#__PURE__*/function () {
        /**
         * AbstractEvent constructor.
         * @constructs AbstractEvent
         * @param {object} data - Event data
         */

        /**
         * Event type
         * @static
         * @abstract
         * @property type
         * @type {String}
         */
        function AbstractEvent(data) {
          _classCallCheck(this, AbstractEvent);

          this[_canceled] = false;
          this.data = data;
        }
        /**
         * Read-only type
         * @abstract
         * @return {String}
         */

        /**
         * Event cancelable
         * @static
         * @abstract
         * @property cancelable
         * @type {Boolean}
         */


        _createClass(AbstractEvent, [{
          key: "type",
          get: function get() {
            return this.constructor.type;
          }
          /**
           * Read-only cancelable
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: "cancelable",
          get: function get() {
            return this.constructor.cancelable;
          }
          /**
           * Cancels the event instance
           * @abstract
           */

        }, {
          key: "cancel",
          value: function cancel() {
            this[_canceled] = true;
          }
          /**
           * Check if event has been canceled
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: "canceled",
          value: function canceled() {
            return Boolean(this[_canceled]);
          }
          /**
           * Returns new event instance with existing event data.
           * This method allows for overriding of event data.
           * @param {Object} data
           * @return {AbstractEvent}
           */

        }, {
          key: "clone",
          value: function clone(data) {
            return new this.constructor(_extends({}, this.data, data));
          }
        }]);

        return AbstractEvent;
      }();

      exports["default"] = AbstractEvent;
      AbstractEvent.type = 'event';
      AbstractEvent.cancelable = false;
      /***/
    },
    /* 43 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base droppable event
       * @class DroppableEvent
       * @module DroppableEvent
       * @extends AbstractEvent
       */


      var DroppableEvent = /*#__PURE__*/function (_AbstractEvent2$defau5) {
        _inherits(DroppableEvent, _AbstractEvent2$defau5);

        var _super33 = _createSuper(DroppableEvent);

        function DroppableEvent() {
          _classCallCheck(this, DroppableEvent);

          return _super33.apply(this, arguments);
        }

        _createClass(DroppableEvent, [{
          key: "dragEvent",
          get:
          /**
           * Original drag event that triggered this droppable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          function get() {
            return this.data.dragEvent;
          }
        }]);

        return DroppableEvent;
      }(_AbstractEvent2["default"]);

      exports.DroppableEvent = DroppableEvent;
      /**
       * Droppable start event
       * @class DroppableStartEvent
       * @module DroppableStartEvent
       * @extends DroppableEvent
       */

      DroppableEvent.type = 'droppable';

      var DroppableStartEvent = /*#__PURE__*/function (_DroppableEvent2) {
        _inherits(DroppableStartEvent, _DroppableEvent2);

        var _super34 = _createSuper(DroppableStartEvent);

        function DroppableStartEvent() {
          _classCallCheck(this, DroppableStartEvent);

          return _super34.apply(this, arguments);
        }

        _createClass(DroppableStartEvent, [{
          key: "dropzone",
          get:
          /**
           * The initial dropzone element of the currently dragging draggable element
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableStartEvent;
      }(DroppableEvent);

      exports.DroppableStartEvent = DroppableStartEvent;
      /**
       * Droppable dropped event
       * @class DroppableDroppedEvent
       * @module DroppableDroppedEvent
       * @extends DroppableEvent
       */

      DroppableStartEvent.type = 'droppable:start';
      DroppableStartEvent.cancelable = true;

      var DroppableDroppedEvent = /*#__PURE__*/function (_DroppableEvent3) {
        _inherits(DroppableDroppedEvent, _DroppableEvent3);

        var _super35 = _createSuper(DroppableDroppedEvent);

        function DroppableDroppedEvent() {
          _classCallCheck(this, DroppableDroppedEvent);

          return _super35.apply(this, arguments);
        }

        _createClass(DroppableDroppedEvent, [{
          key: "dropzone",
          get:
          /**
           * The dropzone element you dropped the draggable element into
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableDroppedEvent;
      }(DroppableEvent);

      exports.DroppableDroppedEvent = DroppableDroppedEvent;
      /**
       * Droppable returned event
       * @class DroppableReturnedEvent
       * @module DroppableReturnedEvent
       * @extends DroppableEvent
       */

      DroppableDroppedEvent.type = 'droppable:dropped';
      DroppableDroppedEvent.cancelable = true;

      var DroppableReturnedEvent = /*#__PURE__*/function (_DroppableEvent4) {
        _inherits(DroppableReturnedEvent, _DroppableEvent4);

        var _super36 = _createSuper(DroppableReturnedEvent);

        function DroppableReturnedEvent() {
          _classCallCheck(this, DroppableReturnedEvent);

          return _super36.apply(this, arguments);
        }

        _createClass(DroppableReturnedEvent, [{
          key: "dropzone",
          get:
          /**
           * The dropzone element you dragged away from
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableReturnedEvent;
      }(DroppableEvent);

      exports.DroppableReturnedEvent = DroppableReturnedEvent;
      /**
       * Droppable stop event
       * @class DroppableStopEvent
       * @module DroppableStopEvent
       * @extends DroppableEvent
       */

      DroppableReturnedEvent.type = 'droppable:returned';
      DroppableReturnedEvent.cancelable = true;

      var DroppableStopEvent = /*#__PURE__*/function (_DroppableEvent5) {
        _inherits(DroppableStopEvent, _DroppableEvent5);

        var _super37 = _createSuper(DroppableStopEvent);

        function DroppableStopEvent() {
          _classCallCheck(this, DroppableStopEvent);

          return _super37.apply(this, arguments);
        }

        _createClass(DroppableStopEvent, [{
          key: "dropzone",
          get:
          /**
           * The final dropzone element of the draggable element
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableStopEvent;
      }(DroppableEvent);

      exports.DroppableStopEvent = DroppableStopEvent;
      DroppableStopEvent.type = 'droppable:stop';
      DroppableStopEvent.cancelable = true;
      /***/
    },
    /* 44 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DroppableEvent = __webpack_require__(9);

      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DroppableEvent[key];
          }
        });
      });

      var _Droppable = __webpack_require__(41);

      var _Droppable2 = _interopRequireDefault(_Droppable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Droppable2["default"];
      /***/
    }
    /******/
    ])
  );
});

/***/ })

/******/ });
//# sourceMappingURL=droppable-4fdace8d28f456a1cd8f.js.map