const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,680);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,660,480,20);
  for(var k = 0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
      }
      for(var j = 40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75,10,10));
      }
}

function draw() {  
  Engine.update(engine);
  background(0);  
 
  ground.display();
  for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
      }
      for(var j = 40; j<width; j=j++){
        plinkos[j].display();
      }
      
}

