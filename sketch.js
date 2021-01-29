
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;






function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
  isStatic:true  
  }
  var ball_options={
  restitution:1
  }
  ground=Bodies.rectangle(200,385,200,30,ground_options);
  World.add(world,ground);
  ball=Bodies.circle(200,40,20,ball_options);
  World.add(world,ball);


}

function draw() {
  background("green");
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


  drawSprites();
}