function Worm(x, row) {
  this.x = x;
  this.y = 7.5;
  this.size = 15;
  this.speed = 1;
  this.row = row;
  this.hitTell = false;

  this.display = function() {
    push();
    stroke('black');
    strokeWeight(2);
    fill('brown');
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }

  this.move = function() {
    this.x = this.x + this.speed;
    
    if (this.x > width - this.size / 2) {
      this.y = this.y + this.row;
      this.speed = -1

    }
    if (this.x < this.size / 2) {
      this.y = this.y + this.row;
      this.speed = 1;
    }

  }


  this.contact = function(brick) {
    this.brick = brick;
    this.radius = this.size / 2
    this.distance = dist(this.x, this.y, brick.x + (brick.size / 2), brick.y + (brick.size / 2))
    if (this.distance <= this.radius + (brick.size / 2)) {
      return (true);
    } else {
      return (false);
    }

  }

  this.turn = function() {
    this.y = this.y + this.row;
    this.speed = (-this.speed);
  }

  this.hit = function() {
    this.hitTell = true;
  }

  this.wormHit = function() {
    if (this.hitTell == true) {
      return (true);
    }
  }

}