// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX(){

              background(100,100,100)

             // fill(255,0,0)
             // stroke(100)

             // ellipse(50,50,100,100)           
             //  fill(0,255,0)
             //  strokeWeight(5)
             //  ellipse(200,200,100,100)
             // noStroke()
             // fill(0)


              for ( var x = 0; x < 10000; x++ ){

                  // add code here 
                  // console.log(x)
                
                  let a = sin(x/10)*width/2
                  let b = random(height)
                  ellipse(a,b,a/3,a/3)
                  ellipse(width-a,b,a/2,a/2)

              }

            }