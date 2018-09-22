var grassSprites = [];
var spriteSize = 64;
var grassImage;

var upIsPressed = false;
var downIsPressed = false;
var rightIsPressed = false;
var leftIsPressed = false;

var ch = 0;

function keyPressed() {
    switch(keyCode) {
        case 87:
        case 119:
            upIsPressed = true
            break;
        case 83:
        case 115:
            downIsPressed = true
            break;
        case 68:
        case 100:
            rightIsPressed = true
            break;
        case 65:
        case 97:
            leftIsPressed = true
            break;
        default:
            break;
    }
}

function keyReleased() {
    switch(keyCode) {
        case 87:
        case 119:
            upIsPressed = false
            break;
        case 83:
        case 115:
            downIsPressed = false
            break;
        case 68:
        case 100:
            rightIsPressed = false
            break;
        case 65:
        case 97:
            leftIsPressed = false
            break;
        default:
            break;
    }
}

function preload() {
    grassImage = _newImage("res/Grass.png");
    treeImage = _newImage("res/Tree-1x1.png");
    waterImage = _newImage("res/Water.png")
}

function _newImage(path) {
    return loadImage(path, function(img) {
        img.resize(spriteSize, spriteSize);
    });
}

function _gridRand() {
    var vect = createVector(
        Math.floor(random(width / spriteSize)),
        Math.floor(random(height / spriteSize)));
    return vect;
}

function _newSprite(x, y, img) {
    return createSprite(
        x * spriteSize + spriteSize / 2,
        y * spriteSize + spriteSize / 2,
        spriteSize,
        spriteSize).addImage(img);
}

function setup() {
    createCanvas(512, 512);
    for (var y = 0; y < height / spriteSize; y++) {
        for (var x = 0; x < width / spriteSize; x++) {
            var sprite = _newSprite(x, y, grassImage);
        }
    }
    for (var i = 0; i < 5; i++) {
        pos = _gridRand();
        _newSprite(pos.x, pos.y, treeImage);
    }
    pos = _gridRand()
    ch = _newSprite(pos.x, pos.y, waterImage)
    console.log(ch);
}

function draw() {
    drawSprites();
    background(50);
    drawSprites();
    move();
}

//function keyPressed() {
  //if (keyCode == RIGHT_ARROW) {
    //spr.setSpeed(1.5, 0);
  //}
  //else if (keyCode == DOWN_ARROW) {
  //}
  //else if (keyCode == LEFT_ARROW) {
    //spr.setSpeed(1.5, 180);
  //}
  //else if (keyCode == UP_ARROW) {
  //}
  //else if (key == ' ') {
    //spr.setSpeed(0, 0);
  //}
  //return false;
//}

function move() {
  console.log(upIsPressed)
  if (upIsPressed) {
    ch.setSpeed(1.5, 270);
    console.log(ch)
  } else if (downIsPressed) {
    ch.setSpeed(1.5, 90);
  } else if (rightIsPressed) {
  }
}
