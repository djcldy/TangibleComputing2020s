// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(2000,600)
              TenThousandX()

          }

          function TenThousandX(){

             //add code here 
             background(95,20,76)

             //fill(255,0,0)
             //stroke(10)
             //strokeWeight(5)

             //ellipse(100,80,100,100)

             //fill(255)
             

             //ellipse(200,200,100,100)
             //noStroke()
             //stroke(40,255,8)
             //noFill()
             //stroke(0,100)
             //stroke(255,255,255)
             //fill(0)

             //strokeWeight(7,4,3)
            

             stroke(165,242,243)
             noFill()


             //for (var random = 0;  random++)

             //fill (var random = 0;  random++}



              for ( var x = 0; x < 10000; x++){

                  // add code here 
                  //console.log(x);
                  let a= sin(x++/400)*width/2
                  let b= x/10000*height
                  ellipse(width-a,b,a/10,a/10)
                  //ellipse(a,b,10,10)
                  //line(a,b,0,0)
                  //triangle(a,b,10,10)
                  //rect(a,b,10,10)//r++
                  //point(a,b,10,10)
                  //quadrilateral(a,b,10,10,)
               

                  arc(a, b, 20, 80, 0, PI + HALF_PI)
                  

                

              }

            }