function setup(){

  createCanvas(800,800)
  TenThousandX()
  // OneThousandX()

}



function TenThousandX(){

  noFill()
 stroke(255,12,random(77,8,5))

  for ( var x = 0; x < 10000; x++ ){

    let a= sin(x/100)*width/2
    let b= x/10000*height
    let r = random(50,25,20)





    ellipse(a,b,r,r)

   

   

  }

}




