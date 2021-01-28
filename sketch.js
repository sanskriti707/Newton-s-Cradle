
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var slingshot1;
var slingshot2;
var slingshot3;
var slingshot4;
var slingshot5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
  startX=width/2;
  startY=height/4+500;
  roof=new Ground(500,100,1000,30);
  ball1=new Ball(startX-bobDiameter*2,startY,bobDiameter);
  ball2=new Ball(startX-bobDiameter*1,startY,bobDiameter);
  ball3=new Ball(startX,startY,bobDiameter);
  ball4=new Ball(startX+bobDiameter*1,startY,bobDiameter);
  ball5=new Ball(startX+bobDiameter*2,startY,bobDiameter);
  slingshot1=new SlingShot(ball1.body,roof.body,-bobDiameter*2,0);
  slingshot2=new SlingShot(ball1.body,roof.body,-bobDiameter*1,0);
  slingshot3=new SlingShot(ball1.body,roof.body,0,0);
  slingshot4=new SlingShot(ball1.body,roof.body,bobDiameter*1,0);
  slingshot5=new SlingShot(ball1.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  slingshot1.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();

  //drawSprites();
 
}
function keyPressed (){
 if(keyCode=== UP_ARROW) {
   Matter.body.applyForce(ball1.body,ball1.body.position,{x: 50, y:45})
 }
}






function drawLine(constraint) {
  bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


