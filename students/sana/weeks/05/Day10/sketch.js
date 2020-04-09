// final step 10 adding score counter,time and music ,enjoy:)

let clouds = []; 
let c 
let ground = 200 
let mario 
let gravity = 0.1 
let flower=[]; 
let score 
//let sound; 
  
//function preload() { 
//soundFormats('mp3', 'ogg'); 
//sound=loadSound('mario_theme.mp3'); 
//} 
  
  
function setup() { 
  
  createCanvas(1000,700); 
  
  //sound.play(); 
  rectMode(CENTER) 
  noStroke() 
  console.log(width,height) 
    
  score=0; 
   
  for ( i = 0; i < 1000; i++) { 
  
   clouds[i] = new Cloud(); 
  
  } 
  
  for (let i =0;i<20;i++){ 
  
     let X=10+70*i; 
     flower[i] = new Flower (X, 80, 10); 
  
   } 
  
   mario = new Mario() 
  
} 
  
function draw() { 
  updateBackground() 
  mountains(); 
  updateTrees() 
  land(0,0,width,height); 
  updateClouds() 
   sunShine(); 
  updateFlowers() 
  mario.update() 
  updateScore(mario.score) 
  

} 
  
function updateBackground(){ 
  
  background(215)  
   
} 
  
function updateTrees(){ 
  
  tree(100,100,30); 
  tree(200,300,40); 
  tree(300,200,70); 
  tree(400,400,60); 
  tree(500,500,20); 
  tree(600,600,80); 
} 
  
function updateScore(score){ 
fill(0); 
textSize(28); 
text("score:",12,28); 
fill(130,20,27); 
text(score,95,28); 
  
  if (mario.score==20){ 
  fill(0); 
    text("YOU WON!"); 
    textSize(40); 
  
  } 
  cat(150,250,13) 
  cat(500,250,13) 
  cat(850,250,13) 
  
  
} 
  
function updateClouds(){ 
  
  c = color(20,70, 100,10); //cloud 
  
  for (var i = 0; i < clouds.length; i++) { 
  
    clouds[i].display(); 
    clouds[i].move(); 
  
  } 
  
  
} 
function updateFlowers(){ 
  for (let i =0;i<flower.length;i++){ 
  
     flower[i].move(); 
     flower[i].show(); 
  
     if (flower[i].contains( mario.x, mario.y, mario.r )){ 
  
       flower.splice(i,1) 
       mario.score ++ 
  
    } 
  
  } 
  
} 
  
function sunShine() { 
  this.x = 50 
  this.y = 50 
    noStroke() 
    fill(255, 225, 60,120) 
    ellipse(this.x+850, this.y + 20, 100, 100) 
  
  } 
  
function mountains(){ 
  
    this.x=360; 
    this.y=100; 
    push(); 
    scale(.6); 
    translate(this.x,this.y) 
    fill(100, 50, 40,90); 
    triangle(x, 80, 760, 500, -10, 500); 
    fill(60, 59, 40,60); 
    triangle(x-260, 170, 500, 500, -380, 500); 
    fill(85, 60, 10); 
    triangle(x+300, 40, 1000, 500, -10, 500); 
    fill(90, 79, 40); 
    triangle(x+400, 300, 1000, 500, 100, 500); 
    fill(90, 79, 40) 
    rect(x+600,y+360,1000,40) 
    fill(40, 79, 40) 
    rect(x-700,y+400,x*10,40) 
    pop(); 
} 
  
  
function Cloud(){ 
  
     this.x= random(width); 
     this.y= random(height/6); 
     this.radius= random(15, 50); 
     this.display=function(){ 
  
      noStroke(); 
      fill(c); 
      ellipse(this.x, this.y, this.radius*2); 
  
    } 
  
    this.move=function(){ 
  
        this.x += random(-1,1); 
        this.y += random(-1,1); 
  
    } 
  
  
} 
  
  
  
function tree(x,y,diameter){ 
  
   this.x= 205; 
   this.y= 0; 
   this.diameter=random(50,70); 
  
   push(); 
   scale(1.5); 
   fill('brown'); 
   rect(x-4,200,30,80); 
   fill('green'); 
   ellipse(x,175,70,40,diameter); 
   ellipse(x+5,200,50,50,diameter); 
   ellipse(x,150,40,40,diameter); 
   ellipse(x-20,170,70,diameter); 
   ellipse(x-10,180,60,diameter); 
   fill('red') 
   ellipse(x,200,10,10); 
   ellipse(x+10,150,15,15); 
   ellipse(x-35,170,12,12); 
   pop(); 
  
} 
  
  
function land(x,y,w,h){ 
rectMode(CENTER) 
  
  push(); 
  fill('green'); 
  rect(0,600,w,h/9); 
  fill(14,120,40); 
  rect(700,600,w,h/9); 
  fill(30); 
  rect(100,600,w,h/16); 
   fill(30); 
  rect(600,600,w,h/16); 
  
   
  pop(); 
  
} 
  
  
function cat(x,y,r1) { 
  
  push(); 
  scale(0.3); 
  //face 
  fill(185,140,30) 
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
  
      let groundLevel = 500 
  
      if (this.y > groundLevel){ 
        this.vy = 0 
        this.ay = 0 
        this.ay = -5*(gravity / this.mass) 
        this.y = groundLevel 
      } 
  
    } 
  
    this.checkBoundary = function(){ 
  
  
      if (this.x > width) this.x = 0 
      if (this.x < 0) this.x = width 
  
  
    } 
    this.display = function(){ 
  
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
    } 
  
    this.update = function(){ 
  
        this.ax = 0 
        let drag = -0.5*this.ax 
        this.ax += drag 
        this.ay += gravity / this.mass 
        this.vx += this.ax 
        this.vy += this.ay 
        this.x += this.vx 
        this.y += this.vy 
        this.r = 100 
        this.checkGround() 
        this.checkBoundary() 
        this.display() 
  
    } 
  
} 
  
class Flower { 
  
  constructor(X, Y, r1,speed) { 
  
      
      this.X = random(width); 
      this.Y = random(height/2); 
      this.r1 =random(40,15); 
      this.speed=1; 
  
    } 
  
   contains( px, py, r) { 
  
    let d =dist(px,py,this.X,this.Y); 
  
      if (d < r){ 
  
        return true; 
  
      } else { 
  
        return false; 
  
      } 
  
    } 
  
    move() { 
  
      this.X=this.X+this.speed; 
  
} 
  
show() {  
  
let X = width / 2; 
   let Y = height/2 ; 
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
  
    for (let i= flower.length-1; i>=0;i--){ 
  
    if (flower[i].contains(mouseX,mouseY)){ 
  
       flower.splice(i,1); 
  
    } 
  
  } 
  
} 
 
 