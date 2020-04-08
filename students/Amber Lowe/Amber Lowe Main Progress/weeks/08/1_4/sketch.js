let i = 0 
let capW = 500 // width capture 
let capH = 500 // height capture
let cellW = 50 // width cell 
let cellH = 50  // height cell 50
let cells = []

function setup(){
	
	
	createCanvas(500,500)
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
	
	for (i = 0; i < cells.length; i++){
		
		let cell = cells[i] 
		cell.update()
		cell.display()
		
	}
	
	if (random()>0.99){
			swapPosition( cells[second()], cells[int(random(cells.length))])
	}
	
 
	
}

function swapPosition(cell1, cell2){
	
	let tempX = cell1.tx 
	let tempY = cell1.ty 

	cell1.tx = cell2.tx 
	cell1.ty = cell2.ty 
	
	cell2.tx = tempX
	cell2.ty = tempY 
	
}

function Cell(x,y,tx,ty,w,h,col,id){
	
	this.id = id 
	this.x = x 
	this.y = y 
	this.tx = tx 
	this.ty = ty 
	this.w = w 
	this.h = h 
	this.col = col
	
	this.update = function(){
		
		this.x = (this.tx - this.x)*0.1 + this.x
		this.y = (this.ty - this.y)*0.1 + this.y
		
		
	} 
	
	
	this.display = function(){
		
		fill(this.col) 
		rect(this.x,this.y,this.w,this.h)
		fill(255)
		text(this.id,this.x,this.y)
		
	}
	
	
}
