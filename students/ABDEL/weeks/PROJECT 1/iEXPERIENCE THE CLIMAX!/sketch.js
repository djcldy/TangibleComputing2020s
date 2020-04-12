let lyrics = [

        "Bayonetta,", 
             "Bayonetta,", 
             "Bayonetta,", 
             "Bayonetta,", 
             "Bayonetta,", 
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,", 
             "Bayonetta,", 
        "you",
        "mystery",
             "mystery",
        "You",
        "came",
             "came",
        "along",
             "along",
        "with", 
        "a",
        "destiny",
             "destiny",
        "This",
             "This",
        "is",
        "your",
        "life",
        "A",
        "battlefield",
             "battlefield",
             "battlefield",
        "telling",
             "telling",
             "telling",
        "you",
             "you",
             "you",
        "who",
        "you",
        "are",
             "are",
        "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
        "this",
        "is",
        "your",
        "time",
        "You",
        "gonna",
             "gonna",
        "sparkle",
             "sparkle",
        "You",
        "gonna",
             "gonna",
        "shine",
             "shine",
        "Girl",
             "Girl",
        "when",
             "when",
        "you",
        "fight",
        "It",
        "looks",
        "like",
        "a",
        "dance",
        "You",
        "are",
        "magic,",
             "magic,",
             "magic,",
        "you're",
             "you're",
             "you're",
        "magic",
             "magic",
             "magic",
             "magic",
        "C'mon,",
             "C'mon,",
        "c'mon",
             "c'mon",
        "Come",
             "Come",
        "on,",
             "on,",
        "there's",
        "only",
        "one",
        "way",
             "way",
        "Your",
        "way",
        "C'mon",
        "Come",
        "on,",
        "you",
        "know",
        "there's",
        "only",
        "one",
        "way",
        "Your",
        "way",
              "way",
        "Dance",
             "Dance",
             "Dance",
        "Fight",
             "Fight",
             "Fight",
        "Spin",
             "Spin",
        "around,",
             "around,",
        "spin",
             "spin",
        "around",
             "around",
        "Dance",
             "Dance",
             "Dance",
        "Fight",
             "Fight",
             "Fight",
        "Fly",
             "Fly",
        "higher",
             "higher",
        "fly",
             "fly",
        "higher,",
             "higher,",
        "fly",
             "fly",
        "higher",
             "higher",
             "higher",
        "Bayonetta,",
             "Bayonetta,",
             "Bayonetta,",
        "you",
        "bury",
        "your",
        "loneliness",
             "loneliness",
        "deep",
        "down",
             "down",
        "in",
        "your",
        "eyes",
             "eyes",
        "Sadness",
             "Sadness",
        "lies",
        "in",
        "your",
        "smile",
             "smile",
        "But",
        "victory",
             "victory",
        "shines",
             "shines",
        "in",
             "in",
        "your",
        "eyes",
             "eyes",
       "You're",
             "You're",
        "still",
             "still",
        "alive",
             "alive",
             "alive",
        "Deep",
              "Deep",
              "Deep",
        "deep-deep",
              "deep-deep",
             "deep-deep",
        "deep",
              "deep",
              "deep",
        "down",
             "down",
              "down",
        "Deep",
              "Deep",
        "down",
              "down",
              "down",
        "inside,",
              "inside,",
              "inside,",
        "victory",
              "victory",
             "victory",
             "victory",
        "Ooooh...",
             "Ooooh...",
             "Ooooh...",
        "...",
             "...",
              "..."
              ]


let colourz = [
         '#000000',
         '#121113',
         '#29252D',
         '#3B3244',
         '#4A3A5B',
         '#563E70',
         '#624087',
         '#6C3D9F',
         '#7336B5',
         '#772BC9',
         '#791EDD',
         '#790FED',
         '#7A00FF'
              ]


let i = 0
let j = 0 


function setup() {
  
        createCanvas(1200, 800);
        background(0)
        textAlign(CENTER,CENTER)
        textSize(20)
        textFont('Georgia');
        text('Georgia', 12, 30);
  
                }


function draw() {
  
       console.log(int(j))
       background(colourz[int(j)])
       let word = lyrics[int(i)]
  
       for (k = 0; k < j*5+1; k++){
       fill(255,25)
       textSize(70+k*4)
       text(word,width/2,height/2) 
    
                                  }

       i+= word.length/55
       if ( i > lyrics.length ) {
       i = 0
                                }
  
       if (j > 0.05){
       j-= 0.05   
                    }
  
                }


function mousePressed(){
  
       i -= 0.05
       if (j < colourz.length-1){
       j++
                                }
                       }