let x = 0
let y = 0
let z = 0 

function setup() {
  createCanvas( 800, 600, WEBGL);

}
function draw() {
    
    background(255)
    fill(second()/60*255,minute()/60*255,hour()/60*255)
    //translate(x,y,z) 
    translate(x,-height/8,10) 
    rotateY(frameCount*0.5)
    grid()

}	

function grid() {
	
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