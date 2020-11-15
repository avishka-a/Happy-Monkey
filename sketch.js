
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
// Create Monkey
  monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  // create ground 
  ground = createSprite(200,350,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
}


function draw() {
background(255)
  
  //keep the ground going
  if(ground.x<0){
    ground.x=ground.width/2
  }
  // Make the monkey jump
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score:" + score, 500,500)
  
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100,50);
  
  
  
  //create gravity
  monkey.velocityY=monkey.velocityY +0.8
  
  monkey.collide(ground)
  
  spawnBananas();
   
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if (frameCount % 70 === 0){
     var rand=random(100,300)
    var banana = createSprite(width,rand,10,10);
    banana.addAnimation("banana_image", bananaImage) 
    banana.scale=0.1
    banana.velocityX=-3
   // banana.setLifetimeEach(-1);
  banana.lifetime=200
  }
  
  
  
}

function spawnObstacles(){
  
  if (frameCount % 200 === 0){
    
    var rocks = createSprite(width,330,10,10);
    rocks.addAnimation("rocks_image", obstaceImage) 
    rocks.scale=0.1
    rocks.velocityX=-3
    rocks.lifetime= 200
  }
  }



