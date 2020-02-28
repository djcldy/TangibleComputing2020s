

              

  var time = 0;

let capture 
          
          

function setup() { 
  createCanvas(700, 700);
  frameRate(1000);
 capture=createCapture(VIDEO)
              capture.hide()
            
} 


function rainbowColor(x,y,color,r1) {
      
  let Hr = hour();
  let Mn= minute();
  let Sc = second();
   
}

function draw() { 

background(255)

              //eye(50,50,[34,155,20],40)
              //eye(100,100,[154,15,70],20)
              //eye(200,25,[78,95,20],10)
let spacing = (50)
for (var x =0; x<width; x+= spacing){

  for (var y =0; y<height; y+= spacing/2){
    //if (randoum()>0.9)continue

    let color =capture.get(x,y)
    //fill(color
     //rect(x,y,spacing,spacing/2)

  rainbowColor(x,y,color,spacing/4)

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

  