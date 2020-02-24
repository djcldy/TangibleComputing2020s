/// TenThousandX Assignment: 
          // Add to this code to create a drawing 
          // Note: do not delete anything

       function setup(){

        createCanvas(500,500)
        capture = createCapture(VIDEO)
      
       
       }

       function draw(){
        background(255)
        

        let spacing = second()

        for ( var x = 0; x < width; x+=spacing){
          
          for(var y = 0;y < height; y+= spacing/2){

            let color = capture.get(x,y)
            
            eye(x,y,[random(255),0,0], spacing/5)

          }
        
        }

       }

       function eye(x,y,color,r1){

     
       
       fill(0)

       fill(255)
       ellipse(x,y,r1*4,r1*2)
       
       fill(color)
       ellipse(x,y,r1*2,r1*2)

       fill(0)
       ellipse(x,y,r1,r1)

       fill(255)
       ellipse(x+r1/2,y-r1/2,r1/2,r1/2)


       
      
       
        }


       //  