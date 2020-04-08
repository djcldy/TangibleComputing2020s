let dots = []

function setup() {

	createCanvas(2400,1200, WEBGL);
	push()
	translate(-width/2, -height/2)
	setBackground()
	translate(0,0,100)
	drawGrid(1,1,0)
	pop()

	for (var j = 0; j < 10; j++){

		dot = getDot()
		dots.push(dot)

	}

}

function getDot(){

	let obj = {}
	obj.x = random(width)
	obj.y = random(height)
	obj.countX = random(-100,100)
	obj.countY = random(-100,100)
	obj.scale = random(0.01,0.5)
	obj.vel = random(0.001,0.02)
	obj.life = random(2500,5000)
	obj.time = 0
	obj.translate = random(1,200)

	return obj

}

let time = 0
function draw(){

	if (time > 600){

		push()
		// rotateX(random(TWO_PI))
		rotateY(random(TWO_PI))
		// rotateZ(random(-PI,PI))
		translate(-width/2+random(width), -height/2+random(height), 50)
		drawGrid(random(0.05,0.2),random(0.05,0.2),0.5)
		pop()

		// dot = getDot()
		// dots.push(dot)

		time = 0

	}

	time ++

	let newDots = []

	dots.forEach(dot =>{

		push()
		normalMaterial();

		dot.time++

		dot.countX +=0.1

		dot.countY +=0.1


		let tx = noise(dot.countX*0.01)
		let ty = noise(dot.countY*0.05)

		translate(dot.x+(tx-0.5)*100-width/2,dot.y+(ty-0.5)*100-height/2,500*sin(tx/2))
		translate(0,0,dot.translate)

		scale(0.1+tx/5)
		rotateX(frameCount * dot.vel);
		rotateY(frameCount * dot.vel);
		torus(70, 20);
		pop()

		if (dot.time < dot.life){
			newDots.push(dot)
		} else{
			console.log('dot die!')

		dot = getDot()
		newDots.push(dot)


		}


	})

	dots = newDots

	if (random()>0.999){
		randomSplat()
	}
	// console.log(time)
}

function drawGrid(dx,dy,threshold){

	console.log('GRID')
	let stepX = random(1,100)
	let stepY = random(1,100)
	let stpX =25
	let stpY = 25 

	i=random()
	j=0
	t= 2
	u=random(5,50)
	v=random(5,50)

	// threshold = 0 

	for (x = -stepX; x < width*dx; x += stpX) {

		i++

		for (y = -stepY; y < height*dy; y += stpY) {

			if (random()>threshold)gradientCell(x, y, stpX, stpY)

			sx = noise(i*t,j*t)*u
			stpY = stepY+sx

			j++

		}

		j = random()
		sy = noise(i*t,j*t)*v
		stpX = stepX+sy

	}


}

function gradientCell(x, y, w, h) {

	rectGradient(x, y, w, h)

	// if (random()>0.5) pacMan( x, y, w, h )
// line(xPos+w, yPos+h,xPos, dy,)
	// stroke(0)
	// rect(x,y,w,h)


}



function pacMan(xPos, yPos, w, h) {

	c2 = [random(255), random(255), random(255)]
	c1 = [random(255), random(255), random(255)]

	mX = w/2 + xPos
	mY = h/2 + yPos

	strokeWeight(3)

	for (dy = yPos; dy < yPos+h; dy+=10) {
	
		let t = dy / h
		let u = 1 - t
		stroke(c2[0] * t + c1[0] * u, c2[1] * t + c1[1] * u, c2[2] * t + c1[2] * u)
		line(xPos, yPos,xPos+w, dy)
		
	
	}



}

function rectGradient(xPos, yPos, w, h) {

	let str = 2
	let space = 2

	c2 = [random(255), random(255), random(255)]
	c1 = [random(255), random(255), random(255)]
	strokeWeight(str)

	for (dy = yPos; dy < yPos + h; dy+=space) {

		let t = (dy-yPos)/w 
		let u = 1-t
		stroke( c2[0]*t+c1[0]*u, c2[1]*t+c1[1]*u, c2[2]*t+c1[2]*u )

		line(xPos, dy, xPos + w, dy)


	}

}


function setBackground() {

	c2 = [random(255), random(255), random(255)]
	c1 = [random(255), random(255), random(255)]
	strokeWeight(1)

	for (y = 0; y < height; y++) {
		let t = y / height
		let u = 1 - t

		stroke(c2[0] * t + c1[0] * u, c2[1] * t + c1[1] * u, c2[2] * t + c1[2] * u)
		line(0, y, width, y)


	}




}

function randomSplat(){
	
	noStroke()
	console.log('SPLAT')
	push()
	translate(-width/2,-height/2,100)
	strokeWeight(1)
	stroke(255)

	fill(random(255),random(255),random(255),50)
	let x = random(width)
	let y = random(height) 
	let min = random(width/32,width/4)
	
	let num = random(50,100)

	for (k=0; k<num;k++){

		r = random(1,10) 
		t = random( -min, min)
		u = random( -min, min)
		ellipse(x+t,y+u,r,r)
		
	}
	
	pop()


	
}


function mousePressed() {
	
	// save an image 
	save('img.png')

}