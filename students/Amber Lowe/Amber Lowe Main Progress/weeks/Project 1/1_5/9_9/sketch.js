let i = 0 
let capW = 800 // width capture 
let capH = 800 // height capture
let cellW = 50 // width cell 
let cellH = 50  // height cell 50
let cells = []

let vid 

function setup(){
	
	
	createCanvas( 800, 800, WEBGL)
	vid = createCapture( 800, 800) 
	vid.hide()
	id = 0
	for (let x = 0; x < width; x += cellW) {
		
		for (let y = 0; y < height; y += cellH){
			
			col = [x/width*255, y/height*255, 100]
			tx = x 
			ty = y
			
			let newCell = new Cell(x,y,tx,ty,cellW,cellH,col,id) 
			
			cells.push(newCell)
			id++ 
			
		}
	}	
	
	
	
}

function draw(){
	
	background(255)

    //ambientLight(300)
    //directionalLight(255, 255, 255, 0.25, 0.25, 0)
    //pointLight(255,0, 255, width,height, 250)
    let offset = sin(frameCount/100)*200 
    let scl = (sin(frameCount/100)+2)*0.5

     stroke(255)
	push()
	scale(0.5)
	for (i = 0; i < cells.length; i++){
		
		let cell = cells[i] 
		cell.update()
		cell.display()
		
	}
	pop()
	
	if (random()>0.99){
			swapPosition( cells[second()], cells[int(random(cells.length))])
	}

}







function swapPosition(cell1, cell2){
	
	let tempX = cell1.tx 
	let tempY = cell1.ty 

    cell1.tx = cell2.tx 
	cell1.ty = cell2.ty 
	cell1.r = TWO_PI*10 
	
	cell2.tx = tempX
	cell2.ty = tempY 
	cell2.r =  TWO_PI*10
	

	
}

function Cell(x,y,tx,ty,w,h,col,id){
	
	this.id = id 
	this.x = x 
	this.y = y 
	this.px = x 
	this.py = y 
	this.tx = tx 
	this.ty = ty 
	this.tr = 0 
	this.r = 0 
	this.w = w 
	this.h = h 
	this.col = col
	
	this.update = function(){
		
		this.col = vid.get( this.px, this.py )
		this.r = (this.tr - this.r)*0.1 + this.r
		this.x = (this.tx - this.x)*0.1 + this.x
		this.y = (this.ty - this.y)*0.1 + this.y
		
		
	} 
	
	
	this.display = function(){
		
		push()
		
		translate(this.x-width/2,this.y-height/2)
		rotateZ(this.r)
		//col = this.col.push(10)
		
		fill(this.col) 
		
		//for (j = 0; j < 50; j+10){
		box(this.w,this.h,this.w)
		pop()
				
		}

		
		
	}

