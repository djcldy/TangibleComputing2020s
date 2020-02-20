function setup(){

  createCanvas(800,800)
  TenThousandX()

}


// Example: Perlin Noise

function TenThousandX(){

  let t = 275

  stroke(7,75)
    noFill()

    let stepW = width/10000
    let stepH = height/10000

    for (var x = 0; x < 10000; x++){

      let a = stepW*x 
      let b = noise(x*t)*599+width/75
      let c = noise(x*t)*height
      line(a,b,a,c)
    
    }

}