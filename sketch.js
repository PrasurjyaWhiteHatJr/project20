var car1, car1Img;
var car2, car2Img;
var car3, car3Img;
var car4, car4Img;

var wall, wallImg;

var start1, start1Img;
var start2, start2Img;
var start3, start3Img;
var start4, start4Img;

var car1Deformation, car2Deformation, car3Deformation, car4Deformation;

var car1Weight, car2Weight, car3Weight, car4Weight;

var car1Speed, car2Speed, car3Speed, car4Speed;

var line, lineImg;

var a,b,c,aImg,bImg,cImg

function preload() {
    //To load Images

    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");

    wallImg = loadImage("wall.jpg");
    
    start1Img = loadImage("start.png");
    start2Img = loadImage("start.png");
    start3Img = loadImage("start.png");
    start4Img = loadImage("start.png");

    lineImg = loadImage("line.jpg");

    aImg = loadImage("A.png");
    bImg = loadImage("B.png");
    cImg = loadImage("C.png");
}

function setup() {
  createCanvas(1000, 600);
 
  //To create sprites

  car1 = createSprite(100,70,20,20);
  car1.addImage("car1", car1Img);
  car1.scale = 0.30 ;

  car2 = createSprite(100,225,20,20);
  car2.addImage("car2", car2Img);
  car2.scale = 0.22;

  car3 = createSprite(100,370,20,20);
  car3.addImage("car3", car3Img);
  car3.scale = 0.15;

  car4 = createSprite(100,530,20,20);
  car4.addImage("car4", car4Img);
  car4.scale = 0.22;


  wall = createSprite(947, 300);
  wall.addImage("Wall", wallImg);
  wall.scale = 0.63;


  start1 = createSprite(947, 70);
  start1.addImage("start1", start1Img);
  start1.scale = 0.2;

  start2 = createSprite(947, 225);
  start2.addImage("start2", start2Img);
  start2.scale = 0.2;

  start3 = createSprite(947, 370);
  start3.addImage("start3", start3Img);
  start3.scale = 0.2;

  start4 = createSprite(947, 530);
  start4.addImage("start4", start4Img);
  start4.scale = 0.2;


  line = createSprite(445, 1);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445, 150);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,300);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,450);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,599);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  //To assign weights

  car1Weight = random(400,1500);
  car2Weight = random(400,1500);
  car3Weight = random(400,1500);
  car4Weight = random(400,1500);

}

function draw() {
  background(128, 200, 119);
 
  //To add velocity to the sprites when mouse pressed over start button

  if (mousePressedOver(start1)) {
    car1.velocityX = random(5,9);
    car1Speed = car1.velocityX*10;
    car1Deformation = round (0.5*car1Weight*car1Speed*car1Speed / 22500);
  }
  
  if (mousePressedOver(start2)) {
    car2.velocityX = random(5,9);
    car2Speed = car2.velocityX*10;
    car2Deformation = round (0.5*car2Weight*car2Speed*car2Speed / 22500);
  }

  if (mousePressedOver(start3)) {
    car3.velocityX = random(5,9);
    car3Speed = car3.velocityX*10;
    car3Deformation = round (0.5*car3Weight*car3Speed*car3Speed / 22500);
  }

  if (mousePressedOver(start4)) {
    car4.velocityX = random(5,9);
    car4Speed = car4.velocityX*10;
    car4Deformation = round (0.5*car4Weight*car4Speed*car4Speed / 22500);
  }




  drawSprites();


  //To assign the functions when the cars hit the walls and the output reply

 if (car1.isTouching(wall)) {
   car1.velocityX = 0;
  
   if (car1Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,70);
    c = createSprite(947, 70);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (car1Deformation > 100 && car1Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,70);
    b = createSprite(947, 70);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (car1Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,70);
    a = createSprite(947, 70);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }

 }




 if (car2.isTouching(wall)) {
   car2.velocityX = 0;

   start2.destroy();

   if (car2Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,225);
    c = createSprite(947, 225);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (car2Deformation > 100 && car2Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,225);
    b = createSprite(947, 225);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (car2Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,225);
    a = createSprite(947, 225);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }

 }




 if (car3.isTouching(wall)) {
   car3.velocityX = 0;

    start3.destroy();

   if (car3Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,370);
    c = createSprite(947, 370);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (car3Deformation > 100 && car3Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,370);
    b = createSprite(947, 370);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (car3Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,370);
    a = createSprite(947, 370);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }
 }




 if (car4.isTouching(wall)) {
   car4.velocityX = 0;

   

   if (car4Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,530);
    c = createSprite(947, 530);
    c.addImage("c", cImg);
    c.scale = 0.7;
    
   }
  
   if (car4Deformation > 100 && car4Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,530);
    b = createSprite(947, 530);
    b.addImage("b", bImg);
    b.scale = 0.7;
    
   }
  
   if (car4Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,530);
    a = createSprite(947, 530);
    a.addImage("a", aImg);
    a.scale = 0.7;
    
   }
 }
}