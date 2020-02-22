	
	let bg
	function setup() {
    createCanvas(800, 800);
    
 bg = loadImage('file:///Users/sanamohamed/Documents/GitHub/TangibleComputing2020s/students/sana/weeks/03/Day06/mario_PNG126.png');
}

//--------------------------
function draw() {
	background (bg)

	let Hr = hour ()
	let Mn = minute()
	let Sc = second ()

	strokeWeight (6)
	stroke (100,55,119)
	fill(17,144,230)
	 rect(width/7, Sc*5, height/2, Hr, 10, Mn) 
	push()
	translate (100,100)
	
	strokeWeight (5)
	stroke (10,45,19)
	fill (34, 44, 150)
	rect (width/6, Sc*5, height/3, Hr, 10, Mn) 
	push ()
	translate (100, 100)
	
	strokeWeight (4)
	stroke (190,5,11)
	fill (99, 176, 177)
	rect (width/5, Sc*5, height/4, Hr, 10, Mn) 
	push ()
	translate (100, 100)
	
	strokeWeight (3)
	stroke (44,55,99)
	fill (66, 10, 44)
	rect(width/4, Sc*5, height/5, Hr, 10, Mn)
	push ()
	translate (100, 100)
	
	strokeWeight (2)
	stroke (50,75,89)
	fill (90, 160, 80)
	rect(width/3, Sc*5, height/6, Hr, 10, Mn)
	push ()
	translate (100, 100)

	strokeWeight (1)
	stroke (210,55,9)
	fill (254, 112, 210)
	rect (width/2, Sc*5, height/7, Hr, 10, Mn)
	pop ()

}