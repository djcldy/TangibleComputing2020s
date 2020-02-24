


          // TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX(){

             /*background(16,87,83)
             fill(25,0,0)
             stroke(100)

             ellipse(50,50,100,100)

             fill(255,0)
             strokeWeight(5)

             ellipse(65,65,100,100) */
              
              for ( var x = 0; x < 10000; x++ ){

                fill(1)

                //console.log(x)
                let a = sin(x/100)*width/2
             
                let b = random(height)
                ellipse(a,b,a,a)
                stroke(99,12,random(77,8,5))
                
                ellipse(width-a,b,a,a)
                stroke(99,70,random(17,8,5))
                
                ellipse(b,a,a/10,a/10)
                //ellipse(a,b,5,5)
                //line(0,b,a,b)

                  // add code here 

              }

            }



