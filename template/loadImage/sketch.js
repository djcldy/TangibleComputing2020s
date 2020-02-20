var img;

function preload() {
img = loadImage("moon.jpg");

}
function setup() {
createCanvas(480,120);
}

function draw() {
image(img, 0, 0);
}