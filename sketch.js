var fr1, mr1 ,fr2, mr2 

function setup() {
  createCanvas(800,800);
  fr1=createSprite(400, 200, 50, 50);
  mr1=createSprite(400, 400, 80, 50);
  fr2=createSprite(500, 200, 50, 50);
  mr2=createSprite(500, 400, 80, 50);
  
  fr1.shapeColor="yellow"
  fr2.shapeColor="yellow"
  mr1.shapeColor="blue"
  mr2.shapeColor="blue"

  mr1.velocityY=-3
  mr2.velocityY=-3
  fr1.velocityY=3
  fr2.velocityY=3

}

function draw() {
  background(0);

 if(bounce(mr1,fr1)===true){
   mr1.velocityY=mr1.velocityY*(-1)
   fr1.velocityY=fr1.velocityY*(-1)
 }

 if(bounce(mr2,fr2)===true){
  mr2.velocityY=mr2.velocityY*(-1)
  fr2.velocityY=fr2.velocityY*(-1)
}
  
  drawSprites();
}