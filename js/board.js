
let canvas = document.getElementById('maze-canvas');
canvas.height = 700;
canvas.width = 600;

let c = canvas.getContext("2d");
c.fillStyle = "#000";
c.fillRect (0,0,1000, 1000);

// border
  const radius = 10;
  // TOP HALF
  c.beginPath();
  c.moveTo(20, 270);
  // left middle part
  c.arcTo(200, 270, 200, 260, radius);
  c.arcTo(200, 200, 190, 200, radius);
  c.arcTo(20, 200, 20, 190, radius);
  // top part
  c.arcTo(20, 20, 100, 20, radius);
  c.arcTo(290, 20, 290, 40, radius);
  c.arcTo(290, 100, 309, 100, radius);
  c.arcTo(309, 100, 309, 60, radius);
  c.arcTo(309, 20, 315, 20, radius);
  c.arcTo(580, 20, 580, 100, radius);
  c.arcTo(580, 150, 580, 200, radius);
  // right middle part
  c.arcTo(580, 200, 500, 200, radius);
  c.arcTo(400, 200, 400, 210, radius);
  c.arcTo(400, 270, 410, 270, radius);
  c.arcTo(580, 270, 580, 310, 0);

  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

  c.beginPath();
  c.moveTo(20, 330);
  c.arcTo(200, 330, 200, 340, radius);
  c.arcTo(200, 400, 190, 400, radius);
  c.arcTo(20, 400, 20, 410, radius);

  c.arcTo(20, 520, 30, 520, radius);
  c.arcTo(100, 520, 100, 530, radius);
  c.arcTo(100, 530, 90, 530, radius);
  c.arcTo(100, 550, 90, 550, radius);
  c.arcTo(20, 550, 20, 560, radius);
  c.arcTo(20, 680, 30, 680, radius);
  c.arcTo(580, 680, 580, 670, radius);
  // going up on right side
  c.arcTo(580, 550, 570, 550, radius);
  c.arcTo(500, 550, 500, 540, radius);
  c.arcTo(500, 520, 510, 520, radius);
  c.arcTo(580, 520, 580, 510, radius);
  c.arcTo(580, 400, 570, 400, radius);
  c.arcTo(400, 400, 400, 390, radius);
  c.arcTo(400, 330, 410, 330, radius);
  c.arcTo(580, 330, 580, 330, 0);



  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();


















  //
