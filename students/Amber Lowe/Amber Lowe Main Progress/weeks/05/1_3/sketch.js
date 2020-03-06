

let onesyllable = ['life','love','day','one','near','man']
let twosyllable = ['nature','bread','future','death','heaven','dance']
let threesyllable = ['amazement','banana','dilemma','eletric','curious','bicycle']
let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']


let numElements = 4 //
console.log(onesyllable[0]) // prints honey
console.log(threesyllable[3]) // prints chocolate
console.log(numElements)


function setup(){

	createCanvas(1200,500)
	background(13,5,70)
	let spacing = height/numElements 


for (var i = 0; i < numElements; i++){

    let msg = random(onesyllable)  +  random(twosyllable)  + ' is ' +  twosyllable[i]  +
              random(threesyllable)  +  onesyllable[i]  + ' for ' +  twosyllable[i]  +
	          random(onesyllable)  +  random(threesyllable)  + ' to ' +  onesyllable[i] 
	
	console.log(msg)

    let numChar = msg.length
    let size = width/numChar
    //console.log(size)
    textFont(random(fonts))
    textSize(size*2)

    
    for(var j = 0; j < numChar; j++ ){
	
	fill(255,50)
	fill(random(255),random(255),random(255))
	text(msg,5,spacing*j)
   }
}
}