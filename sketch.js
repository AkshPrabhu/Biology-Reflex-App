var startButton, stopButton, resetButton, box, timeout, timer, extraTimer;
var gameState;

function setup() {
  createCanvas(displayWidth,displayHeight);
  timer=0;
  extraTimer=0;
  gameState="menu";
  startButton=createButton("Start Activity");
  startButton.position(displayWidth/2-150,displayHeight/2+200);
  startButton.mousePressed(startTimeout)
  stopButton=createButton("Stop Activity");
  stopButton.position(displayWidth/2+50,displayHeight/2+200);
  stopButton.mousePressed(ifStopButtonPressed);
  box=createSprite(displayWidth/2-10,displayHeight/2,displayWidth/6,displayHeight/3.375)
  box.shapeColor="red"
}

function draw() {
  background(0);
  fill("white")
  textSize(30)
  textFont("Gill Sans MT")
  text(timer/10,displayWidth-100,displayHeight-100)
  if (box.shapeColor==="green" && frameCount % 3 == 0 && timer<120) {
    timer=timer+1;
    //extraTimer=timer;
  }
  if (timer>=120){
    text("Time Up!",displayWidth/2-75,200)
    extraTimer=timer;
    gameState="end"
  }
  stopTimeout();
  drawSprites();
}

function colorRand(){
  box.shapeColor="green"
}

function startTimeout(){
  gameState="playing"
  setTimeout(colorRand, random(2000,7000));
  startTimer();
}

function ifStopButtonPressed(){
  extraTimer=timer;
  gameState="end"
}

function stopTimeout(){
  if (gameState==="end"){
    timer=0;
    text(extraTimer/10+" seconds is your reaction time.",displayWidth/2+200,displayHeight/2)
    text("Reload the page to try again!",displayWidth/2+200,displayHeight/2+100)
  }
}

