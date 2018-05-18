var snake = [];
var directionX = 0;
var directionY = 0;
var speed = 7;
var snakeLength = 5;

function setup() {
  createCanvas(800,800);
  background(200);
  init();
  directionX = -1;
  frameRate(speed);
}

function init(){
  for(var i = 0; i <= snakeLength; i++){
    snake.push([(600-i*20), 400]);
    rect(snake[i][0], snake[i][1], 20, 20);
  }
}
  

function update(){
  background(200);  
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
  for(var i = 0; i < snakeLength; i++){
    rect(snake[i][0], snake[i][1], 20, 20);
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

function draw() {
  update();
  edge();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    directionY = 1;
    directionX = 0;
  } else if(keyCode === DOWN_ARROW){
    directionY = -1;
    directionX = 0;
  } else if(keyCode === RIGHT_ARROW){
    directionY = 0;
    directionX = 1;
  } else if(keyCode === LEFT_ARROW){
    directionY = 0;
    directionX = -1;
  }
}
