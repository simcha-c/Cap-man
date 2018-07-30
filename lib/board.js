import Tile from './tile';

class Board {

  constructor() {
    let canvas = document.getElementById('maze-canvas');
    canvas.height = 715;
    canvas.width = 600;
    this.tile = new Tile();

    let c = canvas.getContext("2d");
    c.fillStyle = "black";
    c.fillRect (0, 0, 600, 750);
    this.ctx = c;
  }

  drawBoard() {
    let grid = [];
    for (let col = 0; col < 28; col++) {
      for (let row = 0; row < 31; row++) {
        let info = this.tile.grid[row][col];
        let color;
        if (info === 0) {color = 'blue';}
        if (('12346'.includes(info)) ) {color = 'black';}
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.rect(((col * 20)+20), ((row * 21)+24.5), (20), (21.5));
        this.ctx.fill();

        if (info === 1) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'white';
          this.ctx.arc( ((col * 20)+30), ((row * 21)+35), 2, 0, 2*Math.PI, false);
          this.ctx.fill();
        }

        if (info === 2) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'white';
          this.ctx.arc( ((col * 20)+30), ((row * 21)+34), 7, 0, 2*Math.PI, false);
          this.ctx.fill();
        }
        if (info === 5) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'white';
          this.ctx.rect(((col * 20)+20), ((row * 21)+30), (20), (3));
          this.ctx.fill();
        }
      }
    }
  }
}

export default Board;
