function Blocks(x, y) {
  this.x = x;
  this.y = y;
  this.colors = ['#F8808D', '#8091F8', '#F8BE4D', 'yellow', '#1CEAA4', '#F2FB97', '#E3504C'];
  this.col = this.colors[floor(random(this.colors.length))];
  this.size = 15;
  this.changeSize = this.size;
  this.bottom = this.y + this.changeSize;
  this.rightLimit = this.x + 15;
  this.wide = 15;



  this.display = function() {
    push();
    fill(this.col);
    rect(this.x, this.y, this.wide, this.changeSize);
    pop();
  }

  this.hit = function() {
    this.changeSize = this.changeSize - this.size / 3;
    this.bottom = this.y + this.changeSize;
  }

  this.tooSmall = function() {
    if (this.changeSize <= 0) {
      return (true);
    } else {
      return (false);
    }
  }

}