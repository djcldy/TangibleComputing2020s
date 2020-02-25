function setup(){

  createCanvas(800,800)
  TenThousandX()

}


function TenThousandX(){



  let step = width/10000

  stroke(175,215,random(33,24,12)) 

  for (var x = 0; x < 10000; x++){



                //console.log(x)
          


    let a = step*x 
    let b = sin(x*0.6)*(x/25)
    ellipse(a,b+width/3,7,7)
      ellipse(a,b+width/3,7,7)
        ellipse(a,b+width/3,7,7)



    

  }

}



