var grassSprites = [];
var spriteSize = 64;
var grassImage;

function preload() {
    grassImage = _newImage("res/Grass.png");
    treeImage = _newImage("res/Tree-1x1.png");
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
}

function draw() {
    drawSprites();
    background(50);
    drawSprites();
}
