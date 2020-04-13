
let lyrics = [
        "Bayonetta",
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
  bgColor = color(174, 0, 255); 
  textAlign(CENTER,CENTER)
  textSize(50)
  
}

function draw() {
  
  background(bgColor)
  let word = lyrics[int(i)]
  fill(255, 255, 255)
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
  bgColor = color(255, 50, 125);
  bgColor = color(random(128), random(0), random(128));
  
}


