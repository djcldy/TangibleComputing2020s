h = 9

setup=draw=_=>{
	m = millis()*1e-3
	createCanvas(w=255,w)
	for (x = 0; x < w; x+=h){
		for (y = 0; y < w; y+=h){
			push()
			translate(x,y)
			rotate(noise(x,y,m))
			fill(x,y,h)
			for(i=0;i<9;i++) rect(i,i,h,h)
			pop()
		}
	}
}


