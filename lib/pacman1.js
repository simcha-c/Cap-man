import * as Tile from './tile';

class Pacman {
  constructor(c, x, y) {
    this.x = x;
    this.y = y;
    this.xPos = 10;
    this.yPos = 10.5;
    this.ctx = c;
    this.dir = [1, 0];
    this.references = {0: 'wall', 1: 'dot', 2: 'powerPellet', 3: 'empty'};

    document.addEventListener("keydown", (e) => this.press(e));
    this.movePacman = this.movePacman.bind(this);
    this.validMove = this.validMove.bind(this);
  }

  press(e) {
    switch (e.key) {
      case 'ArrowUp':
        // if (this.changing('ArrowUp')) {
          this.changeDir('ArrowUp');
        // }
        break;
      case 'ArrowDown':
        // if (this.changing('ArrowDown')) {
          this.changeDir('ArrowDown');
        // }
        break;
      case 'ArrowRight':
        // if (this.changing('ArrowRight')) {
          this.changeDir('ArrowRight');
        // }
        break;
      case 'ArrowLeft':
        // if (this.changing('ArrowLeft')) {
          this.changeDir('ArrowLeft');
        // }
        break;
      case 'p':
        console.log(`pos: x:${this.x}, y:${this.y}`);
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
    }
  }

  changeDir(dir) {
    let pos = this.getPos();
    if (dir === "ArrowUp") {
      let nextDirPos = Tile.getNextPosInfo(pos, [0,-1]);
      if (nextDirPos !== 0) {
        this.dir = [0, -1];
        this.xPos = 10;
        this.yPos = -10.5;
      }
    } else if (dir === "ArrowDown") {
      let nextDirPos = Tile.getNextPosInfo(pos, [0, 1]);
      if (nextDirPos !== 0) {
        this.dir = [0, 1];
        this.xPos = 10;
        this.yPos = 10.5;
      }
    } else if (dir === "ArrowRight") {
      let nextDirPos = Tile.getNextPosInfo(pos, [1, 0]);
      if (nextDirPos !== 0) {
        this.dir = [1, 0];
        this.xPos = 10;
        this.yPos = 10.5;
      }
    } else if (dir === "ArrowLeft") {
      let nextDirPos = Tile.getNextPosInfo(pos, [-1,0]);
      if (nextDirPos !== 0) {
        this.dir = [-1,0];
        this.xPos = -10;
        this.yPos = 10.5;
      }
    }
  }

}

export default Pacman;
