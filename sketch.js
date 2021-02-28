const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var fallingObjects = [], player, farm, farmImage, umbrella;
var dropFrequency = 50;

function preload() {
  farmImage = loadImage('farm.png');
  umbrella = loadImage('umbrella.png');
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);

  player = Bodies.circle(width/2,550,50,{isStatic:true});
  World.add(world,player);
  farm = Bodies.rectangle(width/2,height-20,400,20,{isStatic:true,restitution:0.001});
  World.add(world,farm);
}

function draw() {
  noStroke();
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(20);
  
  text('Stop the acid rain from touching your farm!',210,100);
  text('Use the umbrella to push the raindrops away.',200,150);

  Body.setPosition(player,{x:mouseX,y:550});

  image(farmImage,farm.position.x,farm.position.y,400,20);
  image(umbrella,player.position.x,550,110,120);

  if(frameCount % dropFrequency === 0) {
    fallingObjects.push(new FallingObject(random(0,width),10,10,10));
  }

  for(var i = 0; i < fallingObjects.length; i++) {
    fallingObjects[i].display();
  }
  
  for(var i = 0; i < fallingObjects.length; i++) {
    if(isTouching(farm,fallingObjects[i].body)) {
      text('Game Over',370,400);
      noLoop();
    }
  }
  
}