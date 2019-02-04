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

/***/ "./src/buildLiveHash.js":
/*!******************************!*\
  !*** ./src/buildLiveHash.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\n\nfunction buildHash(coords, live) {\n  const hashCode = hashKey(coords);\n  live.set(hashCode, coords);\n}\n\nfunction buildLiveHash(liveCells) {\n  const live = new Map();\n  liveCells.forEach((item) => {\n    const x = item[0], y = item[1];\n    buildHash([x, y], live);\n  });\n  return live;\n}\n\nmodule.exports = buildLiveHash;\n\n\n//# sourceURL=webpack:///./src/buildLiveHash.js?");

/***/ }),

/***/ "./src/buildNeighboursHash.js":
/*!************************************!*\
  !*** ./src/buildNeighboursHash.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function buildNeighboursHash(live, neighboursLookup) {\n  const neighs = new Map();\n  live.forEach((item, index) => {\n    neighboursLookup.get(index).adjacent.forEach((currentItem) => {\n      if (neighs.has(currentItem)) {\n        neighs.get(currentItem).count++;\n      } else {\n        neighs.set(currentItem, { count: 1 });\n      }\n    });\n    // for the occasion where live cell with no live neighbours so not in neighs Map\n    if (!neighs.has(index)) {\n      neighs.set(index, { count: 0 });\n    }\n  });\n  return neighs;\n}\n\nmodule.exports = buildNeighboursHash;\n\n\n//# sourceURL=webpack:///./src/buildNeighboursHash.js?");

/***/ }),

/***/ "./src/buildNeighsLookup.js":
/*!**********************************!*\
  !*** ./src/buildNeighsLookup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\n\nfunction buildNeighsLookup(rows, cols) {\n  const neighs = new Map();\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const adj = [];\n      if (i - 1 >= 0) {\n        const key = hashKey([i - 1, j]);\n        adj.push(key);\n      }\n      if (i - 1 >= 0 && j - 1 >= 0) {\n        const key = hashKey([i - 1, j - 1]);\n        adj.push(key);\n      }\n      if (j - 1 >= 0) {\n        const key = hashKey([i, j - 1]);\n        adj.push(key);\n      }\n      if (i + 1 < rows && j - 1 >= 0) {\n        const key = hashKey([i + 1, j - 1]);\n        adj.push(key);\n      }\n      if (i + 1 < rows) {\n        const key = hashKey([i + 1, j]);\n        adj.push(key);\n      }\n      if (i + 1 < rows && j + 1 < cols) {\n        const key = hashKey([i + 1, j + 1]);\n        adj.push(key);\n      }\n      if (j + 1 < cols) {\n        const key = hashKey([i, j + 1]);\n        adj.push(key);\n      }\n      if (i - 1 >= 0 && j + 1 < cols) {\n        const key = hashKey([i - 1, j + 1]);\n        adj.push(key);\n      }\n      neighs.set(hashKey([i, j]), { adjacent: adj, coords: [i, j] });\n    }\n  }\n  return neighs;\n}\n\nmodule.exports = buildNeighsLookup;\n\n\n//# sourceURL=webpack:///./src/buildNeighsLookup.js?");

/***/ }),

/***/ "./src/hashKey.js":
/*!************************!*\
  !*** ./src/hashKey.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// spacial hash\nfunction hashKey(coord) {\n  const x = coord[0];\n  const y = coord[1];\n  return `${x},${y}`;\n}\n\nmodule.exports = hashKey;\n\n\n//# sourceURL=webpack:///./src/hashKey.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-env browser */\n// view readme.md for usage/ design notes\n\nconst buildLiveHash = __webpack_require__(/*! ./buildLiveHash */ \"./src/buildLiveHash.js\");\nconst buildNeighboursHash = __webpack_require__(/*! ./buildNeighboursHash */ \"./src/buildNeighboursHash.js\");\nconst { life } = __webpack_require__(/*! ./life */ \"./src/life.js\");\nconst buildNeighsLookup = __webpack_require__(/*! ./buildNeighsLookup */ \"./src/buildNeighsLookup.js\");\n\nconst canv = document.getElementById('life');\nconst ctx = canv.getContext('2d');\nctx.fillStyle = '#101010';\n\n// 'acorn' seed\nconst seed = [\n  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],\n];\n\n// max display size\nconst rows = 200;\nconst cols = 200;\n\nlet liveCells = buildLiveHash(seed);\nconst neighsLookup = buildNeighsLookup(rows, cols);\n\nfunction draw() {\n  const neighbours = buildNeighboursHash(liveCells, neighsLookup);\n  liveCells = life(liveCells, neighbours, neighsLookup);\n  ctx.clearRect(0, 0, 200, 200);\n  liveCells.forEach((item) => {\n    ctx.fillRect(item[0], item[1], 1, 1);\n  });\n  requestAnimationFrame(draw);\n}\n\nrequestAnimationFrame(draw);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/life.js":
/*!*********************!*\
  !*** ./src/life.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function survive(index, liveCells, neighbours) {\n  const live = liveCells;\n  const neighs = neighbours;\n  neighs.delete(index);\n  return { live, neighs };\n}\n\nfunction die(index, liveCells, neighbours) {\n  const live = liveCells;\n  const neighs = neighbours;\n  live.delete(index);\n  neighs.delete(index);\n  return { live, neighs };\n}\n\nfunction life(liveCells, neighbours, neighsLookup) {\n  let live = liveCells;\n  let neighs = neighbours;\n  live.forEach((item, index) => {\n    if (neighs.has(index)) {\n      if (neighs.get(index).count < 2 || neighs.get(index).count > 3) {\n        ({ live, neighs } = die(index, live, neighs));\n      }\n      if (neighs.has(index)) {\n        if (neighs.get(index).count === 2 || (neighs.get(index).count === 3)) {\n          ({ live, neighs } = survive(index, live, neighs));\n        }\n      }\n    }\n    return null;\n  });\n  // any remaining cells with count 3 must currently not be live, set live in Map\n  neighs.forEach((item, index) => {\n    if (item.count === 3) {\n      live.set(index, neighsLookup.get(index).coords);\n    }\n  });\n  // clear neighbours Map for next cycle\n  neighs.clear();\n  return live;\n}\n\nmodule.exports = {\n  life, survive, die,\n};\n\n\n//# sourceURL=webpack:///./src/life.js?");

/***/ })

/******/ });