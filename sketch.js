var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3
function preload()
{
	
}

function setup() {
	createCanvas(1500, 900);

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200,100,20,{restitution:1.2})

	World.add(world , ball);

	//Create the Bodies Here.
    ground1 = new Ground(width/2,670,width,20,{isStatic:false},{restitution:0.3},{friction:0},{density:1.2});
	ground2 = new Ground(1100,600,20,130);
	ground3 = new Ground(750,600,20,130);


	Engine.run(engine);
    ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.show();
  ground2.show();
  ground3.show();
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 20)
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.07,y:-0})
	}
}



