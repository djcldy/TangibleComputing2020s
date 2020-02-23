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
  // noStroke()/
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
        ellipse(x,y,res,res)

    }


  }

}
