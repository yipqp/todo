/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  color: var(--text);\\n}\\n\\n:root {\\n  font-family: \\\"Nunito\\\", sans-serif;\\n  --header-bgc: #6366f1;\\n  --main-left-bgc: #e2e8f0;\\n  --main-right-bgc: #f1f5f9;\\n  --white: #fafafa;\\n  --green: #4ade80;\\n  --red: #f87171;\\n  --selected: #c7d2fe;\\n  --desc: #4b5563;\\n  --text: #1e293b;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  display: grid;\\n  grid-template-rows: auto 1fr;\\n}\\n\\nheader svg,\\n.main-left svg,\\n.add-task svg {\\n  display: block;\\n  width: 1.5rem;\\n}\\n\\nheader {\\n  background-color: var(--header-bgc);\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 40px;\\n}\\n\\n.pg-title {\\n  color: var(--white);\\n}\\n\\nheader > * {\\n  flex: 1;\\n}\\n\\n.header-btns-left {\\n  display: flex;\\n  gap: 25px;\\n}\\n\\nbutton {\\n  appearance: none;\\n  border: none;\\n  background-color: transparent;\\n}\\n\\nheader svg {\\n  fill: var(--white);\\n  width: 1.75rem;\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: minmax(190px, 1fr) minmax(578px, 5fr);\\n}\\n\\n.main-left {\\n  background-color: var(--main-left-bgc);\\n  padding: 20px 35px;\\n  font-size: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n\\n.side-title {\\n  margin-top: 10px;\\n  padding: 10px;\\n  font-size: 1.25rem;\\n}\\n\\n.side-link {\\n  padding: 7px;\\n  border-radius: 10px;\\n  display: flex;\\n  gap: 15px;\\n  align-items: center;\\n}\\n\\n.side-link:hover {\\n  background-color: var(--selected);\\n}\\n\\n.selected {\\n  background-color: var(--selected);\\n}\\n\\n.project-list-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n\\n.main-right {\\n  background-color: var(--main-right-bgc);\\n  display: flex;\\n  flex-direction: column;\\n  padding: 40px 80px;\\n}\\n\\n.current-proj-title {\\n  margin-bottom: 25px;\\n}\\n\\n.tasks {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.task {\\n  display: flex;\\n  gap: 20px;\\n  position: relative;\\n}\\n\\n.task::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100%;\\n  height: 2px;\\n  background-color: var(--main-left-bgc);\\n  bottom: -10px;\\n}\\n\\n.task-right {\\n  display: grid;\\n  grid: 1fr 1fr / 1fr auto auto;\\n  width: 100%;\\n  gap: 10px;\\n  align-items: center;\\n}\\n\\n.task-desc {\\n  grid-row: 2 / 3;\\n  color: var(--desc);\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  appearance: none;\\n}\\n\\n.check-container {\\n  position: relative;\\n  width: 1.75rem;\\n  height: 1.75rem;\\n}\\n\\n.check-container > label {\\n  position: absolute;\\n  width: 1.75rem;\\n  height: 1.75rem;\\n  border: 4px solid var(--header-bgc);\\n  border-radius: 50%;\\n  /* right: 0; */\\n}\\n\\n.check-container > label::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  top: 5px;\\n  left: 3px;\\n  border: 4px solid var(--white);\\n  border-top: none;\\n  border-right: none;\\n  opacity: 0;\\n  transform: rotate(-45deg);\\n  width: 15px;\\n  height: 8px;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + label {\\n  background-color: var(--header-bgc);\\n  border-color: var(--header-bgc);\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + label::after {\\n  opacity: 1;\\n}\\n\\n.check-container > label,\\n.add-task,\\n.side-link,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.edit-btn {\\n  margin-left: 10px;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n}\\n\\n.add-task {\\n  display: flex;\\n  align-items: center;\\n  gap: 15px;\\n}\\n\\n.add-task svg {\\n  width: 2rem;\\n  transform: translateX(-2px);\\n}\\n\\n.task:hover,\\n.add-task:hover {\\n  background-color: var(--main-left-bgc);\\n}\\n\\n.task,\\n.add-task {\\n  border-radius: 10px;\\n  padding: 10px;\\n}\\n\\n.form-container {\\n  position: absolute;\\n  z-index: 1;\\n  background-color: var(--main-left-bgc);\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  border-radius: 10px;\\n  width: 600px;\\n  overflow: hidden;\\n  display: none;\\n}\\n\\n.form-title,\\n.add-task-form {\\n  padding: 20px;\\n}\\n\\n.form-title {\\n  color: var(--white);\\n  background-color: var(--header-bgc);\\n}\\n\\n.add-task-form {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 25px;\\n}\\n\\n#description {\\n  width: 100%;\\n  height: 100px;\\n  resize: none;\\n  padding: 10px;\\n  font-family: inherit;\\n}\\n\\n.add-task-form > label {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.desc-container {\\n  display: flex;\\n  flex-direction: column;\\n  grid-row: 2 / 3;\\n}\\n\\ninput[type=\\\"text\\\"],\\ninput[type=\\\"date\\\"],\\nselect {\\n  height: 42px;\\n  padding: 10px;\\n}\\n\\n.form-buttons {\\n  display: flex;\\n  gap: 20px;\\n  grid-column: 2 / 3;\\n  justify-self: end;\\n}\\n\\n.form-buttons > button {\\n  font-size: 1rem;\\n  padding: 5px 15px;\\n  border-radius: 7px;\\n}\\n\\n.add-btn {\\n  background-color: var(--green);\\n}\\n\\n.cancel-btn {\\n  background-color: var(--red);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_ToDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ToDoList */ \"./src/modules/ToDoList.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_ProjectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ProjectList */ \"./src/modules/ProjectList.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  #toDoList;\n\n  #name;\n\n  constructor(name, toDoList) {\n    this.#name = name;\n    this.#toDoList = toDoList;\n  }\n\n  get toDoList() {\n    return this.#toDoList;\n  }\n\n  set toDoList(newTaskList) {\n    this.#toDoList = newTaskList;\n  }\n\n  get name() {\n    return this.#name;\n  }\n\n  set name(newName) {\n    this.#name = newName;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectList.js":
/*!************************************!*\
  !*** ./src/modules/ProjectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectList)\n/* harmony export */ });\nclass ProjectList {\n  #projectMap;\n\n  constructor() {\n    this.#projectMap = new Map();\n  }\n\n  add(project) {\n    this.#projectMap.set(project.name, project);\n  }\n\n  delete(projectName) {\n    this.#projectMap.delete(projectName);\n  }\n\n  get(key) {\n    return this.#projectMap.get(key);\n  }\n\n  get projectNames() {\n    return this.#projectMap.keys();\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/ProjectList.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  #done = false;\n\n  #title;\n\n  #description;\n\n  #date;\n\n  #priority;\n\n  #id;\n\n  constructor(title, description, date, priority, id) {\n    this.#title = title;\n    this.#description = description;\n    this.#date = date;\n    this.#priority = priority;\n    this.#id = id;\n  }\n\n  get title() {\n    return this.#title;\n  }\n\n  set title(newTitle) {\n    this.#title = newTitle;\n  }\n\n  get description() {\n    return this.#description;\n  }\n\n  set description(newDesc) {\n    this.#description = newDesc;\n  }\n\n  get date() {\n    return this.#date;\n  }\n\n  set date(newDate) {\n    this.#date = newDate;\n  }\n\n  get priority() {\n    return this.#priority;\n  }\n\n  set priority(newPrio) {\n    this.#priority = newPrio;\n  }\n\n  get id() {\n    return this.#id;\n  }\n\n  set id(newId) {\n    this.#id = newId;\n  }\n\n  get taskHTML() {\n    return `<div class=\"task\">\n            <div class=\"check-container\">\n              <input type=\"checkbox\" name=\"checked\" id=\"${this.id}\" />\n              <label for=\"${this.id}\"></label>\n            </div>\n            <div class=\"task-right\">\n              <p class=\"task-title\">${this.title}</p>\n              <p class=\"task-desc\">${this.description}</p>\n              <p class=\"due-date\">${this.date}</p>\n              <button class=\"edit-btn\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                  <title>edit</title>\n                  <path\n                    d=\"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </div>`;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\nclass ToDoList {\n  #taskList = [];\n\n  #name;\n\n  constructor(name) {\n    this.#name = name;\n  }\n\n  addTask(task) {\n    this.#taskList.push(task);\n  }\n\n  removeTask(task) {\n    this.#taskList.pop(task);\n  }\n\n  get tasks() {\n    return this.#taskList;\n  }\n\n  get length() {\n    return this.#taskList.length;\n  }\n\n  get name() {\n    return this.#name;\n  }\n\n  set name(newName) {\n    this.#name = newName;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/ToDoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoList */ \"./src/modules/ToDoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n\n\n\n\n\n// header\nconst menuButton = document.querySelector(\".burger-btn\");\nconst homeButton = document.querySelector(\".home-btn\");\n\n// main\nconst sidebar = document.querySelector(\".main-left\");\nconst taskView = document.querySelector(\".main-right\");\nconst tasksContainer = document.querySelector(\".tasks\");\nconst taskViewTitle = document.querySelector(\".current-proj-title\");\n\n// add task form\nconst addTaskButton = document.querySelector(\".add-task\");\nconst addTaskFormContainer = document.querySelector(\".form-container\");\nconst addTaskForm = document.querySelector(\".add-task-form\");\nconst cancelButton = document.querySelector(\".cancel-btn\");\n\n// default projects and project lists\nconst inboxProject = new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"inbox\", new _ToDoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"inbox\"));\nconst todayProject = new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"today\", new _ToDoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"today\"));\nconst thisWeekProject = new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"this week\", new _ToDoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"this week\"));\nconst sampleProject = new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"sample project\", new _ToDoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"sample\"));\nconst homeProjectList = new _ProjectList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst projectsProjectList = new _ProjectList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nhomeProjectList.add(inboxProject);\nhomeProjectList.add(todayProject);\nhomeProjectList.add(thisWeekProject);\nprojectsProjectList.add(sampleProject);\n\nconst sidebarMap = new Map();\nsidebarMap.set(\"home\", homeProjectList);\nsidebarMap.set(\"projects\", projectsProjectList);\n\nlet currentProjectList = homeProjectList;\nlet currentProject = inboxProject;\n\nfunction updateCurrentProject() {\n  const currentProjectName = document\n    .querySelector(\".selected\")\n    .dataset.projectName.replaceAll(\"-\", \" \");\n  currentProject = currentProjectList.get(currentProjectName);\n}\n\nfunction updateCurrentProjectList(element) {\n  const parentElement = element.closest(\".project-list-container\");\n  const currentProjectListName = parentElement.dataset.projectList;\n  currentProjectList = sidebarMap.get(currentProjectListName);\n}\n\nfunction updateTaskView() {\n  taskViewTitle.textContent = currentProject.name;\n  tasksContainer.replaceChildren();\n\n  const projectTasks = currentProject.toDoList;\n  projectTasks.tasks.forEach((task) => {\n    tasksContainer.innerHTML += task.taskHTML;\n  });\n\n  tasksContainer.appendChild(addTaskButton);\n}\n\n// click on sidebar projects\nsidebar.addEventListener(\"click\", (e) => {\n  const sideLink = e.target.closest(\".side-link\");\n  if (!sideLink) return;\n\n  document.querySelector(\".selected\").classList.toggle(\"selected\");\n  sideLink.classList.toggle(\"selected\");\n\n  updateCurrentProjectList(e.target);\n  updateCurrentProject();\n  updateTaskView();\n});\n\n// add task form\naddTaskButton.addEventListener(\"click\", () => {\n  addTaskFormContainer.style.display = \"block\";\n});\n\ncancelButton.addEventListener(\"click\", () => {\n  addTaskFormContainer.style.display = \"none\";\n});\n\naddTaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const formData = new FormData(addTaskForm);\n  const title = formData.get(\"title\");\n  const description = formData.get(\"description\");\n  const date = formData.get(\"due-date\");\n  const priority = formData.get(\"priority\");\n  const id = `${currentProject.name}-${currentProject.toDoList.length}`;\n  const task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, date, priority, id);\n  currentProject.toDoList.addTask(task);\n  updateTaskView();\n  addTaskFormContainer.style.display = \"none\";\n});\n\n\n//# sourceURL=webpack://todo/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;