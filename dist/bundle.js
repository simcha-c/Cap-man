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
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n\n  constructor() {\n    let canvas = document.getElementById('maze-canvas');\n    canvas.height = 700;\n    canvas.width = 600;\n\n    let c = canvas.getContext(\"2d\");\n    c.fillStyle = \"#000\";\n    c.fillRect (0, 0, 600, 700);\n    this.ctx = c;\n    this.drawBoard();\n  }\n\n  drawBoard() {\n    // border\n    const radius = 10;\n    // TOP HALF\n    this.ctx.beginPath();\n    this.ctx.moveTo(0, 270);\n    // left middle part\n    this.ctx.arcTo(125, 270, 125, 260, radius);\n    this.ctx.arcTo(125, 200, 115, 200, radius);\n    this.ctx.arcTo(20, 200, 20, 190, radius);\n    // top part\n    this.ctx.arcTo(20, 20, 100, 20, radius);\n    this.ctx.arcTo(290, 20, 290, 40, radius);\n    this.ctx.arcTo(290, 100, 310, 100, radius);\n    this.ctx.arcTo(310, 100, 310, 60, radius);\n    this.ctx.arcTo(310, 20, 315, 20, radius);\n    this.ctx.arcTo(580, 20, 580, 100, radius);\n    this.ctx.arcTo(580, 150, 580, 200, radius);\n    // right middle part\n    this.ctx.arcTo(580, 200, 500, 200, radius);\n    this.ctx.arcTo(475, 200, 475, 210, radius);\n    this.ctx.arcTo(475, 270, 480, 270, radius);\n    this.ctx.arcTo(600, 270, 600, 310, 0);\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // BOTTOM HALF\n    this.ctx.beginPath();\n    this.ctx.moveTo(0, 330);\n    this.ctx.arcTo(125, 330, 125, 340, radius);\n    this.ctx.arcTo(125, 400, 115, 400, radius);\n    this.ctx.arcTo(20, 400, 20, 410, radius);\n\n    this.ctx.arcTo(20, 520, 30, 520, radius);\n    this.ctx.arcTo(60, 520, 60, 530, radius);\n    this.ctx.arcTo(60, 530, 50, 530, radius);\n    this.ctx.arcTo(60, 550, 50, 550, radius);\n    this.ctx.arcTo(20, 550, 20, 560, radius);\n    this.ctx.arcTo(20, 680, 30, 680, radius);\n    this.ctx.arcTo(580, 680, 580, 670, radius);\n    // going up on right side\n    this.ctx.arcTo(580, 550, 570, 550, radius);\n    this.ctx.arcTo(540, 550, 540, 540, radius);\n    this.ctx.arcTo(540, 520, 550, 520, radius);\n    this.ctx.arcTo(580, 520, 580, 510, radius);\n    this.ctx.arcTo(580, 400, 570, 400, radius);\n    this.ctx.arcTo(475, 400, 475, 390, radius);\n    this.ctx.arcTo(475, 330, 480, 330, radius);\n    this.ctx.arcTo(600, 330, 600, 330, 0);\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n  // TOP-LEFT SIDE:\n    // top-left box (top-left)\n    this.ctx.beginPath();\n    this.ctx.moveTo(90, 60);\n    this.ctx.arcTo(125, 60, 125, 70, radius);\n    this.ctx.arcTo(125, 100, 120, 100, radius);\n    this.ctx.arcTo(60, 100, 60, 90, radius);\n    this.ctx.arcTo(60, 60, 85, 60, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // top-left box (bottom-left)\n    this.ctx.beginPath();\n    this.ctx.moveTo(90, 140);\n    this.ctx.arcTo(125, 140, 125, 150, radius);\n    this.ctx.arcTo(125, 160, 120, 160, radius);\n    this.ctx.arcTo(60, 160, 60, 150, radius);\n    this.ctx.arcTo(60, 140, 85, 140, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // top-left box (top-right)\n    this.ctx.beginPath();\n    this.ctx.moveTo(190, 60);\n    this.ctx.arcTo(250, 60, 250, 70, radius);\n    this.ctx.arcTo(250, 100, 240, 100, radius);\n    this.ctx.arcTo(165, 100, 165, 90, radius);\n    this.ctx.arcTo(165, 60, 180, 60, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // TOP-RIGHT BOXES:\n    // top-right box (top-right)\n    this.ctx.beginPath();\n    this.ctx.moveTo(500, 60);\n    this.ctx.arcTo(540, 60, 540, 70, radius);\n    this.ctx.arcTo(540, 100, 535, 100, radius);\n    this.ctx.arcTo(475, 100, 475, 90, radius);\n    this.ctx.arcTo(475, 60, 485, 60, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // top-right box (bottom-right)\n    this.ctx.beginPath();\n    this.ctx.moveTo(500, 140);\n    this.ctx.arcTo(540, 140, 540, 150, radius);\n    this.ctx.arcTo(540, 160, 535, 160, radius);\n    this.ctx.arcTo(475, 160, 475, 150, radius);\n    this.ctx.arcTo(475, 140, 485, 140, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // top-left box (top-right)\n    this.ctx.beginPath();\n    this.ctx.moveTo(400, 60);\n    this.ctx.arcTo(435, 60, 435, 70, radius);\n    this.ctx.arcTo(435, 100, 425, 100, radius);\n    this.ctx.arcTo(350, 100, 350, 90, radius);\n    this.ctx.arcTo(350, 60, 360, 60, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n\n\n    // MIDDLE PIECES\n\n    // left\n    this.ctx.beginPath();\n    this.ctx.moveTo(165, 180);\n    this.ctx.arcTo(165, 140, 175, 140, radius);\n    this.ctx.arcTo(185, 140, 185, 150, radius);\n    this.ctx.arcTo(185, 200, 190, 200, radius);\n    this.ctx.arcTo(250, 200, 250, 210, radius);\n    this.ctx.arcTo(250, 220, 240, 220, radius);\n    this.ctx.arcTo(185, 220, 185, 230, radius);\n    this.ctx.arcTo(185, 270, 175, 270, radius);\n    this.ctx.arcTo(165, 270, 165, 260, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // right\n    this.ctx.beginPath();\n    this.ctx.moveTo(435, 180);\n    this.ctx.arcTo(435, 140, 420, 140, radius);\n    this.ctx.arcTo(415, 140, 415, 150, radius);\n    this.ctx.arcTo(415, 200, 410, 200, radius);\n    this.ctx.arcTo(350, 200, 350, 210, radius);\n    this.ctx.arcTo(350, 220, 360, 220, radius);\n    this.ctx.arcTo(415, 220, 415, 230, radius);\n    this.ctx.arcTo(415, 270, 420, 270, radius);\n    this.ctx.arcTo(435, 270, 435, 260, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // middle\n    this.ctx.beginPath();\n    this.ctx.moveTo(300, 140);\n    this.ctx.arcTo(375, 140, 375, 150, radius);\n    this.ctx.arcTo(375, 160, 365, 160, radius);\n    this.ctx.arcTo(310, 160, 310, 170, radius);\n    this.ctx.arcTo(310, 220, 300, 220, radius);\n    this.ctx.arcTo(290, 220, 290, 210, radius);\n    this.ctx.arcTo(290, 160, 280, 160, radius);\n    this.ctx.arcTo(225, 160, 225, 150, radius);\n    this.ctx.arcTo(225, 140, 235, 140, radius);\n    this.ctx.closePath();\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n    this.ctx.stroke();\n\n    // mid-box\n    this.ctx.beginPath();\n    this.ctx.moveTo(300, 140);\n\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.lineWidth = 3;\n\n    this.ctx.stroke();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n\n// const topStraightLine = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX, startY);\n//   c.lineTo(startX+21.5, startY);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// topStraightLine(0, 0);\n//\n// // bottom line\n// const bottomStraightLine = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX-1, startY+22);\n//   c.lineTo(startX+23, startY+22);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// bottomStraightLine(40, 0);\n//\n// // right line\n// const rightLine = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX+21, startY);\n//   c.lineTo(startX+21, startY+23);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// rightLine(80, 0);\n//\n// // left line\n// const leftLine = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX, startY);\n//   c.lineTo(startX, startY+23);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// leftLine(120, 0);\n//\n// // top-left curve\n// const leftTopCurve = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   let radius = 10;\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX+21.5, startY);\n//   c.arcTo(startX, startY, startX, startY+11.5, radius);\n//   c.arcTo(startX, startY+22.5, startX, startY+22.5, 0);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// leftTopCurve(160, 0);\n//\n// // top-right curve\n// const rightTopCurve = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   let radius = 10;\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX, startY);\n//   c.arcTo(startX+22, startY, startX+22, startY+11.5, radius);\n//   c.arcTo(startX+22, startY+22.5, startX+22, startY+22.5, 0);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// rightTopCurve(200, 0);\n//\n// // bottom-left curve\n// const rightBottomCurve = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   let radius = 10;\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX-1, startY+21.5);\n//   c.arcTo(startX+21.5, startY+21.5, startX+21.5, startY+11.5, radius);\n//   c.arcTo(startX+21.5, startY, startX+21.5, startY, 0);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// rightBottomCurve(240, 0);\n//\n// // bottom-left curve\n// const leftBottomCurve = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   let radius = 10;\n//   c.fillRect (startX, startY, 21.5, 22.5);\n//   c.beginPath();\n//   c.moveTo(startX, startY);\n//   c.arcTo(startX, startY+23, startX+10, startY+23, radius);\n//   c.arcTo(startX+22, startY+23, startX+22, startY+23, 0);\n//   c.strokeStyle = \"blue\";\n//   c.lineWidth = 3;\n//   c.stroke();\n// };\n// leftBottomCurve(280, 0);\n//\n// const empty = (startX, startY) => {\n//   c.fillStyle = \"#fff\";\n//   c.fillRect (startX, startY, 21.5, 22.5);\n// };\n// empty(0, 0);\n// //\n// // const border = (startX, startY) => {\n// //   c.fillStyle = \"#fff\";\n// //   c.fillRect (startX, startY, 21.5, 22.5);\n// // };\n// // border(0, 0);\n//\n// leftTopCurve(21.5, 22.5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// //\n\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pacman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pacman */ \"./lib/pacman.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./lib/board.js\");\n\n\n\nclass Game {\n  constructor() {\n    let canvas = document.getElementById('maze-canvas');\n    let c = canvas.getContext(\"2d\");\n    this.pacman = new _pacman__WEBPACK_IMPORTED_MODULE_0__[\"default\"](c, 140, 80);\n    this.ctx = c;\n\n    this.animate = this.animate.bind(this);\n  }\n\n  animate() {\n    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);\n    new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.pacman.draw();\n    requestAnimationFrame(this.animate);\n  }\n\n}\n\nconst newGame = new Game();\n\nnewGame.animate();\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/pacman.js":
/*!***********************!*\
  !*** ./lib/pacman.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pacman {\n  constructor(c, x, y) {\n    this.x = x;\n    this.y = y;\n    this.ctx = c;\n    this.dir = [1, 0];\n\n    document.addEventListener(\"keydown\", (e) => this.press(e));\n\n    this.movePacman = this.movePacman.bind(this);\n    // this.draws = this.draw.bind(this);\n    this.validMove = this.validMove.bind(this);\n  }\n\n  press(e) {\n    switch (e.key) {\n      case 'ArrowUp':\n        this.changeDir('ArrowUp');\n        break;\n      case 'ArrowDown':\n        this.changeDir('ArrowDown');\n        break;\n      case 'ArrowRight':\n        this.changeDir('ArrowRight');\n        break;\n      case 'ArrowLeft':\n        this.changeDir('ArrowLeft');\n        break;\n      case 'p':\n        console.log(`pos: x:${this.x}, y:${this.y}`);\n        break;\n      default:\n        console.log(e.key);\n    }\n  }\n\n  changeDir(dir) {\n    if (dir === 'ArrowUp') {\n      if (this.y !== 40) { this.dir = [0, -1]; }\n    } else if (dir === 'ArrowDown') {\n      if (this.y !== 660) { this.dir = [0, 1]; }\n    } else if (dir === 'ArrowLeft') {\n      if (this.x !== 40) { this.dir = [-1, 0]; }\n    } else if (dir === 'ArrowRight') {\n      if (this.x !== 560) { this.dir = [1, 0]; }\n    }\n  }\n\n  validMove() {\n    if (this.x > 560 || this.x < 40 || this.y < 40 || this.y > 660) {\n      this.dir = [0, 0];\n    }\n    if (this.x > 560) { this.x = 560; }\n    if (this.x < 40) { this.x = 40; }\n    if (this.y < 40) { this.y = 40; }\n    if (this.y > 660) { this.y = 660; }\n  }\n\n  movePacman() {\n    this.validMove();\n    this.x += this.dir[0];\n    this.y += this.dir[1];\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, 16, 0, 2*Math.PI);\n    this.ctx.fillStyle = \"yellow\";\n    this.ctx.fill();\n    this.movePacman();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pacman);\n\n\n//# sourceURL=webpack:///./lib/pacman.js?");

/***/ })

/******/ });