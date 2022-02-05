var bg;
var zombie,zombieImg;
var creeper,creeperImg
var skeleton,skeletonImg
var player,playerImg
var mobsGroup
var arrow,arrowImg,arrowGroup

function preload(){
bg = loadImage("bg.png")
zombieImg = loadImage("zombiee.png")
creeperImg = loadImage("creeper.jpg")
skeletonImg = loadImage("skele.png")
playerImg = loadImage("player.png")
arrowImg = loadImage("arrow.png")
}


function setup()
{
  createCanvas(600,600);

  player = createSprite(300,500,100,100)
  player.addImage(playerImg)
  player.scale = 2;
  mobsGroup = new Group()
  arrowGroup = new Group()


  

}

function draw() 
{
  background(bg);

  if(keyDown("RIGHT_ARROW")&&player.x<560){
    player.x = player.x +10
  }

  if(keyDown("LEFT_ARROW")&&player.x>40){
    player.x = player.x -10
  }

  if(keyDown("SPACE")){
    player.velocityX = 0
  }

  if(keyDown("space")) {
    arrow = createSprite(player.x,player.y - 130);
    arrow.addImage(arrowImg);
    arrow.velocityY = -8; 
    arrow.scale = 0.7;
    arrowGroup.add(arrow);
    //console.log(laser.x);
    
  } 

  mobs();
  drawSprites();
}

function mobs() {
  if(frameCount % 110 === 0) {
  
    var mobs = createSprite(Math.round(random(35,375)),-20);
    mobs.velocityY = 6;
    mobs.lifetime = 200;
    mobs.scale = random(0.6,1);
    //mobs.debug = true;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: mobs.addImage(zombieImg);
              mobs.setCollider("circle",-80,10,160);
              break;
      case 2: mobs.addImage(creeperImg);
              mobs.setCollider("circle",50,0,150);
              break;
      case 3: mobs.addImage(skeletonImg);
              mobs.setCollider("circle",0,0,170)
      default: break;
    }
    
    //console.log(astroid.x);
    mobsGroup.add(mobs);
  }
}