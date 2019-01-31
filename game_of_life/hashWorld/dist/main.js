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

eval("/* eslint-env browser */\n/* eslint-disable no-param-reassign */\n\nconst hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\n\nfunction buildNeighbours(Cell, rows, cols) {\n  const neighbours = [];\n  const cell = Cell;\n  const x = cell[0];\n  const y = cell[1];\n  let key = '';\n  // ensure within display border\n  if (x - 1 >= 0) {\n    key = hashKey([x - 1, y]);\n    neighbours.push(key);\n  }\n  if (x - 1 >= 0 && y - 1 >= 0) {\n    key = hashKey([x - 1, y - 1]);\n    neighbours.push(key);\n  }\n  if (y - 1 >= 0) {\n    key = hashKey([x, y - 1]);\n    neighbours.push(key);\n  }\n  if (x + 1 < rows && y - 1 >= 0) {\n    key = hashKey([x + 1, y - 1]);\n    neighbours.push(key);\n  }\n  if (x + 1 < rows) {\n    key = hashKey([x + 1, y]);\n    neighbours.push(key);\n  }\n  if (x + 1 < rows && y + 1 < cols) {\n    key = hashKey([x + 1, y + 1]);\n    neighbours.push(key);\n  }\n  if (y + 1 < cols) {\n    key = hashKey([x, y + 1]);\n    neighbours.push(key);\n  }\n  if (x - 1 >= 0 && y + 1 < cols) {\n    key = hashKey([x - 1, y + 1]);\n    neighbours.push(key);\n  }\n  return neighbours;\n}\n\nmodule.exports = buildNeighbours;\n\n\n//# sourceURL=webpack:///./src/buildNeighbours.js?");

/***/ }),

/***/ "./src/createWorld.js":
/*!****************************!*\
  !*** ./src/createWorld.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createEmptyWorld(rows, cols) {\n  const grd = [];\n  for (let i = 0; i < rows; i++) {\n    grd[i] = [];\n    for (let j = 0; j < cols; j++) {\n      grd[i][j] = 0;\n    }\n  }\n  return grd;\n}\n\nfunction setSeed(seed, target) {\n  const grd = target;\n  for (let i = 0; i < seed.length; i++) {\n    grd[seed[i][0]][seed[i][1]] = 1;\n  }\n  return grd;\n}\n\n/*\nconsole.log(createList([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0],\n  [0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0]]));\n*/\n\nmodule.exports = { createEmptyWorld, setSeed };\n\n\n//# sourceURL=webpack:///./src/createWorld.js?");

/***/ }),

/***/ "./src/createWorldHash.js":
/*!********************************!*\
  !*** ./src/createWorldHash.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const hashKey = __webpack_require__(/*! ./hashKey */ \"./src/hashKey.js\");\nconst buildNeighbours = __webpack_require__(/*! ./buildNeighbours */ \"./src/buildNeighbours.js\");\n\nfunction createWorldHash(grid) {\n  const world = new Map();\n  const rows = grid.length;\n  const cols = grid[0].length;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (grid[i][j] === 1) {\n        world.set(hashKey([i, j]), {\n          live: true,\n          coords: [i, j],\n          neighbours: buildNeighbours([i, j], rows, cols),\n          liveNeighbours: 0,\n        });\n      } else {\n        world.set(hashKey([i, j]), {\n          live: false,\n          coords: [i, j],\n          neighbours: buildNeighbours([i, j], rows, cols),\n          liveNeighbours: 0,\n        });\n      }\n    }\n  }\n  return world;\n}\n\nmodule.exports = createWorldHash;\n\n\n//# sourceURL=webpack:///./src/createWorldHash.js?");

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

eval("/* eslint-env browser */\n// view readme.md for usage/ design notes\nconst { createEmptyWorld, setSeed } = __webpack_require__(/*! ./createWorld */ \"./src/createWorld.js\");\nconst createWorldHash = __webpack_require__(/*! ./createWorldHash */ \"./src/createWorldHash.js\");\nconst life = __webpack_require__(/*! ./life */ \"./src/life.js\");\n\nconst canv = document.getElementById('life');\nconst ctx = canv.getContext('2d');\nctx.fillStyle = '#101010';\n\nconst world = createEmptyWorld(200, 200);\n\nconst seed = [\n  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],\n];\n\nconst seeded = setSeed(seed, world);\nlet worldHash = createWorldHash(seeded);\n\nfunction draw() {\n  const liveCells = [];\n  worldHash.forEach((item) => {\n    if (item.live === true) liveCells.push(item.coords);\n  });\n  ctx.clearRect(0, 0, 200, 200);\n  liveCells.forEach((item) => {\n    ctx.fillRect(item[0], item[1], 1, 1);\n  });\n  worldHash = life(worldHash);\n  requestAnimationFrame(draw);\n}\nrequestAnimationFrame(draw);\n\n// toDo:\n// integers as keys of Map\n// array version (integer keys)\n// memoized version of hashLive\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/life.js":
/*!*********************!*\
  !*** ./src/life.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function liveLogic(it, ind, World) {\n  const world = World;\n  function die() {\n    world.get(ind).live = false;\n    world.get(ind).liveNeighbours = 0;\n    return world;\n  }\n  function survive() {\n    world.get(ind).liveNeighbours = 0;\n    return world;\n  }\n\n  (it.liveNeighbours < 2 || it.liveNeighbours > 3) ? die() : survive();\n  return world;\n}\n\nfunction deadLogic(it, ind, World) {\n  const world = World;\n  if (it.liveNeighbours === 3) {\n    world.get(ind).live = true;\n    world.get(ind).liveNeighbours = 0;\n  }\n  if (it.liveNeighbours < 3 || it.liveNeighbours > 3) {\n    world.get(ind).liveNeighbours = 0;\n  }\n  return world;\n}\n\nfunction life(worldHash) {\n  const world = worldHash;\n  // cycle through cells, check all neighbours for live status -> liveCount++\n  world.forEach((item, index) => {\n    item.neighbours.forEach((key) => {\n      if (world.get(key).live === true) {\n        world.get(index).liveNeighbours++;\n      }\n    });\n  });\n  world.forEach((itm, ind) => {\n    if (itm.live === true) liveLogic(itm, ind, world);\n    if (itm.live === false) deadLogic(itm, ind, world);\n  });\n  return world;\n}\n\nmodule.exports = life;\n\n\n//# sourceURL=webpack:///./src/life.js?");

/***/ })

/******/ });