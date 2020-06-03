const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    log1 = new Log(810,260,300, PI/2);
box6=new Box(850,260,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    

   
    
   
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    log1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    box6.display();   
}

