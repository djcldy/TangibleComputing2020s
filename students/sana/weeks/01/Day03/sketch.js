/*

    Example Code: Interactive Gradient Array

*/




        function setup(){

             // do not change anything in setup 

              createCanvas(1000,1000)
              TenThousandX()

          }

          function TenThousandX(){
//background(90,155,215)
//fill(255,0,0)
//stroke(100)

//ellipse(50,50,50,100)
//fill(255,0,0)
//strokeWeight(5)
//ellipse(200,50,200,100)
//fill(255,0,0)
//strokeWeight(30)

              
              for ( var x = 0; x < 10000; x++ ){
                //.......... it will be in same position 10000 unless we put random

                //console.log(x)
                //let a = random(width)
                //let b = random(height)

                //if we want them all vertical let b= x/10000*height
                let a = sin(x/100)*width/2
                let b = x/10000*height

              ellipse(a,b,a/60,a/60)
              ellipse(width-a,b,a/6,a/10)
              stroke(200,60,25,20)
                ellipse(a,b,a/50,a/50)
              ellipse(width-a,b,a/150,a/10)
              stroke(10,60,90,60)
              ellipse(a,b,a/40,a/40)
              ellipse(width-a,b,a/10,a/10)
              stroke(10,60,0,2)
              ellipse(a,b,a/40,a/40)
              ellipse(width-a,b,a/10,a/10)
              stroke(70,80,80,6)
            strokeWeight(4)

              
//if we want lines we put line(0,b,a,b), 0 to start the line from begining of canvas
                  // add code here 



              }

            }