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

let i = 0

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0)
  textAlign(CENTER,CENTER)
  textSize(96)
  
}

function draw() {
  
  background(0)
  let word = lyrics[int(i)]
  fill(255)
  text(word,width/2,height/2) 

  i+= word.length/100
  
  if ( i > lyrics.length ) {
    
    i = 0
    
  }
  
}

function mousePressed(){
  
  // i = i/2
    // i = i*0.9
  i -= 0.005
  
  
  
}

