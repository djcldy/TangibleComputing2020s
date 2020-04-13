 // TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX(){

             background(214, 219, 223)
             noFill()
             stroke(0,50)



             // fill(255, 72, 72, 50)
             // stroke(255, 72, 72, 50)
             // ellipse (50, 50, 100, 100)

             fill(255, 59, 255, 150)
              
              for ( var x = 0; x < 10000; x++ ){

                  let a= sin(x/100)*width/2
                let b= x/5000*height

                  // add code here 
                  // console.log(x)
                
                  ellipse (a, b, a, a)
                  ellipse (width-a, b, a/20, a)
                  triangle(5000,b,a,b)

              }

            }

