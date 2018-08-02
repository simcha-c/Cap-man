import Tile from './tile';

class Ghost {

  constructor(c, xPos, yPos, color, level, tile, sprite, num) {
    this.ctx = c;
    this.xPos = xPos;
    this.yPos = yPos;
    this.x = (xPos * 20) + 20;
    this.y = (yPos * 21) + 24.5;
    this.color = color;
    this.num = num + 4;
    this.tile = tile;
    this.sprite = sprite;

    this.originalX = this.x;
    this.originalY = this.y;

    this.dir = [0, -1];
    this.offsetX = -5;
    this.offsetY = -5;

    this.eatable = false;
    this.count = 0;
    this.maxCount = Math.floor(Math.random() * 31) + 50;
    this.level = level;
    this.references = {0: 'wall', 1: 'dot', 2: 'powerPellet', 3: 'empty', 4: 'tunnel', 5: 'empty', 6: "wall"};
  }

  draw() {
    let xSprite, ySprite;
    if (this.eatable) {
      xSprite = 1;
      ySprite = 160;
    } else {
      xSprite = 61;
      ySprite = this.num * 20;
    }
    this.ctx.drawImage(this.sprite, xSprite, ySprite, 18, 18, (this.x - 5), (this.y - 5), 32, 32);
    this.moveGhost();
  }

  moveGhost() {
    if (this.count === this.maxCount || this.dir[0] + this.dir[1] === 0) {
      this.count = 0;
      this.maxCount = Math.floor(Math.random() * 31) + 50;
      this.changeDir();
    }

    this.count += 1;
    this.validMove();
    this.x += (this.dir[0] * (2 + (this.level * 0.5) ));
    this.y += (this.dir[1] * (2 + (this.level * 0.5) ));
  }

  getPos() {
    let x = Math.floor((this.x - 20) / 20);
    let y = Math.floor((this.y - 21) / 21);
    return [x, y];
  }

  getNextPos() {
    let x = this.x + (this.dir[0]);
    let y = this.y + (this.dir[1]);
    let gridX, gridY;
    if (this.dir[0] + this.dir[1] < 0) {
      gridX = Math.floor((x - 20) / 20);
      gridY = Math.floor((y - 24.5) / 21);
    } else {
      gridX = Math.ceil((x - 20) / 20);
      gridY = Math.ceil((y - 24.5) / 21);
    }
    return [gridX, gridY];
  }

  validMove() {
    let nextPos = this.getNextPos();
    let nextPosInfo = this.tile.getPosInfo(nextPos);
    if (this.references[nextPosInfo] === 'wall') {
      this.dir = [0, 0];
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
    }

    if (this.x > 620) {
      this.x = -20;
    } else if (this.x < -20) {
      this.x = 620;
    }
  }

  validChange(pos, dir) {
    let xPos = pos[0] + dir[0];
    let yPos = pos[1] + dir[1];
    let posInfo = this.tile.getPosInfo([xPos, yPos]);

    if (xPos < 1 || xPos > 26) { return false; }
    if (posInfo === 5 && dir[1] === 1) { return false; }
    return (this.references[posInfo] !== "wall");
  }

  changeDir() {
    let dirArray = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
    let dir = dirArray[Math.floor(Math.random() * dirArray.length)];

    let pos = this.getPos();
    switch (dir) {
      case "ArrowUp":
      // debugger
        if (this.dir[1] != -1 && this.validChange(pos, [0, -1]) ) {
          if (this.dir[1] !== 1) {
            this.x = (pos[0] * 20) + 20;
          }
          this.dir = [0, -1];
        }
        break;
      case "ArrowDown":
        if (this.dir[1] !== 1 && this.validChange(pos, [0, 1]) ) {
          if (this.dir[1] !== -1) { this.x = (pos[0] * 20) + 20; }
          this.dir = [0, 1];
        }
        break;
      case "ArrowRight":
        if (this.dir[0] !== 1 && this.validChange(pos, [1, 0]) ) {
          if (this.dir[0] !== -1) { this.y = (pos[1] * 21) + 24.5; }
          this.dir = [1, 0];
        }
        break;
      case "ArrowLeft":
        if (this.dir[0] !== -1 && this.validChange(pos, [-1, 0]) ) {
          if (this.dir[0] !== 1) { this.y = (pos[1] * 21) + 24.5; }
          this.dir = [-1, 0];
        }
        break;
    }
  }

  takeAwayLife() {
    this.x = this.originalX;
    this.y = this.originalY;
    this.dir = [0, -1];
  }

}

export default Ghost;
