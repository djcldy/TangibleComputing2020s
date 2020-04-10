xfunction setup(){

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


  fill(255,87,0,velocityX)
  line(255) 

   fill(55,7,0,velocityX)
  line(255)


   
  ellipse(x-5,y-5,5,5) 
  ellipse(x+5,y-5,5,5) 

   ellipse(x-10,y-10,10,10) 
  ellipse(x+10,y-10,10,10) 

yPrev = y
xPrev = x
}
