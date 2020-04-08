

function setup(){

	createCanvas(500,500)

}

function draw(){

	background(255)

	
	let txt = getInputValue()

	if (txt.includes('rana') ){

		background(255,0,0)

	}

	if (txt.includes('circle')){

		fill(255,0,255)

		circle(100,100,100)


	}

	textSize(12)
	text(txt,50,50)



}




function getInputValue(){

	// Selecting the input element and get its value 
	return inputVal = document.getElementById("fname").value


}