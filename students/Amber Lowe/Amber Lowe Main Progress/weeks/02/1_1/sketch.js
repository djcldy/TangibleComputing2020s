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

	//ellipse(x,y,velocityX,velocityY)
	rect(x,y,velocityX,velocityY)

	fill(90,0,200)
	ellipse(x,y,velocityX/2,velocityY/2)

	//ellipse(x-5,y-5,5,5)
	//ellipse(x+5,y-5,5,5)



	xPrev = x
	yPrev = y
   

}