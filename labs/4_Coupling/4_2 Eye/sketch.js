function setup(){

  createCanvas(500,500)
  background(255)
  // eye( 50,50,[34,155,215],50 )
  // eye( 100,100,[255,155,215],5 )

  let spacing = 50 

  for (var x = 0; x < width; x+= spacing){

    for (var y = 0; y < height; y+= spacing){

      eye( x, y,[random(255),0,0], x/width*50 )

    }

  }


}

function eye(x,y,color,r1){

  fill(255)
  ellipse(x,y,r1*4,r1*2) // white of the eye 

  fill(color)
  ellipse(x,y,r1*2,r1*2) // iris 

  fill(0)
  ellipse(x,y,r1,r1) // pupil x,y,r1,r2 

  fill(255)
  ellipse(x+r1/2,y-r1/2,r1/2,r1/2) // pupil x,y,r1,r2 

}