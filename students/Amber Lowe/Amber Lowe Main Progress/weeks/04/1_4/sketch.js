

let onesyllable = ['life','love','day','one','near','man']
let twosyllable = ['nature','bread','future','death','heaven','dance']
let threesyllable = ['amazement','banana','dilemma','eletric','curious','bicycle']
let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']


let numElements = 4 //
console.log(onesyllable[0]) // prints honey
console.log(threesyllable[3]) // prints chocolate
console.log(numElements)

 let drops = []
 let y = 0


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
    rotate(j*height)
	
	fill(255,50)
	fill(random(255),random(255),random(255))
	text(msg,5,spacing*j)

	let x = width/2
    fill(255,0,0)
    let numDrop = 20

  for (var i = 0; i < numDrop; i++){

    let x = i/numDrop*width
    drops.push(createDrop(x,0))
    drip()
	
   }
}
}

function drip(){
  y++
  for (var t = 0; t < drops.length; t++){

      let drip = drops[t]
      drip.x += (noise(drip.t)-0.5)*drip.scl 
      drip.r = spacing*noise(drip.t)*drip.scl
      drip.t += 2
      stroke(drip.col)
      line(drip.x-drip.r,y+drip.r,drip.x+drip.r,y+drip.r)



    }

    if (y > height){
      background(0)
      y = 2
    }


}

function createDrop(x,y,r){

  let drop = {}
  drop.x = x 
  drop.y = y
  drop.r = r
  drop.col = [random(255),random(255),random(255),150]
  drop.t = random(10)
  drop.scl = random(5,10)

  return drop

}
}


