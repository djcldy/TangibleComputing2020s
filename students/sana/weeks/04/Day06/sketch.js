let capture;
let res = 25

function setup() {
  createCanvas(800, 400);
  capture = createCapture(VIDEO);
  capture.size(800, 400);
  rectMode(CENTER)
  capture.hide();
  stroke(255)
  image(capture,0,0)
 

}

function draw() {

 let Hr = hour ()
  let Mn = minute()
  for (var x = 0; x < width; x += res) {

    let s = second()
    let diff = Math.abs(s/60 - x/width)

    if (diff > 0.1) continue

    for (var y = 0; y < height; y += res){

        let c = capture.get(x,y) // gets pixel color of canvas returns [r,g,b,a]
  

 push()
strokeWeight (4)
  stroke(1,c[1],0)
   fill(c[2],0,c[4])
   rect(x,y,res,res, s*5, Hr, 10, Mn)
 strokeWeight (4)
  stroke(4,c[1],4)
   fill(c[1],0,c[1])
   rect(x,res, s*4, Hr, 10, Mn)
 
  pop ()

}


    }


  }



  


  