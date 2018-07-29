//   drawBoard() {
//     // border
//     const radius = 10;
//     // TOP HALF
//     this.ctx.beginPath();
//     this.ctx.moveTo(0, 270);
//     // left middle part
//     this.ctx.arcTo(125, 270, 125, 260, radius);
//     this.ctx.arcTo(125, 200, 115, 200, radius);
//     this.ctx.arcTo(20, 200, 20, 190, radius);
//     // top part
//     this.ctx.arcTo(20, 20, 100, 20, radius);
//     this.ctx.arcTo(290, 20, 290, 40, radius);
//     this.ctx.arcTo(290, 100, 310, 100, radius);
//     this.ctx.arcTo(310, 100, 310, 60, radius);
//     this.ctx.arcTo(310, 20, 315, 20, radius);
//     this.ctx.arcTo(580, 20, 580, 100, radius);
//     this.ctx.arcTo(580, 150, 580, 200, radius);
//     // right middle part
//     this.ctx.arcTo(580, 200, 500, 200, radius);
//     this.ctx.arcTo(475, 200, 475, 210, radius);
//     this.ctx.arcTo(475, 270, 480, 270, radius);
//     this.ctx.arcTo(600, 270, 600, 310, 0);
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // BOTTOM HALF
//     this.ctx.beginPath();
//     this.ctx.moveTo(0, 330);
//     this.ctx.arcTo(125, 330, 125, 340, radius);
//     this.ctx.arcTo(125, 400, 115, 400, radius);
//     this.ctx.arcTo(20, 400, 20, 410, radius);
//
//     this.ctx.arcTo(20, 520, 30, 520, radius);
//     this.ctx.arcTo(60, 520, 60, 530, radius);
//     this.ctx.arcTo(60, 530, 50, 530, radius);
//     this.ctx.arcTo(60, 550, 50, 550, radius);
//     this.ctx.arcTo(20, 550, 20, 560, radius);
//     this.ctx.arcTo(20, 680, 30, 680, radius);
//     this.ctx.arcTo(580, 680, 580, 670, radius);
//     // going up on right side
//     this.ctx.arcTo(580, 550, 570, 550, radius);
//     this.ctx.arcTo(540, 550, 540, 540, radius);
//     this.ctx.arcTo(540, 520, 550, 520, radius);
//     this.ctx.arcTo(580, 520, 580, 510, radius);
//     this.ctx.arcTo(580, 400, 570, 400, radius);
//     this.ctx.arcTo(475, 400, 475, 390, radius);
//     this.ctx.arcTo(475, 330, 480, 330, radius);
//     this.ctx.arcTo(600, 330, 600, 330, 0);
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//   // TOP-LEFT SIDE:
//     // top-left box (top-left)
//     this.ctx.beginPath();
//     this.ctx.moveTo(90, 60);
//     this.ctx.arcTo(125, 60, 125, 70, radius);
//     this.ctx.arcTo(125, 100, 120, 100, radius);
//     this.ctx.arcTo(60, 100, 60, 90, radius);
//     this.ctx.arcTo(60, 60, 85, 60, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // top-left box (bottom-left)
//     this.ctx.beginPath();
//     this.ctx.moveTo(90, 140);
//     this.ctx.arcTo(125, 140, 125, 150, radius);
//     this.ctx.arcTo(125, 160, 120, 160, radius);
//     this.ctx.arcTo(60, 160, 60, 150, radius);
//     this.ctx.arcTo(60, 140, 85, 140, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // top-left box (top-right)
//     this.ctx.beginPath();
//     this.ctx.moveTo(190, 60);
//     this.ctx.arcTo(250, 60, 250, 70, radius);
//     this.ctx.arcTo(250, 100, 240, 100, radius);
//     this.ctx.arcTo(165, 100, 165, 90, radius);
//     this.ctx.arcTo(165, 60, 180, 60, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // TOP-RIGHT BOXES:
//     // top-right box (top-right)
//     this.ctx.beginPath();
//     this.ctx.moveTo(500, 60);
//     this.ctx.arcTo(540, 60, 540, 70, radius);
//     this.ctx.arcTo(540, 100, 535, 100, radius);
//     this.ctx.arcTo(475, 100, 475, 90, radius);
//     this.ctx.arcTo(475, 60, 485, 60, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // top-right box (bottom-right)
//     this.ctx.beginPath();
//     this.ctx.moveTo(500, 140);
//     this.ctx.arcTo(540, 140, 540, 150, radius);
//     this.ctx.arcTo(540, 160, 535, 160, radius);
//     this.ctx.arcTo(475, 160, 475, 150, radius);
//     this.ctx.arcTo(475, 140, 485, 140, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // top-left box (top-right)
//     this.ctx.beginPath();
//     this.ctx.moveTo(400, 60);
//     this.ctx.arcTo(435, 60, 435, 70, radius);
//     this.ctx.arcTo(435, 100, 425, 100, radius);
//     this.ctx.arcTo(350, 100, 350, 90, radius);
//     this.ctx.arcTo(350, 60, 360, 60, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//
//
//     // MIDDLE PIECES
//
//     // left
//     this.ctx.beginPath();
//     this.ctx.moveTo(165, 180);
//     this.ctx.arcTo(165, 140, 175, 140, radius);
//     this.ctx.arcTo(185, 140, 185, 150, radius);
//     this.ctx.arcTo(185, 200, 190, 200, radius);
//     this.ctx.arcTo(250, 200, 250, 210, radius);
//     this.ctx.arcTo(250, 220, 240, 220, radius);
//     this.ctx.arcTo(185, 220, 185, 230, radius);
//     this.ctx.arcTo(185, 270, 175, 270, radius);
//     this.ctx.arcTo(165, 270, 165, 260, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // right
//     this.ctx.beginPath();
//     this.ctx.moveTo(435, 180);
//     this.ctx.arcTo(435, 140, 420, 140, radius);
//     this.ctx.arcTo(415, 140, 415, 150, radius);
//     this.ctx.arcTo(415, 200, 410, 200, radius);
//     this.ctx.arcTo(350, 200, 350, 210, radius);
//     this.ctx.arcTo(350, 220, 360, 220, radius);
//     this.ctx.arcTo(415, 220, 415, 230, radius);
//     this.ctx.arcTo(415, 270, 420, 270, radius);
//     this.ctx.arcTo(435, 270, 435, 260, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // middle
//     this.ctx.beginPath();
//     this.ctx.moveTo(300, 140);
//     this.ctx.arcTo(375, 140, 375, 150, radius);
//     this.ctx.arcTo(375, 160, 365, 160, radius);
//     this.ctx.arcTo(310, 160, 310, 170, radius);
//     this.ctx.arcTo(310, 220, 300, 220, radius);
//     this.ctx.arcTo(290, 220, 290, 210, radius);
//     this.ctx.arcTo(290, 160, 280, 160, radius);
//     this.ctx.arcTo(225, 160, 225, 150, radius);
//     this.ctx.arcTo(225, 140, 235, 140, radius);
//     this.ctx.closePath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
//
//     // mid-box
//     this.ctx.beginPath();
//     this.ctx.moveTo(300, 140);
//
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 3;
//
//     this.ctx.stroke();
//   }
//
// }



// const topStraightLine = (startX, startY) => {
//   c.fillStyle = "#fff";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.lineTo(startX+21.5, startY);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// topStraightLine(0, 0);
//
// // bottom line
// const bottomStraightLine = (startX, startY) => {
//   c.fillStyle = "#fff";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX-1, startY+22);
//   c.lineTo(startX+23, startY+22);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// bottomStraightLine(40, 0);
//
// // right line
// const rightLine = (startX, startY) => {
//   c.fillStyle = "#fff";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX+21, startY);
//   c.lineTo(startX+21, startY+23);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightLine(80, 0);
//
// // left line
// const leftLine = (startX, startY) => {
//   c.fillStyle = "#fff";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.lineTo(startX, startY+23);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftLine(120, 0);
//
// // top-left curve
// const leftTopCurve = (startX, startY) => {
//   c.fillStyle = "#fff";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX+21.5, startY);
//   c.arcTo(startX, startY, startX, startY+11.5, radius);
//   c.arcTo(startX, startY+22.5, startX, startY+22.5, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftTopCurve(160, 0);
//
// // top-right curve
// const rightTopCurve = (startX, startY) => {
//   c.fillStyle = "#fff";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.arcTo(startX+22, startY, startX+22, startY+11.5, radius);
//   c.arcTo(startX+22, startY+22.5, startX+22, startY+22.5, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightTopCurve(200, 0);
//
// // bottom-left curve
// const rightBottomCurve = (startX, startY) => {
//   c.fillStyle = "#fff";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX-1, startY+21.5);
//   c.arcTo(startX+21.5, startY+21.5, startX+21.5, startY+11.5, radius);
//   c.arcTo(startX+21.5, startY, startX+21.5, startY, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightBottomCurve(240, 0);
//
// // bottom-left curve
// const leftBottomCurve = (startX, startY) => {
//   c.fillStyle = "#fff";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.arcTo(startX, startY+23, startX+10, startY+23, radius);
//   c.arcTo(startX+22, startY+23, startX+22, startY+23, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftBottomCurve(280, 0);
//
// const empty = (startX, startY) => {
//   c.fillStyle = "#fff";
//   c.fillRect (startX, startY, 21.5, 22.5);
// };
// empty(0, 0);
// //
// // const border = (startX, startY) => {
// //   c.fillStyle = "#fff";
// //   c.fillRect (startX, startY, 21.5, 22.5);
// // };
// // border(0, 0);
//
// leftTopCurve(21.5, 22.5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
