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


  fill(66,87,0,velocityX)
  ellipse(x,y,velocityX,velocityY) 

   fill(9,7,0,velocityX)
  ellipse(x,y,velocityX/2,velocityY/2) 


   
  ellipse(x-5,y-5,5,5) 
  ellipse(x+5,y-5,5,5) 

   ellipse(x-10,y-10,10,10) 
  ellipse(x+10,y-10,10,10) 

yPrev = y
xPrev = x
}
