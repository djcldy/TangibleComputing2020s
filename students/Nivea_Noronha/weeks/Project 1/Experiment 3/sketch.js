


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

                //console.log(x)
                //let a = random(width/2,width)
                let a= sin(x/25)*width/2
                let b= x/10000*height
                //let b = random(height)
                ellipse(a,b,a/10,a/10)
                ellipse(width-a,b,a/10,a/10)
                
             
                ellipse(a,b,5,5)
                line(0,b,a,b)

                  // add code here 

              }

            }




