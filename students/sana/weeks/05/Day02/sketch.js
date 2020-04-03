let clouds = []; 
let c;  
let ground = 200   
let mario;
let gravity = 0.1   
let flowers = []    
let trees = []


function setup() {

  createCanvas(1000,700);   
  rectMode(CENTER)   
  noStroke()   
  mario = new Mario()  
  
  for ( i = 0; i < 12; i++) {

    trees.push(new Tree())
  } 
  
  for ( i = 0; i < 1000; i++) { 

    clouds.push(new Cloud())
 }


  for ( i =0;i<10;i++){     
      
     let X = 10+70*i;     
     flowers.push(new Flower (X, 80, 10)) 

   }     
 
}   


function draw() {    
  
  background(255); 
  fill(56);   
  text("score:",12,25); 
  cat(150,250,13);   
  cat(450,250,13);   
  cat(750,250,13);   


  c = color(20,70, 100,10); //cloud

  for (var i = 0; i < clouds.length; i++) { 

    clouds[i].display(c); 
    clouds[i].move();

  }

  for (var i = 0; i < trees.length; i++) { 

    trees[i].display(); 
 
  } 
     

  mario.update()   
   
  for (let i = 0; i< flowers.length;i++){   
     
     flowers[i].move();      
     flowers[i].show(); 
     
  
     if (flowers[i].contains( mario.x, mario.y, mario.r )){   
  
       flowers.splice(i,1) 
       mario.score ++  
  
    }   
  
  }  
  
}     
  
 //function drawBackground(){ 
 function Tree(x,y){
  
  this.x= random(width/3); 
  this.y= random(height);            
  this.display=function(){ 
    // background(255); 
    push(); 
    scale(1.5); 
    translate(this.x,this.y)
    fill('brown');
    rect(200,200,30,130);
    fill('green');
    ellipse(205,175,70,70);
    ellipse(205,200,50,50);
    ellipse(205,150,40,40);
    ellipse(180,170,50,70);
    pop();
  }
  
  
 
   
function Cloud(){ 

  this.x= random(width); 
  this.y= random(height/3); 
  this.radius= random(15, 50); 
  this.display=function(col){ 

    noStroke(); 
    fill(col); 
    ellipse(this.x, this.y, this.radius*2); 
  
  } 
  
  this.move=function(){ 

        this.x += random(-1,1); 
        this.y += random(-1,1); 
  } 
  
  
} 
function cat(x,y,r1) {   
push();   
scale(0.3);   
//face   
fill(255)   
stroke(27)   
strokeWeight(2)   
ellipse(x,y,r1*18,r1*13)   
//eyes   
fill(255)   
ellipse(x+r1*5,y,r1*4,r1)   
fill(255)   
ellipse(x-r1*5,y,r1*4,r1)   
//eye pupil   
fill(34,175,150)   
ellipse(x-r1*5,y,r1,r1)   
fill(34,175,150)   
ellipse(x+r1*5,y,r1,r1)   
fill(255)   
ellipse(x-r1*5,y,r1/2,r1)   
fill(255)   
ellipse(x+r1*5,y,r1/2,r1)   
//nose   
fill(0)   
stroke(0)   
ellipse(x,y+18,r1*2,8)   
//wiskes   
stroke(39)   
noFill()   
arc(x-26,y+16,r1*2,20,0,3)   
stroke(39)   
noFill()   
arc(x-26,y+24,r1*2,20,0,3)   
stroke(39)   
noFill()   
arc(x+26,y+16,r1*2,20,0,3)   
stroke(39)   
noFill()   
arc(x+26,y+24,r1*2,20,0,3)   
//mouth   
fill(37,50,99)   
stroke(22,59,20)   
arc(x,y+40,r1*2,-24,1,-4,-6)   
// ears   
fill(10)   
stroke(0)   
arc(x-50,y-105,r1*2,100,0,4)   
fill(10)   
stroke(0)   
arc(x+50,y-105,r1*2,100,0,4)   
pop();   
}   
               
function Mario(){     
  
    this.x = width/2  
    this.y = 0  
    this.vx = 0   
    this.vy = 0   
    this.ax = 0   
    this.ay = 0  
    this.mass = 100  
    this.score = 0 
    this.checkGround = function(){  
          
    if (this.y > height - ground){  
        console.log('check ground')  
        this.vy = 0  
        this.ay = -5*(gravity / this.mass)   
    this.y = height - ground  
              
    }  
          
    }  
      
    this.checkBoundary = function(){  
          
          
      if (this.x > width) this.x = 0   
      if (this.x < 0) this.x = width   
          
          
    }  
      
    this.update = function(){  
         
        this.ax = 0  
        let drag = -0.5*this.ax   
        this.ax += drag   
        this.ay += gravity / this.mass   
        this.checkGround()  
        this.vx += this.ax   
        this.vy += this.ay       
        this.x += this.vx   
        this.y += this.vy 
        this.r = 100    
          
        //translate(mouseX,mouseY);   
        push();   
        translate(this.x,this.y)   
        scale(0.2);   
        fill(245,0,0)   
  rect(0,0,220,45)   
  fill(255,0,0)   
  rect(0,10,250,55)   
  fill(255,0,44)   
  rect(0,20,350,25)   
  fill(255,50,0)   
  rect(0,55,400,50)   
fill(0)   
  square(-300,350,200,300,10,10,45)   
  fill(0)   
  square(-320,200,280,700,10,0,115)   
  fill(255,10,0)   
  rect(0,60,450,50)   
   fill(255,0,0)   
  rect(35,70,600,55)   
   fill(0)   
  rect(-60,120,700,50)   
  fill(0)   
  rect(-60,200,700,200)   
  fill(160)   
  rect(-10,150,750,40)   
  fill(177)   
  rect(100,200,600,60)   
  fill(190)   
  rect(-100,240,700,80)   
  fill(0)   
  rect(-20,290,650,50)   
  fill(0)   
  rect(-20,300,750,100)   
  fill(189)   
  rect(50,280,400,90)   
  fill(180)   
  rect(55,340,600,60)   
  fill(180)   
  rect(-50,360,700,50)   
fill(0)   
  rect(-50,385,700,50)   
  fill(0)   
  rect(0,440,400,70)   
  fill(0)   
  rect(0,500,400,70)   
  fill(0)   
  square(100,180,100,400,10)   
  fill(0)   
  square(-150,170,200,300,10,10)   
  fill(0)   
  square(-150,350,200,300,10,10,45)   
  fill(0)   
  rect(-50,450,300,80)   
  fill(0)   
  rect(-50,150,100,50)   
  fill(0)   
  rect(-50,280,200,50)   
  fill(0)   
  rect(-50,380,200,80)   
  fill(0)   
  rect(210,285,90,50) 
  
  noFill() 
  strokeWeight(5) 
  stroke(255,0,0) 
  ellipse(0,0,this.r,this.r)   
   pop();  
    this.checkBoundary()   
  }   
    
}  
   
class Flower {   
  
  constructor(X, Y, r1,speed) {  
  
      //class parameters of the flower to have random radius and movement     
      this.X = random(width);//X;    
      this.Y = random(height);//Y;      
      this.r1 =random(40,15);    
      this.speed=1;     
  
    }      
      
   contains( px, py, r) {  
  
    // this how the mouse figure out it is the flower   
    let d =dist(px,py,this.X,this.Y);   
  
      if (d < r){   
       
        return true; 
  
      } else {   
         
        return false;   
       
      }   
     
    }   
     
    move() {   
  
      //move the flower in x direction in the speed i declared up    
      this.X=this.X+this.speed;     
    
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

  
   
function mousePressed(){  
      
    
    mario.ay += -70*(gravity / mario.mass)  
    mario.ax += (mouseX-width/2)/1000    
          
    console.log('jump force', mario.ay)  
   
    for (let i= flowers.length-1; i>=0;i--){   
  
      if (flowers[i].contains(mouseX,mouseY)){   
  
        flowers.splice(i,1);   
  
      }   
    }   
  }
  }