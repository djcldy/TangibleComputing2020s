let lyrics = [
  
        "Bayonetta", 
        "you",
        "mystery",
        "You",
        "came",
        "along",
        "with", 
        "a",
        "destiny",
        "This",
        "is",
        "your",
        "life"
]

let colourz = [
                [0],
                '#FF0000',
                [50,0,50],
                [100,0,100],
                [255,0,255]
            ]

let i = 0
let j = 0 

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0)
  textAlign(CENTER,CENTER)
  textSize(96)
  
}

function draw() {
  
  // console.log(j)
  
  // frameCount
  
  console.log(int(j))
  background(colourz[int(j)])
  let word = lyrics[int(i)]
  
  for (k = 0; k < j*5+1; k++){
      fill(255)
      textSize(96+k*10)
    push()
    rotate(k*0.1)
    translate(k*20,k*20)
      text(word,width/2,height/2) 
    pop()
  }

  i+= word.length/100
  
  if ( i > lyrics.length ) {
    
    i = 0
    
  }
  
  if (j > 0.05){
    
  
    
    j-= 0.05
    
  }
  
}

function mousePressed(){
  
  // i = i/2
    // i = i*0.9
  i -= 0.005
  
  if (j < colourz.length-1){
    j++
  }

  
}

