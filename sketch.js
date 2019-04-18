//Variables
let CANVASSIZE = 600;
let FIELDSIZE = 10;
let CIRCLELENGTH = CANVASSIZE / FIELDSIZE;
let ELLIPSENUMBER;
let start;
let grid = [];
let tempGrid = [];

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
  frameRate(2);
  setGridRandomly(0.1, FIELDSIZE);
  console.log(grid);
  start = true;
}

function draw() {
  if (start) {
    background(0)
    drawGrid(grid);
    tempGrid = grid;
    start = false;
  }
  else{
    tempgrid = setNewGrid(tempGrid); 
    drawGrid(tempGrid);
    console.log(tempGrid);
  }
}



function checkNeighbours(row,col,myGrid) {
  let counter = 0;
  for (k = row - 1; k <= row + 1; k++){
    for ( l = col - 1; l <= col + 1; l++){
      if ( 0 <= k && k < FIELDSIZE && 0 <= l && l < FIELDSIZE){
        if (myGrid[k][l] == 1 && (k != row && l != col)){
          counter++;
        }
      }
    }
  }
  return counter;
}

function setNewGrid(myGrid){
  let newGrid = myGrid;
  for (i = 0; i < FIELDSIZE; i++) {
    for (j = 0; j < FIELDSIZE; j++) {
      let NumOfNeighbours = checkNeighbours(i,j,newGrid);
      //Overcrowded
      if (NumOfNeighbours > 3){
        newGrid[i][j] = 0;
      }
      else if (NumOfNeighbours == 3 ){
        newGrid[i][j] = 1;
      }
      else if (newGrid[i][j]==1 && NumOfNeighbours == 2) {
        newGrid[i][j] = 1;
      }
      else if (NumOfNeighbours <= 1 ){
        newGrid[i][j] = 0;
      }
    }
  }
  return newGrid;
}

function drawGrid(gridArray){
  background(0)
    for (i = 0; i < FIELDSIZE; i++) {
      for (j = 0; j < FIELDSIZE; j++) {
        if (gridArray[i][j] == 1) {
          drawDot(i,j);
        }
      }
    }
    console.log("New Grid drawn!")
}

function drawDot(row, col){
  push();
  translate(col * CIRCLELENGTH, row * CIRCLELENGTH);
  fill(255);
  ellipse(0, 0, CIRCLELENGTH, CIRCLELENGTH);
  pop();
}
