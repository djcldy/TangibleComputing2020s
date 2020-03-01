

  let list = ['honey','flour','milk','chocolate','cereal']
  let verbs = ['sitting','laughing','kissing','running','seeing']
  let names = ['phil','amber','sana','abd','moh']
  let numElements= list.length
  console.log(list[0])
  console.log(list[3])
  console.log(numElements)

  function setup(){
    createCanvas(500,500)
    background(0)
    let spacing  = height/numElements
    textAlign(CENTER)

  for (var i = 0; i < numElements; i++){
    //console.log(list[i])

    //let msg = 'my'+ list[i]
    let msg = names[i]+"'s " + "and " + random(names)+ "'is "+ verbs[i]
    console.log(msg)

    let numchar = msg.length
    let size =width/numchar
    //console.log(size)
    textSize(size*2)
    fill(255)
    text(msg,width/2,spacing*i)
  }
}


