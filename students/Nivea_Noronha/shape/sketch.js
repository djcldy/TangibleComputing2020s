let capture

function setup(){

 createCanvas(500,500)
createCapture(VIDEO)
capture = createCapture(VIDEO)

}

function draw(){

  background(255)



 /* eye(10,10,[74,15,66],10)
  eye(50,50,[84,155,44],44)
  eye(100,100,[34,55,77],66) */

  let spacing =50

  for(var x = 0; x < width; x+= spacing) {

    for(var y = 0; y < width; y+= spacing/2) {

      let color = capture.get(x,y)

    eye(x,y,color,spacing/5)
  }


}


}

function eye(x,y,color,r1){

  
//let r2 = 10


fill(255)
ellipse(x,y,r1*4,r1*2) //white

fill(color)
ellipse(x,y,r1*2,r1*2) //iris


fill(0)
ellipse(x,y,r1,r1) //pupil

fill(255)
ellipse(x+r1/2,y-r1/2,r1/2,r1/2)



}


/*ellipse()
ellipse() */











