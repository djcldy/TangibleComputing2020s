function setup(){

  createCanvas(800,800)
  TenThousandX()

}


function TenThousandX(){

  let step = width/10000

  stroke(1755,225) 

  for (var x = 0; x < 10000; x++){


    let a = step*x 
    let b = cos(x*0.7)*(x/75)
    ellipse(a,b+width/3,7,7)

  }

}
