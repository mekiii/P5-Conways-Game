//Variables
let CANVASSIZE = 800;
let FIELDSIZE = 20;
let CIRCLELENGTH = CANVASSIZE / FIELDSIZE;
let ELLIPSENUMBER;
let start;

function setup() {
  // put setup code here
  createCanvas(CANVASSIZE, CANVASSIZE, SVG);
  ellipseMode(CORNER);
  angleMode(DEGREES);
  start = true;
}

function draw() {
  if (start) {
    background(0)
    for (i = 0; i < FIELDSIZE; i++) {
      for (j = 0; j < FIELDSIZE; j++) {
        if (random(1) > 0.8) {
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