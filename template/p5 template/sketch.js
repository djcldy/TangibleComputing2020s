
let xPrev = 0
let yPrev = 0

function setup(){

  createCanvas(800,800);
  stroke(255)
}

function draw(){

  background(255,0,0)
   let radius = 5
  let x = mouseX
  let y=  mouseY

  let velocityX = x = xPrev
  let velocityY = y = yPrev

  fill(0,255,0,velocityX)
  ellipse(x,y,velocityX,velocityY)
ellipse(x-5,y-5,5,5)
ellipse(x,y-5,5,5)
  xPrev = x
  yPrev = y
  }
