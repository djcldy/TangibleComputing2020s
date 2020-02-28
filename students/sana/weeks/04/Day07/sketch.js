

              

  var time = 0;

let capture 
          
          

function setup() { 
  createCanvas(700, 700);
  frameRate(1000);
 capture=createCapture(VIDEO);

              capture.hide();
            
} 


function rainbowColor(x,y,color,radius) {
      
  let Hr = hour();
  let Mn= minute();
  let Sc = second();
   

background(255)

let spacing = (50)
 for (var x =0; x<width; x+= spacing){

   for (var y =0; y<height; y+= spacing/2){
  

 let color =capture.get(x,y)
   

  rainbowColor(x,y,color,spacing/4)
   image(capture, 0, 0, 320, 240);
  filter(INVERT);
}

 }
 }

function draw() { 
 
 translate(100,100)
  let rainbowColor= time/60*255
  let Sc = second();
  let radius = map(Sc,0,60,0,500)
  stroke(90,50,154,10)
     fill(34,29,10,100)
  circle(400, 400, radius);
strokeWeight(4);
     stroke(66,5,55,100)
     fill(34,67,90,100)
 circle(300,300, radius);
strokeWeight(2);
     stroke(40,75,15,100)
     fill(232,49,100,18)
 circle(200,200, radius);
strokeWeight(1);
     stroke(80,5,45,140)
     fill(85,49,30,100)
 circle(100,100, radius);

 

}  




  