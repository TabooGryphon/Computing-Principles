function Lose() {


  this.condition = function(worm) {
    this.worm = worm;
    for (i = 0; i < this.worm.length; i++) {
      if (this.worm[i].y >= height) {
        return (true);
      }
    }
  }
  
  this.screen = function(){
      push();
      cursor();
      background('black');
      sads.display();
      score.displayScore();
      textSize(48);
      textAlign(CENTER);
      fill('red');
      text('GAME OVER', width / 2, height * 0.4);
      text('YOU LOSE!!!', width / 2, height * 0.6);
      pop();
  }

}