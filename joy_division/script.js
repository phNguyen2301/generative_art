let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let dpr = window.devicePixelRatio;
let width = window.innerWidth / dpr;
let height = window.innerHeight / dpr;

let step = 20;
canvas.width = (Math.floor(width / step) * step - 1) * dpr;
canvas.height = (Math.floor(height / step) * step - 1) * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

let lines = [];

// create line
for (let i = step; i <= width; i += step) {
  let line = [];
  for (let j = step; j <= width; j += step) {
    let distanceToCenter = Math.abs(j - width / 2);
    let variance = Math.max(width / 2 - 50 - distanceToCenter, 0);
    let random = ((Math.random() * variance) / 7) * -1;
    let point = { x: j, y: i + random };
    line.push(point);
  }
  lines.push(line);
}

// do the drawing
for (let i = 0; i < lines.length; i++) {
  context.beginPath();
  for (let j = 0; j < lines[i].length - 2; j++) {
    let xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
    let yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
  }

  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.fill();
  context.restore();
  context.stroke();
}
