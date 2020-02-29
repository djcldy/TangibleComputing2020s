let capture //global variable

let xPrev = 0 
let yPrev = 0

function setup(){  //neon blues and pinks randomized growth movement 

  createCanvas(500,500);
  capture = createCapture(VIDEO)
  capture.hide();
 


}

function draw(){

	fish()
	fish2()



}


function fish(){

  let radius = 10 

  //let s = second()
  let x = mouseX
  let y = mouseY 
  

  let velocityX = x - xPrev
  let velocityY = y - yPrev

  fill(second()/60*255,hour()/60*60,minute()/60*255)

  rotate(x*2)
  ellipse(x,y,20,50)

  //fill(255)
  ellipse(x,y,25,25)
  noStroke()
  //fill(255,0,0)



  translate(x,y)
  push()
  //fill(0)
  rect(x-5,y-5,5,5)
  rect(x+5,y-5,5,5)

  xPrev = x 
  yPrev = y

}

function fish2(){

  let x = mouseX
  let y = mouseY 
  let velocityX = x + xPrev
  let velocityY = y + yPrev
    
  fill(second()/60*255,hour()/60*60,minute()/60*244)
  ellipse(x,y,12.5,25)


}
