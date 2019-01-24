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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/buildNeighbours.js":
/*!********************************!*\
  !*** ./src/buildNeighbours.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-env browser */\nconst hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\n\nfunction checkKey(coords, neighbours) {\n  const hashCode = hashKey(coords);\n  (neighbours.has(hashCode)) ? neighbours.get(hashCode).count++ : neighbours.set(hashCode, {\n    count: 1, coords });\n}\n\nfunction buildNeighbours(liveCells, rows, cols) {\n  const neighbours = new Map();\n  liveCells.forEach((item) => {\n    // find neighbours\n    const x = item[0], y = item[1];\n    if (x - 1 >= 0 && y - 1 >= 0) {\n      checkKey([x - 1, y - 1], neighbours);\n    }\n\n    if (x + 1 < rows && y + 1 < cols) {\n      checkKey([x + 1, y + 1], neighbours);\n    }\n\n    if (x - 1 >= 0 && y + 1 < cols) {\n      checkKey([x - 1, y + 1], neighbours);\n    }\n\n    if (x + 1 < rows && y - 1 >= 0) {\n      checkKey([x + 1, y - 1], neighbours);\n    }\n\n    if (y - 1 >= 0) {\n      checkKey([x, y - 1], neighbours);\n    }\n\n    if (x - 1 >= 0) {\n      checkKey([x - 1, y], neighbours);\n    }\n\n    if (x + 1 < rows) {\n      checkKey([x + 1, y], neighbours);\n    }\n\n    if (y + 1 < cols) {\n      checkKey([x, y + 1], neighbours);\n    }\n  });\n  return neighbours;\n}\n\nmodule.exports = buildNeighbours;\n\n\n//# sourceURL=webpack:///./src/buildNeighbours.js?");

/***/ }),

/***/ "./src/hashKey.js":
/*!************************!*\
  !*** ./src/hashKey.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-env browser */\n\n// spacial hash\nfunction hashKey(coord) {\n  const x = coord[0];\n  const y = coord[1];\n  return `${x}, ${y}`;\n}\n\nmodule.exports = hashKey;\n\n\n//# sourceURL=webpack:///./src/hashKey.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-env browser */\nconst life = __webpack_require__(/*! ./life */ \"./src/life.js\");\nconst buildNeighbours = __webpack_require__(/*! ./buildNeighbours */ \"./src/buildNeighbours.js\");\nconst populate = __webpack_require__(/*! ../src/populate */ \"./src/populate.js\");\n\nconst canv = document.getElementById('life');\nconst ctx = canv.getContext('2d');\n\n// let liveCells = populate(5, 5);\n// acorn\n\nlet liveCells = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];\n\nfunction draw() {\n  ctx.clearRect(0, 0, 200, 200);\n  const neighbours = buildNeighbours(liveCells, 200, 200);\n  liveCells = life(liveCells, neighbours);\n  ctx.fillStyle = '#101010';\n  for (let i = 0; i < liveCells.length; i++) {\n    ctx.fillRect(liveCells[i][0], liveCells[i][1], 1, 1);\n  }\n  requestAnimationFrame(draw);\n}\n\nrequestAnimationFrame(draw);\n\n/*\nfunction draw() {\n  ctx.clearRect(0, 0, 500, 500);\n  liveCells = life(liveCells, neighbours);\n  neighbours = buildNeighbours(liveCells, 100, 100);\n  ctx.fillStyle = '#101010';\n  for (let i = 0; i < liveCells.length; i++) {\n    ctx.fillRect(liveCells[i][0], liveCells[i][1], 1, 1);\n  }\n  requestAnimationFrame(draw);\n}\n\n// requestAnimationFrame(draw);\n*/\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/life.js":
/*!*********************!*\
  !*** ./src/life.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-env browser */\nconst hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\n\n// rules, assume all dead except for 2 cases\nfunction survives(cell, nextCells) {\n  return nextCells.push(cell);\n}\n\nfunction createCell(cell, nextCells) {\n  return nextCells.push(cell);\n}\n\nfunction life(liveCells, neighbours) {\n  const nextCells = [];\n  liveCells.slice().forEach((currentItem) => {\n    const cell = hashKey(currentItem);\n    if (neighbours.has(cell)) {\n      if (neighbours.get(cell).count === 2 || neighbours.get(cell).count === 3) {\n        survives(currentItem, liveCells, nextCells);\n      }\n      /*\n      // not required with current design\n      if (neighbours.get(cell).count < 2) {\n        diesUnderPoplation();\n      }\n      if (neighbours.get(cell).count > 3) {\n        diesOverPoplation();\n      }\n      */\n      neighbours.delete(cell);\n    }\n  });\n  for (let cell of neighbours) {\n    if (cell[1].count === 3) {\n      createCell(cell[1].coords, nextCells);\n    }\n  }\n  neighbours.clear();\n  return nextCells;\n}\n\nmodule.exports = life;\n\n\n//# sourceURL=webpack:///./src/life.js?");

/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// populate array with potential length rows*cols of randomly generated binary digits\nfunction populate(rows, cols) {\n  const grd = [];\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (Math.round(Math.random())) {\n        grd.push([i, j]);\n      }\n    }\n  }\n  return grd;\n}\n\nmodule.exports = populate;\n\n\n//# sourceURL=webpack:///./src/populate.js?");

/***/ })

/******/ });