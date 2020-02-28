

function setup(){

  createCanvas(800, 800);


}


function moonLight(x,y,r1){

  
  translate(x,y)

fill(245)
  ellipse(x,y,r1*30,r1*30);
  fill(255,9,30)
  ellipse(x,y-2,r1*20,r1/2);
   fill(164,69,130)
    ellipse(x,y+6,r1*60,r1/2);
 ellipse(x,y-2,r1*20,r1/2);
   fill(64,9,110)
    ellipse(x-80,y+40,r1*60,r1/2);
fill(64,9,110)
    ellipse(x-80,y+40,r1*60,r1/2);
    fill(69,90,110)
    ellipse(x-150,y+100,r1*60,r1);
  }
function draw() {
      background(0) 
  let second=60
  
  push();
  translate(width/2, height/2);
  moonLight(frameCount/second*20,13,12,49,20+(frameCount/4));
  pop();
  

             
         
}

