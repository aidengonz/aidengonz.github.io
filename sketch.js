var player;
var enemy;
var playerDisplay = 0.3;
var x, y;
var isMovingLeft, isMovingRight, isMovingUp, isMovingDown;
// var player_health = 100;
// var enemy_health = 90;
// var blockGroup;
// var mapLayout = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]

function preload() {
    player = loadImage('assets/char_with_sword.png');
    block = loadImage('assets/block.png');
}

function setup() {
  createCanvas(1400, 700);
  x = width/2;
  y = height/2;
  isMovingLeft = false;
  isMovingRight = false;
  isMovingUp = false;
  isMovingDown = false;

  // blockGroup = createGroup();
  // for (var y = 0; y < mapLayout.length; y++) {
  //   for (var x = 0; x < mapLayout[y].length; x++) {
  //     if (mapLayout[y][x] == 1) {
  //       // Create the blocks
  //       var block = createSprite(x * 50 + 25, y * 50 + 25);
  //       block.addImage(block);
  //       blockGroup.add(block);
  //     }
  //   }
  // }
}

function draw() {
  background(220);
  
  handleKeys();
  displayPlayer();
}

function handleKeys() {
  if (isMovingUp) {
    y -= 5;
  }
  if (isMovingDown) {
    y += 5;
  }
  if (isMovingLeft) {
    x -= 5;
  }
  if (isMovingRight) {
    x += 5;
  }
}

function keyPressed() {
  if (key === 'w') {
    isMovingUp = true;
  }
  if (key === 's') {
    isMovingDown = true;
  }
  if (key === 'a') {
    isMovingLeft = true;
  }
  if (key === 'd') {
    isMovingRight = true;
  }

  if (key == "l") {
    player = loadImage('assets/sword_raised.png');
  }
}

function keyReleased() {
  if (key === 'w') {
    isMovingUp = false;
  }
  if (key === 's') {
    isMovingDown = false;
  }
  if (key === 'a') {
    isMovingLeft = false;
  }
  if (key === 'd') {
    isMovingRight = false;
  }

  if (key == "l") {
    player = loadImage('assets/char_with_sword.png');
  }
}

function displayPlayer() {
  imageMode(CENTER);
  image(player, x, y, player.width*playerDisplay, player.height*playerDisplay);
}