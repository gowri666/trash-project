
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render= Matter.Render; 

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
 
	dustbinObj= new dustbin(1200,650)
	paperObject= new paper(200,450,70)
	groundObject= new ground(width/2,670,width,20)
	 

	Engine.run(engine);
	 
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}

