let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}

function draw() {
  let step = 20;
  strokeWeight(2);
  for (let x = 50; x < size - 50; x += step) {
    for (let y = 50; y < size - 50; y += step) {
      let leftToRight = Math.random() >= 0.5;
      if (leftToRight) {
        line(x, y, x + step, y + step);
      } else {
        line(x + step, y, x, y + step);
      }
    }
  }
}
