import Pacman from './pacman';
import Board from './board';

class Game {
  constructor() {
    let canvas = document.getElementById('maze-canvas');
    let c = canvas.getContext("2d");
    this.pacman = new Pacman(c, 140, 80);
    this.ctx = c;

    this.animate = this.animate.bind(this);
  }

  animate() {
    this.ctx.clearRect(0, 0,  this.ctx.canvas.width, this.ctx.canvas.height);
    new Board();
    this.pacman.draw();
    requestAnimationFrame(this.animate);
  }

}

const newGame = new Game();

newGame.animate();