let started = false;

import Ghost from './ghost';
import Pacman from './pacman';
import Board from './board';
import Sound from './sound';

class Game {
  constructor(sprite) {
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    this.board = new Board();
    window.tile = this.board.tile;
    this.pacman = new Pacman(c, 300, 507.5, this.board.tile);
    this.ghosts = [];
    window.ghosts = this.ghosts;
    this.ctx = c;
    this.lives = 3;
    this.gameOver = false;
    this.level = 1;
    this.firstAnimation = true;
    this.sprite = sprite;
    this.death = new Sound("assets/sounds/pacman_death.wav");
    this.eatGhost = new Sound("assets/sounds/pacman_eat_ghost.wav");
    this.beginning = new Sound("assets/sounds/pacman_beginning.wav");
    this.chomp = new Sound("assets/sounds/pacman_chomp.wav");

    this.count = 0;

    this.createGhosts();
    this.animate = this.animate.bind(this);
  }

  createGhosts() {
    let colors = ['red', 'pink', 'blue', 'orange'];
    let posArr = [[1, 26], [26, 1], [1, 1], [26, 26]];
    for (var i = 0; i < 4; i++) {
      let pos = posArr[i];
      let newGhost = new Ghost(this.ctx, pos[0], pos[1], colors[i], this.level, this.board.tile, this.sprite, i);
      this.ghosts.push(newGhost);
    }
  }

  checkPacCollision() {
    let pacPos = this.pacman.getPos();
    this.ghosts.forEach(ghost => {
      let gPos = ghost.getPos();
      if (gPos[0] === pacPos[0] && gPos[1] === pacPos[1] ) {
        if (ghost.eatable) {
          this.eatGhost.play();
          ghost.x = (13 * 20) + 20;
          ghost.y = (14 * 21) + 24.5;
          ghost.dir = [0, -1];
          this.pacman.score += 150;
        } else {
          this.lives -= 1;
          this.pacman.goToStartingPos();
          this.ghosts.forEach(ghost => { ghost.takeAwayLife(); });
          if (this.lives === 0) { this.gameOver = true; }
        }
      }
    });
  }

  checkPacPower() {
    if (this.pacman.power > 0 && this.pacman.power < 220) {
      this.ghosts.forEach(ghost => { ghost.eatable = true; });
    } else if (this.pacman.power === 220){
      this.ghosts.forEach(ghost => { ghost.eatable = false; });
    }
  }

  nextLevel() {
    if (this.pacman.levelWon) {
      this.pacman.levelWon = false;
      this.pacman.dots = 242;
      this.level += 1;
      this.board = new Board();
      this.pacman.tile = this.board.tile;
      this.pacman.goToStartingPos();
      this.ghosts = [];
      this.createGhosts();
    }
  }

  drawLife(num) {
    this.ctx.beginPath();
    this.ctx.arc(320 + (28 * num), 695, 12, 0.2 * Math.PI, 1.8 * Math.PI);
    this.ctx.lineTo(320 + (28 * num), 695);
    this.ctx.closePath();
    this.ctx.fillStyle = "#FF0";
    this.ctx.fill();
  }

  gameOverScreen() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
    this.ctx.fillRect (0, 0, 600, 715);

    this.ctx.font = "60px PacFontCrack";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText('GAMEOVER', 105, 275);

    this.ctx.font = "30px OrbitronRegular";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`SCORE: ${this.pacman.score}`, 200, 375);

    this.ctx.font = "18px OrbitronRegular";
    this.ctx.fillStyle = "white";
    this.ctx.fillText('Press Enter to start over', 180, 630);
    started = false;
  }

  animate() {
    this.nextLevel();
    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);
    this.board.drawBoard();
    this.pacman.draw();
    this.ghosts.forEach(ghost => {
      ghost.draw();
    });
    this.ctx.font = "18px OrbitronRegular";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`LIVES:`, 230, 702);
    for (let i = 0; i < this.lives; i++) {
      this.drawLife(i);
    }
    this.ctx.fillText(`LEVEL:  ${this.level}`, 475, 702);
    this.checkPacCollision();
    this.checkPacPower();
    if (!this.gameOver) {
      if (this.firstAnimation) {
        this.firstAnimation = false;
        this.beginning.play();
        setTimeout(() => requestAnimationFrame(this.animate), 4000);
      } else {
        this.count += 1;
        if (this.count === 1) {
          this.chomp.play();
        } else if (this.count === 60) {
          this.count = 0;
        }
        requestAnimationFrame(this.animate);
      }
    } else {
      this.death.play();
      this.gameOverScreen();
    }
  }

}

let sprite = new Image();
sprite.src = 'assets/images/pacman_sprite.png';

const game = () => {
  document.fonts.ready.then(
  sprite.onload = () => {

    document.addEventListener("keydown", (e) => startGame(e));
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    let board = new Board();
    c.fillStyle = "blue";
    c.font = "40px OrbitronBlack";
    c.fillText("Welcome to", 160, 150);
    c.font = "100px PacFontCrack";
    c.fillText("CAP•MAN", 40, 280);

    c.fillStyle = "yellow";
    c.beginPath();
    c.arc(440, 490, 40, 0.2 * Math.PI, 1.8 * Math.PI);
    c.lineTo(440, 490);
    c.closePath();
    c.fill();
    //
    c.drawImage(sprite, 61, 80, 18, 18, 80, 455, 70, 70);   // red
    // c.drawImage(sprite, 61, 100, 18, 18, 80, 455, 70, 70); // pink
    c.drawImage(sprite, 61, 120, 18, 18, 180, 455, 70, 70); // blue
    c.drawImage(sprite, 61, 140, 18, 18, 280, 455, 70, 70); // orange

    drawDot(c, 490, 490);
    drawDot(c, 540, 490);
    // drawDot(c, 590, 510);
    // drawGhost(canvas, c, 30, 79, 'red');

    // c.drawImage(sprite, 1, 20, 18, 18, 400, 460, 100, 100);   // pacman

    c.font = "20px OrbitronRegular";
    c.fillStyle = "white";
    c.fillText("PRESS ENTER TO START", 155, 620);
  });

};

const drawDot = (c, x, y) => {
  c.fillStyle = "white";
  c.beginPath();
  c.arc( x, y, 7, 0, 2 * Math.PI, false);
  c.lineTo(x, y);
  c.closePath();
  c.fill();
};


const startGame = (e) => {
  if (!started) {
    if (e.key === 'Enter') {
      const newGame = new Game(sprite);
      newGame.animate();
      started = true;
    }
  }
};

game();

// const drawGhost = (canvas, c, x, y, color) => {
//   let s = 60,
//     top = (y / 10) * s,
//     left = (x / 10) * s,
//     tl = left + s,
//     base = top + s - 3,
//     inc = s / 10,
//     high = 0 % 10 > 5 ? 3 : -3,
//     low = 0 % 10 > 5 ? -3 : 3,
//     f = s / 12,
//     off = [1, 0];
//
//     c.fillStyle = color;
//     c.beginPath();
//
//     c.moveTo(left, base);
//
//     c.quadraticCurveTo(left, top, left + (s / 2),  top);
//     c.quadraticCurveTo(left + s, top, left + s,  base);
//     c.quadraticCurveTo(tl - (inc * 1), base, tl - (inc * 2) + 8, base);
//
//     c.quadraticCurveTo(tl - (inc * 1), base + high - 10, tl - (inc * 2),  base);
//     c.quadraticCurveTo(tl - (inc * 3), base + low, tl - (inc * 4),  base);
//     c.quadraticCurveTo(tl - (inc * 5), base + high - 10, tl - (inc * 6),  base);
//     c.quadraticCurveTo(tl - (inc * 7), base + low, tl - (inc * 8),  base);
//     c.quadraticCurveTo(tl - (inc * 9), base + high - 10, tl - (inc * 10) + 4, base);
//
//     c.closePath();
//     c.fill();
//
//     c.save();
//     c.translate(canvas.width / 2, canvas.height / 2);
//     c.scale(1, 1.5);
//     // c.beginPath();
//     // c.arc(left + 20, top + 20, s / 7, 0, 300, false);
//     c.beginPath();
//     c.arc(500, 100, 10, 0, 2 * Math.PI, false);
//     // c.arc((left + s) - 20, top + 20, s / 7, 0, 300, false);
//     c.restore();
//     c.fillStyle = "#FFF";
//     c.fill();
//     c.closePath();
//
//     c.beginPath();
//     c.fillStyle = "#000";
//     c.arc(left + 20 + off[0], top + 20 + off[1], s / 15, 0, 300, false);
//     c.arc((left + s) - 20 + off[0], top + 20 + off[1], s / 15, 0, 300, false);
//     c.closePath();
//     c.fill();
// };
