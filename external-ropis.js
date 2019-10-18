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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/ropis/external-ropis.js":
/***/ (function(module, exports, __webpack_require__) {

;(function () {
  var url = "http://canabis.test".replace('http:', '').replace('https:', '');

  if (!url.endsWith('/')) {
    url += '/';
  }

  if (!url.startsWith('//')) {
    url = '//' + url;
  }

  var WRAPPER_ID = 'buddi-em-menu';
  var CHECKING_INTERVAL = 1; //in seconds
  var LOADING_TEXT = '<svg width="135" height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#333">\n  <rect y="10" width="15" height="120" rx="6">\n      <animate attributeName="height"\n           begin="0.5s" dur="1s"\n           values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n           repeatCount="indefinite" />\n      <animate attributeName="y"\n           begin="0.5s" dur="1s"\n           values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n           repeatCount="indefinite" />\n  </rect>\n  <rect x="30" y="10" width="15" height="120" rx="6">\n      <animate attributeName="height"\n           begin="0.25s" dur="1s"\n           values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n           repeatCount="indefinite" />\n      <animate attributeName="y"\n           begin="0.25s" dur="1s"\n           values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n           repeatCount="indefinite" />\n  </rect>\n  <rect x="60" width="15" height="140" rx="6">\n      <animate attributeName="height"\n           begin="0s" dur="1s"\n           values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n           repeatCount="indefinite" />\n      <animate attributeName="y"\n           begin="0s" dur="1s"\n           values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n           repeatCount="indefinite" />\n  </rect>\n  <rect x="90" y="10" width="15" height="120" rx="6">\n      <animate attributeName="height"\n           begin="0.25s" dur="1s"\n           values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n           repeatCount="indefinite" />\n      <animate attributeName="y"\n           begin="0.25s" dur="1s"\n           values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n           repeatCount="indefinite" />\n  </rect>\n  <rect x="120" y="10" width="15" height="120" rx="6">\n      <animate attributeName="height"\n           begin="0.5s" dur="1s"\n           values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n           repeatCount="indefinite" />\n      <animate attributeName="y"\n           begin="0.5s" dur="1s"\n           values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n           repeatCount="indefinite" />\n  </rect>\n</svg>'; // 'Loading...';

  var randomHash = parseInt(Math.random() * 1000);
  var interval = null;

  startInterval();

  function startInterval() {
    interval = setInterval(function () {
      var wrapper = document.getElementById(WRAPPER_ID);
      if (!wrapper || wrapper.classList.contains('loaded')) return;

      wrapper.classList.add('loaded');
      render();
    }, CHECKING_INTERVAL * 1000);
  }

  function render() {
    if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) !== -1) {
      includeContent();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
          includeContent();
        }, 500);
      });
    }
  }

  function includeContent() {
    var wrapper = document.getElementById(WRAPPER_ID);
    if (!wrapper) return;
    wrapper.innerHTML = '<input type="hidden" id="buddi-url" value="' + url + '">\n      <div id="buddi-notification" style="text-align:center;">' + LOADING_TEXT + '</div>\n      <span id="buddi-error" style="color: red;"></span>\n      <div id="buddi-app">\n        <router-view></router-view>\n      </div>';

    insertStyles(insertScript);
  }

  function insertScript() {
    var script = document.createElement('script');
    var path = url + 'js/ropis-app.js';

    script.src = path + '?' + randomHash;
    script.onerror = handleExternalResourceHandler.bind(null, path);

    document.getElementsByTagName('body')[0].appendChild(script);
  }

  function insertStyles(callback) {
    var link = document.createElement('link');
    var path = url + 'ropis/styles';
    var _origin = encodeURIComponent(origin);
    var fullPath = path + '?domain=' + _origin + '&hash=' + randomHash;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = encodeURI(fullPath);
    link.media = 'all';
    link.onerror = handleExternalResourceHandler.bind(null, fullPath);
    link.onload = callback;

    document.getElementsByTagName('head')[0].appendChild(link);
  }

  function handleExternalResourceHandler(path) {
    var errorSpan = document.getElementById('buddi-error');
    errorSpan.innerHTML += '<p>Please check that the \'' + path + '\' is available.</p>';

    removeNotificationSpan();
  }

  function removeNotificationSpan() {
    var notificationSpan = document.getElementById('buddi-notification');
    if (notificationSpan) notificationSpan.remove();
  }
})();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/ropis/external-ropis.js");


/***/ })

/******/ });