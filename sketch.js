var car,car2,wall;
var car,car2,wall;
var speed,weight;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 50,20,10);
  car.velocityX = random(20,30);
  car.shapeColor = "pink";

  car2=createSprite(50,300,20,10);
  car2.velocityX = random(20,30);
  car2.shapeColor = "blue";

  wall=createSprite(200,200,height/1,5)
  wall.shapeColor="white";

  speed=random(55,90);

  weight=random(400,1500);

}

function draw() {
  background("black");  
  
if(car||car2.isTouching(edges)){
  if (wall.x-car.x<(car.width+wall.widht)/2){
    car.velocityX=0;
    var deformatiom=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 &&deformation>100){
      car.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

  }
  
}
  
  
  drawSprites();
}