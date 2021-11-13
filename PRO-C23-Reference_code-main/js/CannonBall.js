class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true     
       // restitution:0.8,
      // friction:1.0,
      // density:1.0,

    };
    this.r = 20;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("assets/cannonball.png");
    
    World.add(world, this.body);
  }

  shoot() {
    var velocity=p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body, {x: velocity.x , y: velocity.y});
  }
  
  display() {
    //var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    
  }
}
