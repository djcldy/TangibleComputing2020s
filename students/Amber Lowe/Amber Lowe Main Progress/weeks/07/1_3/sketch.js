/*

    Example Code: Interactive Gradient Array

*/


function setup(){
  
 
  createCanvas(1200,600);
  stroke(0)

}

function draw(){

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

/*function draw(){

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