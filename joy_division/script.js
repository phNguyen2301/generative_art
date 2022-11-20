let width = window.innerWidth;
let height = window.innerHeight;

function setup() {
  createCanvas(width, height);
  background(255);
  noLoop();
}

function draw() {
  let numberOfLines = 30;
  let step = 20;
  let magnitude = 50;
  let middlePartWidth = width - 200;
  strokeWeight(2);
  fill(255);
  for (
    let i = magnitude;
    i <= height - magnitude;
    i += (height - magnitude) / numberOfLines
  ) {
    beginShape();
    for (let j = step; j <= width; j += step) {
      let distanceToCenter = Math.abs(j - width / 2);
      let variance =
        (Math.max(middlePartWidth / 2 - distanceToCenter, 0) * 2) /
        middlePartWidth;
      let random = Math.random() * variance * magnitude * -1;
      curveVertex(j, i + random);
    }
    endShape();
  }
}
