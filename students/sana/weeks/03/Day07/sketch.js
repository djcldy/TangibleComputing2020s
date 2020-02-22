var time = 0;

function setup() { 
  createCanvas(700, 700);
  frameRate(1000);
} 

function rainbowColor() {
    
  let Hr = hour();
  let Mn= minute();
  let Sc = second();
  let time = h*3600 + m*60 + s;

 
}


function draw() { 
noFill();
  let Sc = second();
 
    let alpha = time/60*255
   fill(alpha,0,255-alpha)
  stroke(alpha,100,alpha-101,14);
  
  let myRadius = map(Sc,0,60,0,500);

  ellipse(350, 350, myRadius);

 

  time = time + 4;
}  
  