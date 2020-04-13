function setup(){

  createCanvas(500,500)

}

function draw(){

  background(255)

  let numPetals = second(); 
  let radius = width / 16

  push()
  translate(width/2,height/2)


  for (var angle = 0; angle < TWO_PI; angle += TWO_PI/numPetals){

    push()
    rotate(angle)
    ellipse(0,radius,radius,radius*2)
    pop()


  }

  pop()

  // pop()



}