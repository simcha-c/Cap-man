import Ghost from './ghost';
import Pacman from './pacman';
import Board from './board';

class Game {
  constructor() {
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    this.pacman = new Pacman(c, 300, 507.5);
    this.ghosts = [];
    this.ctx = c;
    this.lives = 3;
    this.gameOver = false;

    this.createGhosts();
    this.animate = this.animate.bind(this);
  }

  createGhosts() {
    let colors = ['red', 'lightblue', 'pink', 'orange'];
    for (var i = 0; i < colors.length; i++) {
      let newGhost = new Ghost(this.ctx, (300 + (i*2)), 297.5, colors[i]);
      this.ghosts.push(newGhost);
    }
  }

  checkPacCollision() {
    let pacPos = this.pacman.getPos();
    this.ghosts.forEach(ghost => {
      let gPos = ghost.getPos();
      if (gPos[0] === pacPos[0] && gPos[1] === pacPos[1] ) {
        this.lives -= 1;
        this.pacman.takeAwayLife();
        if (this.lives === 0) { this.gameOver = true; }
      }
    });
  }

  animate() {
    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);
    new Board();
    this.pacman.draw();
    this.ghosts.forEach(ghost => {
      ghost.draw();
    });
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Lives: ${this.lives}`, 515, 702);
    this.checkPacCollision();
    if (!this.gameOver) {
      requestAnimationFrame(this.animate);
    }
  }

}

const newGame = new Game();

newGame.animate();
