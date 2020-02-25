/*

Gradient Array

*/

let xPrev = 0
let yPrev = 0
function setup(){

  createCanvas(800,800);
  background(255)
  stroke(250)


}



function draw(){

let radius = 5
let x = mouseX
let y = mouseY 

let velocityX = x - xPrev
let velocityY = y - yPrev

fill(31, 4, 36,velocityX)
ellipse(x,y,velocityX,velocityY)

fill(255,200,100)  
ellipse(x,y,velocityX/2,velocityY/2)

  ellipse(x-5,y-5,5,5)
   ellipse(x+5,y-5,5,5)




 xPrev = x
 yPrev = y 
}