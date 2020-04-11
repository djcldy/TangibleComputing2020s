let numX = 25 
let numY = 60
let xStep, yStep 
let capture

let i = 0 

function setup(){

	createCanvas(500,500)
	capture = createCapture(500,500)
	capture.hide()
	xStep = width/numX
	yStep = height/numY 
	

}


function draw(){

	let i = int(second()/60*numX) // int returns a whole number 
	console.log(i)

	for (var row = 0; row < numX; row++ ){

		let offX = (i+row)

		if (offX > numX){
			offX = offX - numX 
		}

		for (var col = 0; col < numY; col ++ ){

			let yy = col*yStep
			let xx = offX*xStep 
			//console.log(xx,yy)
 
		    let color = capture.get(offX*xStep,col*yStep) // returns color 
		    fill(color)
			//console.log(color)
			rect(row*xStep,col*yStep,xStep,yStep)

	
		}

	}

}
