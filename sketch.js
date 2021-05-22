const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;



var engine, world;
var object;
var box1
var box2,box3
var ground1,ground2,ball
function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


   var render = Render.create({ element: document.body, engine: engine, options: { width: 400, height: 400, wireframes: false } }); Render.run(render);

    //object = Bodies.rectangle(200,100,20, 20);
   // World.add(world,object);

   ball=new Bird(200,669,14) 
   box1=new Box(631,673,160,10)
    box2=new Box(550,630,10,100) 
    box3=new Box(710,630,10,100)
//ball=new Bird(100,380)
//ground1=new Ground(200,390,400,20)
ground2=new Ground(400,700,800,30)
   // console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display();
    ball.display();
    box2.display();
    box3.display();
    ground2.display();
  //  ground1.display();
   //rect(object.position.x,object.position.y,40,40);
keyPressed();
 
}

function keyPressed(){

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:0.022,y:-0.3})
}


}





