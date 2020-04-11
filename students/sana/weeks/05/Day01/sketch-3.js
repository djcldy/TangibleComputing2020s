var img;
let hipser

function preload(){
	hipser = loadImage('hipster.jpg')
}
function setup() {

  createCanvas(640, 360);

}


function draw() {
  background(0);
  image(hipser, 0, 0, 100,100);
}