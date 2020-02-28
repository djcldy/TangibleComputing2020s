function setup(){

  createCanvas(1200,700);
  background(234)
  //eye(50,50,[34,155,215],50)
  //eye(100,100,[255,155,215],5)
  //eye(200,25,[255,155,215],5)
  //eye(200,25,[34,0,215],10)

  //let spacing = 50

  //for (var x = 0; x < width; x+= spacing){

  //for (var y = 0; y < height; y+= spacing){

  	//eye(x,y,[random(255),random(255),random(255)],random(1,20))
  //}

  //}

}

function draw(){

background(234)
  //eye(50,50,[34,155,215],50)
  //eye(100,100,[255,155,215],5)
  //eye(200,25,[255,155,215],5)
  //eye(200,25,[34,0,215],10)

  let spacing = 50

  for (var x = 0; x < width; x+= spacing){

  for (var y = 0; y < height; y+= spacing){

  	eye(x,y,[random(255),random(255),random(255)],random(1,20))

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
	
	fill(10,230,60)
	ellipse(x,y,r1*2,r1*2) // white of the eye
	
	fill(0)
	ellipse(x,y,r1/4,r1/4) // pupil 

    noStroke()
	fill(255)
	ellipse(x+r1/2,y-r1/5,r1/2,r1/2) // reflection 


	
}

