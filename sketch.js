const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var stone,hammer,rubber,iron;
var s1,s2,s3,s4,s5,s6;
var plane;

function setup() {
 var canvas = createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

//Create the Bodies Here
plane = new Plane(600,height,1200,20);
stone = new Stone(700,320,100,100);
hammer = new Hammer(10,100);
rubber = new Rubber(900,450,70);
iron = new Iron(300,350);

s1 = new Sand(505,450,10);
s2 = new Sand(510,450,10);
s3 = new Sand(515,450,10);
s4 = new Sand(520,450,10);  
s5 = new Sand(525,450,10);
s6 = new Sand(515,445,10);
}


function draw() {
  rectMode(CENTER);
  background("light blue");
  Engine.update(engine);

  plane.display();
  stone.display();
  hammer.display();
  rubber.display();
  iron.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();

  drawSprites();
}



