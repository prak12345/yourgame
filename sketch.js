var pitch,batsman,ball,bowler,f1,f2,f3,w1,w2;
var batsmanImg,ballImg,bowlerImg,fielderImg,wicketsImg;


function preload(){
  // batsmanImg = loadImage("451500-PFCHRP-213.jpg")
   ballImg = loadImage("Cricket-Ball-Free-PNG-Image.png")
   bowlerImg = loadImage("ClipartKey_678934.png")
   fielderImg = loadImage("fielder.png")
  
}



function setup() {
  createCanvas(1300,700);
   f1 = createSprite(1200,250,30,30);
  //  f1 = addImage(fielderImg);
   f2 = createSprite(800,530,30,30);
  // f2 = addImage(fielderImg);
   f3 = createSprite(100,530,30,30)


    f3.addImage(fielderImg);


  batsman = createSprite(910,240,30,30);
  bowler = createSprite(150,200,30,30);
  w1 = createSprite(980,240,5,30);
  w2 = createSprite(80,240,5,30);


}

function draw() {
  background(220);
  
  fill("#b5651d")
  rect(80,90,900,300)
  strokeWeight(6)
  stroke(220)
  line(200,90,200,390)
  line(850,90,850,390)
  line(60,160,200,160)
  line(60,320,200,320)
  line(850,320,1000,320) 
  line(850,160,1000,160) 
  
  

  
  
  
  
  
  drawSprites()
}