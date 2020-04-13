//  https://p5js.org/examples/form-3d-primitives.html




function setup() {

  createCanvas( windowWidth, windowHeight, WEBGL);


}

  






function draw(){

  background (0);
 stroke(178, 102, 0);

 strokeWeight(4);
fill(6);
smooth(8);

  let numPetals = second(); 
  let radius = width / 3

  push()
  translate(width/90,height/8)


  for (var angle = 0; angle < TWO_PI; angle += TWO_PI/numPetals){

    push()
    rotate(angle)
    ellipse(0,radius,radius,radius*2)
    pop()


  }

  pop()

function eye(x,y,color,r1){

  
//let r2 = 10


fill(255)
ellipse(x,y,r1*4,r1*2) //white

fill(color)
ellipse(x,y,r1*2,r1*2) //iris


fill(0)
ellipse(x,y,r1,r1) //pupil

fill(255)
ellipse(x+r1/2,y-r1/2,r1/2,r1/2)



}





  // pop()



}











