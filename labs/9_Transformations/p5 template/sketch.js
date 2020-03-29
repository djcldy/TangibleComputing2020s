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
  let scl = sin(frameCount/100)
  stroke(255)

  push();


    rotateY(frameCount/100)
  rotateX(frameCount/100)
    // ambientMaterial(25);


  for (x = -5; x < 6; x ++){
    for (y = -5; y < 6; y ++){
      for(z =-5; z < 6; z++){

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