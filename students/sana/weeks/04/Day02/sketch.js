

function setup() {
  createCanvas(800, 800);
  background(255);
 

 
 let spacing = 300
for (var x =0; x<width; x+= spacing){

 for (var y =0; y<height; y+= spacing){
//      //cat(x,y,[random(255),random(255),random(255)],random(2,12))
     cat(x,y,[random(255)],10,2)
}

function cat(x,y,color,r1) {

 


// fill(145,20,129)
//  ellipse(x+r1*2,y,r1*6,r1*4)
//  fill(69,112,55)
//  ellipse(x-r1*2,y,r1*6,r1*4)
//  fill(80,113,241)
//  ellipse(x,y-r1*2,r1*6,r1*3,r1*4)
//  fill(187,33,166)
//  ellipse(x,y+r1*2,r1*6,r1*4,r1*5)
//  fill(85,40,33)
//  ellipse(x,y,r1*4,r1*6,r1*2)
//   fill(85,17,220)
//   ellipse(x+r1*2,y,r1*4,r1*2)
//   fill(162,147,150)
//   ellipse(x-r1*2,y,r1*4,r1*2)
 fill(255)
 stroke(27)
 strokeWeight(2)
 ellipse(x,y,r1*20,r1*12)
 fill(145,20,129)
 ellipse(x+r1*5,y,r1*5,r1*2)
 fill(145,20,129)
 ellipse(x-r1*5,y,r1*5,r1*2)
 fill(162,147,150)
//   ellipse(x-r1*2,y,r1*4,r1*2)
 
              }
            }
          }
            
          
             // function draw(){
//let spacing = 10
//for (var x =0; x<width; x+= spacing){

  //for (var y =0; y<height; y+= spacing){


  // if (millis() >= 300+timer) {

  //flower(x,y,[random(255),random(255),random(255)],random(2,12))
   
   // timer = millis();
//
//}
//}
//
  