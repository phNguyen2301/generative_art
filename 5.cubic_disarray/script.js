let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);
let randomDisplacement = 15;
let rotateMultiplier = 20;
let offset = 10;
let squareSize = 50;

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}

function custom_draw(width, height) {
  rect(-width / 2, -height / 2, width, height);
}

function draw() {
  strokeWeight(2);
  for (let i = 50; i < size - 50; i += squareSize) {
    for (let j = 50; j < size - 50; j += squareSize) {
      let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      let rot_amt =
        (((j / size) * Math.PI) / 180) *
        plusOrMinus *
        Math.random() *
        rotateMultiplier;

      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      let trans_amt =
        (j / size) * plusOrMinus * Math.random() * randomDisplacement;

      push();
      translate(i + trans_amt + offset, j + offset);
      rotate(rot_amt);
      custom_draw(squareSize, squareSize);
      pop();
    }
  }
}
