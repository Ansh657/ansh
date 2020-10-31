var wall,thickness
var bullet,speed,weight


function setup() {
  
  createCanvas(800,400);
  wall=createSprite(1200,200,thickness,height/2)
  bulet =createSprite(400, 200, 50, 50);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52) 
  
  function hasCollided(lbullet,lwall)
  {
     bulletRightEdge=lbullet.x+lbullet.width
     wallLeftEdge=lwall.x
     if (bulletRightEdge>=wallLeftEdge)
   
   {
     return true
   }
    return false 
     
  
    if (hasCollide(bullet,wall)) 
    {
      bullet.velocityX=0
      var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)
    }
    
      if (damage>10)
    {
      wall.shapeColor=color(250,0,0)
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
    
  }
}
function draw() {
  drawSprites();
  background(0);  
  boxm.x=mouseX
  boxm.y=mouseY
  
  if (boxm.x-boxf.x<boxm.width/2+boxf.width/2  
  && boxf.x-boxm.x<boxm.width/2+boxf.width/2
   && boxm.y-boxf.y<boxm.height/2+boxf.height/2  
    && boxf.y-boxm.y<boxm.height/2+boxf.height/2) 
       {
    boxm.shapeColor="red";
    boxf.shapeColor="red";
  }
  else {
    boxm.shapeColor="green";
    boxf.shapeColor="green";
  }
  if (boxm.x-boxf.x<boxm.width/2+boxf.width/2  
    && boxf.x-boxm.x<boxm.width/2+boxf.width/2)  {
      boxf.velocityX= boxf.velocityX*(-1)
      boxf.velocityY=  boxf.velocityY*(-1)
    }
  }
  drawSprites(); 
   bullet.display();
   wall.display();

