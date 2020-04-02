let x = 0
let y = 0
let z = 0 

function setup() {
  createCanvas( 800, 600, WEBGL);

}
function draw() {
   
	grid()

}	

function grid() {
	
	background(255)
	translate(x,y,z) 
	fill(random(255),random(255),random(255))
	strokeWeight(2)
	box(80)
	translate(0,100,0) 
	box(80)
	translate(0,100,0) 
	rotate(PI/2)
	box(80)
	translate(0,100,0) 
	box(80)
	translate(0,100,0) 
	box(80)
	rotate(PI/2)
    translate(0,100,0) 
	box(80)
	translate(0,100,0) 
	box(80)
	rotate(PI/2)
    translate(0,100,0) 
	box(80)
	rotate(PI/2)
    translate(0,100,0) 
	box(80)

	
	x ++ 
	y ++
	
	if (x > width/2) x = -width/2 
    if (y > height/2) y = -height/2 		
	
}