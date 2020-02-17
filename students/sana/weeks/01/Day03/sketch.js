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
                let a = random(width)
                let b = random(height)


               
ellipseMode(RADIUS); 
fill(89,10,69,200); 
ellipse(a,b,a/50, b/50, a/10, b/10); 
ellipseMode(CENTER); 
fill(10,0,90,100); 
ellipse(a,b,a/100, a/100,a/60, a/60); 
fill(80,79,90,200); 
ellipse(a,b,b/100, a/100, b/60, a/60); 
ellipseMode(CENTER); 
fill(197,60,9,200); 
ellipse(a,b,b/100, a/100, b/60, a/60); 
ellipse(a,b,a/50, b/50, a/6, b/6); 



              }

            }