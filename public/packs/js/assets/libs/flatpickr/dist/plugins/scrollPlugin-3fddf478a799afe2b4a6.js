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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/scrollPlugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/scrollPlugin.js":
/*!*********************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/flatpickr/dist/plugins/scrollPlugin.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  function delta(e) {
    return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
  }

  var scroll = function scroll(e) {
    e.preventDefault();
    var ev = new CustomEvent("increment", {
      bubbles: true
    });
    ev.delta = delta(e);
    e.target.dispatchEvent(ev);
  };

  function scrollMonth(fp) {
    return function (e) {
      e.preventDefault();
      var mDelta = delta(e);
      fp.changeMonth(mDelta);
    };
  }

  function scrollPlugin() {
    return function (fp) {
      var monthScroller = scrollMonth(fp);
      return {
        onReady: function onReady() {
          if (fp.timeContainer) {
            fp.timeContainer.addEventListener("wheel", scroll);
          }

          fp.yearElements.forEach(function (yearElem) {
            return yearElem.addEventListener("wheel", scroll);
          });
          fp.monthElements.forEach(function (monthElem) {
            return monthElem.addEventListener("wheel", monthScroller);
          });
          fp.loadedPlugins.push("scroll");
        },
        onDestroy: function onDestroy() {
          if (fp.timeContainer) {
            fp.timeContainer.removeEventListener("wheel", scroll);
          }

          fp.yearElements.forEach(function (yearElem) {
            return yearElem.removeEventListener("wheel", scroll);
          });
          fp.monthElements.forEach(function (monthElem) {
            return monthElem.removeEventListener("wheel", monthScroller);
          });
        }
      };
    };
  }

  return scrollPlugin;
});

/***/ })

/******/ });
//# sourceMappingURL=scrollPlugin-3fddf478a799afe2b4a6.js.map