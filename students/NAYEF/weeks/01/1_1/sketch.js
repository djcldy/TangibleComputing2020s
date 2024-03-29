/*

    Example Code: Interactive Gradient Array

*/


function setup(){

  createCanvas(800,600);
  stroke(255)

}

function draw(){
  background(255)

  let numCol = 20
  let numRow = 20
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box  

  for (var col = 0; col < numRow; col++){

    for (var row = 0; row < numCol; row++){
    
      fill(col/numCol*255,row/numRow*255,mouseX/width*255)   
      push()
      translate(row*stepX,col*stepY)
      rotate(dist(row*stepX,col*stepY,mouseX,mouseY)/600*TWO_PI) 
      ellipse(0,0,stepX,stepY)
      pop()

    }

  }

}