
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,40,40);
	dustbin1 = new Dustbin(1000,650,300,20);
	dustbin2 = new Dustbin(840,590,20,150);
	dustbin3 = new Dustbin(1140,590,20,150);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:130, y:-145

		})
	}
}