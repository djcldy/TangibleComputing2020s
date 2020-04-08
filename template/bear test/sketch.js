/*

Gradient Array

*/

let xprev = 0
let yprev = 0 


function setup(){

  createCanvas(800,800);
  stroke(255)

}
function draw(){
let radius = mouseX/5
let x = mouseX
let y = mouseY

let velocityX = x - xprev
let velocityY = y - yprev


  stroke(255,0,0)
  ellipse(x,y,velocityX,velocityY)
fill(255,255,191,velocityX)

fill(255,255,191)
ellipse(x,y,velocityX/2,velocityY/2)

ellipse(x-5,y-5,5,5)
ellipse(x+5,y-5,5,5)


xprev = x
yprev = y
}