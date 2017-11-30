function ConfettiStar(){
  this.x = constrain(random(width), 200, width-200);
  this.y = constrain(random(height), 200, height-200);
  this.size = random(0.2,0.7);
  
  this.starDisplay = function(){
    push();
    translate(this.x,this.y);
    scale(this.size);
    stroke('white');
    strokeWeight(5);
    noFill();
    beginShape();
    vertex(200,0);    //1
    vertex(235,100);  //2
    vertex(325,100);  //3
    vertex(250,150);  //4
    vertex(300,260);  //5
    vertex(200,190);  //6
    vertex(100,260);  //7
    vertex(150,150);  //8
    vertex(75,100);   //9
    vertex(165,100);  //10
    vertex(200,0);    //11
    endShape();
    pop();
  }

}