var car,car2,wall,wall2;
var speed,weight;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 50,20,10);
  car.velocityX = random(10,30);
  car.shapeColor = "pink";

  car2=createSprite(50,300,20,10);
  car2.velocityX = random(10,30);
  car2.shapeColor = "blue";

  wall=createSprite(200,200,height/1,5)
  wall.shapeColor="white";


  wall2=createSprite(350,200,5,400);
  wall2.shapecolor="white"

  speed=random(55,90);

  weight=random(400,1500);

}

function draw() {
  background("black");  
  
if(car||car2.isTouching(wall2)){
if (wall2.x-car.x<(car.width+wall2.widht)/2){
    car.velocityX=0;
    var deformatiom=0.5*weight*speed/22509;
    if(deformation>180)
    {
      car.shapeColour="red";
    }
  
    if(deformation<180 &&deformation>100){
      car.shapeColor="yellow";
    }
  
    if(deformation<100)
    {
      car.shapeColor="green";
    }

  }
  
}
  
  
  drawSprites();
}