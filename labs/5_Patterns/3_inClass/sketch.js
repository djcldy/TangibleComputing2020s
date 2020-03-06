function setup(){

  createCanvas(500,500)


}


function draw(){

  background(0,0,0)


  let time = minute()

  let angle = time/60*TWO_PI // map current seconds to angle 

  push()

  translate(time/60*width,height/2)
  rotate(time)
  //scale(time)

  fill(255,0,0)
  ellipse(width/4,0,time,time)
  fill(255,0,255)
  ellipse(-width/4,0,25,25)
  fill(0,255,0)
  ellipse(0,height/4,time,time)
  fill(0,255,255)
  ellipse(0,-height/4,25,25)

   fill(0,255,0)
   ellipse(width/2,height/4,25,25)

   fill(0,0,255)
   ellipse(width/2,height*3/4,25,25)

   fill(255,255,0)
   ellipse(width/4,height/2,25,25)


  pop()

}
// let list = ['honey','flour','milk','chocolate','cereal']
// let verbs = ['sitting','slapping','kissing','running', 'seeing']
// let names = ['phil','hani','rana','nayef','russ']
// let fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier', 'Impact','Comic Sans']



// let numElements = list.length //
// console.log(list[0]) // prints honey 
// console.log(list[3]) // prints chocolate
// console.log(numElements)

// function setup(){

//   createCanvas(500,500)
//   background(0)
//   let spacing = height/numElements
//   textAlign(CENTER)
  
//   for (var i = 0; i < numElements; i++){

//     let msg = names[i] + "'s " + " and " + random(names) + "'s " + list[i] + ' is ' + verbs[i]  
//     console.log(msg)
//     let numChar = msg.length
//     let size = width/numChar
//     // console.log(size)
//     textFont(random(fonts))
//     textSize(size*2)

//     for (var j = 0; j < numChar; j++){
//       fill(255,50)
//       text(msg[j],size*j+size,spacing*i+size)
//       fill(random(255),random(255),random(255))
//       text(msg[j],size*j,spacing*i)
//     }


//   }

// }

