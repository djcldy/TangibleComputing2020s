


        function setup(){

             // do not change anything in setup 

              createCanvas(1000,1000);
              TenThousandX()

          }

          function TenThousandX(){
            for ( var x = 0; x < 10000; x++ ){
                //.......... it will be in same position 10000 unless we put random

                //console.log(x)
                //let a = random(width)
                //let b = random(height)

                //if we want them all vertical let b= x/10000*height
                var a = sin(x/300)*width/1
                let b = x/10000*height
               
//background(120,150,200);
fill(40,14,0,100); 
stroke(100,0,70);
strokeWeight(1);
ellipse(a,b,a/15,b/200,a/4);
fill(205,14,0,100); 
stroke(100,40,0,300);
strokeWeight(1);
rect(a,b,a/100,a/10);
fill(205,14,0,100);
stroke(10,88,70);
strokeWeight(2);
quad(a,b,a/40,a/1,b/2);
fill(76,90,90,200); 
stroke(180,80,78);
strokeWeight(1);
quad(a,b,a/40,a/1,b/20);
fill(69,149,40,100); 
stroke(100,70,78);
strokeWeight(1);
ellipse(a,b,a/200,a/2,a/1);
fill(70,90,90,50); 
stroke(80,80,78);
strokeWeight(1);
quad(a,b,a/45,a/1,b/10);



//fill(166,0,255,50);// if (20,14,90,50) 50 for transperency
//ellipse(150,400,400,600);




              }
            }


            