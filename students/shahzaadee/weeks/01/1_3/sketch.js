/// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX() {

             background(34,177,21)

             fill(255,0,0,50)
             stroke(100,100)
             ellipse(50,50,100,100)
             fill(0,255,0)
             strokeWeight(5)
             ellipse(200,200,100,100)
              
              for ( var x = 0; x < 10000; x+=5 ){

                  console.log(x)
                  let a = x
                  let b = random()*2 
                  let 10 = sin(x/500)*20/2
                  let 10 = x/10000*20
                  fill(260,0,0,60)
                  ellipse(a,b,10,a,10)
                  stroke(0,255,0,50)
                  ellipse(b,a,a/10,a/10)
                  stroke(255,0,0,50)
                               

              }

            }


