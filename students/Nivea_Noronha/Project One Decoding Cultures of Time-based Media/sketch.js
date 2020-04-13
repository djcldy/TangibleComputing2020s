//  https://p5js.org/examples/form-3d-primitives.html

let c1, c2


function setup() {

  createCanvas( windowWidth, windowHeight, WEBGL);

  c1 = [random(255),random(255),random(255)]
  c2 = [random(255),random(255),random(255)]

}



function draw(){


 drawSootball(second(),200,1)
 drawSootball(minute(),400,2)
 drawSootball(hour(),600,3)

if (second()>58){
  background(255)
}

}

function drawSootball(time,posX,radius){

let x = posX + sin(time)*20
let y = height- time/60*height + random(-3,3)   //to make go up type height- second..//
let alpha = time/60*255
fill(alpha,0,225-alpha,alpha)               //alpha,0,255-alpha,alpha
stroke(random(235),222,240,alpha)
ellipse(x,y,time*radius,time*radius)

}


function draw(){


 drawSoot(second(),200,1)
 drawSoot(minute(),400,2)
 drawSoot(hour(),600,3)

if (second()>58){
  background(255)
}

}



function drawSoot(time,posX,radius){

let x = posX + sin(time)*20
let y = height- time/60*height + random(-2,3)   //to make go up type height- second..//
let alpha = time/60*255
fill(alpha,0,90-alpha,alpha)               //alpha,0,255-alpha,alpha
stroke(random(235),222,240,alpha)
ellipse(x,y,time*radius,time*radius)

}





