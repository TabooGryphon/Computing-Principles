
var blocks;
var rows;
var cols;
var laser;
var worm;
var conRec;
var stars;
var sads;
var spaceship, ship, w, laserFire, score, conStar, sad, b, levelWin;
var rowColSpace;
var startBoo;
var startButton;
var level;

//  IMAGES
function preload() {
  spaceship = loadImage('images/ship.png');
  sad = loadImage('images/sadface.png')
}

//   SETUP
function setup() {
  createCanvas(700, 900);
  initialVarSet();
  rowscols(); //    Fill Row and Column Arrays for Paths and Block Placement
  newObjectsFillArrays();

}
// END of SETUP
//START OF DRAW
function draw() {
  if (level == 0) {
    startScreen();
  }

  if (level == 1) {
      if (blocks.length == 0 && worm.length == 0) {
        fillWormBlocks(level);
      }
    if (stopLevel()) {
      displayMove();
      collisions();
      removeObjects();
    }
    winLose();
  }
  
}
//END OF DRAW