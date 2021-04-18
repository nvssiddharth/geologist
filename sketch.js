const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ellipse1,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(500,500,50,80);
    iron = new Iron(450,500,60,60);
    ellipse1 = new Rubber(400,400,30); 
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    stone.display();
    plane.display();
    hammer.display();
    iron.display();
    ellipse1.display();
 
}