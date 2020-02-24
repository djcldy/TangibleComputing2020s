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

  	rect(x,y,spacing,spacing/2)

}
}
}



