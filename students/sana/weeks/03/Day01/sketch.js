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
    background(65)
  }

}

function drawIceCream(time,posX,radius){

  let x = posX + sin(time)*20
  let y = height+time/60*height + rotate(-90)
  let alpha = time/60*255
  fill(alpha,0,255-alpha,alpha)
  crazyHeart(x,y,time*radius,time*radius)

}

function crazyHeart(x,y,radius,radius){

  push()
  translate(x,y)

  rotate(random())
   noStroke()
  rect(radius/4,0,radius/2,10,y+50)
 rect(radius/2,0,radius/4,12,y+2)
 triangle(radius/4,0, radius/4,x,y-10);
  pop()

}