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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/board.js":
/*!**********************!*\
  !*** ./lib/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./lib/tile.js\");\n\n\nclass Board {\n\n  constructor() {\n    let canvas = document.getElementById('maze-canvas');\n    canvas.height = 700;\n    canvas.width = 600;\n\n    let c = canvas.getContext(\"2d\");\n    c.fillStyle = \"black\";\n    c.fillRect (0, 0, 600, 700);\n    this.ctx = c;\n    this.drawBoard();\n  }\n\n  drawBoard() {\n    let grid = [];\n    for (let col = 0; col < 28; col++) {\n      for (let row = 0; row < 31; row++) {\n        let info = _tile__WEBPACK_IMPORTED_MODULE_0__[\"grid\"][row][col];\n        let color;\n        if (info === 0) {color = 'blue';}\n        if (('1234'.includes(info)) ) {color = 'black';}\n        this.ctx.beginPath();\n        this.ctx.fillStyle = color;\n        this.ctx.rect(((col * 20)+20), ((row * 21)+24.5), (20), (21.5));\n        this.ctx.fill();\n\n        if (info === 1) {\n          this.ctx.beginPath();\n          this.ctx.fillStyle = 'yellow';\n          this.ctx.arc( ((col * 20)+30), ((row * 21)+35), 2, 0, 2*Math.PI, false);\n          this.ctx.fill();\n        }\n\n        if (info === 2) {\n          this.ctx.beginPath();\n          this.ctx.fillStyle = 'yellow';\n          this.ctx.arc( ((col * 20)+30), ((row * 21)+34), 7, 0, 2*Math.PI, false);\n          this.ctx.fill();\n        }\n        if (info === 5) {\n          this.ctx.beginPath();\n          this.ctx.fillStyle = 'white';\n          this.ctx.rect(((col * 20)+20), ((row * 21)+30), (20), (3));\n          this.ctx.fill();\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pacman1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pacman1 */ \"./lib/pacman1.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./lib/board.js\");\n\n\n\nclass Game {\n  constructor() {\n    let canvas = document.getElementById('maze-canvas');\n    let c = canvas.getContext(\"2d\");\n    this.pacman = new _pacman1__WEBPACK_IMPORTED_MODULE_0__[\"default\"](c, 300, 507.5);\n    this.ctx = c;\n\n    this.animate = this.animate.bind(this);\n  }\n\n  animate() {\n    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);\n    new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.pacman.draw();\n    requestAnimationFrame(this.animate);\n  }\n\n}\n\nconst newGame = new Game();\n\nnewGame.animate();\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/pacman1.js":
/*!************************!*\
  !*** ./lib/pacman1.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./lib/tile.js\");\n\n\nclass Pacman {\n  constructor(c, x, y) {\n    this.x = x;\n    this.y = y;\n    this.xPos = 10;\n    this.yPos = 10.5;\n    this.ctx = c;\n    this.dir = [1, 0];\n    this.references = {0: 'wall', 1: 'dot', 2: 'powerPellet', 3: 'empty'};\n\n    document.addEventListener(\"keydown\", (e) => this.press(e));\n    this.movePacman = this.movePacman.bind(this);\n    this.validMove = this.validMove.bind(this);\n  }\n\n  press(e) {\n    switch (e.key) {\n      case 'ArrowUp':\n        // if (this.changing('ArrowUp')) {\n          this.changeDir('ArrowUp');\n        // }\n        break;\n      case 'ArrowDown':\n        // if (this.changing('ArrowDown')) {\n          this.changeDir('ArrowDown');\n        // }\n        break;\n      case 'ArrowRight':\n        // if (this.changing('ArrowRight')) {\n          this.changeDir('ArrowRight');\n        // }\n        break;\n      case 'ArrowLeft':\n        // if (this.changing('ArrowLeft')) {\n          this.changeDir('ArrowLeft');\n        // }\n        break;\n      case 'p':\n        console.log(`pos: x:${this.x}, y:${this.y}`);\n        break;\n      default:\n        console.log(e.key);\n    }\n  }\n\n  movePacman() {\n    this.validMove();\n    this.x += this.dir[0];\n    this.y += this.dir[1];\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc((this.x + this.xPos), (this.y + this.yPos), 13, 0, 2*Math.PI);\n    this.ctx.fillStyle = \"yellow\";\n    this.ctx.fill();\n    this.movePacman();\n  }\n\n  getPos() {\n    let x = Math.floor((this.x - 20) / 20);\n    let y = Math.floor((this.y - 24.5) / 21);\n    return [x, y];\n  }\n\n  validMove() {\n    let pos = this.getPos();\n    let nextPosInfo = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getNextPosInfo\"](pos, this.dir);\n    let currentPosInfo = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getPosInfo\"](pos);\n    if (this.references[nextPosInfo] === \"wall\") {\n      this.dir = [0, 0];\n    } else if (this.references[currentPosInfo] === \"dot\" || this.references[currentPosInfo] === \"powerPellet\") {\n      _tile__WEBPACK_IMPORTED_MODULE_0__[\"changeTile\"](pos, 3);\n    }\n  }\n\n  changeDir(dir) {\n    let pos = this.getPos();\n    if (dir === \"ArrowUp\") {\n      let nextDirPos = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getNextPosInfo\"](pos, [0,-1]);\n      if (nextDirPos !== 0) {\n        this.dir = [0, -1];\n        this.xPos = 10;\n        this.yPos = -10.5;\n      }\n    } else if (dir === \"ArrowDown\") {\n      let nextDirPos = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getNextPosInfo\"](pos, [0, 1]);\n      if (nextDirPos !== 0) {\n        this.dir = [0, 1];\n        this.xPos = 10;\n        this.yPos = 10.5;\n      }\n    } else if (dir === \"ArrowRight\") {\n      let nextDirPos = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getNextPosInfo\"](pos, [1, 0]);\n      if (nextDirPos !== 0) {\n        this.dir = [1, 0];\n        this.xPos = 10;\n        this.yPos = 10.5;\n      }\n    } else if (dir === \"ArrowLeft\") {\n      let nextDirPos = _tile__WEBPACK_IMPORTED_MODULE_0__[\"getNextPosInfo\"](pos, [-1,0]);\n      if (nextDirPos !== 0) {\n        this.dir = [-1,0];\n        this.xPos = -10;\n        this.yPos = 10.5;\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pacman);\n\n\n//# sourceURL=webpack:///./lib/pacman1.js?");

/***/ }),

/***/ "./lib/tile.js":
/*!*********************!*\
  !*** ./lib/tile.js ***!
  \*********************/
/*! exports provided: grid, calculateEatingPos, calculateMovingPos, getPosInfo, getNextPosInfo, changeTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grid\", function() { return grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateEatingPos\", function() { return calculateEatingPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateMovingPos\", function() { return calculateMovingPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosInfo\", function() { return getPosInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextPosInfo\", function() { return getNextPosInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTile\", function() { return changeTile; });\nconst grid = [\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 1\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 2\n  [0, 2, 0, 3, 3, 0, 1, 0, 3, 3, 3, 0, 1, 0, 0, 1, 0, 3, 3, 3, 0, 1, 0, 3, 3, 0, 2, 0], // 3\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 4\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 5\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 6\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 7\n  [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0], // 8\n  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 9\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 10\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 11\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 0, 0, 0, 5, 5, 0, 0, 0, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 12\n  [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 13\n  [4, 3, 3, 3, 3, 3, 1, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 1, 3, 3, 3, 3, 3, 4], // 14\n  [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 15\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 16\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 17\n  [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3], // 18\n  [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 19\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 20\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 21\n  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 22\n  [0, 2, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 0], // 23\n  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], // 24\n  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], // 25\n  [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0], // 26\n  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 27\n  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 28\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 29\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 30\n];\n\n\nconst calculateEatingPos = (pos) => {\n  let x = Math.floor((pos[0] - 16) / (560 / 28));\n  let y = Math.floor((pos[1] - 16) / (660 / 31));\n  return [x, y];\n};\n\nconst calculateMovingPos = (pos) => {\n  let x = Math.ceil((pos[0] - 16) / (560 / 28));\n  let y = Math.ceil((pos[1] - 16) / (660 / 31));\n  return [x, y];\n};\n\nconst getPosInfo = (pos) => {\n  return grid[pos[1]][pos[0]];\n};\n\nconst getNextPosInfo = (pos, dir) => {\n  // debugger\n  let col = pos[0] + dir[0];\n  let row = pos[1] + dir[1];\n  // debugger\n  return grid[row][col];\n};\n\nconst changeTile = (pos, newVal) => {\n  grid[pos[1]][pos[0]] = newVal;\n};\n\n\n// [0,-1] -> up\n// [0, 1] -> down\n// [1, 0] -> right\n// [-1,0] -> left\n\n\n\n\n\n\n//\n\n\n//# sourceURL=webpack:///./lib/tile.js?");

/***/ })

/******/ });