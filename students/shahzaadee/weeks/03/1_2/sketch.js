/// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX() {

             background(185, 245, 66)

             fill(255,0,0,50)
             stroke(100,100)
             ellipse(50,50,100,100)
             fill(0,255,0)
             strokeWeight(5)
             ellipse(200,200,100,100)
              
              for ( var x = 0; x < 10000; x+=5 ){

                  // add code here 
                  console.log(0)
                  let a = sin(x/500)*4/2
                  let b = x/10000*height
                  fill(300,0,0,60)
                  ellipse(a,b,1000,a,10)
                  stroke(0,300,0,50)
                  ellipse(b,a,a/10,a/10)
                  stroke(350,0,0,50)
                  ellipse(b,height,-a,a/2,a/2)
                  ellipse(width/2, height/2, 20, 20);
              

              }

            }


