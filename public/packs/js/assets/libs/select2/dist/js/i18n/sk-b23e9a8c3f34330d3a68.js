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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/select2/dist/js/i18n/sk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/select2/dist/js/i18n/sk.js":
/*!*********************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/select2/dist/js/i18n/sk.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/sk", [], function () {
    var e = {
      2: function _(e) {
        return e ? "dva" : "dve";
      },
      3: function _() {
        return "tri";
      },
      4: function _() {
        return "štyri";
      }
    };
    return {
      errorLoading: function errorLoading() {
        return "Výsledky sa nepodarilo načítať.";
      },
      inputTooLong: function inputTooLong(n) {
        var t = n.input.length - n.maximum;
        return 1 == t ? "Prosím, zadajte o jeden znak menej" : t >= 2 && t <= 4 ? "Prosím, zadajte o " + e[t](!0) + " znaky menej" : "Prosím, zadajte o " + t + " znakov menej";
      },
      inputTooShort: function inputTooShort(n) {
        var t = n.minimum - n.input.length;
        return 1 == t ? "Prosím, zadajte ešte jeden znak" : t <= 4 ? "Prosím, zadajte ešte ďalšie " + e[t](!0) + " znaky" : "Prosím, zadajte ešte ďalších " + t + " znakov";
      },
      loadingMore: function loadingMore() {
        return "Načítanie ďalších výsledkov…";
      },
      maximumSelected: function maximumSelected(n) {
        return 1 == n.maximum ? "Môžete zvoliť len jednu položku" : n.maximum >= 2 && n.maximum <= 4 ? "Môžete zvoliť najviac " + e[n.maximum](!1) + " položky" : "Môžete zvoliť najviac " + n.maximum + " položiek";
      },
      noResults: function noResults() {
        return "Nenašli sa žiadne položky";
      },
      searching: function searching() {
        return "Vyhľadávanie…";
      },
      removeAllItems: function removeAllItems() {
        return "Odstráňte všetky položky";
      }
    };
  }), e.define, e.require;
}();

/***/ })

/******/ });
//# sourceMappingURL=sk-b23e9a8c3f34330d3a68.js.map