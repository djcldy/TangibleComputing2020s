/*

Gradient Array

*/



function setup(){

  createCanvas(800,800);
  background(255)


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
  crazyHeart(x,y,time*radius,time*radius)

}

function heart(x,y,radius,radius){

  noStroke()
  ellipse(x-radius/4,y,radius/2)
  ellipse(x+radius/4,y,radius/2)
  triangle(x-radius/2,y, x+radius/2,y, x, y+radius/2);

}


function crazyHeart(x,y,radius,radius){

  push()
  translate(x,y)

  rotate(random())
  // noStroke()
  ellipse(radius/4,0,radius/2)
  ellipse(radius/4,0,radius/2)
  triangle(radius/2,0, radius/2,y,0,radius/2);
  pop()

}