function setup(){

  createCanvas(500,500)
  stroke(255)

}


let xPrev = 0
let yPrev = 0

function draw(){

  let radius = 8
  let x = mouseX
  let y = mouseY


let velocityX = xPrev - x
let velocityY = y - yPrev

fill(minute()/60*255,hour()/60*255,second()/60*255)


  fill(155,87,0,velocityX)
  line(x,y,velocityX,velocityY) 

   fill(155,7,0,velocityX)
  triangle(x,y,velocityX/2,velocityY/2) 


   
  ellipse(x-5,y-5,5,5) 
 

yPrev = y
xPrev = x
}