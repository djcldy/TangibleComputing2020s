//  https://p5js.org/examples/form-3d-primitives.html


function setup() {
  createCanvas( windowWidth, windowHeight, WEBGL);



}

function draw() {
  

  background(0)

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


  for (x = -3; x < 4; x ++){
    for (y = -3; y < 4; y ++){
      for(z =-3; z < 4; z++){

        push()


        scale(scl)


        translate(offset*x,offset*y,offset*z,100)

        rotateY(frameCount/100)
        rotateX(frameCount/100)
        
        fill(125+x*25,125+y*25,125+z*25)
        box(50)
        pop()

      }
      

    
    }

  }

  

  pop()




}