

let t =0
function setup() {
  createCanvas(800, 800);
rectMode(CENTER)
noStroke()

   
}


//function mario(x,y,color,r1) {
  function mario (X,y){
  background(255);
  fill(255,0,0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(0,0,100,25)
  rect(x-10,0,100,25)
  pop()

   fill(0,0,255)
  push()
  translate(width/2,height*0.4)
  rotate(sin(t)*PI)
  rect(0,0,25,25)
  pop()
  

t+=0.01
}
//face
//  fill(255)
//  stroke(27)
//  strokeWeight(2)
//  ellipse(x,y,r1*18,r1*13)
//  //eyes
//  fill(255)
//  ellipse(x+r1*5,y,r1*4,r1)
//  fill(255)
//  ellipse(x-r1*5,y,r1*4,r1)
//  //eye pupil
//  fill(34,175,150)
// ellipse(x-r1*5,y,r1,r1)
//  fill(34,175,150)
// ellipse(x+r1*5,y,r1,r1)
//  fill(255)
// ellipse(x-r1*5,y,r1/2,r1)
//  fill(255)
// ellipse(x+r1*5,y,r1/2,r1)
// //nose
//  fill(0)
//  stroke(0)
// ellipse(x,y+18,r1*2,8)
// //wiskes
// stroke(39)
// noFill()
// arc(x-26,y+16,r1*2,20,0,3)
// stroke(39)
// noFill()
// arc(x-26,y+24,r1*2,20,0,3)
// stroke(39)
// noFill()
// arc(x+26,y+16,r1*2,20,0,3)
// stroke(39)
// noFill()
// arc(x+26,y+24,r1*2,20,0,3)

// //mouth
// fill(37,50,99)
// stroke(22,59,20)
// arc(x,y+40,r1*2,-24,1,-4,-6)
// // ears
// fill(10)
// stroke(0)
// arc(x-50,y-105,r1*2,100,0,4)
// fill(10)
// stroke(0)
// arc(x+50,y-105,r1*2,100,0,4)

 
//               }
//       function draw() {
     
//   background(0)

             
          
//       translate(width / 2, height / 2);


// cat(frameCount,10,11,18,13+(frameCount/2));
// }
//   