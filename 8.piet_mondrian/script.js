let width = window.innerWidth;
let height = window.innerHeight;
let size = Math.min(width, height);
let step = (size - 100) / 7;
let white = '#F2F5F1';
let colors = ['#D40920', '#1356A2', '#F7D842'];

let squares = [
  {
    x: 50,
    y: 50,
    width: size - 100,
    height: size - 100,
  },
];

function splitSquaresWith(coordinates) {
  const { x, y } = coordinates;

  for (let i = squares.length - 1; i >= 0; i--) {
    const square = squares[i];

    if (x && x > square.x && x < square.x + square.width) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnX(square, x);
      }
    }
    if (y && y > square.y && y < square.y + square.height) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnY(square, y);
      }
    }
  }
}

function splitOnX(square, splitAt) {
  let squareA = {
    x: square.x,
    y: square.y,
    width: square.width - (square.width - splitAt + square.x),
    height: square.height,
  };

  let squareB = {
    x: splitAt,
    y: square.y,
    width: square.width - splitAt + square.x,
    height: square.height,
  };

  squares.push(squareA);
  squares.push(squareB);
}

function splitOnY(square, splitAt) {
  let squareA = {
    x: square.x,
    y: square.y,
    width: square.width,
    height: square.height - (square.height - splitAt + square.y),
  };

  let squareB = {
    x: square.x,
    y: splitAt,
    width: square.width,
    height: square.height - splitAt + square.y,
  };

  squares.push(squareA);
  squares.push(squareB);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function setup() {
  createCanvas(size, size);
  background(255);
  noLoop();
}

function draw() {
  strokeWeight(9);

  for (let i = 50; i <= size - 50; i += step) {
    splitSquaresWith({ y: i });
    splitSquaresWith({ x: i });
  }

  shuffleArray(squares);

  for (let i = 0; i < colors.length; i++) {
    squares[i].color = colors[i];
  }

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].color) {
      fill(squares[i].color);
    } else {
      fill(white);
    }
    rect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
  }
}
