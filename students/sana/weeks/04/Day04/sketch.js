

function setup(){

  createCanvas(800, 800)
  rectMode(CENTER) // draws rectangle at center


}

function draw() {

  background(0) 
  let second=60 // don't need this 
  push()
  translate(width/2, height/2);
  // moonLight(sin(frameCount/100)*width/4,sin(frameCount/20)*height/8,second()/4) // SP: try this another way
  moonLight(frameCount/second*20,13,12,49,20+(frameCount/4))
  pop()
  

             
         
}


function moonLight(x,y,r1){

  
  translate(x,y)
  // rotate(frameCount/100) // SP try some rotation
  fill(245)
  rect(x,y,r1*30,r1*30);
  fill(255,9,30)
  rect(x,y-2,r1*20,r1/2);
  fill(164,69,130)
  rect(x,y+6,r1*60,r1/2);
  rect(x,y-2,r1*20,r1/2);
  fill(64,9,110)
  rect(x-80,y+40,r1*60,r1/2);
  fill(64,9,110)
  rect(x-80,y+40,r1*60,r1/2);
  fill(69,90,110)
  rect(x-150,y+100,r1*60,r1);

}


