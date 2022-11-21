let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);
let cols = 23;
let rows = 16;
let days = 365;
let gridw = size - 50;
let gridh = (size - 50) * 0.9;
let cellw = gridw / cols;
let cellh = gridh / rows;
let margx = (size - gridw) * 0.5;
let margy = (size - gridh) * 0.5;

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}

function draw() {
  strokeWeight(0);
  for (let i = 0; i < days; i++) {
    let col = Math.floor(i / rows);
    let row = i % rows;

    let x = margx + col * cellw;
    let y = margy + row * cellh;
    let w = 5;
    let h = 80;

    push();
    translate(x, y);
    rect(0, 0, cellw, cellh);

    drawingContext.clip();
    translate(cellw * 0.5, cellh * 0.5);
    let phi = (i / days) * Math.PI;
    let theta = Math.sin(phi) * Math.PI * 0.45 + 0.85;
    rotate(theta);

    let factor = Math.abs(Math.cos(phi)) * 2 + 1;

    scale(factor, 1);

    fill(0);
    rect(w * -0.5, h * -0.5, w, h);
    pop();
  }
}
