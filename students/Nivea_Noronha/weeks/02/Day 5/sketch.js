function setup(){

  createCanvas(800,800)
  TenThousandX()

}

// Example: Alphabet

function TenThousandX(t){

  let binary = '10'
  noFill()

  for (var x =0; x < 10000; x++) {

                let a= sin(x/100)*width/2
                let b= x/10000*height

      let index = Math.floor(random(binary.length))
      let letter = binary[index]
      fill(random(255),random(10),random(122),97)
    
      textSize(Math.floor(random(width/75)))
      text(letter,random(width),random(height))


  }

}




