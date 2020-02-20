for ( var x = 0; x < 10000; x++)
var x = 0
var y = 0


function setup() {
  createCanvas(500, 500);
  img = createImg('https://i.pinimg.com/originals/db/72/94/db729453eab32cba9463313eaa64921e.jpg');
 
  // img.hide();
  background(100);

}

function draw() {
  background(255)
  push()
  translate(x,y)
  rotate(x/100)
  scale(sin(y/100)+1)
  
  image(img,0,0,100,100);
  
  pop()
  x+= random()
  y+= random()
  if (x > width) x = 0
  if (y >height) y = 0

  
}

var img;
var x = 10
var y = 0


function setup() {
  createCanvas(500, 500);
  img = createImg('https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
 
  // img.hide();
  background(100);

}

function draw() {
  background(0)
  push()
  translate(x,y)
  rotate(x/100)
  scale(sin(y/100)+1)
  
  image(img,0,0,100,100);
  
  pop()
  x+= (10,3)
  y+= random()
  if (x > width) x = 7
  if (y >height) y = 0

  
}