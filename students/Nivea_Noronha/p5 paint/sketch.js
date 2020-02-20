function setup(){

  createCanvas(800,800);
  

  background(255)
  

}



function draw(){

drawIceCream(second(),232,1)
drawIceCream(minute(),133,2)
drawIceCream(hour(),333,3)

if (second()>58){
  background(255)
}
}

function drawIceCream(time,posX,radius){

 let x = posX + sin(time)*20
 let y = height - time/60*height + random(-3,3)

 let alpha = time/60*255

 fill(alpha,0,255-alpha,alpha)
 heart(x,y,time*radius,time radius)

}

function heart(x,y,radius/4,radius){}