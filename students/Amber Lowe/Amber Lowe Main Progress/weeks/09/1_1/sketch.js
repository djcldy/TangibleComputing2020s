function setup() {
  createCanvas( 1200, 1200, WEBGL);

}

function draw() {
	
	background(255)
	
	rotateX(mouseX/width*PI)
	rotateY(mouseY/height*PI)
	fill(100,40,200)
	sphere(400)
  




}