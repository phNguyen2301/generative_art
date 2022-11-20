let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let dpr = window.devicePixelRatio;
let width = window.innerWidth / dpr;
let height = window.innerHeight / dpr;

let step = 20;
canvas.width = (Math.floor(width / step) * step - 1) * dpr;
canvas.height = (Math.floor(height / step) * step - 1) * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

for (let x = 0; x < width; x += step) {
  for (let y = 0; y < height; y += step) {
    draw(context, x, y, step, step);
  }
}

function draw(context, x, y, width, height) {
  // TODO: Functionality here

  let leftToRight = Math.random() >= 0.5;
  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
  context.stroke();
}
