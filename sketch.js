//Variables
let CANVASSIZE = 800;
let FIELDSIZE = 20;
let CIRCLELENGTH = CANVASSIZE / FIELDSIZE;
let ELLIPSENUMBER;
let start;
let grid = [];



function setGridRandomly(randomThreshold, gridSize) {
  for (i = 0; i < gridSize; i++) {
    let row = [];
    for (j = 0; j < gridSize; j++) {
      if (random(1) > randomThreshold) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    grid.push(row);
  }
}

function setup() {
  // put setup code here
  createCanvas(CANVASSIZE, CANVASSIZE, SVG);
  ellipseMode(CORNER);
  angleMode(DEGREES);
  start = true;
  setGridRandomly(0.9, FIELDSIZE);
}

function draw() {
  if (start) {
    background(0)
    for (i = 0; i < FIELDSIZE; i++) {
      for (j = 0; j < FIELDSIZE; j++) {
        if (grid[i][j] == 1) {
          push();
          translate(i * CIRCLELENGTH, j * CIRCLELENGTH);
          fill(255);
          ellipse(0, 0, CIRCLELENGTH, CIRCLELENGTH);
          pop();
        }
      }
    }
    start = false;
  }

}