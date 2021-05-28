var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;
    
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColour=colour(255,0,0)
    }
    if(damage<10){
      wall.shapeColour=colour(0,255,0)
    }
  }
  drawSprites();
  
}
function hasCollided(lBullet,lWall){
  bulletRightEdge=lBullet.x+lBullet.width;
  wallLeftEdge=lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false
}