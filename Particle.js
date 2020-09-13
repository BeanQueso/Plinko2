class Particle{
    constructor(x, y){
      var  options = {
    isStatic:false,
    restitution:0.3,
    friction:1,
    density:0.2,
    
        }
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);

    
    }
    display(){
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    
    }
    
    }