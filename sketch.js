var frect, mrect;



function setup() {
  createCanvas(800,400);
  frect=createSprite(200,300,50,50);
  frect.shapeColor="blue";
  frect.debug=true;
  
  mrect=createSprite(400,100,50,50);
  mrect.shapeColor="yellow";
  mrect.debug=true;

}

function draw() {
  background(255,255,255);
  rectMode(CENTER);
  mrect.x=mouseX;
  mrect.y=mouseY;
  
  if(mrect.x-frect.x<=mrect.width/2+frect.width/2 &&
     frect.x-mrect.x<=mrect.width/2+frect.width/2 &&
     mrect.y-frect.y<=mrect.width/2+frect.width/2 &&
     frect.y-mrect.y<=mrect.width/2+frect.width/2){
   frect.shapeColor="red";
   mrect.shapeColor="red";
  }
  else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }

  drawSprites();
}