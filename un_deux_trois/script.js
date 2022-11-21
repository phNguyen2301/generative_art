let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);

function setup() {
  createCanvas(width, height);
  background(255);
  noLoop();
}

function custom_draw(x, y, w, h, positions) {
  push();
  translate(x + w / 2, y + h / 2);
  rotate(Math.random() * PI);
  translate(-x - w / 2, -y - h / 2);
  for (let i = 0; i <= positions.length; i++) {
    line(x + positions[i] * w, y, x + w * positions[i], y + h);
  }
  pop();
}

function draw() {
  let step = 20;
  let aThird = size / 3;
  strokeWeight(4);
  strokeCap(ROUND);
  for (var x = (width - size) / 2; x < (width - size) / 2 + size; x += step) {
    for (var y = step; y < size - step; y += step) {
      if (y < aThird) {
        custom_draw(x, y, step, step, [0.5]);
      } else if (y < aThird * 2) {
        custom_draw(x, y, step, step, [0.2, 0.8]);
      } else {
        custom_draw(x, y, step, step, [0.1, 0.5, 0.9]);
      }
    }
  }
}
