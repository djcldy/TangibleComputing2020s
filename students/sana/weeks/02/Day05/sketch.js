function setup(){

             // do not change anything in setup 

              createCanvas(1000,1000);
              TenThousandX()

          }

          function TenThousandX(){



    let alphabet = 'codingisdifficult'
  noFill()

  for (var x =0; x < 10000; x++) {

      let index = Math.floor(random(alphabet.length))
      let letter = alphabet[index]
      fill(random(180),random(225),random(195),66)
      textSize(Math.floor(random(width/6)))
      text(letter,random(width),random(height))
ellipse(random(12000),random(16000),random(4000),random(5550),6000)


 
    
  
  
  }
}

