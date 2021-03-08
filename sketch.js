const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Events = Matter.Events
const Constraint= Matter.Constraint;
var engine
var world
var ground,div1
var plinkos=[];
var particles=[];
var bg;

function preload(){
 bg=loadImage("background.jpg")
}


function setup() {
  createCanvas(480,650);
 engine= Engine.create();
 world= engine.world;

 fill("khaki")
  ground= new Ground(200,640,560,20)
  div1= new Division(32,520,15,219);
  div2= new Division(100,520,15,219);
  div3= new Division(180,520,15,219);
  div4= new Division(250,520,15,219);
  div5= new Division(320,520,15,219);
  div6= new Division(390,520,15,219);
  div7= new Division(460,520,15,219);
  for(var j=40;j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width; j=j+60){
    plinkos.push(new Plinko(j,175));
  }

  for (var j=10; j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  
  for (var j=20; j<=width;j=j+70){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display(); 
  div1.display()
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  fill("red")
  for (var i =0; i<plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  
  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount% 60===0){
    particles.push(new Particle(random(width/2 -10,width/2 +10),10,10));

  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  stroke(120)
   fill("white") 
   text("PLINKO GAME",370,30)
  
}