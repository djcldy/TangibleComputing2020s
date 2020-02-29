let t =0


function setup() {
  
  createCanvas(800, 800);
  rectMode(CENTER)
  noStroke()

}


function draw(){

  background(255);

  drawMario(t) // SP: organize into smaller functions. a function should be 10-20 lines maximum

  pop()
  t+=0.01


}

function drawMario(t){

  // SP: right now this is impossible to understand and difficult to edit
  // SP: break down into smaller functions 

  drawHat(t)
  // can you fix the rest of the code by making smaller functions

  fill(255,10,0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(0,60,450,50)
  pop()
   fill(255,0,0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(35,70,600,55)
  pop()
   fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-60,120,700,50)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-60,200,700,200)
  pop()

  fill(160)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-10,150,750,40)
  pop()
  fill(177)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(100,200,600,60)
  pop()
  fill(190)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-100,240,700,80)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-20,290,650,50)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-20,300,750,100)
  pop()
  fill(189)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(50,280,400,90)
  pop()
  fill(180)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(55,340,600,60)
  pop()
  fill(180)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,360,700,50)
  pop()

  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,385,700,50)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(0,440,400,70)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(0,500,400,70)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  square(100,180,100,400,10)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  square(-150,170,200,300,10,10)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  square(-150,350,200,300,10,10,45)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,450,300,80)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,150,100,50)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,280,200,50)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(-50,380,200,80)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(210,285,90,50)
  pop()
  fill(0)
  push()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  square(-300,350,200,300,10,10,45)
  pop()
  fill(0)
  push()
  translate(sin(t)*width/4+width/2,height*0.2)
  square(-320,200,280,700,10,0,115)
  pop()

}


function drawHat(t){

  // this code is written inefficiently - you only need to call push() and pop() once 
  // everything is moving together

  // SP: Correct way

  push()
  fill(245,0,0)
  translate(sin(t)*width/4+width/2,height*0.2)
  rect(0,0,220,45)
  fill(255,0,0)
  rect(0,10,250,55)
  fill(255,0,44)
  rect(0,20,350,25)
  fill(255,50,0)
  rect(0,55,400,50)
  pop()

  // SP: works but inefficient

  // fill(245,0,0)
  // push()
  // translate(sin(t)*width/4+width/2,height*0.2)
  // rect(0,0,220,45)
  // pop()
  // fill(255,0,0)
  // push()
  // translate(sin(t)*width/4+width/2,height*0.2)
  // rect(0,10,250,55)
  // pop()
  //  fill(255,0,44)
  // push()
  // translate(sin(t)*width/4+width/2,height*0.2)
  // rect(0,20,350,25)
  // pop()
  //  fill(255,50,0)
  // push()
  // translate(sin(t)*width/4+width/2,height*0.2)
  // rect(0,55,400,50)
  // pop()

}