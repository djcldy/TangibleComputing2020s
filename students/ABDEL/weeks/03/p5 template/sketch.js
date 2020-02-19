/*

Gradient Array

*/

let xPrev = 0
let yPrev = 0

function setup(){

  createCanvas(800,800);
  stroke(255)

}


function draw(){

let radius = 5

let x = mouseX
let y = mouseY

let velocityX = x - xPrev
let velocityY = y - yPrev

fill(minute()/60*255,hour()/60*255,second()/60*255)

fill(255,215,0,velocityX*25)
stroke(235,222,240,velocityY*15)
ellipse(x,y,velocityX,velocityY)

fill(235,222,240,velocityX*15)
stroke(255,215,0,velocityY*15)
ellipse(x,y,velocityX/2,velocityY/2)

ellipse(x-5,y-5,5)
ellipse(x+5,y+5,5)

xPrev = x
yPrev = y


}