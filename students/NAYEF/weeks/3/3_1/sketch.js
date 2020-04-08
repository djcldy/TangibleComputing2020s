/*

Gradient Array

*/



function setup(){

  createCanvas(1000,1000);
  background(255)


}


function draw(){

  wormWorm(second(),300,20)
  wormWorm(minute(),400,30)
  wormWorm(hour(),600,40)

  if (second()>58){
    background(191)
  }

}

function  wormWorm(time,posX,radius){

  let x = posX + sin(time)*20
  let y = height-time/60*height + random(-10,5)
  let alpha = time/60*255
  fill(alpha,0,200-alpha,alpha)
  PaintWorm(x,y,time*radius,time*radius)

}

function PaintWorm(x,y,radius,radius){

  push()
  translate(x,y)

  
   noStroke()
  rect(radius/4,0,radius/2,10,y+50)
 rect(radius/2,0,radius/4,12,y+2)
 triangle(radius/4,0, radius/4,x,y-10);
  pop()

}