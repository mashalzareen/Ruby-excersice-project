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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/weekSelect/weekSelect.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/weekSelect/weekSelect.js":
/*!******************************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/flatpickr/dist/plugins/weekSelect/weekSelect.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  function weekSelectPlugin() {
    return function (fp) {
      function onDayHover(event) {
        var day = event.target;
        if (!day.classList.contains("flatpickr-day")) return;
        var days = fp.days.childNodes;
        var dayIndex = day.$i;
        var dayIndSeven = dayIndex / 7;
        var weekStartDay = days[7 * Math.floor(dayIndSeven)].dateObj;
        var weekEndDay = days[7 * Math.ceil(dayIndSeven + 0.01) - 1].dateObj;

        for (var i = days.length; i--;) {
          var day_1 = days[i];
          var date = day_1.dateObj;
          if (date > weekEndDay || date < weekStartDay) day_1.classList.remove("inRange");else day_1.classList.add("inRange");
        }
      }

      function highlightWeek() {
        var selDate = fp.latestSelectedDateObj;

        if (selDate !== undefined && selDate.getMonth() === fp.currentMonth && selDate.getFullYear() === fp.currentYear) {
          fp.weekStartDay = fp.days.childNodes[7 * Math.floor(fp.selectedDateElem.$i / 7)].dateObj;
          fp.weekEndDay = fp.days.childNodes[7 * Math.ceil(fp.selectedDateElem.$i / 7 + 0.01) - 1].dateObj;
        }

        var days = fp.days.childNodes;

        for (var i = days.length; i--;) {
          var date = days[i].dateObj;
          if (date >= fp.weekStartDay && date <= fp.weekEndDay) days[i].classList.add("week", "selected");
        }
      }

      function clearHover() {
        var days = fp.days.childNodes;

        for (var i = days.length; i--;) {
          days[i].classList.remove("inRange");
        }
      }

      function onReady() {
        if (fp.daysContainer !== undefined) fp.daysContainer.addEventListener("mouseover", onDayHover);
      }

      function onDestroy() {
        if (fp.daysContainer !== undefined) fp.daysContainer.removeEventListener("mouseover", onDayHover);
      }

      return {
        onValueUpdate: highlightWeek,
        onMonthChange: highlightWeek,
        onYearChange: highlightWeek,
        onOpen: highlightWeek,
        onClose: clearHover,
        onParseConfig: function onParseConfig() {
          fp.config.mode = "single";
          fp.config.enableTime = false;
          fp.config.dateFormat = fp.config.dateFormat ? fp.config.dateFormat : "\\W\\e\\e\\k #W, Y";
          fp.config.altFormat = fp.config.altFormat ? fp.config.altFormat : "\\W\\e\\e\\k #W, Y";
        },
        onReady: [onReady, highlightWeek, function () {
          fp.loadedPlugins.push("weekSelect");
        }],
        onDestroy: onDestroy
      };
    };
  }

  return weekSelectPlugin;
});

/***/ })

/******/ });
//# sourceMappingURL=weekSelect-dee05106607c398b16a4.js.map