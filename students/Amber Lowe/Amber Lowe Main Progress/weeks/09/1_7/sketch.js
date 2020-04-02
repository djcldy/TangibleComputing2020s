let x = 0
let y = 0
let z = 0 

function setup() {
  createCanvas( 600, 800, WEBGL);

}
function draw() {
    
    background(48, 25, 52)
    fill(random(255),random(255),random(255))
    noStroke()
    rect(600,800,600,800)

    fill(random(255),random(255),random(255))
    rotateY(frameCount*0.5)
    grid()
    rotateX(frameCount*0.1)
    planes()
    invertedplanes()

}	

function grid() {
	
	translate(x,-height/8,10) 
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



function planes() {
	
	translate(x,+height/8,10) 
    strokeWeight(2)
	plane(80,40)
	translate(100,100,10) 
	plane(80,40)
	translate(100,100,10) 
	rotate(PI/4)
	plane(80,40)
	translate(100,100,10) 
	plane(80,40)
	translate(100,100,10) 
	plane(80,40)
	rotate(PI/4)
    translate(100,100,10) 
	plane(80,40)
	translate(100,100,10) 
	plane(80,40)
	rotate(PI/4)
    translate(100,100,10) 
	plane(80,40)
	rotate(PI/4)
    translate(100,100,10) 
	plane(80,40)

	
	x ++ 
	y ++
	
	if (x > width/2) x = -width/2 
    if (y > height/2) y = -height/2 		
	
}

function invertedplanes() {
	
	translate(x,+height/8,10) 
    strokeWeight(2)
	plane(40,80)
	translate(10,500,100) 
	plane(40,80)
	translate(10,500,100) 
	rotate(PI/4)
	plane(40,80)
	translate(10,500,100) 
	plane(40,80)
	translate(10,500,100) 
	plane(40,80)
	rotate(PI/4)
    translate(10,500,100) 
	plane(40,80)
	translate(10,500,100) 
	plane(40,80)
	rotate(PI/4)
    translate(10,500,100) 
	plane(40,80)
	rotate(PI/4)
    translate(10,500,100) 
	plane(40,80)

	
	x ++ 
	y ++
	
	if (x > width/2) x = -width/2 
    if (y > height/2) y = -height/2 		
	
}
