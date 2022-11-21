let width = window.innerWidth;
let height = window.innerHeight;
let circles_list = [];
let minRadius = 5;
let maxRadius = 300;
let totalCircles = 3000;
let createCircleAttempts = 3000;

function setup() {
  createCanvas(width, height);
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
  if (circle.x + circle.radius >= width || circle.x - circle.radius <= 0) {
    return true;
  }
  if (circle.y + circle.radius >= height || circle.y - circle.radius <= 0) {
    return true;
  }
  return false;
}
function createAndDrawCircle() {
  let newCircle;
  let circleSafeToDraw = false;
  for (let tries = 0; tries < createCircleAttempts; tries++) {
    newCircle = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
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
  strokeWeight(3);
  for (let i = 0; i < totalCircles; i++) {
    createAndDrawCircle();
  }
}
