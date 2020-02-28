let capture //global variable

let xPrev = 0 
let yPrev = 0

function setup(){

  createCanvas(500,500);
  capture = createCapture(VIDEO)
 


}


function draw(){

  let radius = 5 

  let x = mouseX 
  let y = mouseY 

  let velocityX = x - xPrev
  let velocityY = y - yPrev

  fill(minute()/60*255,hour()/60*255,second()/60*255)


  ellipse(x,y,50,50)

  fill(0)
  ellipse(x,y,25,25)

  ellipse(x-5,y-5,5,5)
  ellipse(x+5,y-5,5,5)

  xPrev = x 
  yPrev = y

}