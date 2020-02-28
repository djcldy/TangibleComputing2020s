	
	
let capture 
          function setup(){
              createCanvas(800,800)
              capture=createCapture(VIDEO)
              capture.hide()
            
}

 function draw(){
background(255)

let spacing = (50)
for (var x =0; x<width; x+= spacing){

  for (var y =0; y<height; y+= spacing/2){
  

   // let color =capture.get(x,y)
 

  eye(x,y,color,spacing/4)
   image(capture, 0, 0, 320, 240);
  filter(INVERT);
}
 


          }
        }
      
      

      

  function eye(x,y,color,r1){




//let y =50
//let r1=10
//let r2=10
fill(255)
 ellipse(x,y,r1*4,r1*2)// white
fill(color)
 ellipse(x,y,r1*2,r1*2)// iris 
 fill(20)
 ellipse(x,y,r1,r1)//pupil
 fill(224)
 ellipse(x+r1/2,y-r1/2,r1/2,r1/2)//pupil


 

              }

function draw() {

  // background(255);

  for (var x = 0; x < width; x += res) {

    let s = second()
    let diff = Math.abs(s/60 - x/width)

    if (diff > 0.1) continue

    for (var y = 0; y < height; y += res){

        let c = capture.get(x,y) // gets pixel color of canvas returns [r,g,b,a]
        fill(c[0],0,c[2])
        rect(x,y,res,res)
        stroke(0,c[1],0)
        rect(x,y,res,res,10)

    }


  }

 }
