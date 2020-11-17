var bullet, wall;
var speed, weight, thickness;


function setup() {

  createCanvas(1200, 600);
  

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  
  bullet = createSprite(0, 175, 20, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1100, 200, thickness, 300);
  wall.shapeColor = "white";

}

function draw() {
  background("black")




  if(collided(bullet, wall)){

    bullet.velocityX = 0;
    
  var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (deformation>10){
      wall.shapeColor = "red";
    }
    if(deformation<10){
      wall.shapeColor = "green";
    }  
 
  }
 

  bullet.depth = wall.depth;
  bullet.depth = bullet.depth+1;
  
  drawSprites();
}

function collided(bullet, wall){

  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    return true;
  }
  else{
    return false;
  }
     
}
