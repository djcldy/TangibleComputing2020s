var img;

function preload() {
  // img = loadImage('hamster.jpg');
  // img = loadImage('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  img = createImg('https://i.pinimg.com/originals/05/59/3e/05593e925e651314820bbb215b223a5f.jpg');
  img.hide();
  background(100);
  // loadImage('hamster.jpg', imageLoaded);
  // image(img, 0, 0);
}

function draw() {
  image(img, 0,0,width,height); 
  
}

// function imageLoaded(img) {
//   image(img, 0, 0);
// }
