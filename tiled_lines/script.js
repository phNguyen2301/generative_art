let width = window.innerWidth;
let height = window.innerHeight;

function setup() {
  createCanvas(width, height);
  background(255);
  noLoop();
}

function draw() {
  let step = 20;
  strokeWeight(2);
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      let leftToRight = Math.random() >= 0.5;
      if (leftToRight) {
        line(x, y, x + step, y + step);
      } else {
        line(x + step, y, x, y + step);
      }
    }
  }
}
