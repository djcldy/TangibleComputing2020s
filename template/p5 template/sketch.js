// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 
              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX(){


              for ( var x = 0; x < 10000; x++ ){

                //console.log(x)
                //let a = random(width/2,width)
                let a= sin(x/100)*width/2
                let b= x/10000*height
                //let b = random(height)
                ellipse(a,b,a/10,a/10)
                stroke(random(255,random(255,random(255,8,5))))
                
                ellipse(width-a,b,a/10,a/10)
                stroke(77,0,0,77)
                ellipse(b,height-a,a/10,a/10)
                //ellipse(a,b,5,5)
                //line(0,b,a,b)

                  // add code here 

              }

            }