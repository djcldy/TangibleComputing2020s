function setup(){

             // do not change anything in setup 

              createCanvas(1000,1000,WEBGL);
              TenThousandX()

          }

          function TenThousandX(){
            
            for ( var x = 0; x < 10000; x++ ){

                let a = sin(x/30)*width/1
                let b = x/10000*height
                push()
                scale(0.5)
                fill(190,79,100,100);
                stroke(20,30,59);
                strokeWeight(1);
                torus(a/3,b/5);
                pop()



              }
            }


            


            