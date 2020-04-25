var laser1, laser2, laser3,laser4,edges;
var treasure, thief;
function setup() {
  createCanvas(400, 400);
  laser1 = createSprite(100,0,200,5);
  laser1.shapeColor = "red";
  laser1.velocityY = 2;
  
  laser2 = createSprite(300,100,200,5 );
  laser2.shapeColor = "green";
  laser2.velocityY = -2;
  
  laser3 = createSprite(300,300,200,5 );
  laser3.shapeColor = "yellow";
  laser3.velocityY = -2;
  
  laser4 = createSprite(100,150,200,5 );
  laser4.shapeColor = "blue";
  laser4.velocityY = -2;
  thief = createSprite(10,390,10,10);
  
  edges = createEdgeSprites();
}

function draw() {
  background("pink");
  
  fill("white")
  quad(390,0,380,10,390,20,400,10);

  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
   laser4.bounce(laser1);
   laser3.bounce(laser2);
  
  if(keyIsDown(RIGHT_ARROW)){
    thief.velocityX = 2;
    thief.velocityY = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    thief.velocityX = -2;
    thief.velocityY = 0;
  }
   if(keyIsDown(UP_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = -2;
  }
   if(keyIsDown(DOWN_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = 2;
  }
  
  if(laser1.isTouching(thief) || laser2.isTouching(thief) ||laser3.isTouching(thief) || laser4.isTouching(thief)){
    fill("black");
    textSize(25);
    text("THIEF IS CAUGHT",100,200);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    laser3.setVelocity(0,0);
    laser4.setVelocity(0,0);
    thief.setVelocity(0,0);
  }
  if(thief.x===395  || thief.y===5){
    text("THIEF IS SAME NOW ",100,200);
  }
  drawSprites();

}