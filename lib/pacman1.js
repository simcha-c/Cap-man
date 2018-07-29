import * as Tile from './tile';

class Pacman {
  constructor(c, x, y) {
    this.x = x;
    this.y = y;
    this.xPos = 10;
    this.yPos = 10.5;
    this.ctx = c;
    this.dir = [1, 0];
    this.references = {0: 'wall', 1: 'dot', 2: 'powerPellet', 3: 'empty', 4: 'tunnel'};
    this.score = 0;

    document.addEventListener("keydown", (e) => this.press(e));
    this.movePacman = this.movePacman.bind(this);
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
      case 's':
        console.log(`score: ${this.score}`);
        break;
      default:
        console.log(e.key);
    }
  }

  movePacman() {
    this.validMove();
    this.x += this.dir[0];
    this.y += this.dir[1];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc((this.x + this.xPos), (this.y + this.yPos), 13, 0, 2*Math.PI);
    this.ctx.fillStyle = "yellow";
    this.ctx.fill();

    this.movePacman();
  }

  getPos() {
    let x = Math.floor((this.x - 20) / 20);
    let y = Math.floor((this.y - 24.5) / 21);
    return [x, y];
  }

  validMove() {
    let pos = this.getPos();
    let nextPosInfo = Tile.getNextPosInfo(pos, this.dir);
    let currentPosInfo = Tile.getPosInfo(pos);
    if (this.references[nextPosInfo] === "wall") {
      this.dir = [0, 0];
    } else if (this.references[currentPosInfo] === "dot" || this.references[currentPosInfo] === "powerPellet") {
      Tile.changeTile(pos, 3);
      this.score += 10;
    }
    if (this.x === 620) {
      this.x = -20;
    } else if (this.x === -20) {
      this.x = 620;
    }
  }

  nextPos(pos) {
    let col = pos[0] + this.dir[0];
    let row = pos[1] + this.dir[1];
    this.x = (col * 20) + 20;
    this.y = (row * 21) + 24.5;
  }

  changeDir(dir) {
    let pos = this.getPos();
    if (dir === "ArrowUp" && this.dir[1] !== -1) {
      let nextDirPos = Tile.getNextPosInfo(pos, [0,-1]);
      if (this.references[nextDirPos] !== "wall") {
        this.dir = [0, -1];
        this.nextPos(pos);
        this.xPos = 10;
        this.yPos = -10.5;
        this.y += 42;
      }
    } else if (dir === "ArrowDown" && this.dir[1] !== 1) {
      let nextDirPos = Tile.getNextPosInfo(pos, [0, 1]);
      if (this.references[nextDirPos] !== "wall") {
        this.dir = [0, 1];
        this.nextPos(pos);
        this.xPos = 10;
        this.yPos = 10.5;
        this.y -= 21;
      }
    } else if (dir === "ArrowRight" && this.dir[0] !== 1) {
      let nextDirPos = Tile.getNextPosInfo(pos, [1, 0]);
      if (this.references[nextDirPos] !== "wall") {
        this.dir = [1, 0];
        this.nextPos(pos);
        this.xPos = 10;
        this.yPos = 10.5;
        this.x -= 20;
      }
    } else if (dir === "ArrowLeft" && this.dir[0] !== -1) {
      let nextDirPos = Tile.getNextPosInfo(pos, [-1,0]);
      if (this.references[nextDirPos] !== "wall") {
        this.dir = [-1,0];
        this.nextPos(pos);
        this.xPos = -10;
        this.yPos = 10.5;
        this.x += 40;
      }
    }
  }

}

export default Pacman;
