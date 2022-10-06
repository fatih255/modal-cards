/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("modalCard", [], factory);
	else if(typeof exports === 'object')
		exports["modalCard"] = factory();
	else
		root["modalCard"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./forbundle/script.ts":
/*!*****************************!*\
  !*** ./forbundle/script.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modalCard)\n/* harmony export */ });\nfunction modalCard(_a) {\r\n    var html = _a.html, settings = _a.settings;\r\n    var cssId = \"modalCardCSS\";\r\n    var head = document.getElementsByTagName(\"head\")[0];\r\n    var link = document.createElement(\"link\");\r\n    link.id = cssId;\r\n    link.rel = \"stylesheet\";\r\n    link.type = \"text/css\";\r\n    link.href = \"https://leafy-mermaid-eb53cb.netlify.app/_next/static/css/25540e88b84caae0.css\";\r\n    link.media = \"all\";\r\n    head.appendChild(link);\r\n    link.onload = function () {\r\n        document.body.innerHTML = html;\r\n        // for close button trigger close event\r\n        var modalCloseButton = document.getElementById('close-modal-btn');\r\n        modalCloseButton && modalCloseButton.addEventListener(\"click\", closeModalAction);\r\n        var modalElement = document.getElementById(\"layout\");\r\n        if (!modalElement)\r\n            return;\r\n        var ModalCloseEffects = []; // this array use when settings have effects during the closing \r\n        var timer;\r\n        var modalOpenedContidions = [];\r\n        var isModalOpened = sessionStorage.getItem(\"modalopened\");\r\n        var webHookData = new FormData();\r\n        var clickedButtons = [];\r\n        // 1.Condition:  if modal is opened this session dont show again\r\n        // 2.Condition:  if have traffic source setting check is have refferrer is same traffic source that entered input if not dont show modal\r\n        // 3.Condition:  if browser language is not includes languages that entered input not show modal\r\n        modalOpenedContidions.push(!isModalOpened);\r\n        modalOpenedContidions.push(!settings.trafficSource || document.referrer === settings.trafficSource);\r\n        modalOpenedContidions.push(!settings.browserLanguages || settings.browserLanguages.includes(navigator.language));\r\n        if (modalOpenedContidions.every(function (v) { return v; })) {\r\n            //if not have any listener, show modal directly\r\n            if (!settings.afterPercentageScroll && !settings.exitIntentTargetting && !settings.afterXSeconds) {\r\n                openModalAction();\r\n            }\r\n            Object.keys(settings).forEach(function (setting) {\r\n                switch (setting) {\r\n                    case 'afterPercentageScroll':\r\n                        window.addEventListener(\"scroll\", scrollEventOnDocument);\r\n                        break;\r\n                    case 'afterXSeconds':\r\n                        timer = setTimeout(function () {\r\n                            openModalAction();\r\n                        }, Number(settings.afterXSeconds) * 1000);\r\n                        break;\r\n                    case 'exitIntentTargetting':\r\n                        if (typeof screen.orientation === \"undefined\")\r\n                            document.addEventListener(\"mouseout\", exitIntentTargetting);\r\n                        break;\r\n                    case 'sendClickData':\r\n                        var modalButtons = modalElement.querySelectorAll(\"button\");\r\n                        modalButtons.forEach(function (button) {\r\n                            button.addEventListener(\"click\", countClick);\r\n                        });\r\n                        ModalCloseEffects.push(webHookData.append('clicked_buttons[]', clickedButtons));\r\n                        break;\r\n                    case 'webHookUrl':\r\n                        ModalCloseEffects.push(sendDataToWebHook());\r\n                        break;\r\n                }\r\n            });\r\n        }\r\n        // event listeners functions\r\n        //percentage scrolling show\r\n        function scrollEventOnDocument() {\r\n            var scrollTop = window.scrollY;\r\n            var docHeight = document.documentElement.offsetHeight;\r\n            var winHeight = window.innerHeight;\r\n            var scrollPercent = scrollTop / (docHeight - winHeight);\r\n            var scrollPercentRounded = Math.round(scrollPercent * 100);\r\n            // if(scrollPercentRounded < Number(value))  \r\n            if (scrollPercentRounded === Number(settings.afterPercentageScroll))\r\n                openModalAction();\r\n        }\r\n        //exit indent targeting show modal\r\n        function exitIntentTargetting(e) {\r\n            if (!e.relatedTarget)\r\n                openModalAction();\r\n        }\r\n        ;\r\n        //generate data functions\r\n        function countClick(e) {\r\n            var target = e.target;\r\n            if (!target)\r\n                return;\r\n            clickedButtons.push(target.innerText);\r\n            target.removeEventListener(\"click\", countClick);\r\n        }\r\n        //send data to webhook\r\n        function sendDataToWebHook() {\r\n            if (!settings.webHookUrl)\r\n                return;\r\n            fetch(settings.webHookUrl, { method: 'POST', body: webHookData })\r\n                .then(function (response) { return response.json(); })\r\n                .then(function (data) { return console.log(data); });\r\n        }\r\n        //Modal Open/Close Functions\r\n        //trigger open modal animation\r\n        function openModalAction() {\r\n            modalElement.classList.add('open');\r\n            sessionStorage.setItem(\"modalopened\", \"true\");\r\n            removeAllEvents();\r\n        }\r\n        //trigger close modal animation\r\n        function closeModalAction() {\r\n            modalElement.classList.remove('open');\r\n            modalElement.classList.add('close');\r\n            ModalCloseEffects.forEach(function (code) { return code; });\r\n        }\r\n        //remove all event listeners\r\n        function removeAllEvents() {\r\n            window.removeEventListener(\"scroll\", scrollEventOnDocument);\r\n            document.removeEventListener(\"mouseout\", exitIntentTargetting);\r\n            window.clearTimeout(timer);\r\n        }\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://modalCard/./forbundle/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./forbundle/script.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});