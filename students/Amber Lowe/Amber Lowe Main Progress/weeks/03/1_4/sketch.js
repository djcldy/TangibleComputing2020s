let capture //global variable

let xPrev = 0 
let yPrev = 0

function setup(){

  createCanvas(500,500);
  capture = createCapture(VIDEO)
  capture.hide();
 


}

function draw(){

	fish()



}


function fish(){

  let radius = 10 

  let s = second()
  let x = (mouseX,s/30)
  let y = mouseY 
  

  let velocityX = x - xPrev
  let velocityY = y - yPrev

  fill(minute()/60*70,hour()/60*60,second()/60*255)

  rotate(x*2)
  ellipse(x,y,20,50)

  //fill(255)
  ellipse(x,y,25,25)
  noStroke()
  //fill(255,0,0)

  fill(minute()/60*30,hour()/60*60,second()/60*25)
  ellipse(x,y,12.5,25)

  translate(x,y)
  push()
  //fill(0)
  rect(x-5,y-5,5,5)
  rect(x+5,y-5,5,5)

  xPrev = x 
  yPrev = y

}