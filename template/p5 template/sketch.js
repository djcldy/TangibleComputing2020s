// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 
              createCanvas(800,800)
              TenThousandX()

          }

<<<<<<< Updated upstream
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
=======


function setup(){

  createCanvas(800,800);
  stroke(255)
  background(255)
  fill(0)
}
function draw(){

drawIceCream(second(),200,1)
drawIceCream(minute(),400,2)
drawIceCream(hour(),600,3)



if (second()>58){
  background(255)
} 
function drawIceCream(time,posX,radius){
  let x = posX + sin(time)*20
let y = height - time/60*height + random(-3,3)
let alpha = time/60*255

fill(alpha,0,255-alpha,alpha)


ellipse(x,y,time*radius,time*radius)
}

>>>>>>> Stashed changes

              }

            }