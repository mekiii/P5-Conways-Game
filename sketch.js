//Variables
let CANVASSIZE = 800;
let FIELDSIZE = 20
let CIRCLELENGTH = CANVASSIZE/FIELDSIZE;


function setup() {
  // put setup code here
  createCanvas(CANVASSIZE,CANVASSIZE, SVG)
  ellipseMode(CORNER)
  angleMode(DEGREES)
}

function draw() {
  background(0)
  
  for (i=0; i < FIELDSIZE; i++) {
    for (j=0; j < FIELDSIZE; j++){
      push()
      translate(i*CIRCLELENGTH, j*CIRCLELENGTH)
      fill(255)
      ellipse(0,0,CIRCLELENGTH,CIRCLELENGTH)
      pop()
    }
  }
  
  // put drawing code here
}