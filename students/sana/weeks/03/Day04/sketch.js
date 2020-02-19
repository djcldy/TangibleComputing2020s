/*

Gradient Array

*/
var gif_createImg;


 


function setup(){

  createCanvas(800,800);
  background(0)


}


function draw(){

  drawIceCream(second(),200,1)
  drawIceCream(minute(),400,2)
  drawIceCream(hour(),600,3)

  if (second()>58){
    background(0)
     gif_createImg = createImg("https://media.giphy.com/media/3ohfFIJ9M9XCUkE6Na/giphy.gif");

  }

}

function drawIceCream(time,posX,radius){

  let x = posX + sin(time)*20
  let y = height- time/60*height + random(-3,3)
  let alpha = time/60*255
  fill(alpha,0,255-alpha,alpha)
  crazyHeart(x,y,time*radius,time*radius)

}

function crazyHeart(x,y,radius,radius){

  push()
  translate(x,y)

  rotate(random())
  // noStroke()
ellipse(radius/4,0,radius/2)
  ellipse(radius/4,0,radius/2)
    circle(radius/2,0, radius/2,y,0,radius/2);
  circle(radius/2,0, radius/2,y,0,radius/2);
  pop()

}