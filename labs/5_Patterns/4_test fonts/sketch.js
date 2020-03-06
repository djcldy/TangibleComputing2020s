
let list = ['honey','flour','milk','chocolate','cereal']
let verbs = ['sitting','slapping','kissing','running', 'seeing']
let names = ['phil','hani','rana','nayef','russ']
let fonts = ['Trade Winds','Times New Roman']

let numElements = list.length //


function setup(){

  createCanvas(500,500)
  background(0)
  let spacing = height/numElements
  textAlign(CENTER)

  let msg = random(names) + "'s " + " and " + random(names) + "'s " + random(list) + ' is ' + random(verbs)  
  let numChar = msg.length
  let size = width/numChar
  textFont(random(fonts))
  textSize(size*2)

  for (var j = 0; j < numChar; j++){
 
      fill(255)
      text(msg[j],size*j+size,width/2)

    }  

}

