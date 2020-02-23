let capture //global variable

function setup(){

  createCanvas(500,500);
  capture = createCapture(VIDEO)
 


}

function draw(){

background(234)
  //eye(50,50,[34,155,215],50)
  //eye(100,100,[255,155,215],5)
  //eye(200,25,[255,155,215],5)
  //eye(200,25,[34,0,215],10)

  let spacing = 50 //local vairable (scoped locally)

  for (var x = 0; x < width; x+= spacing){

  for (var y = 0; y < height; y+= spacing/2){

  	let color = capture.get(x,y)

  	eye(x,y,color,spacing/5)

}
}
}


function eye(x,y,color,r1){

	//let x = 200
	//let y = 50
	//let r1 = 10
	//let r2 = 10

	noStroke()

    fill(255)
	ellipse(x,y,r1*4.5,r1*2) //x,y,r1,r2
	
	fill(color)
	ellipse(x,y,r1*2,r1*2) // iris
	
	fill(0)
	ellipse(x,y,r1/4,r1/4) // pupil 

    noStroke()
	fill(255)
	ellipse(x+r1/2,y-r1/5,r1/2,r1/2) // reflection 


	
}

