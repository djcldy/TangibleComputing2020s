

  let list = ['honey','flour','milk','chocolate','cereal']
  let verbs = ['sitting','laughing','kissing','running','seeing']
  let names = ['phil','amber','sana','abd','moh']
  let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']

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
    textFont(random(fonts))
    //console.log(size)
    textSize(size*2)
    for (var j = 0; j < numchar;j++){
      fill(255,50)
       text(msg[j],size*j+size,spacing*i+size)
    fill(random(255),random(255),random(255))
    text(msg[j],size*j,spacing*i)

  }
}

}
