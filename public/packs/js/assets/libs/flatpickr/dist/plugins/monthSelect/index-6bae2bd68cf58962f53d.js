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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/monthSelect/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/flatpickr/dist/plugins/monthSelect/index.js":
/*!**************************************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/flatpickr/dist/plugins/monthSelect/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };

  var defaultConfig = {
    shorthand: false,
    dateFormat: "F Y",
    altFormat: "F Y",
    theme: "light"
  };

  function monthSelectPlugin(pluginConfig) {
    var config = _assign({}, defaultConfig, pluginConfig);

    return function (fp) {
      fp.config.dateFormat = config.dateFormat;
      fp.config.altFormat = config.altFormat;
      var self = {
        monthsContainer: null
      };

      function clearUnnecessaryDOMElements() {
        if (!fp.rContainer || !fp.daysContainer || !fp.weekdayContainer) return;
        fp.rContainer.removeChild(fp.daysContainer);
        fp.rContainer.removeChild(fp.weekdayContainer);

        for (var index = 0; index < fp.monthElements.length; index++) {
          var element = fp.monthElements[index];
          if (!element.parentNode) continue;
          element.parentNode.removeChild(element);
        }
      }

      function addListeners() {
        fp._bind(fp.prevMonthNav, "click", function () {
          fp.currentYear -= 1;
          selectYear();
        });

        fp._bind(fp.nextMonthNav, "mousedown", function () {
          fp.currentYear += 1;
          selectYear();
        });
      }

      function addMonths() {
        if (!fp.rContainer) return;
        self.monthsContainer = fp._createElement("div", "flatpickr-monthSelect-months");
        self.monthsContainer.tabIndex = -1;
        fp.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + config.theme);

        for (var i = 0; i < 12; i++) {
          var month = fp._createElement("span", "flatpickr-monthSelect-month");

          month.dateObj = new Date(fp.currentYear, i);
          month.$i = i;
          month.textContent = monthToStr(i, config.shorthand, fp.l10n);
          month.tabIndex = -1;
          month.addEventListener("click", selectMonth);
          self.monthsContainer.appendChild(month);

          if (fp.config.minDate && month.dateObj < fp.config.minDate || fp.config.maxDate && month.dateObj > fp.config.maxDate) {
            month.classList.add("disabled");
          }
        }

        fp.rContainer.appendChild(self.monthsContainer);
      }

      function setCurrentlySelected() {
        if (!fp.rContainer) return;
        var currentlySelected = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected");

        for (var index = 0; index < currentlySelected.length; index++) {
          currentlySelected[index].classList.remove("selected");
        }

        var month = fp.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (fp.currentMonth + 1) + ")");

        if (month) {
          month.classList.add("selected");
        }
      }

      function selectYear() {
        var selectedDate = fp.selectedDates[0];

        if (selectedDate) {
          selectedDate = new Date(selectedDate);
          selectedDate.setFullYear(fp.currentYear);

          if (fp.config.minDate && selectedDate < fp.config.minDate) {
            selectedDate = fp.config.minDate;
          }

          if (fp.config.maxDate && selectedDate > fp.config.maxDate) {
            selectedDate = fp.config.maxDate;
          }

          fp.currentYear = selectedDate.getFullYear();
          fp.currentYearElement.value = String(fp.currentYear);
          setCurrentlySelected();
        }

        if (fp.rContainer) {
          var months = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
          months.forEach(function (month) {
            month.dateObj.setFullYear(fp.currentYear);

            if (fp.config.minDate && month.dateObj < fp.config.minDate || fp.config.maxDate && month.dateObj > fp.config.maxDate) {
              month.classList.add("disabled");
            } else {
              month.classList.remove("disabled");
            }
          });
        }
      }

      function selectMonth(e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.target instanceof Element && !e.target.classList.contains("disabled")) {
          setMonth(e.target.dateObj);
          fp.close();
        }
      }

      function setMonth(date) {
        var selectedDate = new Date(date);
        selectedDate.setFullYear(fp.currentYear);
        fp.currentMonth = selectedDate.getMonth();
        fp.setDate(selectedDate, true);
        setCurrentlySelected();
      }

      var shifts = {
        37: -1,
        39: 1,
        40: 3,
        38: -3
      };

      function onKeyDown(_, __, ___, e) {
        var shouldMove = shifts[e.keyCode] !== undefined;

        if (!shouldMove && e.keyCode !== 13) {
          return;
        }

        if (!fp.rContainer || !self.monthsContainer) return;
        var currentlySelected = fp.rContainer.querySelector(".flatpickr-monthSelect-month.selected");
        var index = Array.prototype.indexOf.call(self.monthsContainer.children, document.activeElement);

        if (index === -1) {
          var target = currentlySelected || self.monthsContainer.firstElementChild;
          target.focus();
          index = target.$i;
        }

        if (shouldMove) {
          self.monthsContainer.children[(12 + index + shifts[e.keyCode]) % 12].focus();
        } else if (e.keyCode === 13 && self.monthsContainer.contains(document.activeElement)) {
          setMonth(document.activeElement.dateObj);
        }
      }

      function destroyPluginInstance() {
        if (self.monthsContainer !== null) {
          var months = self.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month");

          for (var index = 0; index < months.length; index++) {
            months[index].removeEventListener("click", selectMonth);
          }
        }
      }

      return {
        onParseConfig: function onParseConfig() {
          fp.config.mode = "single";
          fp.config.enableTime = false;
        },
        onValueUpdate: setCurrentlySelected,
        onKeyDown: onKeyDown,
        onReady: [clearUnnecessaryDOMElements, addListeners, addMonths, setCurrentlySelected, function () {
          fp.loadedPlugins.push("monthSelect");
        }],
        onDestroy: destroyPluginInstance
      };
    };
  }

  return monthSelectPlugin;
});

/***/ })

/******/ });
//# sourceMappingURL=index-6bae2bd68cf58962f53d.js.map