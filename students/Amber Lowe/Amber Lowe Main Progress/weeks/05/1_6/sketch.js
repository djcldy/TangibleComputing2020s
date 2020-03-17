

let onesyllable = ['life','run','day','one','near','luck']
let twosyllable = ['corrupt','disease','future','death','escape','fall']
let threesyllable = ['destruction','creation','dilemma','eletric','curious','vehicle']
let fonts = ['Georgia', 'Verdana', 'Courier', 'Impact','Consales']


let numElements = 4 //
console.log(onesyllable[0])
console.log(threesyllable[3]) 
console.log(numElements)


function setup(){

	createCanvas(1200,500)
	background(0)
	let spacing = height/numElements 


for (var i = 0; i < numElements; i++){

    let msg = random(onesyllable)  +  random(twosyllable)  + ' is ' +  twosyllable[i*4]  +
              
              random(threesyllable)  +  onesyllable[i]  + ' for ' +  twosyllable[i]  +
	          
	          random(onesyllable)  +  random(threesyllable)  + ' to ' +  onesyllable[i] 
	
	console.log(msg)
    rotate(i*sin(100))
    let numChar = msg.length
    let size = width/numChar
    //console.log(size)
    textFont(random(fonts))
    textSize(size*5)

    
    for(var j = 0; j < numChar; j++ ){
	
	fill(255,110,199)
	text(msg,1,spacing*j)

	fill(70,102,255)
	text(msg,5,spacing*j)
   }
}
}