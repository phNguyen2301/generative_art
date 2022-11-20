let canvas1 = document.querySelector('#canvas1');
let canvas2 = document.querySelector('#canvas2');
let context1 = canvas1.getContext('2d');
let context2 = canvas2.getContext('2d');

// let size = window.innerWidth;
let size = 480;
let dpr = window.devicePixelRatio;

canvas1.width = size * dpr;
canvas1.height = size * dpr;
context1.scale(dpr, dpr);

// canvas2.width = size * dpr;
// canvas2.height = size * dpr;
// context2.scale(dpr, dpr);

context1.lineCap = 'square';
context1.lineWidth = 2;

// context2.lineCap = 'square';
// context2.lineWidth = 2;

let step1 = 20;
for (let x = 0; x < size; x += step1) {
  for (let y = 0; y < size; y += step1) {
    draw(context1, x, y, step1, step1);
  }
}

// let step2 = 10;
// let lines = [];
// // create lines
// for (let i = step2; i <= size - step2; i += step2) {
//   let line = [];
//   for (let j = step2; j <= size - step2; j += step2) {
//     let point = { x: j, y: i };
//     line.push(point);
//   }
//   lines.push(line);
// }

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
