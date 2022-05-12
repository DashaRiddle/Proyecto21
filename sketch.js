var ball;
var ground,wall1,wall2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1800);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(260,100,20,ball_options);
World.add(world,ball);
ground=new Ground(width/2,1200,width,20);
wall1=new Ground(1100,1150,20,120);
wall2=new Ground(1300,1150,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  ellipse(ball.position.x,ball.position.y,40,40);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



