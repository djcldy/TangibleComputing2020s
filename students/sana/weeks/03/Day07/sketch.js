
var time = 0;
function setup() { 
  createCanvas(700, 700);
  frameRate(1000);

} 


function rainbowColor() {
    
  let Hr = hour();
  let Mn= minute();
  let Sc = second();
   
}

function draw() { 

 push()
 translate(100,100)
  let alpha = time/60*255
  let Sc = second();
     stroke(90,50,154,10)
     fill(alpha,0,255-alpha,alpha)
  let radius = map(Sc,0,60,0,500)
 circle(400, 400, radius);
strokeWeight(4);
     stroke(66,5,55,100)
     fill(alpha,0,255-alpha,alpha)
 circle(300,300, radius);
strokeWeight(2);
     stroke(40,75,15,100)
     fill(alpha,0,255-alpha,alpha)
 circle(200,200, radius);
strokeWeight(1);
     stroke(80,5,45,140)
     fill(alpha,0,255-alpha,alpha)
 circle(100,100, radius);
pop()
 

}  

  