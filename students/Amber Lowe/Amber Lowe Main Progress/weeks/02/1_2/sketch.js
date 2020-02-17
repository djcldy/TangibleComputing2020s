/*

    Example Code: Interactive Gradient Array

*/
let xPrev = 0
let yPrev = 0

function setup(){

  createCanvas(1200,600);
  stroke(255)

}


function draw(){

    let radius = 5
    let x = mouseX
    let y = mouseY


    let velocityX = x - xPrev
    let velocityY = y - yPrev

    fill(second()/60*255,minute()/60*255,hour()/60*255)

    noStroke()
    fill(41,5,68,velocityY)

	ellipse(x,y,velocityX,velocityY)
	//rect(x,y,velocityX,velocityY)

	fill(95,0,100)
	ellipse(x,y,velocityX/2,velocityY/2)

	ellipse(x-5,y-5,5,5)
	ellipse(x+5,y-5,5,5)


    xPrev = x
	yPrev = y

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

 
   

}

function draw(){

	drawIceCream(second(),200,1)
	drawIceCream(minute(),400,2)
	drawIceCream(hour(),600,3)

	if (second()>58){
		background(255)
	}
}
function drawIceCream(time,posX,radius){

	let x = posX + sin(time)*20
	let y = height- time/60*height + random(-3,3)
	let alpha = time/60*255

	fill(alpha,0,255-alpha,alpha)
	noStroke()

	//ellipse(x,y,time*radius,time*radius)
	heart(x,y,time*radius,time*radius)


}

function heart(x,y,radius,radius){

	ellipse(x-radius/4,y,radius/2)
	ellipse(x+radius/4,y,radius/2)
	arc(x-radius/2,y,x+radius/2,y,x, y+radius/2);
}*/