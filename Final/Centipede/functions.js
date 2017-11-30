function nextLevel() {
  level = level + 1;
  blocks = [];
  worm = [];
}

function startScreen() {
  push();
  background('black');
  textSize(64);
  textAlign(CENTER, CENTER);
  stroke('blue');
  fill('orange');
  text("Ryan's", width / 2, height / 10);
  text('Lawn Defender', width / 2, height / 10 * 1.75);
  textSize(24);
  text('Ready Player One?', width / 2, height / 10 * 7.5);
  textSize(12);
  startButton = new TextButton(width / 2, height / 6 * 5, 75, 37.5, 'Ready!');
  startButton.button();
  if (startButton.useButton) {
    nextLevel();
  }
  pop();
}


//******* Objects and Arrays they only need to be created or filled once *******
function newObjectsFillArrays() {
  s = new Ship();
  score = new ScoreKeeper();
  levelWin = new LevelComplete();
  lose = new Lose();
  newGameButton = new TextButton(width / 2, height * 0.75, 100, 50, 'New Game');
  nextLevelButton = new TextButton(width / 2, height * 0.75, 100, 50, 'Next Level');
  sads = new SadFace();
  //******* Win Confetti *******
  for (i = 0; i < 500; i++) {
    conRec[i] = new ConfettiRect();
  }
  //******* Win Stars *******
  for (i = 0; i < 1; i++) {
    stars[i] = new ConfettiStar();
  }
}



function initialVarSet() {
  laserFire = false;
  rowColSpace = 15.5;
  level = 0;
  blocks = [];
  rows = [];
  cols = [];
  laser = [];
  worm = [];
  conRec = [];
  stars = [];
  sads = [];
}



function mousePressed() {
  if (startButton.length > 0) {
    if (startButton[0].useButton()) {
      startBoo = true;
      startButton = [];
      noCursor();
    }
  }
  laserFire = true;
}




function fillWormBlocks(x) {
  //******* c is number of worm segments*******
  for (c = 0; c < 10 + x; c++) {
    worm[c] = new Worm(7.5 + c * 15, rowColSpace);
  }
  //******* b is number of blocks *******
  for (i = 0; i < 50 + 10 * x; i++) {
    blocks[i] = new Blocks(rows[round(random(rows.length - 1))], cols[round(random(1, cols.length - 1))]);
  }
}




function collisions() {

  //Worm Block collision
  for (l = 0; l < worm.length; l++) {
    worm[l].display();
    for (m = 0; m < blocks.length; m++) {
      if (worm[l].contact(blocks[m])) {
        worm[l].turn();
      }
    }
  }
  //laser worm collision
  if (laser.length > 0) {
    for (d = 0; d < laser.length; d++) {
      for (e = 0; e < worm.length; e++) {
        if (laser[d].hitWorm(worm[e]) == true) {
          score.breakWorm();
          worm[e].hit();
          laser[d].laserHit();
        }
      }
    }
  }
  //Removes hit worm object
  for (d = 0; d < worm.length; d++) {
    if (worm[d].wormHit()) {
      worm.splice(d, 1);
    }
  }
  //laser block collision detection
  if (laser.length > 0) {
    for (h = 0; h < laser.length; h++) {
      for (k = 0; k < blocks.length; k++) {
        if (laser[h].hitBlock(blocks[k])) {
          score.destroyBrick();
          blocks[k].hit();
          laser[h].laserHit();
        }
      }
    }
  }
}






function displayMove() {
  //    Display Blocks
  for (a = 0; a < blocks.length; a++) {
    blocks[a].display();
  }
  //    Shooting Laser
  if (laserFire == true && laser.length < 10) {
    laser.push(new Laser(s.x, s.y));
  }
  // display and move laser
  if (laser.length > 0) {
    for (b = 0; b < laser.length; b++) {
      laser[b].laserDispMove();
    }
  }
  //    Display Worm
  for (c = 0; c < worm.length; c++) {
    worm[c].display();
    worm[c].move();
  }
  //  Score During Game
  score.gameScore();
}







function removeObjects() {
  // Remove Hits laser
  if (laser.length > 0) {

    //Removes off screen laser
    for (o = 0; o < laser.length; o++) {
      //laserSwitch();
      if (laser[o].offScreen()) {
        laser.splice(o, 1);
      }
    }
    //Removes lasers that hit block or worm
    if (laser.length > 0) {
      for (h = 0; h < laser.length; h++) {
        if (laser[h].laserBoo) {
          laser.splice(h, 1);
        }
      }
    }
    // Removes Block from Screen
    for (p = 0; p < blocks.length; p++) {
      if (blocks[p].tooSmall()) {
        score.destroyBrick();
        blocks.splice(p, 1);
      }
    }
  }
}



function winLose() {
  if (levelWin.condition(worm)) {
    levelWin.screen()
  } else if (lose.condition(worm)) {
    lose.screen();
  }
}

function stopLevel() {
  if (levelWin.condition(worm) == false && lose.condition(worm) == false) {
    return true;
  } else {
    return (false);
  }
}


function varReset() {
  laserFire = false;
}