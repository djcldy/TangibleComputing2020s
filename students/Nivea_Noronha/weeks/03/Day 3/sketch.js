/*

Gradient Array

*/


function setup(){

  createCanvas(800,800);
  background(255)
  fill(0)

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
let y = height- time/60*height + random(-3,3)   //to make go up type height- second..//
let alpha = time/60*255
fill(alpha,0,225-alpha,alpha)               //alpha,0,255-alpha,alpha
stroke(random(235),222,240,alpha)
ellipse(x,y,time*radius,time*radius)

}

function heart(x,y,radius,radius){

  ellipse(x,radius/2,y,radius)
   ellipse(x,radius/2,y,radius)
   triangle(x + radius/2,y,x+radius/2,y, x,y+radius/2);
}