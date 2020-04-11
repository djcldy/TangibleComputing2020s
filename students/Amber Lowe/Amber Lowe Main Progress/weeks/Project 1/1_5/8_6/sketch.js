
let particles =[] //code with a different shape

function setup() {
	
	createCanvas(1200,500)
	background(255)
	
	let p1 = {
		
			locX: random(width),
			locY: random(height), 
			color: [random(255),random(255),random(255)],
		    radius: random(1,100), 
			velX: 1,
		    velY: 1
	}
	
	let p2 = {
		
			locX: random(width),
			locY: random(height), 
			color: [random(255),random(255),random(255)],
		    radius: random(1,100), 
			velX: 1,
		    velY: 1
	}
	
	let p3 = {
		
			locX: random(width),
			locY: random(height), 
			color: [random(255),random(255),random(255)],
		    radius: random(1,100), 
			velX: 1,
		    velY: 1
	}
	
	let p4 = {
		
			locX: random(width),
			locY: random(height), 
			color: [random(255),random(255),random(255)],
		    radius: random(1,100), 
			velX: 1, 
		    velY: 1
	}
	
particles.push(p1)
particles.push(p2)
particles.push(p3)
particles.push(p4)
	
}

function draw() {
	
   
	for (var i = 0; i < particles.length; i++){
		
		let particle = particles[i] 
	
		fill(particle.color)
		frisbee(particle.locX,particle.locY,particle.radius,particle.radius)
		
		particle.locX += particle.velX	
		particle.locY += particle.velY
	
		if (particle.locX > width){
			particle.velX = particle.velX*(-1)
		}
	
		if (particle.locX < 0){
			particle.velX = particle.velX*(-1)
		}
	
		if (particle.locY > height){
			particle.velY = particle.velY*(-1)
		}
	
		if (particle.locY < 0){
			particle.velY = particle.velY*(-1)
		}
		
	}
	
}


function frisbee(x,y,radius,radius){

	ellipse(x-radius/2,y,radius/2)
	ellipse(x+radius/2,y,radius/2)
	
	arc(x-radius/2,y,x+radius/2,y,x, y+radius)
}