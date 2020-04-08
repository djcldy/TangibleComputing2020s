let x = 0
let y = 0
let z = 0 

function setup() {
  createCanvas( 800, 800, WEBGL);

}

function draw() {
	
	background(255)
	translate(x,y,z) 
	fill(255,0,0)
	strokeWeight(5)
	sphere(200)
	
	x ++ 
	
	if (x > width/2) x = -width/2 
	
 }