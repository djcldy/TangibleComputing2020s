//  https://p5js.org/examples/form-3d-primitives.html

let c1, c2


function setup() {

  createCanvas( windowWidth, windowHeight, WEBGL);

  c1 = [random(255),random(255),random(255)]
  c2 = [random(255),random(255),random(255)]

}



function draw() {
  
  background(0)
    drawGradient()


  ambientLight(100);
  directionalLight(255, 255, 255, 0.25, 0.25, 0);
  pointLight(255,0, 255, width,height, 250);

  let offset = sin(frameCount/100)*100 
  let scl = sin(frameCount/100)+1
  stroke(255)

  push();


    rotateY(frameCount/100)
  rotateX(frameCount/100)
    // ambientMaterial(25);


  for (x = -1; x < 2; x ++){
    for (y = -1; y < 2; y ++){
      for(z =-1; z < 2; z++){

        push()


        scale(1)


        translate(offset*x,offset*y,offset*z,100)

        rotateY(frameCount/100)
        rotateX(frameCount/100)
        
        fill(125+x*25,125+y*25,125+z*25)
        box(5)
        pop()

      }
      

    
    }

  }

  

  pop()




}

function drawGradient(){


  strokeWeight(5)

  push()
  rotate(frameCount/100)
  translate(-width/2, -height/2)
  for (var i = -height/2; i < height+height/2; i +=5){

    let t = i/height
    let u = 1 - t  
    col = [c1[0]*t + c2[0]*u, c2[1]*t + c2[1]*u, c2[2]*t + c2[2]*u]
    stroke(col)
    line(-width/2,i,width+width/2,i)

  }
  pop()



}