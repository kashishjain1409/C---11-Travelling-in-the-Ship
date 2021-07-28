var shiprunning,ship;
var seaImage;
function preload(){
shiprunning=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(0,0,400,400)
  sea.addImage(seaImage);
  sea.velocityX=-5;
  sea.scale=0.5;
  ship=createSprite(130,200,20,20);
  ship.addAnimation("movingShip",shiprunning);
  ship.scale=0.25;
  

  

}

function draw() {
  background("blue");
  if(sea.x < 0)
  { 
  sea.x = sea.width/8; 
  }
  drawSprites();
}