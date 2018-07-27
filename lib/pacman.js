class Pacman {
  constructor(c, x, y) {
    this.x = x;
    this.y = y;
    this.ctx = c;
    this.dir = [1, 0];

    document.addEventListener("keydown", (e) => this.press(e));

    this.movePacman = this.movePacman.bind(this);
    // this.draws = this.draw.bind(this);
    this.validMove = this.validMove.bind(this);
  }

  press(e) {
    switch (e.key) {
      case 'ArrowUp':
        this.changeDir('ArrowUp');
        break;
      case 'ArrowDown':
        this.changeDir('ArrowDown');
        break;
      case 'ArrowRight':
        this.changeDir('ArrowRight');
        break;
      case 'ArrowLeft':
        this.changeDir('ArrowLeft');
        break;
      case 'p':
        console.log(`pos: x:${this.x}, y:${this.y}`);
        break;
      default:
        console.log(e.key);
    }
  }

  changeDir(dir) {
    if (dir === 'ArrowUp') {
      if (this.y !== 40) { this.dir = [0, -1]; }
    } else if (dir === 'ArrowDown') {
      if (this.y !== 660) { this.dir = [0, 1]; }
    } else if (dir === 'ArrowLeft') {
      if (this.x !== 40) { this.dir = [-1, 0]; }
    } else if (dir === 'ArrowRight') {
      if (this.x !== 560) { this.dir = [1, 0]; }
    }
  }

  validMove() {
    if (this.x > 560 || this.x < 40 || this.y < 40 || this.y > 660) {
      this.dir = [0, 0];
    }
    if (this.x > 560) { this.x = 560; }
    if (this.x < 40) { this.x = 40; }
    if (this.y < 40) { this.y = 40; }
    if (this.y > 660) { this.y = 660; }
  }

  movePacman() {
    this.validMove();
    this.x += this.dir[0];
    this.y += this.dir[1];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 16, 0, 2*Math.PI);
    this.ctx.fillStyle = "yellow";
    this.ctx.fill();
    this.movePacman();
  }
}

export default Pacman;
