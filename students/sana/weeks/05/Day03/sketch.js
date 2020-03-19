// step 3: creating object to collect by mario 
//i will draw simple flower then put it in a class then use array to make multiple of it then to give it behaviour in the next step




//first step draw a flower and make it as function
// function setup() {
//   createCanvas(400, 400);

//   background(255);
 
// }

// function draw(){
//   flower();

//   function flower(){
  
//   let X = width / 2;;
//   let Y = height / 2;
//   let r1 = 100;
  
//   fill(random(255), random(255), random(255));
  
//   ellipse(X - r1 / 2, Y - r1 / 2, r1);
//   ellipse(X + r1 / 2, Y - r1 / 2, r1);
//   ellipse(X - r1 / 2, Y + r1 / 2, r1);
//   ellipse(X + r1 / 2, Y + r1 / 2, r1);
  
//   fill(random(255), random(255), random(255));
  
//   ellipse(X, Y, r1);
// }

// }


//step two make flower a class


  
let flower; 
 
function setup() { 
 
createCanvas(600, 400); 
 
flower = new Flower(200, 200, 100); 
 

} 
 
 
function draw() { 
 
background(255); 
 
flower.move(); 
 
flower.show(); 
 
 
} 
  
class Flower { 
 
constructor(X, Y, r1) { 
 
this.X = X; 
 
this.Y = Y; 
 
this.r1 = r1; 
 
} 
 
move() { 
 
this.X = this.X + random(-3, 4); 
 
this.Y = this.Y + random(-3, 4); 
 
} 
 
show() { 
 
 let X = width / 2;;
   let Y = height / 2;
   let r1 = 100;
  
  fill(random(255), random(255), random(255));
  
  ellipse(this.X - r1 / 2, this.Y - r1 / 2, this.r1);
  ellipse(this.X + r1 / 2, this.Y - r1 / 2, this.r1);
  ellipse(this.X - r1 / 2, this.Y + r1 / 2, this.r1);
  ellipse(this.X + r1 / 2, this.Y + r1 / 2, this.r1);
  
  fill(random(255), random(255), random(255));
  
  ellipse(this.X, this.Y, this.r1); 
 
} 
 
} 

//step 3 make array of flowers 
//step 4 give the flowers certain behaviours to interact with mario
