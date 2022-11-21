let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);
let circles_list = [];
let minRadius = 5;
let maxRadius = 300;
let totalCircles = 2000;
let createCircleAttempts = 3000;

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}
function doesCircleHaveACollision(circle) {
  for (let i = 0; i < circles_list.length; i++) {
    let otherCircle = circles_list[i];
    let a = circle.radius + otherCircle.radius;
    let x = circle.x - otherCircle.x;
    let y = circle.y - otherCircle.y;
    if (a / 2 >= Math.sqrt(x * x + y * y)) {
      return true;
    }
  }
  if (circle.x + circle.radius >= size - 50 || circle.x - circle.radius <= 50) {
    return true;
  }
  if (circle.y + circle.radius >= size - 50 || circle.y - circle.radius <= 50) {
    return true;
  }
  return false;
}
function createAndDrawCircle() {
  let newCircle;
  let circleSafeToDraw = false;
  for (let tries = 0; tries < createCircleAttempts; tries++) {
    newCircle = {
      x: 50 + Math.floor(Math.random() * (size - 50)),
      y: 50 + Math.floor(Math.random() * (size - 50)),
      radius: minRadius,
    };
    if (doesCircleHaveACollision(newCircle)) {
      continue;
    } else {
      circleSafeToDraw = true;
      break;
    }
  }
  if (!circleSafeToDraw) {
    return;
  }

  for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
    newCircle.radius = radiusSize;
    if (doesCircleHaveACollision(newCircle)) {
      newCircle.radius--;
      break;
    }
  }
  circles_list.push(newCircle);
  circle(newCircle.x, newCircle.y, newCircle.radius);
}

function draw() {
  strokeWeight(2);
  for (let i = 0; i < totalCircles; i++) {
    createAndDrawCircle();
  }
}
