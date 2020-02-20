/*

Gradient Array

*/



function setup(){

  createCanvas(800,800,WEBGL);
  background(0)


}


function draw(){

  drawIceCream(second(),100,1)
  drawIceCream(minute(),200,2)
  drawIceCream(hour(),300,3)

  if (second()>58){
    


  }

}

function drawIceCream(time,posX,radius){

  let x = posX + sin(time)*20
  let y = height- time/60*height + random(-3,3)
  let alpha = time/60*255
  fill(alpha,0,255-alpha,alpha)
  crazyHeart(x,y,time*radius,time*radius)

}

function crazyHeart(x,y,radius,radius){

  push()
  translate(x,y)

  rotate(random())
  // noStroke()
  cylinder(radius,radius)
  cylinder(radius/2,0,radius/2,y,0,radius/2)
  circle(radius/2,0, radius/2,y,0,radius/2);
  circle(radius/2,0, radius/2,y,0,radius/2);
   cylinder(radius,radius)
  pop()

}