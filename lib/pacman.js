import * as Tile from './tile';

class Pacman {
  // constructor(c, x, y) {
  //   this.x = x;
  //   this.y = y;
  //   this.ctx = c;
  //   this.dir = [1, 0];
  //
  //   document.addEventListener("keydown", (e) => this.press(e));
  //
  //   this.movePacman = this.movePacman.bind(this);
  //   // this.draws = this.draw.bind(this);
  //   this.validMove = this.validMove.bind(this);
  // }
  //
  // press(e) {
  //   switch (e.key) {
  //     case 'ArrowUp':
  //       if (this.changing('ArrowUp')) {
  //         this.changeDir('ArrowUp');
  //       }
  //       break;
  //     case 'ArrowDown':
  //       if (this.changing('ArrowDown')) {
  //         this.changeDir('ArrowDown');
  //       }
  //       break;
  //     case 'ArrowRight':
  //       if (this.changing('ArrowRight')) {
  //         this.changeDir('ArrowRight');
  //       }
  //       break;
  //     case 'ArrowLeft':
  //       if (this.changing('ArrowLeft')) {
  //         this.changeDir('ArrowLeft');
  //       }
  //       break;
  //     case 'p':
  //       console.log(`pos: x:${this.x}, y:${this.y}`);
  //       break;
  //     default:
  //       console.log(e.key);
  //   }
  // }

  changing(dir) {
    if (this.dir[0] === 0) {
      if (this.dir[1] === -1) {
        if (dir === 'ArrowUp') {return false;}
      } else if (this.dir[1] === 1) {
        if (dir === 'ArrowDown') {return false;}
      }
    } else if (this.dir[1] === 0) {
      if (this.dir[0] === 1) {
        if (dir === 'ArrowRight') {return false;}
      } else if (this.dir[0] === -1) {
        if (dir === 'ArrowLeft') {return false;}
      }
    }
    return true;
  }

  changeDir(dir) {
    let pos = Tile.calculateMovingPos([this.x, this.y]);
    if (dir === 'ArrowUp' && this.nextPosValid([(pos[0] + 1), pos[1]]) ) {
      this.dir = [0, -1];
      this.x = (pos[0] * 20) + 10;
    } else if (dir === 'ArrowDown' && this.nextPosValid([(pos[0] - 1), pos[1]]) ) {
      this.dir = [0, 1];
      this.x = (pos[0] * 20) + 10;
    } else if (dir === 'ArrowLeft' && this.nextPosValid([pos[0], (pos[1] + 1)]) ) {
      this.dir = [-1, 0];
      this.y = (pos[1] * (660/31)) + 10;
    } else if (dir === 'ArrowRight' && this.nextPosValid([pos[0], (pos[1] - 1)]) ) {
      this.dir = [1, 0];
      this.y = (pos[1] * (660/31)) + 10;
    }
  }

  nextPos(pos) {
    let nextPos;
    if (this.dir[0] === 0) {
      if (this.dir[1] === 1) { nextPos = [pos[0], (pos[1] + 1)]; }
      if (this.dir[1] === -1) {nextPos = [pos[0], (pos[1] - 1)]; }
    } else if (this.dir[1] === 0) {
      if (this.dir[0] === 1) { nextPos = [(pos[0] + 1), pos[1]];}
      if (this.dir[0] === -1) { nextPos = [(pos[0]- 1), pos[1]];}
    }
    return nextPos;
  }

  nextPosValid(pos) {
    const wall = 0;
    // pos = this.nextPos(pos);
    let info = Tile.getPosInfo(pos);

    if (info === wall) {
      return false;
    } else {
      return true;
    }
  }

  validMove() {
    const wall = 0;
    const dot = 1;
    const powerPellet = 2;
    const empty = 3;

    let pos = Tile.calculateEatingPos([this.x, this.y]);
    // pos = this.nextPos(pos);
    let info = Tile.getPosInfo(pos);
    if (info === wall) {
      if (this.dir[0] === 0) {
        if (this.dir[1] === 1 ) {this.y -= 4;}
        if (this.dir[1] === -1) {this.y += 4;}
      } else if (this.dir[1] === 0) {
        if (this.dir[0] === -1) {this.x += 4;}
        if (this.dir[0] === 1 ) {this.x -= 4;}
      }
      this.dir = [0, 0];
      return false;
    } else if (info === dot) {
      Tile.changeTile(pos, 3);
    } else if (info === powerPellet) {
      Tile.changeTile(pos, 3);
    }
    return true;
  }

  // movePacman() {
  //   this.validMove();
  //   this.x += this.dir[0];
  //   this.y += this.dir[1];
  // }
  //
  // draw() {
  //   this.ctx.beginPath();
  //   this.ctx.arc(this.x, this.y, 16, 0, 2*Math.PI);
  //   this.ctx.fillStyle = "yellow";
  //   this.ctx.fill();
  //   this.movePacman();
  // }
}

export default Pacman;
