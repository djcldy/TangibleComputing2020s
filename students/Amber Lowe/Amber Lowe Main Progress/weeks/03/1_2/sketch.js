let capture //global variable

function setup(){

  createCanvas(600,400);
  capture = createCapture(VIDEO)
  capture.hide();
 


}

function draw(){

background(234)
  //eye(50,50,[34,155,215],50)
  //eye(100,100,[255,155,215],5)
  //eye(200,25,[255,155,215],5)
  //eye(200,25,[34,0,215],10)

  let spacing = 50 //local vairable (scoped locally)

  for (var x = 0; x < width; x+= spacing){

  //for (var y = 0; y < height; y+= spacing/2){

  	let y = second()/60*height

  	let color = capture.get(x,y)

  	petal(x,y,color,spacing/2)

}
}



function petal(x,y,color,r1){

	//let x = 200
	//let y = 50
	//let r1 = 10
	//let r2 = 10

	noStroke()

    fill(255)
	ellipse(x,y,r1*2,r1*2)//x,y,r1,r2
	
	fill(color)
	ellipse(x,y,r1*2,r1*2) // iris
	
	rotate(y/2)
	fill(255,4,40)
	arc(x,y,r1,r1,0, PI + HALF_PI) // pupil 

    //noStroke()
	fill(255)
	ellipse(x+r1/2,y-r1/5,r1/2,r1/2) // reflection 


	
}

