let capture //global variable

function setup(){

  createCanvas(600,500);
  capture = createCapture(VIDEO)
  capture.hide();
 


}

function draw(){ 

background(234)
  //eye(50,50,[34,155,215],50)
  //eye(100,100,[255,155,215],5)
  //eye(200,25,[255,155,215],5)
  //eye(200,25,[34,0,215],10)

  let spacing = 10 //local vairable (scoped locally)
  
  for (var x = 0; x < width; x+= spacing){
  let s = second()
  let diff = Math.abs(s/60 - x/width*2)

    if (diff > 0.1) continue


  for (var y = 0; y < height; y+= spacing/2){

  	let color = capture.get(x,y)

  	layers(x,y,color,spacing*10)

}
}
}


function layers(x,y,color,r1){

	noStroke()
	fill(color)
	arc(x,y,r1*2,r1*2,0, PI + HALF_PI) // iris
	
	

	
}