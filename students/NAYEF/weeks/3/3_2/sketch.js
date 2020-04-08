/*

Gradient Array

*/



function setup(){

  createCanvas(800,800);
  background(255)


}


function draw(){

  wormWorm(second(),200,1)
  wormWorm(minute(),400,2)
  wormWorm(hour(),600,3)

  if (second()>58){
  
  PaintWorm(x,y,time*radius,time*radius)

}

//function PaintWorm(x,y,radius,radius){

 
}