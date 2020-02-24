/// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

          function setup(){

             // do not change anything in setup 

              createCanvas(800,800)
              TenThousandX()

          }

          function TenThousandX() {

             background(255,0,0)
             noStroke()
             fill(255)
              
              for ( var x = 0; x < 10000; x++ ){

                heart(x,random(0,height),random(1,3))

              }

}


function heart(x,y,r){
  let d = r*2 // diameter 
  ellipse(x-r,y,d,d) 
  ellipse(x+r,y,d,d) 
  triangle(x-d,y,x+d,y,x,y+r*2)

}


