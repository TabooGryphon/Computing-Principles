function Laser(x, y) {
  this.x = x;
  this.y = y;
  this.laserLength = this.y + 15;
  this.x1 = this.x;
  this.hitRemove = false;
  this.y1 = this.y;
  this.laserBoo = false;

  this.clicked = function() {
    this.x1 = mouseX;
    this.y1 = mouseY;
    this.laserLength = this.y1 + 15
    return (true);
  }

  this.laserDispMove = function() {
    push();
    stroke('red');
    strokeWeight(4);
    line(this.x1, this.y1, this.x1, this.laserLength);
    this.y1 = this.y1 - 2;
    this.laserLength = this.laserLength - 2;
    pop();
  }


  this.hitBlock = function(other) {
    this.other = other;
    if (this.y1 < other.bottom && this.x1 >= other.x && this.x1 <= other.x + other.wide && this.y1 >= other.y) {
      return (true);
    }
  }

  this.hitWorm = function(worm) {
    this.worm = worm;
    this.distance = dist(this.x1, this.y1, this.worm.x, this.worm.y);
    if (this.distance <= worm.size / 2) {
      return (true);
    }
  }

  this.offScreen = function() {
    if (this.laserLength <= 0) {
      return (true);
    } else {
      return (false);
    }
  }

  this.laserHit = function() {
    this.laserBoo = true;
  }


  this.laserSwitch = function() {
    this.hitRemove = false;
  }

}