let list = ['honey','flour','milk','chocolate','cereal']
let verbs = ['sitting','slapping','kissing','running','seeing']
let names = ['bernice','delilah','karen','russ','casper']
let fonts = ['Arial','Georgia','Times New Roman','Verdana','Courier','Impact']
let numElements = list.length //
console.log(list[0]) //prints honey
console.log(list[2])
console.log(numElements)

function setup(){
	createCanvas(500,500)
	background(0)
	let spacing = height/numElements

for (var i = 0; i < numElements; i++){

	let msg = names[i] + "'s" + " and " + random(names) + "'s" + " " + random(list)

console.log(msg)
let numChar = msg.length 
let size = width/numChar
textFont(random(fonts))
textSize(size*2)

for (var j = 0; j < numChar; j++){
fill(255,50)
	fill(random(255),random(255),random(255))
	text(msg[j],size*j,spacing*i)
	fill(255)
text(msg,5,spacing*i)

}
}

}