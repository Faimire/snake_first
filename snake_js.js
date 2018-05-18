var snake = [];
var directionX = 0;
var directionY = 0;
var speed = 7;
var snakeLength = 10;
var spawnedFruit = []

function setup() {
  createCanvas(800,800);
  background(200);
  setTimeout(spawnFruit, 3000);
  init();
  directionX = -1;
  frameRate(speed);
}

function init(){
  snake = [];
  spawnedFruit = [];
  snakeLength = 10;
  for(var i = 0; i <= snakeLength; i++){
    snake.push([(400+(i*20)), 400]);
  }
}

function spawnFruit(){
  var xRandom = Math.floor(Math.random() * 40);
  var yRandom = Math.floor(Math.random() * 40);
  rect((xRandom * 20), (yRandom * 20), 20, 20);
  spawnedFruit.push([xRandom*20, yRandom*20]);
  setTimeout(spawnFruit, 3000); 
}
  
function update(){
  background(200);  
  textSize(32);
  text(snakeLength.toString(), 400, 720);
  for(var i = 0; i < spawnedFruit.length; i++){
    fill('red');
    rect(spawnedFruit[i][0], spawnedFruit[i][1], 20, 20);
  }
  for(var i = 0; i < snakeLength; i++){
    fill('white');
    rect(snake[i][0], snake[i][1], 20, 20);
  }
  snake.unshift([snake[0][0], snake[0][1]]);
  snake.pop();
  switch(directionX){
    case -1:
      snake[0][0] = snake[0][0] - 20;
      break;
    case 0:
      break;
    case 1:
      snake[0][0] = snake[0][0] + 20;
  }
  
  switch(directionY){
    case -1:
      snake[0][1] = snake[0][1] + 20;
      break;
    case 0:
      break;
    case 1:
      snake[0][1] = snake[0][1] - 20;
      break; 
  }
   
}

function edge(){
  switch(snake[0][0]){
    case -20:
     snake[0][0] = 800;
     break;
    case 800:
     snake[0][0] = 0;
     break;
  }
  switch(snake[0][1]){
    case -20:
     snake[0][1] = 800;
     break;
    case 800:
     snake[0][1] = 0;
     break;
  }
}

function hitDetectionSnake(){
  for(var i = 1; i < snakeLength + 1; i++){
    if(snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]){
      snakeLength = "dead press enter to restart";
    }
  }
}

function hitDetectionFruit(){
  for(var i = 0; i < spawnedFruit.length; i++){
    if(snake[0][0] === spawnedFruit[i][0] && snake[0][1] === spawnedFruit[i][1]){
      spawnedFruit.splice(i, 1);
      snake.push([(snake[snake.length-1][0]) + 20, (snake[snake.length-1][1]) + 20]);
      snakeLength++;
    }
  }
}


function draw() {
  update();
  edge();
  hitDetectionSnake();
  hitDetectionFruit();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(!directionX == 0){
      directionY = 1;
      directionX = 0;
    }
  } else if(keyCode === DOWN_ARROW){
    if(!directionX == 0){
      directionY = -1;
      directionX = 0;
    }
  } else if(keyCode === RIGHT_ARROW){
    if(!directionY == 0){
      directionY = 0;
      directionX = 1;
    }
  } else if(keyCode === LEFT_ARROW){
    if(!directionY == 0){
      directionY = 0;
      directionX = -1;
    }
  }
  if(snakeLength === "dead press enter to restart"){
    if(keyCode === ENTER){
      init();
    }
  }
}
