function setup(){

  createCanvas(800,800)
  TenThousandX(100)

}

// Example: Alphabet

function TenThousandX(t){

  let dior = 'DIOR'
  noFill()

  for (var x =0; x < 10000; x++) {

      let index = Math.floor(random(dior.length))
      let letter = dior[index]
      fill(random(7),random(18),random(20),97)
    
      textSize(Math.floor(random(width/75)))
      text(letter,random(width),random(height))


  }

}
