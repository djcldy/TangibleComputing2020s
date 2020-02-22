

let t = 0
function setup(){

  createCanvas(1200,600);
  stroke(255)

}


function draw(){
  background(0)
  
  push()
  
    // scale(random(1,2)) //try uncommenting
  scale(sin(t)+1)
  
  drawIceCream(second(),200,1)
  drawIceCream(minute(),400,2)
  drawIceCream(hour(),600,3)
  
  pop()
  
  t+=0.1
  
  

}
function drawIceCream(time,posX,radius){

	let x = posX + sin(time)*20
	let y = height- time/60*height + random(-3,3)
	let alpha = time/60*255

	fill(alpha,255,0-alpha,244+alpha)
	noStroke()

	//ellipse(x,y,time*radius,time*radius)
	heart(x,y,time*radius,time*radius)


}

function heart(x,y,radius,radius){

  // background(0)
  push()
  translate(x,y)
  rotate(x/100)
  scale(sin(y/10)+1)
  ellipse(x-radius,y,radius/2)
  ellipse(x+radius/4,y,radius/2)
  arc(x-radius/2,y,x+radius/2,y,x, y+radius/2);
  pop()
  x+= random(10,3)
  y+= random()
  if (x > width) x = 7
  if (y >height) y = 0
}