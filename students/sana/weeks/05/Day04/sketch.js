//step 4  move flowers then delete by mouse

//move flower 

// let flower=[];   
    
// function setup() {  //distance between flowers and number of it using array 
   
// createCanvas(1000, 1000);   
//   for (let i =0;i<15;i++){  
//      let X=10+70*i;  
       
// flower[i] = new Flower (X, 80, 10);   
   
// }   
   
// }  
   
// function draw() {  //what i want to do with flower and number of it  
   
// background(255);   
   
   
// for (let i =0;i<flower.length;i++){  
    
// flower[i].move();   
   
// flower[i].show();   
   
// }  
// }   
   
// class Flower {  //class parameters of the flower to have random radius and movement 
   
// constructor(X, Y, r1,speed) {   
   
// this.X = random(width);//X; 
   
// this.Y = random(height);//Y;   
   
// this.r1 =random(40,15); 
  
// this.speed=1;  
   
// }   
   
   
// move() {  //move the flower in x direction in the speed i declared up 
//   this.X=this.X+this.speed;  
 
   
// show() {  //show flower with random color and move it back and forth in canvas 
   
// let X = width / 2;  
//    let Y = height / 2;  
//    let r1 = 20;  
//     if (this.X>width || this.X<0){this.speed=this.speed * -1;}   
//   fill(random(255), random(255), random(255));  
    
//   ellipse(this.X - r1 / 2, this.Y - r1 / 2, this.r1);  
//   ellipse(this.X + r1 / 2, this.Y - r1 / 2, this.r1);  
//   ellipse(this.X - r1 / 2, this.Y + r1 / 2, this.r1);  
//   ellipse(this.X + r1 / 2, this.Y + r1 / 2, this.r1);  
    
//   fill(random(255), random(255), random(255));  
    
//   ellipse(this.X, this.Y, this.r1);   
   
// }   
//   } 

  
  //  use the mouse to delete the flower  
let flower=[];    
     
function setup() {  //distance between flowers and number of it using array  
    
createCanvas(1000, 1000);    
  for (let i =0;i<15;i++){   
     let X=10+70*i;   
flower[i] = new Flower (X, 80, 10);    
  
}    
    
}   
function mousePressed(){// how to use the mouse to delete the flower from the list of array 
  for (let i= flower.length-1; i>=0;i--){ 
    if (flower[i].contains(mouseX,mouseY)){ 
      flower.splice(i,1); 
  } 
} 
}    
function draw() {  //what i want to do with flower and number of it   
    
background(255);    
   for (let i=0;i< flower.lenght;i++){ 
     
    } 
    
    
for (let i =0;i<flower.length;i++){   
     
flower[i].move();    
    
flower[i].show();    
    
}   
}    
    
class Flower {  //class parameters of the flower to have random radius and movement  
    
constructor(X, Y, r1,speed) {    
    
this.X = random(width);//X;  
    
this.Y = random(height);//Y;    
    
this.r1 =random(40,15);  
   
this.speed=1;   
    
}    
    
   contains(px,py){// this how the mouse figure out it is the flower 
    let d =dist(px,py,this.X,this.Y); 
    if (d<this.r1){ 
      return true; 
    }else { 
      return false; 
    } 
    } 
    
move() {  //move the flower in x direction in the speed i declared up  
  this.X=this.X+this.speed;   
  //this.Y=this.Y+this.speed;  
//this.X += random(-this.speed,this.speed);  
// this.Y += random(-this.speed,this.speed);  
  //this.Y=this.Y+this.speed;  
}    
    
show() {  //show flower with random color and move it back and forth in canvas  
    
let X = width / 2;   
   let Y = height / 2;   
   let r1 = 20;   
    if (this.X>width || this.X<0){this.speed=this.speed * -1;}    
  fill(random(255), random(255), random(255));   
     
  ellipse(this.X - r1 / 2, this.Y - r1 / 2, this.r1);   
  ellipse(this.X + r1 / 2, this.Y - r1 / 2, this.r1);   
  ellipse(this.X - r1 / 2, this.Y + r1 / 2, this.r1);   
  ellipse(this.X + r1 / 2, this.Y + r1 / 2, this.r1);   
     
  fill(random(255), random(255), random(255));   
     
  ellipse(this.X, this.Y, this.r1);    
    
}    
} 
 