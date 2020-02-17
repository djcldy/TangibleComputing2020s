         /*

    Example Code: Interactive Gradient Array

*/




        function setup(){

             // do not change anything in setup 

              createCanvas(1000,1000)
              TenThousandX()

          }

          function TenThousandX(){

              
              for ( var x = 0; x < 10000; x++ ){
                //.......... it will be in same position 10000 unless we put random

                //console.log(x)
                let a = random(width)
                let b = random(height)
            


noStroke()
fill(10,60,100,100)
circle(a,b,a/100, a/100,a/60, a/60); 

  }
}

              

            



              



            

