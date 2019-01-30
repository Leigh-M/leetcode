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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-env browser */\nconst life = __webpack_require__(/*! ./life.js */ \"./src/life.js\");\n\nconst canv = document.getElementById('life');\nconst ctx = canv.getContext('2d');\n\nfunction createGrid(rows, cols) {\n  const grd = [];\n  for (let i = 0; i < rows; i++) {\n    grd[i] = [];\n    for (let j = 0; j < cols; j++) {\n      grd[i][j] = 0;\n    }\n  }\n  return grd;\n}\n\n// create all zero's grid\nconst grid = createGrid(200, 200);\n\n// 'acorn' seed as 1's\nfunction setSeed(seed, targerArr) {\n  const grd = targerArr;\n  for (let i = 0; i < seed.length; i++) {\n    grd[seed[i][0]][seed[i][1]] = 1;\n  }\n  return grd;\n}\n\n// 'acorn' seed initial start\nconst seed = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];\n\nconst newGrid = setSeed(seed, grid);\n\nfunction draw() {\n  ctx.clearRect(0, 0, 200, 200);\n  life(newGrid);\n  ctx.fillStyle = '#101010';\n  for (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[0].length; j++) {\n      if (grid[i][j] === 1) {\n        ctx.fillRect(i, j, 1, 1);\n      }\n    }\n  }\n  requestAnimationFrame(draw);\n}\n\nrequestAnimationFrame(draw);\n\n// to test draw function\nmodule.exports = draw;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/life.js":
/*!*********************!*\
  !*** ./src/life.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-env browser */\n\n// copy required to iterate over and mutate grid, 3x faster than JSON.stringify(JSON.parse(ar))\nfunction deepCopy(p, c) {\n  c = c || [];\n  for (const [index, value] of p.entries()) {\n    if (Array.isArray(value)) {\n      c[index] = [];\n      deepCopy(value, c[index]);\n    } else c.push(value);\n  }\n  return c;\n}\n\nfunction life(grd) {\n  const copy = deepCopy(grd);\n  const cols = grd[0].length;\n  const rows = grd.length;\n  let count = 0;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      count = 0;\n      // Without wrapping, includes edges but not off-canvas\n      if (i - 1 >= 0 && j - 1 >= 0) {\n        if (copy[i - 1][j - 1] === 1) count++;\n      }\n      if (i + 1 < rows && j + 1 < cols) {\n        if (copy[i + 1][j + 1] === 1) count++;\n      }\n      if (i - 1 >= 0 && j + 1 < cols) {\n        if (copy[i - 1][j + 1] === 1) count++;\n      }\n      if (i + 1 < rows && j - 1 >= 0) {\n        if (copy[i + 1][j - 1] === 1) count++;\n      }\n      if (j - 1 >= 0) {\n        if (copy[i][j - 1] === 1) count++;\n      }\n      if (i - 1 >= 0) {\n        if (copy[i - 1][j] === 1) count++;\n      }\n      if (i + 1 < rows) {\n        if (copy[i + 1][j] === 1) count++;\n      }\n      if (j + 1 < cols) {\n        if (copy[i][j + 1] === 1) count++;\n      }\n      if (copy[i][j] === 1) {\n        grd[i][j] = (count >= 2 && count <= 3) ? 1 : 0;\n      }\n      if (copy[i][j] === 0) {\n        if (count === 3) grd[i][j] = 1;\n      }\n    }\n  }\n  return grd;\n}\n\nmodule.exports = life;\n\n\n//# sourceURL=webpack:///./src/life.js?");

/***/ })

/******/ });