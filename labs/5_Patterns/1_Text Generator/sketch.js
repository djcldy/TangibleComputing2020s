/*
    MuW201: Tangible Computing
    Week 05 Generative Typography Examples
    https://p5.readthedocs.io/en/latest/tutorials/typography.html
    verbs, adjectives https://gist.github.com/ijmacdowell/8325491

*/


  let names = ['sana','zaadee','nivea','rana','phil']
  // let nouns = ['coffee','sea','shell','puppy','tree']
  // let verbs = ['bent','moves','eats','sits','walks']
  // let adjectives = ['famished','unsightly','cold','dry','red','tall']
  let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']


function setup(){

  createCanvas(1600,800)
  textAlign(CENTER,CENTER)

  document.getElementById("GENERATE").onclick = generateMeme // call function print message when button is pressed
  document.getElementById("SAVE").onclick = saveImage // call function print message when button is pressed
   
}

function saveImage(){

  save()

}

function generateMeme(){

  let backgroundColor = getRandomColor()
  background(backgroundColor)

  let numLines = int(random())
  
  let fontColor = getRandomColor()
  fill(fontColor)
 
  let message = getMessage()
 
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
      fill(fontColor[0],fontColor[1],fontColor[2],100)
      text(message[i],0,0)

      pop()

    }


  }

}


function getMessage(){

  let name = random(names)
  let adjective = random(adjectives)
  let noun = random(nouns)
  let verb = random(verbs)
  let message = ' the ' + noun  + ' ' + verb + ' is ' + adjective + ' '

  return message

}

function getRandomColor(){

  // returns randomColor
  let color = [random(255),random(255),random(255)]
  return color 

}