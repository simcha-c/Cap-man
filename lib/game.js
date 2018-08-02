import Ghost from './ghost';
import Pacman from './pacman';
import Board from './board';

class Game {
  constructor(sprite) {
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    this.board = new Board();
    this.pacman = new Pacman(c, 300, 507.5, this.board.tile);
    this.ghosts = [];
    this.ctx = c;
    this.lives = 3;
    this.gameOver = false;
    this.level = 1;
    this.sprite = sprite;

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
        this.lives -= 1;
        this.pacman.goToStartingPos();
        this.ghosts.forEach(ghost => { ghost.takeAwayLife(); });
        if (this.lives === 0) { this.gameOver = true; }
      }
    });
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

  animate() {
    this.nextLevel();
    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);
    this.board.drawBoard();
    this.pacman.draw();
    this.ghosts.forEach(ghost => {
      ghost.draw();
    });
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Lives: ${this.lives}`, 280, 702);
    this.ctx.fillText(`Level: ${this.level}`, 515, 702);
    this.checkPacCollision();
    if (!this.gameOver) {
      requestAnimationFrame(this.animate);
    }
  }

}

let sprite = new Image();
sprite.src = 'assets/images/pacman_sprite.png';

const game = () => {
  sprite.onload = () => {

    document.addEventListener("keydown", (e) => startGame(e));
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    let board = new Board();
    c.fillStyle = "white";
    c.font = '18px Arial';
    c.fillText("Press N to start the game!", 200, 500);
  };

};

const startGame = (e) => {
  if (e.key === 'n' || e.key === 'N') {
    const newGame = new Game(sprite);
    newGame.animate();
  }
};

game();
