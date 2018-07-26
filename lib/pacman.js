class Pacman {
  constructor(c) {
    c.beginPath();
    c.arc(145,80,13,0,2*Math.PI);
    c.fillStyle = "yellow";
    c.fill();
    c.strokeStyle = "yellow";
    c.stroke();
  }

}
new Pacman();
module.exports = Pacman;
