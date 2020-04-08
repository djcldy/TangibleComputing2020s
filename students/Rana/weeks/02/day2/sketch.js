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
              background(245, 66, 218)
              fill(255, 161, 241)
              stroke(100)
              ellipse(50,50,100,100)
                fill(165, 89, 189)
              strokeWeight(5)
              ellipse(200,200,100,100)
              

              for ( var x = 0; x < 10000; x+=20 ){



                  // add code here 
                  console.log(x)
                  let a = sin(x/100)*width*10
                  let b = random(x)
                  ellipse(98,b,a/20,a/20)
                  stroke(random(500), random(1000), random(255),50)
                  
                  ellipse(5 - a,height,a/10,b/10)
                  

              }

            }