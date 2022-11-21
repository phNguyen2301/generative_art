let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}

function draw() {
  let numberOfLines = 30;
  let step = 20;
  let magnitude = 50;
  let middlePartWidth = size - 2 * 50 - 200;
  strokeWeight(2);
  fill(255);
  for (let i = 50; i <= size - 50; i += (size - 50 * 2) / numberOfLines) {
    beginShape();
    for (let j = 50; j < size - 50; j += step) {
      let distanceToCenter = Math.abs(j - size / 2);
      let variance =
        (Math.max(middlePartWidth / 2 - distanceToCenter, 0) * 2) /
        middlePartWidth;
      let random = Math.random() * variance * magnitude * -1;
      curveVertex(j, i + random);
    }
    endShape();
  }
}
