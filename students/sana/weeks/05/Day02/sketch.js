let ground = 200 
 let mario
 let gravity = 0.1 
let loadImg;
function setup() { 
  createCanvas(1000, 1000); 
  rectMode(CENTER) 
  noStroke() 
  	mario = new Mario()

} 
function draw() {     
 loadImg = "background: url("https://previews.123rf.com/images/vitaliyvill/vitaliyvill1609/vitaliyvill160900011/62999356-seamless-game-background-flat-style-2d-game-application.jpg");
  // gif_createImg = createImg("https://media.giphy.com/media/3ohfFIJ9M9XCUkE6Na/giphy.gif");
  



//background(255); 
fill(255); 
textSize(30); 
text("score:",12,25); 
cat(150,250,13); 
cat(450,250,13); 
  cat(750,250,13); 
  
  mario.update() 
	  
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
pop();
this.checkBoundary() 
} 
  
 }
  function mousePressed(){
	
  
	mario.ay += -50*(gravity / mario.mass)
	mario.ax += (mouseX-width/2)/1000  
		
	console.log('jump force', mario.ay)
	
 }


