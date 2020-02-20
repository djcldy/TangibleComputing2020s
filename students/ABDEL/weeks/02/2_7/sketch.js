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

             fill(89, 29, 255, 50)
              
              for ( var x = 0; x < 10000; x++ ){

                  // add code here 
                  // console.log(x)
                  let a = cos(x/75)*width 
                  let b = x/10000*height
                  ellipse (a, b, a/200, a/27)
                  ellipse (width-a, b, a/200, a/96)
                  line(5000,b,a,b)

              }

            }