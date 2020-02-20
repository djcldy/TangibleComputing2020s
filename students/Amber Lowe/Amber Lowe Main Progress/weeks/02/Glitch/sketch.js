


function setup(){

  createCanvas(1200,600);
  stroke(255)

}

/*function draw(){

	let x = width/2 + random(-3,3)
	let y = height- second()/60*height
	let alpha = second()/60*255

	fill(alpha,0,255-alpha,alpha)
	noStroke()

	ellipse(x,y,second(),second())

	if(second()>58){
		background(255)
	}

 
   

}*/

function draw(){

	drawIceCream(second(),100,1)
	drawIceCream(minute(),200,2)
	drawIceCream(hour(),400,3)

	if (second()>58){
		background(0)
	}
}
function drawIceCream(time,posX,radius){

	let x = posX + sin(time)*20
	let y = height- time/60*height + random(-10,20)
	let alpha = time/60*255

	fill(alpha,255,0-alpha,244+alpha)
	noStroke()

	//ellipse(x,y,time*radius,time*radius)
	heart(x,y,time*radius,time*radius)


}

function drawIceCream(time,posX,radius){

	let x = posX + sin(time)*50
	let y = height- time/60*height + random(-40,10)
	let alpha = time/60*255

	fill(alpha,30,20-alpha,0+alpha)
	stroke(255,0,0)

	//ellipse(x,y,time*radius,time*radius)
	heart(x,y,time*radius/2,time*radius)


}

function heart(x,y,radius,radius){

  background(0)
  push()
  translate(x++,y)
  rotate(x/12)
  scale(sin(y/2)+1)


    ellipse(x-radius/2,y,radius/2)
	ellipse(x+radius/4,y,radius/2)
	rect(x-radius/10,y,radius)

	arc(x-radius/2,y,x+radius/2,y,x, y+radius/2);
	 pop()
  x+= (10,3)
  y+= random()
  if (x > width) x = 7
  if (y >height) y = 0
}



