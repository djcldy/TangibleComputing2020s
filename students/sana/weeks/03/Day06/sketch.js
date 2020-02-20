var img;
var sprite;

function preload() {
  img = loadImage('PikPng.com_super-mario-world-png_1356777.png');
}

function setup() {
  createCanvas(600, 600);

  // create a sprite from a single image
  sprite = createSprite(300, 150);
  sprite.addImage(img);
}

function draw() { 
  background(220);
  drawSprite(sprite);
}