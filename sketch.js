
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DB1,DB2,D3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,20)

	DB1=createSprite(1000,650,200,20);
	DB1.shapeColor="white"
	
	DB2=createSprite(900,620,20,80);
	DB2.shapeColor="white"

	DB3=createSprite(1100,620,20,80);
	DB3.shapeColor="white"

    ball = new paper(200,620,39)	
	
	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  ground.display();
  ball.display();
  if(keyCode===UP_ARROW) {
	paper.velocityX=300;
	paper.velocityY=10;
   } 
  drawSprites();
 
}




