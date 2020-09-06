
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var mango1,mango2,mango3,mango4,mango5,stone1;
var platform;
var bird, stone1;
var tree,catapult;
var boy;

var gameState = "onSling";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 305, 300, 170);
	
	var tree = createSprite(800,350,50,50);
	tree = loadImage("sprites/tree.png");

	var boy = createSprite(500,200,50,50);
	boy = loadImage("sprites/boy.jpg");

    mango1 = new Mango(700,320,70,70);
	mango2 = new Mango(920,320,70,70);
	mango3 = new Mango(700,240,70,70);
	mango4 = new Mango(920,240,70,70);
	mango5 = new Mango(810,160,70,70);

    stone1 = new Stone(200,50);

    catapult = new sling(bird.body,{x:200, y:50});
}

function draw(){

    background("white");
    
    Engine.update(engine);
   
    mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
    ground.display();
    tree.display();
    stone.display();
    platform.display();
	catapult.display(); 
	boy.display();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 200, y: 50 });
       catapult.attach(stone.body);
       
    }
}
