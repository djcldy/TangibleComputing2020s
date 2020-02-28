let capture 
//neon pink girds , diagonal and incremental movement 

function setup(){ 

  createCanvas(500,500)
  capture = createCapture(VIDEO)
  capture.hide() // hides capture
  rectMode(CENTER)
  noStroke()


}

function draw(){

  background(255)
  stroke(0)

  let x = second()/60*width
  line(x,0,x,height) // verticle line = seconds 

  let y = minute()/60*height
  line(0,y,width,y)

  line(0,0,x,y)



  // eye( 50,50,[34,155,215],50 )
  // eye( 100,100,[255,155,215],5 )

  // let spacing = 10
  // let seconds = second()

  // for (var x = 0; x < width; x+= spacing){

  //   let s = second()
  //   // let diff = Math.abs(s/60 - x/width)
  //   // if (diff > 0.2) continue


  //   for (var y = 0; y < height; y+= spacing/2){

  //     if (random()>0.9) continue

  //     let color = capture.get(x,y)
  //     fill(color)
  //     rect(x,y,spacing,spacing/2)
  //     // eye( x, y,color, spacing/4 )



  //   }

  // }
}

function eye(x,y,color,r1){

  fill(255)
  ellipse(x,y,r1*4,r1*2) // white of the eye 

  fill(color)
  ellipse(x,y,r1*2,r1*2) // iris 

  fill(0)
  ellipse(x,y,r1,r1) // pupil x,y,r1,r2 

  fill(255)
  ellipse(x+r1/2,y-r1/2,r1/2,r1/2) // pupil x,y,r1,r2 

}