function setup(){

  createCanvas(800,800)
  TenThousandX()
  // OneThousandX()

}



function TenThousandX(){

  noFill()
  stroke(0,200)

  for ( var x = 0; x < 10000; x++ ){

    let a = random( width )  // x coordinate is random value between 0 and width of canvas
    let b = random( height ) // y coordinate is random value between 0 and height of canvas
    let r = random(50,25)
  

    ellipse(a,b,r,r)

  }

}
