

let onesyllable = ['life','love','day','one','near','man']
let twosyllable = ['nature','loose','future','death','heaven','dance']
let threesyllable = ['amazement','banana','dilemma','eletric','curious','bicycle']
let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']


let numElements = 6
console.log(onesyllable[0]) 
console.log(threesyllable[3])
console.log(numElements)


function setup(){

	
  createCanvas(1600,800)
  textAlign(CENTER,CENTER)
  
  generateMeme()

}



function generateMeme(){

  let backgroundColor = getRandomColor()
  background(backgroundColor)

  let numLines = int(random())
  
  let fontColor = getRandomColor()
  fill(fontColor)
 
  let message = getMessage()
  let message2 = getMessage()
 
  let font = random(fonts)
  textFont(font)
 
  let size = width/message.length
  textSize(size)

  for (var i = 0; i < message.length; i++){

    // fill(255)
    // text(message[i],size*i,height/2)

    for (var j = 1; j < 2; j+=.1){

      push()
      translate(size*i,height/2)
      scale(j)
      fill(fontColor[0],fontColor[1],fontColor[2],50)
      text(message[i],0,0)
      scale(j*2)
      text(message2[i],10,10)


      pop()

    }


  }

}


function getMessage(){

  let name = random(onesyllable)
  let adjective = random(threesyllable)
  let noun = random(twosyllable)
  let verb = random(onesyllable)
  let message = ' Okay ' + random(onesyllable)  + ' ' + random(twosyllable) + ' is ' + random(threesyllable) + ' '
  let message2 = ' Okay ' + name  + 'from ' + adjective + ' to ' + verb 
  
  return message

}

function getRandomColor(){

  // returns randomColor
  let color = [random(255),random(255),random(255)]
  return color 

}