

let a = 0.0;
let s = 0.0;


function setup() {
  createCanvas(800, 800);
  //background (255)
            
         //     let spacing = 100
//for (var x =0; x<width; x+= spacing){

// for (var y =0; y<height; y+= spacing){
//cat(x,y,[random(255),random(255),random(255)],random(1,20))
     
   
}
//}
  
//}

function cat(x,y,color,r1) {

//face
 fill(color)
 stroke(27)
 strokeWeight(2)
 ellipse(x,y,r1*18,r1*13)
 //eyes
 fill(255)
 ellipse(x+r1*5,y,r1*4,r1)
 fill(255)
 ellipse(x-r1*5,y,r1*4,r1)
 //eye pupil
 fill(34,175,150)
ellipse(x-r1*5,y,r1,r1)
 fill(34,175,150)
ellipse(x+r1*5,y,r1,r1)
 fill(255)
ellipse(x-r1*5,y,r1/2,r1)
 fill(255)
ellipse(x+r1*5,y,r1/2,r1)
//nose
 fill(0)
 stroke(0)
ellipse(x,y+18,r1*2,8)
//wiskes
stroke(39)
noFill()
arc(x-26,y+16,r1*2,20,0,3)
stroke(39)
noFill()
arc(x-26,y+24,r1*2,20,0,3)
stroke(39)
noFill()
arc(x+26,y+16,r1*2,20,0,3)
stroke(39)
noFill()
arc(x+26,y+24,r1*2,20,0,3)

//mouth
fill(37,50,99)
stroke(22,59,20)
arc(x,y+40,r1*2,-24,1,-4,-6)
// ears
fill(10)
stroke(0)
arc(x-50,y-105,r1*2,100,0,4)
fill(10)
stroke(0)
arc(x+50,y-105,r1*2,100,0,4)

 
              }
      function draw() {
  background(102);

  //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
  a = a + 0.04;
  s = cos(a) * 2;                 
          
      translate(width / 2, height / 2);
  scale(s);
  fill(color);

cat(0,0,50,50)
}

  