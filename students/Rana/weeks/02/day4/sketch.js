// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX(){

             // add code here 
              background(0,0,0)
            
              stroke(100)
              ellipse(50,50,50,100)
                fill(165, 89, 189)
              strokeWeight(2)
              ellipse(200,200,100,100)
              

              for ( var x = 0; x < 10000; x+=5 ){



                  // add code here 
                  console.log(x)
                  let a = sin(x/10)*width
                  let b = random(x)
                  ellipse(a,b,a/10,a/10)
                  
                  ellipse(width - a,b,a/10,b/10)
                  

              }

            }