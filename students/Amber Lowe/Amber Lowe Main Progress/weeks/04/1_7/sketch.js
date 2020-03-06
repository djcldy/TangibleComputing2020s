let capture;
let res = 10
let res2 = 30

function setup() {
  createCanvas(800, 400);
  capture = createCapture(VIDEO);
  capture.size(800, 400);
  rectMode(CENTER)
  capture.hide();
  stroke(255)
  image(capture,0,0)
  // noStroke()/
}

function draw() { //neon pink and blue diagional movement rectangular layered movement 

  // background(255);

  for (var x = 0; x < width; x += res) {

    let s = second()
    let diff = Math.abs(s/60 - x/height)
    let riff = Math.abs(s/58 - y/width)


    if (diff > 0.1) continue
    if (riff < 0.1) continue	

    for (var y = 0; y < width; y += res2){

        let c = capture.get(x,y) // gets pixel color of canvas returns [r,g,b,a]
    
        fill(c[1],0,c[2])
        rect(x,y,res,res)
        rect(y,x,res,res)
        rect(y,x,res2,res2)
        stroke(c[1],0,c[2])
        rect(x,y,res,res)

        box(x,y,[random(200),random(1),random(26)],random(10,6))


    }


    function box(x,y,color,r1){


  push()
  translate(x,y)
  rotate(x/100)
  scale(sin(y/10)+1)


	noStroke()

    fill(255,110,199)
	rect(x,y,r1*2.5,r1*2) //neon pink
	
	fill(21,244,238)
	rect(x,y,r1*2,r1*2) // neon blue
	
	noFill()
	stroke(70,24,218)
	arc(x,y,r1,r1,0, PI + HALF_PI) // arc 

    noStroke()
	fill(255)
	ellipse(x+r1/2,y-r1/5,r1/2,r1/2) // reflection 

 


	
}





  }

}