
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball
var wall1, wall2

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	var ball_options
	{
      isStatic:false
	  restitution:0.3
	  friction:0
	  density:1.2
	}

	ball = Bodies.circle(200,11,1,ball_options)
	World.add(world,ball)

	ground = new Ground(width/2,670,width,20)
	wall1 = new Ground(1100,600,20,120)






	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  ground.show();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,1)
  
  drawSprites();
  World.update()
 
}

function keyPressed()
{
	if (keycode === UP_ARROW)
	{
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.025})
	}



}



