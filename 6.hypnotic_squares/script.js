let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);

let finalSize = 5;
let startSteps;
let tileStep;
let offset = 2;
let startSize;
let directions = [-1, 0, 1];

function setup() {
  createCanvas(size, size);
  tileStep = (size - offset * 2 - 2 * 50) / 7;
  startSize = tileStep;
  background(255);
  noLoop();
}

function custom_draw(x, y, width, height, xMovement, yMovement, steps) {
  rect(x, y, width, height);
  if (steps >= 0) {
    let newSize = startSize * (steps / startSteps) + finalSize;
    let newX = x + (width - newSize) / 2;
    let newY = y + (height - newSize) / 2;
    newX = newX - ((x - newX) / (steps + 2)) * xMovement;
    newY = newY - ((y - newY) / (steps + 2)) * yMovement;
    custom_draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
  }
}

function draw() {
  strokeWeight(4);

  for (var x = 50 + offset; x < size - offset - 50; x += tileStep) {
    for (var y = 50 + offset; y < size - offset - 50; y += tileStep) {
      startSteps = 2 + Math.ceil(Math.random() * 3);
      var xDirection =
        directions[Math.floor(Math.random() * directions.length)];
      var yDirection =
        directions[Math.floor(Math.random() * directions.length)];
      custom_draw(
        x,
        y,
        startSize,
        startSize,
        xDirection,
        yDirection,
        startSteps - 1
      );
    }
  }
}
